'use client';

/* =============================================================================
   NAV - Homepage redesign ("Thread")
   Minimal light-mode SaaS nav: Logo | Platform | Industries ▾ | Pricing | Company ▾ |
   Sign in | Try it free in minutes. Hover/focus dropdowns as white cards, ONE call to
   action: the self-serve demo, in brand cyan so it reads as the point of the nav and
   not as another menu item. It points at /demo-preview until that replaces /demo.
   ============================================================================= */

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, Sparkles, X } from 'lucide-react';

// The one call to action. Brand cyan with a soft glow, dark text; every other nav item is grey.
const DEMO_HREF = '/demo-preview';
const DEMO_LABEL = 'Try it free in minutes';

// What makes the button impossible to miss: a slow pulsing glow ring and a light shimmer that sweeps across it every few seconds.
// Both stop for visitors who have asked their system for reduced motion.
const CTA_CSS = `
@keyframes sfx-cta-pulse { 0%,100% { box-shadow: 0 8px 24px -8px rgba(34,211,238,.85), 0 0 0 0 rgba(34,211,238,.55); } 50% { box-shadow: 0 10px 30px -6px rgba(34,211,238,.95), 0 0 0 9px rgba(34,211,238,0); } }
@keyframes sfx-cta-shine { 0%,55% { transform: translateX(-120%) skewX(-18deg); } 100% { transform: translateX(260%) skewX(-18deg); } }
.sfx-cta { position: relative; overflow: hidden; background-image: linear-gradient(100deg, #22D3EE 0%, #5EEAD4 50%, #22D3EE 100%); animation: sfx-cta-pulse 2.6s ease-in-out infinite; }
.sfx-cta::after { content: ''; position: absolute; inset: 0; width: 38%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.75), transparent); animation: sfx-cta-shine 4.2s ease-in-out infinite; pointer-events: none; }
.sfx-cta:hover { filter: brightness(1.06); }
@media (prefers-reduced-motion: reduce) { .sfx-cta, .sfx-cta::after { animation: none; } }
`;

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

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link
            href="/platform"
            className="text-sm font-medium text-[#5A626E] hover:text-[#13171F] transition-colors"
          >
            Platform
          </Link>
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
            className="sfx-cta inline-flex items-center gap-2 rounded-[10px] text-[#02121F] text-[15px] font-bold px-6 py-[13px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2"
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
              className="sfx-cta mb-3 inline-flex w-full items-center justify-center gap-2 rounded-[10px] text-[#02121F] text-[15px] font-bold px-5 py-3.5"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              {DEMO_LABEL}
            </Link>
            <Link
              href="/platform"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium text-[#5A626E] hover:text-[#13171F]"
            >
              Platform
            </Link>
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
