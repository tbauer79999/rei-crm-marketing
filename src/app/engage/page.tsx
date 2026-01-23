import { generatePageMetadata } from '@/data/page-metadata';
import EngageClient from './EngageClient';

export const metadata = generatePageMetadata('engage');

export default function Page() {
  return <EngageClient />;
}
