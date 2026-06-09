import { generatePageMetadata } from '@/data/page-metadata';

export const metadata = generatePageMetadata('careers');

export default function CareersPage() {
  return (
    <div className="py-12 px-4 text-center">
      <h1 className="text-4xl font-bold text-[#13171F]">Careers</h1>
      <p className="text-[#5A626E] mt-4">Coming soon...</p>
    </div>
  )
}
