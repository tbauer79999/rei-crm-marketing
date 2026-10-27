'use client';

import { useEffect, useState } from 'react';
import { ATTRIBUTION_CODE, COOKIE_NAMES } from '../../../lib/tools/config';

export type ClientAttribution = { src: string | null; aff: string | null; referrer: string | null; landing: string | null };

const KEY = 'tools_first_touch';
const EMPTY: ClientAttribution = { src: null, aff: null, referrer: null, landing: null };

const ok = (v: string | null | undefined) => (v && ATTRIBUTION_CODE.test(v) ? v : null);

function cookie(name: string): string | null {
  const m = document.cookie.match(new RegExp(`(?:^|;\s*)${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}

// First-touch for this browser session: the tag in the URL (or the site's first-touch cookie), the external referrer, and the first
// page landed on. Kept in sessionStorage so it is gone when the tab closes.
export function readFirstTouch(): ClientAttribution {
  try {
    const saved = sessionStorage.getItem(KEY);
    if (saved) return { ...EMPTY, ...JSON.parse(saved) };
  } catch {
    /* storage unavailable */
  }
  const q = new URLSearchParams(window.location.search);
  let referrer: string | null = null;
  try {
    if (document.referrer && new URL(document.referrer).host !== window.location.host) referrer = document.referrer;
  } catch {
    /* ignore */
  }
  const ft: ClientAttribution = {
    src: ok(q.get('src')) ?? ok(cookie(COOKIE_NAMES.firstSrc)),
    aff: ok(q.get('aff')) ?? ok(cookie(COOKIE_NAMES.aff)),
    referrer,
    landing: window.location.pathname,
  };
  try {
    sessionStorage.setItem(KEY, JSON.stringify(ft));
  } catch {
    /* storage unavailable */
  }
  return ft;
}

export function useAttribution(): ClientAttribution {
  const [a, setA] = useState<ClientAttribution>(EMPTY);
  useEffect(() => setA(readFirstTouch()), []);
  return a;
}

export function reportEvent(type: 'result_shown' | 'demo_clicked' | 'starter_clicked', shareId: string | null, attribution: ClientAttribution) {
  try {
    const body = JSON.stringify({ type, share_id: shareId, attribution });
    if (navigator.sendBeacon) navigator.sendBeacon('/api/tools/event', new Blob([body], { type: 'application/json' }));
    else void fetch('/api/tools/event', { method: 'POST', headers: { 'content-type': 'application/json' }, body, keepalive: true });
  } catch {
    /* analytics must never break the page */
  }
}
