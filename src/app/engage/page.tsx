import { generatePageMetadata } from '@/data/page-metadata';
import { Metadata } from 'next';
import EngageClient from './EngageClient';

const base = generatePageMetadata('engage');

// Canonical points to homepage — the authoritative version of this product content
export const metadata: Metadata = {
  ...base,
  alternates: {
    canonical: 'https://www.getsurfox.com',
  },
};

export default function Page() {
  return <EngageClient />;
}
