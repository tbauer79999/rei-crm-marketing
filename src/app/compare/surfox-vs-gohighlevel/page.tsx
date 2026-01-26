import { generatePageMetadata } from '@/data/page-metadata';
import GoHighLevelClient from './GoHighLevelClient';

export const metadata = generatePageMetadata('compare-gohighlevel');

export default function Page() {
  return <GoHighLevelClient />;
}
