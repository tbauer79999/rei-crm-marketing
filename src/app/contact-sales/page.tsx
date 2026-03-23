import type { Metadata } from 'next';
import ContactSalesClient from './ContactSalesClient';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ContactSalesClient />;
}
