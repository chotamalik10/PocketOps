# PocketOps

**Your life, in order.** PocketOps is a privacy-first, local-first personal admin workspace for documents, receipts, bills, warranties, notes and deadlines.

> Status: MVP / early development. This repository is actively evolving. OCR, native packaging, notifications and sync are roadmap items, not shipped features.

## MVP features
- Responsive web dashboard for desktop and mobile browsers
- Document records: title, type, important date, notes and optional local attachment
- Tasks with due dates, priority and completion status
- Search and filtering
- JSON backup and import for records
- IndexedDB local persistence; no account, telemetry, paid API or remote database required
- Installable PWA shell and offline app-shell caching

## Privacy and storage
Records are stored in IndexedDB in the current browser profile on the current device. They do not sync between devices. Clearing browser site data may erase records. Export backups regularly. The current JSON export excludes binary attachments; download those separately before migrating.

Do not store passwords, payment-card details or highly sensitive identity information.

## Run locally
Use Python 3:

```bash
python -m http.server 4173
```

Open http://localhost:4173. On Windows, `py -m http.server 4173` also works. Service workers require localhost or HTTPS.

## Platforms
- Web: modern browsers.
- Android: install the PWA from Chrome after hosting over HTTPS.
- Desktop: install as a PWA from a supported browser. Native Tauri/Electron packaging is planned, not yet included.

## Roadmap
- [ ] OCR with user-confirmed extraction
- [ ] Optional reminders and notification permission flow
- [ ] Encrypted, attachment-aware backups
- [ ] Tags, categories and advanced search
- [ ] Urdu, Arabic and English localization
- [ ] Native Android and desktop packaging
- [ ] Automated browser tests and accessibility audit
- [ ] Optional end-to-end encrypted sync

## Contributing
Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md), follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and use the issue templates.

## License
MIT — see [LICENSE](LICENSE).
