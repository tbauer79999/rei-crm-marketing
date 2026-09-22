import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

// Attribution capture for referral (?ref=) and affiliate (?aff=) codes.
//
// Runs on the FIRST page load of any route, so the code is persisted the moment
// a visitor lands via a link, regardless of where they browse afterwards or how
// long they take to convert. Without this, the code only survived the direct
// "land on /pricing -> click a plan -> checkout" path and was lost if the
// visitor navigated away first. SubscribeClient reads these cookies as a
// fallback at checkout (URL -> localStorage -> cookie).
const ATTRIBUTION_MAX_AGE = 60 * 60 * 24 * 60; // 60 days

// Codes are later sent to the backend as referralCode / affiliateCode, so only
// persist values shaped like a real code. Anything else is ignored, not stored.
const ATTRIBUTION_CODE = /^[A-Za-z0-9_-]{1,64}$/;

// Click-tracking beacon target — the platform's Express API (same origin
// SubscribeClient already posts create-checkout-session to). No new service.
const CLICK_LOG_URL = 'https://api.surfox.ai/api/affiliates/log-click';

function cookieOptions(maxAge: number, cookieDomain: string | undefined) {
  return {
    maxAge,
    path: '/',
    sameSite: 'lax' as const,
    httpOnly: false, // SubscribeClient reads these client-side
    ...(cookieDomain ? { domain: cookieDomain } : {}),
  };
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
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
    if (value && ATTRIBUTION_CODE.test(value)) {
      response.cookies.set(cookieName, value, cookieOptions(ATTRIBUTION_MAX_AGE, cookieDomain));
    }
  }

  // Click tracking rides the same ?aff= capture above, with a second token
  // (click_id) instead of a parallel system — see affiliate_clicks migration.
  // Only fires when an affiliate link was actually followed THIS pageview
  // (aff present in the URL), not on every later page a visitor browses while
  // the attribution cookie above is just along for the ride: that would log
  // one "click" per pageview instead of one per real link-follow. A return
  // visit that re-includes ?aff= is treated as a new click on purpose — that's
  // a real ad/link impression being followed again, not a stale cookie.
  const affValue = searchParams.get('aff');
  if (affValue && ATTRIBUTION_CODE.test(affValue)) {
    const rawSrc = searchParams.get('src');
    const channel = rawSrc && ATTRIBUTION_CODE.test(rawSrc) ? rawSrc : null;
    const clickId = crypto.randomUUID();

    response.cookies.set('surfox_click_id', clickId, cookieOptions(ATTRIBUTION_MAX_AGE, cookieDomain));

    // event.waitUntil, NOT a bare un-awaited fetch: the edge runtime can tear
    // down this request's execution context as soon as the response is
    // returned above, which would silently kill an in-flight fetch and
    // undercount clicks in production with no visible error — exactly the
    // trust problem this feature exists to fix. waitUntil keeps the fetch
    // alive past the response.
    event.waitUntil(
      fetch(CLICK_LOG_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          click_id: clickId,
          code: affValue,
          channel,
          referrer: request.headers.get('referer') || null,
          landing_path: request.nextUrl.pathname,
        }),
      }).catch(() => {}) // best-effort; a dropped click-log call must never surface to the visitor
    );
  }

  return response;
}

// Run on page routes only; skip static assets, images, and API proxying.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};
