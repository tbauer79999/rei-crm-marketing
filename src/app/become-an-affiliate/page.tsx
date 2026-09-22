import { generatePageMetadata } from '@/data/page-metadata';
import BecomeAffiliateClient from './BecomeAffiliateClient';

export const metadata = generatePageMetadata('become-an-affiliate');

export default function Page() {
  return <BecomeAffiliateClient />;
}
