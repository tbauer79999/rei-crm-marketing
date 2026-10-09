import React from 'react';
import Link from 'next/link';

/**
 * Minimal server-side Markdown renderer (no dependency). Supports ## / ### headings,
 * paragraphs, - and 1. lists, > quotes, --- rules, **bold**, *italic*, [text](url).
 * Output is React elements, so content is escaped by default.
 */

const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*/g;

function inline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith('/') ? (
          <Link key={i++} href={href}>{m[1]}</Link>
        ) : (
          <a key={i++} href={href} rel="noopener">{m[1]}</a>
        ),
      );
    } else if (m[3]) {
      out.push(<strong key={i++}>{m[3]}</strong>);
    } else {
      out.push(<em key={i++}>{m[4]}</em>);
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function Markdown({ source }: { source: string }) {
  const blocks = source.replace(/\r\n/g, '\n').split(/\n{2,}/);
  return (
    <>
      {blocks.map((block, i) => {
        const b = block.trim();
        if (!b) return null;
        if (/^---+$/.test(b)) return <hr key={i} />;
        const h = b.match(/^(#{2,3})\s+(.+)$/);
        if (h) return h[1] === '##' ? <h2 key={i}>{inline(h[2])}</h2> : <h3 key={i}>{inline(h[2])}</h3>;
        const lines = b.split('\n');
        if (lines.every((l) => /^[-*]\s+/.test(l)))
          return <ul key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^[-*]\s+/, ''))}</li>)}</ul>;
        if (lines.every((l) => /^\d+\.\s+/.test(l)))
          return <ol key={i}>{lines.map((l, j) => <li key={j}>{inline(l.replace(/^\d+\.\s+/, ''))}</li>)}</ol>;
        if (lines.every((l) => l.startsWith('>')))
          return <blockquote key={i}>{inline(lines.map((l) => l.replace(/^>\s?/, '')).join(' '))}</blockquote>;
        return <p key={i}>{inline(lines.join(' '))}</p>;
      })}
    </>
  );
}
