'use client';

import { useState } from 'react';
import { Check, X, Mail } from 'lucide-react';
import '../home.css';

type FeatureItem = { t: string; sub?: string; off?: boolean };
type Plan = {
  slug: 'starter' | 'growth' | 'scale';
  name: string;
  desc: string;
  price: string;
  vol: string;
  callout: string;
  popular: boolean;
  btn: 'btn-ghost' | 'btn-cyan';
  groups: { h: string; items: FeatureItem[] }[];
};

const plans: Plan[] = [
  {
    slug: 'starter',
    name: 'Starter',
    desc: 'For operators testing the waters on a focused list.',
    price: '$147',
    vol: '2,000 messages / mo',
    callout: 'Core AI that texts, qualifies, and books. Conversation learning not included yet.',
    popular: false,
    btn: 'btn-ghost',
    groups: [
      {
        h: 'Monthly limits',
        items: [
          {
            t: '2,000 SMS messages per month',
            sub: 'Each conversation uses ~4 to 8 messages (your outbound plus lead replies combined).',
          },
          {
            t: '200 website chat conversations per month',
            sub: 'Qualifies inbound website visitors 24/7.',
          },
          { t: '1 team member account' },
        ],
      },
      {
        h: 'AI capabilities',
        items: [
          { t: 'AI conversation engine' },
          { t: '50 qualification signals tracked' },
          { t: 'Knowledge base upload' },
          { t: 'Google & Outlook calendar booking' },
          { t: 'Conversation learning', off: true },
        ],
      },
      {
        h: 'Support & compliance',
        items: [
          { t: 'Basic analytics dashboard' },
          { t: 'Email support' },
          { t: 'Automatic opt-out detection. STOP and inferred opt-out language honored instantly' },
          { t: 'Built on TCPA-compliant infrastructure' },
        ],
      },
    ],
  },
  {
    slug: 'growth',
    name: 'Growth',
    desc: 'For teams ready to work a full list every month.',
    price: '$597',
    vol: '10,000 messages / mo',
    callout: 'Learning AI that studies your last 100 conversations and gets sharper over time.',
    popular: true,
    btn: 'btn-cyan',
    groups: [
      {
        h: 'Monthly limits',
        items: [
          {
            t: '10,000 SMS messages per month',
            sub: 'Each conversation uses ~4 to 8 messages (your outbound plus lead replies combined).',
          },
          {
            t: '500 website chat conversations per month',
            sub: 'Qualifies inbound website visitors 24/7.',
          },
          { t: '5 team member accounts' },
        ],
      },
      {
        h: 'AI capabilities',
        items: [
          { t: 'Everything in Starter, plus:' },
          { t: 'Conversation learning (last 100)' },
          { t: 'A/B testing & optimization' },
          { t: 'Zapier integration' },
          { t: 'Chrome extension for lead capture' },
        ],
      },
      {
        h: 'Support & compliance',
        items: [
          { t: 'Priority email & chat support' },
          { t: '5,000 DNC scrubs per month included' },
          { t: 'Automatic opt-out detection. STOP and inferred opt-out language honored instantly' },
          { t: 'Built on TCPA-compliant infrastructure' },
        ],
      },
    ],
  },
  {
    slug: 'scale',
    name: 'Scale',
    desc: 'For high-volume operations running constant campaigns.',
    price: '$2,497',
    vol: '40,000 messages / mo',
    callout: 'Maximum intelligence. Learns from your last 1,000 conversations across every campaign.',
    popular: false,
    btn: 'btn-ghost',
    groups: [
      {
        h: 'Monthly limits',
        items: [
          {
            t: '40,000 SMS messages per month',
            sub: 'Each conversation uses ~4 to 8 messages (your outbound plus lead replies combined).',
          },
          {
            t: '2,000 website chat conversations per month',
            sub: 'Qualifies inbound website visitors 24/7.',
          },
          { t: '15+ team member accounts' },
        ],
      },
      {
        h: 'AI capabilities',
        items: [
          { t: 'Everything in Growth, plus:' },
          { t: 'Conversation learning (last 1,000)' },
          { t: 'Multiple personas & campaigns' },
          { t: 'Unlimited knowledge base uploads' },
        ],
      },
      {
        h: 'Support & compliance',
        items: [
          { t: 'White-glove onboarding' },
          { t: 'Dedicated success manager' },
          { t: '25,000 DNC scrubs per month included' },
          { t: 'Automatic opt-out detection. STOP and inferred opt-out language honored instantly' },
          { t: 'Built on TCPA-compliant infrastructure' },
        ],
      },
    ],
  },
];

const faqs = [
  {
    q: 'What happens if I exceed my message limit?',
    a: 'We email you as you approach your limit so there are no surprises. You approve any overage before it is added, and you can move up a plan at any time.',
  },
  {
    q: 'How is this different from text blasting tools?',
    a: 'Text blasters send identical messages to thousands of people and leave you to handle every reply. SurFox AI holds a real, qualifying conversation with each contact, reads intent, and only hands off the contacts genuinely ready to talk. You get fewer calls, but every one is worth taking.',
  },
  {
    q: 'When will I see my first qualified lead?',
    a: 'Most customers see their first qualified lead within 7 to 14 days, depending on your industry and the quality of your list. Real estate and B2B services typically see faster results.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Cancel anytime with 24 hours notice. No contracts, no cancellation fees. SurFox AI finishes any active conversations, then stops working new contacts.',
  },
  {
    q: 'Do you offer annual discounts?',
    a: 'We are focused on monthly pricing while we are early stage. Annual options may come later once we have proven consistent value.',
  },
];

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function PricingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const startTrial = (slug: Plan['slug']) => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    const aff = params.get('aff');
    const qs = new URLSearchParams();
    if (ref) qs.set('ref', ref);
    if (aff) qs.set('aff', aff);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    window.location.href = `/subscribe/${slug}${suffix}`;
  };

  return (
    <div className="sfx">
      {/* Header */}
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Pricing</span>
            <h2 className="disp">Pay for messages, not headcount.</h2>
            <p>
              Real conversational AI at SMB pricing. Every plan includes a 14-day free trial and the
              same AI that texts, qualifies, and books your leads.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pricing" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="price-grid">
            {plans.map((plan) => (
              <div className={`plan${plan.popular ? ' pop' : ''}`} key={plan.slug}>
                {plan.popular && <span className="pin">Most popular</span>}
                <div className="pname">{plan.name}</div>
                <div className="pdesc">{plan.desc}</div>
                <div className="price">
                  {plan.price}
                  <span> / mo</span>
                </div>
                <div className="vol">{plan.vol}</div>
                <div className="plan-callout">{plan.callout}</div>

                {plan.groups.map((group) => (
                  <div className="pgroup" key={group.h}>
                    <div className="pgroup-h">{group.h}</div>
                    <ul>
                      {group.items.map((item) => (
                        <li className={item.off ? 'off' : undefined} key={item.t}>
                          {item.off ? (
                            <X size={16} className="text-[#8A92A0]" />
                          ) : (
                            <Check size={16} className="text-[#0A7C8C]" />
                          )}
                          <span>
                            {item.t}
                            {item.sub && <span className="psub">{item.sub}</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="pbtn" style={{ marginTop: 28 }}>
                  <button
                    type="button"
                    className={`btn ${plan.btn}`}
                    onClick={() => startTrial(plan.slug)}
                  >
                    Start free trial
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="price-note">
            14-day free trial on every plan · Pre-approved Twilio A2P so you can text within minutes
          </p>
          <p
            className="price-note"
            style={{ marginTop: 8, textTransform: 'none', letterSpacing: 0 }}
          >
            DNC scrubbing is available on paid plans only and is not included during the 14-day free
            trial.
          </p>
        </div>
      </section>

      {/* What your investment covers */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div className="panel">
            <h2>What your investment covers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
              <div>
                <h3>Infrastructure & AI</h3>
                <ul>
                  <li>Advanced AI model hosting and processing</li>
                  <li>Secure cloud infrastructure and data storage</li>
                  <li>SMS and communication platform costs</li>
                  <li>99.9% uptime monitoring and maintenance</li>
                </ul>
              </div>
              <div>
                <h3>Product & support</h3>
                <ul>
                  <li>Ongoing AI model improvements</li>
                  <li>Customer support and onboarding</li>
                  <li>Security updates and compliance</li>
                  <li>New features and platform development</li>
                </ul>
              </div>
            </div>
            <div className="note">
              <b>Honest pricing.</b> We price on the actual cost of running the AI and the value it
              delivers, not arbitrary markup. Higher tiers cost more because the learning AI uses
              meaningfully more compute.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="sec-head">
            <span className="eyebrow">Pricing FAQ</span>
            <h2 className="disp">Questions, answered.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div className={`faq-item${isOpen ? ' open' : ''}`} key={faq.q}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown />
                  </button>
                  {isOpen && <div className="faq-a">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="contact-cta">
            <h2 className="disp">Questions about pricing?</h2>
            <p>Talk to our team about which plan fits your list.</p>
            <a className="btn btn-ink" href="mailto:sales@getsurfox.com">
              <Mail size={17} /> Email our sales team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
