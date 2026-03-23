'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';
import Script from 'next/script';
import { Upload, Bell, TrendingUp, Check } from 'lucide-react';

export default function DemoClient() {
  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-card-bg text-white">

      <HeroSection />
      <TimelineSection />
      <ScreenshotsSection />
      <CTASection />
    </div>
  );
}

// ============================================
// Section 1: Hero + Calendly Embed
// ============================================
function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 bg-card-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="text-4xl font-bold text-white leading-tight mb-6 sm:mb-8"
          >
            See SurFox AI In Action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            30 minutes. No pitch. Pick a time and we&apos;ll walk through the platform together.
          </motion.p>
        </div>
      </section>

      {/* Calendly Inline Embed */}
      <section className="px-4 sm:px-6 md:px-8 pb-12 bg-card-bg">
        <div className="max-w-[900px] mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/tom-getsurfox/30min?hide_event_type_details=1&primary_color=ff9d00"
            style={{ minWidth: '320px', height: '1000px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </div>
      </section>
    </>
  );
}

// ============================================
// Section 2: Timeline
// ============================================
function TimelineSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const timelineItems = [
    {
      day: 'Day 1',
      text: 'Upload leads. Walk away.',
      icon: Upload,
      side: 'left'
    },
    {
      day: 'Day 3',
      text: 'Get notification: "5 hot leads identified"',
      icon: Bell,
      side: 'right'
    },
    {
      day: 'Day 7',
      text: 'Your team closes deals from hot leads SurFox AI identified:',
      value: 128,
      suffix: 'K pipeline added',
      icon: TrendingUp,
      side: 'left'
    }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 bg-background">
      <div className="max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16 md:mb-20"
        >
          Here's What Actually Happens
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -translate-x-1/2"
          />

          {/* Vertical Line - Mobile */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            style={{ transformOrigin: 'top' }}
            className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.day}
                {...item}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 1.4 }}
          className="text-xl md:text-2xl text-white font-semibold text-center mt-16 md:mt-20 leading-relaxed"
        >
          That's it. No buttons to click. No campaigns to monitor. No conversations to manage.
        </motion.p>

      </div>
    </section>
  );
}

interface TimelineItemProps {
  day: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  side: string;
  index: number;
  inView: boolean;
  value?: number;
  suffix?: string;
}

function TimelineItem({ day, text, icon: Icon, side, index, inView, value, suffix }: TimelineItemProps) {
  const delay = 0.5 + index * 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay }}
      className={`relative flex items-center ${
        side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Mobile Layout */}
      <div className="md:hidden flex items-start gap-6 w-full pl-16">
        {/* Icon Circle */}
        <div className="absolute left-4 w-8 h-8 rounded-full glass-card border border-blue-500/20 flex items-center justify-center z-10">
          <Icon className="w-4 h-4 text-blue-400" />
        </div>

        {/* Card */}
        <div className="bg-card-bg rounded-2xl border-2 border-white/[0.08] p-6 flex-1">
          <span className="text-sm font-semibold text-blue-400 mb-2 block">{day}</span>
          {value ? (
            <p className="text-lg text-white/70">
              {text}{' '}
              <span className="text-white font-bold">
                $<CountUp start={0} end={value} duration={2} enableScrollSpy scrollSpyOnce />
                {suffix}
              </span>
            </p>
          ) : (
            <p className="text-lg text-white/70">{text}</p>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className={`hidden md:flex items-center w-full ${
        side === 'left' ? 'justify-end pr-12' : 'justify-start pl-12'
      }`}>
        {/* Card */}
        <div className={`w-[45%] ${side === 'left' ? 'text-right' : 'text-left'}`}>
          <div className="bg-card-bg rounded-2xl border-2 border-white/[0.08] p-6 md:p-8 inline-block">
            <span className="text-sm font-semibold text-blue-400 mb-2 block">{day}</span>
            {value ? (
              <p className="text-lg md:text-xl text-white/70">
                {text}{' '}
                <span className="text-white font-bold">
                  $<CountUp start={0} end={value} duration={2} enableScrollSpy scrollSpyOnce />
                  {suffix}
                </span>
              </p>
            ) : (
              <p className="text-lg md:text-xl text-white/70">{text}</p>
            )}
          </div>
        </div>
      </div>

      {/* Center Icon - Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-card-bg border-2 border-white/[0.08] items-center justify-center z-10">
        <div className="w-10 h-10 rounded-full glass-card border border-blue-500/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// Section 3: Screenshots Showcase
// ============================================
function ScreenshotsSection() {
  const screenshots = [
    {
      src: '/AI-controlroom.png',
      alt: 'SurFox AI Control Room showing system health, active conversations, and real-time performance metrics',
      caption: 'What you see when you check in'
    },
    {
      src: '/learning-dashboard-1.png',
      alt: 'SurFox AI Learning Dashboard displaying behavioral insights and patterns discovered from lead conversations',
      caption: 'What SurFox AI learned from your leads'
    },
    {
      src: '/learning-dashboard-2.png',
      alt: 'SurFox AI Learning Dashboard showing market-specific adaptations and messaging optimizations',
      caption: 'How SurFox AI adapts to your market'
    },
    {
      src: '/hot-lead-detail.png',
      alt: 'SurFox hot lead detail view with conversation history, qualification score, and recommended next steps',
      caption: "What you get when someone's ready to buy"
    }
  ];

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-16 md:mb-20"
        >
          What SurFox AI Does While You're Not Watching
        </motion.h2>

        <div className="space-y-16 md:space-y-20 lg:space-y-24">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard
              key={index}
              {...screenshot}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ScreenshotCardProps {
  src: string;
  alt: string;
  caption: string;
  index: number;
}

function ScreenshotCard({ src, alt, caption, index }: ScreenshotCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="flex flex-col items-center"
    >
      {/* Caption - Above Screenshot */}
      <p className="text-lg md:text-xl text-white/50 text-center mb-6 md:mb-8">
        {caption}
      </p>

      {/* Screenshot - Large and Dominant */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="rounded-2xl border-2 border-white/[0.08] overflow-hidden shadow-sm shadow-blue-500/5 shadow-blue-500/5 hover:shadow-xl transition-shadow duration-300">
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={800}
            quality={95}
            priority={index === 0}
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// Section 4: Final CTA
// ============================================
function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight"
        >
          Ready to Stop Babysitting Your Outreach?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed"
        >
          Upload your leads. Let SurFox AI work autonomously. Get notified when prospects are ready to buy.
        </motion.p>

        {/* Single CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.4 }}
          className="mb-6"
        >
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgb(234 88 12 / 0.3)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="inline-block px-12 py-5 rounded-xl gradient-bg text-white text-lg font-semibold shadow-sm shadow-blue-500/5 shadow-blue-500/5"
          >
            Start 14-Day Free Trial
          </motion.a>
        </motion.div>

        {/* Trial terms */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
          className="text-white/60 mb-10"
        >
          Start your trial - cancel anytime before day 14 if it's not for you.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-white/60 mb-8"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span>2,000 free messages included</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <span>Setup in 15 minutes</span>
          </div>
        </motion.div>

        {/* Fallback contact */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.7 }}
          className="text-sm text-white/50"
        >
          Prefer to talk first?{' '}
          <a href="mailto:tom@getsurfox.com" className="text-blue-400 hover:underline">
            Email tom@getsurfox.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}
