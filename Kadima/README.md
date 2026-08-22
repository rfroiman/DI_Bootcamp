# Kadima — Onboarding Screen

This version follows the approved visual layout supplied in the reference image while keeping the interface in English and using the original Kadima logo.

## Files

```text
Kadima/
├── index.html
├── styles.css
├── app.js
├── README.md
└── assets/
    ├── kadima-logo-original.jpeg
    └── journey-visual.svg
```

## Main rule

The user cannot:

- continue to the next screen; or
- skip the onboarding journey

until both mandatory values are provided:

1. communication language
2. current physical location

English is preselected by default, but the user may choose Portuguese or Spanish.

## Main Kadima colors

- `#0B1F3A` — main background
- `#1677FF` — primary blue
- `#00C896` — innovation green
- `#FFFFFF` — white
- `#F5F7FA` — light gray

## Recommended local folder

`D:\Documentos\Developers Institute Projects\DI_Bootcamp\Kadima`


## Journey visual correction

`assets/journey-visual-reference.png` is now cropped directly from the supplied
reference screen. It replaces the previous recreated SVG, so the road/map visual
matches the approved mockup itself rather than an approximation.


## Country selector update

The location field now only accepts a country selected from the valid country list.

- Popular-country buttons still select immediately.
- Clicking **Other countries** opens the searchable country list.
- Typing filters the list but does **not** validate the location by itself.
- The user must click a valid country (or use the keyboard and press Enter).
- `Continue` and `Skip journey` stay disabled until a valid country is selected.
- The saved onboarding object now also contains `countryCode` (ISO alpha-2), for example:

```json
{
  "language": "en",
  "location": "Israel",
  "countryCode": "IL"
}
```

The `countryCode` will be useful later for geographic job matching.
