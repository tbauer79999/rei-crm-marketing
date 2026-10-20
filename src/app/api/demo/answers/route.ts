import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';
export const maxDuration = 30;

// The two answers (what they sell, who their leads are), asked only when neither read of the visitor's site worked. The lead-app builds from them.
export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => ({}));
  return forward(req, '/answers', { method: 'POST', body: { token: b?.token, sells: b?.sells, leads: b?.leads } });
}
