# Roadmap

This roadmap is directional. Items are not shipped until implemented, documented and tested.

## MVP — browser workspace
- [x] Responsive dashboard
- [x] Document and task records
- [x] Local IndexedDB persistence
- [x] Search, filters and task completion
- [x] JSON backup and import
- [x] PWA manifest and offline shell
- [x] Community and security documentation
- [x] Basic automated smoke tests

## Next — reliability
- [ ] Browser end-to-end tests
- [ ] Attachment-aware backup and restore
- [ ] Schema versioning and safe data migrations
- [ ] Accessibility audit and keyboard-only walkthrough
- [ ] Better storage quota and backup guidance

## Later — intelligent capture
- [ ] OCR with editable, user-confirmed extracted fields
- [ ] Receipt and bill amount extraction
- [ ] Warranty and deadline suggestions
- [ ] Urdu, Arabic and English localization

## Cross-platform
- [ ] Android packaging and device testing
- [ ] Desktop packaging and release automation
- [ ] Optional encrypted sync with clear threat model

## Principles
- Free core; no paid API required for essential features.
- Local-first and privacy-respecting defaults.
- No background upload of personal documents.
- Destructive or externally visible actions require explicit user confirmation.