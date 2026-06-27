import { generatePageMetadata } from '@/data/page-metadata';
import FollowUpBossClient from './FollowUpBossClient';

export const metadata = generatePageMetadata('integrations-follow-up-boss');

export default function Page() {
  return <FollowUpBossClient />;
}
