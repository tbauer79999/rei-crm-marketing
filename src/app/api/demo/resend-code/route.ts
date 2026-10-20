import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';
export const maxDuration = 30;

// A new text code (the lead-app limits how often and how many).
export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => ({}));
  return forward(req, '/resend-code', { method: 'POST', body: { token: b?.token, phone: b?.phone } });
}
