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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="text-2xl font-semibold text-navy">
            SurFox
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            <a href="#vision" className="hover:text-navy transition">Vision</a>
            <a href="#ecosystem" className="hover:text-navy transition">Ecosystem</a>
            <a href="#proof" className="hover:text-navy transition">Proof</a>
            <a href="#contact" className="hover:text-navy transition">Contact</a>
          </div>
          
          <button className="px-6 py-2.5 rounded-lg bg-orange text-white text-sm font-semibold hover:bg-orange-600 transition">
            Explore Platform
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-navy mb-8 leading-[1.1] tracking-tight">
              The AI Intelligence Layer<br />
              for Communication
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
              SurFox transforms unstructured communication data into actionable intelligence, empowering enterprises to understand, predict, and activate.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Explore Platform
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-40 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-navy mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every conversation contains insight. SurFox makes that insight visible, predictable, and actionable — transforming communication from noise into intelligence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
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
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange/10 flex items-center justify-center"
                >
                  <pillar.icon className="w-8 h-8 text-orange" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section id="ecosystem" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-navy mb-6">
              The SurFox Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three integrated products, one unified intelligence layer
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'SurFox Engage', 
                desc: 'AI-powered conversation management that qualifies, nurtures, and converts leads automatically.',
                borderColor: 'hover:border-orange-200',
                bgHover: 'hover:bg-orange-50/30'
              },
              { 
                name: 'SurFox Pulse', 
                desc: 'Real-time communication analytics that surface patterns, sentiment, and signals across your organization.',
                borderColor: 'hover:border-blue-200',
                bgHover: 'hover:bg-blue-50/30'
              },
              { 
                name: 'SurFox Insight', 
                desc: 'Strategic intelligence platform that transforms communication data into business foresight.',
                borderColor: 'hover:border-purple-200',
                bgHover: 'hover:bg-purple-50/30'
              }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`p-10 rounded-2xl border border-gray-200 bg-white transition-all duration-300 ${product.borderColor} ${product.bgHover} cursor-pointer`}
                style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}
              >
                <h3 className="text-2xl font-semibold text-navy mb-4">{product.name}</h3>
                <p className="text-gray-600 leading-relaxed">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-32 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-navy mb-6">
              Built for Enterprise Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Architected from day one to align with SOC 2 and ISO 27001 standards.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
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
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Expertise Section */}
      <section id="proof" className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-navy mb-6">
              Proven Infrastructure, Real Expertise
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-navy mb-4">Built on Enterprise Stack</h3>
              <p className="text-orange font-medium mb-4">
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
              <h3 className="text-2xl font-semibold text-navy mb-4">Operator-Led Development</h3>
              <p className="text-orange font-medium mb-4">
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
      <section id="contact" className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-navy mb-8">
              Join the companies redefining <br />communication intelligence.
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              SurFox is building the future of communication intelligence - architected for scale, security, and enterprise readiness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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

      {/* Footer */}
      <footer className="py-16 px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-semibold text-navy">
              SurFox
            </div>
            
            <div className="flex gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-navy transition">Privacy</a>
              <a href="#" className="hover:text-navy transition">Terms</a>
              <a href="#" className="hover:text-navy transition">Security</a>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-12">
            © 2025 SurFox AI, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}