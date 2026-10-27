import { timingSafeEqual } from 'node:crypto';
import { type NextRequest } from 'next/server';
import { flushAlerts } from '../../../../lib/tools/alerts';
import { COOKIE_NAMES } from '../../../../lib/tools/config';
import { gateClosedResponse, json, sameOrigin } from '../../../../lib/tools/route-util';
import { makeDeps } from '../../../../lib/tools/runtime';
import { drainQueue, retryReports } from '../../../../lib/tools/service';
import { signAdminCookie, verifyAdminCookie } from '../../../../lib/tools/visitor';

export const runtime = 'nodejs';
export const maxDuration = 60;

const adminCookie = (value: string, maxAge: number) => ({
  name: COOKIE_NAMES.admin,
  value,
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge,
});

// Admin actions: log in, log out, and run the queue or the alert flush by hand. The dashboard itself is the /tools/admin page.
export async function POST(req: NextRequest) {
  const closed = gateClosedResponse();
  if (closed) return closed;
  if (!sameOrigin(req)) return json({ ok: false }, { status: 403 });
  const body = (await req.json().catch(() => ({}))) as { action?: string; password?: unknown };

  if (body.action === 'login') {
    const want = process.env.TOOLS_ADMIN_PASSWORD;
    const given = typeof body.password === 'string' ? Buffer.from(body.password) : Buffer.alloc(0);
    if (!want || given.length !== Buffer.byteLength(want) || !timingSafeEqual(given, Buffer.from(want))) return json({ ok: false }, { status: 401 });
    const res = json({ ok: true });
    res.cookies.set(adminCookie(signAdminCookie(), 12 * 60 * 60));
    return res;
  }

  if (!verifyAdminCookie(req.cookies.get(COOKIE_NAMES.admin)?.value)) return json({ ok: false }, { status: 401 });

  if (body.action === 'logout') {
    const res = json({ ok: true });
    res.cookies.set(adminCookie('', 0));
    return res;
  }

  const deps = makeDeps();
  if (!deps) return json({ ok: false }, { status: 503 });
  if (body.action === 'drain') return json({ ok: true, queue: await drainQueue(deps, { budgetMs: 40_000 }) });
  if (body.action === 'flush') return json({ ok: true, alerts: await flushAlerts(deps.store, deps.mailer, new Date()), reports: await retryReports(deps) });
  return json({ ok: false }, { status: 400 });
}
