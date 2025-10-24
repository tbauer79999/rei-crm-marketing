"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, TrendingUp, Activity, Eye, LineChart, PieChart, Brain, Shield, CheckCircle, Zap, Target, Users, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function SurFoxPulse() {
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
            <div className="text-sm font-medium text-gray-500 mb-4 tracking-wide">SURFOX PULSE</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              See What Your<br className="hidden sm:block" />
              <span className="sm:inline"> </span>AI Sees
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Transform AI conversation data into actionable intelligence. Pulse reveals insights from your interactions, helping you understand trends, effectiveness, and ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Unlock Visibility
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
              How Pulse Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              From raw signals to strategic insights in four steps
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                number: '01',
                icon: Activity,
                title: 'Data Ingestion', 
                desc: 'Pulse automatically collects conversation data from SurFox Engage and other sources, aggregating every interaction signal.'
              },
              { 
                number: '02',
                icon: Brain,
                title: 'Signal Analysis', 
                desc: 'Advanced algorithms analyze sentiment, intent, motivation, and behavioral patterns across thousands of conversations.'
              },
              { 
                number: '03',
                icon: LineChart,
                title: 'Insight Generation', 
                desc: 'Raw data transforms into clear, actionable insights - trend detection, performance scoring, and anomaly identification.'
              },
              { 
                number: '04',
                icon: Target,
                title: 'Action Recommendations', 
                desc: 'Pulse suggests concrete next steps based on what the data reveals, helping you optimize strategy and execution.'
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

      {/* Feature Modules Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Intelligence Modules
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Every dimension of your AI's performance, visualized
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: TrendingUp,
                title: 'Motivation Trends', 
                desc: 'Track how customer motivation evolves over time. Identify what drives engagement and when prospects are most receptive.',
                features: ['Sentiment tracking', 'Intent shifts', 'Engagement peaks']
              },
              { 
                icon: Activity,
                title: 'Conversation Heatmaps', 
                desc: 'Visualize interaction patterns across time, channels, and segments. Spot bottlenecks and opportunities at a glance.',
                features: ['Temporal patterns', 'Channel performance', 'Segment analysis']
              },
              { 
                icon: PieChart,
                title: 'Funnel Conversion', 
                desc: 'Monitor how leads progress through your funnel. Understand drop-off points and optimize conversion rates at every stage.',
                features: ['Stage progression', 'Drop-off analysis', 'Conversion metrics']
              },
              { 
                icon: BarChart3,
                title: 'AI Performance Reports', 
                desc: 'Deep dive into how your AI performs. Response quality, accuracy metrics, and continuous improvement tracking.',
                features: ['Quality scores', 'Model accuracy', 'Learning curves']
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 sm:p-10 rounded-2xl border-2 border-gray-200 bg-white hover:border-orange/30 hover:shadow-xl hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-orange" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">AI INTELLIGENCE DASHBOARD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Your Command Center
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              All insights, metrics, and intelligence in one unified view
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
              {/* Dashboard placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 font-medium">Dashboard Preview</p>
                  <p className="text-sm text-gray-300 mt-2">pulse-dashboard.png</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Why Teams Choose Pulse
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Transparency, performance, and intelligence combined
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Eye,
                title: 'Complete Transparency', 
                desc: 'See exactly how your AI is performing. No black boxes, no guesswork - just clear, honest metrics.'
              },
              { 
                icon: Zap,
                title: 'Actionable Insights', 
                desc: 'Data without action is noise. Pulse translates patterns into concrete recommendations you can execute immediately.'
              },
              { 
                icon: Users,
                title: 'Team Alignment', 
                desc: 'Shared dashboards keep sales, marketing, and leadership on the same page with real-time visibility.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 sm:p-8"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-orange/10 flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-orange" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-6">
              <span className="text-sm font-semibold text-green-700">SECURE & COMPLIANT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Built on Trust
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Data governance, model transparency, and privacy by design
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Shield,
                title: 'Data Governance', 
                desc: 'Enterprise-grade security with complete tenant isolation. Your analytics data never crosses boundaries.'
              },
              { 
                icon: Eye,
                title: 'Model Transparency', 
                desc: 'Understand how conclusions are reached. Every insight can be traced back to source data and methodology.'
              },
              { 
                icon: CheckCircle,
                title: 'Privacy by Design', 
                desc: 'Built with GDPR compliance in mind. Data retention policies, secure deletion, and audit trails standard.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Engage */}
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
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy mb-3">
                    Pulse + Engage = Complete Intelligence
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    SurFox Engage handles the conversations. SurFox Pulse reveals what those conversations mean. Together, they create a closed loop of action and insight.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Seamless Integration</p>
                    <p className="text-sm text-gray-600">Pulse automatically syncs with Engage data in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-navy mb-1">Unified Platform</p>
                    <p className="text-sm text-gray-600">One login, one interface, complete visibility</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
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
          </motion.div>
          
          <div className="space-y-6 px-4">
            {[
              {
                q: 'How deep is the analytics in Pulse?',
                a: 'Pulse analyzes over 50 data points per conversation, including sentiment, intent, timing, engagement patterns, and behavioral signals. You can drill down from high-level trends to individual message analysis.'
              },
              {
                q: 'What is the reporting cadence?',
                a: 'Pulse updates in real-time as conversations happen. You can view live dashboards, schedule automated reports (daily, weekly, monthly), or export custom reports on demand.'
              },
              {
                q: 'Does Pulse require SurFox Engage?',
                a: 'Pulse is designed to work seamlessly with Engage, but can also ingest data from other conversation platforms via our API. The tightest integration and best experience comes from using both products together.'
              },
              {
                q: 'Can I customize the dashboards?',
                a: 'Yes. Pulse comes with pre-built dashboards for common use cases, but you can create custom views, filter by any dimension, and save personalized dashboard configurations.'
              },
              {
                q: 'How is my data secured in Pulse?',
                a: 'Pulse operates with the same enterprise-grade security as all SurFox products: complete tenant isolation, encrypted storage, secure APIs, and compliance with data privacy regulations.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 hover:border-orange/30 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
              Unlock Visibility.<br />Activate SurFox Pulse.
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Stop flying blind. Start seeing what your AI sees. Transform conversation data into strategic advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition inline-flex items-center justify-center gap-2"
              >
                Get Started with Pulse
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
