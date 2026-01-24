"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, DollarSign, Users, XCircle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-white text-gray-900">
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

        .text-orange {
          color: #ea580c;
        }

        .bg-orange {
          background-color: #ea580c;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange/10 flex items-center justify-center">
              <FileText className="w-8 h-8 text-orange" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-navy mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Last Updated: January 23, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Agreement to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Agreement to Terms
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                By accessing or using SurFox ("the Platform"), you agree to be bound by these Terms of Service. If you don't agree, don't use the Platform.
              </p>
              <p>
                SurFox is operated by SurFox AI, Inc. ("we," "us," or "our").
              </p>
            </div>
          </motion.div>

          {/* What SurFox Does */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              What SurFox AI Does
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                SurFox AI provides AI-powered conversation intelligence software that automates lead qualification and engagement through SMS messaging. The Platform analyzes prospect responses, identifies buying signals, and escalates qualified leads to your sales team.
              </p>
              <p className="font-semibold text-navy">
                We provide the tools. You're responsible for how you use them.
              </p>
            </div>
          </motion.div>

          {/* Account Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Account Requirements
              </h2>
            </div>
            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>To use SurFox AI, you must:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Be at least 18 years old</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Provide accurate and complete registration information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Maintain the security of your account credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Be responsible for all activity under your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Notify us immediately of any unauthorized access</span>
                </li>
              </ul>
              <p className="font-semibold text-navy">
                One person or company per account. No account sharing.
              </p>
            </div>
          </motion.div>

          {/* Acceptable Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Acceptable Use
              </h2>
            </div>

            <div className="ml-16 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">You may use SurFox AI to:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Engage with leads you have legal permission to contact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Automate qualification conversations with prospects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Analyze conversation data for sales intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Integrate with your existing CRM and business tools</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">You may NOT use SurFox AI to:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Contact people without proper consent or legal basis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Send spam, phishing attempts, or fraudulent messages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Violate TCPA, CAN-SPAM, or other telecommunications regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Harass, threaten, or abuse message recipients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Impersonate others or misrepresent your identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Upload malicious code, viruses, or harmful content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Reverse engineer, copy, or compete with the Platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Resell or redistribute SurFox AI services without authorization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Use the Platform for any illegal purpose</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange/5 border-l-4 border-orange rounded-r-lg p-4">
                <p className="text-navy font-semibold">
                  If you violate these terms, we will terminate your account immediately without refund.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Your Data & Our AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Your Data & Our AI
            </h2>

            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">What you own:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>All leads, contacts, and prospect data you upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Your business information and configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Conversation history and outcomes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">What we own:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>The SurFox Platform, code, and technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>AI models, algorithms, and intellectual property</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Analytics methods and processing techniques</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">How we use your data:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Your AI model trains exclusively on YOUR tenant's data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>We never share your data with other customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>We don't use your data to train models for others</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Complete tenant isolation - your data stays yours</span>
                  </li>
                </ul>
              </div>

              <p>
                See our <Link href="/privacy" className="text-orange hover:underline font-semibold">Privacy Policy</Link> for details: <a href="https://www.getsurfox.com/privacy" className="text-orange hover:underline">https://www.getsurfox.com/privacy</a>
              </p>
            </div>
          </motion.div>

          {/* Service Plans & Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Service Plans & Pricing
              </h2>
            </div>

            <div className="ml-16 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">Available Plans:</h3>

                {/* Starter Plan */}
                <div className="mb-6 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h4 className="text-lg font-semibold text-navy">Starter</h4>
                    <span className="text-2xl font-bold text-navy">$197<span className="text-sm text-gray-500">/month</span></span>
                  </div>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>1,000 messages per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>1 team member account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Basic AI (does not learn from conversations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Automated qualification questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Psychology-based conversations</span>
                    </li>
                  </ul>
                </div>

                {/* Growth Plan */}
                <div className="mb-6 bg-orange/5 rounded-xl p-6 border-2 border-orange/20">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h4 className="text-lg font-semibold text-navy">Growth</h4>
                    <span className="text-sm bg-orange text-white px-3 py-1 rounded-full font-semibold">Most Popular</span>
                    <span className="text-2xl font-bold text-navy">$497<span className="text-sm text-gray-500">/month</span></span>
                  </div>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>10,000 messages per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>5 team member accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Learning AI (improves with every conversation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Advanced objection handling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Chrome extension for lead capture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Priority support</span>
                    </li>
                  </ul>
                </div>

                {/* Scale Plan */}
                <div className="mb-6 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-baseline gap-3 mb-3">
                    <h4 className="text-lg font-semibold text-navy">Scale</h4>
                    <span className="text-2xl font-bold text-navy">$1,997<span className="text-sm text-gray-500">/month</span></span>
                  </div>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>50,000+ messages per month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>15+ team member accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Advanced learning AI (1000 conversation memory)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Unlimited knowledge base uploads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Message A/B testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>White-glove onboarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>Dedicated success manager</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Billing:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>All plans billed monthly in advance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Annual billing available for custom enterprise agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Prices in USD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Automatic renewal unless cancelled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Payment via credit card or ACH (Scale plan and annual contracts)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Fair Usage:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Message limits are monthly maximums</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Unused messages don't roll over</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Exceeding limits may result in throttling or overage fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>We'll notify you before charging overages</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 30-Day Results Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-orange/5 border-2 border-orange/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              30-Day Results Guarantee
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="font-semibold">
                For Growth and Scale plans only:
              </p>
              <p>
                Upload at least 500 quality leads with valid contact info within your first 30 days. If SurFox AI doesn't deliver 10 qualified prospects within 30 days of your first payment, we'll refund your first month in full.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-navy mb-2">What's a quality lead?</h4>
                  <p className="text-sm">
                    Someone you'd actually want to call if they showed interest. Valid phone number, correct contact information, fits your business model.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-navy mb-2">What's a qualified prospect?</h4>
                  <p className="text-sm">
                    A lead that SurFox AI identifies as showing strong buying signals based on their conversation responses - either they've expressed clear interest, asked about next steps, or agreed to discuss further.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">The Process:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Upload at least 500 leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Allow 7-14 days for SurFox AI to start conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Email tom@getsurfox.com if not satisfied within 30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Full refund processed within 3 business days</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">Guarantee does not apply if:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>You uploaded fewer than 500 leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Leads were invalid, disconnected, or wrong numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>You violated our Acceptable Use policy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>You're requesting a refund after 30 days</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm italic">
                This guarantee applies only to your first month of service.
              </p>
            </div>
          </motion.div>

          {/* Cancellation & Refunds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <XCircle className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Cancellation & Refunds
              </h2>
            </div>

            <div className="ml-16 space-y-6 text-gray-600">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">You can cancel anytime:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Cancel from your account settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Email tom@getsurfox.com to request cancellation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Service continues until end of current billing period</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>No refunds for partial months (except 30-day guarantee)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">We can cancel your account if:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>You violate these Terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Payment fails repeatedly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>You engage in abusive or fraudulent behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Required by law</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">After cancellation:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>You have 30 days to export your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>After 30 days, we'll delete your account data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Some data may be retained for legal compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Service Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Service Availability
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We aim for 99% uptime but make no guarantees.
              </p>
              <p>
                The Platform may be unavailable due to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Scheduled maintenance (we'll notify you)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Emergency repairs or updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Third-party service disruptions (Twilio, OpenAI, AWS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Events beyond our control</span>
                </li>
              </ul>

              <p className="pt-4">
                We're not liable for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Lost revenue due to downtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Missed opportunities or failed conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Data loss (you should maintain backups)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Third-party service failures</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Limitations of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Limitations of Liability
              </h2>
            </div>

            <div className="ml-16 space-y-6 text-gray-600">
              <p className="font-semibold text-navy">
                SurFox AI is provided "as is" without warranties.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">We don't guarantee:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Specific conversation outcomes or results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Compliance with all regulations in your jurisdiction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Uninterrupted or error-free operation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>That SurFox AI will always make correct decisions</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">You're responsible for:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Ensuring you have legal right to contact leads</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Compliance with TCPA, CAN-SPAM, and local laws</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Quality and accuracy of uploaded data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>How you use qualified leads we identify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Your own business outcomes</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange/5 border-l-4 border-orange rounded-r-lg p-4">
                <p className="font-semibold text-navy mb-2">
                  Our maximum liability is limited to the amount you paid us in the past 12 months.
                </p>
                <p className="text-sm">
                  We're not liable for indirect, incidental, or consequential damages, lost profits, revenue, or business opportunities, data loss or corruption, third-party claims or actions, or regulatory fines or penalties you incur.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Intellectual Property
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-3">You grant us a limited license to:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Process your data to provide the service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Use conversation data to train your isolated AI model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Display your data back to you in the Platform</span>
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-navy">
                You retain all ownership of your data.
              </p>

              <div>
                <p className="mb-2">We retain all ownership of:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>SurFox Platform and technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Our brand, trademarks, and logos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>AI models and algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Documentation and training materials</span>
                  </li>
                </ul>
              </div>

              <p className="font-semibold text-navy">
                Don't copy, modify, or reverse engineer our Platform.
              </p>
            </div>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Third-Party Services
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                SurFox AI integrates with third-party services including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Twilio (SMS delivery)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>OpenAI (AI processing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Stripe (payments)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>AWS (infrastructure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Google Workspace & Microsoft Outlook (calendar integration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Zapier (workflow integrations)</span>
                </li>
              </ul>

              <p className="pt-4">
                These services have their own terms:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>We're not responsible for their actions or failures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Their downtime may affect SurFox AI availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>You must comply with their terms when using SurFox AI</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Changes to Terms
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We may update these Terms at any time. Material changes will be communicated via:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Email notification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>In-platform notification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Updated "Last Updated" date on this page</span>
                </li>
              </ul>
              <p>
                Continued use after changes constitutes acceptance.
              </p>
              <p>
                If you don't agree to new terms, cancel your account before they take effect.
              </p>
            </div>
          </motion.div>

          {/* Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Dispute Resolution
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div className="bg-orange/5 border-l-4 border-orange rounded-r-lg p-4">
                <h3 className="font-semibold text-navy mb-2">Let's talk first:</h3>
                <p>
                  If you have a problem, email tom@getsurfox.com. We'll work it out.
                </p>
              </div>

              <p className="pt-4">
                If we can't resolve it:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Disputes will be governed by Delaware law</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Both parties agree to binding arbitration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Arbitration will be conducted by JAMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Location: Delaware</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>No class actions - individual disputes only</span>
                </li>
              </ul>

              <p>
                You have 30 days from the dispute to notify us if you want to arbitrate.
              </p>
            </div>
          </motion.div>

          {/* Miscellaneous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Miscellaneous
            </h2>

            <div className="space-y-3 text-gray-600">
              <p><strong className="text-navy">Entire Agreement:</strong> These Terms, plus our Privacy Policy, constitute the entire agreement.</p>
              <p><strong className="text-navy">Severability:</strong> If any provision is unenforceable, the rest remains in effect.</p>
              <p><strong className="text-navy">No Waiver:</strong> Our failure to enforce a right doesn't waive that right.</p>
              <p><strong className="text-navy">Assignment:</strong> We can assign these Terms. You can't without our consent.</p>
              <p><strong className="text-navy">Force Majeure:</strong> We're not liable for delays due to circumstances beyond our control.</p>
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Contact Us
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Questions about these Terms?
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p><strong className="text-navy">Email:</strong> tom@getsurfox.com</p>
                <p><strong className="text-navy">Address:</strong> SurFox AI, Inc.</p>
                <p><strong className="text-navy">Website:</strong> <a href="https://www.getsurfox.com" className="text-orange hover:underline">https://www.getsurfox.com</a></p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
