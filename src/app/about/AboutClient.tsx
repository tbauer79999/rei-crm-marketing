'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-[#F4F5F3] text-[#13171F]">

      {/* Hero Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 flex justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#F0F8F9] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F0F8F9] rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl font-bold text-[#13171F] mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              AI Lead Qualification<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Built for Operators
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              SurFox AI helps businesses work every lead - by SMS and web chat - so sales teams spend time on conversations that are ready to close.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-[#E4E6E2] p-8 sm:p-10 md:p-12"
          >
            <p className="text-lg text-[#5A626E] leading-relaxed mb-4">
              We built SurFox AI for a problem operators know too well: lists get bigger, follow-up gets thinner, and &ldquo;AI&rdquo; tools either blast the same message or bury teams in dashboards.
            </p>
            <p className="text-lg text-[#5A626E] leading-relaxed">
              SurFox AI is different. It runs real conversations, qualifies interest, and books appointments. A text blaster sends. SurFox AI sells.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do / Why We Exist / How We Work */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#13171F] mb-3">What We Do</h2>
              <p className="text-[#5A626E] leading-relaxed">
                SurFox AI connects to how you already work - CRM, Zapier, list uploads - and engages leads the moment they enter your system. It follows up consistently, reads intent across the thread, and hands your team hot prospects with context. Learning improves with use: Growth learns from recent conversations; higher tiers learn from more history.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#13171F] mb-3">Why We Exist</h2>
              <p className="text-[#5A626E] leading-relaxed mb-4">
                Businesses do not need more vanity analytics. They need pipeline. SurFox AI exists to turn inbound and outbound lead volume into booked conversations without hiring a bigger follow-up team.
              </p>
              <p className="text-[#5A626E] leading-relaxed">
                We started with lead qualification because that is where the pain is most expensive: slow response, unworked lists, and tools that look busy without producing appointments. That is still our core. Everything we ship has to make that job sharper.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#E4E6E2] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#13171F] mb-3">How We Work</h2>
              <p className="text-[#5A626E] leading-relaxed">
                SurFox AI is built by people who have run revenue, not by demos that ignore Monday morning. We keep claims honest, price for SMBs, and design for operators who need coverage on real lists - not another toy that only works on a handful of hand-picked leads.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-6 sm:mb-8 px-4 leading-tight">
              This Is a Product Company
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              SurFox AI is focused on one outcome: qualified conversations and booked calls from the leads you already paid for. If that is the job you need done, we built this for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold hover:gradient-bg-600 transition"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#c9cdc7] hover:bg-[#EDEEEB] transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
