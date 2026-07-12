import { generatePageMetadata } from '@/data/page-metadata';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Phone, Upload, Zap, Clock, Users } from 'lucide-react';

export const metadata = generatePageMetadata('staffing');

const problems = [
  {
    icon: Clock,
    title: "You're paying $800+/month for a texting tool that still needs a human on top.",
    body: "SmarterContact sends the text. Your team still has to read the reply, decide what to say, and follow up. That's not automation. That's a faster inbox.",
  },
  {
    icon: MessageSquare,
    title: 'Applicants go cold while your team handles other things.',
    body: 'Speed to lead is everything in staffing. A candidate who applied this morning will take a call from a competitor this afternoon. Manual follow-up is too slow.',
  },
  {
    icon: Users,
    title: "You can't scale applicant volume without adding headcount.",
    body: "Every new campaign means more messages to manage. Your team is already stretched. Hiring more reps to text applicants is expensive and inconsistent.",
  },
];

const steps = [
  {
    icon: Upload,
    step: 1,
    title: 'Upload your applicant list',
    body: 'CSV upload or Zapier sync from your ATS or CRM. SurFox AI pulls in your contacts and gets to work immediately.',
  },
  {
    icon: MessageSquare,
    step: 2,
    title: 'AI qualifies every lead via SMS',
    body: 'Natural conversations, intent detection, handles objections. The AI knows when to push and when to back off. It reads intent, handles objections, and knows when to push.',
  },
  {
    icon: Phone,
    step: 3,
    title: 'Hot leads routed to your team',
    body: 'Instant notifications with full conversation context. Your team jumps in at the right moment, not from the beginning.',
  },
];

const comparisonRows: Array<{
  label: string;
  manual: boolean | string;
  smarter: boolean | string;
  surfox: boolean | string;
}> = [
  { label: 'Qualifies leads automatically', manual: false, smarter: false, surfox: true },
  { label: 'Available 24/7', manual: false, smarter: false, surfox: true },
  { label: 'Learns from conversations', manual: false, smarter: false, surfox: true },
  { label: 'Zapier integration', manual: false, smarter: 'Limited', surfox: true },
  { label: 'Cost', manual: '$800+/mo + labor', smarter: '$800+/mo + labor', surfox: 'From $147/mo' },
];

const objections = [
  {
    q: '"Will it sound robotic?"',
    a: 'The AI converses naturally. Candidates have mistaken it for a human rep. You control the persona and tone.',
  },
  {
    q: '"We already use SmarterContact."',
    a: 'SmarterContact sends texts. SurFox AI qualifies leads. You still need a human on top of SmarterContact. We remove that human.',
  },
  {
    q: '"What if the AI says something wrong?"',
    a: 'You upload your knowledge base and control the persona. The AI stays in scope. You monitor conversations in real time.',
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
              <Users className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">For Staffing Agencies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              Your Staffing Agency Is<br className="hidden sm:block" /> Texting Leads. Your AI<br className="hidden sm:block" /> Should Be Qualifying Them.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              SurFox AI qualifies every applicant the moment they reply. Hot leads routed to your team instantly. No VA. No SDR. No manual work.
            </p>

            <p className="text-base sm:text-lg font-semibold text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              SurFox AI is an AI-powered SMS lead qualification platform that responds to candidate and client inquiries within seconds, qualifies conversations autonomously, and hands your team a warm prospect ready to engage, 24 hours a day, 7 days a week, without human involvement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/demo"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white text-base font-semibold hover:bg-black transition inline-flex items-center gap-2"
              >
                Schedule a Demo
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
              The Problem With Your Current Stack
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F]">
              SurFox AI vs Your Current Stack
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
              <span className="text-xs font-medium text-[#0A7C8C] uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>Built for staffing</span>
            </div>

            <p className="text-lg sm:text-xl text-[#3b4350] leading-relaxed">
              Whether you're qualifying job applicants, following up on client leads, or re-engaging your candidate database, SurFox AI handles the conversation from first text to booked call. Our staffing customers run active qualification campaigns without adding a single headcount.
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
              Stop Texting.<br className="hidden sm:block" /> Start Qualifying.
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 max-w-2xl mx-auto leading-relaxed">
              Most staffing teams are fully operational within 24 hours.
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
                Schedule a Demo
              </a>
            </div>

            <p className="text-sm text-[#8A92A0]">
              Plans start at $147/month. Backed by our 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
