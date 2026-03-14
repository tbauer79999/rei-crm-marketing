import type { Metadata } from 'next';
import SubscribeClient from './SubscribeClient';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <SubscribeClient />;
}
