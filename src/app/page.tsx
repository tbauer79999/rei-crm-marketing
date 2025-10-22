"use client"

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Brain, TrendingUp, Zap, Shield, CheckCircle, Activity } from 'lucide-react';

export default function SurFoxCorporate() {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              The AI Intelligence Layer behind<br className="hidden sm:block" />
              <span className="sm:inline"> </span> Communication
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              SurFox transforms unstructured communication data into actionable intelligence, empowering enterprises to understand, predict, and activate.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Explore Platform
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Our Vision
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Every conversation contains insight. SurFox makes that insight visible, predictable, and actionable — transforming communication from noise into intelligence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative px-4">
            {/* Connecting line - hide on mobile */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-orange/20 via-orange/40 to-orange/20" />
            
            {[
              { 
                icon: Brain, 
                title: 'Understanding', 
                desc: 'Extract meaning from unstructured communication across every channel and medium.'
              },
              { 
                icon: TrendingUp, 
                title: 'Prediction', 
                desc: 'Identify patterns and forecast outcomes before they emerge in your data.'
              },
              { 
                icon: Zap, 
                title: 'Activation', 
                desc: 'Turn insights into action with intelligent automation and real-time alerts.'
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center relative z-10"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-orange/10 flex items-center justify-center"
                >
                  <pillar.icon className="w-7 h-7 sm:w-8 sm:h-8 text-orange" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              The SurFox Ecosystem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              A suite of intelligence products powered by a unified AI foundation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                name: 'SurFox Engage', 
                desc: 'AI-powered conversation intelligence for sales teams. Automatically qualify leads, predict outcomes, and accelerate pipeline velocity.',
                borderColor: 'hover:border-orange/30',
                bgHover: 'hover:bg-orange/5'
              },
              { 
                name: 'SurFox Insights', 
                desc: 'Enterprise communication analytics platform. Transform message data into strategic intelligence across your organization.',
                borderColor: 'hover:border-cyan-500/30',
                bgHover: 'hover:bg-cyan-50/50'
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`p-8 sm:p-10 rounded-2xl border border-gray-200 bg-white transition-all duration-300 ${product.borderColor} ${product.bgHover} cursor-pointer`}
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SurFox Infinity Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange/10 to-purple/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">POWERED BY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              SurFox Infinity
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              The unified AI intelligence layer that powers every SurFox product
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                title: 'Unified Learning', 
                desc: 'One AI brain learns from every conversation across all products, continuously improving intelligence for all users.'
              },
              { 
                title: 'Cross-Product Intelligence', 
                desc: 'Insights from sales conversations inform communication analytics. Analytics patterns enhance sales predictions.'
              },
              { 
                title: 'Enterprise Scale', 
                desc: 'Built to process millions of conversations simultaneously while maintaining accuracy and speed.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Built for Enterprise Standards
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Architected from day one with SOC 2 and ISO 27001 compliance in mind.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Shield, 
                title: 'Data Encryption', 
                desc: 'Industry-standard TLS and AES encryption across all systems.'
              },
              { 
                icon: CheckCircle, 
                title: 'SOC 2 & ISO Roadmap', 
                desc: 'Architected to meet enterprise security frameworks.'
              },
              { 
                icon: Activity, 
                title: 'Continuous Reliability', 
                desc: 'Redundant infrastructure and 24/7 uptime monitoring.'
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

      {/* Infrastructure & Expertise Section */}
      <section id="proof" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-14 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Proven Infrastructure, Real Expertise
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">Built on Enterprise Stack</h3>
              <p className="text-orange font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                AWS | Google Cloud | Twilio | OpenAI | Supabase
              </p>
              <p className="text-gray-600 leading-relaxed">
                Global-scale infrastructure with encryption, redundancy, and carrier-grade reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">Operator-Led Development</h3>
              <p className="text-orange font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                Founded by communication system experts
              </p>
              <p className="text-gray-600 leading-relaxed">
                Purpose-built to turn unstructured conversations into actionable intelligence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="contact" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Ready to transform your<br className="hidden sm:block" />
              <span className="sm:inline"> </span>communication intelligence?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4">
              SurFox is building the future of communication intelligence - architected for scale, security, and enterprise readiness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <a href="#" className="text-base font-semibold text-navy hover:text-orange transition">
                Company
              </a>
              <span className="hidden sm:block text-gray-300">•</span>
              <a href="#" className="text-base font-semibold text-navy hover:text-orange transition">
                Careers
              </a>
              <span className="hidden sm:block text-gray-300">•</span>
              <a href="#" className="text-base font-semibold text-navy hover:text-orange transition">
                Contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}