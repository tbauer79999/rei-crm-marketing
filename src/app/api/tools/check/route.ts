import { after, type NextRequest } from 'next/server';
import { drainQueue, handleCheck } from '../../../../lib/tools/service';
import { attributionFrom, errorBody, gateClosedResponse, json, sameOrigin, visitorFrom } from '../../../../lib/tools/route-util';
import { makeDeps } from '../../../../lib/tools/runtime';

export const runtime = 'nodejs';
export const maxDuration = 45;

export async function POST(req: NextRequest) {
  const closed = gateClosedResponse();
  if (closed) return closed;
  if (!sameOrigin(req)) return json({ ok: false, code: 'UNAVAILABLE' }, { status: 403 });

  let issuedCookie: string | null = null;
  try {
    const v = visitorFrom(req);
    const who = v.who;
    issuedCookie = v.issuedCookie;
    const body = (await req.json().catch(() => ({}))) as { mode?: string; url?: unknown; paste?: Record<string, unknown>; attribution?: unknown };
    const deps = makeDeps((fn) => after(fn));
    if (!deps) return json(errorBody('UNAVAILABLE'), { status: 503, issuedCookie });

    const mode = body.mode === 'paste' ? 'paste' : 'site';
    const result = await handleCheck(deps, {
      mode,
      url: typeof body.url === 'string' ? body.url.slice(0, 2000) : '',
      paste: body.paste && typeof body.paste === 'object' ? body.paste : {},
      attribution: attributionFrom(req, body.attribution),
      who,
    });
    // Anything left in the queue is worked off one at a time, after the visitor already has their answer.
    after(async () => {
      await drainQueue(deps, { maxItems: 1, budgetMs: 1000 }).catch(() => {});
    });
    if (!result.ok) return json(errorBody(result.code, { queue_offer: Boolean(result.queue_offer) }), { issuedCookie });
    return json(result, { issuedCookie });
  } catch {
    return json(errorBody('UNAVAILABLE'), { status: 500, issuedCookie });
  }
}
