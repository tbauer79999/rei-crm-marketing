import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';
export const maxDuration = 30;

// Step 1 of the demo sign-up: the form. The lead-app screens the phone (US mobile only) and texts a code. Nothing is built here.
export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => ({}));
  // Only the fields the lead-app reads; nothing else is passed through.
  return forward(req, '/start', {
    method: 'POST',
    timeoutMs: 26000, // phone lookup + text can take a few seconds each
    body: {
      name: b?.name, email: b?.email, website: b?.website, phone: b?.phone,
      heard_from: b?.heard_from, heard_other: b?.heard_other, affiliate_src: b?.affiliate_src,
      turnstile_token: b?.turnstile_token, hp: b?.hp,
    },
  });
}
