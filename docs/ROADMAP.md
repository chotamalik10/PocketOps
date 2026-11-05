# Roadmap

This roadmap distinguishes shipped behavior from planned work. An item moves to **Shipped** only after implementation, documentation and relevant tests are updated.

## Shipped — browser MVP

- [x] Responsive dashboard and workspace navigation
- [x] Document records with create, edit, search, filter and delete workflows
- [x] Task records with create, edit, completion, search, filter and delete workflows
- [x] IndexedDB persistence for documents and tasks
- [x] Attachment storage with safe-format previews and download fallback
- [x] Upcoming and overdue task indicators
- [x] Version 2 JSON backup with binary attachments
- [x] Version 1 backup import compatibility
- [x] Restore validation, 50 MB limit and transactional IndexedDB writes
- [x] PWA manifest and offline app-shell caching
- [x] MIT license, contribution guidance, code of conduct and security policy
- [x] Node.js static smoke-test workflow

## Next — product quality

- [ ] Real-browser end-to-end tests for document, task and backup workflows
- [ ] Keyboard-only and screen-reader accessibility review
- [ ] Cross-browser verification (Chromium, Firefox and WebKit)
- [ ] Storage quota handling and clearer low-storage recovery guidance
- [ ] More complete empty, loading, error and confirmation states
- [ ] Actual application screenshots and a maintained visual gallery
- [ ] Refactor the single application script into maintainable modules

## Next — language and usability

- [x] Initial localization architecture with English, Urdu and Arabic dictionaries
- [x] Language selector and saved language preference
- [x] RTL direction and layout rules for Urdu/Arabic
- [x] Locale-aware date formatting
- [ ] Full translation coverage review, native-speaker terminology review and RTL QA

## Later — optional capabilities

- [ ] Calendar-focused task planning
- [ ] Tags, categories and advanced search
- [ ] Optional reminders with explicit permission controls
- [ ] Encrypted backup option and documented recovery flow
- [ ] OCR with editable, user-confirmed extracted fields
- [ ] Receipt and bill amount extraction

## Cross-platform

- [ ] Android packaging and physical-device testing
- [ ] Desktop packaging and release automation
- [ ] Optional end-to-end encrypted sync with a reviewed threat model

## Non-negotiable principles

- The essential product remains free to use; no paid API is required for core workflows.
- Personal records are not silently uploaded.
- Optional network features require clear disclosure and explicit consent.
- Destructive or externally visible actions require confirmation.
- Documentation, screenshots and release notes must describe the actual shipped build, not planned features.
