import Link from 'next/link';
import { generatePageMetadata } from '@/data/page-metadata';
import ChannelPage, { Bubbles, Chip } from '../_components/ChannelPage';

export const metadata = generatePageMetadata('platform-sms');

const faqs = [
  {
    q: 'What is AI SMS lead qualification?',
    a: 'The AI texts a new lead, asks your qualifying questions, handles objections, and books a call or appointment. SurFox AI answers in seconds and follows up automatically.',
  },
  {
    q: 'Do I have to write the scripts?',
    a: 'No. SurFox AI builds the talk track, qualifying questions, and objection handling for your business. You can run different campaigns for different angles.',
  },
  {
    q: 'Does it get better over time?',
    a: "On Growth ($597/mo) and Scale ($2,497/mo), it learns which messages get bookings and uses more of them. Starter ($49/mo) doesn't include learning.",
  },
  {
    q: 'Can it send leads to my CRM?',
    a: 'Yes. Leads can be pushed to a CRM through an active integration in Settings > Integrations. CRMs like Close or Zoho connect through Zapier or webhooks.',
  },
  {
    q: "What's the best AI to text and qualify inbound leads?",
    a: 'The best fit is a tool that replies within seconds, asks your own qualifying questions, handles objections, follows up automatically when leads go quiet, and hands the hot leads to a person. SurFox AI does this over SMS, and the same talk track also runs in website chat and Voice AI.',
  },
  {
    q: 'How is this different from auto-texts or drip campaigns?',
    a: 'An auto-text or drip campaign sends a fixed set of messages whether or not the lead replies. SurFox AI holds a two-way conversation. It reads each reply, answers questions, handles pushback, and follows up automatically when leads go quiet, then hands the hot leads to your team.',
  },
  {
    q: 'What does it cost?',
    a: 'Plans start at $49/month (Starter). Growth is $597/month, Growth Plus is $1,497/month, and Scale is $2,497/month. Every plan includes SMS, website chat, and Voice AI, and every plan is backed by a 30-day money-back guarantee.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'SurFox AI SMS Lead Qualification',
  description: 'AI that texts new leads back in seconds, asks your qualifying questions, handles objections, follows up automatically when leads go quiet, and hands hot leads to your team.',
  image: 'https://www.getsurfox.com/newSurFoxLogo1.png',
  url: 'https://www.getsurfox.com/platform/sms',
  brand: { '@type': 'Brand', name: 'SurFox AI' },
  offers: {
    '@type': 'Offer',
    name: 'Starter plan',
    price: '49',
    priceCurrency: 'USD',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    url: 'https://www.getsurfox.com/pricing',
  },
};

function Mock() {
  return (
    <div className="mx-auto max-w-[392px] rounded-[44px] bg-[#0e1320] p-3 shadow-[0_56px_96px_-38px_rgba(14,19,32,0.58)]">
      <div className="rounded-[34px] bg-white overflow-hidden">
        <div className="flex items-center gap-3 px-5 pt-5 pb-3 border-b border-[#EEF0EE]">
          <div className="w-10 h-10 rounded-full bg-[#EAF7F9] text-[#0A7C8C] font-bold flex items-center justify-center">M</div>
          <div className="min-w-0">
            <p className="font-semibold text-[15px]">Marta R.</p>
            <p className="text-xs text-[#8A92A0]">Motivated seller · Maple St</p>
          </div>
        </div>
        <div className="p-4">
          <Bubbles
            rows={[
              { side: 'ai', text: 'Hi Marta, Alex here with Brightway Homes. Saw you might consider an offer on the Maple St house. Still open to it?' },
              { side: 'them', tag: 'reads intent', text: "Depends what you're offering." },
              { side: 'ai', text: 'Cash, no repairs, you pick the close date. Got 10 min tomorrow to talk specifics?' },
              { side: 'them', tag: 'books call', text: 'Yeah, after 5 is good' },
            ]}
          />
        </div>
        <div className="border-t border-[#EEF0EE] bg-[#FBFDFD] px-4 py-3">
          <Chip>Qualified · Call booked</Chip>
        </div>
      </div>
    </div>
  );
}

function LearningLine() {
  return (
    <div className="mt-5" aria-label="Illustration: results improve from Campaign 1 to Campaign 12">
      <svg viewBox="0 0 200 70" className="w-full h-16" fill="none">
        <path d="M8 62 H192" stroke="#E4E6E2" strokeWidth="1.5" />
        <path d="M8 58 C 50 54, 80 44, 110 32 S 170 10, 192 8" stroke="#0fb6c9" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="flex justify-between text-[11px] font-semibold uppercase tracking-[.08em] text-[#8A92A0]">
        <span>Campaign 1</span>
        <span>Campaign 12</span>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    <ChannelPage
      channel="sms"
      channelLabel="SMS"
      h1="AI SMS lead qualification that texts back and books the call"
      hook="Plans from $49/month"
      sub="A new lead comes in. SurFox AI texts back in seconds, asks the right questions, handles the pushback, and books the call. Your team only talks to leads who are ready."
      mock={<Mock />}
      steps={[
        { title: 'We build it for you.', body: 'SurFox AI writes your talk track, qualifying questions, and objection handling, all built around your business.' },
        { title: 'It texts every new lead.', body: 'It replies in seconds, holds a real conversation, and follows up automatically when leads go quiet.' },
        { title: 'It books the call.', body: 'Qualified leads get booked. Push them to your CRM through an active integration if you want.' },
      ]}
      diffs={[
        { title: 'Built for your business, not a template.', body: "Your offer, your questions, your objections. We build it. You don't write scripts." },
        { title: 'Learns what books.', body: 'On Growth and up, it learns which messages actually get bookings and leans into them.', extra: <LearningLine /> },
        { title: 'A conversation, not a blast.', body: 'A text blaster sends. SurFox AI sells. Run separate campaigns for separate angles.' },
      ]}
      crossLinkLine={
        <>
          The same talk track runs in your <Link href="/platform/web-chat" className="text-[#0A7C8C] underline">AI website chat</Link> and on your{' '}
          <Link href="/platform/voice-ai" className="text-[#0A7C8C] underline">AI voice agent</Link>.
        </>
      }
      faqs={faqs}
    />
    </>
  );
}
