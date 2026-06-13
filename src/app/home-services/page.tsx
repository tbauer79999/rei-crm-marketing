import { generatePageMetadata } from '@/data/page-metadata';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Phone, Zap, Clock, Wrench, RefreshCw } from 'lucide-react';

export const metadata = generatePageMetadata('home-services');

const problems = [
  {
    icon: Clock,
    title: 'The first contractor to respond wins the job. That is rarely you.',
    body: 'A Harvard Business Review study of over 2,241 companies found that businesses responding to a new lead within 5 minutes are 100 times more likely to make contact than those that wait 30 minutes. Your team is on a job. The lead moves on.',
  },
  {
    icon: RefreshCw,
    title: 'You have a list full of money you stopped chasing.',
    body: 'Old estimates. Seasonal inquiries. Leads that went cold after one text. That is not a dead list. That is revenue sitting untouched because nobody had time to follow up. Most home services companies never work their list past the first attempt.',
  },
  {
    icon: MessageSquare,
    title: 'You cannot respond faster by hiring faster.',
    body: 'Adding office staff to handle inbound follow-up is expensive and inconsistent. The problem is not headcount. It is what happens in the gap between a lead coming in and a human picking up the phone.',
  },
];

const steps = [
  {
    step: 1,
    title: 'A lead comes in, SurFox AI responds instantly',
    body: 'From your website form, Google LSA, Facebook ad, or any source. The moment a lead submits their info, SurFox AI is in the conversation. No delay. No voicemail. No missed window.',
  },
  {
    step: 2,
    title: 'AI qualifies the conversation via SMS',
    body: 'Natural back and forth. What service do they need? When? Are they ready to book? The AI handles objections, asks follow-up questions, and keeps the conversation moving. It sounds like a person because it is trained to converse like one.',
  },
  {
    step: 3,
    title: 'Hot leads routed to you instantly',
    body: 'When a lead shows real buying signals, you get an instant notification with full conversation context. You are not starting from scratch. You are closing.',
  },
  {
    step: 4,
    title: 'Old leads reactivated on autopilot',
    body: 'Upload your cold list. SurFox AI runs a reactivation campaign automatically, re-engaging old estimates, seasonal contacts, and past inquiries. Same AI. Same qualification. New revenue from a list you already own.',
  },
];

const comparisonRows: Array<{
  label: string;
  manual: boolean | string;
  surfox: boolean | string;
}> = [
  { label: 'Responds to new leads instantly', manual: false, surfox: true },
  { label: 'Available 24/7', manual: false, surfox: true },
  { label: 'Reactivates cold lists automatically', manual: false, surfox: true },
  { label: 'Qualifies leads via SMS', manual: false, surfox: true },
  { label: 'Learns from conversations', manual: false, surfox: true },
  { label: 'Zapier integration', manual: false, surfox: true },
  { label: 'Cost', manual: 'Your time + missed revenue', surfox: 'From $147/mo' },
];

const objections = [
  {
    q: '"Will it sound robotic?"',
    a: 'The AI converses naturally. Homeowners have mistaken it for a human rep. You control the persona, tone, and the script it works from.',
  },
  {
    q: '"We already follow up with new leads."',
    a: 'How fast? If the answer is anything longer than a few minutes, you are losing jobs to whoever responds first. The Harvard Business Review study found that waiting just 30 minutes drops your contact rate by 100 times.',
  },
  {
    q: '"What about our old list, is it worth reactivating?"',
    a: 'Most home services companies have hundreds of untouched leads from the last 12 months. A single reactivation campaign routinely surfaces jobs that were never formally closed. They just went cold because follow-up stopped.',
  },
];

export default function Page() {
  return (
    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Section 1: Hero */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-8">
              <Wrench className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">For Home Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              Your Lead Just Called<br className="hidden sm:block" /> Two Other Contractors.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              You were on a job. They didn&apos;t leave a voicemail. SurFox AI responds the second they reach out, qualifying the conversation, asking the right questions, and flagging the ones worth calling back.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/pricing"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white text-base font-semibold hover:bg-black transition inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="px-7 py-3.5 rounded-[9px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold hover:border-[#c9cdc7] transition"
              >
                Schedule a Demo
              </a>
            </div>

            <p className="text-sm text-[#8A92A0]">
              14-day free trial. 2,000 free messages. No setup fees.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] leading-tight">
              The Problem With Your Current Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[22px] bg-white border border-[#E4E6E2] shadow-[0_30px_64px_-38px_rgba(19,23,31,0.24)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#0A7C8C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#13171F] mb-3">{item.title}</h3>
                <p className="text-[#5A626E] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F]">
              How it works
            </h2>
          </div>

          <div className="space-y-5">
            {steps.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-[16px] border border-[#E4E6E2] bg-[#F4F5F3]"
              >
                <div className="w-9 h-9 rounded-full bg-[#13171F] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#13171F] mb-1">{item.title}</h3>
                  <p className="text-[#5A626E] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F]">
              SurFox AI vs Manual Follow-up
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-[18px] overflow-hidden border border-[#E4E6E2] bg-white shadow-[0_30px_64px_-38px_rgba(19,23,31,0.24)]">
              <thead>
                <tr className="bg-[#F4F5F3] text-[#13171F]">
                  <th className="px-5 py-4 text-sm font-semibold"></th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">Manual Follow-up</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center bg-[#13171F] text-white">SurFox AI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F4F5F3]'}>
                    <td className="px-5 py-4 text-sm font-medium text-[#13171F]">{row.label}</td>
                    <td className="px-5 py-4 text-sm text-center">
                      {row.manual === false ? (
                        <XCircle className="w-5 h-5 text-[#c2c7cd] mx-auto" />
                      ) : (
                        <span className="text-[#5A626E]">{row.manual}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-center bg-[#EAF7F9]">
                      {row.surfox === true ? (
                        <CheckCircle className="w-5 h-5 text-[#0A7C8C] mx-auto" />
                      ) : (
                        <span className="font-semibold text-[#0A7C8C]">{row.surfox}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Use Case Callout */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-[22px] border border-[#dCEEF1] bg-[#F0F8F9]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#dCEEF1] mb-6">
              <Zap className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-xs font-medium text-[#0A7C8C] uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Built for this workflow</span>
            </div>

            <p className="text-lg sm:text-xl text-[#3b4350] leading-relaxed">
              Whether you run HVAC, roofing, plumbing, landscaping, or any other home service business, the problem is the same. Leads come in when you are busy. Old contacts sit untouched. SurFox AI closes both gaps, instant follow-up on new inquiries and automated reactivation on your existing list. No extra headcount. No manual work.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Objection Block */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F]">
              Common questions
            </h2>
          </div>

          <div className="space-y-6">
            {objections.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[22px] bg-white border border-[#E4E6E2] shadow-[0_30px_64px_-38px_rgba(19,23,31,0.24)]"
              >
                <p className="text-lg font-semibold text-[#13171F] mb-3">{item.q}</p>
                <p className="text-[#5A626E] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white border-t border-[#E4E6E2]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6 leading-tight">
              Stop Losing Jobs to the<br className="hidden sm:block" /> Contractor Who Responded First.
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 max-w-2xl mx-auto leading-relaxed">
              Most home services businesses are fully operational within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/pricing"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white font-semibold hover:bg-black transition inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="px-7 py-3.5 rounded-[9px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold hover:border-[#c9cdc7] transition"
              >
                Schedule a Demo
              </a>
            </div>

            <p className="text-sm text-[#8A92A0]">
              Plans start at $147/month. 14-day free trial included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
