import { Metadata } from 'next';
import Image from 'next/image';
import { HeroPhone, AnnotatedMoments, FAQSection } from './HomeClientSections';
import ProofResults from './components/ProofResults';
import './home.css';

export const metadata: Metadata = {
  title: 'SMS Lead Qualification at SMB Pricing',
  description:
    'No human touched this conversation. SurFox AI texts, qualifies, and books your leads autonomously over SMS. Upload your list and watch cold leads become booked calls.',
  keywords: [
    'SMS lead qualification',
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
    title: 'SurFox AI | SMS Lead Qualification at SMB Pricing',
    description:
      'No human touched this conversation. SurFox AI texts, qualifies, and books your leads autonomously over SMS.',
    url: 'https://www.getsurfox.com',
    type: 'website',
    siteName: 'SurFox AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SurFox AI | SMS Lead Qualification at SMB Pricing',
    description:
      'No human touched this conversation. SurFox AI texts, qualifies, and books your leads autonomously over SMS.',
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
    vol: '2,000 messages / mo',
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
    vol: '10,000 messages / mo',
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
    name: 'Scale',
    desc: 'For high-volume operations running constant campaigns.',
    price: '$2,497',
    vol: '40,000 messages / mo',
    features: [
      'Everything in Growth',
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
            description:
              'AI-powered SMS lead qualification platform - upload cold leads, let AI engage and qualify them, your team only talks to hot prospects',
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
                name: 'How is SurFox AI different from text blasters like SmarterContact or Launch Control?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Text blasters send identical messages to thousands of contacts and rely on you to manually handle the replies. SurFox AI has real, qualifying conversations with each contact. It asks follow-up questions, handles objections, and flags only the contacts ready to talk. You get fewer calls, but every one is worth taking.',
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
            <span className="eyebrow">Conversational AI for SMS</span>
            <h1 className="disp">
              This is a cold lead becoming a <em>booked call.</em>
            </h1>
            <p className="lede">
              No human touched this conversation. SurFox AI texted, qualified, and booked, while you
              were doing something else.
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
