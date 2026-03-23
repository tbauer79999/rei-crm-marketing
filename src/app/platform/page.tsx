import { generatePageMetadata } from '@/data/page-metadata';
import PlatformClient from './PlatformClient';

export const metadata = generatePageMetadata('platform');

export default function Page() {
  return <PlatformClient />;
}
