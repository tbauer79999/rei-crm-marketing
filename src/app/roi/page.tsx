import { generatePageMetadata } from '@/data/page-metadata';
import {
  ArrowRight,
  Calculator,
  DollarSign,
  MessageSquare,
  AlertTriangle,
  Check,
  X,
  Mail,
  Phone,
  RefreshCw,
} from 'lucide-react';
import ROIClient from './ROIClient';

export const metadata = generatePageMetadata('roi');

const speedStats = [
  { stat: '21x', desc: 'more likely to convert when responded to within 5 minutes' },
  { stat: '80%', desc: 'drop in qualification odds after just 5 minutes of delay' },
  { stat: '<60 sec', desc: 'SurFox AI response time when leads reply' },
  { stat: '42-47 hrs', desc: 'average human SDR response time to re-engaged leads' },
  { stat: '78%', desc: 'of customers buy from whoever responds first' },
  { stat: '24/7', desc: 'AI monitors for replies - even nights and weekends' },
];

export default function Page() {
  return (
    <div className="bg-background text-foreground">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full glass-card border border-blue-500/20 border border-orange/20 mb-6">
            <span className="text-sm font-semibold text-blue-400">ROI CALCULATOR</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            AI SDR vs Hiring a Human SDR:{' '}<br className="hidden sm:block" />
            Real Cost Comparison
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed">
            See the true cost of hiring an SDR versus deploying AI - including the hidden costs most companies never calculate.
          </p>

          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg gradient-bg text-white text-lg font-semibold hover:gradient-bg-600 transition"
          >
            <Calculator className="w-5 h-5" />
            Calculate Your ROI
          </a>
        </div>
      </section>

      {/* Built for Dead Leads Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <RefreshCw className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Built for the Leads Your Team Already Gave Up On
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-white/30 leading-relaxed">
            SurFox AI isn't an inbound tool - it's a <span className="text-blue-400 font-semibold">resurrection engine</span>. Upload your existing database, and our AI re-engages cold leads with psychology-based SMS conversations. No new lead costs. No wasted ad spend. Just revenue hiding in your CRM.
          </p>
        </div>
      </section>

      {/* SDR Math Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The SDR Math Nobody Talks About
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Visible Costs */}
            <div className="bg-card-bg rounded-2xl border-2 border-white/[0.08] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-xl font-semibold text-white">The Visible Costs</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-white/60">Base Salary</span>
                  <span className="font-semibold text-white">$50,000 – $70,000</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-white/60">Variable Commission</span>
                  <span className="font-semibold text-white">$20,000 – $30,000</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-white/60">Benefits & Taxes (30%)</span>
                  <span className="font-semibold text-white">$15,000 – $21,000</span>
                </li>
                <li className="flex justify-between items-center py-3 border-b border-white/[0.06]">
                  <span className="text-white/60">Tech Stack (CRM, Dialer, Tools)</span>
                  <span className="font-semibold text-white">$6,000 – $8,400</span>
                </li>
                <li className="flex justify-between items-center py-3 bg-background -mx-8 px-8 rounded-b-xl">
                  <span className="font-semibold text-white">Subtotal</span>
                  <span className="font-bold text-white text-lg">$91,000 – $129,400</span>
                </li>
              </ul>
            </div>

            {/* Hidden Costs */}
            <div className="bg-card-bg rounded-2xl border-2 border-orange/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg glass-card border border-blue-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">The Hidden Costs</h3>
              </div>
              <ul className="space-y-4">
                <li className="py-3 border-b border-white/[0.06]">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Management Overhead</span>
                    <span className="font-semibold text-blue-400">$10,000 – $25,000/yr</span>
                  </div>
                  <p className="text-sm text-white/50 mt-1">10-15 hrs/week of manager time per rep</p>
                </li>
                <li className="py-3 border-b border-white/[0.06]">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Ramp Time Penalty</span>
                    <span className="font-semibold text-blue-400">$8,000 – $10,000</span>
                  </div>
                  <p className="text-sm text-white/50 mt-1">3-4 months to productivity, paying full salary for 25-50% output</p>
                </li>
                <li className="py-3 border-b border-white/[0.06]">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Turnover Replacement</span>
                    <span className="font-semibold text-blue-400">$100,000 – $115,000</span>
                  </div>
                  <p className="text-sm text-white/50 mt-1">Per departure (average tenure: 14-18 months)</p>
                </li>
                <li className="flex justify-between items-center py-3 gradient-bg/5 -mx-8 px-8 rounded-b-xl">
                  <span className="font-semibold text-white">True Annual Cost Per SDR</span>
                  <span className="font-bold text-blue-400 text-lg">$105,000 – $165,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Problem Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              When Cold Leads Reply, Speed Still Wins
            </h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              When a cold lead finally responds, speed still matters. SurFox AI replies in under 60 seconds - not 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {speedStats.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center border-2 border-white/[0.08]"
              >
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{item.stat}</div>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-card-bg rounded-2xl p-8 text-center">
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              Your SDRs moved on to new leads. When an old prospect finally texts back at 9 PM, no one's there to respond. <span className="text-blue-400 font-semibold">SurFox AI never sleeps - and never misses a reply.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              AI SDR vs Human SDR: Full Cost and Performance Breakdown
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card-bg rounded-2xl border-2 border-white/[0.08] overflow-hidden">
              <thead>
                <tr className="bg-background">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/50">Human SDR</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400">SurFox AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-white/60">Annual Cost</td>
                  <td className="px-6 py-4 text-white font-medium">$105,000 – $165,000</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">$5,964 – $23,964</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="px-6 py-4 text-white/60">Response Time to Replies</td>
                  <td className="px-6 py-4 text-white font-medium">42-47 hours average</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">Under 60 seconds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/60">Availability</td>
                  <td className="px-6 py-4 text-white font-medium">8 hours/day, 5 days/week</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">24/7/365</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="px-6 py-4 text-white/60">Ramp Time</td>
                  <td className="px-6 py-4 text-white font-medium">3-4 months</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">Minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/60">Turnover Risk</td>
                  <td className="px-6 py-4 text-white font-medium">34-40% annually</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">0%</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="px-6 py-4 text-white/60">Cost Per Qualified Lead</td>
                  <td className="px-6 py-4 text-white font-medium">$262</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">$26</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/60">Database Coverage</td>
                  <td className="px-6 py-4 text-white font-medium">Limited by headcount</td>
                  <td className="px-6 py-4 text-blue-400 font-semibold">Entire database</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Calculator (client component) */}
      <ROIClient />

      {/* Lead Resurrection Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Lead Resurrection Opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Traditional Platforms */}
            <div className="bg-background rounded-2xl border-2 border-white/[0.08] p-8">
              <h3 className="text-xl font-semibold text-white/60 mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                What Traditional Platforms Miss
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/60">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Only focus on new inbound leads
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  Ignore your existing database
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  No way to re-engage cold prospects at scale
                </li>
              </ul>
            </div>

            {/* SurFox AI Advantage */}
            <div className="gradient-bg/5 rounded-2xl border-2 border-orange/30 p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-400" />
                The SurFox AI Advantage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  AI re-engages your entire lead database
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  Psychology-based messaging that gets responses
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  Turns "dead" leads into qualified conversations
                </li>
              </ul>
            </div>
          </div>

          {/* ROI Example Box */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8">
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
            <div className="bg-card-bg/60 rounded-xl p-4 text-center">
              <p className="text-green-800 font-medium">From leads you already owned and paid for.</p>
              <p className="text-green-700 text-lg font-semibold mt-2">This is why SurFox AI pays for itself in month one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SMS Comparison Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why SMS Beats Every Other Channel
            </h2>
          </div>

          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-card-bg rounded-2xl border-2 border-white/[0.08] overflow-hidden">
              <thead>
                <tr className="bg-background">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Channel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Open Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Response Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Avg Response Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="gradient-bg/5">
                  <td className="px-6 py-4 font-semibold text-blue-400 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    SMS
                  </td>
                  <td className="px-6 py-4 text-blue-400 font-bold">98%</td>
                  <td className="px-6 py-4 text-blue-400 font-bold">45%</td>
                  <td className="px-6 py-4 text-blue-400 font-bold">&lt; 90 seconds</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-white/60 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email
                  </td>
                  <td className="px-6 py-4 text-white/60">20-38%</td>
                  <td className="px-6 py-4 text-white/60">6%</td>
                  <td className="px-6 py-4 text-white/60">~90 minutes</td>
                </tr>
                <tr className="bg-background/50">
                  <td className="px-6 py-4 text-white/60 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Phone
                  </td>
                  <td className="px-6 py-4 text-white/60">8-12%</td>
                  <td className="px-6 py-4 text-white/60">&lt;1%</td>
                  <td className="px-6 py-4 text-white/60">If they answer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-card-bg rounded-2xl p-8 text-center">
            <p className="text-xl sm:text-2xl text-white leading-relaxed">
              "SMS marketing delivers <span className="text-blue-400 font-bold">$71 ROI for every $1 spent</span> - nearly double email's $36 return."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-card-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Resurrect Your Dead Leads?
          </h2>

          <p className="text-lg sm:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            See SurFox AI in action. Most teams are fully operational within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/pricing"
              className="px-10 py-4 rounded-lg gradient-bg text-white font-semibold hover:gradient-bg-600 transition inline-flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="/demo"
              className="px-10 py-4 rounded-lg border-2 border-white/[0.1] text-white font-semibold hover:border-white/[0.12] hover:bg-background transition"
            >
              See a Demo
            </a>
          </div>

          <p className="text-sm text-white/50 mb-4">
            14-day free trial. 2,000 free messages. No setup fees. Cancel anytime.
          </p>
          <p className="text-sm text-white/60">
            Plans start at $147/month. Most teams choose Growth at $597 for learning AI.
          </p>
        </div>
      </section>
    </div>
  );
}
