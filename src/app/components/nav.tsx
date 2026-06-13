'use client';

/* =============================================================================
   NAV - Homepage redesign ("Thread")
   Minimal light-mode SaaS nav: Logo | Product ▾ | Pricing | Company ▾ |
   Sign in | Start free trial. Hover/focus dropdowns as white cards, one ink CTA.
   ============================================================================= */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';

const productLinks = [
  { label: 'For Staffing Firms', href: '/staffing' },
  { label: 'For Real Estate', href: '/wholesalers' },
  // Home Services lands here once that page exists.
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function Dropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  // Hover opens the menu; clicking an option (or leaving) closes it.
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
          open ? 'text-[#13171F]' : 'text-[#5A626E] hover:text-[#13171F]'
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {/* pt-4 bridges the gap so the card stays open while moving the cursor onto it */}
      <div
        className={`absolute left-[-12px] top-full pt-4 transition-all duration-200 ${
          open
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
        }`}
      >
        <div
          className="min-w-[208px] bg-white border border-[#E4E6E2] rounded-xl p-[7px]"
          style={{ boxShadow: '0 18px 40px -18px rgba(19,23,31,.22)' }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-[#5A626E] rounded-lg hover:bg-[#F4F5F3] hover:text-[#13171F] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E4E6E2]"
      style={{
        backgroundColor: '#ffffff',
        fontFamily: 'var(--font-ibm-plex-sans)',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8 h-[68px] flex items-center gap-10">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/newSurFoxLogo1.png"
            alt="SurFox AI"
            width={140}
            height={34}
            className="h-[34px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-[30px]">
          <Dropdown label="Solutions" links={productLinks} />
          <Link
            href="/pricing"
            className="text-sm font-medium text-[#5A626E] hover:text-[#13171F] transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/demo"
            className="text-sm font-medium text-[#5A626E] hover:text-[#13171F] transition-colors"
          >
            Demo
          </Link>
          <Dropdown label="Company" links={companyLinks} />
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-[22px] ml-auto">
          <a
            href="https://surfox.ai"
            className="text-sm font-medium text-[#5A626E] hover:text-[#13171F] transition-colors"
          >
            Sign in
          </a>
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-[9px] bg-[#13171F] text-white text-sm font-semibold px-5 py-[11px] hover:bg-black transition-colors"
          >
            Start free trial
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden ml-auto text-[#13171F]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-[#E4E6E2] bg-[#F4F5F3]"
          style={{ fontFamily: 'var(--font-ibm-plex-sans)' }}
        >
          <div className="px-8 py-6 flex flex-col gap-1">
            <p className="text-[11px] font-medium uppercase tracking-[.12em] text-[#8A92A0] mt-2 mb-1">
              Solutions
            </p>
            {productLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
            >
              Pricing
            </Link>
            <Link
              href="/demo"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
            >
              Demo
            </Link>
            <p className="text-[11px] font-medium uppercase tracking-[.12em] text-[#8A92A0] mt-3 mb-1">
              Company
            </p>
            {companyLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#E4E6E2]">
              <a href="https://surfox.ai" className="text-sm font-medium text-[#5A626E]">
                Sign in
              </a>
              <Link
                href="/#pricing"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center rounded-[9px] bg-[#13171F] text-white text-sm font-semibold px-5 py-[11px]"
              >
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
