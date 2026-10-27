import { LIMITS, monthlyCostCapUsd } from './config';
import { newId, type AttemptKind, type Store } from './store';

const DAY_MS = 24 * 60 * 60 * 1000;

export const monthStartIso = (now: Date) => new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1)).toISOString();
export const dayStartIso = (now: Date) => new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())).toISOString();

export type AttemptResult = { allowed: boolean; remaining: number };

// Per-visitor daily limit over a rolling 24 hours, counted by connection (IP hash) AND by the signed cookie. Either one reaching the
// limit blocks the scan, so clearing cookies does not help (the IP still counts) and neither does switching network (the cookie does).
export async function checkAttempt(
  store: Store,
  who: { ipHash: string; visitorId: string | null },
  kind: AttemptKind,
  now: Date,
): Promise<AttemptResult> {
  const siteLike = kind === 'site' || kind === 'queue';
  const limit = siteLike ? LIMITS.scansPerVisitorPerDay : LIMITS.pastesPerVisitorPerDay;
  const { byIp, byVisitor } = await store.countAttempts({
    ipHash: who.ipHash,
    visitorId: who.visitorId,
    kinds: siteLike ? ['site', 'queue'] : ['paste'],
    since: new Date(now.getTime() - DAY_MS).toISOString(),
  });
  const used = Math.max(byIp, byVisitor);
  return { allowed: used < limit, remaining: Math.max(0, limit - used) };
}

export async function recordAttempt(store: Store, who: { ipHash: string; visitorId: string | null }, kind: AttemptKind, now: Date) {
  await store.insertAttempt({ id: newId(), kind, visitor_id: who.visitorId, ip_hash: who.ipHash, created_at: now.toISOString() });
}

export type CapStatus = { spent: number; cap: number; tripped: boolean };

// Real logged cost for the current UTC month against MONTHLY_COST_CAP_USD.
export async function capStatus(store: Store, now: Date): Promise<CapStatus> {
  const cap = monthlyCostCapUsd();
  const spent = await store.sumCostSince(monthStartIso(now));
  return { spent, cap, tripped: spent >= cap };
}
