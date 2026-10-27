import fs from 'node:fs';
import path from 'node:path';
import type { Block, Explainer, Inline, Rule } from './content-gate';
import { SITE_ORIGIN } from './config';

// Converts the two source files the CMO supplied into the JSON the app loads:
//   src/app/tools/10dlc/10dlc-rulebook-paste-2026-10-27.md   ->  content/rulebook.json
//   src/app/tools/10dlc/10dlc-explainer-final-2026-10-27.md  ->  content/explainer.json
// It copies text through; it never writes, trims or rewords a quote or a sentence. Run with:  npx tsx src/lib/tools/build-content.ts
//
// The only transformation: links and JSON-LD URLs that point at the bare domain (https://getsurfox.com) are pointed at the canonical
// host the site actually serves (SITE_ORIGIN, https://www.getsurfox.com), because the bare domain 301-redirects there.

const MONTHS: Record<string, string> = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };

function isoDate(s: string): string {
  const m = s.trim().match(/^([A-Z][a-z]{2}) (\d{1,2}), (\d{4})$/);
  if (!m || !MONTHS[m[1]]) throw new Error(`unreadable date: ${s}`);
  return `${m[3]}-${MONTHS[m[1]]}-${m[2].padStart(2, '0')}`;
}

const CHECK_MAP: Record<string, Rule['check']> = {
  'opt-in wording': 'opt_in_wording',
  'sample messages': 'sample_messages',
  'privacy policy': 'privacy_policy',
  'campaign description': 'campaign_description',
  other: 'other',
};

// A quote that is entirely wrapped in straight quotes is stored without the wrapping pair; quotes inside are unescaped (\" -> ").
// A quote that starts with a provider code, such as 30909: "...", is stored exactly as written.
function quote(raw: string): string {
  const t = raw.trim();
  if (t.length > 1 && t.startsWith('"') && t.endsWith('"')) return t.slice(1, -1).replace(/\\"/g, '"');
  return t.replace(/\\"/g, '"');
}

export function parseRulebookMd(md: string): { version: string; rules: Rule[] } {
  const rules: Rule[] = [];
  const blocks = md.split(/\n(?=- rule id: )/).filter((b) => b.startsWith('- rule id: '));
  for (const b of blocks) {
    const get = (k: string) => {
      const m = b.match(new RegExp(`^(?:- )?\\s*${k}: (.*)$`, 'm'));
      if (!m) throw new Error(`missing "${k}" in block: ${b.slice(0, 80)}`);
      return m[1].trim();
    };
    const rule_id = get('rule id');
    const checkRaw = get('check');
    const check = CHECK_MAP[checkRaw];
    if (!check) throw new Error(`${rule_id}: unknown check "${checkRaw}"`);
    // source URL: "<url> [TAG] (optional note)"
    const src = get('source URL');
    const m = src.match(/^(\S+)(?:\s+\[([^\]]+)\])?(?:\s+\((.+)\))?\s*$/);
    if (!m) throw new Error(`${rule_id}: unreadable source URL line: ${src}`);
    rules.push({
      rule_id,
      check,
      official_quote: quote(get('exact quote')),
      source_url: m[1],
      verified_date: isoDate(get('verified date')),
      ...(m[2] ? { source_tag: m[2] } : {}),
      ...(m[3] ? { source_note: m[3] } : {}),
    });
  }
  if (rules.length === 0) throw new Error('no rules found');
  const ids = new Set(rules.map((r) => r.rule_id));
  if (ids.size !== rules.length) throw new Error('duplicate rule ids');
  const built = md.match(/Built ([A-Z][a-z]{2} \d{1,2}, \d{4})/);
  return { version: built ? isoDate(built[1]) : 'unknown', rules };
}

// ---- explainer ------------------------------------------------------------------------------------------------------------

const toCanonicalHost = (url: string) => url.replace(/^https:\/\/getsurfox\.com(?=\/|$)/, SITE_ORIGIN);

export function parseInline(s: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  const text = (v: string) => { if (v) out.push({ t: 'text', v }); };
  while ((m = re.exec(s))) {
    text(s.slice(last, m.index));
    if (m[1] !== undefined) out.push({ t: 'bold', v: m[1] });
    else out.push({ t: 'link', v: m[2], href: toCanonicalHost(m[3]) });
    last = m.index + m[0].length;
  }
  text(s.slice(last));
  return out;
}

function rewriteUrls(v: unknown): unknown {
  if (typeof v === 'string') return toCanonicalHost(v);
  if (Array.isArray(v)) return v.map(rewriteUrls);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, rewriteUrls(x)]));
  return v;
}

export function parseExplainerMd(md: string): Explainer {
  const title = md.match(/^Title tag: (.+)$/m)?.[1].trim();
  const metaDescription = md.match(/^Meta description: (.+)$/m)?.[1].trim();
  const fence = md.match(/```json\n([\s\S]*?)\n```/);
  if (!title || !metaDescription) throw new Error('title tag or meta description not found');

  // The page body runs from the H1 to the Sources list. Everything after is notes for us (the structured data block).
  const start = md.search(/^# /m);
  const end = md.search(/^## Structured data/m);
  const body = md.slice(start, end === -1 ? undefined : end).split('\n');

  let h1 = '';
  const blocks: Block[] = [];
  let list: Inline[][] | null = null;
  const flush = () => { if (list) { blocks.push({ k: 'ul', items: list }); list = null; } };

  for (const line of body) {
    if (!line.trim()) { flush(); continue; }
    const h = line.match(/^(#{1,3}) (.*?)(?: \{#([a-z0-9-]+)\})?$/);
    if (h) {
      flush();
      if (h[1] === '#') { h1 = h[2].trim(); continue; }
      blocks.push({ k: h[1] === '##' ? 'h2' : 'h3', ...(h[3] ? { id: h[3] } : {}), inl: parseInline(h[2].trim()) });
      continue;
    }
    const li = line.match(/^- (.*)$/);
    if (li) { (list ??= []).push(parseInline(li[1])); continue; }
    flush();
    blocks.push({ k: 'p', inl: parseInline(line.trim()) });
  }
  flush();
  if (!h1) throw new Error('no H1');
  return { title, metaDescription, h1, blocks, jsonLd: fence ? (rewriteUrls(JSON.parse(fence[1])) as unknown[]) : [] };
}

// ---- cli ------------------------------------------------------------------------------------------------------------------

export function inlineText(inl: Inline[]): string {
  return inl.map((i) => i.v).join('');
}

if (process.argv[1] && /build-content\.ts$/.test(process.argv[1].replace(/\\/g, '/'))) {
  const src = path.join(process.cwd(), 'src', 'app', 'tools', '10dlc');
  const out = path.join(process.cwd(), 'src', 'lib', 'tools', 'content');
  const rb = parseRulebookMd(fs.readFileSync(path.join(src, '10dlc-rulebook-paste-2026-10-27.md'), 'utf8'));
  const ex = parseExplainerMd(fs.readFileSync(path.join(src, '10dlc-explainer-final-2026-10-27.md'), 'utf8'));
  fs.writeFileSync(path.join(out, 'rulebook.json'), JSON.stringify(rb, null, 2) + '\n');
  fs.writeFileSync(path.join(out, 'explainer.json'), JSON.stringify(ex, null, 2) + '\n');
  const byCheck = rb.rules.reduce<Record<string, number>>((a, r) => ((a[r.check] = (a[r.check] || 0) + 1), a), {});
  console.log(`rulebook.json: ${rb.rules.length} rules`, byCheck);
  console.log(`explainer.json: ${ex.blocks.length} blocks, ${ex.jsonLd.length} JSON-LD objects`);
}
