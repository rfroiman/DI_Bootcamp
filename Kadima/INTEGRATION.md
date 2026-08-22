# Integrating Screen 2 with your existing Kadima Screen 1

Keep your approved Screen 1 exactly as it is.

Add these three new files to the same Kadima folder:

- personal-info.html
- personal-info.css
- personal-info.js

Also add/replace these assets only if they are not already present:

- assets/kadima-logo-original.jpeg
- assets/journey-visual-reference.png

## Connect the Continue button from Screen 1

In the `continueButton` click event of your current Screen 1 JavaScript,
after validating language and location and saving `kadimaOnboarding`, use:

```javascript
window.location.href = "personal-info.html";
```

Example:

```javascript
continueButton.addEventListener("click", () => {
  if (!ready()) {
    showToast("Please select your language and location first.");
    return;
  }

  saveState();
  window.location.href = "personal-info.html";
});
```

Do not remove the Screen 1 rule that requires language + location.

## Screen 2 mandatory rule

The Continue button on Screen 2 remains disabled until:

1. First name is completed
2. Last name is completed
3. Email is syntactically valid

The page stores the result in browser localStorage under:

`kadimaPersonalInfo`

Example stored object:

```json
{
  "firstName": "Rogerio",
  "lastName": "Froiman",
  "fullName": "Rogerio Froiman",
  "email": "example@email.com"
}
```

## Skip journey

Skip remains available on Screen 2 because the two mandatory global onboarding
values — language and location — should already have been collected on Screen 1.

The JavaScript still verifies those values before allowing a skip.
