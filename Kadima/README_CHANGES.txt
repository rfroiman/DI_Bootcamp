KADIMA — Onboarding rules + Profile editable fingerprint patch

Changed files only:
- app.js
- personal-info.js
- profile.html
- profile.css
- profile.js

No image assets are included or replaced.

Main changes:

1. Screen 1
- Skip Journey is always disabled.
- Language + valid country enables Continue only.
- Opening Screen 1 starts visually clean without deleting persisted account data.

2. Screen 2
- Skip remains disabled until Screen 1 + Screen 2 mandatory data are complete.
- Once Language + Country + First Name + Last Name + valid Email are complete,
  a prototype Kadima account is created in localStorage (`kadimaAccount`).
- Continue opens profile.html.
- From this point forward, Skip is available because the user has an account.

3. Screen 3
- Something Else accepts multiple comma-separated values.
- Each value becomes an independent fingerprint item immediately after Add.
- Custom values are restored when returning to that question, with Something Else selected.
- Every Live Preview item can be clicked to edit or delete.
- Every fingerprint dimension has + Add and accepts comma-separated values.
- Direct Live Preview edits are stored separately from question-derived answers.
- Adjust Something lets the user choose which fingerprint dimension to revisit.
- Looks Right confirms the Profile Foundation, hides adjustment actions,
  removes Back navigation, and enables Continue.
- Career Path Overview remains part of the Profile Foundation review.

Prototype storage note:
This still uses localStorage. When the backend is introduced, account creation,
profile persistence and authentication should move to server-side APIs/database.
