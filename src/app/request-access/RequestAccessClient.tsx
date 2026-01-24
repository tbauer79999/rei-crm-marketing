'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, Zap, Users, TrendingUp, ArrowRight, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function RequestAccess() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    role: '',
    phone: '',
    product: '',
    useCase: '',
    timeline: '',
    currentSolution: '',
    additionalInfo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Access request submitted:', formData);
  };

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
      <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
              <span className="text-sm font-semibold text-orange">LIMITED EARLY ACCESS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-navy mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight px-4">
              Be Among the First<br className="hidden sm:block" />
              <span className="sm:inline"> </span>to Experience SurFox AI
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-4">
              Join forward-thinking teams already using SurFox AI to transform human interaction data into strategic intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Why Join Early Access?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Get exclusive benefits as an early adopter
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                icon: Rocket,
                title: 'Priority Access',
                desc: 'Skip the waitlist and get immediate access to SurFox AI products as they launch.'
              },
              {
                icon: Users,
                title: 'Dedicated Onboarding',
                desc: 'Work directly with our team to customize SurFox AI for your specific use case.'
              },
              {
                icon: TrendingUp,
                title: 'Early Adopter Pricing',
                desc: 'Lock in preferential pricing as a founding customer - rates that will not be available later.'
              },
              {
                icon: Zap,
                title: 'Feature Influence',
                desc: 'Shape the product roadmap. Early customers get direct input on what we build next.'
              },
              {
                icon: Shield,
                title: 'White-Glove Support',
                desc: 'Direct access to our engineering team for faster issue resolution and feature requests.'
              },
              {
                icon: Clock,
                title: 'First to Know',
                desc: 'Get early previews of new features, products, and capabilities before general release.'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-orange/30 hover:shadow-lg hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                  <benefit.icon className="w-6 h-6 text-orange" />
                </div>

                <h3 className="text-xl font-semibold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              Request Early Access
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Fill out the form below and our team will review your application within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 sm:p-10 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-6 pb-3 border-b border-gray-200">
                    Personal Information
                  </h3>

                  <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-navy mb-2">
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                        placeholder="VP of Sales, Marketing Director, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-6 pb-3 border-b border-gray-200">
                    Company Information
                  </h3>

                  <div className="space-y-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                        placeholder="Acme Inc."
                      />
                    </div>

                    {/* Company Size */}
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-semibold text-navy mb-2">
                        Company Size *
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="1001+">1,001+ employees</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Product Interest */}
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-6 pb-3 border-b border-gray-200">
                    Product Interest
                  </h3>

                  <div className="space-y-6">
                    {/* Product */}
                    <div>
                      <label htmlFor="product" className="block text-sm font-semibold text-navy mb-2">
                        Which SurFox product interests you most? *
                      </label>
                      <select
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                      >
                        <option value="">Select a product</option>
                        <option value="engage">SurFox Engage - AI-Powered SMS Lead Qualification</option>
                        <option value="pulse">SurFox Pulse - Real-Time Analytics & Visibility</option>
                        <option value="insights">SurFox Insights - Predictive Intelligence & Forecasting</option>
                        <option value="platform">Full SurFox Platform - All Products</option>
                        <option value="unsure">Not Sure - Need Guidance</option>
                      </select>
                    </div>

                    {/* Use Case */}
                    <div>
                      <label htmlFor="useCase" className="block text-sm font-semibold text-navy mb-2">
                        Primary Use Case *
                      </label>
                      <textarea
                        id="useCase"
                        name="useCase"
                        required
                        rows={4}
                        value={formData.useCase}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition resize-none"
                        placeholder="Tell us how you plan to use SurFox AI. What problem are you trying to solve?"
                      />
                    </div>

                    {/* Current Solution */}
                    <div>
                      <label htmlFor="currentSolution" className="block text-sm font-semibold text-navy mb-2">
                        Current Solution (if any)
                      </label>
                      <input
                        type="text"
                        id="currentSolution"
                        name="currentSolution"
                        value={formData.currentSolution}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                        placeholder="e.g., Salesforce, HubSpot, homegrown solution, manual process"
                      />
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-navy mb-2">
                        Implementation Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate - Ready to start now</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="exploring">Just exploring options</option>
                      </select>
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-semibold text-navy mb-2">
                        Anything else we should know?
                      </label>
                      <textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition resize-none"
                        placeholder="Special requirements, integration needs, team size, budget considerations, etc."
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    Request Early Access
                  </button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-4 sm:mb-6 px-4">
              What Happens Next?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Here is our typical early access onboarding process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 px-4">
            {[
              {
                number: '01',
                title: 'Application Review',
                desc: 'Our team reviews your submission within 24 hours and reaches out to schedule an intro call.',
                icon: CheckCircle
              },
              {
                number: '02',
                title: 'Discovery Call',
                desc: 'We discuss your needs, show you the platform, and determine the best fit for your use case.',
                icon: Users
              },
              {
                number: '03',
                title: 'Custom Setup',
                desc: 'We configure SurFox AI for your environment, integrate with your existing tools, and set up your team.',
                icon: Zap
              },
              {
                number: '04',
                title: 'Go Live',
                desc: 'Launch with dedicated support. Our team stays close during the first 30 days to ensure success.',
                icon: Rocket
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="relative mx-auto mb-6" style={{ width: 'fit-content' }}>
                  <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-orange" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>

                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4">
              Join the Waitlist
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Hundreds of teams have already requested access. The earlier you join, the earlier you get in.
            </p>

            <div className="bg-white rounded-2xl border-2 border-orange/20 p-8 sm:p-10 md:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">300+</div>
                  <div className="text-gray-600 font-medium">Teams on Waitlist</div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">24hr</div>
                  <div className="text-gray-600 font-medium">Average Response Time</div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-orange mb-2">95%</div>
                  <div className="text-gray-600 font-medium">Approval Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 sm:mb-8 px-4 leading-tight">
              Questions About Early Access?
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed px-4 max-w-3xl mx-auto">
              Our team is happy to answer any questions you have about the program, pricing, or implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-gray-300 text-navy text-base font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                Contact Us
              </Link>
              <Link
                href="/#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-orange text-white text-base font-semibold hover:bg-orange-600 transition"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
