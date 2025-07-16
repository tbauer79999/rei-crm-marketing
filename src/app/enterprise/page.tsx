'use client'

import { Users, BarChart3, Cpu, Settings, Terminal } from 'lucide-react'

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            SurFox is purpose-built for enterprise B2B sales at scale. From multi-team coordination to enterprise-grade AI workflows, we help you engage faster and convert smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Multi-Tenant Ready</h2>
            </div>
            <p className="text-slate-400">
              Designed for agencies, franchises, and distributed sales teams. Maintain separate lead pipelines, automation rules, and settings for each client or division.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Cpu className="w-5 h-5 text-purple-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Custom AI Behavior</h2>
            </div>
            <p className="text-slate-400">
              Train SurFox to behave like your best sales rep — not a chatbot. Customize tone, persona, urgency rules, escalation score, and knowledge base per org.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Full Visibility</h2>
            </div>
            <p className="text-slate-400">
              Get real-time insight into lead progression, AI handoff performance, hot lead detection, and campaign ROI across all business units.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Settings className="w-5 h-5 text-yellow-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Dedicated Support</h2>
            </div>
            <p className="text-slate-400">
              Your team gets a dedicated success manager, onboarding help, SLA-backed uptime, and white-glove support for API, CRM, and integration assistance.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-white mb-4">Talk to Sales</h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Let us show you how SurFox can adapt to your enterprise sales model and boost lead-to-close efficiency at scale.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            Request Enterprise Demo
          </a>
        </div>
      </div>
    </div>
  )
}
