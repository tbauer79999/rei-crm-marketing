import { RETENTION_DAYS } from './config';
import type { PurgeKind, Store } from './store';

const DAY_MS = 24 * 60 * 60 * 1000;

// Deletes records older than the retention period for their kind. The privacy page section on the checker states these same periods.
export async function purgeExpired(store: Store, now: Date): Promise<Record<PurgeKind, number>> {
  const out = {} as Record<PurgeKind, number>;
  for (const kind of Object.keys(RETENTION_DAYS) as PurgeKind[]) {
    out[kind] = await store.purge(kind, new Date(now.getTime() - RETENTION_DAYS[kind] * DAY_MS).toISOString());
  }
  return out;
}
