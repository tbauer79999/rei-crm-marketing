import assert from 'node:assert/strict';
import http from 'node:http';
import { AddressInfo } from 'node:net';
import test from 'node:test';
import { FetchError, fetchPublicPage, isBlockedIp, nodeTransport, parsePublicUrl, type RawResponse, type Transport } from '../net-guard';

const BLOCKED = [
  '127.0.0.1', '127.1.2.3', '10.0.0.5', '172.16.0.1', '172.31.255.255', '192.168.1.1', '169.254.169.254', '169.254.0.1', '0.0.0.0',
  '100.64.0.1', '224.0.0.1', '255.255.255.255', '198.18.0.1',
  '::1', '::', 'fe80::1', 'fc00::1', 'fd00:ec2::254', 'ff02::1', '::ffff:127.0.0.1', '::ffff:169.254.169.254', '::ffff:7f00:1', '64:ff9b::a00:1', '2002:7f00:1::', '2001:db8::1',
];
const PUBLIC = ['93.184.216.34', '8.8.8.8', '1.1.1.1', '172.32.0.1', '2606:4700:4700::1111', '::ffff:8.8.8.8'];

test('private, loopback, link-local and metadata addresses are blocked', () => {
  for (const ip of BLOCKED) assert.equal(isBlockedIp(ip), true, ip);
});
test('public addresses are allowed', () => {
  for (const ip of PUBLIC) assert.equal(isBlockedIp(ip), false, ip);
});
test('anything that is not an IP is refused by isBlockedIp', () => {
  assert.equal(isBlockedIp('not-an-ip'), true);
});

test('URL parsing refuses bad schemes, credentials, odd ports and internal hostnames', () => {
  const bad: [string, string][] = [
    ['file:///etc/passwd', 'BAD_URL'], ['ftp://example.com', 'BAD_URL'], ['javascript:alert(1)', 'BAD_URL'],
    ['http://user:pw@example.com/', 'BLOCKED'], ['https://example.com:8443/', 'BLOCKED'], ['http://example.com:22/', 'BLOCKED'],
    ['http://localhost/', 'BLOCKED'], ['http://foo.localhost/', 'BLOCKED'], ['http://printer.local/', 'BLOCKED'], ['http://metadata.google.internal/', 'BLOCKED'],
    ['http://intranet/', 'BLOCKED'], ['http://169.254.169.254/latest/meta-data/', 'BLOCKED'], ['http://[::1]/', 'BLOCKED'], ['http://2130706433/', 'BLOCKED'],
    ['http://0x7f.0.0.1/', 'BLOCKED'], ['http://127.1/', 'BLOCKED'], ['http://[::ffff:127.0.0.1]/', 'BLOCKED'],
  ];
  for (const [u, code] of bad) {
    assert.throws(() => parsePublicUrl(u), (e: unknown) => e instanceof FetchError && e.code === code, u);
  }
  assert.equal(parsePublicUrl('example.com').toString(), 'https://example.com/');
});

const html = (status = 200, headers: Record<string, string> = { 'content-type': 'text/html' }, body = '<html>hello</html>'): RawResponse => ({ status, headers, body: Buffer.from(body) });
const publicResolver = async () => ['93.184.216.34'];

test('a hostname that resolves to a private address is blocked before any connection', async () => {
  let connected = false;
  const transport: Transport = async () => { connected = true; return html(); };
  await assert.rejects(fetchPublicPage('https://evil.example.com', { resolve: async () => ['10.0.0.8'], transport }), (e: unknown) => e instanceof FetchError && e.code === 'BLOCKED');
  assert.equal(connected, false);
});

test('one private answer among public ones still blocks (DNS rebinding mix)', async () => {
  await assert.rejects(fetchPublicPage('https://evil.example.com', { resolve: async () => ['93.184.216.34', '127.0.0.1'], transport: async () => html() }), (e: unknown) => e instanceof FetchError && e.code === 'BLOCKED');
});

test('the connection is made to the address that was checked', async () => {
  let used = '';
  await fetchPublicPage('https://example.com', { resolve: publicResolver, transport: async (_u, addr) => { used = addr; return html(); } });
  assert.equal(used, '93.184.216.34');
});

test('a redirect to the cloud metadata address is blocked on the hop and never requested', async () => {
  const hits: string[] = [];
  const transport: Transport = async (u) => {
    hits.push(u.toString());
    return u.hostname === 'example.com' ? html(302, { location: 'http://169.254.169.254/latest/meta-data/' }) : html();
  };
  await assert.rejects(fetchPublicPage('https://example.com', { resolve: publicResolver, transport }), (e: unknown) => e instanceof FetchError && e.code === 'BLOCKED');
  assert.deepEqual(hits, ['https://example.com/']);
});

test('a redirect to a hostname that resolves privately is blocked on the hop', async () => {
  const resolve = async (h: string) => (h === 'internal.example.net' ? ['192.168.0.9'] : ['93.184.216.34']);
  const transport: Transport = async (u) => (u.hostname === 'example.com' ? html(301, { location: 'https://internal.example.net/admin' }) : html());
  await assert.rejects(fetchPublicPage('https://example.com', { resolve, transport }), (e: unknown) => e instanceof FetchError && e.code === 'BLOCKED');
});

test('redirects to a non-http scheme, a port, localhost or credentials are blocked', async () => {
  for (const target of ['file:///etc/passwd', 'https://example.com:8443/', 'http://localhost/', 'http://user:pw@example.org/']) {
    const transport: Transport = async () => html(302, { location: target });
    await assert.rejects(fetchPublicPage('https://example.com', { resolve: publicResolver, transport }), (e: unknown) => e instanceof FetchError, target);
  }
});

test('a public redirect chain is followed up to 3 hops', async () => {
  let n = 0;
  const transport: Transport = async () => (n++ < 3 ? html(302, { location: `https://example.com/step${n}` }) : html());
  const page = await fetchPublicPage('https://example.com', { resolve: publicResolver, transport });
  assert.equal(page.status, 200);
  assert.equal(n, 4);
});

test('more than 3 redirects is an error', async () => {
  const transport: Transport = async () => html(302, { location: 'https://example.com/again' });
  await assert.rejects(fetchPublicPage('https://example.com', { resolve: publicResolver, transport }), (e: unknown) => e instanceof FetchError && e.code === 'TOO_MANY_REDIRECTS');
});

test('only text/html is accepted', async () => {
  for (const ct of ['application/pdf', 'image/png', 'application/json', 'application/octet-stream']) {
    await assert.rejects(fetchPublicPage('https://example.com', { resolve: publicResolver, transport: async () => html(200, { 'content-type': ct }) }), (e: unknown) => e instanceof FetchError && e.code === 'NOT_HTML', ct);
  }
  const ok = await fetchPublicPage('https://example.com', { resolve: publicResolver, transport: async () => html(200, { 'content-type': 'text/html; charset=utf-8' }) });
  assert.match(ok.html, /hello/);
});

test('error statuses and DNS failures are reported as codes, not raw errors', async () => {
  await assert.rejects(fetchPublicPage('https://example.com', { resolve: publicResolver, transport: async () => html(403) }), (e: unknown) => e instanceof FetchError && e.code === 'HTTP_ERROR' && e.message === '403');
  await assert.rejects(fetchPublicPage('https://example.com', { resolve: async () => { throw new Error('ENOTFOUND'); }, transport: async () => html() }), (e: unknown) => e instanceof FetchError && e.code === 'UNREACHABLE');
});

test('the real transport caps the response size and enforces a total deadline', async () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    if (req.url === '/big') {
      res.write('a'.repeat(50_000));
      res.end('b'.repeat(50_000));
    } else {
      res.write('x'); // never ends: a slow trickle
    }
  });
  await new Promise<void>((r) => server.listen(0, '127.0.0.1', () => r()));
  const port = (server.address() as AddressInfo).port;
  try {
    const big = await nodeTransport(new URL(`http://127.0.0.1:${port}/big`), '127.0.0.1', { timeoutMs: 3000, maxBytes: 10_000 });
    assert.ok(big.body.length <= 10_000, `got ${big.body.length}`);
    await assert.rejects(nodeTransport(new URL(`http://127.0.0.1:${port}/slow`), '127.0.0.1', { timeoutMs: 300, maxBytes: 10_000 }));
  } finally {
    server.closeAllConnections();
    server.close();
  }
});

test('the full path refuses a real local server (loopback is never fetched)', async () => {
  let hit = false;
  const server = http.createServer((_q, res) => { hit = true; res.writeHead(200, { 'content-type': 'text/html' }); res.end('secret'); });
  await new Promise<void>((r) => server.listen(0, '127.0.0.1', () => r()));
  const port = (server.address() as AddressInfo).port;
  try {
    await assert.rejects(fetchPublicPage(`http://127.0.0.1:${port}/`), (e: unknown) => e instanceof FetchError && e.code === 'BLOCKED');
    await assert.rejects(fetchPublicPage(`http://localhost:${port}/`), (e: unknown) => e instanceof FetchError && e.code === 'BLOCKED');
    assert.equal(hit, false);
  } finally {
    server.close();
  }
});
