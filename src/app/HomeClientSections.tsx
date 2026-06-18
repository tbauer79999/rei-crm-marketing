'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* =============================================================================
   Homepage redesign ("Thread") client islands.
   - HeroPhone: the live SMS qualification that plays on load. The full thread is
     rendered statically (SSR-visible, no-JS friendly, reduced-motion friendly);
     on mount it hides messages 2+ and reveals them one at a time with typing
     indicators, instant auto-scroll, and a transform-only rise.
   - AnnotatedMoments: the three takeaways below the hero, revealed on scroll.
   - FAQSection: the existing FAQ, restyled to the new light design system.
   ============================================================================= */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12A150" strokeWidth="2.2">
      <path d="M8 7V3m8 4V3M3 11h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

/* Hero conversations. The phone frame, status bar, "AI live" badge, annotation
   pills, and "Call booked" card are identical across all three; only the
   conversation content below changes as the hero rotates every 5 seconds. */
type ConvRow =
  | { side: 'ai'; text: string }
  | { side: 'them'; tag: string; text: string };

type Conversation = {
  avatar: string;
  name: string;
  sub: string;
  rows: ConvRow[];
  meta: string;
  booked: string;
};

const conversations: Conversation[] = [
  {
    avatar: 'M',
    name: 'Marta R.',
    sub: 'Motivated seller · Maple St',
    rows: [
      {
        side: 'ai',
        text:
          'Hi Marta, Alex here with Brightway Homes. Saw you might consider an offer on the Maple St house. Still open to it?',
      },
      { side: 'them', tag: 'reads intent', text: "Maybe. Depends what you're offering." },
      { side: 'ai', text: 'Fair. Ballpark, what number were you hoping for?' },
      { side: 'them', tag: 'captures price', text: "Around 240 if it's cash and quick" },
      {
        side: 'ai',
        text:
          'That works on our end. Cash, no repairs, you pick the close date. Got 10 min tomorrow to talk specifics?',
      },
      { side: 'them', tag: 'books call', text: 'Yeah, after 5 is good' },
      { side: 'ai', text: 'Booked you for 5:30. Talk then.' },
    ],
    meta: 'Motivated · price captured · cash-ready · 3m 12s',
    booked: '5:30 PM',
  },
  {
    avatar: 'J',
    name: 'James K.',
    sub: 'Operations Manager · Metro Logistics',
    rows: [
      {
        side: 'ai',
        text:
          'Hi James, this is Surf with Apex Staffing. You submitted a request for temp-to-hire warehouse associates. Still looking to fill those roles?',
      },
      { side: 'them', tag: 'captures urgency', text: 'Yeah we need 3 by next Monday' },
      { side: 'ai', text: 'Got it. What shift and pay range are you working with?' },
      { side: 'them', tag: 'qualifies requirement', text: '6am-2pm, $18-20/hr' },
    ],
    meta: 'Urgent · pay captured · ready-to-hire · 4m 3s',
    booked: '4:00 PM',
  },
  {
    avatar: 'R',
    name: 'Rachel T.',
    sub: 'Homeowner · Oak Ridge Dr',
    rows: [
      {
        side: 'ai',
        text:
          'Hi Rachel, this is Surf with ProHome Services. You requested a quote for HVAC service. Still need someone out there?',
      },
      { side: 'them', tag: 'captures urgency', text: 'Yes, AC stopped working this morning' },
      {
        side: 'ai',
        text: 'Sorry to hear that. Are you the homeowner and is this your primary residence?',
      },
      { side: 'them', tag: 'qualifies intent', text: 'Yes and yes, need it fixed today if possible' },
    ],
    meta: 'Urgent · homeowner confirmed · same-day · 2m 48s',
    booked: '2:00 PM',
  },
];

const ROTATE_MS = 5000;
const FADE_MS = 400;

export function HeroPhone() {
  // Keep "9:41" for SSR + first paint (hydration-safe), then show the viewer's
  // real local time and keep it ticking.
  const [clock, setClock] = useState('9:41');

  // Rotation state: `shown` is the conversation on screen, `active` is the
  // target. When they differ we fade `shown` out, swap, then fade back in.
  const [shown, setShown] = useState(0);
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const format = () => {
      const d = new Date();
      const h = d.getHours() % 12 || 12;
      const m = d.getMinutes().toString().padStart(2, '0');
      return `${h}:${m}`;
    };
    setClock(format());
    const id = setInterval(() => setClock(format()), 1000);
    return () => clearInterval(id);
  }, []);

  // Auto-advance on a uniform cadence. Each time a conversation settles on
  // screen we schedule a single timer to move to the next one. Targeting an
  // absolute index off `shown` (rather than incrementing) keeps the dwell time
  // tied to what's displayed and makes any duplicate timer idempotent, so the
  // cadence stays even. Paused while hovered, and disabled for reduced motion
  // (those viewers get the first conversation statically and can use the dots).
  useEffect(() => {
    if (hovered) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const id = setTimeout(() => {
      setActive((shown + 1) % conversations.length);
    }, ROTATE_MS);
    return () => clearTimeout(id);
  }, [shown, hovered]);

  // Crossfade: fade the current conversation out, swap, then fade the next in.
  useEffect(() => {
    if (active === shown) return;
    setFading(true);
    const id = setTimeout(() => {
      setShown(active);
      setFading(false);
    }, FADE_MS);
    return () => clearTimeout(id);
  }, [active, shown]);

  const conv = conversations[shown];

  return (
    <div className="hero-phone">
      <div className="convo-wrap">
        {/* SurFox mascot peeking out from behind the phone */}
        <Image
          src="/images/peek1.png"
          alt="SurFox AI mascot"
          width={500}
          height={500}
          className="fox-peek"
          priority={false}
        />
        <div
          className="phone"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="screen">
            <div className="island" />
            <div className="statusbar">
              <span suppressHydrationWarning>{clock}</span>
              <span className="sig">
                <span className="bars">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
                <span className="batt">
                  <i />
                </span>
              </span>
            </div>

            <div className={`convo-body${fading ? ' is-fading' : ''}`}>
              <div className="convo-top">
                <div className="avatar">{conv.avatar}</div>
                <div>
                  <div className="nm">{conv.name}</div>
                  <div className="sub">{conv.sub}</div>
                </div>
                <span className="live">
                  <i /> AI live
                </span>
              </div>

              <div className="thread">
                {conv.rows.map((m, i) =>
                  m.side === 'ai' ? (
                    <div className="row" key={`${shown}-${i}`}>
                      <div className="msg ai body">{m.text}</div>
                    </div>
                  ) : (
                    <div className="row r" key={`${shown}-${i}`}>
                      <span className="tag">{m.tag}</span>
                      <div className="msg them body">{m.text}</div>
                    </div>
                  )
                )}
              </div>

              <div className="result">
                <div>
                  <div className="hot">Hot · qualified</div>
                  <div className="meta">{conv.meta}</div>
                </div>
                <div className="booked">
                  <CheckIcon />
                  <div>
                    <div className="b1">Call booked · {conv.booked}</div>
                    <div className="b2">Handed off to your team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="convo-dots" role="tablist" aria-label="Featured conversations">
          {conversations.map((c, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${c.name} conversation`}
              className={`convo-dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const moments = [
  {
    n: '01',
    title: 'Reads real intent',
    body: 'Not keyword matching. It knows "maybe" means keep going, not stop.',
  },
  {
    n: '02',
    title: 'Works the objection',
    body: 'Pulls out the number, frames the offer, and keeps momentum.',
  },
  {
    n: '03',
    title: 'Closes for the call',
    body: 'Books a real time on your calendar and hands off the transcript.',
  },
];

export function AnnotatedMoments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const items = Array.from(root.querySelectorAll<HTMLElement>('.an'));
    if (prefersReduced || !('IntersectionObserver' in window)) return; // stay visible

    items.forEach((el) => {
      el.style.opacity = '0';
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            obs.disconnect();
            items.forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.animation = 'sfxrise .5s ease';
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(root);

    return () => obs.disconnect();
  }, []);

  return (
    <div className="stage">
      <div className="wrap">
        <div className="annot" ref={ref}>
          {moments.map((m) => (
            <div className="an" key={m.n}>
              <div className="n">{m.n}</div>
              <h4>{m.title}</h4>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqItems = [
  {
    question:
      'How is SurFox AI different from text blasters like SmarterContact or Launch Control?',
    answer:
      'Text blasters send identical messages to thousands of contacts and rely on you to manually handle the replies. SurFox AI has real, qualifying conversations with each contact. It asks follow-up questions, handles objections, and flags only the contacts ready to talk. You get fewer calls, but every one is worth taking.',
  },
  {
    question: 'How does the 50-signal lead scoring work?',
    answer:
      "SurFox AI tracks up to 50 qualification signals across each conversation, things like response quality, engagement, buying intent, timing, and your own criteria. It isn't a score out of 50, the signals build a picture of how ready a lead is. As they strengthen, SurFox AI flags the lead as 'hot' and hands it to your sales team with the full transcript and a qualification summary.",
  },
  {
    question: "What happens when a lead becomes 'hot'?",
    answer:
      "Your sales team receives an instant notification with the lead's full conversation history, contact details, and score breakdown. The handoff is seamless, your closer has everything they need to pick up the conversation with full context and close the deal.",
  },
  {
    question: "Can I customize the AI's tone and scoring threshold?",
    answer:
      "Yes. You can adjust the AI's persona (professional, casual, consultative) to match your brand, and set the score threshold for what counts as a hot lead. The AI's logic continuously improves based on conversation outcomes.",
  },
  {
    question: 'How does the knowledge base work?',
    answer:
      'Upload PDFs, pricing sheets, case studies, or FAQs. The AI automatically indexes them and references the content during conversations to answer prospect questions accurately. Update your docs and the AI picks it up immediately, no retraining.',
  },
  {
    question: 'Is SurFox AI TCPA compliant?',
    answer:
      'SurFox AI is built with TCPA compliance in mind, opt-in verification, clear sender identification, automated opt-out handling, and full conversation logging. We recommend consulting your legal team to confirm your specific use case.',
  },
  {
    question: 'How fast can I get started?',
    answer:
      'Most of the setup happens the day you sign up. You configure your AI, knowledge base, and conversation flow in well under an hour. The one external step is A2P messaging registration, which carriers typically approve in 7 to 10 days. The day your A2P is approved, your messaging unlocks and the AI starts texting and qualifying leads. Your 30-day money-back guarantee clock starts on that approval date, so the registration wait never counts against you.',
  },
];

function Chevron() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section>
      <div className="wrap">
        <div className="faq-grid">
          <aside className="faq-aside">
            <span className="eyebrow">FAQ</span>
            <h2 className="disp">
              Questions we <em>get asked a lot.</em>
            </h2>
            <p>Everything you need to know about SurFox AI. Can&apos;t find your answer? Talk to our team.</p>
            <a className="btn btn-ghost" href="/contact">
              Contact sales
            </a>
          </aside>

          <div className="faq-list">
            {faqItems.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq-item${isOpen ? ' open' : ''}`} key={i}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{faq.question}</span>
                    <Chevron />
                  </button>
                  {isOpen && <div className="faq-a">{faq.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
