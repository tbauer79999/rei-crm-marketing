import { generatePageMetadata } from '@/data/page-metadata';
import LeadershipClient from './LeadershipClient';

export const metadata = generatePageMetadata('leadership');

export default function Page() {
  return <LeadershipClient />;
}
