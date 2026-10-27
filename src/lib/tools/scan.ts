import type { CheckId } from './config';
import { LIMITS } from './config';
import {
  COMMON_FORM_PATHS,
  COMMON_POLICY_PATHS,
  consentControlIsCoercive,
  findFormLinks,
  findPolicyLinks,
  htmlToText,
  keywordRegions,
  optInControlNearConsent,
} from './html';
import { FetchError, fetchPublicPage, parsePublicUrl, type FetchDeps } from './net-guard';

export type CheckInputs = Partial<Record<CheckId, string>>;

export type Signals = {
  checkboxFound: boolean;
  consentCoercive: boolean;
  privacyPageFound: boolean;
};

export type ScanOutput = { site: string; inputs: CheckInputs; signals: Signals; pages: string[] };

export class NoTextError extends Error {
  code = 'NO_TEXT' as const;
  constructor() {
    super('NO_TEXT');
  }
}

const MIN_USABLE_CHARS = 200;

function sameSite(base: URL, candidate: string): boolean {
  try {
    const a = base.hostname.replace(/^www\./, '');
    const b = new URL(candidate).hostname.replace(/^www\./, '');
    return a === b || b.endsWith(`.${a}`);
  } catch {
    return false;
  }
}

// Reads at most LIMITS.maxPages pages: the homepage, the most likely privacy page, and the most likely lead-form page.
// Failed attempts count against the budget.
export async function scanWebsite(rawUrl: string, deps: FetchDeps = {}): Promise<ScanOutput> {
  const startUrl = parsePublicUrl(rawUrl); // throws BAD_URL / BLOCKED before anything is requested
  const home = await fetchPublicPage(startUrl.toString(), deps);
  const base = new URL(home.url);
  const homeText = htmlToText(home.html);

  const extraBudget = LIMITS.maxPages - 1;
  const policyLinks = findPolicyLinks(home.html, home.url).filter((u) => sameSite(base, u));
  const formLinks = findFormLinks(home.html, home.url).filter((u) => sameSite(base, u) && !policyLinks.includes(u));
  const policyUrl = policyLinks[0] ?? new URL(COMMON_POLICY_PATHS[0], base).toString();
  const formUrl = formLinks[0] ?? new URL(COMMON_FORM_PATHS[0], base).toString();
  const targets = [policyUrl, formUrl].slice(0, extraBudget);

  const settled = await Promise.allSettled(targets.map((u) => fetchPublicPage(u, deps)));
  const pages = [home.url];
  let privacyHtml: string | null = null;
  let formHtml: string | null = null;
  for (let i = 0; i < settled.length; i++) {
    const res = settled[i];
    if (res.status !== 'fulfilled') continue;
    pages.push(res.value.url);
    if (i === 0) privacyHtml = res.value.html;
    else formHtml = res.value.html;
  }

  const formHtmls = [home.html, ...(formHtml ? [formHtml] : [])];
  const checkboxFound = formHtmls.some(optInControlNearConsent);
  const consentCoercive = formHtmls.some(consentControlIsCoercive);

  const optIn = formHtmls.map((h, i) => keywordRegions(h, i === 0 ? 4000 : 5000)).join('\n\n');
  const inputs: CheckInputs = {
    campaign_description: homeText.slice(0, 5000),
    opt_in_wording: optIn.slice(0, LIMITS.maxTextCharsPerCheck),
    privacy_policy: privacyHtml
      ? keywordRegions(privacyHtml, 10_000)
      : '[No privacy policy page was found on the pages scanned.]',
  };

  if (homeText.length < MIN_USABLE_CHARS && !privacyHtml && !formHtml) throw new NoTextError();

  return {
    site: base.hostname.replace(/^www\./, ''),
    inputs,
    signals: { checkboxFound, consentCoercive, privacyPageFound: Boolean(privacyHtml) },
    pages,
  };
}

export function inputsFromPaste(paste: Partial<Record<CheckId, unknown>>): CheckInputs {
  const out: CheckInputs = {};
  for (const [k, v] of Object.entries(paste)) {
    if (typeof v !== 'string') continue;
    const t = v.replace(/\u0000/g, '').trim().slice(0, LIMITS.maxPasteChars);
    if (t) out[k as CheckId] = t;
  }
  return out;
}

export { FetchError };
