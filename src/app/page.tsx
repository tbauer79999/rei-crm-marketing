import React from 'react'
import { ArrowRight, Zap, Target, TrendingUp, Users, CheckCircle, Star, Play, Phone, Clock, Filter } from 'lucide-react'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">REI-CRM</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="/demo" className="text-gray-600 hover:text-gray-900 transition-colors">Demo</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Phone className="w-4 h-4 mr-2" />
                AI-Qualified Lead Delivery
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Stop Chasing Cold Leads.
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Get Warm Prospects.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our AI doesn't close deals for you—it gets you people ready to listen. 
                Qualified prospects who want to talk, delivered straight to your phone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Get Qualified Prospects
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  See Real Results
                </button>
              </div>
              
              <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Pre-qualified leads only
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Ready to have a conversation
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  No time wasters
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Today's Qualified Prospects</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { name: "Sarah M.", status: "Motivated seller", interest: "92%", time: "2 min ago" },
                      { name: "Mike R.", status: "Cash buyer ready", interest: "89%", time: "5 min ago" },
                      { name: "Lisa K.", status: "Inherited property", interest: "95%", time: "12 min ago" }
                    ].map((lead, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">{lead.name}</div>
                            <div className="text-sm text-gray-600">{lead.status}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">{lead.interest}</div>
                            <div className="text-xs text-gray-500">{lead.time}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">Ready for your call</span>
                    </div>
                    <div className="text-sm text-blue-700">3 qualified prospects waiting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Real Problem: You're Talking to the Wrong People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You can close anyone who's ready to buy. The problem is finding them in a sea of tire-kickers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">What You're Dealing With Now</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Spending hours calling people who aren't ready
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    "Just looking" responses that waste your time
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Qualified leads get cold while you chase dead ends
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    No way to know who's actually motivated to sell
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-4">What You Get Instead</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    AI pre-qualifies every lead before you see them
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Only talk to people ready to have a conversation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Leads are warmed up and expecting your call
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    Know their motivation level before you dial
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Don't Close Deals. We Deliver People Ready to Listen.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your closing skills work great. The problem is getting in front of qualified prospects. That's what we fix.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Lead Capture",
                description: "Leads come in from your marketing as usual",
                icon: Users,
                color: "blue"
              },
              {
                step: "02", 
                title: "AI Qualification",
                description: "AI asks the hard questions and gauges real motivation",
                icon: Filter,
                color: "indigo"
              },
              {
                step: "03",
                title: "Conversation Prep", 
                description: "Qualified prospects get warmed up and educated",
                icon: Target,
                color: "purple"
              },
              {
                step: "04",
                title: "Ready to Talk",
                description: "You get prospects who want to have a conversation",
                icon: Phone,
                color: "green"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    
                    <div className={`text-sm font-semibold text-${item.color}-600 mb-2`}>
                      STEP {item.step}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Here's What We DON'T Do
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-blue-800">
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✗</span>
                <span>Close deals for you</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✗</span>
                <span>Replace your sales skills</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-500 text-xl mr-3">✗</span>
                <span>Make magic happen</span>
              </div>
            </div>
            <p className="mt-4 text-blue-700">
              We just make sure the people who answer your calls are actually worth talking to.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials/Social Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Results from Real Investors
            </h2>
            <p className="text-xl text-gray-600">
              These aren't unicorn success stories. This is what happens when you stop chasing dead leads.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I went from 50 calls a day to 8 calls a day. Same number of deals, but I actually have a life now. The people who answer are ready to talk business.",
                author: "Marcus Chen",
                title: "Wholesale Investor",
                location: "Austin, TX",
                result: "84% Less Calling Time",
                avatar: "MC"
              },
              {
                quote: "Before REI-CRM, I was playing phone tag with tire-kickers. Now when someone picks up, they already know why I'm calling and they want to hear what I have to say.",
                author: "Sarah Rodriguez",
                title: "Fix & Flip Specialist", 
                location: "Denver, CO",
                result: "Ready-to-Talk Prospects",
                avatar: "SR"
              },
              {
                quote: "The AI doesn't close deals, but it gets me in front of motivated sellers. My close rate went up because I'm not wasting time on people who aren't serious.",
                author: "David Kim",
                title: "Buy & Hold Investor",
                location: "Seattle, WA", 
                result: "Higher Close Rate",
                avatar: "DK"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-sm font-medium text-green-800">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 rounded-xl shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2,400+</div>
                <div className="text-sm text-gray-600">Active Investors</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">73%</div>
                <div className="text-sm text-gray-600">Avg. Time Saved</div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">94%</div>
                <div className="text-sm text-gray-600">Lead Quality Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple Pricing. Pay for Results Only.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No upfront fees. No long-term contracts. You only pay when we deliver qualified prospects to your phone.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: 97,
                per_lead_cost: 15,
                description: "Perfect for getting started with qualified lead delivery",
                features: [
                  "Up to 50 qualified prospects/month",
                  "Basic lead qualification",
                  "Email & SMS pre-warming",
                  "Lead readiness scoring",
                  "Standard support"
                ],
                cta_text: "Get Started",
                recommended: false
              },
              {
                name: "Growth", 
                price: 247,
                per_lead_cost: 12,
                description: "Advanced qualification for serious investors",
                features: [
                  "Up to 150 qualified prospects/month",
                  "Advanced AI qualification",
                  "A/B testing for better results",
                  "Detailed motivation analysis",
                  "Property-specific pre-warming",
                  "Priority support",
                  "Performance analytics"
                ],
                cta_text: "Get Started",
                recommended: true
              },
              {
                name: "Scale",
                price: 497,
                per_lead_cost: 8,
                description: "High-volume qualification for growing teams",
                features: [
                  "Unlimited qualified prospects",
                  "Custom qualification criteria",
                  "Multi-channel pre-warming",
                  "Team lead distribution",
                  "Custom integrations",
                  "Dedicated success manager",
                  "White-label options"
                ],
                cta_text: "Get Started",
                recommended: false
              }
            ].map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl border-2 p-8 ${tier.recommended ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200 shadow-lg'}`}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      + ${tier.per_lead_cost} per qualified prospect
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-8 ${
                    tier.recommended 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    {tier.cta_text}
                  </button>
                </div>
                
                <ul className="space-y-4">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              30-day money-back guarantee. Cancel anytime.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Only pay for qualified prospects
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                No long-term contracts
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Wasting Time on People Who Aren't Ready
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            You're great at closing deals. Let us get you in front of people who actually want to hear what you have to say.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
              Get Qualified Prospects Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-blue-100 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Pre-qualified prospects only
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              Ready to have a conversation
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              30-day guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">REI-CRM</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-qualified prospect delivery for real estate professionals.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TCPA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 REI-CRM. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">We don't close deals. We deliver people ready to talk.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage