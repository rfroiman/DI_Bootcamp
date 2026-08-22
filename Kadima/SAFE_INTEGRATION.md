# IMPORTANT — Safe integration

This package preserves the approved Screen 1 files exactly from:
`Kadima_Screen1_Valid_Country_Selector.zip`

Screen 2 is added without redefining the shared left panel.

## Why this fixes the problem

Screen 2 now loads:

1. `styles.css` — the exact approved Screen 1 shared shell and left panel
2. `personal-info.css` — ONLY Screen 2 right-side content

That means the logo, Journey image, three left icons, spacing, and the approved
`translateY(-50px)` position are controlled by ONE stylesheet only.

Do not copy an older `personal-info.css` over this file.

## Test

Open `index.html` with Live Server.
Click Continue.
The left side of `personal-info.html` should remain visually identical to Screen 1.
