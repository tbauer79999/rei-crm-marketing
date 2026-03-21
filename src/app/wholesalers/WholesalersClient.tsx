"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Phone, Zap, Clock, BarChart2, Bell } from 'lucide-react';

export default function WholesalersClient() {
  return (
    <div className="bg-white text-gray-900">
      <style>{`
        .text-navy { color: #1e293b; }
        .bg-navy { background-color: #1e293b; }
        .text-orange { color: #c2410c; }
        .bg-orange { background-color: #c2410c; }
      `}</style>

      {/* Section 1: Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 mb-8">
              <BarChart2 className="w-4 h-4 text-orange" />
              <span className="text-sm font-semibold text-orange">For Real Estate Wholesalers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              You Sent the Blast.<br className="hidden sm:block" /> Now 40 People Replied.<br className="hidden sm:block" /> Now What?
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The moment a motivated seller writes back, SurFox AI qualifies them, asks the right questions, and flags the deals worth your time. You call 4 hot leads. Not 40 texts.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Get a Walkthrough
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Start Free Trial
              </motion.a>
            </div>

            <p className="text-sm text-gray-500">
              14-day free trial. 2,000 free messages. No setup fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
              The Problem After the Blast
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'By the time you sort through the noise, the motivated ones have already texted two other wholesalers.',
                body: 'Speed to lead is a direct driver of conversion. The first person to have a real conversation wins the deal. Manual sorting kills your response window.',
              },
              {
                icon: BarChart2,
                title: 'At 10K, 20K texts a month, manual follow-up is not a workflow problem. It\'s a math problem.',
                body: 'You cannot read, qualify, and respond to hundreds of replies in real time. Not without a team. Not without dropping deals.',
              },
              {
                icon: MessageSquare,
                title: 'The deal you are missing is not in your list quality. It\'s in your response window.',
                body: 'Your list is fine. Your targeting is fine. The gap is what happens between the blast and the callback. That is where deals go cold.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
              How it works
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                icon: Zap,
                step: 1,
                title: 'Your blast goes out like normal',
                body: 'Use SmarterContact or any SMS platform to send your campaign. Nothing changes on that end.',
              },
              {
                icon: MessageSquare,
                step: 2,
                title: 'SurFox AI handles every reply instantly',
                body: 'The moment a motivated seller writes back, AI is in the conversation. Qualifying, asking follow-up questions, handling "not interested" gracefully.',
              },
              {
                icon: Bell,
                step: 3,
                title: 'You get a shortlist of hot leads',
                body: 'Instant notifications when a lead shows real buying signals. Full conversation context. You call 4 people instead of sorting through 40 replies.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-5 p-6 rounded-xl border border-gray-100 bg-gray-50"
              >
                <div className="w-9 h-9 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
              SurFox AI vs Your Current Workflow
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-5 py-4 text-sm font-semibold"></th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">Manual Follow-up</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">SmarterContact</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center bg-orange">SurFox AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Handles inbound replies automatically', manual: false, smarter: false, surfox: true },
                  { label: 'Qualifies leads in real time', manual: false, smarter: false, surfox: true },
                  { label: 'Available the moment replies come in', manual: false, smarter: false, surfox: true },
                  { label: 'Learns from conversations', manual: false, smarter: false, surfox: true },
                  { label: 'Zapier integration', manual: false, smarter: 'Limited', surfox: true },
                  { label: 'Cost', manual: 'Your time + labor', smarter: '$800+/mo + labor', surfox: 'From $97/mo' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 text-sm font-medium text-navy">{row.label}</td>
                    <td className="px-5 py-4 text-sm text-center">
                      {row.manual === false ? (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      ) : (
                        <span className="text-gray-600">{row.manual}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-center">
                      {row.smarter === false ? (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      ) : row.smarter === true ? (
                        <CheckCircle className="w-5 h-5 text-orange mx-auto" />
                      ) : (
                        <span className="text-gray-500">{row.smarter}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-center bg-orange/5">
                      {row.surfox === true ? (
                        <CheckCircle className="w-5 h-5 text-orange mx-auto" />
                      ) : (
                        <span className="font-semibold text-orange">{row.surfox}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Use Case Callout */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl border-2 border-orange/30 bg-orange/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 mb-6">
              <Zap className="w-4 h-4 text-orange" />
              <span className="text-xs font-bold text-orange uppercase tracking-wide">Built for this workflow</span>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              SurFox AI was built for exactly this workflow. You keep using SmarterContact to send your campaigns. SurFox AI sits on the inbound side and handles what happens when motivated sellers write back. Same stack. No manual reply work. Just a shortlist of deals worth calling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Objection Block */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: '"Will it sound robotic?"',
                a: 'The AI converses naturally. Motivated sellers have mistaken it for a human. You control the persona, tone, and the script it works from.',
              },
              {
                q: '"I already use SmarterContact."',
                a: 'SmarterContact gets your messages out. SurFox AI handles what happens when they write back. They work together, not against each other.',
              },
              {
                q: '"What if the AI mishandles a hot lead?"',
                a: 'You upload your knowledge base and set the persona. The AI stays in scope. Hot leads get flagged to you instantly so you can jump in at the right moment.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <p className="text-lg font-semibold text-navy mb-3">{item.q}</p>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Stop Sorting Replies.<br className="hidden sm:block" /> Start Calling Deals.
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Most wholesalers are up and running on their first campaign within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-white/10 transition"
              >
                Book a Demo
              </motion.a>
            </div>

            <p className="text-sm text-gray-400">
              Plans start at $97/month. 14-day free trial included.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
