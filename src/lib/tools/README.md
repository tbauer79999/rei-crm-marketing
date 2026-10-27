# 10DLC Registration Checker: setup and operations

Served at `/tools` (checker), `/tools/10dlc` (explainer), `/tools/r/<id>` (shared summary), `/tools/admin` (admin).
Code lives only in `src/app/tools/`, `src/app/api/tools/` and `src/lib/tools/`.

## Content (what makes the routes go live)

| File | Source | State |
| --- | --- | --- |
| `content/rulebook.json` | built from `src/app/tools/10dlc/10dlc-rulebook-paste-2026-10-27.md` | 163 rules |
| `content/explainer.json` | built from `src/app/tools/10dlc/10dlc-explainer-final-2026-10-27.md` | 178 blocks + 3 JSON-LD objects |
| `content/consent.json` | general counsel | **still the pending marker** |

Rebuild both JSON files after editing either `.md` file: `npx tsx src/lib/tools/build-content.ts`.
The converter copies text through unchanged. The one transformation: URLs on the bare domain `https://getsurfox.com` become
`https://www.getsurfox.com`, because the bare domain 301-redirects to www.

**Routes open/closed.** `/tools`, `/tools/10dlc`, `/tools/r/*`, `/tools/admin` and the tool APIs are open whenever the rulebook and the
explainer load and validate. If either is missing, empty, malformed or still holds a `[PASTE ...]` / `[PENDING ...]` / `PLACEHOLDER`
marker, they return 404 with noindex and the sitemap leaves them out; the build never fails over this. The consent wording is not a
gate: while `consent.json` still holds the pending marker the checker works, but the email unlock and the "leave your email" queue are
not offered. `/api/tools/cron` is outside this check (it needs its secret) so upkeep keeps running.

Retention is enforced in code (`retention.ts`, run by the cron call) and the privacy section states the same periods.

Before deploying, work through `PRE-DEPLOY.md`.

## Environment variables (all server-only; none are `NEXT_PUBLIC_`)

| Variable | Purpose |
| --- | --- |
| `TOOLS_SUPABASE_URL`, `TOOLS_SUPABASE_SERVICE_KEY` | the checker's own Supabase project (never the SurFox AI one) |
| `TOOLS_MODEL_URL`, `TOOLS_MODEL_SECRET` | base URL of the SurFox AI app and the shared secret for its `/api/public/tools-model/messages` (the model) and `/api/public/tools-model/mail` (email) routes. The marketing site holds **no** Anthropic key and **no** email credentials |
| `MONTHLY_COST_CAP_USD` | monthly cap on logged model cost, default 30 |
| `TOOLS_COOKIE_SECRET` | long random string; signs the visitor cookie, hashes IPs, signs the admin cookie |
| `TOOLS_ADMIN_PASSWORD` | password for `/tools/admin` |
| `TOOLS_CRON_SECRET` | bearer token for `GET /api/tools/cron` |
| `TOOLS_ALERT_DAILY_LIMIT`, `TOOLS_REPORT_DAILY_LIMIT` | optional, default 100 each. Our own daily send counters; raise them to match the Resend plan the SurFox AI app uses |

## Setup steps

1. Create a new free Supabase project. Run `migrations/0001_init.sql` in its SQL editor. Copy the URL and the service-role key.
2. Email needs nothing new: the SurFox AI app already sends the demo emails through Resend. Alerts go to admin@surfox.ai, like the platform's other notifications. Visitor reports go from the sales sender, Reply-To sales@getsurfox.com.
3. In the SurFox AI app: run migration `20261027_tools_10dlc_checker_internal_tool.sql`, set `TOOLS_MODEL_SECRET` (same value as above) on the app's host, deploy, then open Customer Health -> Internal Tools -> "10DLC Checker (public tool)" and create its Anthropic workspace and key there, like the other internal tools. Set a spend limit on that workspace too.
4. Set the variables above in Vercel (Production and Preview as needed).
5. Add a free external cron (for example cron-job.org) that calls `GET https://www.getsurfox.com/api/tools/cron` every 15 minutes with
   header `Authorization: Bearer <TOOLS_CRON_SECRET>`. It retries failed alerts and report emails, sends the next-day catch-up
   email, and works the scan queue. (`vercel.json` is outside this work's allowed files, so there is no Vercel cron entry.) The
   same call keeps the free Supabase project from pausing for inactivity.
6. The checker adds no third-party scripts or pixels, so nothing needs to go in `ConsentGatedScripts.tsx`. It does add cookies and storage, listed below, which the privacy page does not yet describe.
7. Preview deploys send `X-Robots-Tag: noindex`; only `VERCEL_ENV=production` is indexable.

## Outside services and their limits

| Service | Plan | Limit that matters | Cost |
| --- | --- | --- | --- |
| Supabase | Free | 500 MB database; free projects pause after about a week with no activity | free |
| Resend (via the SurFox AI app) | the app's existing plan | shares the app's quota with the demo emails | existing plan |
| Anthropic API (via the SurFox AI app) | Pay as you go | no free tier | **costs money**, hard-capped in code by `MONTHLY_COST_CAP_USD` |
| External cron | Free | one call every few minutes | free |
| Vercel | existing plan | function duration of 45 to 60 seconds on the check and cron routes | existing plan |

Verify the free-tier numbers on each provider's pricing page before launch; they change.

## Cookies and storage the checker adds

- `tools_vid`: signed visitor id, first party, httpOnly, 1 year. Used for the 3-scans-a-day limit.
- `surfox_first_src`: first-touch `?src=` tag, 60 days, set by `src/middleware.ts`, readable by the page.
- `tools_admin`: admin session, httpOnly, 12 hours, admin only.
- `sessionStorage` key `tools_first_touch`: first-touch tag, referrer and landing page for the tab session.
- Server side: a keyed hash of the visitor's IP address (never the raw address), the visitor id, and the email address only if the
  visitor gives one with consent.

## Tests

```
npx tsx --test src/lib/tools/__tests__/*.test.ts
```
