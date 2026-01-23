import { generatePageMetadata } from '@/data/page-metadata';
import RequestAccessClient from './RequestAccessClient';

export const metadata = generatePageMetadata('request-access');

export default function Page() {
  return <RequestAccessClient />;
}
