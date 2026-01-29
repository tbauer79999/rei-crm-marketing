import { generatePageMetadata } from '@/data/page-metadata';
import LeadSherpaClient from './LeadSherpaClient';

export const metadata = generatePageMetadata('compare-lead-sherpa');

export default function Page() {
  return <LeadSherpaClient />;
}
