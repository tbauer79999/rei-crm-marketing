import { NextResponse, type NextRequest } from 'next/server';
import { resolveAttribution, type Attribution } from './attribution';
import { COOKIE_NAMES } from './config';
import { toolsOpen } from './content-gate';
import { ERROR_COPY, type ErrorCode } from './errors';
import type { Who } from './service';
import { clientIp, hashIp, issueVisitorCookie, readVisitorCookie } from './visitor';

export const NOINDEX = { 'X-Robots-Tag': 'noindex, nofollow' } as const;

// While the content gate is closed every /tools route, API included, answers 404 and noindex.
export function gateClosedResponse(): NextResponse | null {
  return toolsOpen() ? null : new NextResponse(null, { status: 404, headers: NOINDEX });
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

export function visitorFrom(req: NextRequest): { who: Who; issuedCookie: string | null } {
  const existing = readVisitorCookie(req.cookies.get(COOKIE_NAMES.visitor)?.value);
  const issued = existing ? null : issueVisitorCookie();
  return {
    who: { ipHash: hashIp(clientIp(req.headers)), visitorId: existing ?? issued!.id },
    issuedCookie: issued ? issued.value : null,
  };
}

export function attributionFrom(req: NextRequest, bodyAttribution: unknown): Attribution {
  return resolveAttribution(bodyAttribution as Record<string, unknown> | null, {
    firstSrc: req.cookies.get(COOKIE_NAMES.firstSrc)?.value,
    aff: req.cookies.get(COOKIE_NAMES.aff)?.value,
  });
}

export function json(body: unknown, init: { status?: number; issuedCookie?: string | null } = {}): NextResponse {
  const res = NextResponse.json(body, { status: init.status ?? 200, headers: { ...NOINDEX, 'Cache-Control': 'no-store' } });
  if (init.issuedCookie) {
    res.cookies.set(COOKIE_NAMES.visitor, init.issuedCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });
  }
  return res;
}

export function errorBody(code: ErrorCode, extra: Record<string, unknown> = {}) {
  const c = ERROR_COPY[code];
  return { ok: false, code, title: c.title, body: c.body, paste: c.paste, ...extra };
}
