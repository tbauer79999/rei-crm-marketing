import { generatePageMetadata } from '@/data/page-metadata';
import AllCompetitorsClient from './AllCompetitorsClient';

export const metadata = generatePageMetadata('compare-all-competitors');

export default function Page() {
  return <AllCompetitorsClient />;
}
