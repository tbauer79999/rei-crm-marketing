import type { Metadata } from 'next';
import PartnerSignupClient from './PartnerSignupClient';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PartnerSignupClient />;
}
