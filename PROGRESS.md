# Progress Log

This is the running, human-readable log kept by the Progress Coach for this course exercise repo.

Each scheduled review adds one dated entry summarizing what changed since the last check — which exercises and topics were touched, what the coach noticed (growth and gaps), and a couple of specific recommendations. **Newest entries are prepended at the top**, so today's review is always the first thing you see.

Machine-readable run history lives alongside this file in `.progress/stats.jsonl`; the coach's bookkeeping (last reviewed commit, run count) lives in `.progress/state.json`. The behavior contract the coach follows is in `CLAUDE.md` at the repo root.

---

## 2026-08-18

**Since yesterday:** 0 commits, 0 files — nothing committed since the baseline (`f4048e3`). The one commit in range, `8c75479`, is the coach's own setup commit and doesn't count as your work.

**What I saw:** Nothing has been committed yet, but there's a real Week 3 session sitting uncommitted in the working tree, so this is a review of work *in progress* rather than reviewed work. You wrote `Week3/Claude_course/api-demo.py` — a ticket classifier that loops over four support tickets and calls `client.messages.create` with `temperature=0.0` and `max_tokens=10`. Both of those are the right calls for a classification task: pinned temperature for repeatability, and a token cap that makes a one-word answer the only affordable output, which reinforces the "Reply with the category word only" instruction in `PROMPT`. Line 5 keeps your earlier prompt commented out above line 7's active version, so you're iterating on wording deliberately rather than overwriting and losing the comparison. Separately, the whole `Claude/sample-project/sample-project/` directory shows as deleted and reappears byte-identical under `Week3/Claude_course/sample-project/sample-project/` — I diffed `glossary.py` against the committed version at `f4048e3` and it's unchanged, so that's a pure reorganization, not new work on the glossary.

**Recommendations:**
- Fix the missing space in the active `PROMPT` on line 7 of `Week3/Claude_course/api-demo.py`: it reads `BILLING, SHIPPING, PRODUCT or OTHER.Reply with the category word only.` Your commented-out line 5 has `OTHER. Reply` with the space. Gluing the last category to the next sentence is exactly the kind of thing that makes a model occasionally read `OTHER.Reply` as one token-ish blob and echo something unexpected.
- Your `api-demo.py` prints the four answers but never checks them, so you can't tell whether a prompt edit helped or hurt. The course demo `api-demos/api-demos/api-demo04.py` already shows the pattern: a `TEST_SET` of `(ticket, expected)` pairs and a `run(prompt_fn, label)` that counts `got == expected` and prints a score. Add expected labels to your own `tickets` list and score it — then your line-5-vs-line-7 prompt comparison becomes a number instead of a judgement call.
- Before you `git add` anything: `Week3/Claude_course/API_KEY.txt` has 108 bytes of content, this repo has no `.gitignore`, and that file is untracked — one `git add -A` and a live key is in your history. Add a `.gitignore` covering `API_KEY.txt`, `__pycache__/`, `__MACOSX/`, and `*.exe` first. The tree currently also carries `Claude Setup.exe` and a pile of `__MACOSX/._*` resource forks from the zips you unpacked, none of which belong in the repo.
- Commit the Week 3 work. Five days of course material and your own `api-demo.py` are living only on disk right now, and the `Claude/` → `Week3/` move is unrecorded, so nothing here is recoverable if the folder gets cleaned up. It also means your streak can't start.

**Streak:** 0 days — no committed work yet since the baseline.
