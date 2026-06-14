import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Upload, Bell, TrendingUp, Check, type LucideIcon } from 'lucide-react';
import { generatePageMetadata } from '@/data/page-metadata';

export const metadata = generatePageMetadata('demo');

type TimelineItem = {
  day: string;
  text: string;
  icon: LucideIcon;
  side: 'left' | 'right';
  value?: string;
};

const timelineItems: TimelineItem[] = [
  {
    day: 'Day 1',
    text: 'Upload leads. Walk away.',
    icon: Upload,
    side: 'left',
  },
  {
    day: 'Day 3',
    text: 'Get notification: "5 hot leads identified"',
    icon: Bell,
    side: 'right',
  },
  {
    day: 'Day 7',
    text: 'Your team closes deals from hot leads SurFox AI identified:',
    value: '$128K pipeline added',
    icon: TrendingUp,
    side: 'left',
  },
];

const screenshots = [
  {
    src: '/images/control-room.png',
    alt: 'SurFox AI Control Room showing system health, active conversations, and real-time performance metrics',
    caption: 'What you see when you check in',
  },
  {
    src: '/images/learning-dashboard.png',
    alt: 'SurFox AI Learning Dashboard displaying behavioral insights and patterns discovered from lead conversations',
    caption: 'What SurFox AI learned from your leads',
  },
  {
    src: '/images/learning-dashboard2.png',
    alt: 'SurFox AI Learning Dashboard showing market-specific adaptations and messaging optimizations',
    caption: 'How SurFox AI adapts to your market',
  },
  {
    src: '/images/hot-lead-detail.png',
    alt: 'SurFox AI hot lead detail view with conversation history, qualification score, and recommended next steps',
    caption: "What you get when someone's ready to buy",
  },
] as const;

export default function Page() {
  return (
    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Hero */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#13171F] leading-tight mb-6 sm:mb-8">
            See SurFox AI In Action
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] max-w-3xl mx-auto leading-relaxed">
            30 minutes. No pitch. Pick a time and we&apos;ll walk through the platform together.
          </p>
        </div>
      </section>

      {/* Calendly Inline Embed */}
      <section className="px-4 sm:px-6 md:px-8 pb-12 bg-[#F4F5F3]">
        <div className="max-w-[900px] mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tom-getsurfox/30min?hide_event_type_details=1&primary_color=ff9d00"
            style={{ minWidth: '0px', height: '1000px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 bg-[#F4F5F3]">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] text-center mb-16 md:mb-20">
            Here&apos;s What Actually Happens
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line - Desktop */}
            <div
              style={{ transformOrigin: 'top' }}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/[0.08] -translate-x-1/2"
            />

            {/* Vertical Line - Mobile */}
            <div
              style={{ transformOrigin: 'top' }}
              className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-white/[0.08]"
            />

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {timelineItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.day}
                    className={`relative flex items-center ${
                      item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start gap-6 w-full pl-16">
                      {/* Icon Circle */}
                      <div className="absolute left-4 w-8 h-8 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center z-10">
                        <Icon className="w-4 h-4 text-[#0A7C8C]" />
                      </div>

                      {/* Card */}
                      <div className="bg-white rounded-2xl border-2 border-[#E4E6E2] p-6 flex-1">
                        <span className="text-sm font-semibold text-[#0A7C8C] mb-2 block">{item.day}</span>
                        {item.value ? (
                          <p className="text-lg text-[#5A626E]">
                            {item.text}{' '}
                            <span className="text-[#13171F] font-bold">{item.value}</span>
                          </p>
                        ) : (
                          <p className="text-lg text-[#5A626E]">{item.text}</p>
                        )}
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div
                      className={`hidden md:flex items-center w-full ${
                        item.side === 'left' ? 'justify-end pr-12' : 'justify-start pl-12'
                      }`}
                    >
                      {/* Card */}
                      <div className={`w-[45%] ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                        <div className="bg-white rounded-2xl border-2 border-[#E4E6E2] p-6 md:p-8 inline-block">
                          <span className="text-sm font-semibold text-[#0A7C8C] mb-2 block">{item.day}</span>
                          {item.value ? (
                            <p className="text-lg md:text-xl text-[#5A626E]">
                              {item.text}{' '}
                              <span className="text-[#13171F] font-bold">{item.value}</span>
                            </p>
                          ) : (
                            <p className="text-lg md:text-xl text-[#5A626E]">{item.text}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Center Icon - Desktop */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white border-2 border-[#E4E6E2] items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0A7C8C]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-xl md:text-2xl text-[#13171F] font-semibold text-center mt-16 md:mt-20 leading-relaxed">
            That&apos;s it. No buttons to click. No campaigns to monitor. No conversations to manage.
          </p>
        </div>
      </section>

      {/* Screenshots Showcase */}
      <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] text-center mb-16 md:mb-20">
            What SurFox AI Does While You&apos;re Not Watching
          </h2>

          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Caption - Above Screenshot */}
                <p className="text-lg md:text-xl text-[#8A92A0] text-center mb-6 md:mb-8">
                  {screenshot.caption}
                </p>

                {/* Screenshot - Large and Dominant */}
                <div className="w-full max-w-[1400px] mx-auto">
                  <div className="rounded-2xl border-2 border-[#E4E6E2] overflow-hidden shadow-sm shadow-blue-500/5 shadow-blue-500/5 hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1400}
                      height={800}
                      quality={95}
                      priority={index === 0}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-8 leading-tight">
            Ready to Stop Babysitting Your Outreach?
          </h2>

          <p className="text-xl md:text-2xl text-[#5A626E] mb-12 leading-relaxed">
            Upload your leads. Let SurFox AI work autonomously. Get notified when prospects are ready to buy.
          </p>

          {/* Single CTA Button */}
          <div className="mb-6">
            <a
              href="/pricing"
              className="inline-block px-12 py-5 rounded-xl bg-[#13171F] text-white text-lg font-semibold shadow-sm shadow-blue-500/5 shadow-blue-500/5"
            >
              Start 14-Day Free Trial
            </a>
          </div>

          {/* Trial terms */}
          <p className="text-[#5A626E] mb-10">
            Start your trial - cancel anytime before day 14 if it&apos;s not for you.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-[#5A626E] mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#0A7C8C] flex-shrink-0" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#0A7C8C] flex-shrink-0" />
              <span>2,000 free messages included</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#0A7C8C] flex-shrink-0" />
              <span>Setup in 15 minutes</span>
            </div>
          </div>

          {/* Fallback contact */}
          <p className="text-sm text-[#8A92A0]">
            Prefer to talk first?{' '}
            <a href="mailto:sales@getsurfox.com" className="text-[#0A7C8C] hover:underline">
              Email sales@getsurfox.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
