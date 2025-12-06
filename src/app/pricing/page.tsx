'use client'

import { useState } from 'react'
import { Check, X, Mail, Target } from 'lucide-react';
import Head from 'next/head';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <>
      <Head>
        <title>Pricing | SurFox AI Messaging Intelligence</title>
        <meta
          name="description"
          content="Explore SurFox pricing plans designed for AI sales automation. Compare packages and choose the plan that helps you turn cold outreach into qualified conversations."
        />
        <link rel="canonical" href="https://www.getsurfox.com/pricing" />
      </Head>

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

      <div className="min-h-screen bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="text-sm font-medium text-gray-500 mb-4 tracking-wide">PRICING</div>
            <h1 className="text-5xl md:text-6xl font-semibold text-navy mb-6 leading-tight">
              Choose Your AI Sales<br />Automation Plan
            </h1>
            <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              All plans include AI conversation intelligence, psychology-based qualification, and our 30-day money-back guarantee.
            </p>
            <p className="text-lg text-orange font-semibold">
              Higher tiers = Smarter AI = Better conversations = More qualified prospects
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
            
            {/* Starter */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover-lift">
              <h3 className="text-xl font-bold text-navy mb-2">Starter</h3>
              <div className="text-4xl font-bold text-navy mb-4">
                $197<span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for individual sales professionals ready to eliminate manual outreach</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                <div className="text-sm font-semibold text-navy">What you get:</div>
                <div className="text-sm text-gray-600 mt-1">Basic AI that handles conversations but doesn't learn</div>
                <div className="text-xs text-gray-500 mt-1">Still way better than mass text blasting</div>
              </div>

              <div className="text-left space-y-4 mb-8">
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-semibold text-navy mb-2">Monthly Limits:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    1,000 new messages per month
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Unlimited follow-up conversations
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    1 team member account
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-semibold text-navy mb-2">AI Capabilities:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Psychology-based conversations
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Automated qualification questions
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Basic objection handling
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <X className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    No learning from conversations
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-navy mb-2">Support & Analytics:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Basic analytics dashboard
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Email support
                  </div>
                </div>
              </div>
              
              <button
              onClick={() => {
                const ref = new URLSearchParams(window.location.search).get('ref');
                window.location.href = ref 
                  ? `https://www.getsurfox.com/subscribe/starter?ref=${ref}`
                  : 'https://www.getsurfox.com/subscribe/starter';
              }}
              className="w-full bg-gray-200 text-navy px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors font-semibold"
            >
              Start Today
            </button>
            </div>

            {/* Growth - Most Popular */}
            <div className="relative bg-white rounded-2xl border-2 border-orange p-8 text-center transform scale-105 shadow-xl hover-lift">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Most Popular
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-2">Growth</h3>
              <div className="text-4xl font-bold text-navy mb-4">
                $497<span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For growing sales teams ready to scale AI-powered conversations</p>
              
              <div className="bg-orange/10 rounded-lg p-4 mb-6 border border-orange/30">
                <div className="text-sm font-semibold text-orange">What you get:</div>
                <div className="text-sm text-gray-700 mt-1">Learning AI with 100 conversation memory</div>
                <div className="text-xs text-orange mt-1">Gets smarter with every conversation</div>
              </div>

              <div className="text-left space-y-4 mb-8">
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-semibold text-navy mb-2">Monthly Limits:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    10,000 new messages per month
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Unlimited follow-up conversations
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    5 team member accounts
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-semibold text-navy mb-2">AI Capabilities:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Everything in Starter, plus:
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    AI learns from 100 conversations
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Advanced objection handling
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Chrome extension for lead capture
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-navy mb-2">Support & Features:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Advanced analytics & insights
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Priority email & chat support
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Funnel module (Cold → Escalated)
                  </div>
                </div>
              </div>
              
              <button
              onClick={() => {
                const ref = new URLSearchParams(window.location.search).get('ref');
                window.location.href = ref 
                  ? `https://www.getsurfox.com/subscribe/growth?ref=${ref}`
                  : 'https://www.getsurfox.com/subscribe/growth';
              }}
              className="w-full bg-orange text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors font-semibold"
            >
              Try Risk-Free
            </button>
            </div>

            {/* Scale */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover-lift">
              <h3 className="text-xl font-bold text-navy mb-2">Scale</h3>
              <div className="text-4xl font-bold text-navy mb-4">
                $1,997<span className="text-lg text-gray-500">/month</span>
              </div>
              <p className="text-gray-600 mb-6">Full-featured plan for enterprises scaling AI-powered sales operations</p>
              
              <div className="bg-navy/5 rounded-lg p-4 mb-6 border border-navy/20">
                <div className="text-sm font-semibold text-navy">What you get:</div>
                <div className="text-sm text-gray-700 mt-1">Advanced learning AI with 1000 conversation memory</div>
                <div className="text-xs text-navy mt-1">Maximum intelligence for complex sales</div>
              </div>

              <div className="text-left space-y-4 mb-8">
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-semibold text-navy mb-2">Monthly Limits:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    50,000+ new messages per month
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Unlimited follow-up conversations
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    15+ team member accounts
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-3">
                  <div className="text-sm font-semibold text-navy mb-2">AI Capabilities:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Everything in Growth, plus:
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    AI learns from 1000 conversations
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Unlimited knowledge base uploads
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Message A/B testing
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-navy mb-2">Support & Onboarding:</div>
                  <div className="text-sm text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    White-glove onboarding
                  </div>
                  <div className="text-sm text-gray-700 flex items-center mt-1">
                    <Check className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                    Dedicated success manager
                  </div>
                </div>
              </div>

              <button
              onClick={() => {
                const ref = new URLSearchParams(window.location.search).get('ref');
                window.location.href = ref 
                  ? `https://www.getsurfox.com/subscribe/scale?ref=${ref}`
                  : 'https://www.getsurfox.com/subscribe/scale';
              }}
              className="w-full bg-gray-200 text-navy px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors font-semibold"
            >
              Try Risk-Free
            </button>
            </div>
          </div>

          {/* Cost Transparency Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <h2 className="text-3xl font-semibold text-navy mb-6">What Your Investment Covers</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Infrastructure & AI Processing</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Advanced AI model hosting and processing</li>
                    <li>• Secure cloud infrastructure and data storage</li>
                    <li>• SMS/communication platform costs</li>
                    <li>• 99.9% uptime monitoring and maintenance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-3">Development & Support</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ongoing AI model improvements</li>
                    <li>• Customer support and onboarding</li>
                    <li>• Security updates and compliance</li>
                    <li>• Platform development and new features</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">Honest pricing:</strong> We price based on actual AI processing costs and value delivered, not arbitrary markup. 
                  Higher tiers cost more because the learning AI requires significantly more computational resources.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee Details */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-2xl p-8 border-2 border-orange">
              <h2 className="text-3xl font-semibold text-navy mb-6 flex items-center">
                <Target className="w-8 h-8 text-orange mr-3" />
                30-Day Money-Back Guarantee - The Real Terms
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-orange mb-3">What We Guarantee:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• At least 10 qualified prospects delivered in 30 days</li>
                    <li>• AI successfully handles prospect conversations</li>
                    <li>• Platform uptime of 99%+ during your trial</li>
                    <li>• Support response within 24 hours</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange mb-3">The Process:</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Upload at least 100 quality prospects</li>
                    <li>• Allow 7-14 days for initial conversations</li>
                    <li>• Email tom@surfox.com if not satisfied</li>
                    <li>• Full refund processed within 3 business days</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange/10 rounded-lg border border-orange/30">
                <p className="text-sm text-gray-700">
                  <strong className="text-navy">No fine print:</strong> If you're not getting qualified prospects that are worth your time to call, 
                  we'll refund your money. That's it.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-semibold text-navy mb-8 text-center">Pricing Questions & Answers</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover-lift">
                <h3 className="text-lg font-semibold text-navy mb-3">What happens if I exceed my prospect limit?</h3>
                <p className="text-gray-700">Additional prospects are $0.20 each. We'll email you when you're approaching your limit. No surprise charges - you approve any overages first.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover-lift">
                <h3 className="text-lg font-semibold text-navy mb-3">How is this different from text blasting tools?</h3>
                <p className="text-gray-700">Text blasters send identical messages to thousands of people. Our AI has unique conversations with each prospect, reads their psychology, and only escalates genuinely interested buyers. You get fewer calls, but they're all worth taking.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover-lift">
                <h3 className="text-lg font-semibold text-navy mb-3">When will I see my first qualified prospect?</h3>
                <p className="text-gray-700">Most customers receive their first qualified prospect within 7-14 days, depending on your industry and the quality of your prospect list. Real estate and B2B services typically see faster results.</p>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover-lift">
                <h3 className="text-lg font-semibold text-navy mb-3">Can I cancel anytime?</h3>
                <p className="text-gray-700">Yes, cancel anytime with 24 hours notice. No contracts, no cancellation fees. Your AI will finish any active conversations, then stop processing new prospects.</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 hover-lift">
                <h3 className="text-lg font-semibold text-navy mb-3">Do you offer annual discounts?</h3>
                <p className="text-gray-700">We're focused on monthly pricing for now since we're pre-launch. Annual options may be available in 2025 after we've proven consistent value delivery.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gray-50 rounded-2xl p-10 border border-gray-200">
            <h3 className="text-3xl font-semibold text-navy mb-4">Questions About Pricing?</h3>
            <p className="text-gray-700 mb-6 text-lg">Talk directly with our founder about which plan fits your needs.</p>
            <a 
              href="mailto:tom@surfox.com" 
              className="inline-flex items-center px-8 py-4 bg-orange text-white rounded-xl font-semibold hover:bg-orange-600 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Tom Directly
            </a>
          </div>
        </div>
      </div>
    </>
  )
}