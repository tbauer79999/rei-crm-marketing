'use client';

// The self-serve demo at /demo. Surf asks the visitor's name, website, email, US mobile number and how they heard about us, texts a
// one-time code, and ONLY after the right code is entered reads the site and builds a real demo account from it (through
// /api/demo/start, /verify and /resend-code, which forward to the lead-app). The login arrives by email as a one-time link, and the
// in-app Surf picks up from there. The earlier scripted page is kept at /demo_old.

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Loader2, Mail, X } from 'lucide-react';

// Cloudflare Turnstile. Off (no widget, no token) until the site key is set.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

declare global {
  interface Window {
    turnstile?: {
      render: (el: string | HTMLElement, o: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
  }
}

type StartResult =
  | { kind: 'sent'; token: string; last4: string }
  | { kind: 'error'; code: string; message: string; field: string };
type VerifyResult =
  | { kind: 'building'; token: string }
  | { kind: 'error'; code: string; message: string };

const GENERIC_ERROR = 'Something went wrong on our side. Please try again in a minute.';

async function postJson(path: string, body: unknown): Promise<{ ok: boolean; status: number; j: Record<string, unknown> }> {
  try {
    const res = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const j = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, j: j && typeof j === 'object' ? j : {} };
  } catch {
    return { ok: false, status: 0, j: {} };
  }
}
const errorOf = (j: Record<string, unknown>) => ({
  code: String(j.error ?? 'FAILED'),
  message: String(j.message ?? GENERIC_ERROR),
  field: typeof j.field === 'string' ? j.field : '',
});

// Step 1: the form. The server decides everything (bot check, duplicates, the phone screen: US mobile only) and sends the text code.
// Nothing is built or read yet; this only reports what happened in words Surf can say.
async function startSignup(body: {
  name: string; email: string; website: string; phone: string; heard_from: string; heard_other: string; affiliate_src: string;
  turnstile_token: string; hp: string;
}): Promise<StartResult> {
  const r = await postJson('/api/demo/start', body);
  if (r.ok && r.j.status === 'code_sent' && typeof r.j.token === 'string') return { kind: 'sent', token: r.j.token, last4: String(r.j.phone_last4 ?? '') };
  return { kind: 'error', ...errorOf(r.j) };
}

// Step 2: the code. Only the right code makes the server build the workspace.
async function verifyCode(body: { token: string; phone: string; code: string }): Promise<VerifyResult> {
  const r = await postJson('/api/demo/verify', body);
  if (r.ok && r.j.status === 'building' && typeof r.j.token === 'string') return { kind: 'building', token: r.j.token };
  const e = errorOf(r.j);
  return { kind: 'error', code: e.code, message: e.message };
}

async function resendCode(body: { token: string; phone: string }): Promise<{ ok: boolean; message: string }> {
  const r = await postJson('/api/demo/resend-code', body);
  if (r.ok && r.j.ok === true) return { ok: true, message: '' };
  return { ok: false, message: errorOf(r.j).message };
}

// What the server says about the real build. building | needs_input (it wants two quick answers) | ready | down (the system could not build
// it; the visitor's one demo is unused). null = the server could not be reached (not the same as "failed": keep asking).
type BuildView = { state: 'building' | 'needs_input' | 'ready' | 'down'; company: string | null; generic: boolean; loginEmail: 'sent' | 'failed' | null };
async function fetchState(token: string): Promise<BuildView | null> {
  try {
    const res = await fetch(`/api/demo/status?token=${encodeURIComponent(token)}`, { cache: 'no-store' });
    if (res.status === 404) return { state: 'down', company: null, generic: false, loginEmail: null }; // the sign-up is gone (cleaned up): nothing to wait for
    if (!res.ok) return null;
    const j = await res.json();
    const state = j?.state === 'ready' || j?.state === 'needs_input' || j?.state === 'down' ? j.state : 'building';
    return {
      state,
      company: typeof j?.company === 'string' ? j.company : null,
      generic: j?.generic === true,
      loginEmail: j?.login_email === 'sent' || j?.login_email === 'failed' ? j.login_email : null,
    };
  } catch {
    return null;
  }
}

// The two answers asked when neither read of the site worked. The server builds from them.
async function sendAnswers(token: string, sells: string, leads: string): Promise<{ ok: boolean; message: string }> {
  const r = await postJson('/api/demo/answers', { token, sells, leads });
  if (r.ok) return { ok: true, message: '' };
  return { ok: false, message: errorOf(r.j).message };
}

// How long the status can be unreachable before the page says so. A URL parameter (?dxlost=milliseconds) only changes this wait.
function lostAfterMs(): number {
  try {
    const v = Number(new URLSearchParams(window.location.search).get('dxlost'));
    return Number.isFinite(v) && v >= 1000 ? v : 120000;
  } catch {
    return 120000;
  }
}

// Email the sign-in link again. The link itself never comes back to the browser: the only way in is the email, so every demo belongs
// to someone who can read the inbox they typed.
async function resendLogin(token: string): Promise<{ ok: boolean; message: string }> {
  const fallback = 'I could not send it just now. Please try again in a minute.';
  try {
    const res = await fetch('/api/demo/resend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });
    const j = await res.json().catch(() => ({}));
    if (res.ok && j?.ok === true) return { ok: true, message: '' };
    return { ok: false, message: typeof j?.message === 'string' && j.message ? j.message : fallback };
  } catch {
    return { ok: false, message: fallback };
  }
}

const PILLARS = [
  'Operations',
  'Industry',
  'Audience',
  'Qualification',
  'Voice & Guardrails',
  'Objections',
  'Conversion Goal',
] as const;

type Phase = 'intro' | 'chat' | 'build' | 'ready';
type InputMode = 'name' | 'website' | 'describe' | 'confirm' | 'email' | 'phone' | 'heard' | 'code' | null;
type Message =
  | { id: number; from: 'surf' | 'you'; text: string }
  | { id: number; from: 'deal' };

// Plain statement of the arrangement. Draft copy; Tom to confirm each line is true.
const DEAL_ROWS: [string, string][] = [
  ['What I need', "Your name, website, email and a US mobile number. I text you one code to confirm it's you."],
  ['What I do', 'Read your site, build a workspace around your business, and send you a login.'],
  ['What you do', 'Log in, talk to your own AI, and judge it yourself.'],
  ['What I will not do', "Pitch you. If it's not for you, close the tab."],
];

// Shown on the build screen as each pillar is worked on: what it is, and why it matters for THIS
// business. Deliberately written around their company and industry: nothing here is a template.
function pillarCopy(company: string, industry: string): [string, string][] {
  const biz = company && company !== 'Your business' ? company : 'your business';
  const market = industry || 'your market';
  return [
    [
      `How ${biz} runs: what you sell, where you work, and when you are available.`,
      'So your AI never promises something you cannot deliver.',
    ],
    [
      `The language of ${market}.`,
      'A roofing lead and a mortgage lead ask different questions. Yours gets the questions that fit your market.',
    ],
    [
      `Who ${biz} talks to and what they usually want.`,
      'The same message does not work on a first-time buyer and a repeat customer, so it is written for yours.',
    ],
    [
      `The questions that tell a serious lead for ${biz} from a casual one.`,
      'This is what keeps your team from chasing people who were never going to buy.',
    ],
    [
      `How ${biz} sounds, and the lines it will never cross.`,
      'It speaks as your business, and it knows what it must never say or promise.',
    ],
    [
      'How it answers "not interested" and "how much?" without pushing.',
      'Pushback is normal. How the AI handles it decides whether the conversation continues.',
    ],
    [
      'What a win looks like, for example a booked call or a handoff to you.',
      'Everything above works toward this one outcome, so the AI knows when to stop talking and hand off.',
    ],
  ];
}

// Time each pillar stays highlighted while it builds. The card shows one short line, and the
// visitor can tap any pillar to read more, so this does not need to be slow. In the real build a
// pillar locks when its work is actually done; this is only the minimum it should be shown for.
const PILLAR_DWELL_MS = 3000;

// What makes this different, stated as mechanics the visitor is about to see for themselves.
// Draft copy. Each line describes real platform behavior; Tom to confirm before launch.
const DIFFERENCES: [string, string][] = [
  ['Tested before it goes live', 'A text campaign cannot switch on until you have run it through test conversations that reach a real outcome.'],
  ['You see the reasoning', 'Every AI reply in a test comes with an explanation of why it said that.'],
  ['Built from your business', 'Your campaigns are written from your own site, not copied from a template.'],
];

const WHY_I_ASK: Record<'name' | 'website' | 'describe' | 'email' | 'phone' | 'heard' | 'code', string> = {
  name: 'Why I ask: so I know who I am talking to.',
  website: 'Why I ask: so I can build campaigns around your actual business.',
  describe: 'Why I ask: so I can build campaigns around your actual business.',
  email: 'Why I ask: to send you your login.',
  phone: 'Why I ask: to text you one code, so I know you are a real person. Message and data rates may apply.',
  heard: 'Why I ask: so I know which of our efforts reach people.',
  code: 'The text can take a few seconds to arrive.',
};

// "How did you hear about us". The key is what the server stores; the label is what the visitor reads.
const HEARD_OPTIONS: [string, string][] = [
  ['youtube', 'YouTube review or creator'],
  ['google', 'Google search'],
  ['ai_assistant', 'AI assistant (ChatGPT, Claude, Perplexity, etc.)'],
  ['linkedin', 'LinkedIn'],
  ['referral', 'Referred by a friend or colleague'],
  ['directory', 'Directory or review site (G2, etc.)'],
  ['other', 'Other'],
];

// Partner links carry ?src=aud-<name>. Captured silently (from this page's own URL, or the cookie the site sets on first landing)
// so the visitor never has to say it; the server checks the shape again.
const AUDIENCE_SRC = /^aud-[a-z0-9][a-z0-9_-]{0,59}$/i;
function audienceSrc(): string {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('src') ?? '';
    if (AUDIENCE_SRC.test(fromUrl)) return fromUrl.toLowerCase();
    const m = document.cookie.match(/(?:^|;\s*)surfox_src=([^;]+)/);
    const fromCookie = m ? decodeURIComponent(m[1]) : '';
    return AUDIENCE_SRC.test(fromCookie) ? fromCookie.toLowerCase() : '';
  } catch {
    return '';
  }
}

// A US number is 10 digits (a leading 1 is fine). The server does the real check; this only catches obvious typos before a round trip.
function looksLikeUsPhone(raw: string): boolean {
  const d = raw.replace(/\D/g, '');
  return d.length === 10 || (d.length === 11 && d.startsWith('1'));
}

const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

// What the code step answers with when the visitor presses "Send a new code" instead of typing a code.
const RESEND_CODE = '__resend__';

function cleanDomain(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split(/[/?#]/)[0];
}

type ScanResult = { ok: true; company: string; industry: string; summary: string } | { ok: false; pageRead: boolean; busy?: boolean }; // busy: the site itself asked us to slow down (HTTP 429)

// Reads the visitor's website. Only called AFTER the phone code was verified (the server refuses it otherwise).
// Nobody waits long on this: if it is not back in a few seconds the conversation carries on and the result is picked up later.
async function fetchScan(url: string, token: string): Promise<ScanResult> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25000);
  try {
    const res = await fetch('/api/demo/scan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, token }),
      signal: ctrl.signal,
    });
    const j = await res.json();
    if (j?.ok && typeof j.summary === 'string' && j.summary) {
      return { ok: true, company: String(j.company ?? ''), industry: String(j.industry ?? ''), summary: j.summary };
    }
    return { ok: false, pageRead: j?.pageRead === true, busy: j?.error === 'SITE_BUSY' }; // pageRead: the site was read and only the summary failed
  } catch {
    return { ok: false, pageRead: false };
  } finally {
    clearTimeout(timer);
  }
}

function companyFromDomain(domain: string): string {
  return domain
    .split('.')[0]
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ───────────────────────────── visuals ───────────────────────────── */

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 100,
  size: 1 + (i % 3),
  delay: (i % 7) * 0.9,
  dur: 9 + (i % 5) * 2.5,
}));

// The backdrop never changes between screens. An earlier version sped up the floor glow while
// building; changing an animation's duration restarts it, which showed up as a flicker.
function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, #07142b 0%, #030812 55%, #02050d 100%)',
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-70" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dx-hex" width="56" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
              fill="none"
              stroke="#22d3ee"
              strokeOpacity="0.07"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="dx-hex-fade" cx="50%" cy="55%" r="65%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="dx-hex-mask">
            <rect width="100%" height="100%" fill="url(#dx-hex-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dx-hex)" mask="url(#dx-hex-mask)" />
      </svg>
      <div
        className="dx-floor absolute left-1/2 bottom-[-18%] h-[55%] w-[120%] -translate-x-1/2 rounded-[50%]"
        style={{
          background:
            'radial-gradient(closest-side, rgba(34,211,238,0.30), rgba(15,182,201,0.10) 55%, transparent 100%)',
        }}
      />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="dx-particle absolute rounded-full bg-cyan-300"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}

function Fox({ className = '', priority = false }: { className?: string; priority?: boolean }) {
  return (
    <div className={`dx-float relative ${className}`}>
      <div
        className="dx-glow absolute inset-[8%] rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(34,211,238,0.35), transparent 100%)',
        }}
        aria-hidden="true"
      />
      <Image
        src="/images/full_body_mirrored1.png"
        alt="Surf, the SurFox AI guide"
        width={819}
        height={819}
        priority={priority}
        className="relative h-full w-full object-contain"
        style={{ filter: 'drop-shadow(0 0 26px rgba(34,211,238,0.35))' }}
      />
    </div>
  );
}

/* ───────────────────────────── chat pieces ───────────────────────────── */

function TypedText({ text, onDone }: { text: string; onDone: () => void }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? text.length : 0);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    if (reduce) {
      doneRef.current();
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) {
        clearInterval(t);
        doneRef.current();
      }
    }, 17);
    return () => clearInterval(t);
  }, [text, reduce]);

  return (
    <>
      {text.slice(0, n)}
      {n < text.length && <span className="dx-caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-cyan-300" />}
    </>
  );
}


/* The real build takes a minute or two after the seven pillars have finished locking in. This keeps the screen visibly alive for
   that wait: a moving indicator, a line that changes as time passes (worded to match what the build is doing, in its real order),
   and an honest note if it runs long. No progress bar: we cannot know the real percentage. */
const BUILD_LINES: { from: number; text: string }[] = [
  { from: 0, text: 'Building your workspace...' },
  { from: 25, text: 'Writing your campaign from what I read on your site...' },
  { from: 55, text: 'Writing example leads and conversations for your business...' },
  { from: 90, text: 'Checking everything over...' },
  { from: 130, text: 'Almost there. Getting your login ready...' },
  { from: 180, text: 'Taking a little longer than usual. I am still working on it...' },
];

function BuildingStatus({ since, reduce }: { since: number; reduce: boolean | null }) {
  const [elapsed, setElapsed] = useState(() => Math.max(0, Math.floor((Date.now() - since) / 1000)));
  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.max(0, Math.floor((Date.now() - since) / 1000))), 1000);
    return () => clearInterval(t);
  }, [since]);
  const line = [...BUILD_LINES].reverse().find((l) => elapsed >= l.from) ?? BUILD_LINES[0];
  return (
    <div className="flex flex-col items-center gap-2" role="status" aria-live="polite">
      <div className="flex items-center gap-2.5">
        <Loader2 className="h-4 w-4 animate-spin text-cyan-300 motion-reduce:animate-none" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.p
            key={line.text}
            className="text-sm text-slate-200"
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -4 }}
            transition={{ duration: 0.35 }}
          >
            {line.text}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="h-[3px] w-40 overflow-hidden rounded-full bg-slate-700/60" aria-hidden="true">
        <div className="dx-sweep h-full w-1/3 rounded-full bg-cyan-300/80 motion-reduce:hidden" />
      </div>
      <p className="text-xs text-slate-400">This might take 2 to 3 minutes. Please keep this tab open.</p>
    </div>
  );
}

/* ───────────────────────────── main ───────────────────────────── */

export default function DemoExperience() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('intro');
  const [showTitle, setShowTitle] = useState(false);
  const [showStart, setShowStart] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMode, setInputMode] = useState<InputMode>(null);
  const [value, setValue] = useState('');
  const [hint, setHint] = useState('');
  const [profile, setProfile] = useState({ company: '', email: '', name: '' });
  const [learned, setLearned] = useState<{ company: string; industry: string; summary: string } | null>(null);
  const [scanFailed, setScanFailed] = useState(false); // the SITE could not be read from here
  const [scanBusy, setScanBusy] = useState(false); // ...because the site asked us to slow down (HTTP 429), which is worded kindly
  const [scanSettled, setScanSettled] = useState(false); // the page's own read finished, one way or the other
  const [manual, setManual] = useState('');
  const [heardChoice, setHeardChoice] = useState('');
  const [heardOther, setHeardOther] = useState('');
  const [correcting, setCorrecting] = useState(false);
  const [draft, setDraft] = useState('');
  const [lockedRaw, setLockedRaw] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const readyRef = useRef(false);

  // What Surf knows about the business so far: the visitor's own words win over the read.
  const industryLabel = manual || learned?.industry || '';
  const companyLabel = learned?.company || profile.company;
  const waitingOnRead = !manual && !learned && !scanFailed;
  readyRef.current = Boolean(manual || learned || scanFailed || scanSettled);
  const pillars = pillarCopy(companyLabel, industryLabel);
  // The real account: 'none' until the code is verified, then building (or needs_input while it waits for two answers) -> ready | down.
  const [account, setAccount] = useState<'none' | 'building' | 'needs_input' | 'ready' | 'down'>('none');
  // The pillars are the same list the real build writes, but the build has no per-pillar progress to report, so the animation is only a
  // picture of work in progress: it can reach 6 of 7 and then waits. "7 of 7 locked in" is shown ONLY when the server says the workspace
  // is really built, so a build that failed or is waiting can never look finished.
  const locked = account === 'ready' ? PILLARS.length : Math.min(lockedRaw, PILLARS.length - 1);
  const allLocked = locked >= PILLARS.length;
  // The pillar whose card is showing: the one the visitor picked, else the one being built.
  const shown = selected ?? (allLocked ? null : locked);
  const accountRef = useRef<'none' | 'building' | 'needs_input' | 'ready' | 'down'>('none');
  accountRef.current = account;
  const [generic, setGeneric] = useState(false);
  const [loginEmail, setLoginEmail] = useState<'sent' | 'failed' | null>(null);
  const [lostConnection, setLostConnection] = useState(false);
  const [answerSells, setAnswerSells] = useState('');
  const [answerLeads, setAnswerLeads] = useState('');
  const [answerBusy, setAnswerBusy] = useState(false);
  const [answerNote, setAnswerNote] = useState('');
  const [resendBusy, setResendBusy] = useState(false);
  const [resendNote, setResendNote] = useState('');
  const accountToken = useRef('');
  const buildStartedAt = useRef(0);
  const turnstileToken = useRef('');
  const honeypot = useRef<HTMLInputElement>(null);
  const foxSize =
    phase === 'build'
      ? 'w-[min(30vw,110px,13vh)] sm:w-[min(16vh,140px)] [@media(max-height:720px)]:w-14'
      : 'w-[min(24vw,96px)] sm:w-[min(24vh,220px)] [@media(max-height:720px)]:w-20';

  const idRef = useRef(1);
  const resolvers = useRef<Record<number, () => void>>({});
  const askResolver = useRef<((v: string) => void) | null>(null);
  const started = useRef(false);
  const alive = useRef(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  // Intro beats.
  useEffect(() => {
    const a = setTimeout(() => setShowTitle(true), reduce ? 0 : 1000);
    const b = setTimeout(() => setShowStart(true), reduce ? 0 : 2600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [reduce]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, inputMode]);

  useEffect(() => {
    if (inputMode && inputMode !== 'confirm') inputRef.current?.focus();
  }, [inputMode]);

  const say = useCallback(
    (text: string) =>
      new Promise<void>((res) => {
        const id = idRef.current++;
        resolvers.current[id] = res;
        setMessages((m) => [...m, { id, from: 'surf', text }]);
      }),
    [],
  );

  const ask = useCallback(
    (mode: Exclude<InputMode, null>) =>
      new Promise<string>((res) => {
        askResolver.current = res;
        setInputMode(mode);
      }),
    [],
  );

  const finish = (id: number) => {
    resolvers.current[id]?.();
    delete resolvers.current[id];
  };

  const answer = (raw: string, display?: string) => {
    setInputMode(null);
    setValue('');
    setHint('');
    if (display !== '') {
      setMessages((m) => [...m, { id: idRef.current++, from: 'you', text: display ?? raw }]);
    }
    askResolver.current?.(raw);
    askResolver.current = null;
  };

  const run = useCallback(async () => {
    // The bot check solves itself in the background; a retry right after a reset may need a moment for its next token.
    const waitForBotCheck = async () => {
      if (!TURNSTILE_SITE_KEY) return;
      for (let i = 0; i < 20 && !turnstileToken.current; i++) await wait(300);
    };

    await say("Hey, I'm Surf. You probably expect a sales pitch. Here's how this actually works.");
    setMessages((m) => [...m, { id: idRef.current++, from: 'deal' }]);
    await wait(reduce ? 0 : 1600);
    await say("First, what's your name?");
    let name = (await ask('name')).replace(/\s+/g, ' ').trim().slice(0, 80);
    await say(`Nice to meet you, ${name.split(' ')[0]}. What's your website?`);
    let site = await ask('website');
    await say('Got it. Where should I send your login?');
    let email = await ask('email');
    await say("What's your US mobile number? I'll text you one code to confirm it's you.");
    let phone = await ask('phone');
    await say('Last question: how did you hear about SurFox?');
    let heard = JSON.parse(await ask('heard')) as { from: string; other: string };
    const affiliate = audienceSrc(); // from a partner link, captured silently: the visitor is never asked

    // STEP 1. The server checks the form and the phone (US mobile only) and texts a code. Nothing is read or built yet.
    let pending: { token: string; last4: string } | null = null;
    for (let attempt = 0; attempt < 4 && !pending; attempt++) {
      await waitForBotCheck();
      const r = await startSignup({
        name, email, website: site, phone, heard_from: heard.from, heard_other: heard.other, affiliate_src: affiliate,
        turnstile_token: turnstileToken.current, hp: honeypot.current?.value ?? '',
      });
      if (TURNSTILE_SITE_KEY && window.turnstile) window.turnstile.reset(); // a token works once
      turnstileToken.current = '';
      if (!alive.current) return;
      if (r.kind === 'sent') {
        pending = r;
        break;
      }
      await say(r.message);
      // Something the visitor can fix (a VoIP number, a typo, a taken email) is asked again; anything else ends here.
      if (attempt >= 3 || !r.field) return;
      if (r.field === 'name') {
        await say("What's your name?");
        name = (await ask('name')).replace(/\s+/g, ' ').trim().slice(0, 80);
      } else if (r.field === 'website') {
        site = await ask('website');
      } else if (r.field === 'email') {
        email = await ask('email');
      } else if (r.field === 'phone') {
        phone = await ask('phone');
      } else if (r.field === 'heard') {
        heard = JSON.parse(await ask('heard')) as { from: string; other: string };
      } else {
        return;
      }
    }
    if (!pending) return;
    const pendingToken = pending.token;

    // STEP 2. Only the right code starts the build.
    await say(`I just texted a code to the number ending in ${pending.last4}. Type it here.`);
    let verified: VerifyResult | null = null;
    for (let tries = 0; tries < 12 && !verified; tries++) {
      const entered = await ask('code');
      if (!alive.current) return;
      if (entered === RESEND_CODE) {
        const again = await resendCode({ token: pendingToken, phone });
        await say(again.ok ? 'Sent you a new code.' : again.message);
        continue;
      }
      const v = await verifyCode({ token: pendingToken, phone, code: entered });
      if (v.kind !== 'error') {
        verified = v;
        break;
      }
      await say(v.message);
      if (v.code === 'DAILY_DEMO_CAP') return; // the message already says what to do (come back tomorrow or email sales)
      // The sign-up itself is over (expired, too many wrong codes, taken): starting again is the only way forward.
      if (['NOT_FOUND', 'EXPIRED', 'CODE_ATTEMPTS', 'EMAIL_TAKEN', 'DOMAIN_TAKEN', 'PHONE_TAKEN', 'FAILED', 'OFF'].includes(v.code)) {
        await say('Refresh this page to start again.');
        return;
      }
    }
    if (!verified || !alive.current) return;
    accountToken.current = verified.token;
    buildStartedAt.current = Date.now();
    setAccount('building');

    // STEP 3. Verified, so the workspace is already being built on the server. Reading the site is allowed from here on.
    const domain = cleanDomain(site);
    let company = companyFromDomain(domain);
    let described = '';
    let describedReason: 'unreadable_site' | 'wrong_industry' = 'unreadable_site';
    let readInBackground = false;
    await say("You're verified. I'm building your workspace now, and I'll read your site while it comes together.");

    let finished = false;
    const reading: Promise<ScanResult> = fetchScan(site, pendingToken).then((r) => {
      finished = true;
      return r;
    });
    // Give the read a few seconds; if it is not back, do not make them wait: the build screen shows what Surf learned when it lands.
    await Promise.race([reading, wait(reduce ? 0 : 9000)]);
    if (!alive.current) return;

    if (finished) {
      const result = await reading;
      if (result.ok) {
        company = result.company || company;
        const industry = result.industry;
        await say(
          industry
            ? `${result.summary} I'd call that ${industry}. Did I get that right?`
            : `${result.summary} Did I get that right?`,
        );
        const ok = await ask('confirm');
        if (ok === 'no' || !industry) {
          describedReason = 'wrong_industry';
          await say('No problem. In a few words, what does your business do?');
          described = (await ask('describe')).slice(0, 60);
        } else {
          setLearned({ company, industry, summary: result.summary });
        }
        setScanSettled(true);
      } else {
        // No question here. If the build cannot read the site either, the build screen asks two short questions, once, and only then.
        setScanFailed(!result.pageRead);
        setScanBusy(result.busy === true);
        setScanSettled(true);
      }
    } else {
      readInBackground = true;
      void reading.then((r) => {
        if (!alive.current) return;
        setScanSettled(true);
        if (r.ok) {
          setLearned({ company: r.company || company, industry: r.industry, summary: r.summary });
        } else {
          setScanFailed(!r.pageRead);
          setScanBusy(r.busy === true);
        }
      });
    }

    // Keep what they typed about their business (only asked when the site could not be read or was misread). Never blocks the build.
    if (described) {
      void fetch('/api/demo/described', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: verified.token, text: described, reason: describedReason }),
      }).catch(() => {});
    }

    await say(
      readInBackground
        ? "Thanks. I'll finish reading your site while your workspace comes together. You can watch it."
        : "Perfect. Your workspace is coming together now. You can watch it.",
    );
    // Hold on the last line long enough to read before the screen changes.
    await wait(reduce ? 400 : 2800);
    if (!alive.current) return;
    setProfile({ company, email, name });
    if (described) setManual(described);
    setPhase('build');
  }, [say, ask, reduce]);

  const begin = () => {
    setPhase('chat');
    if (!started.current) {
      started.current = true;
      void run();
    }
  };

  // Build phase: lock pillars in one at a time. The first two (Operations, Industry) wait for
  // what Surf read from the site, so any wait on the read happens here, on screen, not in chat.
  useEffect(() => {
    if (phase !== 'build') return;
    setLockedRaw(0);
    const t = setInterval(() => {
      if (accountRef.current !== 'building') return; // waiting for answers, or already ended: the picture stops
      setLockedRaw((prev) => {
        if (prev >= PILLARS.length - 1) return prev; // never past 6: the last pillar waits for the real result
        if (prev < 2 && !readyRef.current) return prev;
        return prev + 1;
      });
    }, reduce ? 150 : PILLAR_DWELL_MS);
    return () => clearInterval(t);
  }, [phase, reduce]);

  // Ask the server what the real build is doing: building, waiting for two answers, ready, or down. After "ready" it keeps asking a little
  // longer for the result of the login email, so the page never says "I sent your login" before that is true. If the server cannot be
  // reached for a while the page says so (it never claims anything it does not know).
  useEffect(() => {
    if (account !== 'building' && account !== 'needs_input' && !(account === 'ready' && loginEmail === null)) return;
    let live = true;
    let tries = 0;
    let failingSince = 0;
    const tick = async () => {
      const st = await fetchState(accountToken.current);
      if (!live) return;
      if (st === null) {
        if (!failingSince) failingSince = Date.now();
        if (Date.now() - failingSince >= lostAfterMs()) setLostConnection(true);
        return;
      }
      failingSince = 0;
      setLostConnection(false);
      setGeneric(st.generic);
      setLoginEmail(st.loginEmail);
      if (account === 'ready') {
        tries += 1;
        if (tries >= 20) live = false;
        return;
      }
      if (st.state === 'ready') setAccount('ready');
      else if (st.state === 'down') setAccount('down');
      else if (st.state === 'needs_input') setAccount('needs_input');
      else if (account === 'needs_input') setAccount('building'); // the server picked the build back up by itself
    };
    const t = setInterval(tick, account === 'ready' ? 2000 : 3000);
    void tick();
    return () => {
      live = false;
      clearInterval(t);
    };
  }, [account, loginEmail]);

  const submitAnswers = async (e: React.FormEvent) => {
    e.preventDefault();
    if (answerBusy) return;
    if (answerSells.trim().length < 3 || answerLeads.trim().length < 3) {
      setAnswerNote('Please give a few words for each question.');
      return;
    }
    setAnswerBusy(true);
    setAnswerNote('');
    const r = await sendAnswers(accountToken.current, answerSells.trim(), answerLeads.trim());
    setAnswerBusy(false);
    if (r.ok) {
      buildStartedAt.current = Date.now();
      setAccount('building');
    } else {
      setAnswerNote(r.message);
    }
  };

  // Cloudflare Turnstile: invisible unless it needs to ask something. Its container sits IN the chat's normal flow, directly above the input
  // (never positioned over anything), so when it does ask it takes its own space and can never cover the Send button. It is only drawn once
  // the chat is on screen; the answer is not needed until the form is submitted, many seconds later.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || phase !== 'chat') return;
    const draw = () => {
      const el = document.getElementById('dx-turnstile');
      if (!el || !window.turnstile || el.childElementCount) return;
      window.turnstile.render(el, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: 'interaction-only',
        size: el.clientWidth > 0 && el.clientWidth < 310 ? 'compact' : 'normal', // the normal widget is 300px wide; very narrow phones get the compact one
        callback: (t: string) => {
          turnstileToken.current = t;
        },
        'expired-callback': () => {
          turnstileToken.current = '';
        },
      });
    };
    if (window.turnstile) {
      draw();
      return;
    }
    const sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    sc.async = true;
    sc.onload = draw;
    document.head.appendChild(sc);
  }, [phase]);

  const resendEmail = async () => {
    if (resendBusy) return;
    setResendBusy(true);
    setResendNote('');
    const r = await resendLogin(accountToken.current);
    setResendBusy(false);
    setResendNote(r.ok ? `Sent again to ${profile.email}.` : r.message);
  };

  const pillarNote = (i: number) =>
    [
      `Learning how ${companyLabel || 'your business'} runs`,
      `Picking up ${industryLabel || 'your industry'} language`,
      'Working out who you talk to',
      'Drafting your qualifying questions',
      'Setting the tone and the limits',
      'Preparing for pushback',
      'Deciding what a win looks like',
    ][i];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    if (inputMode === 'website') {
      const d = cleanDomain(v);
      if (!d.includes('.') || d.includes(' ')) {
        setHint('That does not look like a website. Try something like yourcompany.com');
        return;
      }
      answer(v);
    } else if (inputMode === 'name') {
      if (v.length < 2 || /[<>@]/.test(v)) {
        setHint('Please enter your name.');
        return;
      }
      answer(v);
    } else if (inputMode === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        setHint('Double-check that email address.');
        return;
      }
      answer(v);
    } else if (inputMode === 'phone') {
      if (!looksLikeUsPhone(v)) {
        setHint('Please enter a US mobile number, like (954) 555-0123.');
        return;
      }
      answer(v);
    } else if (inputMode === 'heard') {
      if (!heardChoice) {
        setHint('Please choose one.');
        return;
      }
      const label = HEARD_OPTIONS.find(([k]) => k === heardChoice)?.[1] ?? heardChoice;
      const other = heardChoice === 'other' ? heardOther.trim().slice(0, 120) : '';
      answer(JSON.stringify({ from: heardChoice, other }), other ? `${label}: ${other}` : label);
    } else if (inputMode === 'code') {
      const digits = v.replace(/\D/g, '');
      if (digits.length < 4 || digits.length > 8) {
        setHint('Enter the code from the text message.');
        return;
      }
      answer(digits, digits);
    } else if (inputMode === 'describe') {
      if (v.length < 3) return;
      answer(v);
    }
  };

  const fade = reduce
    ? {}
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };

  return (
    <div className="dx-root fixed inset-0 z-[2147483647] overflow-hidden bg-[#02050d] text-slate-100">
      {/* Cover the site chat bubble while this prototype is on screen. */}
      <style>{`
        [id^="sfx-"] { display: none !important; }
        #dx-input:focus-visible, #dx-fix:focus-visible { outline: none; }
        /* the hand cursor on everything clickable */
        .dx-root button:not(:disabled), .dx-root a[href] { cursor: pointer; }
        @keyframes dx-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-9px) } }
        @keyframes dx-glow { 0%,100% { opacity: .55 } 50% { opacity: .95 } }
        @keyframes dx-scan { 0% { top: -4rem } 100% { top: 100% } }
        @keyframes dx-caret { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
        @keyframes dx-drift { 0% { transform: translateY(0); opacity: 0 } 15% { opacity: .7 } 100% { transform: translateY(-70px); opacity: 0 } }
        @keyframes dx-breathe { 0%,100% { opacity: .75 } 50% { opacity: 1 } }
        @keyframes dx-sweep { 0% { transform: translateX(-100%) } 100% { transform: translateX(300%) } }
        .dx-float { animation: dx-float 6s ease-in-out infinite }
        .dx-glow { animation: dx-glow 4s ease-in-out infinite }
        .dx-scan { animation: dx-scan 1.8s linear infinite }
        .dx-caret { animation: dx-caret 1s steps(1) infinite }
        .dx-particle { animation: dx-drift linear infinite; opacity: 0 }
        .dx-floor { animation: dx-breathe 5s ease-in-out infinite }
        .dx-sweep { animation: dx-sweep 1.6s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) {
          .dx-float, .dx-glow, .dx-scan, .dx-caret, .dx-particle, .dx-floor, .dx-sweep { animation: none }
          .dx-particle { opacity: .4 }
        }
      `}</style>

      <Backdrop />

      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-4 sm:px-8">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="text-sm font-semibold tracking-wide text-slate-100">SurFox AI</span>
        </div>
        <Link href="/" className="text-xs text-slate-400 transition-colors hover:text-slate-200">
          Back to site
        </Link>
      </header>

      <AnimatePresence>
        {/* ───────── INTRO ───────── */}
        {phase === 'intro' && (
          <motion.main
            key="intro"
            className="absolute inset-0 z-10 flex flex-col items-center overflow-y-auto px-6 pb-10 pt-16"
            exit={{ opacity: 0, transition: { duration: 0.1, ease: 'linear' } }}
            transition={{ duration: 0.4, ease: 'linear' }}
          >
            <div className="my-auto flex w-full flex-col items-center">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="w-[min(38vw,150px)] shrink-0 sm:w-[min(24vh,230px)]"
              >
                <Fox className="aspect-square w-full" priority />
              </motion.div>

              <motion.div
                initial={false}
                animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 10 }}
                transition={{ duration: 0.9 }}
                className="mt-1 flex max-w-2xl flex-col items-center text-center"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">Meet Surf</p>
                <h1 className="mt-3 text-3xl font-light leading-tight tracking-wide text-slate-50 sm:text-4xl">
                  Skip the sales call.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                    Get your own SurFox AI workspace.
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-300 sm:text-base">
                  Surf builds a workspace around your business, then you log in and have real conversations with
                  your own AI.
                </p>
                <ul className="mt-5 flex flex-wrap items-center justify-center gap-2" aria-label="What this is not">
                  {['No pitch', 'No call to book', 'No slide deck'].map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      <X className="h-3 w-3 text-cyan-300" strokeWidth={3} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                  <li className="px-1 text-xs font-medium text-cyan-200">Just the real product.</li>
                </ul>
              </motion.div>

              <ol className="mt-7 grid w-full max-w-3xl gap-3 sm:grid-cols-3">
                {[
                  ['1', 'Tell Surf your website', 'Surf reads it and learns what you do.'],
                  ['2', 'Your own login, in minutes', 'Straight into a real SurFox AI workspace built around your business. No waiting on us.'],
                  ['3', 'Talk to your AI', 'Play one of your own leads and watch it qualify you.'],
                ].map(([n, title, body], i) => (
                  <motion.li
                    key={n}
                    initial={false}
                    animate={{ opacity: showTitle ? 1 : 0, y: showTitle ? 0 : 12 }}
                    transition={{ duration: 0.7, delay: reduce ? 0 : 0.5 + i * 0.25 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0c1626]/70 p-3.5 text-left backdrop-blur sm:block sm:p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-xs font-semibold text-cyan-200">
                      {n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-100 sm:mt-3">{title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{body}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.button
                type="button"
                onClick={begin}
                initial={false}
                animate={{ opacity: showStart ? 1 : 0, y: showStart ? 0 : 8 }}
                transition={{ duration: 0.8 }}
                style={{ pointerEvents: showStart ? 'auto' : 'none' }}
                tabIndex={showStart ? 0 : -1}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-400/15 px-8 py-4 text-base font-medium text-cyan-50 shadow-[0_0_40px_rgba(34,211,238,0.3)] transition hover:bg-cyan-400/25 hover:shadow-[0_0_56px_rgba(34,211,238,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Build my workspace
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </div>
          </motion.main>
        )}

        {/* ───────── CHAT ───────── */}
        {phase === 'chat' && (
          <motion.main
            key="chat"
            className="absolute inset-0 z-10 grid grid-cols-1 pt-16 lg:grid-cols-[5fr_7fr]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1, ease: 'linear' } }}
            transition={{ duration: 0.25, ease: 'easeOut', delay: 0.1 }}
          >
            <aside className="hidden items-end justify-center pb-10 lg:flex">
              <div className="w-[min(34vw,460px)]">
                <Fox className="aspect-square w-full" />
                <p className="-mt-2 text-center text-[11px] uppercase tracking-[0.3em] text-cyan-300/70">
                  Surf · your setup guide
                </p>
              </div>
            </aside>

            <section className="flex min-h-0 flex-col">
              <div className="flex items-center gap-3 px-5 pb-3 sm:px-8 lg:hidden">
                <Fox className="h-14 w-14 shrink-0" />
                <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/70">Surf · your setup guide</p>
              </div>

              <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto px-5 pb-4 sm:px-8 lg:pr-14">
                <div className="mx-auto flex max-w-2xl flex-col gap-4 pt-2 lg:pt-10" aria-live="polite">
                  {messages.map((m) =>
                    m.from === 'deal' ? (
                      <motion.dl
                        key={m.id}
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="ml-11 max-w-md divide-y divide-white/5 overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#08111f]/80 backdrop-blur"
                      >
                        {DEAL_ROWS.map(([label, text], i) => (
                          <motion.div
                            key={label}
                            initial={reduce ? false : { opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, delay: reduce ? 0 : 0.25 + i * 0.3 }}
                            className="px-4 py-3"
                          >
                            <dt className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">{label}</dt>
                            <dd className="mt-1 text-sm leading-relaxed text-slate-200">{text}</dd>
                          </motion.div>
                        ))}
                      </motion.dl>
                    ) : m.from === 'surf' ? (
                      <div key={m.id} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-blue-500 text-xs font-bold text-[#02121f]">
                          S
                        </div>
                        <div className="rounded-2xl rounded-tl-md border border-white/10 bg-[#0c1626]/85 px-4 py-3 text-[15px] leading-relaxed text-slate-100 shadow-lg backdrop-blur">
                          <TypedText text={m.text} onDone={() => finish(m.id)} />
                        </div>
                      </div>
                    ) : (
                      <div key={m.id} className="flex justify-end">
                        <div className="max-w-[85%] rounded-2xl rounded-tr-md border border-cyan-300/25 bg-cyan-400/10 px-4 py-3 text-[15px] leading-relaxed text-cyan-50">
                          {m.text}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="px-5 pb-6 pt-2 sm:px-8 lg:pr-14">
                <div id="dx-turnstile" className="mx-auto flex max-w-2xl justify-center empty:hidden [&:not(:empty)]:mb-3" />
                <div className="mx-auto min-h-[96px] max-w-2xl">
                  <AnimatePresence mode="wait">
                    {inputMode === 'confirm' ? (
                      <motion.div key="confirm" {...fade} className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => answer('yes', 'Yep, that is us')}
                          className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                          Yep, that is us
                        </button>
                        <button
                          type="button"
                          onClick={() => answer('no', 'Not quite')}
                          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                          Not quite
                        </button>
                      </motion.div>
                    ) : inputMode === 'heard' ? (
                      <motion.form key="heard" {...fade} onSubmit={submit} noValidate>
                        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c1626]/90 p-2 pl-4 shadow-[0_0_30px_rgba(34,211,238,0.08)] focus-within:border-cyan-300/50">
                          <label htmlFor="dx-heard" className="sr-only">
                            How did you hear about us
                          </label>
                          <select
                            id="dx-heard"
                            autoFocus
                            value={heardChoice}
                            onChange={(e) => {
                              setHeardChoice(e.target.value);
                              if (hint) setHint('');
                            }}
                            className="min-w-0 flex-1 cursor-pointer bg-transparent text-[15px] text-slate-100 outline-none [&>option]:bg-[#0c1626] [&>option]:text-slate-100"
                          >
                            <option value="" disabled>
                              Choose one
                            </option>
                            {HEARD_OPTIONS.map(([k, label]) => (
                              <option key={k} value={k}>
                                {label}
                              </option>
                            ))}
                          </select>
                          <button
                            type="submit"
                            aria-label="Send"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/90 text-[#02121f] transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        {heardChoice === 'other' && (
                          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0c1626]/90 px-4 py-2 focus-within:border-cyan-300/50">
                            <label htmlFor="dx-heard-other" className="sr-only">
                              Where did you hear about us (optional)
                            </label>
                            <input
                              id="dx-heard-other"
                              value={heardOther}
                              onChange={(e) => setHeardOther(e.target.value)}
                              maxLength={120}
                              autoComplete="off"
                              placeholder="Optional: where, in a few words"
                              className="w-full bg-transparent text-[15px] text-slate-100 placeholder-slate-500 outline-none"
                            />
                          </div>
                        )}
                        <div className="mt-2 flex min-h-[20px] items-center px-1 text-xs">
                          {hint ? <span className="text-amber-300/90">{hint}</span> : <span className="text-slate-500">{WHY_I_ASK.heard}</span>}
                        </div>
                      </motion.form>
                    ) : inputMode ? (
                      <motion.form key={inputMode} {...fade} onSubmit={submit} noValidate>
                        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c1626]/90 p-2 pl-4 shadow-[0_0_30px_rgba(34,211,238,0.08)] focus-within:border-cyan-300/50">
                          <label htmlFor="dx-input" className="sr-only">
                            {inputMode === 'name'
                              ? 'Your name'
                              : inputMode === 'website'
                              ? 'Your website'
                              : inputMode === 'email'
                                ? 'Your email'
                                : inputMode === 'phone'
                                  ? 'Your US mobile number'
                                  : inputMode === 'code'
                                    ? 'The code from the text message'
                                    : 'What your business does'}
                          </label>
                          <input
                            id="dx-input"
                            ref={inputRef}
                            value={value}
                            onChange={(e) => {
                              setValue(e.target.value);
                              if (hint) setHint('');
                            }}
                            type={inputMode === 'email' ? 'email' : inputMode === 'phone' ? 'tel' : 'text'}
                            inputMode={inputMode === 'website' ? 'url' : inputMode === 'email' ? 'email' : inputMode === 'phone' ? 'tel' : inputMode === 'code' ? 'numeric' : 'text'}
                            autoComplete={inputMode === 'name' ? 'name' : inputMode === 'email' ? 'email' : inputMode === 'website' ? 'url' : inputMode === 'phone' ? 'tel' : inputMode === 'code' ? 'one-time-code' : 'off'}
                            placeholder={
                              inputMode === 'name'
                                ? 'Your name'
                                : inputMode === 'website'
                                ? 'yourcompany.com'
                                : inputMode === 'email'
                                  ? 'you@yourcompany.com'
                                  : inputMode === 'phone'
                                    ? '(555) 123-4567'
                                    : inputMode === 'code'
                                      ? '6-digit code'
                                      : 'What does your business do?'
                            }
                            maxLength={inputMode === 'code' ? 12 : undefined}
                            className="min-w-0 flex-1 bg-transparent text-[15px] text-slate-100 placeholder-slate-500 outline-none"
                          />
                          <button
                            type="submit"
                            aria-label="Send"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/90 text-[#02121f] transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-2 flex min-h-[20px] items-center justify-between px-1 text-xs">
                          {hint ? (
                            <span className="text-amber-300/90">{hint}</span>
                          ) : inputMode === 'name' || inputMode === 'website' || inputMode === 'describe' || inputMode === 'email' || inputMode === 'phone' || inputMode === 'code' ? (
                            <span className="text-slate-500">{WHY_I_ASK[inputMode]}</span>
                          ) : (
                            <span />
                          )}
                          {inputMode === 'code' && (
                            <button
                              type="button"
                              onClick={() => answer(RESEND_CODE, '')}
                              className="shrink-0 text-cyan-200/90 underline underline-offset-4 transition hover:text-cyan-100"
                            >
                              Send a new code
                            </button>
                          )}
                        </div>
                      </motion.form>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </section>
          </motion.main>
        )}

        {/* ───────── WORKSPACE: build, then ready ─────────
            One screen, two stages. Surf, the backdrop and this wrapper stay mounted, so pressing
            Continue only swaps the content underneath. Replacing the whole screen faded everything
            through black and made Surf blink out and back in. */}
        {(phase === 'build' || phase === 'ready') && (
          <motion.main
            key="workspace"
            className="absolute inset-0 z-10 flex flex-col items-center overflow-y-auto px-5 pb-4 pt-14 text-center"
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1, ease: 'linear' } }}
            transition={{ duration: 0.25, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="relative mt-[clamp(0px,5vh,56px)] flex w-full flex-col items-center">
              <Fox className={`aspect-square shrink-0 transition-[width] duration-700 ease-out ${foxSize}`} />
              <AnimatePresence mode="popLayout" initial={false}>
                {phase === 'build' ? (
                  <motion.div
                    key="build-body"
                    className="flex w-full flex-col items-center"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1, ease: 'linear' } }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <h2 className="mt-1 text-lg font-light tracking-wide sm:text-xl">
                {account === 'ready' ? 'Your workspace is built' : account === 'down' ? 'I could not finish your workspace' : 'Building your workspace'}
              </h2>
              <p className="mt-0.5 text-sm text-cyan-200/80" aria-live="polite">
                {account === 'ready'
                  ? 'Tap any pillar to see what it does.'
                  : account === 'down'
                    ? 'Something went wrong on our side'
                    : account === 'needs_input' && scanFailed
                    ? 'I need two quick answers'
                    : locked >= PILLARS.length - 1
                      ? 'Writing your campaigns now.'
                      : waitingOnRead
                        ? 'Reading your site'
                        : pillarNote(locked)}
              </p>

              <div className="mt-4 w-full max-w-4xl">
                <div className={`mb-2 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-slate-400 [@media(max-height:720px)]:hidden ${account === 'down' ? '!hidden' : ''}`}>
                  <span>Pillars</span>
                  <span>{locked} of 7 locked in</span>
                </div>
                <div className={`mb-3 h-1 overflow-hidden rounded-full bg-white/10 ${account === 'down' ? 'hidden' : ''}`}>
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                    animate={{ width: `${(locked / PILLARS.length) * 100}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                <ul className={`flex flex-wrap justify-center gap-1.5 sm:gap-2 ${account === 'down' ? 'hidden' : ''}`} aria-label="Pillars. Select one to read about it.">
                  {PILLARS.map((p, i) => {
                    const done = i < locked;
                    const active = i === locked;
                    const picked = selected === i;
                    return (
                      <li key={p}>
                        <button
                          type="button"
                          aria-pressed={picked}
                          aria-label={`${p}${done ? ', done' : ''}`}
                          onClick={() => setSelected(picked ? null : i)}
                          className={`flex cursor-pointer items-center gap-2 rounded-full border px-2 py-1.5 text-xs transition-all duration-300 hover:border-cyan-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:px-2.5 ${
                            picked
                              ? 'border-cyan-200 bg-cyan-400/20 text-white shadow-[0_0_22px_rgba(34,211,238,0.45)]'
                              : done
                                ? 'border-cyan-300/30 bg-cyan-400/10 text-slate-100'
                                : active
                                  ? 'border-cyan-300/50 bg-cyan-400/5 text-slate-100 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                                  : 'border-white/10 bg-white/[0.03] text-slate-400'
                          }`}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[9px] font-semibold transition-colors duration-500 ${
                              done ? 'border-cyan-300 bg-cyan-300 text-[#02121f]' : 'border-slate-600'
                            }`}
                          >
                            {done ? (
                              <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            ) : active ? (
                              <Loader2 className="h-2.5 w-2.5 animate-spin text-cyan-300" />
                            ) : (
                              i + 1
                            )}
                          </span>
                          <span className="hidden sm:inline">{p}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {account === 'down' ? null : account === 'needs_input' && scanFailed ? (
                  <div className="mt-3 rounded-2xl border border-cyan-300/20 bg-[#08111f]/80 p-4 text-left backdrop-blur" data-testid="dx-questions">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">Two quick questions</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-200">I could not read your site from here, so I will build from your own words.</p>
                    <form onSubmit={submitAnswers} noValidate className="mt-3 grid gap-3 md:grid-cols-2">
                      <div>
                        <label htmlFor="dx-sells" className="mb-1.5 block text-[13px] text-slate-300">What do you sell or do?</label>
                        <input
                          id="dx-sells"
                          value={answerSells}
                          onChange={(e) => { setAnswerSells(e.target.value); if (answerNote) setAnswerNote(''); }}
                          maxLength={300}
                          autoComplete="off"
                          placeholder="For example: roof repair and replacement"
                          className="w-full rounded-xl border border-white/10 bg-[#0c1626]/90 px-3 py-2.5 text-[15px] text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-300/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="dx-leads" className="mb-1.5 block text-[13px] text-slate-300">Who are your leads, and what do they usually want?</label>
                        <input
                          id="dx-leads"
                          value={answerLeads}
                          onChange={(e) => { setAnswerLeads(e.target.value); if (answerNote) setAnswerNote(''); }}
                          maxLength={300}
                          autoComplete="off"
                          placeholder="For example: homeowners with storm damage"
                          className="w-full rounded-xl border border-white/10 bg-[#0c1626]/90 px-3 py-2.5 text-[15px] text-slate-100 placeholder-slate-500 outline-none focus:border-cyan-300/50"
                        />
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 md:col-span-2">
                        <span className="text-xs text-slate-400">{answerNote ? <span className="text-amber-300/90">{answerNote}</span> : 'If you would rather not, I will set up a general workspace in a few minutes.'}</span>
                        <button
                          type="submit"
                          disabled={answerBusy}
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-400/15 px-6 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:opacity-60"
                        >
                          {answerBusy ? 'Sending...' : 'Build my workspace'}
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {/* Left: what Surf read, or the one question it still needs answered.
                      Fixed height: the layout must never move when the text changes. */}
                  <div className="flex h-[104px] flex-col justify-between overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#08111f]/80 p-4 text-left backdrop-blur md:h-[212px] max-md:[@media(max-height:700px)]:hidden">
                    {correcting ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const v = draft.trim();
                          if (v.length < 3) return;
                          setManual(v.slice(0, 60));
                          setCorrecting(false);
                        }}
                      >
                        <label htmlFor="dx-fix" className="mb-2 block text-[13px] leading-relaxed text-slate-200">
                          {scanFailed && !learned
                            ? "I couldn't read your site. In a few words, what does your business do?"
                            : 'In a few words, what does your business do?'}
                        </label>
                        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c1626]/90 p-2 pl-4 focus-within:border-cyan-300/50">
                          <input
                            id="dx-fix"
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            placeholder="What does your business do?"
                            autoComplete="off"
                            className="min-w-0 flex-1 bg-transparent text-[15px] text-slate-100 placeholder-slate-500 outline-none"
                          />
                          <button
                            type="submit"
                            aria-label="Send"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/90 text-[#02121f] transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </form>
                    ) : scanSettled && !scanFailed && !manual && !learned ? (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">What I read</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">I read your site but could not summarize it here. I am building from it now.</p>
                      </div>
                    ) : scanFailed && !manual && !learned ? (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">What I read</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{scanBusy ? 'Your site asked me to slow down, so I could not preview it just now. That is common for sites with bot protection, and it is nothing you did wrong. I am still building from it directly, and if that does not work I will ask you two quick questions.' : 'I could not preview your site from here. I am still building from it directly, and if that does not work I will ask you two quick questions.'}</p>
                      </div>
                    ) : manual ? (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">What you told me</p>
                        <p className="mt-1 line-clamp-4 text-sm leading-relaxed text-slate-200">{manual}</p>
                      </div>
                    ) : learned ? (
                      <>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">What I read</p>
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-200 md:line-clamp-6">
                            {learned.summary}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                          <span className="truncate text-slate-400">
                            {learned.industry ? `Industry: ${learned.industry}` : ''}
                          </span>
                          <button
                            type="button"
                            onClick={() => setCorrecting(true)}
                            className="shrink-0 text-cyan-200/90 underline-offset-2 transition hover:text-cyan-100 hover:underline"
                          >
                            Not quite?
                          </button>
                        </div>
                      </>
                    ) : (
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">What I read</p>
                        <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                          <Loader2 className="h-4 w-4 animate-spin text-cyan-300" />
                          Reading your site
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right: one pillar at a time. Short by default, more when the visitor picks one.
                      Same fixed height as the left card, text capped so it can never overflow. */}
                  <div className="h-[212px] overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#08111f]/80 p-4 text-left backdrop-blur">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${shown}-${selected === null ? 'auto' : 'picked'}`}
                        initial={reduce ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        {shown === null ? (
                          <p className="text-sm leading-relaxed text-slate-200">
                            All seven pillars are set. Tap any one to read what it does and why it matters.
                          </p>
                        ) : (
                          <>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">
                              Pillar {shown + 1} of {PILLARS.length}
                            </p>
                            <p className="mt-1 text-base font-semibold text-slate-100">{PILLARS[shown]}</p>
                            <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-slate-300">
                              {pillars[shown][0]}
                            </p>
                            {selected !== null && (
                              <p className="mt-1.5 line-clamp-3 text-[13px] leading-relaxed text-cyan-200/80">
                                <span className="font-semibold">Why it matters:</span> {pillars[shown][1]}
                              </p>
                            )}
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                )}

                <p className={`mx-auto mt-3 max-w-2xl text-center text-[12px] leading-relaxed text-slate-300 ${account === 'down' ? 'hidden' : ''}`}>
                  <span className="text-cyan-200/90">In onboarding, you and Surf build these seven pillars together.</span>{' '}
                  That is how your talk tracks come out right, with no cookie-cutter setup.
                </p>

                <div className="mt-4 flex min-h-[3rem] items-center justify-center">
                  {account === 'building' && locked >= PILLARS.length - 1 && (
                    <BuildingStatus since={buildStartedAt.current || Date.now()} reduce={reduce} />
                  )}
                  {account === 'down' && (
                    <div className="flex max-w-md flex-col items-center gap-3 text-center" data-testid="dx-down">
                      <p className="text-sm leading-relaxed text-amber-300/90">
                        I could not build your workspace because our system is having trouble right now. This did not use up your demo, so please try again in a little while.
                      </p>
                      <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="rounded-full border border-cyan-300/50 bg-cyan-400/15 px-6 py-2.5 text-sm font-medium text-cyan-50 transition hover:bg-cyan-400/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        Start over
                      </button>
                    </div>
                  )}
                  {lostConnection && account !== 'ready' && account !== 'down' && (
                    <p className="max-w-md text-center text-xs leading-relaxed text-amber-300/90" data-testid="dx-lost">
                      I am having trouble reaching the server. I will keep trying, and you can also reload this page.
                    </p>
                  )}
                  {account === 'ready' && (
                    <motion.button
                      type="button"
                      initial={reduce ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setPhase('ready')}
                      className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-400/15 px-7 py-3 text-sm font-medium text-cyan-50 shadow-[0_0_36px_rgba(34,211,238,0.3)] transition hover:bg-cyan-400/25 hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      Continue
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </motion.button>
                  )}
                </div>
              </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ready-body"
                    className="flex w-full flex-col items-center"
                    initial={reduce ? false : { opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, ease: 'easeOut', delay: 0.1 }}
                  >
              <>
                <h2 className="mt-2 text-3xl font-light tracking-wide sm:text-4xl">Your workspace is ready.</h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-300">
                  {companyLabel && companyLabel !== 'Your business'
                    ? `${companyLabel}, set up for ${industryLabel || 'your business'}.`
                    : `Set up for ${industryLabel || 'your business'}.`}{' '}
                  Once you are in, open Campaigns, pick one, and press Test conversation. Play one of your own leads and see what
                  your AI does. I will be right there with you.
                </p>
                {generic && (
                  <p className="mt-3 max-w-lg rounded-xl border border-cyan-300/20 bg-cyan-400/5 px-4 py-3 text-left text-[13.5px] leading-relaxed text-slate-300" data-testid="dx-generic">
                    I could not tailor your campaigns to your site this time, so I set up a general workspace for you. It works the same way, and you can refine the campaigns with Surf once you are inside.
                  </p>
                )}

                <div className="mt-4 w-full max-w-3xl sm:mt-6">
                  <motion.p
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: reduce ? 0 : 0.3 }}
                    className="mb-3 text-[11px] uppercase tracking-[0.3em] text-cyan-300/80"
                  >
                    What is different here
                  </motion.p>
                  <ul className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                    {DIFFERENCES.map(([title, body], i) => (
                      <motion.li
                        key={title}
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: reduce ? 0 : 0.3 + i * 0.1 }}
                        className="rounded-2xl border border-white/10 bg-[#0c1626]/70 p-3 text-left backdrop-blur sm:p-4"
                      >
                        <p className="text-sm font-semibold text-slate-100">{title}</p>
                        <p className="mt-1 text-[13px] leading-relaxed text-slate-400">{body}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className={`mt-7 w-full max-w-md rounded-2xl border p-5 text-center ${loginEmail === 'failed' ? 'border-amber-300/40 bg-amber-400/10' : 'border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.2)]'}`} data-testid="dx-login-card">
                  <Mail className="mx-auto h-5 w-5 text-cyan-200" aria-hidden="true" />
                  {loginEmail === 'failed' ? (
                    <>
                      <p className="mt-2 text-base font-medium text-amber-100">I could not email your login</p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-300">
                        Your workspace is ready, but the email to <span className="text-slate-100">{profile.email}</span> did not go out. Press Send it again below, or write to{' '}
                        <a href="mailto:sales@getsurfox.com" className="text-cyan-200 underline underline-offset-4">sales@getsurfox.com</a> and we will get you in.
                      </p>
                    </>
                  ) : loginEmail === 'sent' ? (
                    <>
                      <p className="mt-2 text-base font-medium text-cyan-50">Check your email</p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-300">
                        I sent your login to <span className="text-slate-100">{profile.email}</span>. Open that email and press{' '}
                        <span className="text-slate-100">Open your demo</span> to step inside.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="mt-2 text-base font-medium text-cyan-50">Sending your login</p>
                      <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-300">
                        I am sending your login to <span className="text-slate-100">{profile.email}</span> now.
                      </p>
                    </>
                  )}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  {loginEmail === 'failed' ? '' : 'Nothing there yet? Look in spam or promotions. '}
                  <button
                    type="button"
                    disabled={resendBusy}
                    onClick={resendEmail}
                    className="text-cyan-200/90 underline underline-offset-4 transition hover:text-cyan-100 disabled:opacity-60"
                  >
                    {resendBusy ? 'Sending...' : 'Send it again'}
                  </button>
                </p>
                {resendNote && (
                  <p className="mt-2 text-xs text-cyan-200/90" role="status">
                    {resendNote}
                  </p>
                )}
                <Link
                  href="/pricing"
                  className="mt-5 text-sm text-cyan-200/90 underline-offset-4 transition hover:text-cyan-100 hover:underline"
                >
                  See pricing
                </Link>
              </>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Bot check: a field no person sees (bots fill it in). The Turnstile slot lives in the chat's input area, in normal flow. */}
      <input ref={honeypot} type="text" name="website_url_confirm" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

    </div>
  );
}
