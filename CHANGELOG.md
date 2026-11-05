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
- A redesigned vector workspace illustration for the dashboard.

### Improved
- Responsive four-card dashboard statistics layout.
- Architecture documentation now reflects attachment-aware v2 backups, v1 import compatibility and transactional restore behavior.
- Roadmap now distinguishes shipped MVP capabilities from planned work.
- README coverage of shipped features, privacy boundaries, platform support and quality gaps.

### Security
- Attachment previews are restricted to a small allowlist of common, non-SVG formats.
- Preview links use `noopener noreferrer` and temporary object URLs.
