import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { leadAppModelClient } from '../model';

// The checker holds no Anthropic key: model calls go to the SurFox AI app, which resolves the key for the internal tool.

function withEnv<T>(env: Record<string, string | undefined>, fn: () => Promise<T>): Promise<T> {
  const prev: Record<string, string | undefined> = {};
  for (const k of Object.keys(env)) { prev[k] = process.env[k]; if (env[k] === undefined) delete process.env[k]; else process.env[k] = env[k]; }
  return fn().finally(() => { for (const k of Object.keys(env)) { if (prev[k] === undefined) delete process.env[k]; else process.env[k] = prev[k]; } });
}

test('model calls go to the SurFox AI app with the shared secret, never to Anthropic', async () => {
  const realFetch = globalThis.fetch;
  const seen: { url: string; headers: Record<string, string>; body: Record<string, unknown> }[] = [];
  globalThis.fetch = (async (url: string, init: RequestInit) => {
    seen.push({ url, headers: init.headers as Record<string, string>, body: JSON.parse(String(init.body)) });
    return new Response(JSON.stringify({ text: '{"findings":[]}', input_tokens: 12, output_tokens: 3, model: 'claude-haiku-4-5-20251001' }), { status: 200 });
  }) as typeof fetch;
  try {
    const reply = await withEnv({ TOOLS_MODEL_URL: 'https://api.example-app.test/', TOOLS_MODEL_SECRET: 's3cret' }, () => leadAppModelClient({ system: 'sys', user: 'usr', maxTokens: 500 }));
    assert.deepEqual(reply, { text: '{"findings":[]}', inputTokens: 12, outputTokens: 3, model: 'claude-haiku-4-5-20251001' });
    assert.equal(seen.length, 1);
    assert.equal(seen[0].url, 'https://api.example-app.test/api/public/tools-model/messages');
    assert.equal(seen[0].headers['x-tools-model-secret'], 's3cret');
    assert.ok(!Object.keys(seen[0].headers).some((h) => /x-api-key|authorization/i.test(h)));
    assert.deepEqual(seen[0].body, { model: 'claude-haiku-4-5-20251001', system: 'sys', user: 'usr', maxTokens: 500 });
  } finally {
    globalThis.fetch = realFetch;
  }
});

test('an unconfigured or failing model service throws, so the visitor sees the friendly screen', async () => {
  await assert.rejects(withEnv({ TOOLS_MODEL_URL: undefined, TOOLS_MODEL_SECRET: undefined }, () => leadAppModelClient({ system: 's', user: 'u', maxTokens: 1 })));
  const realFetch = globalThis.fetch;
  globalThis.fetch = (async () => new Response('{}', { status: 503 })) as typeof fetch;
  try {
    await assert.rejects(withEnv({ TOOLS_MODEL_URL: 'https://x.test', TOOLS_MODEL_SECRET: 's' }, () => leadAppModelClient({ system: 's', user: 'u', maxTokens: 1 })));
  } finally {
    globalThis.fetch = realFetch;
  }
});

test('no checker source file carries an Anthropic key or calls Anthropic directly', () => {
  const root = path.join(process.cwd(), 'src');
  const hits: string[] = [];
  const walk = (d: string) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (/tools$/.test(p) || p.includes(`${path.sep}tools${path.sep}`) || /api[\\/]?$/.test(p) || /lib$/.test(p) || /app$/.test(p)) walk(p); continue; }
      if (!/[\\/]tools[\\/]/.test(p) || !/\.(ts|tsx)$/.test(p) || p.includes('__tests__')) continue;
      const src = fs.readFileSync(p, 'utf8');
      if (/api\.anthropic\.com|ANTHROPIC_API_KEY|x-api-key/.test(src)) hits.push(p);
    }
  };
  walk(root);
  assert.deepEqual(hits, []);
});
