KADIMA — Consolidated correction

This package consolidates all pending corrections reported in the latest test cycle.

SCREEN 2
- Skip Journey is disabled directly in HTML at first render.
- Skip remains disabled until all mandatory Screen 2 data are valid:
  First Name + Last Name + valid Email, plus Language + Country from Screen 1.
- A previously stored prototype account cannot unlock Skip on a fresh/blank Screen 2.
- Continue remains available only after the same required data are valid.

SCREEN 3
- The whole screen follows the language selected on Screen 1 (English / Portuguese / Spanish).
- This includes static text, questions, options, buttons, Something Else, Live Preview,
  empty states, fingerprint editor, Career Path Overview, review/completion text and navigation.
- "To be discovered" typography is normalized.
- Existing comma-separated Something Else logic and editable Live Preview remain intact.
- Confirmed Profile Foundation keeps Back navigation hidden.

Files changed:
- personal-info.html
- personal-info.js
- profile.html
- profile.css
- profile.js

No images/assets were modified.
