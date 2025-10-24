"use client"

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Layers, Zap, Lock, Brain, Database, Workflow, FileText, Network, Shield, CheckCircle, Activity, Code, Gauge } from 'lucide-react';

export default function PlatformOverview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

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

        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .animate-network {
          animation: subtle-pulse 3s ease-in-out infinite;
        }

        @keyframes data-flow {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        .data-flow {
          animation: data-flow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange/5 rounded-full blur-3xl animate-network" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/5 rounded-full blur-3xl animate-network" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Built for the Future of<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Human Interaction Intelligence
            </h1>
            
            <p className="text-base sm:text-lg font-semibold text-orange mb-6 sm:mb-8">
              Powered by SurFox Infinity
            </p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              The SurFox Platform unifies data, context, and AI reasoning to understand and act on every human signal - not just conversations.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2 mx-auto"
            >
              Explore the Architecture
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Architecture Overview
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A unified AI architecture - powered by SurFox Infinity - built for clarity, security, and scale
            </p>
          </motion.div>
          
          <div className="space-y-4 sm:space-y-6 px-4 relative">
            {/* Connecting vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange/20 via-orange/40 to-orange/20 -ml-px" />

            {[
              { 
                layer: 1,
                title: 'Applications', 
                subtitle: 'User-Facing Layer',
                items: ['Communication Intelligence', 'Analytics Interfaces', 'Automation Tools'],
                icon: Layers,
                description: 'Applications built on the SurFox Platform that interpret human interactions and deliver intelligence to end users'
              },
              { 
                layer: 2,
                title: 'Intelligence Engine', 
                subtitle: 'AI Core',
                items: ['LLM Orchestration', 'Contextual Memory', 'AI Tuning & Optimization'],
                icon: Brain,
                description: 'Advanced intelligence engine combining LLMs with predictive analytics to forecast outcomes, identify patterns, and drive data-driven decisions within each isolated tenant'
              },
              { 
                layer: 3,
                title: 'Integration Layer', 
                subtitle: 'Signal & Data Connectors',
                items: ['REST APIs', 'Webhooks', 'Communication Channels', 'CRM Systems', 'Transaction Data'],
                icon: Network,
                description: 'Flexible connectors for ingesting signals from any human interaction source'
              },
              { 
                layer: 4,
                title: 'Infrastructure', 
                subtitle: 'Foundation & Security',
                items: ['Supabase (Database)', 'Twilio (Communications)', 'Edge Functions', 'End-to-End Encryption'],
                icon: Database,
                description: 'Enterprise-grade infrastructure ensuring reliability, security, and performance'
              }
            ].map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredLayer(i)}
                onMouseLeave={() => setHoveredLayer(null)}
                className="relative"
              >
                <div className={`
                  p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${hoveredLayer === i 
                    ? 'border-orange bg-white shadow-lg scale-[1.02]' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }
                `}>
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`
                      w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300
                      ${hoveredLayer === i ? 'bg-orange' : 'bg-orange/10'}
                    `}>
                      <layer.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${hoveredLayer === i ? 'text-white' : 'text-orange'}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold text-orange bg-orange/10 px-2 py-1 rounded">
                          LAYER {layer.layer}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-navy">{layer.title}</h3>
                      </div>
                      
                      <p className="text-sm text-orange font-medium mb-3">{layer.subtitle}</p>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">{layer.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item, idx) => (
                          <span 
                            key={idx}
                            className="text-xs font-medium text-navy bg-gray-100 px-3 py-1.5 rounded-lg"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Show additional details on hover */}
                  {hoveredLayer === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="mt-4 pt-4 border-t border-orange/20"
                    >
                      <p className="text-sm text-gray-500 italic leading-relaxed">
                        {layer.layer === 1 && "These applications leverage the unified intelligence engine to deliver insights directly to users across different use cases."}
                        {layer.layer === 2 && "This layer processes and understands all incoming signals, maintaining context and learning patterns to improve over time."}
                        {layer.layer === 3 && "Flexible APIs and connectors enable SurFox to ingest data from any source, creating a complete view of human interactions."}
                        {layer.layer === 4 && "Enterprise-grade infrastructure ensures data security, system reliability, and seamless scalability."}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Key Capabilities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The foundation that powers human interaction intelligence at enterprise scale
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Brain,
                title: 'Unified AI Core', 
                desc: 'SurFox Infinity powers all applications with advanced predictive analytics and machine learning models. Learns from every interaction type - messages, transactions, engagements - within your isolated tenant environment to forecast outcomes and identify patterns.',
                gradient: 'from-orange/10 to-orange/5'
              },
              { 
                icon: Zap,
                title: 'Adaptive Behavior', 
                desc: 'Tone and personality adjust dynamically per tenant and use case, ensuring relevant and contextually appropriate responses.',
                gradient: 'from-purple-500/10 to-purple-500/5'
              },
              { 
                icon: FileText,
                title: 'Unified Signal Memory', 
                desc: 'Stores and leverages context from all interaction types within your tenant to enhance understanding, prediction accuracy, and decision quality over time.',
                gradient: 'from-cyan-500/10 to-cyan-500/5'
              },
              { 
                icon: Lock,
                title: 'Secure by Design', 
                desc: 'Multi-tenant isolation ensures complete customer data separation with enterprise-grade encryption and access controls. SurFox Infinity learns exclusively from your data within your isolated environment.',
                gradient: 'from-emerald-500/10 to-emerald-500/5'
              }
            ].map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCapability(i)}
                onMouseLeave={() => setHoveredCapability(null)}
                className={`
                  p-8 sm:p-10 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${hoveredCapability === i 
                    ? 'border-orange bg-gradient-to-br ' + capability.gradient + ' shadow-lg scale-[1.02]' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                  }
                `}
              >
                <div className={`
                  w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-all duration-300
                  ${hoveredCapability === i ? 'bg-orange' : 'bg-orange/10'}
                `}>
                  <capability.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${hoveredCapability === i ? 'text-white' : 'text-orange'}`} />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              How SurFox Thinks
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Three steps to intelligent communication
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 relative px-4">
            {/* Connecting arrows - hide on mobile */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 flex items-center justify-between px-16">
              <ArrowRight className="w-8 h-8 text-orange/30" />
              <ArrowRight className="w-8 h-8 text-orange/30" />
            </div>

            {[
              { 
                step: 1,
                icon: Network,
                title: 'Connect Signals', 
                desc: 'SurFox ingests from any source - SMS, email, CRM, receipts, behavioral data, and more - creating a unified intelligence layer.',
                color: 'orange'
              },
              { 
                step: 2,
                icon: Brain,
                title: 'Activate AI Layer', 
                desc: 'SurFox combines LLM analysis with statistical modeling to understand meaning, emotion, and intent - then predicts outcomes and identifies behavioral patterns invisible to traditional analytics.',
                color: 'purple-500'
              },
              { 
                step: 3,
                icon: Activity,
                title: 'Deliver Intelligence', 
                desc: 'Structured insights feed back into systems or teams, enabling smarter decisions and automated responses across every touchpoint.',
                color: 'cyan-500'
              }
            ].map((step, i) => (
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
                  className="relative mx-auto mb-6"
                  style={{ width: 'fit-content' }}
                >
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-${step.color}/10 flex items-center justify-center mx-auto`}>
                    <step.icon className={`w-10 h-10 sm:w-12 sm:h-12 text-${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The SurFox Engine - Technical Deep Dive */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-navy/5 border border-navy/20 mb-6">
              <span className="text-sm font-semibold text-navy">TECHNICAL OVERVIEW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Inside SurFox Infinity
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The orchestration engine driving real-time intelligence across every human interaction
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                icon: Code,
                title: 'LLM Orchestration', 
                desc: 'Handles GPT model calls, prompts, and contextual adjustments as one component of SurFox Infinity. Dynamically routes requests to optimize for speed, accuracy, and cost based on task complexity.',
                features: ['Multi-model support', 'Prompt optimization', 'Context management']
              },
              { 
                icon: Gauge,
                title: 'Predictive Analytics Engine', 
                desc: 'Statistical models and machine learning algorithms analyze interaction patterns to forecast outcomes, predict customer behavior, and identify opportunities before they emerge.',
                features: ['Pattern recognition', 'Behavioral forecasting', 'Anomaly detection']
              },
              { 
                icon: FileText,
                title: 'Knowledge Injection', 
                desc: 'Merges uploaded documents and structured data into AI reasoning. Enables context-aware responses that reflect company-specific knowledge and policies.',
                features: ['Document processing', 'Structured data integration', 'Context retrieval']
              }
            ].map((engine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <engine.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-navy mb-3">{engine.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{engine.desc}</p>
                
                <div className="space-y-2">
                  {engine.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section - Designed for Scale and Trust */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Designed for Scale and Trust
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              The SurFox Platform delivers enterprise-grade intelligence across every human interaction - architected for scale, security, and reliability. All learning occurs exclusively within your isolated tenant environment.
            </p>

            <p className="text-base sm:text-lg font-semibold text-orange mb-10 sm:mb-12 px-4">
              Every SurFox capability - from engagement to analytics - runs on one foundation: SurFox Infinity.
            </p>
            
            <motion.a
              href="#integrations"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-base font-semibold text-navy hover:text-orange transition group"
            >
              See Integrations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
