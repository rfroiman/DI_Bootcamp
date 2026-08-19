<#
.SYNOPSIS
    Registers (or re-registers) the "Progress Coach Daily Review" scheduled task.

.DESCRIPTION
    Daily at 09:03 local time. Runs as the current user with an interactive
    token, so no password is stored — the cost is that the task only fires
    while you are logged on. StartWhenAvailable is on, so a run missed because
    the laptop was asleep fires once you are back; the coach detects the gap
    itself and labels that entry a catch-up review.

    Re-run this script any time to update the task in place.

.PARAMETER Time
    Trigger time, default 09:03. Not 09:00 on purpose — off-minute triggers
    avoid the moment every scheduler on the planet fires at once.

.PARAMETER Unregister
    Remove the task instead of creating it.
#>
[CmdletBinding()]
param(
    [string]$Time = '09:03',
    [switch]$Unregister
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$TaskName = 'Progress Coach Daily Review'
$TaskPath = '\ProgressCoach\'
$Runner   = Join-Path $PSScriptRoot 'Run-DailyReview.ps1'

if ($Unregister) {
    try {
        Unregister-ScheduledTask -TaskName $TaskName -TaskPath $TaskPath -Confirm:$false -ErrorAction Stop
        Write-Output "Removed scheduled task '$TaskName'."
    }
    catch {
        Write-Output "No task named '$TaskName' was registered."
    }
    return
}

if (-not (Test-Path $Runner)) {
    throw "Runner script not found at $Runner"
}

$Action = New-ScheduledTaskAction `
    -Execute 'powershell.exe' `
    -Argument ('-NoProfile -NonInteractive -ExecutionPolicy Bypass -File "{0}"' -f $Runner) `
    -WorkingDirectory $PSScriptRoot

$Trigger = New-ScheduledTaskTrigger -Daily -At $Time

# Laptop-friendly: run on battery, do not wake the machine, catch up on a
# missed run, and never let a hung review sit forever.
$Settings = New-ScheduledTaskSettingsSet `
    -AllowStartIfOnBatteries `
    -DontStopIfGoingOnBatteries `
    -StartWhenAvailable `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 30) `
    -MultipleInstances IgnoreNew `
    -RestartCount 2 `
    -RestartInterval (New-TimeSpan -Minutes 10)

# Interactive token = no stored credential, but only runs while logged on.
$Principal = New-ScheduledTaskPrincipal `
    -UserId "$env:USERDOMAIN\$env:USERNAME" `
    -LogonType Interactive `
    -RunLevel Limited

Register-ScheduledTask `
    -TaskName $TaskName `
    -TaskPath $TaskPath `
    -Action $Action `
    -Trigger $Trigger `
    -Settings $Settings `
    -Principal $Principal `
    -Description 'Runs the Student Progress Coach daily review (see CLAUDE.md). Writes PROGRESS.md and .progress/, commits locally, never pushes.' `
    -Force | Out-Null

Write-Output "Registered '$TaskName' — daily at $Time."
Write-Output "Runner:  $Runner"
Write-Output "Logs:    $env:LOCALAPPDATA\progress-coach\logs"
Write-Output ''
Write-Output 'Test it without writing anything:'
Write-Output ('  powershell -NoProfile -ExecutionPolicy Bypass -File "{0}" -WhatIfReview' -f $Runner)
Write-Output 'Fire the real task now:'
Write-Output ("  Start-ScheduledTask -TaskName '{0}' -TaskPath '{1}'" -f $TaskName, $TaskPath)
