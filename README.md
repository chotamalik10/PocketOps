<div align="center">

# PocketOps

### Your life, in order.

A privacy-first, local-first workspace for keeping personal documents, attachments and deadlines organised — without an account, subscription or remote database.

[![Quality checks](https://github.com/chotamalik10/PocketOps/actions/workflows/quality.yml/badge.svg)](https://github.com/chotamalik10/PocketOps/actions/workflows/quality.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)

</div>

> **Project status:** Early MVP. The current release is a browser-based PWA. Native Android/Windows packages, cloud sync, OCR and notifications are not shipped.

---

## What it does

PocketOps brings everyday personal administration into one simple workspace.

| Area | Available now |
| --- | --- |
| Overview | Document, open-task, upcoming and overdue counts |
| Documents | Create, edit, search, filter and delete records |
| Attachments | Store files locally; preview supported PDF, PNG, JPEG, GIF, WebP and plain-text files; download other formats |
| Tasks | Create, edit, complete, search, filter and delete tasks |
| Deadlines | Due-date sorting, next-seven-day overview and overdue indicators |
| Backup | Versioned JSON export/import, including binary attachments in v2 backups |
| Offline | Installable PWA shell with service-worker caching |

## Visual preview

<div align="center">

<img src="assets/workspace-illustration.svg" alt="PocketOps workspace illustration" width="620" />

<sub>Product illustration for the current browser MVP — not a live application screenshot.</sub>

</div>

## Experience

- Responsive layout for desktop and mobile browsers.
- Local-first persistence using IndexedDB.
- Keyboard-visible focus states and reduced-motion support.
- No external font downloads, analytics, tracking pixels or paid API dependency.

## Get started

### Requirements

- A modern browser with IndexedDB support.
- Python 3 for the simplest local server, or any static HTTP server.
- Node.js 20+ to run the repository test suite.

### Run locally

```bash
git clone https://github.com/chotamalik10/PocketOps.git
cd PocketOps
python -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

On Windows, `py -m http.server 4173` can be used instead. Service workers require localhost or HTTPS.

### Run tests

```bash
npm test
```

The current Node test suite checks app-shell wiring, manifest metadata, backup/import safeguards, key workflows and static asset references. It is **not** a substitute for real-browser end-to-end testing.

## Privacy and data model

PocketOps stores records in IndexedDB in the browser profile on the device where they were created.

- There is no account, remote database, telemetry or automatic cross-device sync.
- Clearing browser/site data can permanently erase locally stored records. Export backups regularly.
- Version 2 backups include attachments. Version 1 backups remain supported for import.
- Backup restore is limited to 50 MB.
- Backup JSON files are not encrypted. Keep exported files in a secure location.
- Do not store passwords, payment-card data or highly sensitive identity information.

See [Privacy notes](docs/PRIVACY.md) and [Architecture](docs/ARCHITECTURE.md).

## Platform support

| Platform | Current support |
| --- | --- |
| Desktop browsers | Responsive web app / installable PWA |
| Android browsers | Responsive web app / installable PWA over HTTPS |
| Native Android APK | Not shipped |
| Native Windows installer | Not shipped |
| Cross-device sync | Not shipped |

## Roadmap

### Product quality
- [ ] Browser end-to-end tests and accessibility review
- [ ] Cross-browser verification and storage-quota handling
- [ ] Real app screenshots and visual gallery
- [ ] Modular application architecture

### Language support
- [ ] English, Urdu and Arabic interface localization
- [ ] Right-to-left layout and locale-aware formatting

### Future capabilities
- [ ] Calendar planning, tags and advanced search
- [ ] Optional reminders with explicit permission controls
- [ ] Encrypted backups and optional end-to-end encrypted sync
- [ ] OCR with user-confirmed extraction
- [ ] Native Android and desktop packaging

Roadmap items are plans, not promises or current features.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for user-facing project updates.

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md), follow the [Code of Conduct](CODE_OF_CONDUCT.md), and review the issue templates before opening a pull request.

## Security

Please do not report security vulnerabilities in public issues. Follow the private reporting guidance in [SECURITY.md](SECURITY.md).

## License

PocketOps is released under the [MIT License](LICENSE).
