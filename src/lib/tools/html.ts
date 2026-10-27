// HTML helpers copied from the SurFox AI onboarding consent check (supabase/functions/verify-sms-consent) so this tool has no
// import path into the app. Only the page-reading helpers are carried over. The onboarding check's copy generator (it writes
// replacement wording) is deliberately NOT copied: this tool never writes wording for the visitor.

const ENTITIES: Record<string, string> = { nbsp: ' ', amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', rsquo: "'", lsquo: "'", rdquo: '"', ldquo: '"', ndash: '-', mdash: '-' };

export function htmlToText(html: string, maxChars = 200_000): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[String(name).toLowerCase()] ?? m)
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxChars);
}

// Visible text around consent/privacy keywords, so a footer disclosure or a deep SMS clause is not cut off by a head-only slice.
export function keywordRegions(html: string, cap = 6000): string {
  const text = htmlToText(html);
  const lower = text.toLowerCase();
  const re = /consent|opt.?in|receive (recurring )?(sms|text|automated)|reply .?stop|message and data rates|msg\s*(&|and)\s*data|by (providing|submitting)|text message|mobile message|not (be )?(shared|sold)|third part|do not sell/gi;
  const idxs: number[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(lower)) && idxs.length < 6) idxs.push(m.index);
  if (idxs.length === 0) return text.slice(0, cap);
  let out = '';
  for (const i of idxs) {
    out += text.slice(Math.max(0, i - 600), i + 900) + ' ... ';
    if (out.length > cap) break;
  }
  return out.slice(0, cap);
}

function scoredLinks(html: string, baseUrl: string, scorer: (hay: string) => number): string[] {
  const scored: { url: string; score: number }[] = [];
  const seen = new Set<string>();
  const re = /<a\b[^>]*href\s*=\s*["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    const text = (m[2] || '').replace(/<[^>]+>/g, ' ').toLowerCase();
    const score = scorer(`${href.toLowerCase()} ${text}`);
    if (score === 0) continue;
    // Anchors, JS handlers and un-rendered template hrefs cannot be followed by a static scan.
    if (/^\s*(#|javascript:|mailto:|tel:)/i.test(href) || href.includes('${')) continue;
    try {
      const abs = new URL(href, baseUrl).toString();
      const norm = (u: string) => u.replace(/[#?].*$/, '').replace(/\/+$/, '');
      if (norm(abs) === norm(baseUrl)) continue;
      if (!seen.has(abs)) {
        seen.add(abs);
        scored.push({ url: abs, score });
      }
    } catch {
      /* malformed href */
    }
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.url);
}

// Policy-page candidates: privacy first, then SMS/text, then terms/legal.
export function findPolicyLinks(html: string, baseUrl: string): string[] {
  return scoredLinks(html, baseUrl, (hay) => {
    if (/privacy/.test(hay)) return 3;
    if (/\bsms\b|text message|texting|mobile terms/.test(hay)) return 2;
    if (/terms|legal|conditions|disclosure/.test(hay)) return 1;
    return 0;
  });
}

// Lead-form page candidates: where the opt-in checkbox usually lives.
export function findFormLinks(html: string, baseUrl: string): string[] {
  return scoredLinks(html, baseUrl, (hay) => {
    if (/contact|get.?started|request|quote|apply|application|resume|\bcv\b/.test(hay)) return 2;
    if (/career|job|subscribe|sign.?up|\bform\b|schedule|book/.test(hay)) return 1;
    return 0;
  });
}

// An affirmative opt-in control (checkbox, required radio, or ARIA checkbox) sitting next to SMS consent language.
export function optInControlNearConsent(html: string): boolean {
  const lower = html.toLowerCase();
  const consentRe = /consent|agree to receive|receive (recurring )?(sms|text|automated)|reply .?stop|by (providing|submitting|checking)|message and data rates/gi;
  let m: RegExpExecArray | null;
  while ((m = consentRe.exec(lower))) {
    const window = html.slice(Math.max(0, m.index - 2500), m.index + 800);
    if (/<input\b[^>]*type\s*=\s*["']?(checkbox|radio)\b/i.test(window)) return true;
    if (/role\s*=\s*["']?checkbox/i.test(window)) return true;
    if (/aria-checked\s*=/i.test(window)) return true;
  }
  return false;
}

// A consent control that is required to submit, or pre-checked. Quoted attribute values are stripped first so a sentence that
// contains the word "required" cannot trigger it.
export function consentControlIsCoercive(html: string): boolean {
  const inputRe = /<input\b[^>]*>/gi;
  const consentSig = /consent to receive|agree to receive|receive (recurring )?(sms|text|automated)|by (providing|submitting|checking)/i;
  let m: RegExpExecArray | null;
  while ((m = inputRe.exec(html))) {
    const tag = m[0];
    if (!/type\s*=\s*["']?(checkbox|radio)\b/i.test(tag)) continue;
    const trailing = html.slice(m.index + tag.length, m.index + tag.length + 300);
    if (!consentSig.test(tag) && !consentSig.test(trailing)) continue;
    const tagNoValues = tag.replace(/=\s*"[^"]*"/g, '=""').replace(/=\s*'[^']*'/g, "=''");
    if (/\brequired\b|aria-required|\bchecked\b|\bselected\b/i.test(tagNoValues)) return true;
  }
  return false;
}

export const COMMON_POLICY_PATHS = ['/privacy-policy', '/privacy', '/privacy-notice', '/sms-terms', '/terms'];
export const COMMON_FORM_PATHS = ['/contact', '/contact-us', '/get-started', '/apply'];
