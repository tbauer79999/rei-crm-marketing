import { generatePageMetadata } from '@/data/page-metadata';
import TextusClient from './TextusClient';

export const metadata = generatePageMetadata('compare-textus');

export default function Page() {
  return <TextusClient />;
}
