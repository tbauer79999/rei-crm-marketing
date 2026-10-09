import Link from 'next/link';
import { generatePageMetadata } from '@/data/page-metadata';
import ChannelPage, { Bubbles, Chip } from '../_components/ChannelPage';

export const metadata = generatePageMetadata('platform-web-chat');

const faqs = [
  {
    q: "What's the difference between an AI chatbot and SurFox AI web chat?",
    a: "A typical chatbot answers questions. SurFox AI asks your qualifying questions, handles objections, follows up, and books the appointment. It's built for your business and isn't a generic template.",
  },
  {
    q: 'Who sets up what the chat says?',
    a: 'SurFox AI builds the talk track, qualifying questions, and objection handling for you.',
  },
  {
    q: 'Is web chat included on the cheapest plan?',
    a: "Yes. Starter ($49/mo) includes web chat and Voice AI along with SMS. Starter doesn't include learning; Growth ($597/mo) and up do.",
  },
  {
    q: 'Does the website chat use the same script as SMS and voice?',
    a: 'Yes. All three channels share the same talk track and the same learning.',
  },
];

function Mock() {
  return (
    <div className="mx-auto max-w-[460px] rounded-2xl border border-[#E4E6E2] bg-white shadow-[0_40px_80px_-40px_rgba(19,23,31,0.35)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F4F5F3] border-b border-[#E4E6E2]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D8DBD6]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#D8DBD6]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#D8DBD6]" />
        <span className="ml-3 flex-1 rounded-md bg-white border border-[#E4E6E2] px-3 py-1 text-xs text-[#8A92A0]">brightwayhomes.com</span>
      </div>
      <div className="p-5 bg-[#FAFBFA]">
        <div className="h-3 w-2/3 rounded bg-[#E4E6E2] mb-2" />
        <div className="h-3 w-1/2 rounded bg-[#E4E6E2] mb-5" />
        <div className="ml-auto w-full max-w-[380px] rounded-2xl border border-[#E4E6E2] bg-white p-4 shadow-lg">
          <p className="text-xs font-semibold text-[#0A7C8C] mb-3">Chat with Brightway Homes</p>
          <Bubbles
            rows={[
              { side: 'them', tag: 'reads intent', text: 'Do you buy houses that need repairs?' },
              { side: 'ai', text: 'Yes, as-is. What area is the property in?' },
              { side: 'them', tag: 'qualifies', text: 'Maple St, Dayton' },
              { side: 'ai', text: 'Got it. What number is best to reach you? I can offer 10 AM or 4 PM tomorrow.' },
              { side: 'them', tag: 'books call', text: '555-0142, 4 PM works' },
            ]}
          />
          <div className="mt-4">
            <Chip>Qualified · Call booked</Chip>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contrast() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
      <div className="rounded-[18px] border border-[#E4E6E2] bg-[#F4F5F3] p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[.1em] text-[#8A92A0] mb-2">A typical chatbot</p>
        <p className="text-xl font-semibold text-[#5A626E]">Answers questions</p>
      </div>
      <div className="rounded-[18px] border border-[#0fb6c9] bg-[#EAF7F9] p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[.1em] text-[#0A7C8C] mb-2">SurFox AI</p>
        <p className="text-xl font-semibold">Qualifies and books</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <ChannelPage
      channel="web-chat"
      channelLabel="Web Chat"
      h1="AI website chat that qualifies and books leads"
      hook="How many of your website visitors leave without anyone ever talking to them?"
      sub="Most site chat answers questions and stops there. SurFox AI greets every visitor in seconds, works out if they're a fit, handles their hesitation, and books the appointment."
      mock={<Mock />}
      steps={[
        { title: 'We build it for you.', body: 'SurFox AI writes the talk track, qualifying questions, and objection handling for your business.' },
        { title: 'It talks to every visitor.', body: 'Day or night, it answers in seconds and qualifies as it goes.' },
        { title: 'It books the appointment.', body: "Ready leads get booked. Leads who aren't ready get followed up automatically." },
      ]}
      diffExtra={<Contrast />}
      diffs={[
        { title: 'Not a generic chatbot.', body: "It's built around your offer and your buyers. We set it up; you don't write a thing." },
        { title: 'Learns what books.', body: 'On Growth and up, it learns which messages lead to bookings and leans into them.' },
        { title: 'The same brain as your SMS and voice.', body: 'One talk track across every channel, so leads hear one consistent story.' },
      ]}
      crossLinkLine={
        <>
          When a visitor leaves, <Link href="/platform/sms" className="text-[#0A7C8C] underline">AI SMS follow-up</Link> keeps the conversation going. When they call, the{' '}
          <Link href="/platform/voice-ai" className="text-[#0A7C8C] underline">AI voice agent</Link> picks up.
        </>
      }
      faqs={faqs}
    />
  );
}
