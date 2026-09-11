"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Leadership() {
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
            <div className="inline-block px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-6">
              <span className="text-sm font-semibold text-[#0A7C8C]">LEADERSHIP</span>
            </div>
            <h1 className="text-4xl font-bold text-[#13171F] mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Operator-Led.<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Product-Focused.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              SurFox AI is led by people who have run revenue in the real world - and who build for what operators need on Monday morning, not AI theater.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile - Featured */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] border border-[#dCEEF1] mb-6">
              <span className="text-sm font-semibold text-[#0A7C8C]">FOUNDER & CEO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-4 sm:mb-6 px-4">
              Meet the Founder
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl border-2 border-[#E4E6E2] overflow-hidden hover:border-[#E4E6E2]/30 hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* Profile Image Section */}
                <div className="md:col-span-2 bg-[#F0F8F9] p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-full max-w-[288px] aspect-square rounded-2xl bg-[#EDEEEB] flex items-center justify-center overflow-hidden">
                      <Image
                        src="/tom-bauer.jpg"
                        alt="Tom Bauer, Founder and CEO of SurFox AI"
                        width={288}
                        height={288}
                        className="rounded-2xl object-contain bg-white p-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="md:col-span-3 p-8 sm:p-10 md:p-12">
                  <h3 className="text-3xl font-bold text-[#13171F] mb-2">Tom Bauer</h3>
                  <p className="text-lg text-[#0A7C8C] font-medium mb-6">Founder & CEO</p>

                  <div className="space-y-4 mb-8">
                    <p className="text-[#5A626E] leading-relaxed">
                      Tom Bauer founded SurFox AI to close a gap he spent two decades living inside: sales and revenue teams generate endless conversations, but most tools only count messages instead of turning them into booked pipeline.
                    </p>

                    <p className="text-[#5A626E] leading-relaxed">
                      He has built and led revenue organizations across multiple industries. That operator background shapes how SurFox AI is built - practical systems that qualify leads over SMS, surface buying intent, and hand sales teams conversations worth taking, not another dashboard of vanity metrics.
                    </p>

                    <p className="text-[#5A626E] leading-relaxed">
                      Under Tom&apos;s leadership, SurFox AI focuses on one job done well: AI lead qualification that works real lists, follows up consistently, and books appointments.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="mailto:sales@getsurfox.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] font-semibold hover:border-[#c9cdc7] hover:bg-[#EDEEEB] transition"
                    >
                      <Mail className="w-5 h-5" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-4 sm:mb-6 px-4">
              How We Build
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                number: '01',
                title: 'Operator-Led Development',
                desc: 'Every feature has to solve a problem someone has actually felt in the field - slow follow-up, unworked lists, tools that look busy without producing appointments.'
              },
              {
                number: '02',
                title: 'Intelligence Over Volume',
                desc: 'SurFox AI is not about sending more texts. It is about qualifying interest and getting the right conversations on the calendar.'
              },
              {
                number: '03',
                title: 'Respect for Customer Data',
                desc: 'Tenant isolation is non-negotiable. Your leads and conversations stay yours.'
              },
              {
                number: '04',
                title: 'Honest Communication',
                desc: 'No hype metrics. We say what SurFox AI does, what it does not do yet, and what the numbers actually show.'
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-[#E4E6E2] bg-white hover:border-[#E4E6E2]/30 hover:shadow-sm shadow-blue-500/5 shadow-blue-500/5 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-[#0A7C8C]/20 mb-4">{principle.number}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#13171F] mb-3">{principle.title}</h3>
                <p className="text-[#5A626E] leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building Toward */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-4 sm:mb-6 px-4">
              What We&apos;re Building Toward
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#E4E6E2] p-8 sm:p-10 md:p-12"
            >
              <div className="space-y-6">
                <p className="text-lg text-[#5A626E] leading-relaxed">
                  SurFox AI started with lead qualification because that is where operators lose the most money: leads go cold while teams chase the wrong ones. That remains the core.
                </p>

                <p className="text-lg text-[#5A626E] leading-relaxed">
                  As the product deepens, the same conversation intelligence that books sales appointments can support other high-stakes business conversations. We expand from a sharp wedge, not a vague &ldquo;platform for everything&rdquo; promise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-6 sm:mb-8 px-4 leading-tight">
              Talk With Us
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Whether you are evaluating SurFox AI for your team or exploring a partnership, we are easy to reach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold hover:gradient-bg-600 transition"
              >
                Contact
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] text-base font-semibold hover:border-[#c9cdc7] hover:bg-[#EDEEEB] transition"
              >
                See the Product
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
