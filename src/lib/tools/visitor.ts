import { createHmac, randomUUID, timingSafeEqual } from 'node:crypto';

function secret(): string {
  const s = process.env.TOOLS_COOKIE_SECRET;
  if (s) return s;
  if (process.env.NODE_ENV === 'production') throw new Error('TOOLS_COOKIE_SECRET is not set');
  return 'dev-only-secret';
}

const mac = (value: string, key = secret()) => createHmac('sha256', key).update(value).digest('base64url');

// Signed visitor id for the daily limit: "<uuid>.<signature>". A forged or edited cookie fails verification and is replaced.
export function issueVisitorCookie(id: string = randomUUID()): { id: string; value: string } {
  return { id, value: `${id}.${mac(id)}` };
}

export function readVisitorCookie(value: string | undefined | null): string | null {
  if (!value) return null;
  const i = value.lastIndexOf('.');
  if (i < 1) return null;
  const id = value.slice(0, i);
  const given = Buffer.from(value.slice(i + 1));
  const want = Buffer.from(mac(id));
  if (given.length !== want.length || !timingSafeEqual(given, want)) return null;
  return id;
}

// On Vercel, x-vercel-forwarded-for is set by the platform and cannot be supplied by the client. It is the only header trusted in
// production. x-forwarded-for is accepted outside production so local runs work.
export function clientIp(headers: Headers): string | null {
  const trusted = headers.get('x-vercel-forwarded-for');
  if (trusted) return trusted.split(',')[0].trim() || null;
  if (process.env.NODE_ENV !== 'production') {
    const xff = headers.get('x-forwarded-for') || headers.get('x-real-ip');
    if (xff) return xff.split(',')[0].trim() || null;
  }
  return null;
}

// The raw address is never stored. Missing addresses share one bucket so they are limited together rather than not at all.
export function hashIp(ip: string | null): string {
  return mac(`ip:${ip ?? 'unknown'}`).slice(0, 32);
}

export function signAdminCookie(): string {
  const exp = Date.now() + 12 * 60 * 60 * 1000;
  return `${exp}.${mac(`admin:${exp}`)}`;
}

export function verifyAdminCookie(value: string | undefined | null): boolean {
  if (!value) return false;
  const [exp, sig] = value.split('.');
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  const given = Buffer.from(sig);
  const want = Buffer.from(mac(`admin:${exp}`));
  return given.length === want.length && timingSafeEqual(given, want);
}
