'use client'

import { useState } from 'react'
import { Check, X, Mail, Target } from 'lucide-react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Choose Your AI Sales Automation Plan
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
            All plans include AI conversation intelligence, psychology-based qualification, and our 30-day money-back guarantee.
          </p>
          <p className="text-lg text-purple-300 font-medium">
            Higher tiers = Smarter AI = Better conversations = More qualified prospects
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* Starter */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="text-3xl font-bold text-white mb-4">
              $197<span className="text-lg text-gray-400">/month</span>
            </div>
            <p className="text-gray-300 mb-4">Perfect for individual sales professionals ready to eliminate manual outreach</p>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-3 mb-6 border border-gray-600/30">
              <div className="text-sm font-medium text-gray-300">What you get:</div>
              <div className="text-sm text-gray-400">Basic AI that handles conversations but doesn't learn</div>
              <div className="text-xs text-gray-500 mt-1">Still way better than mass text blasting</div>
            </div>

            <div className="text-left space-y-4 mb-8">
              <div className="border-b border-gray-700 pb-2">
                <div className="text-sm font-semibold text-white mb-2">Monthly Limits:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  1,000 new prospects per month
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Unlimited follow-up conversations
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  1 team member account
                </div>
              </div>
              
              <div className="border-b border-gray-700 pb-2">
                <div className="text-sm font-semibold text-white mb-2">AI Capabilities:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Psychology-based conversations
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Automated qualification questions
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Basic objection handling
                </div>
                <div className="text-sm text-red-300 flex items-center">
                  <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  No learning from conversations
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white mb-2">Support & Analytics:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Basic analytics dashboard
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Email support
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-xl hover:from-gray-600 hover:to-gray-500 transition-colors font-medium">
              Start Today
            </button>
          </div>

          {/* Growth - Most Popular */}
          <div className="relative bg-gradient-to-br from-purple-900/60 to-blue-900/60 rounded-2xl border-2 border-purple-400/50 p-8 text-center backdrop-blur-xl transform scale-105 shadow-2xl shadow-purple-500/25">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
            <div className="text-3xl font-bold text-white mb-4">
              $497<span className="text-lg text-gray-400">/month</span>
            </div>
            <p className="text-gray-300 mb-4">For growing sales teams ready to scale AI-powered conversations</p>
            
            <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-lg p-3 mb-6 border border-purple-400/30">
              <div className="text-sm font-medium text-purple-300">What you get:</div>
              <div className="text-sm text-purple-200">Learning AI with 100 conversation memory</div>
              <div className="text-xs text-purple-300 mt-1">Gets smarter with every conversation</div>
            </div>

            <div className="text-left space-y-4 mb-8">
              <div className="border-b border-purple-400/30 pb-2">
                <div className="text-sm font-semibold text-white mb-2">Monthly Limits:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  10,000 new prospects per month
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Unlimited conversations & follow-ups
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Up to 5 team member accounts
                </div>
              </div>
              
              <div className="border-b border-purple-400/30 pb-2">
                <div className="text-sm font-semibold text-white mb-2">AI Capabilities:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Everything in Starter, plus:
                </div>
                <div className="text-sm text-purple-200 flex items-center">
                  <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                  Learns from 100 recent conversations
                </div>
                <div className="text-sm text-purple-200 flex items-center">
                  <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                  Custom qualification scoring
                </div>
                <div className="text-sm text-purple-200 flex items-center">
                  <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                  Advanced objection handling
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white mb-2">Support & Analytics:</div>
                <div className="text-sm text-purple-200 flex items-center">
                  <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                  Team performance analytics
                </div>
                <div className="text-sm text-purple-200 flex items-center">
                  <Check className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                  Priority email & chat support
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-colors font-medium shadow-lg">
              Begin Setup
            </button>
          </div>

          {/* Scale */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-2xl border border-gray-700/50 p-8 text-center backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
            <div className="text-3xl font-bold text-white mb-4">
              $1,997<span className="text-lg text-gray-400">/month</span>
            </div>
            <p className="text-gray-300 mb-4">For enterprise teams replacing all manual outreach with AI automation</p>
            
            <div className="bg-gradient-to-r from-cyan-800/50 to-green-800/50 rounded-lg p-3 mb-6 border border-cyan-400/30">
              <div className="text-sm font-medium text-cyan-300">What you get:</div>
              <div className="text-sm text-cyan-200">Expert-level AI with 1,000 conversation memory</div>
              <div className="text-xs text-cyan-300 mt-1">Advanced psychology insights & patterns</div>
            </div>

            <div className="text-left space-y-4 mb-8">
              <div className="border-b border-gray-700 pb-2">
                <div className="text-sm font-semibold text-white mb-2">Monthly Limits:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  50,000+ new prospects per month
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Unlimited conversations & team members
                </div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Custom integrations available
                </div>
              </div>
              
              <div className="border-b border-gray-700 pb-2">
                <div className="text-sm font-semibold text-white mb-2">AI Capabilities:</div>
                <div className="text-sm text-gray-300 flex items-center">
                  <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  Everything in Growth, plus:
                </div>
                <div className="text-sm text-cyan-200 flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                  Expert AI (1,000 conversation memory)
                </div>
                <div className="text-sm text-cyan-200 flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                  Custom AI training & optimization
                </div>
                <div className="text-sm text-cyan-200 flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                  Industry-specific conversation models
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-white mb-2">Support & Onboarding:</div>
                <div className="text-sm text-cyan-200 flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                  White-glove onboarding
                </div>
                <div className="text-sm text-cyan-200 flex items-center">
                  <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                  Dedicated success manager
                </div>
              </div>
            </div>

            <button className="w-full border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:bg-gray-800/50 transition-colors font-medium">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Cost Transparency Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-900/40 to-purple-900/40 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-white mb-6">What Your Investment Covers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Infrastructure & AI Processing</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Advanced AI model hosting and processing</li>
                  <li>• Secure cloud infrastructure and data storage</li>
                  <li>• SMS/communication platform costs</li>
                  <li>• 99.9% uptime monitoring and maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Development & Support</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Ongoing AI model improvements</li>
                  <li>• Customer support and onboarding</li>
                  <li>• Security updates and compliance</li>
                  <li>• Platform development and new features</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-600/30">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Honest pricing:</strong> We price based on actual AI processing costs and value delivered, not arbitrary markup. 
                Higher tiers cost more because the learning AI requires significantly more computational resources.
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Details */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl p-8 border border-green-500/40">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Target className="w-6 h-6 text-green-400 mr-3" />
              30-Day Money-Back Guarantee - The Real Terms
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">What We Guarantee:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• At least 10 qualified prospects delivered in 30 days</li>
                  <li>• AI successfully handles prospect conversations</li>
                  <li>• Platform uptime of 99%+ during your trial</li>
                  <li>• Support response within 24 hours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-300 mb-3">The Process:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Upload at least 100 quality prospects</li>
                  <li>• Allow 7-14 days for initial conversations</li>
                  <li>• Email tom@surfox.com if not satisfied</li>
                  <li>• Full refund processed within 3 business days</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-800/20 rounded-lg border border-green-600/30">
              <p className="text-sm text-gray-200">
                <strong className="text-green-200">No fine print:</strong> If you're not getting qualified prospects that are worth your time to call, 
                we'll refund your money. That's it.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Questions & Answers</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-3">What happens if I exceed my prospect limit?</h3>
              <p className="text-gray-300">Additional prospects are $0.20 each. We'll email you when you're approaching your limit. No surprise charges - you approve any overages first.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-3">How is this different from text blasting tools?</h3>
              <p className="text-gray-300">Text blasters send identical messages to thousands of people. Our AI has unique conversations with each prospect, reads their psychology, and only escalates genuinely interested buyers. You get fewer calls, but they're all worth taking.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-3">When will I see my first qualified prospect?</h3>
              <p className="text-gray-300">Most customers receive their first qualified prospect within 7-14 days, depending on your industry and the quality of your prospect list. Real estate and B2B services typically see faster results.</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Can I cancel anytime?</h3>
              <p className="text-gray-300">Yes, cancel anytime with 24 hours notice. No contracts, no cancellation fees. Your AI will finish any active conversations, then stop processing new prospects.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-black/60 rounded-xl border border-gray-700/50 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer annual discounts?</h3>
              <p className="text-gray-300">We're focused on monthly pricing for now since we're pre-launch. Annual options may be available in 2025 after we've proven consistent value delivery.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/40 to-blue-900/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Questions About Pricing?</h3>
          <p className="text-gray-300 mb-6">Talk directly with our founder about which plan fits your needs.</p>
          <a 
            href="mailto:tom@surfox.com" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Tom Directly
          </a>
        </div>
      </div>
    </div>
  )
}