// src/app/security/page.tsx
'use client'

import { Shield, Lock, Globe, Award, Terminal } from 'lucide-react'

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Security & Compliance</h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            SurFox is built on a security-first foundation with end-to-end protection for your data and operations. We ensure privacy, integrity, and availability across every layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Shield className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">SOC 2 Type II</h2>
            </div>
            <p className="text-slate-400">
              Infrastructure and practices audited for security, availability, and confidentiality — SOC 2 compliance is maintained across all environments.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Lock className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Data Encryption</h2>
            </div>
            <p className="text-slate-400">
              All data is encrypted at rest and in transit using 256-bit AES and TLS 1.3. Role-based access control (RBAC) and audit trails are enforced.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Globe className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">Global Infrastructure</h2>
            </div>
            <p className="text-slate-400">
              Hosted on globally distributed servers with multi-region failover and 99.9% uptime SLA. We support regional data residency by request.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Award className="w-5 h-5 text-emerald-400 mr-2" />
              <h2 className="text-xl font-semibold text-white">AI Compliance</h2>
            </div>
            <p className="text-slate-400">
              SurFox's AI never stores lead data. Conversations are processed in-memory only, and escalation is always routed to a human for sensitive cases.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
