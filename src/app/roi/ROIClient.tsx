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
    <section id="calculator" className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-[#EAF7F9] border border-[#dCEEF1] mb-6">
            <span className="text-sm font-semibold text-[#0A7C8C]">INTERACTIVE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#13171F] mb-6">
            Calculate Your ROI
          </h2>
          <p className="text-lg text-[#5A626E] max-w-2xl mx-auto">
            See how much revenue is hiding in your existing lead database.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-[#E4E6E2] p-8"
          >
            <h3 className="text-xl font-semibold text-[#13171F] mb-6 flex items-center gap-2">
              <Database className="w-5 h-5 text-[#0A7C8C]" />
              Your Database
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#5A626E]">Leads to Re-engage (monthly)</label>
                  <span className="text-sm font-semibold text-[#0A7C8C]">{formatNumber(monthlyLeads)}</span>
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
                <p className="text-xs text-[#8A92A0] mt-1">Cold leads in your CRM that haven't been contacted recently</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#5A626E]">Average Deal Value</label>
                  <span className="text-sm font-semibold text-[#0A7C8C]">{formatCurrency(avgDealValue)}</span>
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
                  <label className="text-sm font-medium text-[#5A626E]">Historical Conversion Rate</label>
                  <span className="text-sm font-semibold text-[#0A7C8C]">{conversionRate}%</span>
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
                <p className="text-xs text-[#8A92A0] mt-1">Your team's typical conversion rate on these leads</p>
              </div>

              {/* Projected Improvement Toggle */}
              <div className="pt-4 border-t border-[#E4E6E2]">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-medium text-[#5A626E]">Projected Improvement</label>
                  <span className="text-xs text-[#8A92A0]">Based on speed-to-response data</span>
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
                          ? 'bg-[#13171F] text-white'
                          : 'bg-[#EAF7F9] text-[#5A626E] hover:bg-[#dCEEF1]'
                      }`}
                    >
                      <div>{option.label}</div>
                      <div className="text-xs opacity-80">{option.mult}</div>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[#8A92A0] mt-2">
                  Based on AI engagement and instant response data. Start conservative if skeptical.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4E6E2]">
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-[#5A626E]">Number of SDRs</label>
                  <span className="text-sm font-semibold text-[#0A7C8C]">{numSDRs}</span>
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
                  <label className="text-sm font-medium text-[#5A626E]">Fully-Loaded Cost Per SDR</label>
                  <span className="text-sm font-semibold text-[#0A7C8C]">{formatCurrency(costPerSDR)}</span>
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
            className="bg-white rounded-2xl border-2 border-[#E4E6E2]/30 p-8"
          >
            <h3 className="text-xl font-semibold text-[#13171F] mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#0A7C8C]" />
              Your Results
            </h3>

            <div className="space-y-6">
              {/* Big Impact Number */}
              <div className="bg-[#E9F8EF] rounded-xl p-6 border border-green-200">
                <p className="text-sm text-green-700 font-medium mb-1">Your Potential Annual Impact</p>
                <p className="text-4xl sm:text-5xl font-bold text-green-600">
                  {formatCurrency(calculations.totalImpact)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F4F5F3] rounded-xl p-4">
                  <p className="text-sm text-[#5A626E] mb-1">Cost Savings</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(calculations.costSavings)}</p>
                </div>
                <div className="bg-[#F4F5F3] rounded-xl p-4">
                  <p className="text-sm text-[#5A626E] mb-1">Additional Revenue</p>
                  <p className="text-xl font-bold text-green-600">{formatCurrency(calculations.additionalRevenue)}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F0F8F9] rounded-xl p-4 border border-[#dCEEF1]">
                  <p className="text-sm text-[#5A626E] mb-1">ROI</p>
                  <p className="text-2xl font-bold text-[#0A7C8C]">{formatNumber(calculations.roiPercentage)}%</p>
                </div>
                <div className="bg-[#F0F8F9] rounded-xl p-4 border border-[#dCEEF1]">
                  <p className="text-sm text-[#5A626E] mb-1">Payback Period</p>
                  <p className="text-2xl font-bold text-[#0A7C8C]">{calculations.paybackDays} days</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4E6E2] space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#5A626E]">Current SDR Cost</span>
                  <span className="font-medium text-[#5A626E]">{formatCurrency(calculations.currentAnnualSDRCost)}/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A626E]">SurFox AI Cost (Growth Plan)</span>
                  <span className="font-medium text-[#0A7C8C]">{formatCurrency(calculations.surfoxAnnualCost)}/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A626E]">Current Monthly Meetings</span>
                  <span className="font-medium text-[#5A626E]">{formatNumber(calculations.currentMonthlyMeetings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A626E]">Projected Monthly Meetings</span>
                  <span className="font-medium text-green-600">{formatNumber(calculations.surfoxMonthlyMeetings)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#8A92A0] pt-2">
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
