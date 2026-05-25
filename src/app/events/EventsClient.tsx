"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Bell, Upload, Zap, Clock, Users, Calendar } from 'lucide-react';

export default function EventsClient() {
  return (
    <div className="bg-background text-white">

      {/* Section 1: Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/20 mb-8">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">For Event Marketers</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'var(--font-sora)' }}>
              Your Webinar Ended<br className="hidden sm:block" /> An Hour Ago. Your Leads<br className="hidden sm:block" /> Are Already Going Cold.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
              SurFox AI follows up with every registrant the moment your event ends. Attendees who did not convert. No-shows who never came. People who watched the replay but never took the next step. Every lead worked automatically while the event is still fresh.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white font-semibold hover:border-white/[0.12] hover:bg-background transition"
              >
                Learn More
              </motion.a>
            </div>

            <p className="text-sm text-white/50">
              No contracts. No setup fees. Pay per event or subscribe monthly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              The Problem After the Event
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'You spent weeks promoting the webinar. Most of your registrants will not hear from you for days.',
                body: 'The window to convert an event lead is 24 to 48 hours. After that attention moves on. Manual follow-up at event scale is too slow and too inconsistent to hit that window.',
              },
              {
                icon: Users,
                title: 'No-shows are not dead leads. They just need a different conversation.',
                body: 'Someone who registered but did not show up still raised their hand. They had intent. A generic email sequence treats them the same as a cold contact. SurFox AI knows they missed it and reaches out with context about what they missed.',
              },
              {
                icon: MessageSquare,
                title: 'Your team can follow up with 10 leads. Not 400.',
                body: 'Events generate volume that human follow-up cannot match. The leads that do not get a timely personal response go to your competitors or forget you existed.',
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

      {/* Section 3: How It Works */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How it works
            </h2>
          </motion.div>

          <div className="space-y-5">
            {[
              {
                icon: Upload,
                step: 1,
                title: 'Import your registrant list',
                body: 'CSV upload or Zapier sync from Zoom, GoTo Webinar, Eventbrite, or any event platform. Each contact comes in with their attendance status. Attended. No-show. Replay watched.',
              },
              {
                icon: MessageSquare,
                step: 2,
                title: 'SurFox AI follows up with context',
                body: 'The AI knows your event name, what it covered, what offers were made, and whether the lead showed up. Every conversation is specific to that lead\'s experience. Not a generic blast.',
              },
              {
                icon: Bell,
                step: 3,
                title: 'Hot leads routed to your team',
                body: 'Instant notifications when a lead shows real buying signals. Full conversation context. Your team jumps in at the right moment, already warmed up.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-5 p-6 rounded-xl border border-white/[0.06] bg-background"
              >
                <div className="w-9 h-9 rounded-full gradient-bg text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Comparison Table */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              SurFox AI vs Your Current Workflow
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left rounded-2xl overflow-hidden border border-white/[0.08] shadow-sm">
              <thead>
                <tr className="bg-card-bg text-white">
                  <th className="px-5 py-4 text-sm font-semibold"></th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">Manual Follow-up</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center">Email Sequence</th>
                  <th className="px-5 py-4 text-sm font-semibold text-center gradient-bg">SurFox AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Follows up within minutes of event ending', manual: false, email: false, surfox: true },
                  { label: 'Different conversation for attendees vs no-shows', manual: false, email: false, surfox: true },
                  { label: 'Available 24/7', manual: false, email: false, surfox: true },
                  { label: 'Handles objections in real time', manual: false, email: false, surfox: true },
                  { label: 'Zapier integration', manual: false, email: 'Limited', surfox: true },
                  { label: 'Cost', manual: 'Your time', email: '$200-500/mo', surfox: 'From $147/mo' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-card-bg' : 'bg-background'}>
                    <td className="px-5 py-4 text-sm font-medium text-white">{row.label}</td>
                    <td className="px-5 py-4 text-sm text-center">
                      {row.manual === false ? (
                        <XCircle className="w-5 h-5 text-white/30 mx-auto" />
                      ) : (
                        <span className="text-white/60">{row.manual}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-center">
                      {row.email === false ? (
                        <XCircle className="w-5 h-5 text-white/30 mx-auto" />
                      ) : row.email === true ? (
                        <CheckCircle className="w-5 h-5 text-blue-400 mx-auto" />
                      ) : (
                        <span className="text-white/50">{row.email}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-sm text-center bg-white/5">
                      {row.surfox === true ? (
                        <CheckCircle className="w-5 h-5 text-blue-400 mx-auto" />
                      ) : (
                        <span className="font-semibold text-blue-400">{row.surfox}</span>
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
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl border-2 border-amber-500/30 bg-white/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-blue-500/20 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Built for every event</span>
            </div>

            <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
              Whether you run weekly webinars, quarterly virtual summits, annual conferences, or collect badge scans at trade shows, SurFox AI works every lead with context about your specific event. Same platform. Every event type. No manual follow-up required.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Objection Block */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: '"Will it know what my event was about?"',
                a: 'Yes. You tell SurFox the event name, what was covered, and any offers that were made. The AI uses that context in every conversation so leads feel like they are talking to someone who was actually at the event.',
              },
              {
                q: '"What about people who watched the replay?"',
                a: 'Replay viewers get their own conversation. The AI acknowledges they engaged after the fact and continues from there. Not a no-show treatment. Not an attendee treatment. Their own path.',
              },
              {
                q: '"We already send a follow-up email sequence."',
                a: 'Email sequences treat everyone the same and arrive in a crowded inbox. SurFox AI has a two-way SMS conversation personalized to whether they showed up, what they engaged with, and where they are in the buying process. Different channel. Different intelligence.',
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
                <p className="text-lg font-semibold text-white mb-3">{item.q}</p>
                <p className="text-white/60 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Bottom CTA */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-card-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Stop Letting Event<br className="hidden sm:block" /> Leads Go Cold.
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              Most customers are running their first event follow-up campaign within 24 hours of their event ending.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white font-semibold hover:bg-white/10 transition inline-flex items-center gap-2"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/30 text-white font-semibold hover:border-white/60 hover:bg-card-bg/10 transition"
              >
                Get Event Pricing
              </motion.a>
            </div>

            <p className="text-sm text-white/40">
              No contracts. No setup fees.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
