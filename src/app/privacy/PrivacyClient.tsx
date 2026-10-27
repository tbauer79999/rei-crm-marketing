"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Bell, Lock, Eye, FileText, AlertCircle, Cookie, UserCheck, Trash2, Archive, Globe, Baby, RefreshCw, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#F4F5F3] text-[#13171F]">

      {/* Hero Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-[#F4F5F3]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#0A7C8C]" />
            </div>
            <h1 className="text-4xl font-bold text-[#13171F] mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-[#5A626E] leading-relaxed">
              Last Updated: October 27, 2026
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
            <p className="text-lg text-[#5A626E] leading-relaxed mb-6">
              SurFox AI ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
            </p>
            <p className="text-lg text-[#5A626E] leading-relaxed">
              By using SurFox AI, you agree to the collection and use of information in accordance with this policy.
            </p>
          </motion.div>

          {/* SMS Consent Section - Prominent Placement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-[#F0F8F9] border-2 border-[#dCEEF1] rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                SMS Notifications & Consent
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#5A626E] leading-relaxed">
              End users explicitly consent to receive SurFox AI platform notifications during account creation. Consent is collected when users create a SurFox AI account and agree to the Terms of Service and Privacy Policy, which authorize transactional SMS notifications related to account security and platform activity. Users may opt-out at any time by replying STOP. Our Privacy Policy is publicly available here: https://www.getsurfox.com/privacy
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
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6 ml-0 sm:ml-16">
              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Personal Information</h3>
                <p className="text-[#5A626E] leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="mt-3 space-y-2 text-[#5A626E]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Name, email address, phone number, and company information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Account credentials and authentication information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Payment and billing information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Communication preferences and contact details</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Usage Data</h3>
                <p className="text-[#5A626E] leading-relaxed">
                  We automatically collect information about your use of our platform, including:
                </p>
                <ul className="mt-3 space-y-2 text-[#5A626E]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Device information, IP address, and browser type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Platform usage patterns and feature interactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Conversation and communication data processed through our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
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
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                How We Use Your Information
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 space-y-3 text-[#5A626E]">
              <p className="leading-relaxed">We use the collected information to:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Provide, maintain, and improve our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Process transactions and send transactional communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Send SMS notifications related to account security and platform activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Analyze conversation data to generate insights and intelligence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Detect, prevent, and address technical issues and security concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
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
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Data Security
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 space-y-4 text-[#5A626E] leading-relaxed">
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>TLS encryption for data in transit and AES encryption for data at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Secure infrastructure hosted on enterprise-grade cloud providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Regular security audits and compliance assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
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
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Data Isolation & Tenant Privacy
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
              <p>
                SurFox AI operates with strict tenant isolation. Each organization's data is completely segregated and processed independently:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Your data is never shared with or accessible to other SurFox AI tenants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Machine learning models train exclusively on your tenant's data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Analytics and insights are generated only from your isolated dataset</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
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
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                How We Share Your Information
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 space-y-4 text-[#5A626E] leading-relaxed">
              <p>We may share your information with:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (e.g., cloud hosting, payment processing, communication services)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</span>
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </div>
          </motion.div>

          {/* AI Assistant Connections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Connecting an AI Assistant to Your Account
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 space-y-4 text-[#5A626E] leading-relaxed">
              <p>
                An account administrator may optionally connect an outside AI assistant (such as Claude) to their own SurFox account. This is off by default and is a deliberate choice an administrator makes, not something we do automatically.
              </p>
              <p>When connected, the assistant can read:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Your leads, with phone numbers masked to the last four digits and email addresses shown in full</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Your conversations with those leads, including message text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>The names of your active campaigns, and your usage numbers</span>
                </li>
              </ul>
              <p>
                The assistant cannot send messages, change any data, or see payment details. Access lasts 90 days and an administrator can revoke it at any time from Settings. Data shared this way is handled by the assistant&apos;s own provider under that provider&apos;s own terms, outside our control; it is not sold, and it is not used by SurFox for any purpose other than answering the administrator&apos;s request.
              </p>
            </div>
          </motion.div>

          {/* Cookies & Tracking Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Cookies & Tracking Technologies
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 space-y-6 text-[#5A626E] leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to operate our platform and understand how visitors use our website.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Types of Technologies We Use</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span><strong>Essential cookies:</strong> Required for core site and platform functionality, such as maintaining your session and account authentication. If you arrive through a referral or affiliate link, we also store the referral code and a random click ID in first-party cookies for up to 60 days so we can credit the referrer and attribute a signup. We do not share these with advertising networks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span><strong>Preference cookies:</strong> Our website chat widget stores a random identifier in your browser so we can continue your conversation if you return. It only loads if you allow preference cookies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span><strong>Analytics cookies:</strong> We use Google Tag Manager and Google Analytics (GA4) to understand website traffic and usage patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span><strong>Advertising cookies:</strong> We use the Meta (Facebook) Pixel and OpenAI's conversion pixel to measure the effectiveness of our advertising and to deliver relevant ads to prospective customers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Third Parties Who May Set Cookies Through Our Site</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Google (Google Analytics, Google Tag Manager)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>Meta Platforms, Inc. (Facebook Pixel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0A7C8C] mt-1">•</span>
                    <span>OpenAI, L.L.C. (conversion tracking pixel)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Your Choices</h3>
                <p>
                  You can control or delete cookies through your browser settings. Most browsers let you refuse cookies, delete existing cookies, or receive a warning before a cookie is stored. Disabling certain cookies may affect the functionality of our website.
                </p>
                <p className="mt-3">
                  We do not load analytics or advertising technologies until you choose to allow them. When you first visit, a banner lets you accept all, reject all, or choose by category. You can change your choice at any time using the "Cookie settings" link in the footer of every page. We also honor the Global Privacy Control browser signal as a request to opt out of the sale or sharing of your personal information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">California Privacy Rights</h3>
                <p>
                  The use of advertising pixels such as Meta and OpenAI's may be considered a "sale" or "sharing" of personal information under the California Consumer Privacy Act (CCPA). We do not sell personal information for monetary payment. To opt out of this sharing, choose "Reject all" in the cookie banner, use the "Cookie settings" link in the footer, enable Global Privacy Control in your browser, or contact us at privacy@getsurfox.com.
                </p>
              </div>

              <p>
                For more information on how these providers use data collected through their tools, see Google's Privacy Policy, Meta's Privacy Policy, and OpenAI's Privacy Policy.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Scope</h3>
                <p>
                  This Cookies & Tracking Technologies section applies to www.getsurfox.com only. It does not apply to websites operated by our customers that embed the SurFox AI chat widget. Cookies and tracking on those sites are controlled by the site operator, not SurFox AI.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 10DLC Registration Checker */}
          <motion.div
            id="10dlc-checker"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                10DLC Registration Checker [PENDING GC REVIEW]
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 space-y-6 text-[#5A626E] leading-relaxed">
              <p>
                The free 10DLC Registration Checker at www.getsurfox.com/tools is separate from the SurFox AI platform. This section describes what it collects, who processes it, and how long we keep it.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">What we collect</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The website address you ask us to check, the addresses of the public pages we read on it (up to three), and the text you paste into the checker. We keep the result of each check, which includes short excerpts from the text we checked. We do not keep the full page text.</li>
                  <li>Where you came from: the referrer, the first page you landed on, and the campaign tag (src or aff) in the link you followed.</li>
                  <li>Your email address, only if you choose to unlock the full report and tick the consent box. We never ask for a phone number.</li>
                  <li>A signed cookie (tools_vid) and a keyed hash of your IP address, used only to enforce a limit of 3 website scans a day. We do not store your IP address itself.</li>
                  <li>A first-touch cookie (surfox_first_src) that remembers the src tag from the link that first brought you to getsurfox.com, for 60 days, so we can tell which link led to a sign-up.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">Who processes it</h3>
                <p>
                  The text we check is sent to our AI model service, which compares it with published industry and carrier rules and returns a result. If you unlock the full report, we email it to you through Resend, our email delivery provider. We also send ourselves an internal alert for each check, which includes the website address, the results, the referrer and landing page, and your email address if you gave one.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#13171F] mb-3">How long we keep it</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Check results, the referrer and landing page, and any email address you gave: 12 months, then deleted.</li>
                  <li>The daily-limit records (cookie identifier and IP hash): 30 days, then deleted.</li>
                  <li>Internal alert and email delivery logs: 90 days, then deleted.</li>
                  <li>Cost records, which hold no personal information: 13 months.</li>
                </ul>
                <p className="mt-3">
                  To have your result or email address deleted sooner, email privacy@getsurfox.com.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Your Rights
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Access, correct, or delete your personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Object to or restrict certain processing of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Request data portability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Opt-out of SMS notifications by replying STOP to any message</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Withdraw consent where processing is based on consent</span>
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@getsurfox.com
              </p>
            </div>
          </motion.div>

          {/* Data Deletion Requests */}
          <motion.div
            id="data-deletion"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Data Deletion Requests
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
              <p>
                SurFox AI stores conversation and contact information on behalf of the businesses that use our platform. If you messaged one of those businesses on Facebook Messenger and want your data deleted, you can request it in either of these ways:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Email privacy@getsurfox.com with the subject line "Data Deletion Request." Include your name as it appears on Facebook and the name of the business you messaged, so we can find your records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0A7C8C] mt-1">•</span>
                  <span>Contact the business you messaged directly and ask them to submit the request to SurFox AI.</span>
                </li>
              </ul>
              <p>
                We will confirm receipt within 5 business days and complete the deletion within 30 days, except where we are required by law to keep certain records. You can also remove SurFox AI's access to your Facebook data at any time in your Facebook settings under Apps and Websites.
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
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Archive className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Data Retention
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
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
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                International Data Transfers
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
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
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Baby className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Children&apos;s Privacy
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
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
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Changes to This Privacy Policy
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
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
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#EAF7F9] border border-[#dCEEF1] flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#0A7C8C]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#13171F]">
                Contact Us
              </h2>
            </div>

            <div className="ml-0 sm:ml-16 text-[#5A626E] leading-relaxed space-y-4">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-[#F4F5F3] rounded-xl p-6 space-y-2">
                <p><strong className="text-[#13171F]">Email:</strong> privacy@getsurfox.com</p>
                <p><strong className="text-[#13171F]">Address:</strong> SurFox AI, Inc.</p>
                <p><strong className="text-[#13171F]">Website:</strong> https://www.getsurfox.com</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
