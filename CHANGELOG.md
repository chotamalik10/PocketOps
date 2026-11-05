# Changelog

All notable user-facing changes to PocketOps are recorded here.

This project is in early development. Versions before 1.0.0 may include breaking changes.

## Unreleased

### Added
- Document and task editing while preserving creation timestamps.
- Attachment opening for PDF, PNG, JPEG, GIF, WebP and plain-text files.
- Download fallback for attachment formats that are not previewed.
- Dashboard overdue-task count and overdue labels in task lists.
- Expanded project documentation and workflow smoke checks.

### Improved
- Responsive four-card dashboard statistics layout.
- Clearer README coverage of shipped features, privacy boundaries and platform support.

### Security
- Attachment previews are restricted to a small allowlist of common, non-SVG formats.
- Preview links use `noopener noreferrer` and temporary object URLs.
