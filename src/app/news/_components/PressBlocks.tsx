import { PRESS } from '@/data/press-info';

/** "About SurFox AI" boilerplate. Text comes from src/data/press-info.ts. */
export function AboutBoilerplate() {
  return (
    <section aria-labelledby="about-surfox" className="mt-10">
      <h2 id="about-surfox" className="text-lg font-bold text-[#13171F]">About SurFox AI</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#5A626E]">{PRESS.boilerplate}</p>
    </section>
  );
}

/** Media contact block. Details come from src/data/press-info.ts. */
export function MediaContact() {
  return (
    <section aria-labelledby="media-contact" className="mt-8">
      <h2 id="media-contact" className="text-lg font-bold text-[#13171F]">Media contact</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#5A626E]">
        {PRESS.contactName}
        <br />
        <a className="font-semibold text-[#0A7C8C] hover:underline break-all" href={`mailto:${PRESS.contactEmail}`}>
          {PRESS.contactEmail}
        </a>
      </p>
    </section>
  );
}
