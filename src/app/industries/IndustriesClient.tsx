'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Home, Building, Shield, Zap, UserCheck, Briefcase, Brain, Target, MessageSquare, TrendingUp } from 'lucide-react'

const industries = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Turn Cold Leads Into Motivated Sellers',
    icon: Home,
    painPoints: [
      'Cold leads from Zillow, Facebook, and direct mail never respond',
      'Hours spent manually following up with unqualified prospects',
      'Can\'t tell which leads are actually motivated to sell'
    ],
    solution: 'SurFox AI reads seller psychology and identifies who\'s actually ready to move.',
    results: [
      '3x more listing appointments from existing leads',
      '80% reduction in manual follow-up time',
      'AI identifies motivated sellers automatically'
    ],
    useCases: [
      'Expired listing follow-up',
      'Cold lead nurturing',
      'FSBO conversion',
      'Past client re-engagement'
    ]
  },
  {
    id: 'wholesale',
    title: 'Wholesale',
    subtitle: 'Convert Distressed Property Leads',
    icon: Building,
    painPoints: [
      'Massive lead lists but low conversion rates',
      'Can\'t scale manual calling and texting',
      'Competition gets to hot leads first'
    ],
    solution: 'SurFox AI instantly qualifies and prioritizes your hottest prospects.',
    results: [
      '5x more contracts from same lead volume',
      'AI handles 90% of initial conversations',
      'Hot leads escalated within minutes'
    ],
    useCases: [
      'Probate and pre-foreclosure follow-up',
      'Skip trace lead conversion',
      'Distressed property outreach',
      'Absentee owner campaigns'
    ]
  },
  {
    id: 'insurance',
    title: 'Insurance',
    subtitle: 'Revive Dead Insurance Leads',
    icon: Shield,
    painPoints: [
      'Expensive leads from carriers go nowhere',
      'Follow-up sequences feel robotic and get ignored',
      'Renewal rates declining year over year'
    ],
    solution: 'SurFox AI understands what motivates each prospect and adapts messaging accordingly.',
    results: [
      '4x better response rates on cold leads',
      'Higher policy values through better qualification',
      'Improved renewal rates with AI re-engagement'
    ],
    useCases: [
      'Life insurance lead conversion',
      'Auto insurance quote follow-up',
      'Commercial insurance prospecting',
      'Renewal campaign automation'
    ]
  },
  {
    id: 'solar',
    title: 'Solar',
    subtitle: 'Convert Solar Prospects Into Installs',
    icon: Zap,
    painPoints: [
      'Solar leads are expensive and competitive',
      'Long sales cycles with multiple decision makers',
      'Prospects go dark after initial interest'
    ],
    solution: 'SurFox AI maintains engagement through long sales cycles and identifies buying signals.',
    results: [
      '6x more installations from existing leads',
      'Shortened sales cycles through AI nurturing',
      'Higher quality appointments with pre-qualified prospects'
    ],
    useCases: [
      'Lead qualification and nurturing',
      'Post-consultation follow-up',
      'Referral campaign automation',
      'Past prospect re-engagement'
    ]
  },
  {
    id: 'recruiting',
    title: 'Recruiting',
    subtitle: 'Fill Positions With Quality Candidates',
    icon: UserCheck,
    painPoints: [
      'Candidates ghost after initial contact',
      'Can\'t scale personalized outreach',
      'Top talent goes to competitors faster'
    ],
    solution: 'SurFox AI identifies candidate motivation and matches the right opportunities.',
    results: [
      '10x more candidate responses',
      'Higher quality placements through AI screening',
      'Faster time-to-fill on critical positions'
    ],
    useCases: [
      'Passive candidate sourcing',
      'Candidate nurture campaigns',
      'Client relationship management',
      'Referral program automation'
    ]
  },
  {
    id: 'b2b',
    title: 'B2B Sales',
    subtitle: 'Convert Cold Prospects Into Meetings',
    icon: Briefcase,
    painPoints: [
      'Cold outreach gets ignored or marked as spam',
      'Can\'t break through to decision makers',
      'Competitors get meetings while you get silence'
    ],
    solution: 'SurFox AI crafts messages that resonate with each prospect\'s business challenges.',
    results: [
      '8x more qualified meetings booked',
      'Shorter sales cycles through AI qualification',
      'Higher deal values from better prospects'
    ],
    useCases: [
      'Cold prospect outreach',
      'Event follow-up campaigns',
      'Account-based marketing support',
      'Partnership development'
    ]
  }
]

const commonChallenges = [
  {
    problem: 'Dead Lead Database',
    description: 'Thousands of leads sitting in your CRM that never responded to initial outreach.',
    solution: 'SurFox AI re-engages with psychology-based messaging that gets responses.'
  },
  {
    problem: 'Manual Follow-Up Overload',
    description: 'Sales team spending hours on follow-ups instead of closing deals.',
    solution: 'SurFox AI handles 90% of conversations until prospects are ready to buy.'
  },
  {
    problem: 'Low Conversion Rates',
    description: 'Expensive leads from marketing that turn into very few actual sales.',
    solution: 'SurFox AI qualification identifies who\'s actually ready to purchase.'
  },
  {
    problem: 'Scalability Limits',
    description: 'Can\'t grow without hiring more expensive sales staff.',
    solution: 'SurFox AI enables unlimited lead handling without proportional cost increases.'
  }
]

export default function IndustriesClient() {
  const [activeIndustry, setActiveIndustry] = useState(0)

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
          color: #c2410c;
        }

        .bg-orange {
          background-color: #c2410c;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">INDUSTRIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-8 leading-[1.1] tracking-tight">
              Every Industry Has{' '}<br className="hidden sm:block" />
              Dead Leads.{' '}<br className="hidden sm:block" />
              <span className="text-gray-400">We Bring Them Back.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every sales organization has the same problem: expensive leads that go nowhere. SurFox AI works across every industry because human psychology is universal.
            </p>

            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              The Universal Problem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every sales industry faces the same core challenges. SurFox AI solves them all.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border-2 border-gray-200 p-8"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{challenge.problem}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="bg-orange/5 border border-orange/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-4 h-4 text-orange" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{challenge.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Solutions by Industry
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how SurFox AI transforms sales results in your specific industry.
            </p>
          </motion.div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeIndustry === index
                    ? 'bg-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <industry.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{industry.title}</span>
                <span className="sm:hidden">{industry.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Industry Details */}
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
          >
            <div className="p-8 sm:p-10 md:p-12">
              {/* Industry Header */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center">
                  {React.createElement(industries[activeIndustry].icon, { className: "w-8 h-8 text-orange" })}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-navy">{industries[activeIndustry].title}</h3>
                  <p className="text-lg text-gray-600">{industries[activeIndustry].subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Pain Points */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-navy mb-4">Common Challenges</h4>
                    <ul className="space-y-3">
                      {industries[activeIndustry].painPoints.map((pain, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="bg-orange/5 rounded-xl p-6 border border-orange/20">
                    <h4 className="text-lg font-semibold text-navy mb-3 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-orange" />
                      How SurFox AI Helps
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{industries[activeIndustry].solution}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Results */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-navy mb-4">Typical Results</h4>
                    <ul className="space-y-3">
                      {industries[activeIndustry].results.map((result, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-orange" />
                      Common Use Cases
                    </h4>
                    <ul className="space-y-3">
                      {industries[activeIndustry].useCases.map((useCase, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <ArrowRight className="w-4 h-4 text-orange flex-shrink-0 mt-1" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Why Psychology Works Everywhere
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Human behavior is universal. Whether buying a house or insurance, people make decisions the same way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-6">
                <Brain className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Universal Psychology</h3>
              <p className="text-gray-600 leading-relaxed">
                Fear, desire, urgency, and trust work the same across all industries. SurFox AI understands these fundamental drivers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Proven Patterns</h3>
              <p className="text-gray-600 leading-relaxed">
                The same psychological triggers that sell houses also sell insurance, solar, and software.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Adaptive Conversations</h3>
              <p className="text-gray-600 leading-relaxed">
                SurFox AI learns what works in your industry and adapts its approach based on each prospect's responses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Ready to Revive Your Dead Leads?
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Stop letting expensive leads go to waste. See how SurFox AI can transform your results - regardless of your industry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-lg bg-orange text-white font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="/demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-lg border-2 border-gray-300 text-navy font-semibold hover:border-gray-400 hover:bg-gray-50 transition"
              >
                See a Demo
              </motion.a>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              14-day free trial. 2,000 free messages. No setup fees.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
