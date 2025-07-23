'use client'

import React, { useState } from 'react'
import { ArrowRight, Play, Check, X, Zap, Target, Users, TrendingUp, BarChart3, Brain, Shield, Database, Cpu, MessageSquare, Clock, Sparkles, Crown, Mail, Activity, Eye, Layers, Inbox, Building2, TrendingDown, Home, DollarSign, UserCheck, Phone, Briefcase, Handshake, Calendar, Building } from 'lucide-react'
import Nav from '../components/nav'

const SurFoxIndustries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      title: 'Real Estate',
      subtitle: 'Turn Cold Leads Into Motivated Sellers',
      icon: Home,
      color: 'purple',
      painPoints: [
        'Cold leads from Zillow, Facebook, and direct mail never respond',
        'Spend hours manually following up with unqualified prospects',
        'Listings expire because sellers weren\'t properly nurtured',
        'Can\'t tell which leads are actually motivated to sell'
      ],
      solution: 'AI reads seller psychology and identifies who\'s actually ready to move',
      results: [
        '3x more listing appointments from existing leads',
        '80% reduction in manual follow-up time',
        'AI identifies motivated sellers automatically',
        'Higher quality conversations with better closing rates'
      ],
      useCases: [
        'Expired listing follow-up campaigns',
        'Cold lead nurturing from all sources',
        'FSBO (For Sale By Owner) conversion',
        'Past client re-engagement for referrals'
      ],
      testimonial: {
        quote: "SurFox turned our dead Zillow leads into actual listings. The AI finds the motivated sellers we would have missed.",
        author: "Sarah Martinez",
        title: "Top Producer, RE/MAX Elite"
      }
    },
    {
      title: 'Wholesale Real Estate',
      subtitle: 'Convert Distressed Property Leads',
      icon: Building,
      color: 'cyan',
      painPoints: [
        'Massive lead lists but low conversion rates',
        'Can\'t scale manual calling and texting',
        'Hard to identify truly motivated sellers',
        'Competition gets to hot leads first'
      ],
      solution: 'AI instantly qualifies and prioritizes your hottest prospects',
      results: [
        '5x more contracts from same lead volume',
        'AI handles 90% of initial conversations',
        'Hot leads escalated within minutes',
        'Scale to unlimited leads without more staff'
      ],
      useCases: [
        'Probate and pre-foreclosure follow-up',
        'Skip trace lead conversion',
        'Distressed property outreach',
        'Absentee owner campaigns'
      ],
      testimonial: {
        quote: "We went from 2 deals per month to 10+ deals using the same lead sources. The AI finds motivated sellers we never would have identified.",
        author: "Mike Chen",
        title: "Wholesale Real Estate Investor"
      }
    },
    {
      title: 'Insurance',
      subtitle: 'Revive Dead Insurance Leads',
      icon: Shield,
      color: 'blue',
      painPoints: [
        'Expensive leads from carriers go nowhere',
        'Follow-up sequences feel robotic and get ignored',
        'Can\'t compete with cheaper online quotes',
        'Renewal rates declining year over year'
      ],
      solution: 'AI understands what motivates each prospect and adapts messaging accordingly',
      results: [
        '4x better response rates on cold leads',
        'Higher policy values through better qualification',
        'Improved renewal rates with AI re-engagement',
        'Reduced cost per acquisition significantly'
      ],
      useCases: [
        'Life insurance lead conversion',
        'Auto insurance quote follow-up',
        'Commercial insurance prospecting',
        'Renewal campaign automation'
      ],
      testimonial: {
        quote: "Our lead conversion went from 8% to 32% with SurFox. The AI actually understands what customers care about.",
        author: "David Rodriguez",
        title: "Independent Insurance Agent"
      }
    },
    {
      title: 'Solar',
      subtitle: 'Convert Solar Prospects Into Installs',
      icon: Zap,
      color: 'green',
      painPoints: [
        'Solar leads are expensive and competitive',
        'Long sales cycles with multiple decision makers',
        'Prospects go dark after initial interest',
        'Hard to justify ROI on marketing spend'
      ],
      solution: 'AI maintains engagement through long sales cycles and identifies buying signals',
      results: [
        '6x more installations from existing leads',
        'Shortened sales cycles through AI nurturing',
        'Higher quality appointments with pre-qualified prospects',
        'Dramatically improved ROI on lead generation'
      ],
      useCases: [
        'Lead qualification and nurturing',
        'Post-consultation follow-up',
        'Referral campaign automation',
        'Past prospect re-engagement'
      ],
      testimonial: {
        quote: "SurFox helped us install 300% more systems from the same marketing budget. The AI keeps prospects engaged through our entire sales process.",
        author: "Jennifer Kim",
        title: "Solar Sales Director"
      }
    },
    {
      title: 'Recruiting',
      subtitle: 'Fill Positions With Quality Candidates',
      icon: UserCheck,
      color: 'indigo',
      painPoints: [
        'Candidates ghost after initial contact',
        'Can\'t scale personalized outreach',
        'Top talent goes to competitors faster',
        'Hiring managers complain about candidate quality'
      ],
      solution: 'AI identifies candidate motivation and matches the right opportunities',
      results: [
        '10x more candidate responses',
        'Higher quality placements through AI screening',
        'Faster time-to-fill on critical positions',
        'Improved candidate experience and referrals'
      ],
      useCases: [
        'Passive candidate sourcing',
        'Candidate nurture campaigns',
        'Client relationship management',
        'Referral program automation'
      ],
      testimonial: {
        quote: "We filled more positions in Q1 with SurFox than all of last year. The AI finds candidates who are actually ready to move.",
        author: "Amanda Foster",
        title: "Executive Recruiter"
      }
    },
    {
      title: 'B2B Sales',
      subtitle: 'Convert Cold Prospects Into Meetings',
      icon: Briefcase,
      color: 'purple',
      painPoints: [
        'Cold outreach gets ignored or marked as spam',
        'Can\'t break through to decision makers',
        'Long sales cycles with multiple touchpoints',
        'Competitors get meetings while you get silence'
      ],
      solution: 'AI crafts messages that resonate with each prospect\'s business challenges',
      results: [
        '8x more qualified meetings booked',
        'Shorter sales cycles through AI qualification',
        'Higher deal values from better prospects',
        'Improved pipeline velocity and forecasting'
      ],
      useCases: [
        'Cold prospect outreach',
        'Event follow-up campaigns',
        'Account-based marketing support',
        'Partnership development'
      ],
      testimonial: {
        quote: "Our meeting booking rate went from 2% to 16% overnight. SurFox AI actually understands what each prospect cares about.",
        author: "Tom Wilson",
        title: "VP of Sales, TechCorp"
      }
    }
  ]

  const commonChallenges = [
    {
      problem: 'Dead Lead Database',
      description: 'Thousands of leads sitting in your CRM that never responded to initial outreach',
      solution: 'AI re-engages with psychology-based messaging that gets responses'
    },
    {
      problem: 'Manual Follow-Up Overload', 
      description: 'Sales team spending hours on follow-ups instead of closing deals',
      solution: 'AI handles 90% of conversations until prospects are ready to buy'
    },
    {
      problem: 'Low Conversion Rates',
      description: 'Expensive leads from marketing that turn into very few actual sales',
      solution: 'AI qualification identifies who\'s actually ready to purchase'
    },
    {
      problem: 'Scalability Limits',
      description: 'Can\'t grow without hiring more expensive sales staff',
      solution: 'AI enables unlimited lead handling without proportional cost increases'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans text-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative py-16 pt-24 lg:pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            
            {/* SurFox Logo */}
            <div className="flex items-center justify-center mb-8">
              <img src="/logo.png" alt="SurFox" className="w-16 h-16 md:w-20 md:h-20" />
              <div className="ml-4 text-left">
                <div className="text-3xl md:text-4xl font-bold text-white">SurFox</div>
                <div className="text-sm md:text-base text-purple-300">AI for Every Sales Industry</div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Every Industry
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Has Dead Leads
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                We Bring Them Back
              </span>
            </h1>
            
            <div className="text-lg md:text-2xl text-purple-200 space-y-4 mb-8">
              <p>Every sales organization has the same problem: expensive leads that go nowhere.</p>
              <p className="text-base md:text-lg text-gray-300">
                <strong className="text-white">SurFox AI works across every industry</strong> because human psychology 
                is universal. Whether you're selling houses, insurance, or software, people buy the same way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl font-bold text-base md:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  Find Your Industry
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <a href="#demo" className="px-6 md:px-8 py-3 md:py-4 border-2 border-purple-400/50 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300">
                <Play className="mr-2 w-4 h-4 md:w-5 md:h-5 inline" />
                Watch Demo
              </a>
            </div>

            {/* Key Stats Preview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">6+</div>
                <div className="text-sm text-purple-200">Industries</div>
                <div className="text-xs text-gray-400 mt-2">proven results</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">5-10X</div>
                <div className="text-sm text-purple-200">Better Results</div>
                <div className="text-xs text-gray-400 mt-2">from same leads</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-sm text-purple-200">AI Automation</div>
                <div className="text-xs text-gray-400 mt-2">less manual work</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-4 md:p-6 text-center shadow-2xl">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Universal</div>
                <div className="text-sm text-purple-200">Psychology</div>
                <div className="text-xs text-gray-400 mt-2">works everywhere</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              The Universal Problem
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Every sales industry faces the same core challenges. SurFox solves them all with AI psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {commonChallenges.map((challenge, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-600/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
                <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-4 flex items-center">
                  <X className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  {challenge.problem}
                </h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">{challenge.description}</p>
                <div className="bg-purple-900/40 border border-purple-400/30 rounded-xl p-4">
                  <h4 className="text-purple-300 font-bold mb-2 flex items-center text-sm md:text-base">
                    <Brain className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    SurFox Solution
                  </h4>
                  <p className="text-purple-200 text-sm md:text-base">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specific Solutions */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Solutions by Industry
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              See how SurFox transforms sales results in your specific industry.
            </p>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {industries.map((industry, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all text-xs md:text-base ${
                  activeIndustry === index
                    ? `bg-gradient-to-r ${
                        industry.color === 'purple' ? 'from-purple-600 to-purple-700' :
                        industry.color === 'cyan' ? 'from-cyan-600 to-cyan-700' :
                        industry.color === 'blue' ? 'from-blue-600 to-blue-700' :
                        industry.color === 'green' ? 'from-green-600 to-green-700' :
                        industry.color === 'indigo' ? 'from-indigo-600 to-indigo-700' :
                        'from-purple-600 to-purple-700'
                      } text-white shadow-lg`
                    : 'bg-gray-900/60 text-gray-300 hover:bg-gray-800/60 border border-gray-700/50 backdrop-blur-sm'
                }`}
              >
                <industry.icon className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                <span className="hidden sm:inline">{industry.title}</span>
                <span className="sm:hidden">{industry.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Industry Details */}
          <div className="bg-gradient-to-br from-gray-900/90 to-purple-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden shadow-2xl">
            <div className="p-6 md:p-12">
              {/* Industry Header */}
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${
                  industries[activeIndustry].color === 'purple' ? 'from-purple-600 to-purple-700' :
                  industries[activeIndustry].color === 'cyan' ? 'from-cyan-600 to-cyan-700' :
                  industries[activeIndustry].color === 'blue' ? 'from-blue-600 to-blue-700' :
                  industries[activeIndustry].color === 'green' ? 'from-green-600 to-green-700' :
                  industries[activeIndustry].color === 'indigo' ? 'from-indigo-600 to-indigo-700' :
                  'from-purple-600 to-purple-700'
                } rounded-2xl flex items-center justify-center mb-4 md:mb-0 md:mr-6 shadow-xl`}>
                  {React.createElement(industries[activeIndustry].icon, { className: "w-8 h-8 md:w-10 md:h-10 text-white" })}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{industries[activeIndustry].title}</h3>
                  <p className="text-lg md:text-xl text-purple-300">{industries[activeIndustry].subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Pain Points */}
                <div className="space-y-6">
                  <div className="bg-red-900/40 border border-red-400/30 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-red-300 mb-4 flex items-center">
                      <X className="w-5 h-5 mr-2" />
                      Current Pain Points
                    </h4>
                    <div className="space-y-3">
                      {industries[activeIndustry].painPoints.map((pain, index) => (
                        <div key={index} className="flex items-start text-red-200 text-sm md:text-base">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {pain}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-purple-900/40 border border-purple-400/30 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                      <Brain className="w-5 h-5 mr-2" />
                      How SurFox Helps
                    </h4>
                    <p className="text-purple-200 text-sm md:text-base leading-relaxed">{industries[activeIndustry].solution}</p>
                  </div>
                </div>

                {/* Results & Use Cases */}
                <div className="space-y-6">
                  <div className="bg-green-900/40 border border-green-400/30 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center">
                      <Check className="w-5 h-5 mr-2" />
                      Typical Results
                    </h4>
                    <div className="space-y-3">
                      {industries[activeIndustry].results.map((result, index) => (
                        <div key={index} className="flex items-start text-green-200 text-sm md:text-base">
                          <Sparkles className="w-4 h-4 mr-3 mt-1 text-green-400 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-900/40 border border-blue-400/30 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Common Use Cases
                    </h4>
                    <div className="space-y-3">
                      {industries[activeIndustry].useCases.map((useCase, index) => (
                        <div key={index} className="flex items-start text-blue-200 text-sm md:text-base">
                          <ArrowRight className="w-4 h-4 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                          {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-400/30 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-lg md:text-xl text-purple-200 italic mb-4 leading-relaxed">
                  "{industries[activeIndustry].testimonial.quote}"
                </div>
                <div className="text-white font-bold">{industries[activeIndustry].testimonial.author}</div>
                <div className="text-purple-300 text-sm">{industries[activeIndustry].testimonial.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Psychology Works Universally */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-y border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Psychology Works Everywhere
            </h2>
            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto">
              Human behavior is universal. Whether buying a house or insurance, people make decisions the same way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/60 border border-purple-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Universal Psychology</h3>
              <p className="text-purple-200 text-sm md:text-base">Fear, desire, urgency, and trust work the same across all industries. Our AI understands these fundamental drivers.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-cyan-900/60 border border-cyan-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Proven Patterns</h3>
              <p className="text-cyan-200 text-sm md:text-base">The same psychological triggers that sell houses also sell insurance, solar, and software. We've proven this across industries.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-green-900/60 border border-green-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Scalable Intelligence</h3>
              <p className="text-green-200 text-sm md:text-base">Once the AI learns psychology in one industry, those insights transfer to others. Network effects make it smarter everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry CTA */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <img src="/logo.png" alt="SurFox" className="w-16 h-16 md:w-20 md:h-20" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Ready to Revive Your Dead Leads?
          </h2>
          <p className="text-lg md:text-2xl text-purple-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Stop letting expensive leads go to waste. See how SurFox can transform your industry's results.
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            <strong className="text-white">14-day free trial.</strong> No setup fees. Works with any industry, any lead source.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center mb-8">
            <button className="group relative px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl font-bold text-lg md:text-2xl overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <a href="#" className="px-8 md:px-12 py-4 md:py-6 border-2 border-purple-400/50 rounded-2xl font-bold text-lg md:text-2xl backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-500 hover:scale-105">
              Book Industry Demo
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-purple-200">
            <div className="flex items-center">
              <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center">
              <Target className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              Works with any lead source
            </div>
            <div className="flex items-center">
              <Brain className="w-3 h-3 md:w-4 md:h-4 mr-2 text-green-400" />
              AI starts learning immediately
            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <p className="text-xs md:text-sm text-gray-400 mb-4">Trusted across industries by</p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60">
              {['Real Estate Teams', 'Insurance Agencies', 'Solar Companies', 'Recruiting Firms'].map((industry, index) => (
                <div key={index} className="text-gray-500 font-medium text-sm md:text-base">{industry}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurFoxIndustries