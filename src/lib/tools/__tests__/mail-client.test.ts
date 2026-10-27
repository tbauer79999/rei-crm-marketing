import assert from 'node:assert/strict';
import test from 'node:test';
import { leadAppMailer } from '../mail';

// Email goes through the SurFox AI app. The website holds no email credentials.

function withEnv<T>(env: Record<string, string | undefined>, fn: () => Promise<T>): Promise<T> {
  const prev: Record<string, string | undefined> = {};
  for (const k of Object.keys(env)) { prev[k] = process.env[k]; if (env[k] === undefined) delete process.env[k]; else process.env[k] = env[k]; }
  return fn().finally(() => { for (const k of Object.keys(env)) { if (prev[k] === undefined) delete process.env[k]; else process.env[k] = prev[k]; } });
}

const ENV = { TOOLS_MODEL_URL: 'https://app.example.test/', TOOLS_MODEL_SECRET: 's3cret' };

test('alerts and reports are posted to the app with the shared secret; alerts carry no recipient', async () => {
  const realFetch = globalThis.fetch;
  const seen: { url: string; headers: Record<string, string>; body: Record<string, unknown> }[] = [];
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    seen.push({ url, headers: init.headers as Record<string, string>, body: JSON.parse(String(init.body)) });
    return new Response(JSON.stringify({ ok: true, id: 'em_1' }), { status: 200 });
  }) as typeof fetch;
  try {
    assert.deepEqual(await withEnv(ENV, () => leadAppMailer('alert', { to: 'ignored@example.com', subject: 'S', text: 'T' })), { ok: true });
    assert.deepEqual(await withEnv(ENV, () => leadAppMailer('report', { to: 'pat@example.com', subject: 'R', text: 'B' })), { ok: true });
  } finally {
    globalThis.fetch = realFetch;
  }
  assert.equal(seen[0].url, 'https://app.example.test/api/public/tools-model/mail');
  assert.equal(seen[0].headers['x-tools-model-secret'], 's3cret');
  assert.deepEqual(seen[0].body, { kind: 'alert', subject: 'S', text: 'T' }); // no `to`: the app decides where alerts go
  assert.deepEqual(seen[1].body, { kind: 'report', to: 'pat@example.com', subject: 'R', text: 'B' });
});

test('failures come back as results, never throws: a 429 is flagged as a limit so the alert is held, not retried', async () => {
  const realFetch = globalThis.fetch;
  try {
    globalThis.fetch = (async () => new Response(JSON.stringify({ error: 'EMAIL_LIMIT' }), { status: 429 })) as typeof fetch;
    const limited = await withEnv(ENV, () => leadAppMailer('alert', { subject: 'S', text: 'T' }));
    assert.equal(limited.ok, false);
    assert.equal(!limited.ok && limited.limit, true);

    globalThis.fetch = (async () => new Response(JSON.stringify({ error: 'EMAIL_FAILED' }), { status: 502 })) as typeof fetch;
    const failed = await withEnv(ENV, () => leadAppMailer('report', { to: 'a@b.co', subject: 'S', text: 'T' }));
    assert.equal(!failed.ok && failed.limit, false);

    globalThis.fetch = (async () => { throw new Error('network down'); }) as typeof fetch;
    assert.equal((await withEnv(ENV, () => leadAppMailer('alert', { subject: 'S', text: 'T' }))).ok, false);

    const unset = await withEnv({ TOOLS_MODEL_URL: undefined, TOOLS_MODEL_SECRET: undefined }, () => leadAppMailer('alert', { subject: 'S', text: 'T' }));
    assert.equal(unset.ok, false);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test('the checker carries no email provider credentials', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const hits: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { walk(p); continue; }
      if (!/\.(ts|tsx)$/.test(p) || p.includes('__tests__')) continue;
      if (/api\.resend\.com|RESEND_API_KEY|TOOLS_(REPORT|ALERT)_EMAIL/.test(fs.readFileSync(p, 'utf8'))) hits.push(p);
    }
  };
  for (const d of ['src/lib/tools', 'src/app/tools', 'src/app/api/tools']) walk(path.join(process.cwd(), d));
  assert.deepEqual(hits, []);
});
