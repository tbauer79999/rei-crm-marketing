import Image from 'next/image';

/* Customer logo strip shared by the platform channel pages (and the homepage). */
export default function CustomerLogoBar() {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#8A92A0] mb-4">
          Used by teams like
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <Image
            src="/images/customerLogos/DaSilva-Team-Logo.png"
            alt="Da Silva Team"
            width={500}
            height={181}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/images/customerLogos/EXODUS-logo_horizontal_transparent.png"
            alt="Exodus Property Solutions"
            width={2000}
            height={754}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/images/customerLogos/HealthPlus-Staffing-Logo.png"
            alt="HealthPlus Staffing"
            width={8312}
            height={7925}
            className="h-28 w-auto object-contain"
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[.12em] text-[#8A92A0] mt-5">
          and many more
        </p>
        <p className="text-sm text-[#5A626E] mt-4">One customer: 160+ hot leads in 30 days.</p>
      </div>
    </section>
  );
}
