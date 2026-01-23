import { generatePageMetadata } from '@/data/page-metadata';
import PrivacyClient from './PrivacyClient';

export const metadata = generatePageMetadata('privacy');

export default function Page() {
  return <PrivacyClient />;
}
