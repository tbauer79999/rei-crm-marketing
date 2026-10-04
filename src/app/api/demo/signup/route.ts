import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => ({}));
  // Only the fields the lead-app reads; nothing else is passed through.
  return forward(req, '/signup', {
    method: 'POST',
    body: { name: b?.name, email: b?.email, website: b?.website, turnstile_token: b?.turnstile_token, hp: b?.hp },
  });
}
