# Kadima — Onboarding / Main Page

This folder contains the first Web onboarding page for Kadima.

## Files

- `index.html` — main onboarding page.
- `styles.css` — Kadima visual identity and responsive layout.
- `app.js` — onboarding state, language/location selection, localStorage and navigation rules.
- `assets/kadima-logo.jpeg` — supplied Kadima logo.

## Kadima color palette

- Navy: `#0B1F3A`
- Vibrant blue: `#1677FF`
- Innovation green: `#00C896`
- White: `#FFFFFF`
- Light gray: `#F5F7FA`

## Mandatory first-step rule

The user cannot:

- Continue to the next onboarding step; or
- Skip the onboarding journey

until both of these values have been provided:

1. Communication language
2. Current country/location

The rule is implemented in `app.js` by `isReady()` and is checked again inside both navigation handlers.

## Local testing

Open `index.html` in a browser, or use VS Code Live Server.

The selected language and location are stored in the browser's `localStorage` under:

`kadimaOnboarding`

## Git

Recommended branch:

`main`

Suggested initial commands:

```bash
cd "D:\Documentos\Developers Institute Projects\DI_Bootcamp\Kadima"
git add .
git commit -m "Create Kadima onboarding main page"
git push origin main
```

The next onboarding screen can later be connected to the existing `continueButton` handler in `app.js`.
