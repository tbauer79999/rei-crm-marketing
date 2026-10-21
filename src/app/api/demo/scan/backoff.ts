// One short, polite retry when a site answers the demo's site read with "429 Too Many Requests".
//
// Why (welcomehome904.com, 2026-10-20): the site rate-limits our reader's user agent, so a read that would work a moment later failed once and
// the chat told the visitor "I could not preview your site from here". A single retry after a short pause is what a normal browser does, and it
// stays inside the 30 second route limit. It retries ONCE and only for 429: other errors (403, 404, 5xx) are real answers and are not hammered.

export const RETRY_AFTER_DEFAULT_MS = 1500;
export const RETRY_AFTER_CAP_MS = 3000;

/** The pause before the retry: the site's own Retry-After (seconds) when it gives one, never longer than the cap, otherwise a short default. */
export function retryDelayMs(retryAfter: string | null | undefined): number {
  const secs = Number(retryAfter);
  if (retryAfter && Number.isFinite(secs) && secs >= 0) return Math.min(Math.round(secs * 1000), RETRY_AFTER_CAP_MS);
  return RETRY_AFTER_DEFAULT_MS;
}

type ResponseLike = { status: number; headers: { get(name: string): string | null }; body?: { cancel(): Promise<unknown> } | null };

/** Runs `doFetch`; on a 429 it waits briefly and runs it exactly once more. The second answer is returned whatever it is. */
export async function withOneRetryOn429<T extends ResponseLike>(
  doFetch: () => Promise<T>,
  sleep: (ms: number) => Promise<unknown> = (ms) => new Promise((r) => setTimeout(r, ms)),
): Promise<T> {
  const first = await doFetch();
  if (first.status !== 429) return first;
  try {
    await first.body?.cancel();
  } catch {
    /* the body is being thrown away anyway */
  }
  await sleep(retryDelayMs(first.headers.get('retry-after')));
  return doFetch();
}
