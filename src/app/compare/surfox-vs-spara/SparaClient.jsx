"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X, MessageSquare, Globe, Target, DollarSign, Clock, Zap, Users, Building2, Shield, Award, Send, Smartphone } from 'lucide-react';
import Image from 'next/image';

export default function SparaClient() {
  const comparisonData = [
    { factor: 'Primary channel', surfox: 'SMS (98% open rate)', spara: 'Website chat, email, voice' },
    { factor: 'Use case', surfox: 'Outbound - work YOUR lead lists', spara: 'Inbound - convert website visitors' },
    { factor: 'Lead sources', surfox: 'Any list - aged leads, purchased, events, scraped', spara: 'Only website traffic' },
    { factor: 'Target customer', surfox: 'SMBs, staffing agencies, real estate, service businesses', spara: 'Enterprise SaaS with high web traffic' },
    { factor: 'Pricing', surfox: '$147-$2,497/mo', spara: 'Enterprise contracts (unlisted)' },
    { factor: 'Setup', surfox: 'Self-serve, live in minutes', spara: 'Sales-led implementation' },
    { factor: 'Best for', surfox: 'Teams with lead lists but no time to text them all', spara: 'Companies with heavy inbound web traffic' },
  ];

  const faqData = [
    {
      question: "Can Spara replace SDRs for initial lead qualification?",
      answer: "For inbound website visitors, yes. Spara handles initial chat conversations and qualifies leads who come to your site. But Spara cannot proactively reach out to lead lists you already own. If you have purchased leads, aged leads, or event signups sitting in your CRM, you need an outbound tool like SurFox AI."
    },
    {
      question: "Does Spara work for inbound lead qualification?",
      answer: "Yes, that is exactly what Spara is built for. It engages website visitors through chat, email, and voice. If your leads come to you through SEO, ads, or content marketing, Spara qualifies them. If you need to reach out to leads first, that is where SurFox AI comes in."
    },
    {
      question: "Can I use both Spara and SurFox AI?",
      answer: "Yes. Spara handles inbound website visitors. SurFox AI handles outbound to your existing lead lists via SMS. Different channels, complementary tools. Many sales teams use an inbound solution alongside an outbound solution."
    }
  ];

  return (
    <div className="bg-background text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Platform Comparison */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-white">SurFox AI</div>
                  <div className="text-sm text-white/60">Outbound SMS</div>
                </div>
              </div>

              <div className="text-3xl font-semibold text-white/40">VS</div>

              <div className="flex items-center gap-3 p-4 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white/50" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-semibold text-white/60">Spara</div>
                  <div className="text-sm text-white/50">Inbound Chat AI</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-4">
              SurFox AI vs Spara: The Outbound<br className="hidden sm:block" />
              Alternative for Lead List Qualification
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-4 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-white">Spara handles inbound website visitors.</strong>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              <strong className="text-blue-400">SurFox AI qualifies your outbound lead lists via SMS.</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-16">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                Have a Lead List? Try SurFox Free
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] hover:bg-card-bg transition"
              >
                See SurFox AI in Action
              </motion.a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4">
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">98%</div>
                <div className="text-sm text-white/60">SMS Open Rate</div>
                <div className="text-xs text-white/40 mt-1">vs 20% email</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">45%</div>
                <div className="text-sm text-white/60">Response Rate</div>
                <div className="text-xs text-white/40 mt-1">people text back</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">$147</div>
                <div className="text-sm text-white/60">Starting Price</div>
                <div className="text-xs text-white/40 mt-1">self-serve setup</div>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl border-2 border-white/[0.08] bg-background">
                <div className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-2">Minutes</div>
                <div className="text-sm text-white/60">To Go Live</div>
                <div className="text-xs text-white/40 mt-1">not weeks</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Difference - Make this prominent */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              The Core Difference
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Different tools for different lead qualification needs. Here's the key distinction:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4">
            {/* Spara */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white/50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Spara</h3>
                  <p className="text-sm text-white/60">Inbound Website AI SDR</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-card-bg mb-6">
                <h4 className="font-semibold text-white mb-2 text-sm">How It Works:</h4>
                <p className="text-sm text-white/70">Spara engages visitors who come to your website through chat widget, email, and voice. It's an AI SDR for your inbound marketing motion.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>Great for companies with high website traffic</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>Chat widget engages website visitors</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>Email and voice channel support</span>
                </div>
                <div className="flex items-start text-sm text-white/60">
                  <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                  <span>Only works with leads who find you first</span>
                </div>
                <div className="flex items-start text-sm text-white/60">
                  <X className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                  <span>Can't proactively reach your lead lists</span>
                </div>
              </div>
            </motion.div>

            {/* SurFox AI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl gradient-bg overflow-hidden flex items-center justify-center mr-4">
                  <Image src="/logo.png" alt="SurFox AI" width={48} height={48} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">SurFox AI</h3>
                  <p className="text-sm text-white/60">Outbound SMS Lead Qualification</p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-blue-500/20 bg-background mb-6">
                <h4 className="font-semibold text-white mb-2 text-sm">How It Works:</h4>
                <p className="text-sm text-white/70">SurFox AI proactively reaches out to YOUR lead lists via SMS. Upload cold leads, and AI qualifies them automatically. Your team only talks to hot prospects.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Works any lead list - aged, purchased, events, scraped</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>98% SMS open rate - people actually see it</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Proactive outreach - don't wait for leads to find you</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>SMB-friendly pricing starting at $147/mo</span>
                </div>
                <div className="flex items-start text-sm text-white/70">
                  <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Self-serve setup - live in minutes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Side-by-Side Comparison
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Quick reference to see which AI SDR solution fits your lead qualification needs.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <div className="px-4 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-card-bg border-b-2 border-white/[0.08] font-semibold text-white">Factor</th>
                  <th className="text-left p-4 bg-blue-500/5 border-b-2 border-blue-500/20 font-semibold text-blue-400">SurFox AI</th>
                  <th className="text-left p-4 bg-card-bg border-b-2 border-white/[0.08] font-semibold text-white/60">Spara</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/[0.08]"
                  >
                    <td className="p-4 font-medium text-white bg-card-bg">{row.factor}</td>
                    <td className="p-4 text-white/70 bg-blue-500/5">{row.surfox}</td>
                    <td className="p-4 text-white/60 bg-card-bg">{row.spara}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose SurFox AI */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
            {/* When to choose SurFox AI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5"
            >
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">When to Choose SurFox AI</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>You have lead lists (purchased, aged, event signups) that need qualification</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Your prospects respond better to SMS than email</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>You're an SMB without enterprise budget</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>You want to proactively reach leads, not wait for them to find you</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                  <span>Industries: Staffing, real estate, home services, insurance, solar</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-background border border-blue-500/20">
                <p className="text-sm text-white/70">
                  <strong className="text-white">Bottom line:</strong> SurFox AI is for teams with lead lists but no time to text them all. AI does the outreach, you do the closing.
                </p>
              </div>
            </motion.div>

            {/* When to choose Spara */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border-2 border-white/[0.08] bg-background"
            >
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-white/50 mr-3" />
                <h3 className="text-2xl font-semibold text-white">When to Choose Spara</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>You get significant inbound website traffic</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>You need a chat widget to engage visitors</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>You're enterprise with Salesforce/HubSpot infrastructure</span>
                </div>
                <div className="flex items-start text-white/70">
                  <Check className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                  <span>Your leads come to you (inbound marketing motion)</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-card-bg border border-white/[0.08]">
                <p className="text-sm text-white/70">
                  <strong className="text-white">Bottom line:</strong> Spara is for companies with heavy inbound web traffic who want AI to handle initial visitor engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Looking to Replace or Supplement Spara */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 px-4">
              Looking to Replace or Supplement Spara for Outbound?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 mb-6 leading-relaxed px-4">
              Spara excels at inbound website chat qualification. But if you have cold lead lists, owned databases, or trade show contacts sitting in your CRM - Spara can't reach them. That's the gap SurFox AI fills as the outbound alternative.
            </p>
            <p className="text-lg sm:text-xl text-white/60 mb-6 leading-relaxed px-4">
              If you're evaluating a Spara replacement specifically for outbound lead qualification, the comparison comes down to one question: <strong className="text-white">do your leads come to you, or do you need to reach out to them?</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-8">
              <div className="p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                <p className="font-semibold text-white mb-2">Spara is the right tool when:</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0">✓</span>Leads arrive via your website, SEO, or paid ads</li>
                  <li className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0">✓</span>You need a chat widget to convert inbound visitors</li>
                  <li className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0">✓</span>You have high inbound web traffic to qualify</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <p className="font-semibold text-white mb-2">SurFox AI is the right Spara alternative when:</p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0">✓</span>You have lead lists that need proactive outreach</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0">✓</span>Leads won't find you - you need to reach them first</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0">✓</span>You need SMS open rates (98%) vs chat widget engagement</li>
                </ul>
              </div>
            </div>
            <div className="px-4">
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-bg text-white text-base font-semibold transition"
              >
                Try SurFox AI - the Spara Alternative for Outbound
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Can They Work Together */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
              <span className="text-sm font-semibold text-green-400">COMPLEMENTARY TOOLS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 px-4">
              Can They Work Together?
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-8 leading-relaxed px-4">
              <strong className="text-white">Yes!</strong> Spara handles your website visitors, SurFox AI works your outbound lists. Different channels, different use cases, complementary tools.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              <div className="p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg">
                <Globe className="w-10 h-10 text-white/50 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">Spara Handles</h4>
                <p className="text-sm text-white/60">Website visitors who find you through marketing, SEO, ads</p>
              </div>
              <div className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5">
                <Smartphone className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-white mb-2">SurFox AI Handles</h4>
                <p className="text-sm text-white/60">Your lead lists - purchased, aged, events, any outbound source</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The SMS Advantage */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              The SMS Advantage
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              Why SMS lead qualification outperforms chatbots and email for outbound.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <h4 className="font-semibold text-white mb-2">SMS Open Rate</h4>
              <p className="text-sm text-white/60">vs 20% for email. Your message actually gets seen.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">45%</div>
              <h4 className="font-semibold text-white mb-2">Response Rate</h4>
              <p className="text-sm text-white/60">People actually text back - they don't respond to chatbots the same way.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <MessageSquare className="w-10 h-10 text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white mb-2">Feels Personal</h4>
              <p className="text-sm text-white/60">SMS feels personal, not corporate. It's how people actually communicate.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 text-center"
            >
              <Zap className="w-10 h-10 text-blue-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white mb-2">Proactive</h4>
              <p className="text-sm text-white/60">Don't wait for leads to visit your site. Reach out to them first.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 px-4">
              Who Uses SurFox AI?
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed px-4">
              SMBs and sales teams who have lead lists but no time to text them all.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
            {[
              { icon: Users, name: 'Staffing Agencies' },
              { icon: Building2, name: 'Real Estate' },
              { icon: Shield, name: 'Insurance' },
              { icon: Zap, name: 'Solar' },
              { icon: Target, name: 'Home Services' },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-2xl border-2 border-white/[0.08] bg-card-bg text-center"
              >
                <industry.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/60">
              Common questions about Spara vs SurFox AI
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border-2 border-white/[0.08] bg-card-bg"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 sm:mb-8 px-4 leading-tight">
              Have a Lead List That<br className="hidden sm:block" />
              Needs Qualifying?
            </h2>

            <p className="text-lg sm:text-xl text-white/60 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Upload your leads, let SurFox AI qualify them via SMS, your team only talks to hot prospects. <strong className="text-white">30-day money back guarantee.</strong>
            </p>

            <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto">
              Plans start at $147/month. Self-serve setup - live in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 mb-12">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg gradient-bg text-white text-base font-semibold transition flex items-center justify-center gap-2"
              >
                Try SurFox Free
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-white/[0.1] text-white text-base font-semibold hover:border-white/[0.2] hover:bg-card-bg transition"
              >
                See SurFox AI Demo
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                30-day guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                Setup in minutes
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-400" />
                Cancel anytime
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
