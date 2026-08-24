KADIMA — Screen 4 Full Editable Fingerprint

Changed ONLY:
- experience.html
- experience.css
- experience.js

No files from Screens 1–3 are included or modified.

Main improvement:
The full editable Professional Fingerprint concept from Screen 3 is now available on Screen 4.

The user can:
- Click any fingerprint chip to edit it.
- Delete any fingerprint chip.
- Add new information directly to any fingerprint dimension.
- Enter multiple new values separated by commas.
- Each comma-separated value becomes an independent fingerprint item.

Dimensions:
- Identity
- Career Paths
- Context
- Direction
- Transferable Value

Important data rule:
Screen 4 does NOT overwrite the original Profile answers or Experience answers when
the user edits/removes a derived fingerprint chip.

Instead, it stores:
- manualFingerprint: user-created fingerprint items
- fingerprintEdits.renamed: user-confirmed edits to inferred items
- fingerprintEdits.removed: user-confirmed removals from the cumulative fingerprint

This preserves original source data while allowing the cumulative professional
fingerprint to become more accurate over time.

User-confirmed fingerprint information should have priority over future AI inference.
