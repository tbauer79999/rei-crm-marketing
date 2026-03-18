import { generatePageMetadata } from '@/data/page-metadata';
import WholesalersClient from './WholesalersClient';

export const metadata = generatePageMetadata('wholesalers');

export default function Page() {
  return <WholesalersClient />;
}
