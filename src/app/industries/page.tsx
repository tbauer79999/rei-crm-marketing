import { generatePageMetadata } from '@/data/page-metadata';
import { ArrowRight, MessageSquare, Clock, RefreshCw, Users, Wrench, Calendar, Home, Sparkles } from 'lucide-react';

export const metadata = generatePageMetadata('industries');

const problems = [
  {
    icon: Clock,
    title: 'Leads expect a response in minutes. Most get one in hours, if at all.',
    body: 'A Harvard Business Review study of over 2,241 companies found that responding within 5 minutes makes you 100 times more likely to make contact than waiting 30 minutes. Most teams are nowhere near that window.',
  },
  {
    icon: RefreshCw,
    title: 'Old contacts sit untouched while new leads get all the attention.',
    body: 'Every business has a list of people who expressed interest and never heard back. Old quotes. Warm inquiries. Contacts from events. That is not a dead list. That is pipeline that was never worked.',
  },
  {
    icon: MessageSquare,
    title: 'You cannot hire your way out of a speed and volume problem.',
    body: "Adding headcount to handle follow-up is expensive, inconsistent, and doesn't scale. The problem is structural, not a people problem.",
  },
];

const industries = [
  {
    icon: Users,
    name: 'Staffing Agencies',
    body: 'Applicants go cold while your team handles other things. SurFox AI qualifies every candidate the moment they reply, and routes the ones worth calling to your desk instantly.',
    cta: 'See how it works for Staffing',
    href: '/staffing',
  },
  {
    icon: Wrench,
    name: 'Home Services',
    body: 'Every new lead expects a response in minutes. Your team is on a job. SurFox AI responds instantly, qualifies the conversation, and re-engages your cold estimate list on autopilot.',
    cta: 'See how it works for Home Services',
    href: '/home-services',
  },
  {
    icon: Calendar,
    name: 'Events & Entertainment',
    body: 'You scanned hundreds of badges. Your team followed up with a fraction of them. SurFox AI follows up with every attendee and every no-show, before the leads go cold.',
    cta: 'See how it works for Events',
    href: '/events',
  },
  {
    icon: Home,
    name: 'Real Estate Wholesalers',
    body: '40 people replied to your blast. SurFox AI handles every inbound response instantly, qualifying motivated sellers and giving you a shortlist of deals worth calling.',
    cta: 'See how it works for Real Estate',
    href: '/wholesalers',
  },
];

const steps = [
  {
    step: 1,
    title: 'Your leads come in from any source',
    body: 'Website forms, ad campaigns, event lists, CRM exports, Zapier integrations. SurFox AI connects to whatever you are already using.',
  },
  {
    step: 2,
    title: 'AI engages every contact via SMS instantly',
    body: 'Natural two-way conversation. The AI qualifies intent, handles objections, and keeps the conversation moving, without your team lifting a finger.',
  },
  {
    step: 3,
    title: 'Hot leads routed to your team with full context',
    body: 'When a contact shows real buying signals, your team gets an instant notification. You are not starting cold. You are closing.',
  },
  {
    step: 4,
    title: 'Cold contacts re-engaged automatically',
    body: 'Old lists do not sit idle. SurFox AI runs reactivation campaigns on autopilot, surfacing revenue from contacts that would otherwise stay buried.',
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
              <Sparkles className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">Every Industry</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-6 sm:mb-8 leading-[1.05] tracking-tight">
              Your Industry Has a Lead<br className="hidden sm:block" /> Problem. Every Industry Does.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              Leads come in. Follow-up is slow. Contacts go cold. Revenue leaks. SurFox AI fixes that with AI-powered SMS qualification, for any business that talks to prospects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="/pricing"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white text-base font-semibold hover:bg-black transition inline-flex items-center gap-2"
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
              30-day money-back guarantee. No setup fees. No risk.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Universal Problem */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] leading-tight mb-5">
              The Universal Problem
            </h2>
            <p className="text-lg text-[#5A626E] max-w-2xl mx-auto leading-relaxed">
              Every business that generates leads faces the same three failures, regardless of industry, team size, or how good the product is.
            </p>
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

      {/* Section 3: Who SurFox AI Is Built For */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-5">
              Who SurFox AI Is Built For
            </h2>
            <p className="text-lg text-[#5A626E] max-w-2xl mx-auto leading-relaxed">
              SurFox AI works for any business that generates leads and needs to qualify them fast. Here is where we have seen it work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-8 rounded-[22px] bg-[#F4F5F3] border border-[#E4E6E2]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#0A7C8C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">{item.name}</h3>
                <p className="text-[#5A626E] leading-relaxed mb-6">{item.body}</p>
                <a
                  href={item.href}
                  className="mt-auto inline-flex items-center gap-2 text-[#0A7C8C] font-semibold hover:underline"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: If Your Industry Is Not Listed */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-3xl mx-auto">
          <div className="p-10 rounded-[22px] border border-[#dCEEF1] bg-[#F0F8F9]">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#13171F] mb-4">
              If Your Industry Is Not Listed
            </h2>
            <p className="text-lg text-[#3b4350] leading-relaxed mb-6">
              If you generate leads and need to qualify them faster than your team can manage manually, SurFox AI was built for you. The platform is not vertical-specific. The verticals above are where we have the most documented results, but the underlying problem is universal.
            </p>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 text-[#0A7C8C] font-semibold hover:underline"
            >
              Book a demo and we will show you exactly how it maps to your workflow
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F]">
              How it works, for any industry
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

      {/* Section 6: Bottom CTA */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6 leading-tight">
              If You Have Leads, You Have a<br className="hidden sm:block" /> Follow-Up Problem. We Fix That.
            </h2>

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
              Plans start at $147/month. Backed by our 30-day money-back guarantee. No setup fees.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
