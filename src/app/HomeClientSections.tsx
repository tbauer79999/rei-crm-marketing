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

export function HeroPhone() {
  const rootRef = useRef<HTMLDivElement>(null);
  // Keep "9:41" for SSR + first paint (hydration-safe), then show the viewer's
  // real local time and keep it ticking.
  const [clock, setClock] = useState('9:41');

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

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const thread = root.querySelector<HTMLElement>('.thread');
    const result = root.querySelector<HTMLElement>('.result');
    const phone = root.querySelector<HTMLElement>('.phone');
    if (!thread || prefersReduced) return; // static render stays fully visible

    const rows = Array.from(thread.querySelectorAll<HTMLElement>('.row'));
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));
    const toBottom = () => {
      thread.scrollTop = thread.scrollHeight; // instant, not smooth
    };

    // Hide everything past the first message up front (inline styles win the cascade).
    function arm() {
      rows.forEach((row, i) => {
        if (i === 0) return; // first message is on screen immediately
        row.style.display = 'none';
        const typing = row.querySelector<HTMLElement>('.typing');
        const bodyEl = row.querySelector<HTMLElement>('.msg.ai.body');
        if (typing && bodyEl) {
          typing.style.display = 'flex';
          bodyEl.style.display = 'none';
        }
        const tag = row.querySelector<HTMLElement>('.tag');
        if (tag) tag.style.opacity = '0';
      });
      if (result) result.style.opacity = '0';
    }

    function play() {
      let t = 700;
      rows.forEach((row, i) => {
        if (i === 0) return; // already visible
        const typing = row.querySelector<HTMLElement>('.typing');
        const bodyEl = row.querySelector<HTMLElement>('.msg.ai.body');
        const tag = row.querySelector<HTMLElement>('.tag');

        at(t, () => {
          row.style.display = 'flex';
          row.style.animation = 'sfxrise .42s ease';
          toBottom();
        });

        if (typing) {
          const len = bodyEl ? bodyEl.textContent!.length : 40;
          const dur = Math.max(620, Math.min(1180, len * 16));
          at(t + dur, () => {
            typing.style.display = 'none';
            if (bodyEl) {
              bodyEl.style.display = 'block';
              bodyEl.style.animation = 'sfxrise .3s ease';
            }
            toBottom();
          });
          t += dur + 470;
        } else {
          if (tag) {
            at(t + 240, () => {
              tag.style.opacity = '1';
              tag.style.animation = 'sfxrise .35s ease';
            });
          }
          t += 720;
        }
      });

      at(t + 260, () => {
        if (result) {
          result.style.opacity = '1';
          result.style.animation = 'sfxrise .5s ease';
        }
      });
    }

    arm();

    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      play();
    };

    let obs: IntersectionObserver | undefined;
    let safety: ReturnType<typeof setTimeout> | undefined;
    if ('IntersectionObserver' in window && phone) {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              obs?.disconnect();
              start();
            }
          });
        },
        { threshold: 0.01, rootMargin: '0px 0px -80px 0px' }
      );
      obs.observe(phone);
      safety = setTimeout(start, 2500); // never leave the chat hidden
    } else {
      start();
    }

    return () => {
      timers.forEach(clearTimeout);
      if (safety) clearTimeout(safety);
      obs?.disconnect();
    };
  }, []);

  return (
    <div className="hero-phone">
      <div className="convo-wrap" ref={rootRef}>
        {/* SurFox mascot peeking out from behind the phone */}
        <Image
          src="/images/peek1.png"
          alt="SurFox AI mascot"
          width={500}
          height={500}
          className="fox-peek"
          priority={false}
        />
        <div className="phone">
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

            <div className="convo-top">
              <div className="avatar">M</div>
              <div>
                <div className="nm">Marta R.</div>
                <div className="sub">Motivated seller · Maple St</div>
              </div>
              <span className="live">
                <i /> AI live
              </span>
            </div>

            <div className="thread">
              <div className="row">
                <div className="msg ai typing">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="msg ai body">
                  Hi Marta, Alex here with Brightway Homes. Saw you might consider an offer on the
                  Maple St house. Still open to it?
                </div>
              </div>
              <div className="row r">
                <span className="tag">reads intent</span>
                <div className="msg them body">Maybe. Depends what you&apos;re offering.</div>
              </div>
              <div className="row">
                <div className="msg ai typing">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="msg ai body">Fair. Ballpark, what number were you hoping for?</div>
              </div>
              <div className="row r">
                <span className="tag">captures price</span>
                <div className="msg them body">Around 240 if it&apos;s cash and quick</div>
              </div>
              <div className="row">
                <div className="msg ai typing">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="msg ai body">
                  That works on our end. Cash, no repairs, you pick the close date. Got 10 min
                  tomorrow to talk specifics?
                </div>
              </div>
              <div className="row r">
                <span className="tag">books call</span>
                <div className="msg them body">Yeah, after 5 is good</div>
              </div>
              <div className="row">
                <div className="msg ai typing">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="msg ai body">Booked you for 5:30. Talk then.</div>
              </div>
            </div>

            <div className="result">
              <div>
                <div className="hot">Hot · qualified</div>
                <div className="meta">Motivated · price captured · cash-ready · 3m 12s</div>
              </div>
              <div className="booked">
                <CheckIcon />
                <div>
                  <div className="b1">Call booked · 5:30 PM</div>
                  <div className="b2">Handed off to your team</div>
                </div>
              </div>
            </div>
          </div>
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
      'Faster than you think. When you sign up, you start a 14-day free trial and are immediately placed on our pre-approved Twilio A2P campaign, so you can start texting leads within minutes. During your trial, you register your own A2P campaign. By the time your trial ends, you own your sending infrastructure.',
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
