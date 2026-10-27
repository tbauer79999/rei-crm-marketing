import { after, type NextRequest } from 'next/server';
import { handleUnlock } from '../../../../lib/tools/service';
import { attributionFrom, errorBody, gateClosedResponse, json, sameOrigin, visitorFrom } from '../../../../lib/tools/route-util';
import { makeDeps } from '../../../../lib/tools/runtime';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const closed = gateClosedResponse();
  if (closed) return closed;
  if (!sameOrigin(req)) return json({ ok: false, code: 'UNAVAILABLE' }, { status: 403 });

  try {
    const { who } = visitorFrom(req);
    const body = (await req.json().catch(() => ({}))) as { share_id?: unknown; email?: unknown; consent?: unknown; attribution?: unknown };
    const deps = makeDeps((fn) => after(fn));
    if (!deps) return json(errorBody('UNAVAILABLE'), { status: 503 });
    const result = await handleUnlock(deps, {
      shareId: typeof body.share_id === 'string' ? body.share_id.slice(0, 64) : '',
      email: body.email,
      consent: body.consent,
      visitorId: who.visitorId,
      attribution: attributionFrom(req, body.attribution),
    });
    if (!result.ok) return json(errorBody(result.code));
    return json(result);
  } catch {
    return json(errorBody('UNAVAILABLE'), { status: 500 });
  }
}
