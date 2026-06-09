'use client';

/* =============================================================================
   FOOTER - Homepage redesign ("Thread")
   Brand block (logo + tagline + newsletter) and a 4-column link grid, a
   hairline, then a bottom row. Warm-paper, no gradients.
   ============================================================================= */

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const API_URL = 'https://api.surfox.ai/api/public/contact-sales';

const columns: { title: string; links: { label: string; href: string }[]; wide?: boolean }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Staffing Firms', href: '/staffing' },
      { label: 'For Real Estate', href: '/wholesalers' },
      { label: 'Home Services', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'ROI calculator', href: '/roi' },
      { label: 'AI principles', href: '/ai-principles' },
    ],
  },
  {
    title: 'Competitive Intelligence',
    wide: true,
    links: [
      { label: 'SurFox AI vs All Competitors', href: '/compare/surfox-vs-all-competitors' },
      { label: 'SurFox AI vs Textus', href: '/compare/surfox-vs-textus' },
      { label: 'SurFox AI vs Launch Control', href: '/compare/surfox-vs-launch-control' },
      { label: 'SurFox AI vs Lead Sherpa', href: '/compare/surfox-vs-lead-sherpa' },
      { label: 'SurFox AI vs Skipio', href: '/compare/surfox-vs-skipio' },
      { label: 'SurFox AI vs Smarter Contact', href: '/compare/surfox-vs-smarter-contact' },
      { label: 'SurFox AI vs Meera AI', href: '/compare/surfox-vs-meera-ai' },
      { label: 'SurFox AI vs GoHighLevel', href: '/compare/surfox-vs-gohighlevel' },
      { label: 'SurFox AI vs Spara', href: '/compare/surfox-vs-spara' },
    ],
  },
];

export default function Footer() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email, firstName, source: 'footer' }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed');
      setIsSubmitted(true);
      setEmail('');
      setFirstName('');
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer
      className="bg-[#F4F5F3] border-t border-[#E4E6E2]"
      style={{ fontFamily: 'var(--font-ibm-plex-sans)' }}
    >
      <div className="max-w-[1180px] mx-auto px-8 pt-16 pb-10">
        {/* Top region: brand + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-12 pb-10 border-b border-[#E4E6E2]">
          {/* Brand block (with newsletter) */}
          <div>
            <Image
              src="/newSurFoxLogo1.png"
              alt="SurFox AI"
              width={140}
              height={34}
              className="h-[34px] w-auto object-contain mb-4"
            />
            <p className="text-sm text-[#5A626E] max-w-[260px] leading-relaxed mb-6">
              AI that texts, qualifies, and books your leads, autonomously.
            </p>

            {isSubmitted ? (
              <div className="w-full max-w-[320px] px-4 py-3 bg-[#E9F8EF] border border-[#cdeed9] rounded-lg text-sm text-[#0c7a3c] flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5 max-w-[320px]">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  required
                  className="w-full px-4 py-2.5 bg-white border border-[#E4E6E2] rounded-[9px] text-sm text-[#13171F] placeholder-[#8A92A0] focus:outline-none focus:border-[#0FB6C9] transition"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2.5 bg-white border border-[#E4E6E2] rounded-[9px] text-sm text-[#13171F] placeholder-[#8A92A0] focus:outline-none focus:border-[#0FB6C9] transition"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-4 py-2.5 rounded-[9px] bg-[#13171F] text-white text-sm font-semibold hover:bg-black transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>

          {/* 4-column link grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
            {columns.map((col) => (
              <div key={col.title} className={col.wide ? 'lg:col-span-2' : undefined}>
                <h5
                  className="text-[11px] uppercase tracking-[.12em] text-[#8A92A0] font-medium mb-4"
                  style={{ fontFamily: 'var(--font-ibm-plex-mono)' }}
                >
                  {col.title}
                </h5>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className={`text-sm text-[#5A626E] hover:text-[#13171F] transition-colors${
                          col.wide ? ' lg:whitespace-nowrap' : ''
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-[13px] text-[#8A92A0]">© 2026 SurFox AI, Inc.</p>
          <div className="flex gap-5 text-[13px]">
            <Link href="/privacy" className="text-[#8A92A0] hover:text-[#13171F] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-[#8A92A0] hover:text-[#13171F] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
