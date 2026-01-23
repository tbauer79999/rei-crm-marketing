import { generatePageMetadata } from '@/data/page-metadata';
import IntegrationsClient from './IntegrationsClient';

export const metadata = generatePageMetadata('integrations');

export default function Page() {
  return <IntegrationsClient />;
}
