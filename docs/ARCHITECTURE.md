# Architecture

## Design goals

- Local-first: the core app works without an account, backend or paid API.
- Progressive enhancement: browser app first; installable PWA where supported.
- Explicit data ownership: users can export records and choose when to import a backup.
- Small dependency surface: plain HTML, CSS and JavaScript in the MVP.

## Runtime

1. `index.html` provides semantic views and forms.
2. `styles.css` provides responsive layouts and accessible focus states.
3. `app.js` handles navigation, form validation, rendering and persistence.
4. IndexedDB stores two object stores: `documents` and `tasks`.
5. `manifest.webmanifest` and `sw.js` provide install metadata and an offline app shell.

## Data model

### Document
- `id`: unique string key
- `title`, `type`, `date`, `notes`
- `createdAt`
- `fileName` and optional `fileBlob` attachment

### Task
- `id`: unique string key
- `title`, `due`, `priority`, `notes`
- `done`: completion flag
- `createdAt`

## Backup behavior

The JSON backup exports document metadata and task records. Binary attachments are deliberately excluded from JSON export in this MVP. Users should download attachments separately before migrating to another browser or device.

## Future boundaries

OCR, notifications, sync and native packaging must be introduced as optional capabilities. They must not silently transmit personal records or make a paid provider mandatory.