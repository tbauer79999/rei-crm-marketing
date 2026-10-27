import { timingSafeEqual } from 'node:crypto';
import { type NextRequest } from 'next/server';
import { flushAlerts } from '../../../../lib/tools/alerts';
import { json } from '../../../../lib/tools/route-util';
import { purgeExpired } from '../../../../lib/tools/retention';
import { makeDeps } from '../../../../lib/tools/runtime';
import { drainQueue, retryReports } from '../../../../lib/tools/service';

export const runtime = 'nodejs';
export const maxDuration = 60;

function authorized(req: NextRequest): boolean {
  const secret = process.env.TOOLS_CRON_SECRET;
  if (!secret) return false;
  const given = Buffer.from((req.headers.get('authorization') || '').replace(/^Bearer\s+/i, ''));
  const want = Buffer.from(secret);
  return given.length === want.length && timingSafeEqual(given, want);
}

// Called on a schedule by any free external cron (see the setup notes): retries alerts and report emails, and works the scan queue.
export async function GET(req: NextRequest) {
  // Not behind the content gate on purpose: it is protected by the secret, and upkeep (retries, queue, deleting expired records) must
  // keep running while the public pages are closed.
  if (!authorized(req)) return json({ ok: false }, { status: 401 });
  const deps = makeDeps();
  if (!deps) return json({ ok: false }, { status: 503 });
  const alerts = await flushAlerts(deps.store, deps.mailer, new Date()).catch(() => null);
  const reports = await retryReports(deps).catch(() => null);
  const queue = await drainQueue(deps, { budgetMs: 30_000 }).catch(() => null);
  const purged = await purgeExpired(deps.store, new Date()).catch(() => null);
  return json({ ok: true, alerts, reports, queue, purged });
}
