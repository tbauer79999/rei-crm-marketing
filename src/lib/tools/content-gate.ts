import fs from 'node:fs';
import path from 'node:path';
import { CHECKS, type CheckId } from './config';

// Content gate. The rulebook and the explainer text come from other people (the CMO's source map and page text) and the consent
// wording comes from counsel. Until each file is real, every /tools route answers 404 with noindex and stays out of the sitemap.
// Nothing here throws at build time: a missing or broken file just closes the gate, so the rest of getsurfox.com deploys normally.

// check is one of the four checks, or 'other': the rulebook also carries sourced rules (brand vetting, prohibited content, and so on)
// that belong to none of the four checks. Those are kept in the file but are never evaluated by the checker.
export type Rule = {
  rule_id: string;
  check: CheckId | 'other';
  official_quote: string;
  source_url: string;
  verified_date: string;
  source_tag?: string; // short source label from the source map, for example TW-REJ
  source_note?: string; // caveat published with the source, for example "AT&T Office@Hand product guidance, not a carrier rule"
};

export type Rulebook = { version: string; rules: Rule[] };

export type Inline = { t: 'text' | 'bold'; v: string } | { t: 'link'; v: string; href: string };
export type Block =
  | { k: 'h2' | 'h3'; id?: string; inl: Inline[] }
  | { k: 'p'; inl: Inline[] }
  | { k: 'ul'; items: Inline[][] };

// The explainer, parsed from the CMO's final page text by build-content.ts. The text itself is carried through unchanged.
export type Explainer = {
  title: string;
  metaDescription: string;
  h1: string;
  blocks: Block[];
  jsonLd: unknown[];
};

export type GateResult<T> = { ok: true; data: T } | { ok: false; reason: string };

const PLACEHOLDER = /\[\s*(?:PASTE|PENDING)\b[^\]]*\]|\bPLACEHOLDER\b/i;

function contentDir(): string {
  return process.env.TOOLS_CONTENT_DIR || path.join(process.cwd(), 'src', 'lib', 'tools', 'content');
}

function readJson(file: string): GateResult<unknown> {
  try {
    const raw = fs.readFileSync(path.join(contentDir(), file), 'utf8');
    if (!raw.trim()) return { ok: false, reason: `${file} is empty` };
    return { ok: true, data: JSON.parse(raw) };
  } catch (e) {
    const code = (e as NodeJS.ErrnoException)?.code;
    return { ok: false, reason: code === 'ENOENT' ? `${file} is missing` : `${file} cannot be read` };
  }
}

function hasPlaceholder(value: unknown): boolean {
  if (typeof value === 'string') return PLACEHOLDER.test(value);
  if (Array.isArray(value)) return value.some(hasPlaceholder);
  if (value && typeof value === 'object') return Object.values(value).some(hasPlaceholder);
  return false;
}

const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0;

function isHttpsUrl(v: unknown): boolean {
  if (!isStr(v)) return false;
  try {
    return new URL(v).protocol === 'https:';
  } catch {
    return false;
  }
}

function isIsoDate(v: unknown): boolean {
  return isStr(v) && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v));
}

// Strict on purpose: one malformed rule closes the whole gate, so a half-sourced rulebook never goes live.
export function parseRulebook(input: unknown): GateResult<Rulebook> {
  if (!input || typeof input !== 'object') return { ok: false, reason: 'rulebook is not an object' };
  if (hasPlaceholder(input)) return { ok: false, reason: 'rulebook still has a placeholder marker' };
  const o = input as { version?: unknown; rules?: unknown };
  if (!isStr(o.version)) return { ok: false, reason: 'rulebook has no version' };
  if (!Array.isArray(o.rules) || o.rules.length === 0) return { ok: false, reason: 'rulebook has no rules' };
  if (!(o.rules as { check?: unknown }[]).some((r) => r && r.check !== 'other')) return { ok: false, reason: 'rulebook has no rule for any of the four checks' };
  const seen = new Set<string>();
  const rules: Rule[] = [];
  for (const r of o.rules as Record<string, unknown>[]) {
    if (!r || typeof r !== 'object') return { ok: false, reason: 'a rule is not an object' };
    if (!isStr(r.rule_id) || seen.has(r.rule_id)) return { ok: false, reason: 'a rule has a missing or duplicate rule_id' };
    if (r.check !== 'other' && !CHECKS.includes(r.check as CheckId)) return { ok: false, reason: `${r.rule_id} has an unknown check` };
    if (!isStr(r.official_quote)) return { ok: false, reason: `${r.rule_id} has no official_quote` };
    if (!isHttpsUrl(r.source_url)) return { ok: false, reason: `${r.rule_id} has no https source_url` };
    if (!isIsoDate(r.verified_date)) return { ok: false, reason: `${r.rule_id} has no verified_date (YYYY-MM-DD)` };
    seen.add(r.rule_id);
    rules.push({
      rule_id: r.rule_id,
      check: r.check as CheckId | 'other',
      official_quote: r.official_quote,
      source_url: r.source_url as string,
      verified_date: r.verified_date as string,
      ...(isStr(r.source_tag) ? { source_tag: r.source_tag } : {}),
      ...(isStr(r.source_note) ? { source_note: r.source_note } : {}),
    });
  }
  return { ok: true, data: { version: o.version, rules } };
}

const validInline = (v: unknown): boolean =>
  Array.isArray(v) && v.length > 0 && v.every((i) => i && typeof i === 'object' && typeof (i as { v?: unknown }).v === 'string' && ['text', 'bold', 'link'].includes((i as { t?: string }).t as string) && ((i as { t?: string }).t !== 'link' || isHttpsUrl((i as { href?: unknown }).href) || /^#[a-z0-9-]+$/.test(String((i as { href?: unknown }).href))));

export function parseExplainer(input: unknown): GateResult<Explainer> {
  if (!input || typeof input !== 'object') return { ok: false, reason: 'explainer is not an object' };
  if (hasPlaceholder(input)) return { ok: false, reason: 'explainer still has a placeholder marker' };
  const o = input as Partial<Explainer>;
  if (!isStr(o.title) || !isStr(o.metaDescription) || !isStr(o.h1)) return { ok: false, reason: 'explainer is missing title, metaDescription or h1' };
  if (!Array.isArray(o.blocks) || o.blocks.length === 0) return { ok: false, reason: 'explainer has no content blocks' };
  for (const b of o.blocks) {
    if (!b || typeof b !== 'object') return { ok: false, reason: 'an explainer block is malformed' };
    if (b.k === 'ul') {
      if (!Array.isArray(b.items) || b.items.length === 0 || !b.items.every(validInline)) return { ok: false, reason: 'an explainer list is malformed' };
    } else if (b.k === 'h2' || b.k === 'h3' || b.k === 'p') {
      if (!validInline(b.inl)) return { ok: false, reason: 'an explainer block is malformed' };
      if (b.k !== 'p' && b.id !== undefined && !/^[a-z0-9-]+$/.test(b.id)) return { ok: false, reason: 'an explainer anchor id is malformed' };
    } else {
      return { ok: false, reason: 'an explainer block has an unknown type' };
    }
  }
  return { ok: true, data: { title: o.title, metaDescription: o.metaDescription, h1: o.h1, blocks: o.blocks, jsonLd: Array.isArray(o.jsonLd) ? o.jsonLd : [] } };
}

export function loadRulebook(): GateResult<Rulebook> {
  const f = readJson('rulebook.json');
  return f.ok ? parseRulebook(f.data) : f;
}

export function loadExplainer(): GateResult<Explainer> {
  const f = readJson('explainer.json');
  return f.ok ? parseExplainer(f.data) : f;
}

// Consent wording. Separate from the route gate: the checker still runs while this is pending, but the email unlock is not offered.
export function loadConsentText(): GateResult<string> {
  const f = readJson('consent.json');
  if (!f.ok) return f;
  const text = (f.data as { text?: unknown })?.text;
  if (!isStr(text)) return { ok: false, reason: 'consent text is empty' };
  if (PLACEHOLDER.test(text)) return { ok: false, reason: 'consent text is still pending legal review' };
  return { ok: true, data: text };
}

// Privacy page. The checker collects personal data and sets cookies, so its section of the privacy page must exist and must have been
// signed off: the section carries a "[PENDING GC REVIEW]" marker until general counsel has reviewed it, and the gate stays closed while any
// "[PASTE..." or "[PENDING..." marker is on that page. The file is read as text; nothing is imported from the site.
const PRIVACY_SECTION_ID = 'id="10dlc-checker"';

// Read through a directory + a variable file name (the same shape as the content files) so Next's output tracing copies the privacy page
// into the serverless bundle. Reading it with a fixed file name is not traced, and the gate could never open on Vercel.
function readPrivacyFile(name: string): string {
  return fs.readFileSync(process.env.TOOLS_PRIVACY_FILE || path.join(process.cwd(), 'src', 'app', 'privacy', name), 'utf8');
}

export function privacyFilePath(): string {
  return process.env.TOOLS_PRIVACY_FILE || path.join(process.cwd(), 'src', 'app', 'privacy', 'PrivacyClient.tsx');
}

export function checkPrivacyPage(): GateResult<true> {
  let text: string;
  try {
    text = readPrivacyFile('PrivacyClient.tsx');
  } catch {
    return { ok: false, reason: 'privacy page cannot be read' };
  }
  if (!text.includes(PRIVACY_SECTION_ID)) return { ok: false, reason: 'privacy page has no 10DLC checker section' };
  if (/\[\s*(?:PASTE|PENDING)/i.test(text)) return { ok: false, reason: 'privacy page still has a [PENDING] or [PASTE] marker' };
  return { ok: true, data: true };
}

// The gate for every /tools route and for the sitemap. All four must be real: the rulebook, the explainer text, the consent wording
// and the privacy page section. Until then the routes are 404 + noindex and the sitemap leaves them out.
export function toolsOpen(): boolean {
  return loadRulebook().ok && loadExplainer().ok && loadConsentText().ok && checkPrivacyPage().ok;
}

export function gateStatus(): { open: boolean; rulebook: string; explainer: string; consent: string; privacy: string } {
  const r = loadRulebook();
  const e = loadExplainer();
  const c = loadConsentText();
  const p = checkPrivacyPage();
  return {
    open: r.ok && e.ok && c.ok && p.ok,
    privacy: p.ok ? 'ok' : p.reason,
    rulebook: r.ok ? 'ok' : r.reason,
    explainer: e.ok ? 'ok' : e.reason,
    consent: c.ok ? 'ok' : c.reason,
  };
}
