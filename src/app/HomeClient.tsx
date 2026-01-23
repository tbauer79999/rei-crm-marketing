"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Upload, Phone, Shield, CheckCircle, Activity, ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export default function SurFoxHome() {
  return (
    <div className="bg-white text-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .text-navy {
          color: #1e293b;
        }

        .bg-navy {
          background-color: #1e293b;
        }

        .text-orange {
          color: #ea580c;
        }

        .bg-orange {
          background-color: #ea580c;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              SurFox listens to every<br className="hidden sm:block" />
              customer signal - and knows<br className="hidden sm:block" />
              when to reach out.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              We're building the AI layer that understands all your customer interactions and takes intelligent action. Today, that starts with outbound - upload cold leads, let SurFox qualify them via SMS, your team only talks to hot prospects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/platform"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See the Vision
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What SurFox Does Today */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">LIVE NOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              AI-Powered Lead Qualification
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Your sales team only talks to hot leads. SurFox handles the rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: Upload,
                title: 'Upload your leads',
                desc: 'Import thousands of cold leads in bulk. CSV, spreadsheet, or direct integration.'
              },
              {
                icon: MessageSquare,
                title: 'SurFox qualifies via SMS',
                desc: 'Personalized conversations at scale. Every lead gets engaged, scored, and qualified automatically.'
              },
              {
                icon: Phone,
                title: 'Your team closes',
                desc: 'When a lead is ready, your sales team gets notified. They only spend time on prospects who want to talk.'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-20 text-center"
          >
            <p className="text-lg sm:text-xl text-gray-700 italic">
              "Beta customers are already calling it 'a no-brainer.'"
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 px-4">
              This is just the beginning.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Lead qualification is where we start. But SurFox is being built to handle something much bigger.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            {/* Signals In */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-gray-200 bg-gray-50"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-6">
                <ArrowDownLeft className="w-6 h-6 text-gray-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">Signals In</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every customer interaction - calls, texts, transactions, reviews, support tickets, bookings - flowing into one intelligence layer.
              </p>
              <span className="text-sm font-medium text-gray-400">Coming soon</span>
            </motion.div>

            {/* Actions Out */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border-2 border-orange bg-orange/5"
            >
              <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center mb-6">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">Actions Out</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AI-initiated outreach, follow-ups, escalations, and automations - triggered by what SurFox learns about your customers.
              </p>
              <span className="text-sm font-semibold text-orange">This is where we start</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/platform"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-orange font-semibold hover:underline"
            >
              See where we're headed
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Trust / Infrastructure - Condensed */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-2">
              Built on enterprise infrastructure
            </h3>
            <p className="text-orange font-medium text-sm sm:text-base">
              AWS • Twilio • OpenAI • Supabase
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-4">
            {[
              {
                icon: Shield,
                title: 'Encrypted & Secure',
                desc: 'TLS and AES encryption across all systems.'
              },
              {
                icon: CheckCircle,
                title: 'TCPA Compliant',
                desc: 'Built with telecommunications regulations in mind.'
              },
              {
                icon: Activity,
                title: 'Always On',
                desc: 'Redundant infrastructure. 24/7 monitoring.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-orange" />
                </div>
                <h4 className="text-lg font-semibold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Stop chasing cold leads.<br className="hidden sm:block" />
              Let SurFox find the ones who are ready.
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4">
              SurFox qualifies your leads automatically. Your team only talks to people who want to talk.
            </p>

            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
