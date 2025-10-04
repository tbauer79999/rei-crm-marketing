'use client'

import React from 'react'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText, Mail, ArrowLeft } from 'lucide-react'

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-gray-800/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  SurFox
                </span>
              </div>
            </Link>
            <Link href="/">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed">
                SurFox ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our SurFox Lead Pusher Chrome extension and our SMS automation platform.
              </p>
            </section>

            {/* Information We Collect - Extension */}
            <section>
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Information We Collect</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Chrome Extension Data</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Authentication Information:</strong> Email address, password (encrypted), and authentication tokens when you log in</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Selected Text Data:</strong> Contact information you highlight and choose to send to SurFox (names, phone numbers, email addresses, job titles, company names)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Usage Data:</strong> Timestamps of actions taken, campaign assignments, and extension interaction data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span><strong>Preferences:</strong> Extension settings including floating widget position and user preferences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-cyan-300 mb-3">Platform Data</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span><strong>Account Information:</strong> Name, email address, company information, and billing details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span><strong>Lead Data:</strong> Contact information for prospects you upload or import to our platform</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span><strong>Conversation Data:</strong> SMS conversations conducted through our AI automation system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span><strong>Analytics Data:</strong> Performance metrics, qualification rates, and usage statistics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">How We Use Your Information</h2>
              </div>

              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>To provide our services:</strong> Process lead information, conduct AI-powered SMS conversations, and deliver qualified prospects to your team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>To authenticate users:</strong> Verify your identity and maintain secure access to your account</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>To improve our AI:</strong> Analyze conversation patterns and outcomes to enhance qualification accuracy and response quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>To provide analytics:</strong> Generate performance reports and insights about your outreach campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>To communicate with you:</strong> Send service updates, support responses, and important notifications</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Storage and Security */}
            <section>
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-green-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Data Storage and Security</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-3">Where Your Data is Stored</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your data is transmitted to and stored on our secure servers at api.surfox.ai, app.surfox.com, and getsurfox.com. We use industry-standard encryption for data transmission (HTTPS/TLS) and storage.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                  <h3 className="text-lg font-bold text-white mb-3">Security Measures</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Encrypted data transmission using HTTPS/TLS protocols</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Secure authentication using industry-standard token-based systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>Access controls limiting who can view your data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Data Sharing and Disclosure</h2>
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span><strong>Service Providers:</strong> Third-party services that help us operate our platform (e.g., hosting, analytics)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Your Rights and Choices</h2>
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed mb-4">You have the following rights regarding your data:</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Access:</strong> Request a copy of the personal data we hold about you</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Correction:</strong> Request correction of inaccurate or incomplete data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Deletion:</strong> Request deletion of your account and associated data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Export:</strong> Request a portable copy of your data in a structured format</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span><strong>Opt-out:</strong> Uninstall the extension and close your account at any time</span>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  To exercise these rights, contact us at <a href="mailto:privacy@surfox.com" className="text-purple-400 hover:text-purple-300">privacy@surfox.com</a> or through your account settings at app.surfox.com.
                </p>
              </div>
            </section>

            {/* Chrome Extension Specific */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Chrome Extension Specific Information</h2>
              <div className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-xl border border-purple-500/30 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-purple-300 mb-3">How the Extension Works</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The SurFox Lead Pusher extension only collects data when you explicitly take action:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">1.</span>
                    <span>You highlight contact information on any webpage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">2.</span>
                    <span>You right-click and select "Send to SurFox"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">3.</span>
                    <span>You review and confirm the extracted data before submission</span>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  The extension does not automatically collect, scan, or transmit data from websites you visit. It only processes information you explicitly select and choose to send.
                </p>
              </div>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed">
                  We retain your data for as long as your account is active or as needed to provide our services. When you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal or regulatory purposes.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Children's Privacy</h2>
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
              <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
              <div className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-xl border border-purple-500/30 p-8 backdrop-blur-xl">
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span>Email: <a href="mailto:privacy@surfox.com" className="text-purple-400 hover:text-purple-300">privacy@surfox.com</a></span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <span>General Inquiries: <a href="mailto:tom@surfox.com" className="text-purple-400 hover:text-purple-300">tom@surfox.com</a></span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-16">
            <Link href="/">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 backdrop-blur-xl py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SurFox. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPage