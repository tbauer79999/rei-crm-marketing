import { generatePageMetadata } from '@/data/page-metadata';
import SecurityClient from './SecurityClient';

export const metadata = generatePageMetadata('security');

export default function Page() {
  return <SecurityClient />;
}
