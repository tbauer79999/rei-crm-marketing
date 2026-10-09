import type { ReactNode } from 'react';
import Link from 'next/link';
import CustomerLogoBar from '../../components/CustomerLogoBar';
import { ArrowRight, ChevronDown, MessageSquare, Globe, Phone } from 'lucide-react';

/* Shared layout for /platform/sms, /platform/web-chat and /platform/voice-ai.
   Seven sections in a fixed order: hero, logo strip, how it works, what makes it different,
   one-brain-three-doors tiles, FAQ, final CTA. Copy lives in each page file. */

export type ChannelKey = 'sms' | 'web-chat' | 'voice-ai';

const CHANNELS: { key: ChannelKey; label: string; blurb: string; href: string; icon: typeof Phone }[] = [
  { key: 'sms', label: 'SMS', blurb: 'texts back new leads in seconds.', href: '/platform/sms', icon: MessageSquare },
  { key: 'web-chat', label: 'Web Chat', blurb: 'qualifies visitors on your site.', href: '/platform/web-chat', icon: Globe },
  { key: 'voice-ai', label: 'Voice AI', blurb: 'answers inbound calls and books on the call.', href: '/platform/voice-ai', icon: Phone },
];

const DEMO_HREF = '/demo';
const SITE = 'https://www.getsurfox.com';

export type ChannelPageProps = {
  channel: ChannelKey;
  channelLabel: string;
  h1: string;
  sub: string;
  /** Optional thought-provoking question shown between the H1 and the subhead. */
  hook?: string;
  mock: ReactNode;
  steps: { title: string; body: string; extra?: ReactNode }[];
  diffs: { title: string; body: string; extra?: ReactNode }[];
  diffExtra?: ReactNode;
  /** Sentence(s) containing the in-body cross-links, rendered under the tiles. */
  crossLinkLine: ReactNode;
  faqs: { q: string; a: string }[];
};

function CtaPair({ center = false, note = true }: { center?: boolean; note?: boolean }) {
  return (
    <>
      <div className={`flex flex-col sm:flex-row items-center justify-center ${center ? '' : 'lg:justify-start'} gap-4`}>
        <Link
          href={DEMO_HREF}
          className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white font-semibold hover:bg-black transition inline-flex items-center gap-2"
        >
          Get a live demo login
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/pricing"
          className="px-7 py-3.5 rounded-[9px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold hover:border-[#c9cdc7] transition"
        >
          See plans
        </Link>
      </div>
      {note && (
        <p className="text-sm mt-4 text-[#8A92A0]">
          Exactly what we give customers: no sales pitch, just the product.
        </p>
      )}
    </>
  );
}

export default function ChannelPage(p: ChannelPageProps) {
  const url = `${SITE}/platform/${p.channel}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Platform', item: `${SITE}/platform` },
      { '@type': 'ListItem', position: 3, name: p.channelLabel, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-[#F4F5F3] text-[#13171F]">
        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-8 pt-8 pb-20 sm:pb-24 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-sm text-[#8A92A0] mb-10">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-[#13171F]">Home</Link></li>
                <li aria-hidden="true">›</li>
                <li><Link href="/platform" className="hover:text-[#13171F]">Platform</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-[#13171F]">{p.channelLabel}</li>
              </ol>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] text-[#0A7C8C] text-xs font-semibold uppercase tracking-[.08em] mb-6">
                  Platform · {p.channelLabel}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-semibold leading-[1.08] tracking-tight mb-6">
                  {p.h1}
                </h1>
                {p.hook && (
                  <p className="text-xl sm:text-2xl font-semibold text-[#0A7C8C] leading-snug mb-4 max-w-xl mx-auto lg:mx-0">
                    {p.hook}
                  </p>
                )}
                <p className="text-lg sm:text-xl text-[#5A626E] leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0">
                  {p.sub}
                </p>
                <CtaPair />
              </div>
              <div>
                {p.mock}
                <p className="text-center text-sm text-[#5A626E] mt-5 pb-1">Sample conversation</p>
              </div>
            </div>
          </div>
        </section>

        <CustomerLogoBar />

        {/* How it works */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">How it works</h2>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${p.steps.some((s) => s.extra) ? 'md:items-start' : ''}`}>
              {p.steps.map((s, i) => (
                <div key={s.title} className="p-7 rounded-[22px] border border-[#E4E6E2] bg-white">
                  <div className="w-11 h-11 rounded-full bg-[#13171F] text-white flex items-center justify-center font-bold mb-5">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-[#5A626E] leading-relaxed">{s.body}</p>
                  {s.extra}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What makes it different */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12">What makes it different</h2>
            {p.diffExtra && <div className="mb-8">{p.diffExtra}</div>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {p.diffs.map((d) => (
                <div key={d.title} className="p-7 rounded-[18px] border border-[#E4E6E2] bg-[#F4F5F3]">
                  <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                  <p className="text-[#5A626E] leading-relaxed text-[15px]">{d.body}</p>
                  {d.extra}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One brain. Three doors. */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-5">One brain. Three doors.</h2>
            <p className="text-lg text-[#5A626E] leading-relaxed text-center max-w-3xl mx-auto mb-10">
              SMS, website chat, and Voice AI share the same talk track, the same qualifying questions, and the same
              learning. A lead can text, chat, or call. They get the same conversation either way, built for your
              business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CHANNELS.map((c) => {
                const current = c.key === p.channel;
                const Icon = c.icon;
                return (
                  <Link
                    key={c.key}
                    href={c.href}
                    aria-current={current ? 'page' : undefined}
                    className={`p-6 rounded-[18px] border transition ${
                      current
                        ? 'border-[#0fb6c9] bg-[#EAF7F9] shadow-[0_18px_40px_-30px_rgba(15,182,201,0.5)]'
                        : 'border-[#E4E6E2] bg-white hover:border-[#c9cdc7]'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#dCEEF1] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#0A7C8C]" />
                    </div>
                    <p className="font-semibold text-lg mb-1">{c.label}</p>
                    <p className="text-[#5A626E] text-[15px] leading-relaxed">
                      {c.label} {c.blurb}
                    </p>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-sm font-semibold text-[#5A626E] mt-6">
              Every plan includes all three, Starter included.
            </p>
            <p className="text-center text-[#5A626E] leading-relaxed mt-4 max-w-2xl mx-auto">{p.crossLinkLine}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">Questions</h2>
            <div className="flex flex-col gap-3">
              {p.faqs.map((f) => (
                <details key={f.q} className="group rounded-[14px] border border-[#E4E6E2] bg-white open:border-[#bfe6ec]">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#0A7C8C] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-5 text-[#5A626E] leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-5">See it work before you talk to anyone.</h2>
            <p className="text-lg text-[#5A626E] leading-relaxed mb-9">
              Get a login to a live demo account. It&apos;s exactly what we give customers: no sales pitch, just the
              product.
            </p>
            <CtaPair center note={false} />
          </div>
        </section>
      </div>
    </>
  );
}

/* ---------- Mock building blocks ---------- */

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E7F6EC] text-[#12A150] text-xs font-semibold">
      <span className="w-2 h-2 rounded-full bg-[#12A150]" />
      {children}
    </span>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="self-center whitespace-nowrap rounded-md bg-[#EAF7F9] text-[#0A7C8C] px-2 py-1 text-[10px] font-semibold uppercase tracking-[.08em]">
      {children}
    </span>
  );
}

export type Bubble = { side: 'ai' | 'them'; text: string; tag?: string };

export function Bubbles({ rows }: { rows: Bubble[] }) {
  return (
    <div className="flex flex-col gap-2.5">
      {rows.map((r, i) =>
        r.side === 'ai' ? (
          <div key={i} className="flex">
            <div className="max-w-[82%] rounded-[17px] rounded-bl-[5px] bg-[#f1f3f4] text-[#22272f] px-3.5 py-2.5 text-[13.5px] leading-snug">
              {r.text}
            </div>
          </div>
        ) : (
          <div key={i} className="flex justify-end gap-2.5">
            {r.tag && <Tag>{r.tag}</Tag>}
            <div className="max-w-[78%] rounded-[17px] rounded-br-[5px] bg-[#13171F] text-white px-3.5 py-2.5 text-[13.5px] leading-snug">
              {r.text}
            </div>
          </div>
        ),
      )}
    </div>
  );
}
