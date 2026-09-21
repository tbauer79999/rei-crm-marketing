import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SubscribeClient from './SubscribeClient';
import { PLANS } from './plans';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function Page({ params }: { params: Promise<{ plan: string }> }) {
  const { plan } = await params;
  if (!Object.hasOwn(PLANS, plan)) notFound();
  return <SubscribeClient />;
}
