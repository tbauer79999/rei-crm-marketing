'use client';

import { outboundUrl } from '../../../lib/tools/attribution';
import { OFFER } from '../../../lib/tools/config';
import { reportEvent, useAttribution } from './useAttribution';

// The same offer on pass or fail. Both links carry the attribution tag; the primary also carries the website that was checked.
const DUMMY_ORIGIN = 'https://relative.invalid';

export default function Offer({ site, shareId }: { site: string | null; shareId: string | null }) {
  const a = useAttribution();
  const demo = outboundUrl(OFFER.primaryPath, a, site, DUMMY_ORIGIN);
  const starter = outboundUrl(OFFER.secondaryPath, a, null, DUMMY_ORIGIN);
  // outboundUrl needs an origin to build a URL; it is stripped so the links stay on the current host.
  const rel = (u: string) => u.replace(DUMMY_ORIGIN, '');
  return (
    <aside aria-label="Next step" className="rounded-2xl bg-[var(--ink)] p-5 text-white sm:p-6">
      <p className="text-lg font-semibold leading-snug">{OFFER.line}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={rel(demo)}
          onClick={() => reportEvent('demo_clicked', shareId, a)}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 py-3 text-base font-semibold text-[var(--ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {OFFER.primaryLabel}
        </a>
        <a
          href={rel(starter)}
          onClick={() => reportEvent('starter_clicked', shareId, a)}
          className="inline-flex min-h-12 items-center justify-center rounded-xl px-2 py-3 text-base font-medium text-white underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {OFFER.secondaryLabel}
        </a>
      </div>
    </aside>
  );
}
