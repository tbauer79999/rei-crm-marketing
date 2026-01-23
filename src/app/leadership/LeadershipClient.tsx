"use client"

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Leadership() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-white text-gray-900">
    
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
              Building the Future of<br className="hidden sm:block" />
              <span className="sm:inline"> </span>Human Interaction Intelligence
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Led by an operator who understands what it takes to turn human signals into actionable intelligence at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Profile - Featured */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">FOUNDER & CEO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Meet the Founder
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-orange/30 hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                {/* Profile Image Section */}
                <div className="md:col-span-2 bg-gradient-to-br from-orange/5 to-gray-50 p-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-orange/20 to-gray-200 flex items-center justify-center overflow-hidden">
                      <Image
                        src="/tom-bauer.jpg"
                        alt="Tom Bauer"
                        width={288}
                        height={288}
                        className="rounded-2xl object-contain bg-white p-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio Section */}
                <div className="md:col-span-3 p-8 sm:p-10 md:p-12">
                  <h3 className="text-3xl font-semibold text-navy mb-2">Tom Bauer</h3>
                  <p className="text-lg text-orange font-medium mb-6">Founder & CEO</p>
                  
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-700 leading-relaxed">
                      Tom founded SurFox with a clear mission: transform how businesses understand and act on human interactions. With over 20 years in sales and revenue operations, he witnessed firsthand how companies struggled to extract intelligence from their communication data.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      His approach is rooted in practical experience - having built and scaled sales teams, Tom understands the gap between what AI promises and what operators actually need. SurFox bridges that gap.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Before SurFox, Tom led revenue initiatives across multiple industries, consistently identifying patterns that others missed. That pattern recognition became the foundation for SurFox Infinity's predictive analytics engine.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href="mailto:tom@getsurfox.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-300 text-navy font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
                    >
                      <Mail className="w-5 h-5" />
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Founding Principles
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              The values that guide every decision
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              { 
                number: '01',
                title: 'Operator-Led Development', 
                desc: 'Built by someone who has actually done the work. Every feature solves a real problem encountered in the field.'
              },
              { 
                number: '02',
                title: 'Intelligence Over Volume', 
                desc: 'It is not about processing more data - it is about extracting better insights. Quality over quantity, always.'
              },
              { 
                number: '03',
                title: 'Respect for Privacy', 
                desc: 'Complete tenant isolation is not just a technical choice, it is a moral one. Your data remains yours, period.'
              },
              { 
                number: '04',
                title: 'Transparent Communication', 
                desc: 'No hype, no empty promises. We tell you what we can do, what we are building, and what we cannot do yet.'
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl font-bold text-orange/20 mb-4">{principle.number}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-navy mb-3">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Where We Are Headed
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Building the infrastructure for human interaction intelligence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 md:p-12"
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  SurFox started with a simple observation: businesses generate massive amounts of interaction data but have no systematic way to understand it. Messages, transactions, behavioral signals - all sitting in silos, waiting to tell their story.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am building the platform that makes sense of it all. Not just for one use case or one industry, but as foundational infrastructure that any business can leverage to understand their customers better.
                </p>
                
                <div className="bg-orange/5 border-l-4 border-orange rounded-lg p-6 my-8">
                  <p className="text-xl font-semibold text-navy mb-3">
                    The goal is ambitious but clear:
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Become the intelligence layer that powers every human-to-business interaction - from sales to support, recruiting to retail, and everything in between.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  As SurFox grows, the team will grow with it - bringing on operators, engineers, and data scientists who share this vision and want to help build the future of business intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Want to Connect?
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Whether you are interested in SurFox as a customer, partner, or just want to talk about the future of human interaction intelligence - I would love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See the Platform Vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}