import { generatePageMetadata } from '@/data/page-metadata';
import HowItWorksClient from './HowItWorksClient';

export const metadata = generatePageMetadata('how-it-works');

export default function Page() {
  return <HowItWorksClient />;
}
