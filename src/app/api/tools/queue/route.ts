import { type NextRequest } from 'next/server';
import { attributionFrom, errorBody, gateClosedResponse, json, sameOrigin, visitorFrom } from '../../../../lib/tools/route-util';
import { makeDeps } from '../../../../lib/tools/runtime';
import { handleJoinQueue } from '../../../../lib/tools/service';

export const runtime = 'nodejs';

// "Leave your email" while website scans are paused at the monthly cap.
export async function POST(req: NextRequest) {
  const closed = gateClosedResponse();
  if (closed) return closed;
  if (!sameOrigin(req)) return json({ ok: false, code: 'UNAVAILABLE' }, { status: 403 });

  let issuedCookie: string | null = null;
  try {
    const v = visitorFrom(req);
    const who = v.who;
    issuedCookie = v.issuedCookie;
    const body = (await req.json().catch(() => ({}))) as { url?: unknown; email?: unknown; consent?: unknown; attribution?: unknown };
    const deps = makeDeps();
    if (!deps) return json(errorBody('UNAVAILABLE'), { status: 503, issuedCookie });
    const result = await handleJoinQueue(deps, {
      url: typeof body.url === 'string' ? body.url.slice(0, 2000) : '',
      email: body.email,
      consent: body.consent,
      who,
      attribution: attributionFrom(req, body.attribution),
    });
    if (!result.ok) return json(errorBody(result.code), { issuedCookie });
    return json({ ok: true }, { issuedCookie });
  } catch {
    return json(errorBody('UNAVAILABLE'), { status: 500, issuedCookie });
  }
}
