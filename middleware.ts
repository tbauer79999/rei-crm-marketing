import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Attribution capture for referral (?ref=) and affiliate (?aff=) codes.
//
// Runs on the FIRST page load of any route, so the code is persisted the moment
// a visitor lands via a link, regardless of where they browse afterwards or how
// long they take to convert. Without this, the code only survived the direct
// "land on /pricing -> click a plan -> checkout" path and was lost if the
// visitor navigated away first. SubscribeClient reads these cookies as a
// fallback at checkout (URL -> localStorage -> cookie).
const ATTRIBUTION_MAX_AGE = 60 * 60 * 24 * 60; // 60 days

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { searchParams } = request.nextUrl;

  // Scope the cookie to the registrable domain so it is shared across the apex
  // and every subdomain (getsurfox.com AND www.getsurfox.com). A host-only
  // cookie set on the apex is NOT sent to www, which would drop attribution the
  // moment a visitor clicks a link pointing at the other host. Stay host-only on
  // localhost / preview deploys, where a fixed Domain would be invalid.
  const host = request.nextUrl.hostname;
  const cookieDomain = host.endsWith('getsurfox.com') ? '.getsurfox.com' : undefined;

  for (const [param, cookieName] of [
    ['aff', 'surfox_aff'],
    ['ref', 'surfox_ref'],
  ] as const) {
    const value = searchParams.get(param);
    if (value) {
      response.cookies.set(cookieName, value, {
        maxAge: ATTRIBUTION_MAX_AGE,
        path: '/',
        sameSite: 'lax',
        httpOnly: false, // SubscribeClient reads it client-side
        ...(cookieDomain ? { domain: cookieDomain } : {}),
      });
    }
  }

  return response;
}

// Run on page routes only; skip static assets, images, and API proxying.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
