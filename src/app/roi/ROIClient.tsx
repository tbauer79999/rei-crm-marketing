'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Database, TrendingUp } from 'lucide-react'

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

    const surfoxAnnualCost = 7164 // Growth plan at $597/mo
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
    <section id="calculator" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card border border-blue-500/20 mb-6">
            <span className="text-sm font-semibold text-blue-400">INTERACTIVE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            See how much revenue is hiding in your existing lead database.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg rounded-2xl border-2 border-white/[0.08] p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" />
              Your Database
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-white/70">Leads to Re-engage (monthly)</label>
                  <span className="text-sm font-semibold text-blue-400">{formatNumber(monthlyLeads)}</span>
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
                <p className="text-xs text-white/50 mt-1">Cold leads in your CRM that haven't been contacted recently</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-white/70">Average Deal Value</label>
                  <span className="text-sm font-semibold text-blue-400">{formatCurrency(avgDealValue)}</span>
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
                  <label className="text-sm font-medium text-white/70">Historical Conversion Rate</label>
                  <span className="text-sm font-semibold text-blue-400">{conversionRate}%</span>
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
                <p className="text-xs text-white/50 mt-1">Your team's typical conversion rate on these leads</p>
              </div>

              {/* Projected Improvement Toggle */}
              <div className="pt-4 border-t border-white/[0.08]">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-white/70">Projected Improvement</label>
                  <span className="text-xs text-white/50">Based on speed-to-response data</span>
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
                          ? 'gradient-bg text-white'
                          : 'bg-blue-500/10 text-white/60 hover:bg-blue-500/20'
                      }`}
                    >
                      <div>{option.label}</div>
                      <div className="text-xs opacity-80">{option.mult}</div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-white/50 mt-2">
                  Based on AI engagement and instant response data. Start conservative if skeptical.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-white/70">Number of SDRs</label>
                  <span className="text-sm font-semibold text-blue-400">{numSDRs}</span>
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
                  <label className="text-sm font-medium text-white/70">Fully-Loaded Cost Per SDR</label>
                  <span className="text-sm font-semibold text-blue-400">{formatCurrency(costPerSDR)}</span>
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
            className="bg-card-bg rounded-2xl border-2 border-orange/30 p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
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
                <div className="bg-background rounded-xl p-4">
                  <p className="text-sm text-white/60 mb-1">Cost Savings</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(calculations.costSavings)}</p>
                </div>
                <div className="bg-background rounded-xl p-4">
                  <p className="text-sm text-white/60 mb-1">Additional Revenue</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(calculations.additionalRevenue)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="gradient-bg/5 rounded-xl p-4 border border-orange/20">
                  <p className="text-sm text-white/60 mb-1">ROI</p>
                  <p className="text-2xl font-bold text-blue-400">{formatNumber(calculations.roiPercentage)}%</p>
                </div>
                <div className="gradient-bg/5 rounded-xl p-4 border border-orange/20">
                  <p className="text-sm text-white/60 mb-1">Payback Period</p>
                  <p className="text-2xl font-bold text-blue-400">{calculations.paybackDays} days</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Current SDR Cost</span>
                  <span className="font-medium text-white/70">{formatCurrency(calculations.currentAnnualSDRCost)}/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">SurFox AI Cost (Growth Plan)</span>
                  <span className="font-medium text-blue-400">{formatCurrency(calculations.surfoxAnnualCost)}/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Current Monthly Meetings</span>
                  <span className="font-medium text-white/70">{formatNumber(calculations.currentMonthlyMeetings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Projected Monthly Meetings</span>
                  <span className="font-medium text-green-600">{formatNumber(calculations.surfoxMonthlyMeetings)}</span>
                </div>
                <div className="flex justify-between text-xs text-white/50 pt-2">
                  <span>Improvement multiplier</span>
                  <span>{improvementMultipliers[improvementLevel]}x ({improvementLevel})</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
