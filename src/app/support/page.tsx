import { generatePageMetadata } from '@/data/page-metadata';
import SupportClient from './SupportClient';

export const metadata = generatePageMetadata('support');

export default function Page() {
  return <SupportClient />;
}
