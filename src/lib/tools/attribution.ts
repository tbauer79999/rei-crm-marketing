import { ATTRIBUTION_CODE, DEFAULT_TAG, SITE_ORIGIN } from './config';

export type Attribution = { src: string | null; aff: string | null; referrer: string | null; landing: string | null };

const clean = (v: unknown): string | null => (typeof v === 'string' && ATTRIBUTION_CODE.test(v) ? v : null);

function cleanReferrer(v: unknown): string | null {
  if (typeof v !== 'string' || !v) return null;
  try {
    const u = new URL(v);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    return `${u.origin}${u.pathname}`.slice(0, 200); // query strings can carry personal data: dropped
  } catch {
    return null;
  }
}

function cleanLanding(v: unknown): string | null {
  if (typeof v !== 'string' || !v.startsWith('/') || v.startsWith('//')) return null;
  return v.split(/[?#]/)[0].slice(0, 200);
}

// First-touch values arrive from the browser (kept for the session) and, as a fallback, from the cookies the middleware sets.
// Anything not shaped like a code is dropped, never stored.
export function resolveAttribution(
  body: { src?: unknown; aff?: unknown; referrer?: unknown; landing?: unknown } | null | undefined,
  cookies: { firstSrc?: string | null; aff?: string | null },
): Attribution {
  return {
    src: clean(body?.src) ?? clean(cookies.firstSrc),
    aff: clean(body?.aff) ?? clean(cookies.aff),
    referrer: cleanReferrer(body?.referrer),
    landing: cleanLanding(body?.landing),
  };
}

// The tag shown in alerts and carried on every outbound link. The default applies only when no tag came in.
export function tagOf(a: Pick<Attribution, 'src' | 'aff'>): string {
  return a.src || a.aff || DEFAULT_TAG;
}

export function outboundUrl(path: string, a: Pick<Attribution, 'src' | 'aff'>, site?: string | null, origin: string = SITE_ORIGIN): string {
  const u = new URL(path, origin);
  if (a.src) u.searchParams.set('src', a.src);
  if (a.aff) u.searchParams.set('aff', a.aff);
  if (!a.src && !a.aff) u.searchParams.set('src', DEFAULT_TAG); // the default applies only when no tag came in
  if (site) u.searchParams.set('website', site);
  return u.toString();
}
