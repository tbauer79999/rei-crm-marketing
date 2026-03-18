import { generatePageMetadata } from '@/data/page-metadata';
import StaffingClient from './StaffingClient';

export const metadata = generatePageMetadata('staffing');

export default function Page() {
  return <StaffingClient />;
}
