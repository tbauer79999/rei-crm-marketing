'use client';

import { useState } from 'react';

const btn = 'inline-flex min-h-11 items-center justify-center rounded-lg bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60';

async function act(body: unknown) {
  const res = await fetch('/api/tools/admin', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  return { ok: res.ok, data: await res.json().catch(() => ({})) };
}

export function AdminLogin() {
  const [pw, setPw] = useState('');
  const [bad, setBad] = useState(false);
  return (
    <form
      className="max-w-sm space-y-3"
      onSubmit={async (e) => {
        e.preventDefault();
        const r = await act({ action: 'login', password: pw });
        if (r.ok) window.location.reload();
        else setBad(true);
      }}
    >
      <label htmlFor="admin-pw" className="block text-sm font-medium">
        Password
      </label>
      <input id="admin-pw" type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} className="block w-full rounded-lg border border-[#8a92a0] px-3 py-2 text-base" />
      {bad ? <p role="alert" className="text-sm text-[#9b1c1c]">Wrong password.</p> : null}
      <button className={btn} type="submit">Sign in</button>
    </form>
  );
}

export function AdminActions() {
  const [out, setOut] = useState<string>('');
  const [busy, setBusy] = useState(false);
  async function run(action: 'drain' | 'flush' | 'logout') {
    setBusy(true);
    const r = await act({ action });
    setBusy(false);
    if (action === 'logout') return window.location.reload();
    setOut(JSON.stringify(r.data));
  }
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button className={btn} disabled={busy} onClick={() => run('drain')}>Run scan queue now</button>
        <button className={btn} disabled={busy} onClick={() => run('flush')}>Flush alerts and reports now</button>
        <button className={btn} disabled={busy} onClick={() => run('logout')}>Sign out</button>
      </div>
      {out ? <pre className="overflow-x-auto rounded-lg bg-[var(--paper)] p-3 text-xs">{out}</pre> : null}
    </div>
  );
}
