import { after, type NextRequest } from 'next/server';
import { CLIENT_EVENT_TYPES, type EventType } from '../../../../lib/tools/config';
import { attributionFrom, gateClosedResponse, json, sameOrigin } from '../../../../lib/tools/route-util';
import { makeDeps } from '../../../../lib/tools/runtime';
import { logEvent } from '../../../../lib/tools/service';

export const runtime = 'nodejs';

// Browser-reported events only: result_shown, demo_clicked, starter_clicked. The rest are written by the server.
export async function POST(req: NextRequest) {
  const closed = gateClosedResponse();
  if (closed) return closed;
  if (!sameOrigin(req)) return json({ ok: false }, { status: 403 });
  try {
    const body = (await req.json().catch(() => ({}))) as { type?: unknown; share_id?: unknown; attribution?: unknown };
    if (typeof body.type !== 'string' || !CLIENT_EVENT_TYPES.includes(body.type as EventType)) return json({ ok: false }, { status: 400 });
    const deps = makeDeps();
    if (!deps) return json({ ok: false }, { status: 503 });
    const attribution = attributionFrom(req, body.attribution);
    const type = body.type as EventType;
    const shareId = typeof body.share_id === 'string' ? body.share_id.slice(0, 64) : null;
    after(async () => {
      const scan = shareId ? await deps.store.getScanByShareId(shareId).catch(() => null) : null;
      await logEvent(deps, type, { scan_id: scan?.id ?? null, site: scan?.site ?? null, attribution });
    });
    return json({ ok: true });
  } catch {
    return json({ ok: false }, { status: 500 });
  }
}
