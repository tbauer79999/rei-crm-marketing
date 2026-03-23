import { generatePageMetadata } from '@/data/page-metadata';
import ContactClient from './ContactClient';

export const metadata = generatePageMetadata('contact');

export default function Page() {
  return <ContactClient />;
}
