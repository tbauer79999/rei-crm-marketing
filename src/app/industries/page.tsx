import { generatePageMetadata } from '@/data/page-metadata';
import IndustriesClient from './IndustriesClient';

export const metadata = generatePageMetadata('industries');

export default function Page() {
  return <IndustriesClient />;
}
