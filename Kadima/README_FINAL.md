# Kadima — Final Pages 1 and 2

This package intentionally contains **code files only**.
It does NOT include image assets that are already approved in your project.

Keep these existing assets in:

```text
assets/
├── kadima-logo-original.png
└── journey-visual-reference.png
```

## Files in this package

```text
index.html
styles.css
app.js
personal-info.html
personal-info.css
personal-info.js
```

## Page 1 rules

- English is selected by default.
- No country is preselected.
- Every time `index.html` is opened, previous onboarding/personal values are cleared.
- A location is valid only after selecting a real country from the country list.
- Continue and Skip remain disabled until language + valid country are available.
- Continue opens `personal-info.html`.

## Page 2 rules

- Uses the exact same left-panel markup and `styles.css` as Page 1.
- Uses the same existing PNG logo and Journey image.
- `personal-info.css` controls only the right side.
- First name, last name and valid email are mandatory for Continue.
- Back returns to `index.html` (which intentionally starts clean).
- Skip checks that Page 1 was completed.

## Important logo rule

All HTML references:

`assets/kadima-logo-original.png`

There are no `.jpeg` logo references in these pages.
