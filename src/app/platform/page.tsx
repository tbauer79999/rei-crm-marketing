import { generatePageMetadata, generateSoftwareApplicationSchema } from '@/data/page-metadata';
import {
  ArrowRight,
  MessageSquare,
  Star,
  Calendar,
  Brain,
  Plug,
  Zap,
  Chrome,
  LayoutDashboard,
  Building2,
} from 'lucide-react';
import ProofResults from '../components/ProofResults';

export const metadata = generatePageMetadata('platform');

const howItWorks = [
  {
    step: 1,
    title: 'Upload your leads',
    desc: 'Drop in a CSV or connect your CRM. SurFox AI imports your contacts instantly.',
  },
  {
    step: 2,
    title: 'AI engages via SMS',
    desc: 'Personalized, two-way text conversations start automatically. No scripts, no templates, real conversations that adapt.',
  },
  {
    step: 3,
    title: 'Hot leads surface to your team',
    desc: 'Qualified prospects get flagged and appointments get booked. Your team picks up from there.',
  },
];

const features = [
  {
    icon: MessageSquare,
    title: 'AI SMS Conversations',
    desc: 'Two-way, personalized conversations with every lead automatically.',
  },
  {
    icon: Star,
    title: 'Lead Scoring & Qualification',
    desc: 'Every lead scored based on intent signals from the conversation.',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    desc: 'Hot leads get scheduled directly into your calendar.',
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    desc: 'The AI learns what messaging works best for your leads and improves over time.',
  },
  {
    icon: Plug,
    title: 'GoHighLevel Integration',
    desc: 'Native two-way sync with your GHL account.',
  },
  {
    icon: Zap,
    title: 'Zapier Integration',
    desc: 'Connect SurFox AI to 6,000+ apps. Live and public.',
  },
  {
    icon: Chrome,
    title: 'Chrome Extension',
    desc: 'Your reps access hot leads instantly from their browser.',
  },
  {
    icon: LayoutDashboard,
    title: 'Customer Dashboard',
    desc: 'Real-time view of conversations, lead status, and performance.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant Architecture',
    desc: 'Each account learns independently. Your data stays yours.',
  },
];

const integrations = ['GoHighLevel', 'Zapier', 'Twilio', 'Retell AI'];

export default function Page() {
  const softwareSchema = generateSoftwareApplicationSchema();

  return (
    <>
      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Hero */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-24 sm:py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#13171F] mb-8 leading-[1.05] tracking-tight">
            AI that texts your leads, qualifies them, and books appointments, 24/7.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
            Upload your leads. SurFox AI handles the conversation. Your team only talks to people who are ready.
          </p>

          <p className="text-base sm:text-lg font-semibold text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
            Every conversation handled. Every lead scored. Every hot prospect handed off to your team the moment they&apos;re ready to close.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              See a Demo
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white border-y border-[#E4E6E2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6">
              How it works
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed">
              Three steps from a list of leads to a calendar full of qualified appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-[22px] border border-[#E4E6E2] bg-[#F4F5F3]"
              >
                <div className="w-12 h-12 rounded-full bg-[#13171F] text-white flex items-center justify-center font-bold text-lg mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">{item.title}</h3>
                <p className="text-[#5A626E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#13171F] mb-6">
              What&apos;s included
            </h2>
            <p className="text-lg sm:text-xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed">
              Everything you need to turn cold leads into booked appointments, in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-7 rounded-[18px] border border-[#E4E6E2] bg-white shadow-[0_20px_44px_-32px_rgba(19,23,31,0.24)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-[#0A7C8C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#13171F] mb-2">{feature.title}</h3>
                <p className="text-[#5A626E] leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <ProofResults />

      {/* Integrations */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-4">
            Works with your existing stack.
          </h2>
          <p className="text-lg text-[#5A626E] mb-12 max-w-2xl mx-auto leading-relaxed">
            SurFox AI plugs into the tools you already run.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {integrations.map((name) => (
              <div
                key={name}
                className="px-6 py-3 rounded-[12px] border border-[#E4E6E2] bg-white text-[#13171F] font-semibold shadow-[0_16px_36px_-30px_rgba(19,23,31,0.24)]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white border-t border-[#E4E6E2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#13171F] mb-6">
            Ready to stop chasing leads?
          </h2>

          <p className="text-lg text-[#5A626E] mb-10 leading-relaxed max-w-2xl mx-auto">
            SurFox AI qualifies them while you focus on closing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/pricing"
              className="px-7 py-3.5 rounded-[9px] bg-[#13171F] text-white font-semibold hover:bg-black transition inline-flex items-center gap-2"
            >
              Start today
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
      </section>
    </div>
    </>
  );
}
