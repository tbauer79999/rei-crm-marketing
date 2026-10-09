'use client';

/* =============================================================================
   NAV - Homepage redesign ("Thread")
   Minimal light-mode SaaS nav: Logo | Platform | Industries ▾ | Pricing | Company ▾ |
   Sign in | Try it free in minutes. Hover/focus dropdowns as white cards, ONE call to
   action: the self-serve demo, in brand cyan so it reads as the point of the nav and
   not as another menu item. It points at /demo until that replaces /demo.
   ============================================================================= */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Globe, Menu, MessageSquare, Phone, Sparkles, X } from 'lucide-react';

// The one call to action; every other nav item is grey.
const DEMO_HREF = '/demo';
const DEMO_LABEL = 'Try it free in minutes';

// Matches the "$49" ribbon on the homepage hero (home.css .hero-ribbon): the same teal gradient, white text, pill shape, soft glow and
// gentle pulsing ring, so the two read as one family. The pulse stops for visitors who have asked their system for reduced motion.
const CTA_CSS = `
@keyframes sfx-cta-pulse { 0%, 100% { box-shadow: 0 8px 24px rgba(15, 182, 201, 0.4), 0 0 0 0 rgba(15, 182, 201, 0.45); } 50% { box-shadow: 0 8px 24px rgba(15, 182, 201, 0.4), 0 0 0 12px rgba(15, 182, 201, 0); } }
.sfx-cta { background: linear-gradient(100deg, #0a7c8c 0%, #0fb6c9 100%); color: #fff; box-shadow: 0 8px 24px rgba(15, 182, 201, 0.4); animation: sfx-cta-pulse 2.4s ease-in-out infinite; transition: transform 0.15s ease; }
.sfx-cta:hover { transform: translateY(-2px) scale(1.02); }
@media (prefers-reduced-motion: reduce) { .sfx-cta { animation: none; } }
`;
const platformLinks = [
  { label: 'SMS', desc: 'AI text back that qualifies new leads', href: '/platform/sms', icon: MessageSquare },
  { label: 'Web Chat', desc: 'AI website chat that books calls', href: '/platform/web-chat', icon: Globe },
  { label: 'Voice AI', desc: 'AI voice agent for inbound calls', href: '/platform/voice-ai', icon: Phone },
];

const productLinks = [
  { label: 'Staffing Agencies', href: '/staffing' },
  { label: 'Real Estate Wholesalers', href: '/wholesalers' },
  { label: 'Home Services', href: '/home-services' },
  { label: 'Event & Entertainment', href: '/events' },
  { label: 'All Industries →', href: '/industries' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Become an Affiliate', href: '/become-an-affiliate' },
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

function PlatformDropdown() {
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
        Platform
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`absolute left-[-12px] top-full pt-4 transition-all duration-200 ${
          open
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-1.5 pointer-events-none'
        }`}
      >
        <div
          className="w-[320px] bg-white border border-[#E4E6E2] rounded-xl p-[7px]"
          style={{ boxShadow: '0 18px 40px -18px rgba(19,23,31,.22)' }}
        >
          {platformLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[#F4F5F3] transition-colors"
            >
              <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#EAF7F9] flex items-center justify-center flex-shrink-0">
                <l.icon className="w-4 h-4 text-[#0A7C8C]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-[#13171F]">{l.label}</span>
                <span className="block text-[13px] text-[#5A626E]">{l.desc}</span>
              </span>
            </Link>
          ))}
          <div className="mt-1 pt-1 border-t border-[#E4E6E2]">
            <Link
              href="/platform"
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-[#5A626E] rounded-lg hover:bg-[#F4F5F3] hover:text-[#13171F] transition-colors"
            >
              How it all works together →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#E4E6E2]"
      style={{
        backgroundColor: '#ffffff',
        fontFamily: 'var(--font-plus-jakarta-sans)',
      }}
    >
      <style>{CTA_CSS}</style>
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 h-[68px] flex items-center gap-10">
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
          <PlatformDropdown />
          <Dropdown label="Industries" links={productLinks} />
          <Link
            href="/pricing"
            className="text-sm font-medium text-[#5A626E] hover:text-[#13171F] transition-colors"
          >
            Pricing
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
            href={DEMO_HREF}
            className="sfx-cta inline-flex items-center gap-2 rounded-full text-[15px] font-bold px-6 py-[12px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0fb6c9] focus-visible:ring-offset-2"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            {DEMO_LABEL}
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
          style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}
        >
          <div className="px-8 py-6 flex flex-col gap-1">
            <Link
              href={DEMO_HREF}
              onClick={() => setMobileOpen(false)}
              className="sfx-cta mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full text-[15px] font-bold px-5 py-3.5"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {DEMO_LABEL}
            </Link>
            <button
              type="button"
              onClick={() => setPlatformOpen((v) => !v)}
              aria-expanded={platformOpen}
              className="py-2 flex items-center justify-between text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
            >
              Platform
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${platformOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {platformOpen && (
              <div className="flex flex-col gap-1 pl-3 mb-1 border-l border-[#E4E6E2]">
                {platformLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-1.5 text-sm text-[#5A626E] hover:text-[#13171F]"
                  >
                    <span className="font-semibold text-[#13171F]">{l.label}</span>
                    <span className="block text-[13px]">{l.desc}</span>
                  </Link>
                ))}
                <Link
                  href="/platform"
                  onClick={() => setMobileOpen(false)}
                  className="py-1.5 text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
                >
                  How it all works together →
                </Link>
              </div>
            )}
            <p className="text-[11px] font-medium uppercase tracking-[.12em] text-[#8A92A0] mt-2 mb-1">
              Industries
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
