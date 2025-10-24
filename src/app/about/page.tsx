'use client'

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, TrendingUp, Shield, Zap, Brain, Eye, Heart, Rocket, Award, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Building the Intelligence Layer<br className="hidden sm:block" />
              <span className="sm:inline"> </span>for Business
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              SurFox transforms human interaction data into strategic intelligence. We believe every conversation, every signal, every interaction contains insight - and businesses deserve the tools to see it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Make human interaction intelligence accessible to every business. Not just Fortune 500 companies with unlimited budgets - but any organization that wants to understand their customers better.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are building the infrastructure that turns unstructured interaction data into strategic advantage.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-orange" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A future where every business decision is informed by deep customer understanding. Where AI does not replace human judgment but enhances it with visibility, foresight, and intelligence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are building the foundational layer that makes this possible - one product, one customer, one insight at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Why SurFox Exists
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Built by operators who lived the problem
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-10 md:p-12"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                SurFox was born from 20+ years in the trenches of sales and revenue operations. Our founder spent decades watching businesses generate massive amounts of interaction data - calls, messages, emails, transactions - and struggle to make sense of it.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Existing tools offered surface-level analytics. They could tell you how many messages were sent, but not what motivated the customer. They could show you conversion rates, but not predict who would convert next. They gave you dashboards full of numbers, but no real intelligence.
              </p>
              
              <div className="bg-orange/5 border-l-4 border-orange rounded-lg p-6 my-8">
                <p className="text-xl font-semibold text-navy mb-3">
                  The gap was clear:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Businesses needed more than analytics. They needed intelligence. Not just visibility into what happened, but insight into what it means and foresight into what happens next.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                So we built SurFox. An AI-powered platform that does not just track interactions - it understands them. That does not just report on the past - it predicts the future. That does not just give you data - it gives you intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: Heart,
                title: 'Customer First',
                desc: 'We build for operators, not executives. Every feature solves a real problem that real people face every day.'
              },
              {
                icon: Shield,
                title: 'Privacy by Design',
                desc: 'Complete tenant isolation is not negotiable. Your data remains yours - always encrypted, never shared, fully under your control.'
              },
              {
                icon: Brain,
                title: 'Intelligence Over Hype',
                desc: 'No AI buzzwords. No empty promises. We build real intelligence that produces measurable results.'
              },
              {
                icon: Lightbulb,
                title: 'Transparent Communication',
                desc: 'We tell you what we can do, what we are building, and what we cannot do yet. No smoke and mirrors.'
              },
              {
                icon: TrendingUp,
                title: 'Continuous Improvement',
                desc: 'Software is never done. We ship fast, learn quickly, and iterate constantly based on real customer feedback.'
              },
              {
                icon: Users,
                title: 'Team Empowerment',
                desc: 'We hire smart people and trust them. Autonomy, ownership, and impact matter more than hierarchy.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-orange" />
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              What We Are Building
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The product roadmap we are executing on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: Zap,
                title: 'SurFox Engage',
                status: 'Live Now',
                statusColor: 'green',
                desc: 'AI-powered conversation platform that automates lead qualification via SMS and messaging.'
              },
              {
                icon: Eye,
                title: 'SurFox Pulse',
                status: 'In Development',
                statusColor: 'orange',
                desc: 'Real-time analytics and visibility into all your human interactions. See what your AI sees.'
              },
              {
                icon: TrendingUp,
                title: 'SurFox Insights',
                status: 'In Development',
                statusColor: 'orange',
                desc: 'Predictive intelligence layer. Forecast trends, model outcomes, and optimize performance.'
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg hover-lift"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-orange" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    product.statusColor === 'green' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange/10 text-orange'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/vision"
              className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
            >
              View Full Roadmap
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Where We're Going */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Where We Are Going
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-10 md:p-12"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We started with sales (SurFox Engage) because that is where the pain was most acute. But the platform we are building is designed for so much more.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The same intelligence layer that powers sales conversations can power customer support, recruiting, retail operations, healthcare interactions, and industries we have not even imagined yet.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  'Customer Support Intelligence',
                  'Recruiting & HR Analytics',
                  'Retail Experience Optimization',
                  'Healthcare Communication',
                  'Financial Services Compliance',
                  'Education & Training Insights'
                ].map((vertical, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
                    <div className="w-2 h-2 rounded-full bg-orange flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{vertical}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is ambitious but clear: become the foundational intelligence layer that powers human-to-business interaction across every industry. One unified platform, infinite applications.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Join the Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              We are just getting started
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: Rocket,
                title: 'Work With Us',
                desc: 'We are building a world-class team. If you want to solve hard problems with great people, we want to hear from you.',
                link: '/careers',
                linkText: 'View Open Positions'
              },
              {
                icon: Users,
                title: 'Become a Customer',
                desc: 'Join forward-thinking companies already using SurFox to transform their customer intelligence.',
                link: '/request-access',
                linkText: 'Request Access'
              },
              {
                icon: Globe,
                title: 'Partner With Us',
                desc: 'Building something complementary? Want to integrate with SurFox? Let us talk about partnership opportunities.',
                link: '/contact',
                linkText: 'Get in Touch'
              }
            ].map((cta, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <cta.icon className="w-6 h-6 text-orange" />
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3">{cta.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{cta.desc}</p>
                
                <Link
                  href={cta.link}
                  className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
                >
                  {cta.linkText}
                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              This Is Just the Beginning
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              We are building the intelligence infrastructure that every business will eventually need. Join us on this journey - as a customer, a team member, or a partner.
            </p>

            <p className="text-base sm:text-lg font-semibold text-orange px-4">
              The future of business intelligence is human interaction intelligence.<br />
              And we are building it.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
