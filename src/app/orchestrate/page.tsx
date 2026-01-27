'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Zap, GitBranch, Activity, Shield, CheckCircle, TrendingUp, Clock, Eye, Brain, ArrowRight, Layers, AlertCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Orchestrate() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-white text-gray-900">
      <style jsx>{`
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
          background-color: #c2410c;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">POWERED BY SURFOX INFINITY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Your AI Command Center.<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Automated Intelligence.
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              SurFox Orchestrate connects Engage, Pulse, and Insights into one unified decision layer - listening for triggers, executing workflows, and automating what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Activate Orchestrate
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

      {/* System Interconnectivity Visualization */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              The Hub That Connects Everything
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Orchestrate sits at the center of your intelligence stack
            </p>
          </motion.div>

          {/* Visual System Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-12">
              {/* Center - Orchestrate */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-orange/10 border-2 border-orange flex items-center justify-center">
                    <div className="text-center">
                      <Workflow className="w-12 h-12 sm:w-16 sm:h-16 text-orange mx-auto mb-2" />
                      <div className="text-sm sm:text-base font-bold text-navy">Orchestrate</div>
                    </div>
                  </div>
                </div>

                {/* Surrounding Products */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 pt-48 sm:pt-56">
                  {[
                    { icon: Zap, name: 'Engage', desc: 'AI Conversations' },
                    { icon: Eye, name: 'Pulse', desc: 'Real-Time Analytics' },
                    { icon: TrendingUp, name: 'Insights', desc: 'Predictions' }
                  ].map((product, i) => (
                    <div key={i} className="text-center relative">
                      {/* Connection Line */}
                      <div className="hidden sm:block absolute bottom-full left-1/2 transform -translate-x-1/2 h-24 w-0.5 bg-gradient-to-t from-orange/30 to-transparent"></div>
                      
                      <div className="w-20 h-20 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mx-auto mb-3">
                        <product.icon className="w-8 h-8 text-gray-600" />
                      </div>
                      <div className="font-semibold text-navy">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Orchestrate listens for events from all modules, applies intelligent rules, and executes automated workflows - creating a seamless intelligence layer across your entire platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              How Orchestrate Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Event-driven automation in four layers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                number: '01',
                icon: Activity,
                title: 'Event Listener', 
                desc: 'Subscribes to conversation and analytics events from Engage, Pulse, and Insights in real time.'
              },
              { 
                number: '02',
                icon: Brain,
                title: 'Decision Engine', 
                desc: 'Applies AI and rule-based filters to determine next actions based on your defined automations.'
              },
              { 
                number: '03',
                icon: Zap,
                title: 'Workflow Executor', 
                desc: 'Sends actions to the correct module - replies to Engage, optimization to Pulse, reporting to Insights.'
              },
              { 
                number: '04',
                icon: Shield,
                title: 'Audit Trail', 
                desc: 'Logs every decision with timestamp, tenant ID, rule ID, and result for complete transparency.'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                  className="relative mx-auto mb-6"
                  style={{ width: 'fit-content' }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Automations */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Real Automation Examples
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              If-this-then-that intelligence across your platform
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: AlertCircle,
                title: 'Tone Escalation', 
                trigger: 'Pulse detects negative sentiment',
                condition: 'Engagement score < 5',
                action: 'Send escalate command to Engage; notify assigned rep via dashboard'
              },
              { 
                icon: Clock,
                title: 'Response Optimization', 
                trigger: 'Engage conversation idle > 2 hours',
                condition: 'AI lead score between 5-7',
                action: 'Auto-follow-up using AI template; update Insights timeline'
              },
              { 
                icon: GitBranch,
                title: 'Funnel Movement', 
                trigger: 'Lead transitions from Cold to Warm',
                condition: 'Motivation Score > 6',
                action: 'Update lead stage, trigger AI message series, adjust Pulse pacing'
              }
            ].map((automation, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-orange/30 hover:shadow-xl hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                  <automation.icon className="w-6 h-6 text-orange" />
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-6">{automation.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Trigger</div>
                    <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{automation.trigger}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Condition</div>
                    <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{automation.condition}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Action</div>
                    <div className="text-sm text-gray-700 bg-orange/5 rounded-lg p-3 border border-orange/20">{automation.action}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Command Center Preview */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">COMMAND CENTER UI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Your Automation Control Room
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Visual rule builder, live activity feed, and system status at a glance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl border-2 border-gray-200 bg-white shadow-2xl overflow-hidden">
              {/* Command Center placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <Workflow className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 font-medium">Orchestrate Command Center</p>
                  <p className="text-sm text-gray-300 mt-2">orchestrate-dashboard.png</p>
                </div>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Active Rules', value: '47', icon: CheckCircle, color: 'green' },
                { label: 'Events/Hour', value: '1.2K', icon: Activity, color: 'blue' },
                { label: 'Automations Today', value: '342', icon: Zap, color: 'orange' },
                { label: 'Success Rate', value: '99.7%', icon: TrendingUp, color: 'green' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                  <stat.icon className={`w-5 h-5 mx-auto mb-2 text-${stat.color}-500`} />
                  <div className="text-2xl font-bold text-navy">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Orchestrate Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to automate intelligence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: GitBranch,
                title: 'Visual Rule Builder', 
                desc: 'No-code if-this-then-that interface. Build complex automations with dropdowns and logic blocks - no programming required.'
              },
              { 
                icon: Activity,
                title: 'Real-Time Event Stream', 
                desc: 'Live feed of every automation triggered, complete with trigger source, conditions met, and actions executed.'
              },
              { 
                icon: Layers,
                title: 'Multi-Module Orchestration', 
                desc: 'Connect actions across Engage, Pulse, and Insights. One event can trigger workflows in all three systems.'
              },
              { 
                icon: Shield,
                title: 'Complete Audit Trail', 
                desc: 'Every decision logged with tenant ID, rule ID, timestamp, and result. Full compliance and transparency built in.'
              },
              { 
                icon: Zap,
                title: 'Instant Execution', 
                desc: 'Sub-second response times. Orchestrate listens, decides, and acts faster than any human could.'
              },
              { 
                icon: BarChart3,
                title: 'Performance Analytics', 
                desc: 'Track automation success rates, execution times, and ROI. Optimize rules based on what actually works.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-orange" />
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by SurFox Infinity */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-2xl border-2 border-orange/20 p-8 sm:p-10 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange flex items-center justify-center flex-shrink-0">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy mb-3">
                    Powered by SurFox Infinity
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Orchestrate is built on the SurFox Infinity architecture - ensuring every automation leverages shared intelligence from your system-wide behavioral graph. Multi-tenant security, complete data isolation, and enterprise-grade reliability come standard.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Secure Multi-Tenancy</p>
                    <p className="text-sm text-gray-600">Complete tenant isolation at every layer</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Unified Intelligence</p>
                    <p className="text-sm text-gray-600">Shared behavioral graph across all modules</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Enterprise Ready</p>
                    <p className="text-sm text-gray-600">Built for scale, compliance, and reliability</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              What You Can Automate
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Common orchestration patterns
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {[
              'Auto-escalate negative sentiment conversations to human reps',
              'Trigger follow-up sequences when leads go cold',
              'Adjust AI response pacing based on engagement scores',
              'Route high-value leads to senior sales reps automatically',
              'Send alerts when conversion probability spikes',
              'Pause outreach when customer shows frustration signals',
              'Auto-update CRM when lead stage changes',
              'Trigger nurture campaigns based on AI motivation scores',
              'Escalate conversations approaching SLA deadlines',
              'Send performance summaries to managers daily',
              'Auto-retry failed messages with alternative phrasing',
              'Trigger onboarding sequences for newly qualified leads'
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-200 hover:border-orange/30 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Intelligence That Never Sleeps
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              SurFox Orchestrate automates the decisions that matter, connects your entire intelligence stack, and executes workflows faster than any human team could. Welcome to automated intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/request-access"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition"
              >
                Request Access
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
