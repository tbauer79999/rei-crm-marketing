"use client"

import React, { useState } from 'react';

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

export default function PlatformClient() {
  const [platformFirstName, setPlatformFirstName] = useState('');
  const [platformEmail, setPlatformEmail] = useState('');
  const [platformSubmitting, setPlatformSubmitting] = useState(false);

  const handlePlatformSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platformEmail) return;
    setPlatformSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email: platformEmail, firstName: platformFirstName, source: 'platform' }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      alert('Thanks! You\'re on the list.');
      setPlatformEmail('');
      setPlatformFirstName('');
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setPlatformSubmitting(false);
    }
  };

  return (
    <section className="py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want to follow along?
          </h2>

          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            We're building this one layer at a time. Drop your email and we'll share updates as new capabilities go live.
          </p>

          <form onSubmit={handlePlatformSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
            <input
              type="text"
              value={platformFirstName}
              onChange={(e) => setPlatformFirstName(e.target.value)}
              placeholder="First name"
              required
              className="w-full px-4 py-3 rounded-lg border-2 border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-background text-white placeholder:text-white/40"
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={platformEmail}
                onChange={(e) => setPlatformEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-background text-white placeholder:text-white/40"
              />
              <button
                type="submit"
                disabled={platformSubmitting}
                className="px-6 py-3 rounded-lg bg-card-bg text-white font-semibold hover:bg-card-bg border border-white/[0.08] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {platformSubmitting ? 'Sending...' : 'Stay in the know'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
