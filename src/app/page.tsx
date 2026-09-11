import { Metadata } from 'next';
import Image from 'next/image';
import { HeroPhone, AnnotatedMoments, FAQSection } from './HomeClientSections';
import { SOFTWARE_APP_DESCRIPTION } from '@/data/page-metadata';
import ProofResults from './components/ProofResults';
import './home.css';

export const metadata: Metadata = {
  // Stored fully branded: the root layout's `%s | SurFox AI` template does not apply to the
  // root segment's own page, so this string renders as-is.
  title: 'SurFox AI | AI Lead Qualification for SMS & Website Chat',
  description:
    'SurFox AI qualifies leads over SMS and website chat, then books the call. Upload your list or add the chat widget to your site and watch cold leads and website visitors become booked calls.',
  keywords: [
    'SMS lead qualification',
    'website chat lead qualification',
    'AI lead qualification software',
    'automated lead qualification',
    'AI SMS for real estate',
    'AI SMS for staffing',
    'cold list activation',
    'speed to lead AI',
    'real estate wholesaler SMS',
    'conversational AI SMS',
    'AI text qualification',
    'lead scoring software',
  ],
  openGraph: {
    title: 'SurFox AI | AI Lead Qualification for SMS & Website Chat',
    description:
      'SurFox AI qualifies leads over SMS and website chat, then books the call. Same AI, two places for leads to start.',
    url: 'https://www.getsurfox.com',
    type: 'website',
    siteName: 'SurFox AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurFox AI | AI Lead Qualification for SMS & Website Chat',
    description:
      'SurFox AI qualifies leads over SMS and website chat, then books the call. Same AI, two places for leads to start.',
  },
  alternates: {
    canonical: 'https://www.getsurfox.com',
  },
};

// Cyan-deep check used in the pricing feature lists.
function FeatureCheck() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0A7C8C" strokeWidth="2.6">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const plans = [
  {
    name: 'Starter',
    desc: 'For operators testing the waters on a focused list.',
    price: '$147',
    vol: '2,000 SMS + 200 website chats / mo',
    features: [
      'AI conversation engine',
      '50 qualification signals tracked',
      'Knowledge base upload',
      'Google & Outlook calendar booking',
    ],
    btn: 'btn-ghost',
    href: '/subscribe/starter',
    popular: false,
  },
  {
    name: 'Growth',
    desc: 'For teams ready to work a full list every month.',
    price: '$597',
    vol: '10,000 SMS + 500 website chats / mo',
    features: [
      'Everything in Starter',
      'Conversation learning (last 100)',
      'A/B testing & optimization',
      'Zapier integration',
    ],
    btn: 'btn-cyan',
    href: '/subscribe/growth',
    popular: true,
  },
  {
    name: 'Growth Plus',
    desc: 'Full Scale intelligence, sized for a 25,000 message month.',
    price: '$1,497',
    vol: '25,000 SMS + 2,000 website chats / mo',
    features: [
      'Everything in Growth',
      'Conversation learning (last 1,000)',
      'Multiple personas & campaigns',
      'Unlimited knowledge base uploads',
    ],
    btn: 'btn-ghost',
    href: '/subscribe/growth_plus',
    popular: false,
  },
  {
    name: 'Scale',
    desc: 'For high-volume operations running constant campaigns.',
    price: '$2,497',
    vol: '40,000 SMS + 5,000 website chats / mo',
    features: [
      'Everything in Growth Plus',
      'Conversation learning (last 1,000)',
      'Multiple personas & campaigns',
      'Priority support',
    ],
    btn: 'btn-ghost',
    href: '/subscribe/scale',
    popular: false,
  },
];

export default function Page() {
  return (
    <div className="sfx">
      {/* Organization + LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['Organization', 'LocalBusiness'],
            name: 'SurFox AI',
            legalName: 'SurFox AI, Inc.',
            url: 'https://www.getsurfox.com',
            logo: 'https://www.getsurfox.com/newSurFoxLogo1.png',
            foundingDate: '2024',
            description:
              'AI-powered SMS lead qualification platform that automatically engages, scores, and qualifies cold leads at scale',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Orlando',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'sales',
              email: 'sales@getsurfox.com',
              availableLanguage: ['English'],
            },
            sameAs: [
              'https://www.linkedin.com/company/surfoxai',
            ],
            founder: {
              '@type': 'Person',
              name: 'Tom Bauer',
              url: 'https://www.getsurfox.com/leadership',
            },
            areaServed: {
              '@type': 'Country',
              name: 'United States',
            },
          }),
        }}
      />

      {/* SoftwareApplication schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'SurFox AI',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '147',
              description: 'Plans start from $147/month',
              url: 'https://www.getsurfox.com/pricing',
            },
            operatingSystem: 'Web Browser',
            description: SOFTWARE_APP_DESCRIPTION,
          }),
        }}
      />

      {/* FAQPage schema - enables FAQ rich results in Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How is SurFox AI different from tools that only blast or only chat?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most tools pick one lane. Text blasters like SmarterContact or Launch Control send identical messages to thousands of contacts and rely on you to manually handle the replies. Chat-only tools like Qualified or Spara only work the visitors who show up and open a widget on your site. SurFox AI has real, qualifying conversations with each lead, whether it starts over SMS or website chat. It asks follow-up questions, handles objections, and flags only the contacts ready to talk. You get fewer calls, but every one is worth taking.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the 50-signal lead scoring work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "SurFox AI tracks up to 50 qualification signals across each conversation, things like response quality, engagement, buying intent, timing, and your own criteria. It isn't a score out of 50, the signals build a picture of how ready a lead is. As they strengthen, SurFox AI flags the lead as 'hot' and hands it to your sales team with the full transcript and a qualification summary.",
                },
              },
              {
                '@type': 'Question',
                name: "What happens when a lead becomes 'hot'?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Your sales team gets notified immediately via your preferred channel (email, Slack, CRM). The AI steps back and provides a full conversation transcript, qualification summary, and key insights - so your team walks into a warm, informed call.',
                },
              },
              {
                '@type': 'Question',
                name: "Can I customize the AI's tone and scoring threshold?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. You can adjust the AI's persona (professional, casual, consultative) to match your brand, and set the score threshold for what counts as a hot lead. The AI's logic continuously improves based on conversation outcomes.",
                },
              },
              {
                '@type': 'Question',
                name: 'How does the knowledge base work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Upload PDFs, pricing sheets, case studies, or FAQs. The AI automatically indexes them and references the content during conversations to answer prospect questions accurately. Update your docs and the AI picks it up immediately - no retraining.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is SurFox AI TCPA compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'SurFox AI is built with TCPA compliance in mind - opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can I get started?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most of the setup happens the day you sign up. You configure your AI, knowledge base, and conversation flow in well under an hour. The one external step is A2P messaging registration, which carriers typically approve in 7 to 10 days. The day your A2P is approved, your messaging unlocks and the AI starts texting and qualifying leads. Your 30-day money-back guarantee clock starts on that approval date, so the registration wait never counts against you.',
                },
              },
            ],
          }),
        }}
      />

      {/* HERO - left copy server-rendered for LCP, right phone is the client island */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-badges">
              <span className="chip">SMS</span>
              <span className="chip-sep">·</span>
              <span className="chip">Website chat</span>
            </div>
            <h1 className="disp">
              Cold leads become <em>calendar holds,</em> without the chase.
            </h1>
            <p className="lede">
              SMS when the lead arrives. Website chat when they browse. You show up to the call.
            </p>
            <p className="capsule">
              SurFox AI qualifies on your list and on your site. Same AI job, two doors in. Runs
              24/7.
            </p>
            <div className="hero-cta">
              <a className="btn btn-ink" href="#pricing">
                Start today
              </a>
              <a className="btn btn-ghost" href="#pricing">
                See pricing →
              </a>
            </div>
          </div>
          <HeroPhone />
        </div>
      </section>

      {/* DUAL DEMO STRIP - SMS thread and web chat widget, side by side */}
      <section className="dual-demo" id="channels">
        <div className="wrap">
          <div className="dual-grid">
            <div className="dual-card" id="sms">
              <span className="dual-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                SMS
              </span>
              <div className="mini-phone-frame">
                <div className="mini-phone">
                  <div className="mini-notch" />
                  <div className="mini-top">
                    <div className="mini-avatar">M</div>
                    <div>
                      <div className="mini-name">Marta R.</div>
                      <div className="mini-sub">Motivated seller · Maple St</div>
                    </div>
                    <span className="mini-live" />
                  </div>
                  <div className="mini-thread">
                    <div className="mini-msg ai">
                      Hi Marta, still open to an offer on the Maple St house?
                    </div>
                    <div className="mini-msg them">Maybe. Depends what you&apos;re offering.</div>
                    <div className="mini-msg ai">Fair. Ballpark, what number were you hoping for?</div>
                    <div className="mini-msg them">Around 240 if it&apos;s cash and quick.</div>
                    <div className="mini-msg ai">
                      That works. Got 10 min tomorrow to talk specifics?
                    </div>
                    <div className="mini-msg them">Yeah, after 5 is good.</div>
                  </div>
                </div>
              </div>
              <div className="mini-outcome">
                <span className="mo-dot" /> Hot · qualified <span className="mo-sep">·</span> Call
                booked 5:30 PM
              </div>
            </div>
            <div className="dual-card" id="web-chat">
              <span className="dual-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                Website chat
              </span>
              <div className="mini-browser">
                <div className="mini-bbar">
                  <i className="tl-red" />
                  <i className="tl-yellow" />
                  <i className="tl-green" />
                  <span className="mini-burl">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                    </svg>
                    yoursite.com
                  </span>
                </div>
                <div className="mini-page">
                  <div className="mini-page-skel">
                    <div className="sk-bar sk-w1" />
                    <div className="sk-bar sk-w2" />
                  </div>
                  <div className="mini-widget">
                    <div className="mini-widget-top">
                      <span className="mini-widget-avatar">S</span>
                      <span>Chat with us</span>
                      <span className="mini-live" />
                    </div>
                    <div className="mini-thread">
                      <div className="mini-msg ai">Hi! Looking for a quote or just browsing?</div>
                      <div className="mini-msg them">Need someone out this week if possible.</div>
                      <div className="mini-msg ai">
                        Got it, what&apos;s the best number to text you the details?
                      </div>
                      <div className="mini-msg them">555-0148</div>
                      <div className="mini-msg ai">Perfect, sending a couple time slots now.</div>
                      <div className="mini-msg them">Sounds good, thanks!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mini-outcome">
                <span className="mo-dot" /> Hot · qualified <span className="mo-sep">·</span>{' '}
                Handed to sales
              </div>
            </div>
          </div>
          <p className="dual-caption">Same job. Two places leads start.</p>
        </div>
      </section>

      {/* ANNOTATED MOMENTS */}
      <AnnotatedMoments />

      {/* SOCIAL PROOF / RESULTS */}
      <ProofResults />

      {/* QUIET STATS */}
      <section className="quiet">
        <div className="wrap qrow">
          <div className="q">
            <div className="n">
              100<span>%</span>
            </div>
            <div className="l">of your list, worked</div>
          </div>
          <div className="q">
            <div className="n">50</div>
            <div className="l">signals tracked per thread</div>
          </div>
          <div className="q">
            <div className="n">
              24<span>/7</span>
            </div>
            <div className="l">follow-up, no headcount</div>
          </div>
          <div className="q">
            <div className="n">$147</div>
            <div className="l">to start, not $1,000</div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="wrap">
          <h2 className="disp">
            A text blaster <span className="send">sends.</span>
            <br />
            SurFox AI <span className="sell">sells.</span>
          </h2>
          <p>
            Blasting the same message to thousands isn&apos;t selling. Holding the conversation that
            books the call is.
          </p>
        </div>
      </section>

      {/* LEARN OVER TIME */}
      <div className="learn">
        <div className="wrap">
          <div className="learn-card">
            <div>
              <span className="eyebrow">Compounding advantage</span>
              <h2 className="disp">
                Every conversation makes the next one <em>smarter.</em>
              </h2>
              <p>
                SurFox AI studies what actually moves your leads, the phrasing that earns replies, the
                objections that stall, the moments people say yes, and folds it back into the next
                campaign. The longer it runs on your list, the sharper it gets.
              </p>
              <div className="micro">
                Growth learns from your last 100 conversations · Scale from your last 1,000.
              </div>
            </div>
            <div className="compound">
              <div className="clab">
                <span>Qualified rate</span>
                <span>↑ over time</span>
              </div>
              <div className="barset">
                <div className="bar b1" />
                <div className="bar b2" />
                <div className="bar b3" />
                <div className="bar b4">
                  <span>best yet</span>
                </div>
              </div>
              <div className="axis">
                <span>Campaign 1</span>
                <span>Campaign 4</span>
                <span>Campaign 8</span>
                <span>Campaign 12</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT - control room */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The control room</span>
            <h2 className="disp">Every conversation, in one place.</h2>
            <p>
              Watch the AI work in real time, set its persona and threshold, and step in whenever you
              want.
            </p>
          </div>
        </div>
        <div className="wrap">
          <div className="browser">
            <div className="bbar">
              <i />
              <i />
              <i />
              <span className="burl">app.getsurfox.com/control-room</span>
            </div>
            <Image
              src="/images/AI-controlroom.png"
              alt="SurFox AI control room showing live conversations, lead scores, and persona controls"
              width={1908}
              height={902}
              className="w-full h-auto"
              sizes="(max-width: 980px) 100vw, 980px"
            />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Pricing</span>
            <h2 className="disp">Pay for messages, not headcount.</h2>
            <p>
              Real conversational AI at SMB pricing. Every plan is backed by a 30-day money-back guarantee.
            </p>
          </div>
          <div className="price-grid">
            {plans.map((plan) => (
              <div className={`plan${plan.popular ? ' pop' : ''}`} key={plan.name}>
                {plan.popular && <span className="pin">Most popular</span>}
                <div className="pname">{plan.name}</div>
                <div className="pdesc">{plan.desc}</div>
                <div className="price">
                  {plan.price}
                  <span> / mo</span>
                </div>
                <div className="vol">{plan.vol}</div>
                <ul className="pfeat">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <FeatureCheck /> {f}
                    </li>
                  ))}
                </ul>
                <div className="pbtn">
                  <a className={`btn ${plan.btn}`} href={plan.href}>
                    Start today
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="price-note">
            30-day money-back guarantee. No setup fees. No risk.
          </p>
          <p className="price-note">
            When you hit your website chat limit, new chats pause until your next billing cycle
            (or you upgrade). Cost stays predictable.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      <section style={{ paddingTop: 8 }}>
        <div className="wrap cta">
          <h2 className="disp">
            The buyers are on your
            <br />
            list <em>right now.</em>
          </h2>
          <p>Upload a list and let SurFox AI work the first conversations for you.</p>
          <a
            className="btn btn-cyan"
            href="#pricing"
            style={{ padding: '14px 28px', fontSize: 15 }}
          >
            Start today
          </a>
        </div>
      </section>
    </div>
  );
}
