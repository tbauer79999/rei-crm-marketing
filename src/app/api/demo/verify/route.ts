import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';
export const maxDuration = 30;

// Step 2: the text code. Only the right code starts the build of the visitor's workspace.
export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => ({}));
  return forward(req, '/verify', { method: 'POST', body: { token: b?.token, phone: b?.phone, code: b?.code } });
}
