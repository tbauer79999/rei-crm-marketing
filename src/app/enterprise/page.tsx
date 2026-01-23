import { generatePageMetadata } from '@/data/page-metadata';
import EnterpriseClient from './EnterpriseClient';

export const metadata = generatePageMetadata('enterprise');

export default function Page() {
  return <EnterpriseClient />;
}
