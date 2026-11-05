# Privacy model

PocketOps MVP is designed to keep personal records in the browser profile on the device where they were entered.

## What happens to data?

- Documents and tasks are stored in IndexedDB.
- The MVP does not require an account or remote database.
- The MVP does not include analytics or advertising trackers.
- JSON backups are generated in the browser and downloaded by the user.
- File attachments are kept as local browser data; current JSON export excludes attachment bytes.

## Important limitations

Local storage is not equivalent to encrypted storage. Anyone with access to the same unlocked device and browser profile may be able to access records. Clearing browser data may permanently remove records. Browser storage quotas and eviction policies vary.

Do not store passwords, payment-card details, authentication tokens or highly sensitive identity information.

## Future features

Any future cloud sync, AI extraction or external integration must be opt-in, documented, and designed around data minimization. Privacy-impacting changes should be discussed in an issue before implementation.