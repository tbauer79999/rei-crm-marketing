import { generatePageMetadata } from '@/data/page-metadata';
import LaunchControlClient from './LaunchControlClient';

export const metadata = generatePageMetadata('compare-launch-control');

export default function Page() {
  return <LaunchControlClient />;
}
