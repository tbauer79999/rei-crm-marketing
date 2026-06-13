import { generatePageMetadata } from '@/data/page-metadata';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Users, Zap, Clock, Calendar } from 'lucide-react';

export const metadata = generatePageMetadata('events');

const problems = [
  {
    icon: Clock,
    title: '80% of event leads receive zero follow-up. Not slow follow-up. Zero.',
    body: "Momencio's 2026 State of US B2B Events Report measured this across 20 major US trade shows. Your team spent days at the event. They came home exhausted, behind on email, and staring at a badge scan export with no clear owner. The leads expired while the inbox got cleared.",
  },
  {
    icon: Users,
    title: "The people who registered but didn't attend are not cold. They're waiting.",
    body: 'They signed up. Something came up. They still have the problem that made them register in the first place. Most teams never contact them at all, writing off a list of warm, self-identified prospects as lost before a single message is sent.',
  },
  {
    icon: MessageSquare,
    title: 'You cannot solve a speed problem with a better checklist.',
    body: '81% of event attendees have buying authority (CEIR, 2024). Leads contacted within 5 minutes are 21 times more likely to qualify than those reached at 30 minutes. Your team is packing up the booth. The window is already closing.',
  },
];

const steps = [
  {
    step: 1,
    title: 'Upload your attendee and no-show list',
    body: 'CSV export from your event platform or direct sync via Zapier. SurFox AI pulls in both lists and gets to work immediately, attendees and no-shows handled separately with different talk tracks.',
  },
  {
    step: 2,
    title: 'AI engages every contact via SMS',
    body: 'Attendees get a personalized follow-up that references the event. No-shows get a different message, acknowledging they registered, acknowledging life happens, and opening the door. Both conversations feel human because the AI is trained to converse like one.',
  },
  {
    step: 3,
    title: 'Buying signals surface automatically',
    body: 'SurFox AI detects intent in real time. Contacts who engage, ask questions, or show interest get flagged instantly with full conversation context. Your team jumps in at the right moment, not from a cold start.',
  },
  {
    step: 4,
    title: 'The ones who go quiet get re-engaged',
    body: "Not every contact responds on the first touch. SurFox AI runs follow-up sequences automatically, so a contact who doesn't reply on day one gets another shot on day three. No manual work. No leads falling through the cracks.",
  },
];

const comparisonRows: Array<{
  label: string;
  manual: boolean | string;
  surfox: boolean | string;
}> = [
  { label: 'Follows up with every attendee', manual: false, surfox: true },
  { label: 'Re-engages no-shows automatically', manual: false, surfox: true },
  { label: 'Responds within minutes of upload', manual: false, surfox: true },
  { label: 'Separate talk tracks per contact type', manual: false, surfox: true },
  { label: 'Available 24/7', manual: false, surfox: true },
  { label: 'Zapier integration', manual: false, surfox: true },
  { label: 'Cost', manual: 'Your time + missed pipeline', surfox: 'From $147/mo' },
];

const objections = [
  {
    q: '"We already send a follow-up email after events."',
    a: 'Email open rates average around 20%. That means four out of five contacts never see your message. SMS open rates run above 90%. Adding SMS to your post-event follow-up is not redundant, it is the channel that actually gets read.',
  },
  {
    q: '"Our no-show list is too cold to bother with."',
    a: 'They registered. That is a buying signal. They had a reason to sign up and a reason they could not attend. That is not a cold list, it is a warm list that never got worked. A single no-show reactivation campaign routinely surfaces pipeline that would have been written off entirely.',
  },
  {
    q: '"What if the AI says something off?"',
    a: 'You upload your knowledge base and control the persona. The AI stays in scope. Every conversation is visible in your dashboard in real time, and hot leads are flagged to you instantly.',
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
              <Calendar className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">For Events &amp; Entertainment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              You Scanned 300 Badges.<br className="hidden sm:block" /> Your Team Followed Up With 60.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              The other 240 went home, cooled off, and forgot you existed. SurFox AI follows up with every attendee, and every no-show, before you leave the venue.
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
              Whether you run trade shows, conferences, product launches, networking events, or any gathering where leads are collected, the follow-up problem is the same. Volume is high, timing is critical, and your team has limited bandwidth right when speed matters most. SurFox AI handles the entire follow-up layer, attendees, no-shows, and re-engagement, so your team focuses on the conversations that are already warm.
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
              You Paid to Get in the Room.<br className="hidden sm:block" /> Get Something Back for It.
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 max-w-2xl mx-auto leading-relaxed">
              Most teams are following up with their full event list within 24 hours of going live.
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
