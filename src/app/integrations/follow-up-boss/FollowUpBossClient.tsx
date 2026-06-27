"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Clock, Users, Tag, Webhook, RefreshCw, Route, DollarSign } from 'lucide-react';

export default function FollowUpBossClient() {
  return (
    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Section 1: Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-8">
              <Users className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">Follow Up Boss + SurFox AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#13171F] mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Native Follow Up Boss integration.<br className="hidden sm:block" /> No Zapier required.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5A626E] mb-10 max-w-3xl mx-auto leading-relaxed">
              Move a lead into a mapped stage in Follow Up Boss. SurFox AI takes over the conversation. Real-time, stage-based routing to any campaign.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white text-base font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
              >
                Start today
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] font-semibold hover:border-[#c9cdc7] hover:bg-[#EDEEEB] transition"
              >
                See How It Works
              </motion.a>
            </div>

            <p className="text-sm text-[#8A92A0]">
              No demo required. Backed by our 30-day money-back guarantee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-8 leading-tight">
              Follow Up Boss runs your pipeline.<br className="hidden sm:block" /> But it can't have a conversation.
            </h2>

            <div className="space-y-5 text-lg sm:text-xl text-[#5A626E] leading-relaxed max-w-3xl">
              <p>
                Follow Up Boss handles your lead routing, your stage management, your team assignments. But when a lead replies, FUB can't think. It fires the next templated message.
              </p>
              <p className="font-medium text-[#13171F]">
                SurFox AI handles the conversation. Qualifies the lead. Sends hot ones back to your pipeline with a note and a stage update automatically.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-6">
              <Webhook className="w-4 h-4 text-[#0A7C8C]" />
              <span className="text-sm font-semibold text-[#0A7C8C]">Native Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] leading-tight">
              How the native integration works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {[
              {
                num: '01',
                icon: Tag,
                title: 'Move a contact into a mapped stage',
                caption: 'Add a lead to your SurFox AI trigger stage in Follow Up Boss.',
              },
              {
                num: '02',
                icon: Webhook,
                title: 'Webhook fires instantly',
                caption: 'SurFox AI receives the lead in real time via native webhook. No polling delay.',
              },
              {
                num: '03',
                icon: MessageSquare,
                title: 'AI takes over',
                caption: 'SurFox AI qualifies via SMS. Hot leads get a note and stage update written back to FUB automatically.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-white border border-[#E4E6E2]"
              >
                <div className="text-xs font-bold text-[#0A7C8C]/70 tracking-widest mb-4">STEP {step.num}</div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-[#0A7C8C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">{step.title}</h3>
                <p className="text-[#5A626E] leading-relaxed">{step.caption}</p>

                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-[#E4E6E2] items-center justify-center z-10">
                    <ArrowRight className="w-4 h-4 text-[#0A7C8C]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why It Matters */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F]">
              Why it matters
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: RefreshCw,
                title: 'Two-way native sync.',
                body: "SurFox AI doesn't just receive leads from FUB. When a lead goes hot, it writes a conversation note and moves the person to your hot-lead stage. Your team sees everything inside FUB without switching tools.",
              },
              {
                icon: Route,
                title: 'Stage-based routing to any campaign.',
                body: 'Map multiple FUB stages to different SurFox AI campaigns. Buyer leads go one place, seller leads another. No extra workflows needed.',
              },
              {
                icon: DollarSign,
                title: 'No Zapier. No middleware. No per-task fees.',
                body: 'Native webhook integration means no automation bill climbing with every contact pushed through.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-[#F4F5F3] border border-[#E4E6E2] shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-[#0A7C8C]" />
                </div>
                <h3 className="text-lg font-semibold text-[#13171F] mb-3">{item.title}</h3>
                <p className="text-[#5A626E] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Five Steps */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F]">
              Get live in five steps
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              'Start your SurFox AI subscription',
              'Set up your knowledge base and AI persona',
              'Create your first campaign in SurFox AI',
              'Go to Settings → Integrations → Follow Up Boss, paste your FUB API key, map your stages to campaigns',
              'Move a test lead into your trigger stage in FUB and watch the AI engage',
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-[#EDEEEB] bg-white"
              >
                <div className="w-9 h-9 rounded-full bg-[#13171F] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-base sm:text-lg text-[#5A626E] pt-1">{step}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#13171F] text-white font-semibold hover:gradient-bg-600 transition"
            >
              Start today
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Bottom CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white text-[#13171F]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              You already have the pipeline.<br className="hidden sm:block" /> Now let AI work it.
            </h2>

            <p className="text-lg sm:text-xl text-[#5A626E] mb-10 max-w-2xl mx-auto leading-relaxed">
              SurFox AI connects to Follow Up Boss natively. Move a lead into a stage, and the conversation starts. No Zapier middleman. No per-task fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#13171F] text-white font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
              >
                Start today
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-[#E4E6E2] text-[#13171F] font-semibold hover:border-[#c9cdc7] hover:bg-[#F4F5F3] transition"
              >
                Questions? Talk to us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
