"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, Clock, LayoutDashboard, Tag, Webhook, Sparkles, DollarSign } from 'lucide-react';

export default function GoHighLevelClient() {
  return (
    <div className="bg-card-bg text-white">

      {/* Section 1: Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/20 mb-8">
              <LayoutDashboard className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">GoHighLevel + SurFox AI</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Native HighLevel integration.<br className="hidden sm:block" /> No Zapier required.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
              Tag a contact in HighLevel. SurFox AI takes over the conversation. Real-time, tag-based routing to any campaign.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white font-semibold hover:border-white/[0.12] hover:bg-background transition"
              >
                See How It Works
              </motion.a>
            </div>

            <p className="text-sm text-white/50">
              No demo required. Trial includes 2,000 real messages and 14 days free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
              HighLevel runs your pipelines.<br className="hidden sm:block" /> But it can't have a conversation.
            </h2>

            <div className="space-y-5 text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
              <p>
                HighLevel handles your sequences, your funnels, your follow-ups. But when a lead actually replies, HighLevel can't think. It just fires the next templated message.
              </p>
              <p className="font-medium text-white">
                SurFox AI handles the conversation. Qualifies the lead. Sends hot ones back to your team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Two Paths */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Two ways to connect
            </h2>
            <p className="text-lg text-white/60 mt-4 max-w-2xl mx-auto">
              Pick the path that fits your operation. Most operators choose native.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Card A: Native (Recommended) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="relative p-8 rounded-2xl border-2 border-blue-500/40 bg-gradient-to-b from-blue-500/[0.06] to-transparent shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full gradient-bg text-white">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">Recommended</span>
              </div>

              <div className="w-12 h-12 rounded-xl glass-card border border-blue-500/30 flex items-center justify-center mb-5 mt-2">
                <Webhook className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Native HighLevel Workflows</h3>
              <p className="text-blue-400 font-medium mb-6">Real-time. Free. Tag-based routing.</p>

              <ul className="space-y-3 mb-6">
                {[
                  'Instant trigger, no polling delay',
                  'No Zapier subscription or per-task fees',
                  'Tag any contact in HighLevel, route to any SurFox AI campaign',
                  'Add unlimited tag mappings, no extra workflows needed',
                  'Built for high-volume operators',
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-white/80 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-white/60 leading-relaxed pt-4 border-t border-white/[0.06]">
                Setup takes about 10 minutes inside SurFox AI Settings → Integrations → HighLevel.
              </p>
            </motion.div>

            {/* Card B: Zapier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border border-white/[0.08] bg-background/40"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 mt-2">
                <Zap className="w-6 h-6 text-white/70" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Zapier Templates</h3>
              <p className="text-white/60 font-medium mb-6">One-click setup with pre-built Zaps.</p>

              <ul className="space-y-3 mb-8">
                {[
                  'Two pre-built Zap templates',
                  'Pipeline stage trigger',
                  'Good for simple, single-campaign setups',
                  'Subject to Zapier task limits and pricing',
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    </div>
                    <span className="text-white/70 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <a
                  href="https://zapier.com/webintent/create-zap?template=255711461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-5 py-3 rounded-lg border border-white/[0.1] text-white text-sm font-semibold hover:bg-white/[0.04] hover:border-white/[0.2] transition"
                >
                  <span>Use Template 1: GHL to SurFox AI</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
                <a
                  href="https://zapier.com/webintent/create-zap?template=255711462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-5 py-3 rounded-lg border border-white/[0.1] text-white text-sm font-semibold hover:bg-white/[0.04] hover:border-white/[0.2] transition"
                >
                  <span>Use Template 2: SurFox AI to GHL</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 4: How It Works (Native) */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/20 mb-6">
              <Webhook className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Native Integration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              How the native integration works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {[
              {
                num: '01',
                icon: Tag,
                title: 'Tag your contact',
                caption: "Add a tag like 'surfox_florida' in HighLevel.",
              },
              {
                num: '02',
                icon: Webhook,
                title: 'Workflow fires instantly',
                caption: 'Your HighLevel Workflow sends the contact to SurFox AI.',
              },
              {
                num: '03',
                icon: MessageSquare,
                title: 'AI takes over',
                caption: 'SurFox AI routes to the right campaign and starts the conversation.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-card-bg border border-white/[0.08]"
              >
                <div className="text-xs font-bold text-blue-400/70 tracking-widest mb-4">STEP {step.num}</div>
                <div className="w-12 h-12 rounded-xl glass-card border border-blue-500/20 flex items-center justify-center mb-5">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.caption}</p>

                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-card-bg border border-white/[0.08] items-center justify-center z-10">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Why It Matters */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why it matters
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Never miss a hot lead.',
                body: 'Every reply gets handled instantly within your texting hours. No lead goes cold because your team was busy. Hot leads are waiting in your pipeline when you are ready to call.',
              },
              {
                icon: DollarSign,
                title: 'Scale without per-lead fees.',
                body: 'No Zapier task counter ticking up with every contact. Native Workflows mean you can push thousands of leads through SurFox AI without watching your automation bill climb.',
              },
              {
                icon: LayoutDashboard,
                title: 'Stay in HighLevel.',
                body: 'Hot leads surface right inside your existing pipeline. No new dashboard to learn. No workflow to rebuild.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-background border border-white/[0.08] shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl glass-card border border-blue-500/20 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five Steps */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Get live in five steps
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              'Start your SurFox AI free trial',
              'Set up your knowledge base and AI persona',
              'Create your first campaign in SurFox AI',
              'Add tag mappings in Settings → Integrations → HighLevel',
              'Build one HighLevel Workflow with our webhook URL and watch leads flow',
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-card-bg"
              >
                <div className="w-9 h-9 rounded-full gradient-bg text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-base sm:text-lg text-white/70 pt-1">{step}</span>
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg text-white font-semibold hover:gradient-bg-600 transition"
            >
              Start Free Trial: 14 days, 2,000 messages
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Bottom CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              You've already built the pipeline.<br className="hidden sm:block" /> Now let AI work it.
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              SurFox AI connects to HighLevel natively. Tag a contact, and the conversation starts. No Zapier middleman. No per-task fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-card-bg/10 transition"
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
