import type { Metadata } from 'next';
import { robotsMeta } from '../../lib/tools/seo';

// Section default: noindex everywhere except production. Pages that should be indexed opt in themselves.
export const metadata: Metadata = { robots: robotsMeta(false) };

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
