"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, Upload, Brain, TrendingUp, Zap, Shield, CheckCircle, Activity, Users, BarChart3, FlaskConical, FileText, Phone, Target, Plus } from 'lucide-react';
import Image from 'next/image';

export default function SurFoxRevamped() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-white text-gray-900">
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
        
        .border-navy {
          border-color: #1e293b;
        }
        
        .text-orange {
          color: #ea580c;
        }
        
        .bg-orange {
          background-color: #ea580c;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
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
            <div className="text-sm font-medium text-gray-500 mb-4 tracking-wide">SURFOX ENGAGE</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              AI-Powered SMS<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Lead Qualification
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Upload thousands of cold leads. Let AI engage, score, and qualify them via SMS. Your sales team only talks to hot prospects.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = 'https://www.getsurfox.com/pricing'}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Four simple steps from cold lead to hot prospect
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Upload, 
                step: '01',
                title: 'Upload Leads', 
                desc: 'Import thousands of cold leads in bulk. CSV, spreadsheet, or API integration.'
              },
              { 
                icon: MessageSquare, 
                step: '02',
                title: 'AI Engages', 
                desc: 'Our AI starts personalized SMS conversations with each lead via Twilio.'
              },
              { 
                icon: Target, 
                step: '03',
                title: 'Scores & Qualifies', 
                desc: 'AI scores each conversation on a 50-point scale, identifying hot prospects.'
              },
              { 
                icon: Phone, 
                step: '04',
                title: 'Sales Handoff', 
                desc: 'When a lead hits "hot" status, your sales team is notified to take over.'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="text-orange font-bold text-sm mb-4 tracking-wide">{step.step}</div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center"
                >
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Screenshots */}
      <section id="features" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Enterprise-Grade Platform
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to automate lead qualification at scale
            </p>
          </motion.div>
          
          <div className="space-y-20 sm:space-y-32 md:space-y-40">
            {/* Lead Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">Lead Management</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Monitor your entire lead pipeline in real-time. Track status, engagement levels, and conversation progress across all prospects.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Real-time lead status tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Automated categorization and filtering</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Campaign-specific lead organization</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover-lift">
                  <img 
                    src="/dashboard.png" 
                    alt="Lead Management Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* AI Control Room */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover-lift">
                  <img 
                    src="/AI-controlroom.png" 
                    alt="AI Control Room"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">AI Control Room</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Monitor system health, AI performance, and conversation quality. Get real-time insights into how your AI agents are performing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Live system performance metrics</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>AI accuracy and optimization tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Infrastructure health monitoring</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Analytics & Performance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">Analytics & Performance</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Track sales outcomes, conversion rates, and team performance. Understand which campaigns drive results and optimize accordingly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Revenue and conversion tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Sales rep performance metrics</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Win rate and pipeline analysis</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover-lift">
                  <img 
                    src="/business-analytics.png" 
                    alt="Business Analytics Dashboard"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* A/B Testing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center"
            >
              <div>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover-lift">
                  <img 
                    src="/ab-testing.png" 
                    alt="A/B Testing Interface"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-orange" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">A/B Testing & Optimization</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Continuously optimize your AI's performance. Test different conversation approaches, messaging tones, and qualification criteria.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Multi-variant conversation testing</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Statistical significance tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span>Automated winner selection</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section id="knowledge-base" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-orange" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Knowledge Base
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Empower your AI with context. Upload documents, guides, and product information so your AI can have informed, accurate conversations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 px-4">
            {[
              {
                icon: FileText,
                title: 'Document Upload',
                desc: 'Upload PDFs, Word docs, and text files containing product information, pricing, and FAQs.'
              },
              {
                icon: Brain,
                title: 'AI Learning',
                desc: 'AI automatically indexes and learns from your documents to provide accurate, contextual responses.'
              },
              {
                icon: Zap,
                title: 'Real-Time Reference',
                desc: 'During conversations, AI references your knowledge base to answer questions and overcome objections.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 hover-lift"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-orange/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-orange" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Built to Scale
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Stop wasting time on cold leads. Let AI do the qualification work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-4">
            {[
              { value: '1000s', label: 'Simultaneous Conversations', desc: 'Handle thousands of conversations at the same time' },
              { value: '100%', label: 'Lead Coverage', desc: 'Every lead gets engaged and qualified systematically' },
              { value: '50pt', label: 'Scoring System', desc: 'Precise qualification tracking for every conversation' },
              { value: '24/7', label: 'Always On', desc: 'AI never sleeps, never takes breaks, never stops' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-orange mb-3">{stat.value}</div>
                <div className="text-lg sm:text-xl font-semibold text-navy mb-2">{stat.label}</div>
                <p className="text-gray-600 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Built on trusted infrastructure with security and compliance at the core
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Shield, 
                title: 'Data Encryption', 
                desc: 'End-to-end encryption for all SMS conversations and lead data.'
              },
              { 
                icon: CheckCircle, 
                title: 'TCPA Compliant', 
                desc: 'Full compliance with telecommunications regulations and opt-out management.'
              },
              { 
                icon: Activity, 
                title: 'Enterprise Stack', 
                desc: 'Built on AWS, Twilio, and OpenAI infrastructure for reliability.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to know about SurFox Engage
            </p>
          </motion.div>

          <div className="space-y-4 px-4">
            {[
              {
                question: 'How does the 50-point scoring system work?',
                answer:
                  "The AI analyzes each conversation across multiple dimensions including response quality, engagement level, buying signals, timing indicators, and qualification criteria you define. As the conversation progresses, the lead's score increases until they reach 'hot' status, typically around 40+ points, indicating they're ready for human sales engagement."
              },
              {
                question: 'What happens when a lead becomes "hot"?',
                answer:
                  'When a lead reaches hot status, the AI automatically notifies your sales team via your preferred channel (email, Slack, CRM, etc.). The AI then steps back from the conversation, providing your team with a full transcript, qualification summary, and key insights to enable a warm, informed handoff.'
              },
              {
                question: 'Can I customize the AI\'s conversation style and scoring threshold?',
                answer:
                  "Yes. You can adjust the AI's tone and persona (professional, casual, consultative) to match your brand voice. You can also customize the scoring threshold that determines when a lead is considered 'hot' and ready for sales handoff. The AI's qualification logic continuously learns and improves based on conversation outcomes."
              },
              {
                question: 'How does the knowledge base integration work?',
                answer:
                  'Upload documents like product specs, pricing sheets, case studies, and FAQs to your knowledge base. The AI automatically indexes this content and references it during conversations to answer prospect questions accurately. When you update documents, the AI immediately incorporates the new information without retraining.'
              },
              {
                question: 'What SMS compliance features are included?',
                answer:
                  "SurFox Engage is built with TCPA compliance in mind, including proper opt-in verification, clear sender identification, automated opt-out handling, and conversation logging for audit purposes. We recommend consulting with your legal team to ensure your specific use case meets all applicable regulations."
              },
              {
                question: 'How quickly can I get started?',
                answer:
                  "Most customers are up and running within 24-48 hours. The process includes: uploading your lead list, configuring your knowledge base, defining qualification criteria, and testing conversations. Our team provides onboarding support to ensure smooth implementation and optimal AI performance from day one."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift"
              >
                <button
                  onClick={() => {
                    const element = document.getElementById(`faq-${i}`);
                    if (element) {
                      element.style.display = element.style.display === 'none' ? 'block' : 'none';
                    }
                  }}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-navy pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Plus className="w-4 h-4 text-orange" />
                  </div>
                </button>
                <div id={`faq-${i}`} style={{ display: 'none' }} className="px-6 sm:px-8 pb-5 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Ready to automate your<br className="hidden sm:block" />
              <span className="sm:inline"> </span>lead qualification?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4">
              Join sales teams using SurFox Engage to let AI handle the tedious work while they focus on closing deals.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'https://www.getsurfox.com/pricing'}
              className="px-10 sm:px-12 py-4 sm:py-5 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-3 mx-auto"
            >
              Start Qualifying Leads Today
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>Powered by</span>
              <span className="font-semibold text-orange">SurFox Infinity</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}