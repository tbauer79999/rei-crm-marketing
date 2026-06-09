import { generatePageMetadata } from '@/data/page-metadata';
import {
  ArrowRight,
  ArrowDownLeft,
  ArrowUpRight,
  MessageSquare,
  Phone,
  Mail,
  CreditCard,
  Star,
  Calendar,
  HeadphonesIcon,
  CheckCircle,
} from 'lucide-react';
import PlatformClient from './PlatformClient';

export const metadata = generatePageMetadata('platform');

const signalsInItems = [
  { icon: Phone, label: 'Calls' },
  { icon: MessageSquare, label: 'Texts' },
  { icon: Mail, label: 'Emails' },
  { icon: CreditCard, label: 'Transactions' },
  { icon: Star, label: 'Reviews' },
  { icon: Calendar, label: 'Bookings' },
  { icon: HeadphonesIcon, label: 'Support' },
];

const actionsOutItems = [
  'Reach out to cold leads',
  'Follow up at the right moment',
  'Escalate when sentiment drops',
  'Trigger workflows automatically',
];

const whatComesNextItems = [
  {
    step: 1,
    title: 'Visibility',
    desc: "Real-time analytics across all your conversations. See what's working, track performance, understand trends. Turn raw conversation data into dashboards your whole team can use.",
  },
  {
    step: 2,
    title: 'Prediction',
    desc: "Not just what's happening - what's going to happen. Revenue forecasting, churn prediction, conversion optimization. Infinity learns patterns and tells you what comes next.",
  },
  {
    step: 3,
    title: 'Automation',
    desc: 'Workflows that connect everything. When a lead goes cold, trigger a follow-up. When sentiment drops, escalate to a human. When a prediction fires, take action automatically - without waiting for someone to notice.',
  },
  {
    step: 4,
    title: 'Multi-signal ingestion',
    desc: 'Today we start with SMS. But the architecture is built to ingest calls, emails, transactions, reviews, bookings - every signal a customer sends. One intelligence layer that finally sees the full picture.',
  },
];

export default function Page() {
  return (
    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Hero - The Problem */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-24 sm:py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-8 leading-[1.05] tracking-tight">
              Your customers are{' '}<br className="hidden sm:block" />
              telling you everything.{' '}<br className="hidden sm:block" />
              <span className="text-[#8A92A0]">Most of it is lost.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              Calls. Texts. Transactions. Reviews. Support tickets. Bookings. The signals are everywhere - but they live in silos, and no one connects them.
            </p>

            <p className="text-lg sm:text-xl text-[#13171F] font-medium">
              SurFox AI is the AI layer that listens to all of it - and knows what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Two Sides of SurFox AI */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6">
              Two sides. One platform.
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed">
              SurFox AI is being built to handle both directions of customer intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Signals In */}
            <div className="p-8 sm:p-10 rounded-[22px] border border-[#E4E6E2] bg-white shadow-[0_30px_64px_-38px_rgba(19,23,31,0.24)]">
              <div className="w-14 h-14 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-6">
                <ArrowDownLeft className="w-7 h-7 text-[#0A7C8C]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#13171F] mb-4">Signals In</h3>

              <p className="text-[#5A626E] leading-relaxed mb-6">
                Every customer interaction flowing into one intelligence layer. SurFox AI ingests, understands, and learns from all of it.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {signalsInItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#8A92A0]">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EDEEEB]">
                <span className="text-sm font-medium text-[#8A92A0]">Coming as the platform matures</span>
              </div>
            </div>

            {/* Actions Out */}
            <div className="p-8 sm:p-10 rounded-[22px] border border-[#E4E6E2] bg-white shadow-[0_30px_64px_-38px_rgba(19,23,31,0.24)]">
              <div className="w-14 h-14 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-6">
                <ArrowUpRight className="w-7 h-7 text-[#0A7C8C]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-[#13171F] mb-4">Actions Out</h3>

              <p className="text-[#5A626E] leading-relaxed mb-6">
                AI-initiated outreach, follow-ups, and automations - triggered by what SurFox AI learns. The system doesn't just listen. It acts.
              </p>

              <div className="space-y-3 mb-6">
                {actionsOutItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#5A626E]">
                    <CheckCircle className="w-4 h-4 text-[#0A7C8C]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#EDEEEB]">
                <span className="text-sm font-semibold text-[#0A7C8C]">This is where we start - live now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Engine: Infinity */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-6">
              <span className="text-xs font-medium tracking-[0.18em] text-[#0A7C8C]" style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}>THE ENGINE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6">
              Powered by SurFox Infinity
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed">
              Infinity is the AI brain underneath everything. It ingests interaction data, learns patterns within your environment, predicts outcomes, and decides what actions to take. Both sides of the platform - signals in, actions out - run on this single foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Where We Are Today */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6">
              Where we are today
            </h2>
          </div>

          <div className="p-8 sm:p-10 rounded-[22px] border border-[#0FB6C9] bg-white shadow-[0_26px_54px_-32px_rgba(15,182,201,0.5)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-[#E9F8EF] text-[#0c7a3c] text-xs font-semibold">
                LIVE NOW
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-[#13171F] mb-4">
              AI-powered SMS lead qualification
            </h3>

            <p className="text-[#5A626E] leading-relaxed mb-6">
              Upload cold leads. SurFox AI reaches out via SMS, has personalized conversations, scores and qualifies each one. Your sales team only talks to prospects who are ready. This is Actions Out in its first form - proving that Infinity can understand conversations, track intent, and take intelligent action.
            </p>

            <a
              href="/pricing"
              className="inline-flex items-center gap-2 text-[#0A7C8C] font-semibold hover:underline"
            >
              Get started today
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* What Comes Next */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6">
              What comes next
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed">
              We're building this one layer at a time. Here's the progression.
            </p>
          </div>

          <div className="space-y-6">
            {whatComesNextItems.map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-6 p-6 rounded-[16px] bg-[#F4F5F3] border border-[#E4E6E2]"
              >
                <div className="w-10 h-10 rounded-full bg-[#13171F] text-white flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#13171F] mb-2">{item.title}</h3>
                  <p className="text-[#5A626E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 20-Year View */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-8">
              The long-term vision
            </h2>

            <p className="text-lg sm:text-xl text-[#8A92A0] leading-relaxed mb-6">
              When you log into SurFox AI in the future, you won't see a "lead qualification tool." You'll see your business's entire customer intelligence layer.
            </p>

            <p className="text-lg sm:text-xl text-[#8A92A0] leading-relaxed mb-6">
              Every interaction flowing in. Predictions surfacing before you ask. Automations running in the background. A unified view of every customer - not just leads, everyone.
            </p>

            <p className="text-lg sm:text-xl text-[#13171F] font-medium">
              That's the operating system for how your business understands and responds to humans.
            </p>
          </div>
        </div>
      </section>

      {/* Stay in the Know - client-rendered (interactive newsletter form) */}
      <PlatformClient />

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white border-t border-[#E4E6E2]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6">
              Start with what's live today.
            </h2>

            <p className="text-lg text-[#5A626E] mb-10 leading-relaxed max-w-2xl mx-auto">
              AI-powered lead qualification is ready now. Your team only talks to hot prospects. That's Actions Out in its first form - and the foundation for everything that comes next.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/pricing"
                className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white font-semibold hover:bg-black transition inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/contact"
                className="px-7 py-3.5 rounded-[9px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold hover:border-[#c9cdc7] transition"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
