import { NextRequest } from 'next/server';
import { forward } from '../_proxy';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token') ?? '';
  return forward(req, `/status?token=${encodeURIComponent(token.slice(0, 64))}`, { method: 'GET' });
}
