import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const b = await req.json().catch(() => ({}));
  return forward(req, '/link', { method: 'POST', body: { token: b?.token } });
}
