import type { Metadata } from 'next';
import BusinessSignupClient from './BusinessSignupClient';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <BusinessSignupClient />;
}
