"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, XCircle, MessageSquare, Phone, Upload, Zap, Clock, Users } from 'lucide-react';

export default function StaffingClient() {
  return (
    <div className="bg-white text-gray-900">
      <style>{`
        .text-navy { color: #1e293b; }
        .bg-navy { background-color: #1e293b; }
        .text-orange { color: #c2410c; }
        .bg-orange { background-color: #c2410c; }
      `}</style>

      {/* Section 1: Hero */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 mb-8">
              <Users className="w-4 h-4 text-orange" />
              <span className="text-sm font-semibold text-orange">For Staffing Agencies</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight">
              Your Staffing Agency Is<br className="hidden sm:block" /> Texting Leads. Your AI<br className="hidden sm:block" /> Should Be Qualifying Them.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              SurFox AI qualifies every applicant the moment they reply. Hot leads routed to your team instantly. No VA. No SDR. No manual work.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Schedule a Demo
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight">
              The Problem With Your Current Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "You're paying $800+/month for a texting tool that still needs a human on top.",
                body: "SmarterContact sends the text. Your team still has to read the reply, decide what to say, and follow up. That's not automation. That's a faster inbox.",
              },
              {
                icon: MessageSquare,
                title: 'Applicants go cold while your team handles other things.',
                body: 'Speed to lead is everything in staffing. A candidate who applied this morning will take a call from a competitor this afternoon. Manual follow-up is too slow.',
              },
              {
                icon: Users,
                title: "You can't scale applicant volume without adding headcount.",
                body: "Every new campaign means more messages to manage. Your team is already stretched. Hiring more reps to text applicants is expensive and inconsistent.",
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
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
                icon: Upload,
                step: 1,
                title: 'Upload your applicant list',
                body: 'CSV upload or Zapier sync from your ATS or CRM. SurFox AI pulls in your contacts and gets to work immediately.',
              },
              {
                icon: MessageSquare,
                step: 2,
                title: 'AI qualifies every lead via SMS',
                body: 'Natural conversations, intent detection, handles objections. The AI knows when to push and when to back off. It sounds like a person because it is trained to converse like one.',
              },
              {
                icon: Phone,
                step: 3,
                title: 'Hot leads routed to your team',
                body: 'Instant notifications with full conversation context. Your team jumps in at the right moment, not from the beginning.',
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy">
              SurFox AI vs Your Current Stack
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
                  { label: 'Qualifies leads automatically', manual: false, smarter: false, surfox: true },
                  { label: 'Available 24/7', manual: false, smarter: false, surfox: true },
                  { label: 'Learns from conversations', manual: false, smarter: false, surfox: true },
                  { label: 'Zapier integration', manual: false, smarter: 'Limited', surfox: true },
                  { label: 'Cost', manual: '$800+/mo + labor', smarter: '$800+/mo + labor', surfox: 'From $147/mo' },
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl border-2 border-orange/30 bg-orange/5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/10 mb-6">
              <Zap className="w-4 h-4 text-orange" />
              <span className="text-xs font-bold text-orange uppercase tracking-wide">Built for staffing</span>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Whether you're qualifying job applicants, following up on client leads, or re-engaging your candidate database, SurFox AI handles the conversation from first text to booked call. Our staffing customers run active qualification campaigns without adding a single headcount.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Objection Block */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
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
                a: 'The AI converses naturally. Candidates have mistaken it for a human rep. You control the persona and tone.',
              },
              {
                q: '"We already use SmarterContact."',
                a: 'SmarterContact sends texts. SurFox AI qualifies leads. You still need a human on top of SmarterContact. We remove that human.',
              },
              {
                q: '"What if the AI says something wrong?"',
                a: 'You upload your knowledge base and control the persona. The AI stays in scope. You monitor conversations in real time.',
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
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              Stop Texting.<br className="hidden sm:block" /> Start Qualifying.
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Most staffing teams are fully operational within 24 hours.
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
                Schedule a Demo
              </motion.a>
            </div>

            <p className="text-sm text-gray-400">
              Plans start at $147/month. 14-day free trial included.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
