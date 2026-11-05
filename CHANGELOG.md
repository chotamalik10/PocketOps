# Changelog

All notable user-facing changes to PocketOps are recorded here.

This project is in early development. Versions before 1.0.0 may include breaking changes.

## Unreleased

### Added
- English, Urdu and Arabic language selector with saved preference.
- Initial right-to-left layout support for Urdu and Arabic.
- Document and task editing while preserving creation timestamps.
- Attachment opening for PDF, PNG, JPEG, GIF, WebP and plain-text files.
- Download fallback for attachment formats that are not previewed.
- Dashboard overdue-task count and overdue labels in task lists.
- Expanded project documentation and workflow smoke checks.
- A redesigned vector workspace illustration for the dashboard.

### Improved
- Date labels follow the selected interface locale.
- User-authored document and task text is excluded from interface translation.
- Mixed-language record text and entry fields use natural text-direction detection.
- Accessible control labels and placeholders follow the selected language.
- The active workspace view is announced through navigation state.
- Responsive four-card dashboard statistics layout.
- Architecture documentation now reflects attachment-aware v2 backups, v1 import compatibility and transactional restore behavior.
- Roadmap now distinguishes shipped MVP capabilities from planned work.
- README coverage of shipped features, privacy boundaries, platform support and quality gaps.

### Security
- Attachment previews are restricted to a small allowlist of common, non-SVG formats.
- Preview links use `noopener noreferrer` and temporary object URLs.
- Imported record identifiers are escaped before insertion into HTML attributes.
