// Central config for the 10DLC Registration Checker. Prices, limits and offer copy live here so no other file
// carries a number or a line of sales text.

export const CHECKS = ['campaign_description', 'sample_messages', 'opt_in_wording', 'privacy_policy'] as const;
export type CheckId = (typeof CHECKS)[number];

export const CHECK_LABELS: Record<CheckId, string> = {
  campaign_description: 'Campaign description',
  sample_messages: 'Sample messages',
  opt_in_wording: 'Opt-in wording',
  privacy_policy: 'Privacy policy',
};

export type Status = 'pass' | 'warn' | 'fail' | 'gray';

// Canonical origin for every URL this tool emits (canonical tags, OG, sitemap, share links, email links).
// Matches metadataBase in the root layout and BASE_URL in the sitemap.
export const SITE_ORIGIN = 'https://www.getsurfox.com';

export const LIMITS = {
  scansPerVisitorPerDay: 3,
  // Not in the brief: a ceiling on paste checks per visitor per day so a script cannot run up the model bill, since paste checks
  // stay on after the monthly cap trips.
  pastesPerVisitorPerDay: 20,
  maxPages: 3,
  fetchTimeoutMs: 6000,
  maxResponseBytes: 1_000_000,
  maxRedirects: 3,
  maxPasteChars: 20_000,
  maxTextCharsPerCheck: 14_000,
  modelTimeoutMs: 20_000,
  alertDailyLimit: Number(process.env.TOOLS_ALERT_DAILY_LIMIT) || 100, // Resend free tier: 100 emails/day
  reportDailyLimit: Number(process.env.TOOLS_REPORT_DAILY_LIMIT) || 100,
} as const;

// How long each kind of record is kept. The privacy page section on the checker states these same periods (a test checks they match).
export const RETENTION_DAYS = {
  scans: 365, // check results, referrer, landing page, any email the visitor gave (12 months)
  events: 365,
  attempts: 30, // daily-limit records: cookie id and IP hash
  alerts: 90, // sent alerts only; pending or held ones are never purged
  sends: 90,
  queue: 90, // finished or failed queued scans only; waiting ones are never purged
  costs: 395, // 13 months, no personal data
} as const;

export function monthlyCostCapUsd(): number {
  const n = Number(process.env.MONTHLY_COST_CAP_USD);
  return Number.isFinite(n) && n > 0 ? n : 30;
}

// Fixed: the SurFox AI app's model route only allows this model.
export const MODEL = 'claude-haiku-4-5-20251001';

// USD per million tokens. A model missing from this table is billed at the highest rate below so the cap errs on the safe side.
export const MODEL_PRICING_USD_PER_MTOK: Record<string, { input: number; output: number }> = {
  'claude-haiku-4-5-20251001': { input: 1, output: 5 },
};
export const FALLBACK_PRICING_USD_PER_MTOK = { input: 5, output: 25 };

export const DEFAULT_TAG = '10dlc-checker';

// Offer. The price text is config, not logic.
export const STARTER_PRICE_TEXT = '$49';
export const OFFER = {
  line: "Once you're cleared to text, SurFox AI turns your cold leads into booked calls.",
  primaryLabel: 'See SurFox AI qualify a lead',
  primaryPath: '/demo',
  secondaryLabel: `Start on Starter, ${STARTER_PRICE_TEXT}/mo`,
  secondaryPath: '/subscribe/starter',
  emailClosingLine: 'Once your texts are approved, SurFox AI turns cold leads into hot ones. Reply if you want to see how.',
} as const;

export const COPY = {
  grayNoSource: 'Not checked: no official source published.',
  grayNoInput: 'Not checked: there was nothing to check for this item. Paste it in to check it.',
  grayBlocked: 'Not checked automatically. The official rule is shown below.',
  grayModelFailed: 'Not checked: the automatic check did not finish. The official rule is shown below.',
  scansPaused: "Website scans are paused right now. Leave your email and we'll send yours as soon as they're back.",
} as const;

// Consent wording for the email unlock. Held in content/consent.json until general counsel supplies it; while it carries the
// placeholder marker the unlock form is not offered (see content-gate.ts).
export const COOKIE_NAMES = {
  visitor: 'tools_vid',
  admin: 'tools_admin',
  firstSrc: 'surfox_first_src',
  aff: 'surfox_aff',
} as const;

export const ATTRIBUTION_CODE = /^[A-Za-z0-9_-]{1,64}$/;

export const EVENT_TYPES = [
  'check_started',
  'result_shown',
  'email_unlocked',
  'demo_clicked',
  'starter_clicked',
  'cap_tripped',
] as const;
export type EventType = (typeof EVENT_TYPES)[number];
// Events the browser may report. The rest are written by the server only.
export const CLIENT_EVENT_TYPES: EventType[] = ['result_shown', 'demo_clicked', 'starter_clicked'];
