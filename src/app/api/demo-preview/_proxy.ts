// Shared by the demo sign-up routes. The browser only ever talks to these routes on our own
// domain; they forward to the lead-app with a shared secret, so the lead-app endpoint cannot
// be called by anyone else and the visitor's IP is passed along by a server we trust.
//
// Off until both DEMO_SIGNUP_URL (lead-app base URL) and DEMO_SIGNUP_SECRET are set, so a deploy
// can never start creating accounts by accident.

import { NextRequest, NextResponse } from 'next/server';

export function configured(): boolean {
  return Boolean(process.env.DEMO_SIGNUP_URL && process.env.DEMO_SIGNUP_SECRET);
}

export function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return process.env.NODE_ENV !== 'production';
  try {
    return new URL(origin).host === (req.headers.get('x-forwarded-host') ?? req.headers.get('host'));
  } catch {
    return false;
  }
}

export function clientIp(req: NextRequest): string {
  const v = req.headers.get('x-vercel-forwarded-for') ?? req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for') ?? '';
  return v.split(',')[0].trim().slice(0, 64);
}

export async function forward(req: NextRequest, path: string, init: { method: 'GET' | 'POST'; body?: unknown }): Promise<NextResponse> {
  if (!configured()) return NextResponse.json({ error: 'OFF', message: 'Demo sign-up is not switched on yet.' }, { status: 503 });
  if (init.method === 'POST' && !sameOrigin(req)) return NextResponse.json({ error: 'FORBIDDEN' }, { status: 403 });
  try {
    const res = await fetch(`${process.env.DEMO_SIGNUP_URL!.replace(/\/+$/, '')}/api/public/demo${path}`, {
      method: init.method,
      headers: {
        'Content-Type': 'application/json',
        'x-demo-signup-secret': process.env.DEMO_SIGNUP_SECRET!,
        'x-client-ip': clientIp(req),
      },
      body: init.method === 'POST' ? JSON.stringify(init.body ?? {}) : undefined,
      signal: AbortSignal.timeout(20000),
      cache: 'no-store',
    });
    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: 'UNAVAILABLE', message: 'Surf is busy right now. Please try again in a minute.' }, { status: 502 });
  }
}
