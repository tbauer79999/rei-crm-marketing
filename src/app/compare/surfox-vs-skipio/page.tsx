import { generatePageMetadata } from '@/data/page-metadata';
import SkipioClient from './SkipioClient';

export const metadata = generatePageMetadata('compare-skipio');

export default function Page() {
  return <SkipioClient />;
}
