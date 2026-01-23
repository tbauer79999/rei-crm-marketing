import { generatePageMetadata } from '@/data/page-metadata';
import DemoClient from './DemoClient';

export const metadata = generatePageMetadata('demo');

export default function Page() {
  return <DemoClient />;
}
