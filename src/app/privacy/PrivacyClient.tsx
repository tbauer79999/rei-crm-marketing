"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Bell, Lock, Eye, FileText, AlertCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-900">
      <style>{`
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
              <Shield className="w-8 h-8 text-orange" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-navy mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Last Updated: November 4, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              SurFox ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              By using SurFox AI, you agree to the collection and use of information in accordance with this policy.
            </p>
          </motion.div>

          {/* SMS Consent Section - Prominent Placement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-orange/5 border-2 border-orange/20 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                SMS Notifications & Consent
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              End users explicitly consent to receive SurFox platform notifications during account creation. Consent is collected when users create a SurFox account and agree to the Terms of Service and Privacy Policy, which authorize transactional SMS notifications related to account security and platform activity. Users may opt-out at any time by replying STOP. Our Privacy Policy is publicly available here: https://www.getsurfox.com/privacy
            </p>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Personal Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Name, email address, phone number, and company information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Account credentials and authentication information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Payment and billing information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Communication preferences and contact details</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy mb-3">Usage Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  We automatically collect information about your use of our platform, including:
                </p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Device information, IP address, and browser type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Platform usage patterns and feature interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Conversation and communication data processed through our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange mt-1">•</span>
                    <span>Performance metrics and analytics data</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                How We Use Your Information
              </h2>
            </div>

            <div className="ml-16 space-y-3 text-gray-600">
              <p className="leading-relaxed">We use the collected information to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Process transactions and send transactional communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Send SMS notifications related to account security and platform activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Analyze conversation data to generate insights and intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Detect, prevent, and address technical issues and security concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Comply with legal obligations and enforce our terms of service</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-orange" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-navy">
                Data Security
              </h2>
            </div>

            <div className="ml-16 space-y-4 text-gray-600 leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>TLS encryption for data in transit and AES encryption for data at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Secure infrastructure hosted on enterprise-grade cloud providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Regular security audits and compliance assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Access controls and authentication mechanisms</span>
                </li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but continuously work to enhance our security practices.
              </p>
            </div>
          </motion.div>

          {/* Data Isolation & Tenant Privacy */}
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
                Data Isolation & Tenant Privacy
              </h2>
            </div>

            <div className="ml-16 text-gray-600 leading-relaxed space-y-4">
              <p>
                SurFox AI operates with strict tenant isolation. Each organization's data is completely segregated and processed independently:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Your data is never shared with or accessible to other SurFox AI tenants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Machine learning models train exclusively on your tenant's data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Analytics and insights are generated only from your isolated dataset</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>No cross-tenant data aggregation or model training occurs</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Data Sharing */}
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
                How We Share Your Information
              </h2>
            </div>

            <div className="ml-16 space-y-4 text-gray-600 leading-relaxed">
              <p>We may share your information with:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., cloud hosting, payment processing, communication services)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</span>
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Your Rights
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Access, correct, or delete your personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Object to or restrict certain processing of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Request data portability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Opt-out of SMS notifications by replying STOP to any message</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange mt-1">•</span>
                  <span>Withdraw consent where processing is based on consent</span>
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at tom@getsurfox.com
              </p>
            </div>
          </motion.div>

          {/* Data Retention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Data Retention
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When you close your account, we will delete or anonymize your personal information within a reasonable timeframe, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </div>
          </motion.div>

          {/* International Transfers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              International Data Transfers
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Children's Privacy
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>
          </motion.div>

          {/* Changes to Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-6">
              Changes to This Privacy Policy
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </motion.div>

          {/* Contact */}
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
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p><strong className="text-navy">Email:</strong> tom@getsurfox.com</p>
                <p><strong className="text-navy">Address:</strong> SurFox, Inc.</p>
                <p><strong className="text-navy">Website:</strong> https://www.getsurfox.com</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
