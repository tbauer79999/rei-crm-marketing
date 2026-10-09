import fs from 'node:fs';
import path from 'node:path';

/**
 * News releases live in /content/news as Markdown files with frontmatter.
 * Adding a release = adding one file. No registry to update.
 */

const NEWS_DIR = path.join(process.cwd(), 'content', 'news');

export interface NewsRelease {
  slug: string;
  title: string;
  subheadline?: string;
  date: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD, defaults to date
  summary: string;
  dateline: string; // e.g. "MIAMI, FL"
  image?: string;
  imageAlt?: string;
  tags: string[];
  placeholder: boolean;
  body: string; // raw markdown
}

// Placeholder releases are previewable in dev and hidden in production, so the
// sample can never be indexed by accident.
const SHOW_PLACEHOLDERS = process.env.NODE_ENV !== 'production';

type FrontmatterValue = string | boolean | string[];

function parseValue(raw: string): FrontmatterValue {
  const v = raw.trim();
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v.startsWith('[') && v.endsWith(']')) {
    return v
      .slice(1, -1)
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean);
  }
  return v.replace(/^["']|["']$/g, '');
}

function parseFile(raw: string): { data: Record<string, FrontmatterValue>; body: string } {
  const text = raw.replace(/^﻿/, '').replace(/\r\n/g, '\n');
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: text };
  const data: Record<string, FrontmatterValue> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1 || line.trimStart().startsWith('#')) continue;
    data[line.slice(0, idx).trim()] = parseValue(line.slice(idx + 1));
  }
  return { data, body: match[2].trim() };
}

function str(v: unknown): string | undefined {
  return typeof v === 'string' && v ? v : undefined;
}

export function getAllNews(): NewsRelease[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  const releases: NewsRelease[] = [];
  for (const file of fs.readdirSync(NEWS_DIR)) {
    if (!/\.(md|mdx)$/.test(file) || file.startsWith('_')) continue;
    const { data, body } = parseFile(fs.readFileSync(path.join(NEWS_DIR, file), 'utf8'));
    const title = str(data.title);
    const date = str(data.date);
    const summary = str(data.summary);
    const dateline = str(data.dateline);
    if (!title || !date || !summary || !dateline || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      throw new Error(`content/news/${file}: frontmatter needs title, date (YYYY-MM-DD), summary, dateline`);
    }
    const placeholder = data.placeholder === true;
    if (placeholder && !SHOW_PLACEHOLDERS) continue;
    releases.push({
      slug: str(data.slug) ?? file.replace(/\.(md|mdx)$/, ''),
      title,
      subheadline: str(data.subheadline),
      date,
      updated: str(data.updated),
      summary,
      dateline,
      image: str(data.image),
      imageAlt: str(data.imageAlt),
      tags: Array.isArray(data.tags) ? data.tags : [],
      placeholder,
      body,
    });
  }
  return releases.sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsBySlug(slug: string): NewsRelease | undefined {
  return getAllNews().find((r) => r.slug === slug);
}

// YYYY-MM-DD -> "October 9, 2026" with no timezone shift.
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

export function absoluteUrl(src: string): string {
  return src.startsWith('http') ? src : `https://www.getsurfox.com${src.startsWith('/') ? '' : '/'}${src}`;
}
