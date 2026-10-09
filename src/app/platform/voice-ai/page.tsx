import Link from 'next/link';
import { CalendarCheck, Mail } from 'lucide-react';
import { generatePageMetadata } from '@/data/page-metadata';
import ChannelPage, { Chip } from '../_components/ChannelPage';

export const metadata = generatePageMetadata('platform-voice-ai');

const faqs = [
  {
    q: 'What does an AI voice agent for inbound leads do?',
    a: 'It answers calls from leads, asks your qualifying questions, handles objections, and books the appointment. SurFox AI builds the talk track for your business.',
  },
  {
    q: 'How does the AI book appointments on a call?',
    a: "SurFox AI checks your Google or Outlook calendar for availability, books an open slot during the call, and emails a calendar invite (.ics) once it's booked.",
  },
  {
    q: 'Is Voice AI included in every plan?',
    a: 'Yes. Starter ($49/mo) includes Voice AI, web chat, and SMS. Learning comes with Growth ($597/mo) and Scale ($2,497/mo).',
  },
];

function Quote({ who, text, tag }: { who: 'ai' | 'caller'; text: string; tag?: string }) {
  const ai = who === 'ai';
  return (
    <div className={`flex gap-2.5 ${ai ? '' : 'justify-end'}`}>
      {!ai && tag && (
        <span className="self-center whitespace-nowrap rounded-md bg-[#EAF7F9] text-[#0A7C8C] px-2 py-1 text-[10px] font-semibold uppercase tracking-[.08em]">
          {tag}
        </span>
      )}
      <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-snug ${ai ? 'bg-[#f1f3f4] text-[#22272f]' : 'bg-[#13171F] text-white'}`}>
        &ldquo;{text}&rdquo;
      </div>
    </div>
  );
}

function Mock() {
  const bars = [6, 12, 20, 10, 24, 14, 8, 18, 26, 12, 7, 16, 22, 9, 13];
  return (
    <div className="mx-auto max-w-[420px] rounded-[22px] border border-[#E4E6E2] bg-white shadow-[0_40px_80px_-40px_rgba(19,23,31,0.35)] overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EEF0EE]">
        <div className="w-10 h-10 rounded-full bg-[#EAF7F9] text-[#0A7C8C] flex items-center justify-center font-bold">J</div>
        <div>
          <p className="font-semibold text-[15px]">Incoming call · James K.</p>
          <p className="text-xs text-[#8A92A0]">Answered by SurFox AI</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 h-16 bg-[#FBFDFD]" aria-hidden="true">
        {bars.map((h, i) => (
          <span key={i} className="w-1 rounded-full bg-[#0fb6c9]" style={{ height: h }} />
        ))}
      </div>
      <div className="p-5 flex flex-col gap-2.5">
        <Quote who="ai" text="Thanks for calling, what's got you looking today?" />
        <Quote who="caller" tag="reads intent" text="I need a quote, but I'm not sure I'm ready to commit." />
        <Quote who="ai" text="Totally fair. A short call lets you see the numbers first, no commitment. Does tomorrow at 4 work?" />
        <Quote who="caller" tag="books call" text="Yeah, 4 works." />
      </div>
      <div className="border-t border-[#EEF0EE] bg-[#FBFDFD] px-5 py-3 flex flex-wrap gap-2">
        <Chip>Qualified · Appointment booked</Chip>
        <Chip>Calendar invite sent (.ics)</Chip>
      </div>
    </div>
  );
}

function BookingVisual() {
  return (
    <div className="mt-5 rounded-xl border border-[#E4E6E2] bg-[#F4F5F3] p-4" aria-label="Illustration: open calendar slots, then an emailed invite">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#5A626E] mb-3">
        <CalendarCheck className="w-4 h-4 text-[#0A7C8C]" />
        Open times (Google or Outlook)
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {['Tue 10:00', 'Tue 4:00', 'Wed 9:30'].map((s, i) => (
          <span
            key={s}
            className={`rounded-md px-2 py-1 text-xs font-semibold ${i === 1 ? 'bg-[#0fb6c9] text-white' : 'bg-white border border-[#E4E6E2] text-[#5A626E]'}`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-white border border-[#E4E6E2] px-3 py-2 text-xs text-[#5A626E]">
        <Mail className="w-4 h-4 text-[#0A7C8C]" />
        Invite emailed · appointment.ics
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ChannelPage
      channel="voice-ai"
      channelLabel="Voice AI"
      h1="An AI voice agent for inbound leads that books on the call"
      sub="A lead calls. SurFox AI picks up, asks the questions your best rep would ask, handles the objections, and books the appointment before the call ends."
      mock={<Mock />}
      steps={[
        { title: 'We build it for you.', body: 'SurFox AI writes the talk track, qualifying questions, and objection handling for your business.' },
        { title: 'It answers every lead call.', body: 'It answers right away, holds a natural conversation, and qualifies as it goes.' },
        {
          title: 'It books on the call.',
          body: 'It checks your Google or Outlook calendar for open times, books the slot while the lead is still on the phone, and emails a calendar invite (.ics).',
          extra: <BookingVisual />,
        },
      ]}
      diffs={[
        { title: 'Built for your business.', body: "It's your questions and your objections, set up by us, not a generic phone bot." },
        { title: 'Learns what books.', body: 'On Growth and up, it learns which approaches get bookings and leans into them.' },
        { title: 'Shares one brain with SMS and chat.', body: 'Same talk track, same learning, so every channel improves together.' },
      ]}
      crossLinkLine={
        <>
          Leads who text get the same conversation through <Link href="/platform/sms" className="text-[#0A7C8C] underline">AI SMS lead qualification</Link>. Site visitors get it through{' '}
          <Link href="/platform/web-chat" className="text-[#0A7C8C] underline">AI website chat</Link>.
        </>
      }
      faqs={faqs}
    />
  );
}
