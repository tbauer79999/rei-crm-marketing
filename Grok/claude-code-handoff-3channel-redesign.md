# SurFox AI — Claude Code Handoff: 3-Channel Redesign Package

**Status:** DRAFT / PROPOSE ONLY — **DO NOT PUBLISH** from this agent or any automated deploy.  
**Who publishes:** Tom Bauer via Claude Code (review → merge → ship).  
**Source audit:** `/workspace/3channel-redesign-audit.md` (live site audit, Wed Sep 16, 2026 ET).  
**Live base:** https://www.getsurfox.com  
**Brand spelling:** Always **SurFox AI** (never SurfOx, Surfox, etc.).

---

## 1. Status / do-not-publish / who publishes

| Item | Value |
|------|--------|
| Package type | Redesign **proposal** + Claude Code checklist |
| Live deploy from this agent | **FORBIDDEN** |
| Publisher | **Tom** → Claude Code |
| Pricing dollars | **DO NOT CHANGE** ($147 / $597 / $1,497 / $2,497) |
| Scope | Homepage 3-door system + How it works + nav/icons + scrub list + pricing **channel labels** only (no Voice minute packs/overages yet) |
| Optional loud | Named agent “Surf” + inbound Voice try-it — **PRODUCT-SAFE GATE** (checkbox; not required) |

**Claude Code:** Implement in a branch. PR for Tom. No force-push to main. No inventing product capabilities past CPO fence.

---

## 2. Goals + non-goals

### Goals
1. Site reads as **SMS + website chat + Voice** (3 equal channels), not SMS-only or 2-door.
2. Homepage: **3-door** hero system (badge/subhead/strip/tiles/visuals) while keeping **outcome H1** spirit (WooSender pattern). Voice door = **publish inbound number → unknown callers → net-new lead** (equal weight, not SMS sidekick).
3. How it works: Meera-style **job steps** (qualify → book/hand-off), channels as footnotes — not channel laundry.
4. Nav/icons: header entry to Platform or How it works; equal 3-channel icon system; footer + schema honesty.
5. Scrub SMS-only / one-channel undercuts; Retell honesty; Voice Transcription ≠ live Voice.
6. Pricing: add/fix **channel labels** for Voice when ready — **leave dollar amounts alone**.

### Non-goals
- Changing plan **prices**, inventing Voice quotas, or listing Voice **minute packs / overages** before CFO Pattern A/B + CTO Infinity $/min lock.
- Three-way web+SMS+Voice shared memory claims.
- Voice on CSV / reactivation / list-upload flows.
- Step 2 hard cuts on compare pages (direction only here).
- Own-numbers program marketing.
- Homepage thrash unrelated to channels (mascot redesign, unrelated CTAs, etc.).
- Live deploy / production publish from this package alone.

### CPO fence (HARD — never violate)

| Allowed | Forbidden |
|---------|-----------|
| SMS ↔ Voice **shared brain** (when product-true) | **Three-way** web + SMS + Voice memory |
| Voice = **live transfer** via **tenant number** OR **hot notify** | Voice on CSV / reactivation / list resurrection |
| Channels as footnotes under job steps | Channel laundry as H1 |
| Outcome H1 + 3 channels in subhead | Inventing inbound dialer / AI dials CSV |

---

## 3. Repo grep / route hints (PATHS UNVERIFIED)

Claude Code: confirm paths in the actual repo before editing. These are **live URL → likely surface** hints from audit, not verified file paths.

| Surface | Live URL | Grep / route hints (UNVERIFIED) |
|---------|----------|----------------------------------|
| Homepage | `/` | `app/page`, `pages/index`, `components/Hero`, `HeroBadge`, `home` |
| Platform (de facto HIW) | `/platform` | `platform`, `how-it-works` section components |
| Nav / header | sitewide | `Header`, `Navbar`, `Navigation`, `nav` config |
| Footer | sitewide | `Footer`, tagline / brand blurb |
| Pricing | `/pricing`, home `#pricing` | `pricing`, plan cards, SMS/chat quota strings |
| Integrations | `/integrations` | “one channel”, “Voice Transcription”, SOON |
| Schema JSON-LD | home + layout | `Organization`, `SoftwareApplication`, `json-ld`, `schema` |
| How it works (missing) | `/how-it-works` **404** | create route OR elevate `/platform` |
| Compare | `/compare/*` | direction only this pass |
| Verticals / industries | `/industries`, `/staffing`, etc. | HIW sections — later pass unless easy |

**Suggested greps (run in repo):**
```bash
rg -n "two doors|SMS · Website|Website chat|one channel|Voice Transcription|Retell|texts your leads|SMS lead qualification" --glob '!node_modules'
rg -n "Organization|SoftwareApplication|json-ld|JSON-LD" --glob '!node_modules'
rg -n "Platform|Solutions|Pricing|Demo" -g '*nav*' -g '*header*' -g '*Header*'
```

---

## 4. Homepage redesign

**Keep:** Outcome-led H1 spirit — *“Cold leads become calendar holds, without the chase.”* (or equivalent). Do **not** replace with “SMS + Chat + Voice” laundry H1.

**Steal:** Skipio equal strip + 3 tiles; WooSender outcome H1 + channels in subhead (extend 2 → 3).

### 4.1 Hero badge / subhead → 3 doors (Voice equal, not a sidekick)

| Element | Live (2-door) | Direction (3-door — Voice equal) |
|---------|---------------|----------------------------------|
| Hero badge | `SMS · Website chat` | `Voice · SMS · Website chat` — **equal visual weight**; do **not** tuck Voice last as a quieter third |
| Capsule | `Same AI job, two doors in…` | `Same AI job, three doors in. Runs 24/7.` |
| Primary subhead | SMS + browse chat only | Name all three doors as **peer capture paths**, e.g.: *Form-to-SMS and chat answer inbound demand fast. Publish a Voice number so unknown callers get answered and qualified as net-new leads. CSV lists get paced qualification — not a blast. You show up to the calendar hold — or take the live transfer.* |
| Meta title / OG | `…SMS & Website Chat` | `…SMS, Website Chat & Voice` |
| Meta desc | SMS + website chat only | Voice = **inbound published number → unknown callers qualify**; not “AI dials lists” |

**Copy direction (examples, not final polish):**
- Badge: `Voice · SMS · Website chat` (reuse sitewide; Voice first or middle is fine — **never** underweighted).
- Subhead: three **peer** doors. Voice beat is **net-new inbound capture**, not “callback when an SMS lead is hot.”
- Keep ending clear that the human sales call / calendar hold is still the human’s job when booked.

### 4.2 Equal channel strip + 3 tiles (Skipio) — Voice story locked

Add below hero (or as hero secondary):

1. **Equal strip** headline: `Voice. Text. Web Chat.` (or `Voice · SMS · Website chat`)
2. **Three equal tiles** (same size, same visual weight — Voice tile is **not** smaller or “advanced feature” chrome):

| Tile | Primary job-line (equal weight) | Fence footnote |
|------|----------------------------------|----------------|
| **SMS / Text** | **Two modes:** (A) **Inbound speed** — form/webhook → SMS near-instant qualify (**DNC/TCPA gated**; don’t claim Voice/chat zero-friction) · (B) **CSV/bulk/reactivation** — paced Spread Evenly, work the list | Never sell bulk as speed-to-lead / blast faster. CSV/reactivation = SMS only (no Voice) |
| **Website chat** | **Speed to lead** — answer strangers the **moment** they chat | No three-way memory claim |
| **Voice** | **Speed to lead** — publish inbound number → unknown callers answered **instantly** → qualify → **create net-new lead** | Live transfer to **tenant number** OR **hot notify**. SMS↔Voice shared brain OK on **eligible known** leads (secondary). **Never** Voice on CSV/reactivation. **Never** “AI dials your CSV.” |

### Speed-to-lead fence (CPO/CTO correction after Tom add, 2026-09-16)

**SMS does BOTH jobs by source** — do **not** park all SMS under paced list (looks like a blaster).

| Mode | What | Framing |
|------|------|---------|
| **Speed to lead — 3 inbound doors** | (1) **Form/webhook → SMS** (near-instant; still **DNC/TCPA gated** — do **not** claim Voice/chat-level zero-friction seconds) · (2) **Website chat** (instant stranger) · (3) **Publish-number Voice** (instant stranger / unknown caller) | Answer inbound demand the moment it arrives |
| **Paced qualification only** | **CSV / bulk / reactivation** (Da Silva Spread Evenly) | Work the list / qualify — **never** “blast faster,” **never** sell as speed-to-lead |

Homepage + `/platform` must show **inbound SMS** as a speed door alongside chat + Voice; keep **bulk SMS** as the paced door.

**Voice tile must NOT primary-frame as:** “callback on a known SMS lead” or “live transfer when an SMS conversation is hot.” That path may appear as a **secondary** line under the tile or in HIW footnotes only.

### 4.3 Dual mock → triple / 3-door visual

- Live: dual UI mock (SMS thread + website chat widget) — **underweights Voice**.
- Direction: **triple** mock **or** equal 3-door visual: SMS thread · website chat widget · **Voice inbound** (published number + unknown caller → qualify / create lead → transfer or hot notify).
- If assets missing: ship strip + 3 equal tiles first; Voice tile copy must still carry the publish-number story.
- Optional short product video (Skipio steal): script **must** show (1) tenant publicizes Voice number, (2) unknown caller, (3) AI qualifies / creates lead, (4) live transfer or hot notify — **not** list dialer, **not** SMS-callback-as-hero.

### 4.4 Copy direction summary (homepage)

- H1: keep outcome spirit.
- Subhead / badge / capsule / strip / tiles: **three equal doors**.
- Voice = **3rd channel the tenant turns on and publicizes** for **net-new unknown callers**.
- Secondary OK: SMS↔Voice shared brain on known/eligible leads; live transfer / hot notify.
- Forbidden: three-way web+SMS+Voice memory; Voice on CSV/reactivation; Voice as SMS sidekick only.

---

## 5. How it works (`/platform`) — Voice equal story (URGENT board correction)

### Primary recommendation: **Elevate `/platform` as HIW destination + rewrite its HIW section**

**Rationale:**
- Dedicated `/how-it-works` is **404**; `/platform` already titled “How SurFox AI Works” and sits in footer Product nav.
- Faster path: rewrite Platform HIW + **add Platform to header** → one canonical HIW URL without new SEO orphan.
- Create `/how-it-works` only if Tom wants a cleaner URL and redirect/alias later; **do not** ship two competing HIW pages.

**Optional later:** `/how-it-works` → redirect or thin alias to `/platform#how-it-works`.

### Tom correction (2026-09-16) — Voice is not a sidekick

Prior drafts underweighted Voice as SMS/chat afterthought. **`/platform` must give Voice equal visual and story weight** on this primary path:

1. Tenant creates / turns on the **3rd channel** and **publicizes an inbound Voice number**
2. **Strangers / unknown leads** (not already in the system) call in
3. SurFox AI **answers, qualifies, and creates a real lead** — **net-new capture**
4. When ready: **live transfer** to tenant number **or** **hot notify**

**Secondary beat only (not the hero Voice story):** callback / continued thread on a **known** SMS-eligible lead via SMS↔Voice shared brain (product-true). Do **not** lead Platform or homepage Voice with that framing.

### Meera-style job steps (job spine) + **equal channel doors** under each step

Replace live CSV → SMS → hot surface laundry. Job steps stay Meera-style (qualify → book/hand-off). Channels are **three peer doors**, not “SMS primary + others.”

| Step | Job (primary) | Equal channel doors (footnotes — same weight) |
|------|---------------|-----------------------------------------------|
| **1. Open the door** | Meet net-new demand where it shows up | **3 inbound speed doors:** form/webhook→SMS (near-instant, DNC/TCPA gated) · website chat (instant) · publish-number Voice (instant unknown callers). **Separate:** CSV/bulk SMS = paced, not this step’s speed story |
| **2. Qualify & create** | Ask, filter, score; persist a real lead | Inbound SMS/chat/Voice = qualify **now** (speed). CSV/bulk/reactivation = paced qualify. Voice primary = **create lead from unknown caller**. SMS↔Voice shared brain OK later on **eligible known** leads. **No** three-way memory |
| **3. Book or hand off** | Calendar hold **or** live transfer / hot notify | Booked human call stays clear. Voice handoff = **tenant number OR hot notify** |

### Required `/platform` Voice section (equal visual weight)

Add a dedicated block (same visual weight as SMS list workflow and website chat — not a footnote):

**Title direction:** “Voice: publish a number. Capture unknown callers.”

**Also required on `/platform` (equal clarity):** an **Inbound SMS** speed beat — form/webhook → near-instant SMS qualify (DNC/TCPA gated). Visually separate from **CSV/bulk/reactivation** paced Spread Evenly. Do not collapse all SMS into the paced column.

**Body direction (paste-ready outline):**
- Turn on Voice as your third channel and **publicize the inbound number** (site, ads, missed-call, Google Business, etc.).
- When someone **not already in SurFox AI** calls, SurFox AI **answers in the moment** (**speed to lead**), **qualifies**, and **creates the lead**.
- Hot intent → **live transfer** to your tenant number **or** **hot notify** your team.
- Contrast on the same page: **inbound** form/webhook→SMS is a **speed door** (near-instant, DNC/TCPA gated — don’t claim Voice/chat zero-friction). **CSV/bulk/reactivation** SMS is paced Spread Evenly — **not** sold as speed-to-lead / blast faster.
- Still true: no Voice on CSV upload / reactivation lists; no three-way memory with web chat.

**Visual direction:** equal third column / panel showing published number → unknown caller → qualify → lead created → transfer/notify. Do **not** illustrate Voice primarily as “SMS thread escalates to call.”

### What NOT to say on HIW / Platform

- “Upload CSV → Voice dials them” / Voice on reactivation / resurrection
- “One brain across SMS, chat, and Voice” / three-way memory
- Leading with “Voice callbacks your SMS leads” as the main Voice value
- Selling **CSV / bulk / reactivation** as “speed to lead” or “blast faster” (paced only). Do **not** hide **inbound** form/webhook→SMS from the speed-to-lead trio
- Applying Da Silva Spread Evenly language to **inbound** Voice/chat **or inbound form→SMS** (those are speed doors; Spread Evenly is CSV/bulk/reactivation only)
- Implying Retell = outbound list dialer without inbound publish-number + live-transfer framing
- Underweighting Voice vs SMS/chat in layout (smaller tile, “coming soon” chrome, buried accordion)

**Platform page H1/subhead direction:** Shift from “AI that **texts** your leads…” toward job outcome + **three equal doors** in subhead (keep outcome spirit; don’t laundry-list H1). Voice door language = inbound published number / unknown callers / net-new leads.

---

## 6. Nav / icons

### Header
- **Add:** `Platform` **or** `How it works` (prefer **Platform** if that remains canonical URL).
- Placement: with Solutions / Pricing / Demo — product story must not be footer-only.
- Do not add fake `/voice` or `/channels` routes unless real pages ship.

### Channel icon system
- Three **equal** icons: Voice · SMS/Text · Website chat.
- Same stroke weight, same size, reused on homepage strip, tiles, Platform HIW footnotes, footer if space.
- Avoid SMS-primary oversized phone-as-SMS-only iconography without Voice + chat peers.

### Footer
- Tagline live: “AI that **texts**, qualifies, and books…” → direction: qualify/book across **SMS, website chat, and Voice** (fence-safe Voice wording).
- Keep Product links; ensure Platform stays linked and accurate after HIW rewrite.

### Schema / org description
- Organization + SoftwareApplication JSON-LD: replace “AI-powered **SMS** lead qualification…” with 3-channel framing that does **not** invent capabilities.
- Direction: AI lead qualification over SMS, website chat, and Voice (live transfer / hot notify).

---

## 7. Scrub list

Claude Code: find and fix these honesty / positioning undercuts.

| # | Surface | Issue | Direction |
|---|---------|-------|-----------|
| 1 | `/integrations` | “Today, SurFox AI starts with SMS - **one channel**” | Kill. State current channels: SMS + website chat + Voice (fenced). |
| 2 | `/compare/*` | SurFox framed as **Outbound SMS only** | Soften category language **direction only** this pass — no Step 2 hard narrative rewrite required here. |
| 3 | `/platform` Retell logo | Logo, zero Voice honesty caption | Add caption: Voice = live transfer via tenant number **or** hot notify (not CSV dialer). |
| 4 | `/integrations` “Voice Transcription **SOON**” | Confused with live Voice product | Disambiguate: transcription roadmap ≠ live Voice qualification channel; separate labels. |
| 5 | Meta / titles | “SMS & Website Chat” only | Extend to 3-channel labels. |
| 6 | Footer / schema | “texts” / “SMS lead qualification” | 3-channel honesty. |
| 7 | “Call” ambiguity | Booked sales call vs AI Voice | When Voice lands, clarify “books the call” = human calendar; Voice tile = live transfer / hot notify. |

---

## 8. Pricing — labels only (dollars untouched)

**HARD RULE:** Do **not** change `$147` / `$597` / `$1,497` / `$2,497` or equivalent displayed amounts.

**BOARD FENCE (2026-09-16) — Voice metering OFF pricing until locked:**
- Pricing **may name Voice** as an included channel (live transfer via tenant number **or** hot notify).
- **Do NOT** list Voice **minute packs** (e.g. 100 / 400 / 1000 / 2000 min) or **overage rates** on `/pricing` or home `#pricing` yet.
- Wait until Tom picks **CFO Pattern A or B** and CTO locks **Infinity $/min**.
- Until then: channel label + honesty fence only — no Voice volume table, no pack SKUs, no $/min overage line.

| Do | Don’t |
|----|-------|
| Name Voice as an included channel with fence microcopy | Change plan dollars |
| Keep existing SMS + website chat quota copy accurate | List Voice minute packs (100/400/1000/2000) or overage $/min |
| Align home `#pricing` cards with `/pricing` **channel labels** | Invent Voice quotas “for now” or imply Voice on list upload |
| Use “Voice included — limits via demo / coming with metering” if needed | Ship metering UI before Pattern A/B + Infinity $/min lock |

**If Voice limits unknown:** label as included capability with fence microcopy only. **Do not** placeholder fake minute packs.

---

## 9. Honesty checklist for Claude Code

Before merge, verify **every** new/changed string:

- [ ] No **three-way** web + SMS + Voice memory claim
- [ ] SMS ↔ Voice shared brain only if product-true; otherwise omit
- [ ] Voice = **tenant number** path **OR** **hot notify** — stated where Voice is sold
- [ ] **No Voice** on CSV upload, reactivation, resurrection, or ROI list math
- [ ] Retell logo has adjacent honesty caption
- [ ] “Voice Transcription SOON” ≠ live Voice channel (disambiguated)
- [ ] “One channel” / SMS-only category lines removed or rewritten
- [ ] “Call” / “books the call” still readable as **human** sales call where intended
- [ ] Pricing **dollars** unchanged
- [ ] **No** Voice minute packs (100/400/1000/2000) or overage $/min on pricing surfaces (board fence until Pattern A/B + Infinity $/min)
- [ ] SurFox AI spelling correct everywhere touched
- [ ] Optional Surf agent + try-it number **not** shipped unless PRODUCT-SAFE GATE checked

---

## 10. Acceptance checklist

Ship-ready when:

- [ ] Homepage badge + subhead + capsule = **3 doors** (not two)
- [ ] Equal channel strip + **3 equal tiles** live on homepage
- [ ] Hero visual is triple/3-door (or strip+tiles with clear 3-channel system) — not SMS+chat dual-only
- [ ] Outcome H1 spirit retained (not channel-laundry H1)
- [ ] `/platform` HIW rewritten as **job steps** with channel footnotes under CPO fence
- [ ] Header includes **Platform** (or How it works) — HIW not footer-only
- [ ] Footer tagline + JSON-LD org/app descriptions updated off SMS-only
- [ ] Integrations “one channel” line gone
- [ ] Retell honesty caption present
- [ ] Voice Transcription SOON disambiguated
- [ ] Pricing dollars identical to pre-change; Voice named as channel only if included — **no** minute packs/overages until CFO/CTO lock
- [ ] No Voice on CSV/reactivation copy in touched surfaces
- [ ] Tom reviewed PR; Claude Code did not auto-publish to production from this package alone

---

## 11. Out of scope (this package)

- **Step 2** compare-page hard cuts (`/compare/surfox-vs-*`) — direction only in scrub list; full narrative rewrite later.
- Own-numbers / BYO number program marketing.
- Homepage thrash unrelated to channels (unrelated CTAs, brand system overhaul, mascot rename without gate).
- Inventing Voice on CSV / reactivation / ROI resurrection math.
- Demo + ROI full rewrites (flagged in audit; not required to close this package — optional follow-on).
- Vertical/industry HIW full pass (add only if trivial; otherwise follow-on).
- Live production deploy by audit/handoff agent.

---

## 12. Optional loud — PRODUCT-SAFE GATE (not required)

Include in PR description as **unchecked** unless Tom confirms product-safe:

- [ ] **PRODUCT-SAFE GATE:** Named agent **“Surf”** on marketing (mascot alone ≠ named agent today)
- [ ] **PRODUCT-SAFE GATE:** Live inbound Voice **try-it number** on homepage/Platform (only if real tenant/demo path exists)

If either box unchecked → **do not** ship that section. No placeholder fake numbers.

---

## 13. Reference audit path

**Absolute path:** `/workspace/3channel-redesign-audit.md`  
**Live base audited:** https://www.getsurfox.com  
**Audit date:** Wed Sep 16, 2026 (ET)

---

## Claude Code execution order (imperative)

1. Confirm repo routes/components via greps in §3 (PATHS UNVERIFIED).
2. Homepage: badge → subhead → capsule → strip → 3 tiles → visual system (§4).
3. Rewrite `/platform` HIW as job steps + footnotes; update Platform H1/subhead direction (§5).
4. Header: add Platform; footer tagline; schema JSON-LD (§6).
5. Scrub integrations one-channel + Retell caption + transcription disambiguation (§7).
6. Pricing labels only — **diff dollars must be empty** (§8).
7. Run honesty checklist (§9) + acceptance checklist (§10).
8. Open PR for Tom; leave PRODUCT-SAFE GATE optional sections out unless checked (§12).
9. **Do not publish** to production without Tom’s explicit go.

---

*End of handoff package. Draft/propose only.*
