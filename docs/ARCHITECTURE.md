# Architecture

## Product principles

- **Local-first:** core workflows run in the browser without an account, backend or paid API.
- **User-controlled data:** records stay in the browser profile; import and export are explicit user actions.
- **Progressive enhancement:** the browser app is the supported product today; PWA installation is available where supported.
- **Small dependency surface:** the current MVP uses platform web APIs and plain HTML, CSS and JavaScript.
- **Honest capability boundaries:** native packages, sync, OCR and notifications are not part of the shipped MVP.

## Runtime architecture

| Layer | Responsibility |
| --- | --- |
| `index.html` | Semantic application shell, navigation, views and entry forms |
| `styles.css` | Design tokens, responsive layout, component styling, focus and reduced-motion behavior |
| `app.js` | View state, validation, rendering, IndexedDB access, attachments and backup workflows |
| `i18n.js` | English, Urdu and Arabic interface translations, language preference and RTL direction |
| IndexedDB | Persistent `documents` and `tasks` object stores |
| `manifest.webmanifest` | PWA name, icons, display mode and launch metadata |
| `sw.js` | App-shell caching for repeat/offline launches |
| `tests/smoke.test.mjs` | Node-based static smoke checks for key wiring and safeguards |

The application has no server-side component. The interface currently offers English, Urdu and Arabic selection. Urdu and Arabic use right-to-left document direction; date formatting follows the selected document language. Translation coverage is an initial interface pass and still needs human review for terminology and edge cases. The service worker caches the application shell; it is not a cloud-sync mechanism.

## Persistence model

### Document record

A document record contains a unique identifier, title, type, optional important date, notes, creation/update timestamps, and optional attachment metadata and binary data.

### Task record

A task record contains a unique identifier, title, optional due date, priority, notes, completion state, and creation/update timestamps.

IndexedDB is scoped to the browser origin and profile. Removing site data, changing browser profiles or losing the device can make records unavailable. Users should export backups regularly.

## Attachments and previews

Attachments are stored locally with document records. The UI previews supported PDF, PNG, JPEG, GIF, WebP and plain-text formats. Other file types are offered as downloads rather than embedded previews. Preview support is a convenience, not a malware scanner; users should only open files they trust.

## Backup and restore

- Version 2 JSON backups include document and task records plus binary attachment data encoded for JSON transport.
- Version 1 backups remain accepted for compatibility with earlier exports.
- Restore validates the incoming structure and enforces a 50 MB size limit before writing.
- Restore writes records through an IndexedDB transaction so a failed write does not intentionally leave a partially imported dataset.
- Exported JSON backups are **not encrypted**. Users should store them securely and avoid including highly sensitive information.

## Privacy and security boundaries

PocketOps does not currently require an account, remote database, telemetry service, analytics SDK, external font download or paid API. Local browser storage is not encrypted by this application. This is not a password manager or a secure document vault.

## Testing boundaries

The current automated suite is a Node.js static smoke-test suite. It checks important source wiring and regression-sensitive safeguards, but it does not execute the app in a real browser. Browser-level interaction, cross-browser behavior, accessibility and storage-quota testing remain explicit engineering gaps.

## Planned evolution

Future work should preserve the local-first baseline. Localization, modular JavaScript, browser end-to-end tests and accessibility improvements can be introduced without a backend. Optional sync, OCR and native packaging require separate threat models, user consent and platform-specific testing before being described as shipped.
