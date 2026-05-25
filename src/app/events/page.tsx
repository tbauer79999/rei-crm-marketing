import { generatePageMetadata } from '@/data/page-metadata';
import EventsClient from './EventsClient';

export const metadata = generatePageMetadata('events');

export default function Page() {
  return <EventsClient />;
}
