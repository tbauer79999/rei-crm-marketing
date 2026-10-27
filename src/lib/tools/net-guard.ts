import dns from 'node:dns/promises';
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import zlib from 'node:zlib';
import { LIMITS } from './config';

// SSRF guard for fetching a visitor-supplied website. Public http(s) only. Every hop (the first URL and each redirect) is parsed,
// resolved, and checked against the blocked ranges, and the connection is made to the address that was checked, so a second DNS
// answer cannot swap in a private address between the check and the connect.

export type FetchErrorCode = 'BAD_URL' | 'BLOCKED' | 'UNREACHABLE' | 'TIMEOUT' | 'NOT_HTML' | 'HTTP_ERROR' | 'TOO_MANY_REDIRECTS';

export class FetchError extends Error {
  constructor(public code: FetchErrorCode, message?: string) {
    super(message || code);
  }
}

// ---- address checks -------------------------------------------------------------------------------------------------------

function v4ToInt(ip: string): number {
  return ip.split('.').reduce((acc, p) => acc * 256 + Number(p), 0);
}
const v4 = (a: string, bits: number) => ({ base: v4ToInt(a), mask: bits === 0 ? 0 : (0xffffffff << (32 - bits)) >>> 0 });

const BLOCKED_V4 = [
  v4('0.0.0.0', 8),
  v4('10.0.0.0', 8),
  v4('100.64.0.0', 10), // carrier-grade NAT
  v4('127.0.0.0', 8),
  v4('169.254.0.0', 16), // link-local, includes the 169.254.169.254 cloud metadata address
  v4('172.16.0.0', 12),
  v4('192.0.0.0', 24),
  v4('192.0.2.0', 24),
  v4('192.88.99.0', 24),
  v4('192.168.0.0', 16),
  v4('198.18.0.0', 15),
  v4('198.51.100.0', 24),
  v4('203.0.113.0', 24),
  v4('224.0.0.0', 4), // multicast
  v4('240.0.0.0', 4), // reserved + broadcast
];

function isBlockedV4(ip: string): boolean {
  const n = v4ToInt(ip);
  return BLOCKED_V4.some(({ base, mask }) => ((n & mask) >>> 0) === ((base & mask) >>> 0));
}

// Expand an IPv6 literal to 8 16-bit groups, or null if it is not valid.
function parseV6(ip: string): number[] | null {
  let s = ip.split('%')[0];
  const lastColon = s.lastIndexOf(':');
  const tail = s.slice(lastColon + 1);
  if (tail.includes('.')) {
    if (net.isIPv4(tail) === false) return null;
    const [a, b, c, d] = tail.split('.').map(Number);
    s = `${s.slice(0, lastColon + 1)}${((a << 8) | b).toString(16)}:${((c << 8) | d).toString(16)}`;
  }
  const halves = s.split('::');
  if (halves.length > 2) return null;
  const head = halves[0] ? halves[0].split(':') : [];
  const rest = halves.length === 2 && halves[1] ? halves[1].split(':') : [];
  const missing = 8 - head.length - rest.length;
  if (halves.length === 1 ? head.length !== 8 : missing < 1) return null;
  const groups = [...head, ...(halves.length === 2 ? Array(missing).fill('0') : []), ...rest];
  if (groups.length !== 8) return null;
  const out = groups.map((g) => parseInt(g, 16));
  return out.some((g) => Number.isNaN(g) || g < 0 || g > 0xffff) ? null : out;
}

function isBlockedV6(ip: string): boolean {
  const g = parseV6(ip);
  if (!g) return true; // cannot parse: refuse
  const embeddedV4 = (hi: number, lo: number) => `${hi >> 8}.${hi & 255}.${lo >> 8}.${lo & 255}`;
  if (g.every((x) => x === 0)) return true; // ::
  if (g.slice(0, 7).every((x) => x === 0) && g[7] === 1) return true; // ::1
  if (g.slice(0, 5).every((x) => x === 0) && g[5] === 0xffff) return isBlockedV4(embeddedV4(g[6], g[7])); // ::ffff:a.b.c.d
  if (g.slice(0, 6).every((x) => x === 0)) return true; // ::a.b.c.d (deprecated IPv4-compatible)
  if (g[0] === 0x64 && g[1] === 0xff9b) return isBlockedV4(embeddedV4(g[6], g[7])); // NAT64
  if (g[0] === 0x2002) return isBlockedV4(embeddedV4(g[1], g[2])); // 6to4
  if (g[0] === 0x2001 && g[1] === 0) return true; // Teredo
  if (g[0] === 0x2001 && g[1] === 0xdb8) return true; // documentation
  if (g[0] === 0x100 && g[1] === 0 && g[2] === 0 && g[3] === 0) return true; // discard-only
  if ((g[0] & 0xfe00) === 0xfc00) return true; // unique local fc00::/7 (includes fd00:ec2::254 metadata)
  if ((g[0] & 0xffc0) === 0xfe80) return true; // link-local
  if ((g[0] & 0xff00) === 0xff00) return true; // multicast
  return false;
}

export function isBlockedIp(ip: string): boolean {
  const kind = net.isIP(ip);
  if (kind === 4) return isBlockedV4(ip);
  if (kind === 6) return isBlockedV6(ip);
  return true; // not an IP at all: refuse
}

const BLOCKED_HOSTNAME = /(^|\.)(localhost|local|localdomain|internal|intranet|lan|home|corp)$/i;

export function parsePublicUrl(raw: string): URL {
  let url: URL;
  try {
    url = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(raw.trim()) ? raw.trim() : `https://${raw.trim()}`);
  } catch {
    throw new FetchError('BAD_URL');
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') throw new FetchError('BAD_URL', 'protocol');
  if (url.username || url.password) throw new FetchError('BLOCKED', 'credentials in url');
  const port = url.port ? Number(url.port) : url.protocol === 'https:' ? 443 : 80;
  if (port !== 80 && port !== 443) throw new FetchError('BLOCKED', 'port');
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (!host) throw new FetchError('BAD_URL');
  if (net.isIP(host)) {
    if (isBlockedIp(host)) throw new FetchError('BLOCKED', 'address');
  } else if (BLOCKED_HOSTNAME.test(host) || !host.includes('.')) {
    throw new FetchError('BLOCKED', 'hostname');
  }
  return url;
}

// ---- transport ------------------------------------------------------------------------------------------------------------

export type Resolver = (hostname: string) => Promise<string[]>;
export type RawResponse = { status: number; headers: Record<string, string | string[] | undefined>; body: Buffer };
export type Transport = (url: URL, address: string, opts: { timeoutMs: number; maxBytes: number }) => Promise<RawResponse>;

export const defaultResolver: Resolver = async (hostname) => {
  const res = await dns.lookup(hostname, { all: true, verbatim: true });
  return res.map((r) => r.address);
};

export const nodeTransport: Transport = (url, address, { timeoutMs, maxBytes }) =>
  new Promise((resolve, reject) => {
    const isHttps = url.protocol === 'https:';
    const mod = isHttps ? https : http;
    const req = mod.request(
      {
        host: address, // the address that passed the check
        port: url.port || (isHttps ? 443 : 80),
        path: `${url.pathname}${url.search}`,
        method: 'GET',
        servername: isHttps ? url.hostname : undefined, // SNI + certificate check against the real hostname
        headers: {
          Host: url.host,
          'User-Agent': 'Mozilla/5.0 (compatible; SurFoxAI-10DLC-Checker/1.0; +https://www.getsurfox.com/tools/10dlc)',
          Accept: 'text/html,application/xhtml+xml',
          'Accept-Encoding': 'gzip, deflate, br',
        },
      },
      (res) => {
        const chunks: Buffer[] = [];
        let total = 0;
        res.on('data', (c: Buffer) => {
          total += c.length;
          if (total > maxBytes) {
            // Capped: keep what we have and stop reading.
            chunks.push(c.subarray(0, Math.max(0, c.length - (total - maxBytes))));
            res.destroy();
            return;
          }
          chunks.push(c);
        });
        const finish = () => {
          clearTimeout(deadline);
          resolve({ status: res.statusCode || 0, headers: res.headers, body: Buffer.concat(chunks) });
        };
        res.on('end', finish);
        res.on('close', finish);
        res.on('error', () => finish());
      },
    );
    // A total deadline for the whole exchange, not only idle time, so a slow trickle cannot hold the request open.
    const deadline = setTimeout(() => req.destroy(new FetchError('TIMEOUT')), timeoutMs);
    req.on('error', (e) => {
      clearTimeout(deadline);
      reject(e instanceof FetchError ? e : new FetchError('UNREACHABLE', (e as Error).message));
    });
    req.end();
  });

function decode(body: Buffer, encoding: string | undefined, maxBytes: number): string {
  let out = body;
  try {
    const enc = (encoding || '').toLowerCase();
    if (enc.includes('br')) out = zlib.brotliDecompressSync(body, { maxOutputLength: maxBytes });
    else if (enc.includes('gzip')) out = zlib.gunzipSync(body, { maxOutputLength: maxBytes, finishFlush: zlib.constants.Z_SYNC_FLUSH });
    else if (enc.includes('deflate')) out = zlib.inflateSync(body, { maxOutputLength: maxBytes, finishFlush: zlib.constants.Z_SYNC_FLUSH });
  } catch {
    // A truncated or oversized compressed stream: use whatever decoded (or the raw bytes) rather than failing the scan.
  }
  return out.toString('utf8');
}

export type FetchedPage = { url: string; status: number; html: string };

export type FetchDeps = { resolve?: Resolver; transport?: Transport; timeoutMs?: number; maxBytes?: number };

// Fetches one page. Follows at most maxRedirects redirects, re-validating every hop.
export async function fetchPublicPage(rawUrl: string, deps: FetchDeps = {}): Promise<FetchedPage> {
  const resolve = deps.resolve ?? defaultResolver;
  const transport = deps.transport ?? nodeTransport;
  const timeoutMs = deps.timeoutMs ?? LIMITS.fetchTimeoutMs;
  const maxBytes = deps.maxBytes ?? LIMITS.maxResponseBytes;

  let url = parsePublicUrl(rawUrl);
  for (let hop = 0; hop <= LIMITS.maxRedirects; hop++) {
    const host = url.hostname.replace(/^\[|\]$/g, '');
    let addresses: string[];
    if (net.isIP(host)) {
      addresses = [host];
    } else {
      try {
        addresses = await resolve(host);
      } catch {
        throw new FetchError('UNREACHABLE', 'dns');
      }
    }
    if (addresses.length === 0) throw new FetchError('UNREACHABLE', 'dns');
    // One private answer among public ones is still a refusal.
    if (addresses.some(isBlockedIp)) throw new FetchError('BLOCKED', 'address');

    let res: RawResponse;
    try {
      res = await transport(url, addresses[0], { timeoutMs, maxBytes });
    } catch (e) {
      if (e instanceof FetchError) throw e;
      throw new FetchError('UNREACHABLE', (e as Error).message);
    }

    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.location;
      const target = Array.isArray(loc) ? loc[0] : loc;
      if (!target) throw new FetchError('HTTP_ERROR', `redirect ${res.status} without location`);
      if (hop === LIMITS.maxRedirects) throw new FetchError('TOO_MANY_REDIRECTS');
      let next: URL;
      try {
        next = new URL(target, url);
      } catch {
        throw new FetchError('BAD_URL');
      }
      url = parsePublicUrl(next.toString()); // protocol, credentials, port, literal address, hostname: all re-checked
      continue;
    }

    if (res.status >= 400) throw new FetchError('HTTP_ERROR', String(res.status));
    const ct = String(Array.isArray(res.headers['content-type']) ? res.headers['content-type'][0] : res.headers['content-type'] || '').toLowerCase();
    if (!ct.includes('text/html') && !ct.includes('application/xhtml+xml')) throw new FetchError('NOT_HTML');
    const enc = res.headers['content-encoding'];
    return { url: url.toString(), status: res.status, html: decode(res.body, Array.isArray(enc) ? enc[0] : enc, maxBytes) };
  }
  throw new FetchError('TOO_MANY_REDIRECTS');
}
