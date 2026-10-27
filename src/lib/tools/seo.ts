import type { Metadata } from 'next';
import { SITE_ORIGIN } from './config';

// Only the production deployment on the real domain is indexable. Preview deploys and local builds are noindex.
export function isIndexable(): boolean {
  return process.env.VERCEL_ENV === 'production';
}

export function robotsMeta(index: boolean): Metadata['robots'] {
  const on = index && isIndexable();
  return on ? { index: true, follow: true } : { index: false, follow: false, googleBot: { index: false, follow: false } };
}

export const canonicalFor = (path: string) => `${SITE_ORIGIN}${path}`;
