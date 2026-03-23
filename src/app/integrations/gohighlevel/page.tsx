import { generatePageMetadata } from '@/data/page-metadata';
import GoHighLevelClient from './GoHighLevelClient';

export const metadata = generatePageMetadata('integrations-gohighlevel');

export default function Page() {
  return <GoHighLevelClient />;
}
