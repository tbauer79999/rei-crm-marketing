import { generatePageMetadata, generateSoftwareApplicationSchema } from '@/data/page-metadata';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Zap, Clock, BarChart2, Bell } from 'lucide-react';

export const metadata = generatePageMetadata('wholesalers');

const problemCards = [
  {
    icon: Clock,
    title: 'By the time you sort through the noise, the motivated ones have already texted two other wholesalers.',
    body: 'Speed to lead is a direct driver of conversion. The first person to have a real conversation wins the deal. Manual sorting kills your response window.',
  },
  {
    icon: BarChart2,
    title: 'At 10K, 20K texts a month, manual follow-up is not a workflow problem. It\'s a math problem.',
    body: 'You cannot read, qualify, and respond to hundreds of replies in real time. Not without a team. Not without dropping deals.',
  },
  {
    icon: MessageSquare,
    title: 'The deal you are missing is not in your list quality. It\'s in your response window.',
    body: 'Your list is fine. Your targeting is fine. The gap is what happens between the blast and the callback. That is where deals go cold.',
  },
];

const howItWorksSteps = [
  {
    icon: Zap,
    step: 1,
    title: 'Your blast goes out like normal',
    body: 'Use SmarterContact or any SMS platform to send your campaign. Nothing changes on that end.',
  },
  {
    icon: MessageSquare,
    step: 2,
    title: 'SurFox AI handles every reply instantly',
    body: 'The moment a motivated seller writes back, AI is in the conversation. Qualifying, asking follow-up questions, handling "not interested" gracefully.',
  },
  {
    icon: Bell,
    step: 3,
    title: 'You get a shortlist of hot leads',
    body: 'Instant notifications when a lead shows real buying signals. Full conversation context. You call 4 people instead of sorting through 40 replies.',
  },
];

const comparisonRows: {
  label: string;
  manual: boolean | string;
  smarter: boolean | string;
  surfox: boolean | string;
}[] = [
  { label: 'Handles inbound replies automatically', manual: false, smarter: false, surfox: true },
  { label: 'Qualifies leads in real time', manual: false, smarter: false, surfox: true },
  { label: 'Available the moment replies come in', manual: false, smarter: false, surfox: true },
  { label: 'Learns from conversations', manual: false, smarter: false, surfox: true },
  { label: 'Zapier integration', manual: false, smarter: 'Limited', surfox: true },
  { label: 'Cost', manual: 'Your time + labor', smarter: '$800+/mo + labor', surfox: 'From $147/mo' },
];

const objections = [
  {
    q: '"Will it sound robotic?"',
    a: 'The AI converses naturally. Motivated sellers have mistaken it for a human. You control the persona, tone, and the script it works from.',
  },
  {
    q: '"I already use SmarterContact."',
    a: 'SmarterContact gets your messages out. SurFox AI handles what happens when they write back. They work together, not against each other.',
  },
  {
    q: '"What if the AI mishandles a hot lead?"',
    a: 'You upload your knowledge base and set the persona. The AI stays in scope. Hot leads get flagged to you instantly so you can jump in at the right moment.',
  },
];

export default function Page() {
  const softwareSchema = generateSoftwareApplicationSchema({
    audienceType: 'Real estate wholesalers and investors',
    featureList:
      'Qualifies every motivated seller reply instantly over SMS and flags the deals worth calling, so wholesalers stop sorting cold replies by hand.',
  });

  return (
    <>
      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Section 1: Hero */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-8">
              <BarChart2 className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">For Real Estate Wholesalers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              You Sent the Blast.<br className="hidden sm:block" /> Now 40 People Replied.<br className="hidden sm:block" /> Now What?
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              The moment a motivated seller writes back, SurFox AI qualifies them, asks the right questions, and flags the deals worth your time. You call 4 hot leads. Not 40 texts.
            </p>

            <p className="text-base sm:text-lg font-semibold text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              SurFox AI is an AI-powered SMS lead qualification platform that responds to motivated seller inquiries within seconds, qualifies conversations autonomously, and hands your team a warm prospect ready to close, 24 hours a day, 7 days a week, without human involvement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/demo"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white text-base font-semibold hover:bg-black transition inline-flex items-center gap-2"
              >
                Get a Walkthrough
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/pricing"
                className="px-7 py-3.5 rounded-[9px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold hover:border-[#c9cdc7] transition"
              >
                Start today
              </a>
            </div>

            <p className="text-sm text-[#8A92A0]">
              30-day money-back guarantee. No setup fees. No risk.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] leading-tight">
              The Problem After the Blast
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemCards.map((item, i) => (
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
            {howItWorksSteps.map((item, i) => (
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F]">
              SurFox AI vs Your Current Workflow
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-[18px] overflow-hidden border border-[#E4E6E2] bg-white shadow-[0_30px_64px_-38px_rgba(19,23,31,0.24)]">
              <thead>
                <tr className="bg-[#F4F5F3] text-[#13171F]">
                  <th className="px-5 py-4 text-sm font-semibold"></th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">Manual Follow-up</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">SmarterContact</th>
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
                    <td className="px-5 py-4 text-sm text-center">
                      {row.smarter === false ? (
                        <XCircle className="w-5 h-5 text-[#c2c7cd] mx-auto" />
                      ) : row.smarter === true ? (
                        <CheckCircle className="w-5 h-5 text-[#0A7C8C] mx-auto" />
                      ) : (
                        <span className="text-[#8A92A0]">{row.smarter}</span>
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
              SurFox AI was built for exactly this workflow. You keep using SmarterContact to send your campaigns. SurFox AI sits on the inbound side and handles what happens when motivated sellers write back. Same stack. No manual reply work. Just a shortlist of deals worth calling.
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
              Stop Sorting Replies.<br className="hidden sm:block" /> Start Calling Deals.
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 max-w-2xl mx-auto leading-relaxed">
              Most wholesalers are up and running on their first campaign within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/pricing"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white font-semibold hover:bg-black transition inline-flex items-center gap-2"
              >
                Start today
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/demo"
                className="px-7 py-3.5 rounded-[9px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold hover:border-[#c9cdc7] transition"
              >
                Book a Demo
              </a>
            </div>

            <p className="text-sm text-[#8A92A0]">
              Plans start at $147/month. Backed by our 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
