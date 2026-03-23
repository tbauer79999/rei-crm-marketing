"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageSquare, Phone, Zap, Target, Clock, LayoutDashboard } from 'lucide-react';

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

            <h1 className="text-4xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Your GHL just<br className="hidden sm:block" /> got a brain.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
              You run your wholesale business in GoHighLevel. Now SurFox AI plugs in to handle every lead conversation automatically: qualifying prospects, detecting intent, and sending hot leads straight back into your pipeline.
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
              GHL is your command center.<br className="hidden sm:block" /> But it can't have a conversation.
            </h2>

            <div className="space-y-5 text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
              <p>
                GoHighLevel runs your pipelines, your follow-up sequences, your entire operation. But when a lead replies (really replies) GHL can't think. It just fires the next message in the sequence.
              </p>
              <p>
                You're texting hundreds of leads a month. Most of them go cold because nobody followed up fast enough, or the response got buried.
              </p>
              <p className="font-medium text-white">
                That's not a GHL problem. That's a bandwidth problem. SurFox AI fixes it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/20 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Powered by Zapier</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Two Zaps. Fully automated.<br className="hidden sm:block" /> Set it up in under 10 minutes.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Flow 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-8 rounded-2xl border-2 border-orange/30 gradient-bg/5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-blue-500/20 mb-6">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Leads in</span>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: LayoutDashboard, label: 'GHL pipeline stage changes' },
                  { icon: ArrowRight, label: 'SurFox AI creates lead', arrow: true },
                  { icon: MessageSquare, label: 'AI starts texting' },
                ].map((step, i) => (
                  <div key={i}>
                    {i > 0 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight className="w-4 h-4 text-blue-400 rotate-90" />
                      </div>
                    )}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-card-bg border border-orange/20">
                      <div className="w-8 h-8 rounded-lg glass-card border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-white">{step.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                When a contact hits a specific pipeline stage in GHL, SurFox AI automatically enrolls them in a campaign and starts qualifying them via SMS. Works with bulk uploads too.
              </p>

              <a
                href="https://zapier.com/webintent/create-zap?template=255711461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg gradient-bg text-white text-sm font-semibold hover:gradient-bg-600 transition"
              >
                Use Template 1: GHL to SurFox AI
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Flow 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl border-2 border-white/[0.08]/20 bg-card-bg/5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card-bg/10 mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-wide">Hot leads back</span>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  { icon: Target, label: 'SurFox AI detects hot lead' },
                  { icon: LayoutDashboard, label: 'GHL contact updated' },
                  { icon: Phone, label: 'You call them' },
                ].map((step, i) => (
                  <div key={i}>
                    {i > 0 && (
                      <div className="flex justify-center py-1">
                        <ArrowRight className="w-4 h-4 text-white rotate-90" />
                      </div>
                    )}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-card-bg border border-white/[0.08]/10">
                      <div className="w-8 h-8 rounded-lg bg-card-bg/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white">{step.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                When SurFox AI detects buying intent, it instantly tags the contact in GHL as "SurFox Hot Lead" so your team knows exactly who to call. You never leave GHL.
              </p>

              <a
                href="https://zapier.com/webintent/create-zap?template=255711462"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border-2 border-white/[0.08] text-white text-sm font-semibold hover:bg-card-bg hover:text-white transition"
              >
                Use Template 2: SurFox AI to GHL
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Why It Matters */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-background">
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
                icon: Zap,
                title: 'Stop texting manually.',
                body: "You're already uploading lists into GHL. One pipeline stage change now triggers full AI qualification automatically.",
              },
              {
                icon: LayoutDashboard,
                title: 'Stay in GHL.',
                body: 'Hot leads surface right inside your existing pipeline. No new dashboard to learn. No workflow to rebuild.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-card-bg border border-white/[0.08] shadow-sm"
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

      {/* Section 5: Setup Steps */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-card-bg">
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
              'Create your first campaign',
              'Connect both Zapier templates (one-click setup)',
              'Move a lead into your GHL pipeline stage and watch SurFox AI take over',
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.06] bg-background"
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

      {/* Section 6: Bottom CTA */}
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

            <p className="text-lg sm:text-xl text-white/30 mb-10 max-w-2xl mx-auto leading-relaxed">
              SurFox AI connects to GoHighLevel in minutes. Your leads get followed up instantly. Your team focuses on calls, not texts.
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
