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
      });
    }
  }

  return response;
}

// Run on page routes only; skip static assets, images, and API proxying.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
