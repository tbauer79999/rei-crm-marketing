import { generatePageMetadata } from '@/data/page-metadata';
import AboutClient from './AboutClient';

export const metadata = generatePageMetadata('about');

export default function Page() {
  return <AboutClient />;
}
