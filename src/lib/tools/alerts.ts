import { tagOf, type Attribution } from './attribution';
import type { CheckResult } from './checks';
import { CHECKS, CHECK_LABELS, LIMITS } from './config';
import type { Mailer } from './mail';
import { dayStartIso } from './limits';
import { newId, type AlertRecord, type Store } from './store';

// Instant alerts to Tom (the SurFox AI app delivers them to the same address as the demo alerts). Every alert is written to the queue first, then sent from there, so a failed or rate-limited send is never
// lost: failures are retried with backoff, and when the alert account hits its daily limit the rest are held and go out as ONE
// catch-up email on the next day.

export type AlertKind = 'site_scan' | 'paste_check' | 'email_unlocked' | 'cap_tripped';

const KIND_LABEL: Record<AlertKind, string> = {
  site_scan: 'Website scan finished',
  paste_check: 'Paste check',
  email_unlocked: 'Email unlock',
  cap_tripped: 'Cost cap tripped',
};

export type AlertInput = {
  kind: AlertKind;
  site: string | null; // null for a paste check
  checks: CheckResult[] | null;
  attribution: Attribution;
  unlocked: boolean;
  email?: string | null; // only when the visitor gave one
  note?: string;
};

export function buildAlert(input: AlertInput): { subject: string; body: string } {
  const tag = tagOf(input.attribution);
  const subject = `10DLC checker | ${KIND_LABEL[input.kind]} | ${input.site ?? 'paste'} | ${tag}`;
  const lines = [
    `Event: ${KIND_LABEL[input.kind]}`,
    `Site checked: ${input.site ?? 'paste (no website)'}`,
    ...CHECKS.map((c) => {
      const r = input.checks?.find((x) => x.check === c);
      return `${CHECK_LABELS[c]}: ${r ? r.status : 'n/a'}`;
    }),
    `Attribution tag: ${tag} (src=${input.attribution.src ?? '-'}, aff=${input.attribution.aff ?? '-'})`,
    `Referrer: ${input.attribution.referrer ?? '-'}`,
    `First landing page: ${input.attribution.landing ?? '-'}`,
    `Unlocked: ${input.unlocked ? 'yes' : 'no'}`,
  ];
  if (input.email) lines.push(`Visitor email: ${input.email}`);
  if (input.note) lines.push(input.note);
  return { subject, body: lines.join('\n') };
}

export async function enqueueAlert(store: Store, input: AlertInput, now: Date): Promise<AlertRecord> {
  const { subject, body } = buildAlert(input);
  const rec: AlertRecord = {
    id: newId(),
    event_type: input.kind,
    subject,
    body,
    status: 'pending',
    attempts: 0,
    next_attempt_at: now.toISOString(),
    held_day: null,
    last_error: null,
    created_at: now.toISOString(),
    sent_at: null,
  };
  await store.insertAlert(rec);
  return rec;
}

const utcDate = (d: Date) => d.toISOString().slice(0, 10);

export type FlushResult = { sent: number; held: number; digested: number; failed: number };

// `to` is optional and only informational: the app sends every alert to Tom's configured address whatever is passed here.
export async function flushAlerts(store: Store, mailer: Mailer, now: Date, to?: string): Promise<FlushResult> {
  const out: FlushResult = { sent: 0, held: 0, digested: 0, failed: 0 };

  const today = utcDate(now);
  let budget = LIMITS.alertDailyLimit - (await store.countSends('alert', dayStartIso(now)));

  // 1. Catch-up: alerts held because an earlier day's limit was reached go out together as one email.
  const held = await store.listAlerts(['held'], 500);
  if (held.length > 0 && budget >= 1 && held.some((h) => h.held_day !== today)) {
    const text = [
      `${held.length} alert${held.length === 1 ? ' was' : 's were'} held because the daily sending limit was reached. Here they all are, oldest first.`,
      '',
      ...held.flatMap((h) => [`--- ${h.created_at} ---`, h.subject, h.body, '']),
    ].join('\n');
    const res = await mailer('alert', { to, subject: `10DLC checker | Catch-up: ${held.length} held alert${held.length === 1 ? '' : 's'}`, text });
    if (res.ok) {
      await store.insertSend({ id: newId(), account: 'alert', kind: 'digest', created_at: now.toISOString() });
      for (const h of held) await store.updateAlert(h.id, { status: 'digested', sent_at: now.toISOString() });
      budget -= 1;
      out.digested = held.length;
    } else {
      for (const h of held) await store.updateAlert(h.id, { attempts: h.attempts + 1, last_error: res.error });
      if (res.limit) budget = 0;
      out.failed += 1;
    }
  }

  // 2. Instant alerts, oldest first.
  const due = (await store.listAlerts(['pending'], 500)).filter((a) => a.next_attempt_at <= now.toISOString());
  for (const a of due) {
    if (budget <= 0) {
      await store.updateAlert(a.id, { status: 'held', held_day: today });
      out.held++;
      continue;
    }
    const res = await mailer('alert', { to, subject: a.subject, text: a.body });
    if (res.ok) {
      await store.insertSend({ id: newId(), account: 'alert', kind: 'instant', created_at: now.toISOString() });
      await store.updateAlert(a.id, { status: 'sent', sent_at: now.toISOString(), last_error: null });
      budget -= 1;
      out.sent++;
    } else if (res.limit) {
      budget = 0;
      await store.updateAlert(a.id, { status: 'held', held_day: today, last_error: res.error });
      out.held++;
    } else {
      const attempts = a.attempts + 1;
      const backoffMin = Math.min(2 ** attempts, 360);
      await store.updateAlert(a.id, {
        attempts,
        last_error: res.error,
        next_attempt_at: new Date(now.getTime() + backoffMin * 60_000).toISOString(),
      });
      out.failed++;
    }
  }
  return out;
}
