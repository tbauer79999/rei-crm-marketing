import { generatePageMetadata } from '@/data/page-metadata';
import SmarterContactClient from './SmarterContactClient';

export const metadata = generatePageMetadata('compare-smarter-contact');

export default function Page() {
  return <SmarterContactClient />;
}
