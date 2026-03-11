'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calculator, DollarSign, TrendingUp, MessageSquare, AlertTriangle, Check, X, Mail, Phone, Database, RefreshCw } from 'lucide-react'

type ImprovementLevel = 'conservative' | 'moderate' | 'aggressive'

const improvementMultipliers: Record<ImprovementLevel, number> = {
  conservative: 2,
  moderate: 4,
  aggressive: 6
}

export default function ROIClient() {
  // Calculator state
  const [monthlyLeads, setMonthlyLeads] = useState(500)
  const [avgDealValue, setAvgDealValue] = useState(3000)
  const [conversionRate, setConversionRate] = useState(3)
  const [numSDRs, setNumSDRs] = useState(2)
  const [costPerSDR, setCostPerSDR] = useState(120000)
  const [improvementLevel, setImprovementLevel] = useState<ImprovementLevel>('moderate')

  // Calculate ROI
  const calculations = useMemo(() => {
    const multiplier = improvementMultipliers[improvementLevel]
    const currentAnnualSDRCost = numSDRs * costPerSDR
    const currentMonthlyMeetings = monthlyLeads * (conversionRate / 100)
    const currentAnnualRevenue = currentMonthlyMeetings * 12 * avgDealValue * 0.25

    const surfoxAnnualCost = 5964 // Growth plan at $497/mo
    const surfoxConversionRate = Math.min(conversionRate * multiplier, 50) // Cap at 50%
    const surfoxMonthlyMeetings = monthlyLeads * (surfoxConversionRate / 100)
    const surfoxAnnualRevenue = surfoxMonthlyMeetings * 12 * avgDealValue * 0.25

    const costSavings = currentAnnualSDRCost - surfoxAnnualCost
    const additionalRevenue = surfoxAnnualRevenue - currentAnnualRevenue
    const totalImpact = costSavings + additionalRevenue
    const roiPercentage = Math.round((totalImpact / surfoxAnnualCost) * 100)
    const paybackDays = Math.round((surfoxAnnualCost / totalImpact) * 365)

    return {
      currentAnnualSDRCost,
      currentMonthlyMeetings,
      currentAnnualRevenue,
      surfoxAnnualCost,
      surfoxConversionRate,
      surfoxMonthlyMeetings,
      surfoxAnnualRevenue,
      costSavings,
      additionalRevenue,
      totalImpact,
      roiPercentage,
      paybackDays: paybackDays > 0 ? paybackDays : 1
    }
  }, [monthlyLeads, avgDealValue, conversionRate, numSDRs, costPerSDR, improvementLevel])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(value)
  }

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
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
          outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c2410c;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c2410c;
          cursor: pointer;
          border: none;
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
              <span className="text-sm font-semibold text-orange">ROI CALCULATOR</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-navy mb-8 leading-[1.1] tracking-tight">
              What's the Real Cost{' '}<br className="hidden sm:block" />
              of Qualifying Leads?
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your SDRs gave up on thousands of leads. SurFox AI brings them back to life.
            </p>

            <motion.a
              href="#calculator"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-orange text-white text-lg font-semibold hover:bg-orange-600 transition"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your ROI
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Built for Dead Leads Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <RefreshCw className="w-8 h-8 text-orange" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                Built for the Leads Your Team Already Gave Up On
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              SurFox AI isn't an inbound tool - it's a <span className="text-orange font-semibold">resurrection engine</span>. Upload your existing database, and our AI re-engages cold leads with psychology-based SMS conversations. No new lead costs. No wasted ad spend. Just revenue hiding in your CRM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SDR Math Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              The SDR Math Nobody Talks About
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visible Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy">The Visible Costs</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Base Salary</span>
                  <span className="font-semibold text-navy">$50,000 – $70,000</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Variable Commission</span>
                  <span className="font-semibold text-navy">$20,000 – $30,000</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Benefits & Taxes (30%)</span>
                  <span className="font-semibold text-navy">$15,000 – $21,000</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Tech Stack (CRM, Dialer, Tools)</span>
                  <span className="font-semibold text-navy">$6,000 – $8,400</span>
                </li>
                <li className="flex justify-between items-center py-3 bg-gray-50 -mx-8 px-8 rounded-b-xl">
                  <span className="font-semibold text-navy">Subtotal</span>
                  <span className="font-bold text-navy text-lg">$91,000 – $129,400</span>
                </li>
              </ul>
            </motion.div>

            {/* Hidden Costs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border-2 border-orange/30 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-xl font-semibold text-navy">The Hidden Costs</h3>
              </div>
              <ul className="space-y-4">
                <li className="py-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Management Overhead</span>
                    <span className="font-semibold text-orange">$10,000 – $25,000/yr</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">10-15 hrs/week of manager time per rep</p>
                </li>
                <li className="py-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Ramp Time Penalty</span>
                    <span className="font-semibold text-orange">$8,000 – $10,000</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">3-4 months to productivity, paying full salary for 25-50% output</p>
                </li>
                <li className="py-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Turnover Replacement</span>
                    <span className="font-semibold text-orange">$100,000 – $115,000</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Per departure (average tenure: 14-18 months)</p>
                </li>
                <li className="flex justify-between items-center py-3 bg-orange/5 -mx-8 px-8 rounded-b-xl">
                  <span className="font-semibold text-navy">True Annual Cost Per SDR</span>
                  <span className="font-bold text-orange text-lg">$105,000 – $165,000</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speed Problem Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              When Cold Leads Reply, Speed Still Wins
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When a cold lead finally responds, speed still matters. SurFox replies in under 60 seconds - not 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { stat: '21x', desc: 'more likely to convert when responded to within 5 minutes' },
              { stat: '80%', desc: 'drop in qualification odds after just 5 minutes of delay' },
              { stat: '<60 sec', desc: 'SurFox AI response time when leads reply' },
              { stat: '42-47 hrs', desc: 'average human SDR response time to re-engaged leads' },
              { stat: '78%', desc: 'of customers buy from whoever responds first' },
              { stat: '24/7', desc: 'AI monitors for replies - even nights and weekends' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center border-2 border-gray-200"
              >
                <div className="text-3xl sm:text-4xl font-bold text-orange mb-2">{item.stat}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 text-center"
          >
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Your SDRs moved on to new leads. When an old prospect finally texts back at 9 PM, no one's there to respond. <span className="text-orange font-semibold">SurFox AI never sleeps - and never misses a reply.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Reviving Leads: SDRs vs SurFox AI
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Metric</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Human SDR</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-orange">SurFox AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-gray-600">Annual Cost</td>
                  <td className="px-6 py-4 text-navy font-medium">$105,000 – $165,000</td>
                  <td className="px-6 py-4 text-orange font-semibold">$5,964 – $23,964</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 text-gray-600">Response Time to Replies</td>
                  <td className="px-6 py-4 text-navy font-medium">42-47 hours average</td>
                  <td className="px-6 py-4 text-orange font-semibold">Under 60 seconds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Availability</td>
                  <td className="px-6 py-4 text-navy font-medium">8 hours/day, 5 days/week</td>
                  <td className="px-6 py-4 text-orange font-semibold">24/7/365</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 text-gray-600">Ramp Time</td>
                  <td className="px-6 py-4 text-navy font-medium">3-4 months</td>
                  <td className="px-6 py-4 text-orange font-semibold">Minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Turnover Risk</td>
                  <td className="px-6 py-4 text-navy font-medium">34-40% annually</td>
                  <td className="px-6 py-4 text-orange font-semibold">0%</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 text-gray-600">Cost Per Qualified Lead</td>
                  <td className="px-6 py-4 text-navy font-medium">$262</td>
                  <td className="px-6 py-4 text-orange font-semibold">$26</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600">Database Coverage</td>
                  <td className="px-6 py-4 text-navy font-medium">Limited by headcount</td>
                  <td className="px-6 py-4 text-orange font-semibold">Entire database</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section id="calculator" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-orange/5 via-white to-orange/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-orange/10 border border-orange/20 mb-6">
              <span className="text-sm font-semibold text-orange">INTERACTIVE CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how much revenue is hiding in your existing lead database.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <Database className="w-5 h-5 text-orange" />
                Your Database
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Leads to Re-engage (monthly)</label>
                    <span className="text-sm font-semibold text-orange">{formatNumber(monthlyLeads)}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={monthlyLeads}
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">Cold leads in your CRM that haven't been contacted recently</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Average Deal Value</label>
                    <span className="text-sm font-semibold text-orange">{formatCurrency(avgDealValue)}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Historical Conversion Rate</label>
                    <span className="text-sm font-semibold text-orange">{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">Your team's typical conversion rate on these leads</p>
                </div>

                {/* Projected Improvement Toggle */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Projected Improvement</label>
                    <span className="text-xs text-gray-500">Based on speed-to-response data</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'conservative', label: 'Conservative', mult: '2x' },
                      { key: 'moderate', label: 'Moderate', mult: '4x' },
                      { key: 'aggressive', label: 'Aggressive', mult: '6x' },
                    ].map((option) => (
                      <button
                        key={option.key}
                        onClick={() => setImprovementLevel(option.key as ImprovementLevel)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                          improvementLevel === option.key
                            ? 'bg-orange text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <div>{option.label}</div>
                        <div className="text-xs opacity-80">{option.mult}</div>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Based on AI engagement and instant response data. Start conservative if skeptical.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Number of SDRs</label>
                    <span className="text-sm font-semibold text-orange">{numSDRs}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={numSDRs}
                    onChange={(e) => setNumSDRs(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Fully-Loaded Cost Per SDR</label>
                    <span className="text-sm font-semibold text-orange">{formatCurrency(costPerSDR)}</span>
                  </div>
                  <input
                    type="range"
                    min="80000"
                    max="200000"
                    step="5000"
                    value={costPerSDR}
                    onChange={(e) => setCostPerSDR(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border-2 border-orange/30 p-8"
            >
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange" />
                Your Results
              </h3>

              <div className="space-y-6">
                {/* Big Impact Number */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <p className="text-sm text-green-700 font-medium mb-1">Your Potential Annual Impact</p>
                  <p className="text-4xl sm:text-5xl font-bold text-green-600">
                    {formatCurrency(calculations.totalImpact)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Cost Savings</p>
                    <p className="text-xl font-bold text-green-600">{formatCurrency(calculations.costSavings)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-1">Additional Revenue</p>
                    <p className="text-xl font-bold text-green-600">{formatCurrency(calculations.additionalRevenue)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange/5 rounded-xl p-4 border border-orange/20">
                    <p className="text-sm text-gray-600 mb-1">ROI</p>
                    <p className="text-2xl font-bold text-orange">{formatNumber(calculations.roiPercentage)}%</p>
                  </div>
                  <div className="bg-orange/5 rounded-xl p-4 border border-orange/20">
                    <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                    <p className="text-2xl font-bold text-orange">{calculations.paybackDays} days</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current SDR Cost</span>
                    <span className="font-medium text-gray-700">{formatCurrency(calculations.currentAnnualSDRCost)}/yr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SurFox Cost (Growth Plan)</span>
                    <span className="font-medium text-orange">{formatCurrency(calculations.surfoxAnnualCost)}/yr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Monthly Meetings</span>
                    <span className="font-medium text-gray-700">{formatNumber(calculations.currentMonthlyMeetings)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projected Monthly Meetings</span>
                    <span className="font-medium text-green-600">{formatNumber(calculations.surfoxMonthlyMeetings)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 pt-2">
                    <span>Improvement multiplier</span>
                    <span>{improvementMultipliers[improvementLevel]}x ({improvementLevel})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Resurrection Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              The Lead Resurrection Opportunity
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Traditional Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl border-2 border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-gray-600 mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                What Traditional Platforms Miss
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Only focus on new inbound leads
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Ignore your existing database
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  No way to re-engage cold prospects at scale
                </li>
              </ul>
            </motion.div>

            {/* SurFox Advantage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-orange/5 rounded-2xl border-2 border-orange/30 p-8"
            >
              <h3 className="text-xl font-semibold text-navy mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-orange" />
                The SurFox Advantage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  AI re-engages your entire lead database
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  Psychology-based messaging that gets responses
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  Turns "dead" leads into qualified conversations
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ROI Example Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-6">Real ROI Example</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-700">10,000</p>
                <p className="text-sm text-green-600">old leads in your CRM</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-700">300</p>
                <p className="text-sm text-green-600">conversations (3% engagement)</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-700">30</p>
                <p className="text-sm text-green-600">qualified appointments (10%)</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-700">$90,000</p>
                <p className="text-sm text-green-600">revenue ($3k avg deal)</p>
              </div>
            </div>
            <div className="bg-white/60 rounded-xl p-4 text-center">
              <p className="text-green-800 font-medium">From leads you already owned and paid for.</p>
              <p className="text-green-700 text-lg font-semibold mt-2">This is why SurFox pays for itself in month one.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SMS Comparison Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6">
              Why SMS Beats Every Other Channel
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto mb-12"
          >
            <table className="w-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Channel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Open Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Response Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Avg Response Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-orange/5">
                  <td className="px-6 py-4 font-semibold text-orange flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    SMS
                  </td>
                  <td className="px-6 py-4 text-orange font-bold">98%</td>
                  <td className="px-6 py-4 text-orange font-bold">45%</td>
                  <td className="px-6 py-4 text-orange font-bold">&lt; 90 seconds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </td>
                  <td className="px-6 py-4 text-gray-600">20-38%</td>
                  <td className="px-6 py-4 text-gray-600">6%</td>
                  <td className="px-6 py-4 text-gray-600">~90 minutes</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 text-gray-600 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Phone
                  </td>
                  <td className="px-6 py-4 text-gray-600">8-12%</td>
                  <td className="px-6 py-4 text-gray-600">&lt;1%</td>
                  <td className="px-6 py-4 text-gray-600">If they answer</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-2xl p-8 text-center"
          >
            <p className="text-xl sm:text-2xl text-white leading-relaxed">
              "SMS marketing delivers <span className="text-orange font-bold">$71 ROI for every $1 spent</span> - nearly double email's $36 return."
            </p>
          </motion.div>
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
              Ready to Resurrect Your Dead Leads?
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              See SurFox in action. Most teams are fully operational within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-lg bg-orange text-white font-semibold hover:bg-orange-600 transition inline-flex items-center gap-2"
              >
                Start Free Trial
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

            <p className="text-sm text-gray-500 mb-4">
              14-day free trial. 2,000 free messages. No setup fees. Cancel anytime.
            </p>
            <p className="text-sm text-gray-600">
              Plans start at $97/month. Most teams choose Growth at $497 for learning AI.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
