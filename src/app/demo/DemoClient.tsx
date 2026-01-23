'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, TrendingUp, Users, Check, AlertCircle } from 'lucide-react';

export default function DemoClient() {
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-8 leading-tight">
              Welcome to the{' '}
              <span className="text-orange">End of Text Blasting</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-navy mb-8">
              Blasts create noise. SurFox creates buyers.
            </p>

            <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                You're about to see how SurFox replaces text blasters with intelligent, psychology-aware conversations that surface real buyers.
              </p>

              <p>
                Whether you're solo or leading a team, every minute counts—and every lead needs real qualification.
                This isn't a walkthrough; it's how you spend less time sorting and more time closing.
              </p>

              <p>
                We know the grind: blasting thousands, generic follow-ups, and sifting through "not interested."
                SurFox reads psychology, adapts tone in real time, and only escalates genuine intent.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How SurFox Works - Features Showcase */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              How SurFox Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four steps to turning cold leads into qualified conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Upload,
                title: 'Upload Leads',
                description: 'Bulk import, Chrome extension capture, or integrate with your CRM. Get your leads into the system in seconds.'
              },
              {
                icon: MessageSquare,
                title: 'SurFox Engages',
                description: 'AI conversations with psychological analysis. Adapts tone and approach in real-time based on prospect responses.'
              },
              {
                icon: TrendingUp,
                title: 'Hot Leads Escalate',
                description: 'Dashboard alerts you the moment buying signals are detected. No more sifting through noise.'
              },
              {
                icon: Users,
                title: 'Your Team Closes',
                description: 'Only talk to qualified, ready-to-buy prospects. Your time goes to deals, not dead ends.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-6 rounded-xl bg-orange/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters - Problem/Solution */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              The Problem With Text Blasting
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See the difference between old-school blasting and intelligent conversations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Traditional Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="text-2xl font-semibold text-navy">Traditional Platforms</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">×</span>
                  <span><strong className="text-navy">Generic templates</strong> - Same message to everyone, regardless of personality or intent</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">×</span>
                  <span><strong className="text-navy">Manual qualification</strong> - Your team wastes hours reading every response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">×</span>
                  <span><strong className="text-navy">High unsubscribe rates</strong> - Prospects feel spammed and opt out immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1 text-xl">×</span>
                  <span><strong className="text-navy">Wasted time</strong> - Chase ghosts instead of close deals</span>
                </li>
              </ul>
            </motion.div>

            {/* SurFox Approach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange/5 rounded-2xl border-2 border-orange p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-navy">SurFox Approach</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <span><strong className="text-navy">Psychology-based conversations</strong> - Reads personality and adapts messaging in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <span><strong className="text-navy">Automatic qualification</strong> - SurFox identifies buying signals and escalates hot leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <span><strong className="text-navy">Higher engagement</strong> - Personalized conversations feel human, not robotic</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange mt-1 flex-shrink-0" />
                  <span><strong className="text-navy">Your time on deals</strong> - Only talk to prospects who are ready to buy</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA / Closer */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-8 leading-tight">
              The Choice Is Clear.<br />
              The Future of Sales Is Now.
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-gray-600 leading-relaxed mb-12">
              <p>
                SurFox isn't a "better blaster." It's the blaster's replacement. It reads personality, adapts tone in real time, learns from outcomes, and escalates only qualified prospects - 24/7.
              </p>

              <p>
                In a competitive market, sticking with a blaster is choosing noise. Your competitors are wasting hours; you could be closing deals. They're chasing ghosts; you could be building relationships with validated prospects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition shadow-lg"
              >
                Start 14-Day Free Trial
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 rounded-lg border-2 border-gray-300 text-navy text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Schedule Live Demo
              </motion.a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange flex-shrink-0" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange flex-shrink-0" />
                <span>30-day results guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-orange flex-shrink-0" />
                <span>Setup in 15 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
