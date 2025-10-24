'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Rocket, TrendingUp, Zap, Shield, Database, Users, BarChart, ShoppingCart, Briefcase, Globe } from 'lucide-react';

export default function VisionRoadmap() {
  const containerRef = useRef(null);
  const [activeYear, setActiveYear] = useState('2025');

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

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-roadmap {
          animation: subtle-pulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-roadmap" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/5 rounded-full blur-3xl animate-roadmap" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Building the Intelligence Layer<br className="hidden sm:block" />
              <span className="sm:inline"> </span>for Every Business
            </h1>
            
            <p className="text-base sm:text-lg font-semibold text-orange mb-6 sm:mb-8">
              Powered by SurFox Infinity
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Our vision is ambitious: become the foundational intelligence layer that powers human interaction understanding across every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              From single use case to universal platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-10 md:p-12"
            >
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Every business generates massive amounts of human interaction data - messages, calls, transactions, behaviors - but lacks the infrastructure to understand it systematically.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  SurFox is building that infrastructure. Not as a point solution for one department, but as foundational intelligence that any business can leverage to understand their customers, predict outcomes, and drive decisions.
                </p>

                <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-lg p-6 my-8">
                  <p className="text-xl font-semibold text-navy mb-3">
                    The SurFox Vision:
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    One intelligence engine. Multiple vertical applications. Complete tenant isolation. Enterprise-grade reliability. Built to scale from startups to Fortune 500.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We started with sales (SurFox Engage) because that's where the pain was most acute. But the platform we're building is designed for so much more - analytics, recruiting, retail, support, and industries we haven't even imagined yet.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current State - What's Live */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-green-100 border border-green-300 mb-6">
              <span className="text-sm font-semibold text-green-700">LIVE NOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              What's Available Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The foundation is built and operational
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Zap,
                title: 'SurFox Engage', 
                desc: 'AI-powered texting platform that turns cold leads into qualified conversations. Live and scaling with customers.',
                status: 'Production',
                color: 'green'
              },
              { 
                icon: Database,
                title: 'SurFox Infinity Engine', 
                desc: 'The core predictive analytics and ML infrastructure powering all products. Learning within isolated tenant environments.',
                status: 'Production',
                color: 'green'
              },
              { 
                icon: Shield,
                title: 'Security Infrastructure', 
                desc: 'Multi-tenant isolation, encrypted data storage, secure APIs. Built for enterprise from day one.',
                status: 'Production',
                color: 'green'
              },
              { 
                icon: Globe,
                title: 'Integration Framework', 
                desc: 'Native connectors for communication channels, CRMs, and business systems. REST APIs for custom integrations.',
                status: 'Production',
                color: 'green'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border-2 border-green-200 bg-green-50/30 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Roadmap */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">COMING SOON</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Product Roadmap
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Expanding the platform across verticals
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto px-4">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-orange/50 to-orange/20"></div>

              {/* Roadmap Items */}
              <div className="space-y-12 md:space-y-16">
                {[
                  {
                    quarter: 'Q4 2025',
                    title: 'SurFox Insights',
                    icon: BarChart,
                    desc: 'Deep dive analytics about your company. Understand interaction patterns, predict trends, and identify opportunities across all your data.',
                    features: ['Pattern recognition', 'Predictive forecasting', 'Custom dashboards'],
                    status: 'In Development'
                  },
                  {
                    quarter: 'Q1 2026',
                    title: 'SurFox Recruit',
                    icon: Users,
                    desc: 'Human interaction intelligence tailored for recruiting. Predict candidate quality, optimize hiring workflows, forecast retention.',
                    features: ['Candidate scoring', 'Hiring predictions', 'Workflow automation'],
                    status: 'Planned'
                  },
                  {
                    quarter: 'Q2 2026',
                    title: 'SurFox Retail',
                    icon: ShoppingCart,
                    desc: 'Interaction intelligence for retail operations. Predict customer behavior, optimize inventory signals, forecast demand.',
                    features: ['Demand forecasting', 'Customer behavior', 'Inventory optimization'],
                    status: 'Planned'
                  },
                  {
                    quarter: 'Q3 2026',
                    title: 'Enterprise Features',
                    icon: Briefcase,
                    desc: 'Advanced capabilities for large organizations. Custom workflows, advanced permissions, dedicated support, and white-label options.',
                    features: ['SSO & SAML', 'Advanced RBAC', 'Custom deployments'],
                    status: 'Planned'
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className="md:w-5/12 relative">
                      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sm:p-8 hover:border-orange/30 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-orange" />
                          </div>
                          <span className="text-xs font-semibold text-orange bg-orange/10 px-3 py-1 rounded-full">
                            {item.status}
                          </span>
                        </div>
                        
                        <div className="text-sm font-semibold text-orange mb-2">{item.quarter}</div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                        
                        <div className="space-y-2">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex md:w-2/12 items-center justify-center">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-orange border-4 border-white shadow-lg z-10 relative"></div>
                        <div className="absolute inset-0 w-8 h-8 rounded-full bg-orange/30 animate-ping"></div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="md:w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Evolution */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Continuous Platform Evolution
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              SurFox Infinity gets smarter with every release
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: TrendingUp,
                title: 'Model Improvements', 
                desc: 'Continuous refinement of predictive analytics algorithms. More accurate forecasting, better pattern recognition, deeper insights.',
              },
              { 
                icon: Rocket,
                title: 'Performance Optimization', 
                desc: 'Faster processing, lower latency, higher throughput. Scaling infrastructure to handle millions of interactions per second.',
              },
              { 
                icon: Database,
                title: 'Data Capabilities', 
                desc: 'Expanded signal types, richer context understanding, more sophisticated behavioral modeling across all interaction types.',
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-orange" />
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Roadmap */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Security & Compliance Milestones
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Building trust through certification and transparency
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            {[
              { 
                milestone: 'SOC 2 Type II Certification',
                timeline: 'Q2 2026',
                status: 'roadmap',
                desc: 'Third-party audit of security, availability, and confidentiality controls.'
              },
              { 
                milestone: 'ISO 27001 Certification',
                timeline: 'Q3 2026',
                status: 'roadmap',
                desc: 'International standard for information security management systems.'
              },
              { 
                milestone: 'HIPAA Compliance Package',
                timeline: 'Q4 2026',
                status: 'roadmap',
                desc: 'BAA agreements and additional controls for healthcare customers.'
              },
              { 
                milestone: 'GDPR Compliance Tools',
                timeline: 'Active',
                status: 'live',
                desc: 'Data subject rights, consent management, and portability features built into the platform.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {item.status === 'live' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <Clock className="w-5 h-5 text-orange flex-shrink-0" />
                      )}
                      <h3 className="text-lg font-semibold text-navy">{item.milestone}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed ml-8">{item.desc}</p>
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                    item.status === 'live' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-orange/10 text-orange'
                  }`}>
                    {item.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              This Is Just the Beginning
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed px-4 max-w-3xl mx-auto">
              We're building SurFox to be the intelligence infrastructure that every business needs but doesn't exist yet. The roadmap is ambitious because the opportunity is enormous.
            </p>

            <p className="text-base sm:text-lg font-semibold text-orange mb-10 sm:mb-12 px-4">
              Every product. Every vertical. One foundation: SurFox Infinity.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
