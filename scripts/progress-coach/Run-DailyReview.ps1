<#
.SYNOPSIS
    Runs the Student Progress Coach daily review headlessly. Invoked by the
    "Progress Coach Daily Review" scheduled task; safe to run by hand to test.

.DESCRIPTION
    Feeds daily-review-prompt.md to `claude -p` with the working directory set
    to the repo root. Permissions are a narrow allowlist rather than
    --dangerously-skip-permissions: file tools plus git only. If the review
    ever needs a tool outside the allowlist it is denied and logged, not
    silently granted.

    Output goes to %LOCALAPPDATA%\progress-coach\logs\review-<stamp>.log,
    deliberately outside the repo so the coach's own logs never show up as
    uncommitted changes in the next review.

    ASCII only, on purpose. Windows PowerShell 5.1 decodes UTF-8 files that
    have no BOM as ANSI, and a UTF-8 em dash then ends in byte 0x94, which
    cp1252 maps to a right double quote -- a character PowerShell treats as a
    string delimiter. One stray em dash in a comment can break parsing.

.PARAMETER WhatIfReview
    Prepends a dry-run instruction: the review analyzes and reports but writes
    nothing and commits nothing. Use this for the first run.
#>
[CmdletBinding()]
param(
    [switch]$WhatIfReview
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# scripts\progress-coach\ -> repo root
$RepoRoot   = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
$PromptFile = Join-Path $PSScriptRoot 'daily-review-prompt.md'

$LogDir = Join-Path $env:LOCALAPPDATA 'progress-coach\logs'
if (-not (Test-Path $LogDir)) {
    New-Item -ItemType Directory -Path $LogDir -Force | Out-Null
}
$Stamp   = Get-Date -Format 'yyyy-MM-dd_HHmmss'
$LogFile = Join-Path $LogDir "review-$Stamp.log"

function Write-Log {
    param([string]$Message)
    $line = "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Message
    Add-Content -Path $LogFile -Value $line -Encoding utf8
}

Write-Log "=== Progress Coach daily review ==="
Write-Log "repo:   $RepoRoot"
Write-Log "dryrun: $($WhatIfReview.IsPresent)"

if (-not (Test-Path $PromptFile)) {
    Write-Log "FATAL: prompt file not found at $PromptFile"
    exit 2
}

# Resolve the CLI. Task Scheduler does not always inherit the user PATH, so
# fall back to the known install location before giving up.
$Claude = (Get-Command claude -ErrorAction SilentlyContinue).Source
if (-not $Claude) {
    $Fallback = Join-Path $env:USERPROFILE '.local\bin\claude.exe'
    if (Test-Path $Fallback) { $Claude = $Fallback }
}
if (-not $Claude) {
    Write-Log "FATAL: 'claude' not found on PATH or at ~\.local\bin\claude.exe"
    exit 3
}
Write-Log "claude: $Claude"

# -Encoding UTF8 matters: the prompt file contains non-ASCII punctuation, and
# 5.1 would otherwise decode it as ANSI and hand Claude mojibake.
$Prompt = Get-Content -Raw -Encoding UTF8 -Path $PromptFile
if ($WhatIfReview) {
    $DryRun = @"
DRY RUN. Do the full analysis but make NO file changes and NO commit. Instead
show the exact PROGRESS.md entry you would prepend, the exact stats.jsonl line
you would append (or state that you would append none), and the exact
state.json fields you would update.

"@
    $Prompt = $DryRun + $Prompt
}

# Narrow allowlist: the coach reads/writes .progress\ and PROGRESS.md and runs
# git. 'date' is needed for the last_run_at timestamp.
$AllowedTools = @(
    'Read', 'Write', 'Edit', 'Glob', 'Grep',
    'Bash(git *)', 'Bash(date *)'
)

Push-Location $RepoRoot
try {
    # NOTE: stderr is intentionally not redirected into the log. In Windows
    # PowerShell 5.1, 2>&1 on a native exe wraps each stderr line in a
    # NativeCommandError and flips $? even on a clean exit code.
    $Output = & $Claude `
        --print `
        --permission-mode acceptEdits `
        --allowedTools $AllowedTools `
        --output-format text `
        $Prompt

    $Code = $LASTEXITCODE
    if ($null -ne $Output) {
        Add-Content -Path $LogFile -Value $Output -Encoding utf8
    }
    Write-Log "claude exited with code $Code"

    # Record what the run actually did, so a silent no-op is visible later.
    $Head = & git -C $RepoRoot log -1 --oneline
    Write-Log "HEAD is now: $Head"
    $Dirty = & git -C $RepoRoot status --short
    if ($Dirty) {
        Write-Log ("working tree not clean:`n" + ($Dirty -join "`n"))
    }

    exit $Code
}
catch {
    Write-Log "FATAL: $($_.Exception.Message)"
    exit 1
}
finally {
    Pop-Location
}
