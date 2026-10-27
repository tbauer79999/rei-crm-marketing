# Pre-deploy checklist: 10DLC Registration Checker

Run this on a Vercel **preview** deploy of the branch before anything reaches production. Tick each box.

> Until `content/consent.json` holds real wording the email unlock and the "leave your email" queue are off; everything else works.

## 0. Order of operations (platform first, then the website)

- [ ] Platform database: run `20261027_tools_10dlc_checker_internal_tool.sql` (done) **and** `20261027b_first_touch_src.sql`. Run the second one **before** deploying the platform code. (The demo sign-up still works if you forget, with a warning in the log, but the tag is then not saved.)
- [ ] Platform host: set `TOOLS_MODEL_SECRET`, deploy the platform.
- [ ] Customer Health -> Internal Tools -> "10DLC Checker (public tool)": create the workspace and key.
- [ ] Checker database: new free Supabase project, run `migrations/0001_init.sql`.
- [ ] Email: nothing to set up. The SurFox AI app already sends through Resend; the checker's mail route reuses its senders.
- [ ] Vercel (Preview and Production): `TOOLS_MODEL_URL`, `TOOLS_MODEL_SECRET`, `TOOLS_SUPABASE_URL`, `TOOLS_SUPABASE_SERVICE_KEY`, `TOOLS_COOKIE_SECRET`, `TOOLS_ADMIN_PASSWORD`, `TOOLS_CRON_SECRET`. (No Anthropic key and no email credentials on Vercel.)

## 1. Real 10-site test with the model

```
vercel env pull .env.preview --environment=preview
npx tsx --env-file=.env.preview src/lib/tools/live/ten-sites.ts
```

- [ ] At least 7 of 10 sites scan; sites that block bots show the friendly "could not scan" line, never a stack trace.
- [ ] Every scanned site shows a status for all four checks, and each fail/warn lists a `rule_id` from the rulebook.
- [ ] No check ends `output_blocked` or `model_failed` on more than a couple of sites (if it does, look at the rule count per check: the opt-in check carries 43 rules).
- [ ] Each site takes under 30 seconds and the printed total cost looks sane (cents per site). Compare it with the cost shown for the "10DLC Checker" workspace in the Anthropic Console.
- [ ] Spot-check three findings by hand: open the rule's source link and confirm the quote is on that page.

## 2. One real email of each kind

```
npx tsx --env-file=.env.preview src/lib/tools/live/send-test-emails.ts you@yourdomain.com
```

- [ ] Output says `report: sent` and `alert: sent`.
- [ ] The report email arrives at the address you gave, From the sales sender; Reply goes to sales@getsurfox.com.
- [ ] The alert email arrives at the demo-alert address (`DEMO_ALERT_EMAIL`, whatever address you passed), From the demo-alert sender.
- [ ] Both show in the Resend dashboard the SurFox AI app already uses.

## 3. One successful cron call

```
curl -i -H "Authorization: Bearer $TOOLS_CRON_SECRET" https://<preview-url>/api/tools/cron
```

(If preview deployment protection is on, add `-H "x-vercel-protection-bypass: <your bypass secret>"`.)

- [ ] `200` with JSON `{"ok":true,"alerts":{...},"reports":0,"queue":{...},"purged":{...}}`; none of the four are `null`.
- [ ] Without the header: `401`.
- [ ] Add the external cron (every 15 minutes, same header) and confirm its first run shows 200 in the cron service's log.

## 4. One test Starter purchase, attributed to the checker

The Starter checkout calls the production platform API (`api.surfox.ai`), so the platform must already be deployed with this change, and a
purchase is real Stripe. Use a Stripe promo code that makes it free, or buy once and refund.

- [ ] Open `https://<preview-or-prod-url>/pricing?src=10dlc-checker` in a fresh private window. In dev tools, Application -> Cookies: `surfox_first_src = 10dlc-checker`.
- [ ] Go to `/subscribe/starter`, complete checkout. In the browser Network tab the request to `create-checkout-session` has `"firstTouchSrc":"10dlc-checker"`.
- [ ] In Stripe, the Checkout Session's metadata has `first_touch_src: 10dlc-checker`.
- [ ] In the platform database:
  ```sql
  select id, first_touch_src, created_at from public.tenants where first_touch_src = '10dlc-checker' order by created_at desc limit 5;
  ```
  shows the new account.
- [ ] Demo handoff: open `/demo?src=10dlc-checker` (or arrive with the cookie), complete a demo sign-up, and confirm `demo_signups.first_touch_src` is set and the tenant has a `demo_first_touch_src` setting in `platform_settings`.

## 5. Turning on the email unlock

- [ ] `content/consent.json`: replace the pending marker with the approved wording, then deploy. The unlock form and the "leave your email" queue appear.
- [ ] Privacy page: the checker section's retention periods must match `RETENTION_DAYS` in `config.ts` (a test checks this).
- [ ] On production only, `view-source` of `/tools` shows no `noindex`. On a preview URL it still does.
- [ ] `/tools/admin`: sign in, check cost vs cap, the queue, and alert status.

## 6. Last look

```
npx tsx --test src/lib/tools/__tests__/*.test.ts
npx tsc --noEmit -p .
npx next build
```

- [ ] All green. Lighthouse mobile on `/tools` and `/tools/10dlc` is 90 or higher.
