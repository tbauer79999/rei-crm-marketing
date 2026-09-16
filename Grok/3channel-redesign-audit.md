# SurFox AI — 3-Channel Redesign Audit (Live Site)

**Audit date:** Wed Sep 16, 2026 (ET)  
**Live base:** https://www.getsurfox.com (curl -L; homepage + sitemap + key surfaces)  
**Scope:** Audit + prioritized gaps only. Design+copy Claude Code package comes AFTER this deliverable.  
**Do not change pricing dollars** unless channel labels are wrong (dollars left untouched here).

**CPO Voice honesty fence (current):**
- Voice = live transfer only via **tenant-number path** OR **hot notify**
- **SMS ↔ Voice shared brain OK**
- **NO** three-way web + SMS + Voice memory claims
- **No Voice** on reactivation / CSV list workflows
- Do not invent product capabilities; flag copy that overclaims vs fence

---

## 1. Executive verdict

Live SurFox marketing still reads as **SMS-primary with website chat as a bolted second door**—not as a balanced **SMS + website chat + Voice** lead-qualification platform. The homepage H1 is outcome-led (WooSender-style strength) and the subhead correctly pairs SMS + website chat (“two doors”), but Voice is **absent from hero, nav, pricing labels, verticals, demo, ROI, and compare pages**. The closest “How it works” surface is `/platform` (title: “How SurFox AI Works”), and it is **SMS/list-workflow only** (CSV → SMS engage → hot handoff)—no website chat path, no Voice/live-transfer path. Integrations even states “Today, SurFox AI starts with SMS - one channel,” which actively undercuts a 3-channel redesign. Pricing correctly lists SMS + website chat allowances (dollars OK; channel labels incomplete for Voice). **Verdict for redesign:** keep outcome H1 pattern; force equal 3-channel visual + copy system; rewrite How it works as job steps with channel footnotes under CPO fence; add Platform/nav entry points; scrub SMS-only category language and honesty risks before any “Voice” volume claims.

---

## 2. Inventory of pages touching channels / how-it-works

### Sitemap findings (`https://www.getsurfox.com/sitemap.xml`)
- **No** `/how-it-works`, `/voice`, `/chat`, `/channels`, `/product`, `/features` URLs.
- Probed 404s: `/how-it-works`, `/how_it_works`, `/howitworks`, `/product`, `/voice`, `/chat`, `/channels`, `/features`.

### Channel / product surfaces (fetched)

| URL | Role | Channel posture |
|-----|------|-----------------|
| `/` | Homepage | SMS + website chat (“two doors”); **no Voice** |
| `/platform` | De facto How it works + feature dump | **SMS-only** steps; Retell logo only; no web chat / Voice in HIW |
| `/pricing` | Plans | SMS + website chat quotas; **no Voice**; dollars unchanged |
| `/demo` | Demo CTA | SMS/list narrative; no 3-channel |
| `/roi` | ROI calculator | Explicitly **SMS Lead Qualification**; Phone as competitor channel table |
| `/integrations` | Stack | “start with SMS”; Voice Transcription = SOON (not live Voice product) |
| `/industries` | Hub | SMS-only HIW + reactivation |
| `/staffing`, `/wholesalers`, `/home-services`, `/events` | Verticals | SMS/list HIW; website chat rare/absent; Voice absent as product |
| `/about` | About | “SMS and web chat” — still 2-channel |
| `/compare/*` | Competitive | Positions SurFox as **Outbound SMS**; Voice attributed to competitors (Spara/Qualified) or Meera call-center transfers |
| Blog (sitemap) | Content | Heavy SMS follow-up / reactivation SEO; not re-audited line-by-line |

### How-it-works locations
| Location | Form | Strength |
|----------|------|----------|
| `/platform` § “How it works” | 3 steps | **Thin / SMS-skewed** |
| `/industries` § “How it works, for any industry” | 4 steps | Thin / SMS + reactivation |
| Vertical pages | 4 steps each | Job-ish but SMS/list only |
| Dedicated `/how-it-works` page | **Missing (404)** | — |
| Homepage | No numbered HIW section | Relies on dual phone/chat mock + capability tiles |

---

## 3. Homepage deep dive

**URL:** https://www.getsurfox.com/

| Field | Live copy |
|-------|-----------|
| **Title / OG** | “SurFox AI \| AI Lead Qualification for SMS & Website Chat” |
| **Meta desc** | Qualifies over SMS and website chat, then books the call… |
| **H1** | “Cold leads become calendar holds, without the chase.” |
| **Primary subhead** | “SMS when the lead arrives. Website chat when they browse. You show up to the call.” |
| **Capsule** | “Same AI job, two doors in. Runs 24/7.” |
| **Hero badge** | “SMS · Website chat” |

### Channel mentions (short evidence)
- **SMS / text:** Badge “SMS · Website chat”; “SMS when the lead arrives”; pricing “2,000 SMS + 200 website chats”; FAQ vs “text blasters.”
- **Website chat:** Subhead; dual mock labeled “Website chat”; plan quotas; FAQ “whether it starts over SMS or website chat.”
- **Voice / phone / call / live transfer:** “call” = **booked human sales call / calendar hold**, not AI Voice channel. No “Voice,” “live transfer,” or inbound try-it number on homepage.
- **Visual system:** Dual UI mock (SMS thread + website chat widget) + mascot — **2-channel**, not 3. No equal strip “Voice · Text · Web Chat.” Control-room screenshot is channel-agnostic ops UI.
- **Positioning tilt:** **SMS-primary / 2-channel** (outcome H1 good; third channel missing). WooSender pattern already partially used (outcome H1 + channels in subhead) — **keep and extend**, don’t replace with channel-laundry H1.

### Schema / SEO residue (SMS-only)
- Organization JSON-LD: “AI-powered **SMS** lead qualification platform…”
- SoftwareApplication JSON-LD: same SMS framing.
- Footer tagline: “AI that **texts**, qualifies, and books…”

---

## 4. How it works finding

### Exists?
- **Page:** No dedicated `/how-it-works` (404).
- **Primary stand-in:** `/platform` titled “How SurFox AI Works.”
- **Also:** sections on `/industries` + each vertical.

### `/platform` steps (live)
1. Upload your leads (CSV or CRM)  
2. AI engages via **SMS**  
3. Hot leads surface to your team  

**Channel coverage:** SMS + CSV/list only. **No** website chat step. **No** Voice / live transfer / hot-notify path. “What’s included” leads with “AI SMS Conversations.” Stack logos include **Retell AI** with **zero explanatory copy** (honesty/gap risk if visitors infer full Voice AI).

**Strength:** **Thin** (generic list→text→hand-off; not job outcomes; not 3-channel).

**Gaps:** Missing inbound website visitor path; missing Voice live-transfer / hot-notify; reactivation framed elsewhere without Voice fence; no “qualify → book” Meera-style job spine.

### Recommendation
- **Rewrite** `/platform` How it works as **job steps** (qualify → score → book/hand-off), with **channel footnotes** (SMS / website chat / Voice) under CPO fence.  
- **Create** either a dedicated `/how-it-works` **or** promote Platform in header nav as the HIW destination (today Platform is **footer-only**).  
- Do **not** invent three-way shared memory; SMS↔Voice shared brain OK to claim **only** where product-true; Voice **out** of CSV/reactivation steps.

---

## 5. Nav gaps

### Header (homepage + platform)
- Solutions (verticals) · Pricing · Demo · Company · Sign in · Start today  
- **Missing:** Platform / How it works · Channels · Voice · explicit 3-channel product entry  
- Hero badge is the only near-nav channel signal — and it is **2-channel**

### Footer
- Product: Platform, Pricing, Integrations, Security  
- Platform exists but is **not** in primary header → HIW buried  
- Tagline SMS-skewed (“texts…”)

### Platform page nav
- Same header as home; no in-page channel nav or Voice section

---

## 6. Honesty-risk claims found

*(Mapped to **updated** CPO fence.)*

| Risk | Where | Evidence / why it matters |
|------|--------|---------------------------|
| **Voice product invisible while Retell logo present** | `/platform` integrations strip | “Retell AI” logo with no “live transfer / tenant number / hot notify” framing → visitors may invent Voice capabilities |
| **“Voice Transcription” SOON ≠ live Voice channel** | `/integrations` | Coming-soon transcription can be confused with AI Voice qualification |
| **“Today we start with SMS - one channel”** | `/integrations` | Directly contradicts 3-channel redesign; undercuts website chat already sold on home/pricing |
| **Homepage “two doors”** | `/` | Accurate for SMS+web; becomes **underclaim** once Voice ships in marketing — must become three doors **without** claiming three-way memory |
| **Compare pages: SurFox = Outbound SMS only** | `/compare/surfox-vs-skipio`, `-meera-ai`, `-spara`, `-qualified`, all-competitors | Hardens SMS-only category; Voice attributed to competitors; Meera page contrasts SurFox vs warm transfers in a way that may fight SurFox’s own Voice live-transfer story |
| **Reactivation + CSV workflows** | `/platform`, `/industries`, verticals, `/roi` | Correct that SMS reactivation exists; **must not** attach Voice to CSV/reactivation (fence). ROI “resurrection engine” is SMS — keep Voice out |
| **Shared-memory overclaim** | Not strongly claimed for Voice today | Homepage “Same AI job, two doors” is OK for SMS+web **if** product-true; **do not** extend to web+SMS+Voice three-way memory. SMS↔Voice shared brain is **allowed** when product-true |
| **“Call” language ambiguity** | Home, platform, verticals | “Books the call” / “worth calling” = human sales call — fine; clarify vs AI Voice live transfer when Voice lands |
| **Surf named agent** | Not on live marketing pages audited | Mascot image exists; no “Surf” agent naming in primary surfaces — optional loud pattern only if product-safe |
| **Pricing dollars** | `/pricing`, home `#pricing` | $147 / $597 / $1,497 / $2,497 — **leave dollars**; gap is **missing Voice inclusion/label**, not price amounts |

**No live claim found** of three-way web+SMS+Voice memory. **No live claim** of Voice on reactivation (good — preserve that honesty).

---

## 7. Industry Watch — steal vs skip

### Steal (product-safe)

| Pattern | Source | Why for SurFox | Fence note |
|---------|--------|----------------|------------|
| **Equal channel strip** “Voice. Text. Web Chat.” + **3 equal tiles** | Skipio | Fixes SurFox’s 2-door / SMS-primary visual system immediately | Voice tile copy must say live transfer via tenant number **or** hot notify — not “AI dials your CSV” |
| **Short product video** showing all channels | Skipio | Homepage mocks alone don’t prove Voice | Script Voice path carefully; no reactivation Voice |
| **Numbered How it works as JOB steps** (qualify → book), not channel laundry list | Meera | SurFox platform HIW is currently a channel laundry list (“engages via SMS”) | Put channels as secondary labels under job steps |
| **Outcome H1 + channels in subhead** | WooSender (SurFox already leans this) | Keep H1; upgrade subhead from two doors → three channels | Don’t replace H1 with “SMS + Chat + Voice” laundry |

### Skip / use carefully

| Pattern | Source | Why skip or fence |
|---------|--------|-------------------|
| Implying **equal Voice volume on list upload** | Skipio-style equal tiles if overcopied | SurFox Voice ≠ CSV/reactivation |
| **Three-way unified memory** marketing | Common multi-channel fluff | CPO: **no** web+SMS+Voice memory claims |
| Positioning SurFox as anti–warm-transfer (current Meera compare) | Own compare pages | Conflicts with SurFox Voice = live transfer / hot notify — rewrite compare narrative in a later pass |
| **Inbound Voice try-it number** | Optional loud | Only if product-safe + tenant/demo path real; else skip |
| **Named agent “Surf”** | Optional loud | Only if product-true and brand-approved; mascot alone ≠ named agent |

---

## 8. Prioritized gaps for redesign package (numbered)

1. **Hero channel system (`/`)** — Replace badge “SMS · Website chat” and “two doors” with equal **Voice · SMS/Text · Website chat** strip + 3 equal tiles (Skipio steal). Keep outcome H1; rewrite subhead to name all three without laundry-list H1 (WooSender keep).

2. **How it works rewrite (`/platform` + optional `/how-it-works`)** — Meera-style job steps (engage → qualify/score → book or live-transfer/hot-notify). Channel coverage footnotes: SMS, website chat, Voice. **Create** dedicated HIW page **or** elevate Platform into header; current HIW is thin and SMS-only.

3. **Voice honesty block (sitewide)** — Explicit microcopy: Voice = live transfer via tenant number **or** hot notify; SMS↔Voice shared brain OK; **no** three-way memory; **no Voice on CSV/reactivation**. Apply before any Voice volume language.

4. **Visual system** — Replace dual SMS+chat-only hero art with **3-channel** visuals; add short product video if assets exist. Retell logo on `/platform` needs adjacent honest Voice explanation or risk of implied full dialer.

5. **Nav** — Add **Platform / How it works** (and optionally Channels) to header; footer tagline off “texts-only”; Solutions stay but shouldn’t be the only product story.

6. **Pricing channel labels (`/pricing`, home `#pricing`)** — Keep **dollar amounts**. Add Voice inclusion/limits/labels when product-ready; today Voice is missing while SMS + website chat quotas are shown.

7. **Integrations narrative (`/integrations`)** — Kill “starts with SMS - one channel.” Separate live Voice (if any) from “Voice Transcription SOON.” Align with 3-channel positioning.

8. **Verticals + industries HIW** — Today SMS/CSV/reactivation-centric. Add website chat where true; add Voice only on tenant-number / inbound-eligible flows — **never** on reactivation steps.

9. **Meta / JSON-LD / titles** — Home title still “SMS & Website Chat”; schema still “SMS lead qualification.” Update to 3-channel without inventing capabilities.

10. **Compare / category pages** — Soften “Outbound SMS only” / “new category: SMS Lead Qualification” where it blocks 3-channel; fix Meera compare so SurFox Voice live-transfer isn’t contradicted by “we don’t do transfers” framing (later content pass).

11. **Demo + ROI** — Demo Day-1 story is upload-list SMS; ROI titled SMS calculator with Phone as losing channel. Reframe for multi-channel outcomes without putting Voice on reactivation ROI math.

12. **Optional loud (flag only)** — Named agent Surf + live inbound Voice try-it number **iff** product-safe; otherwise skip.

---

## 9. Per-surface quick cards (key URLs)

### `/` Homepage
- **Tilt:** SMS-primary / 2-channel  
- **Visual:** 2 mocks (SMS + website chat)  
- **Voice honesty issues:** None invented; Voice simply missing  

### `/platform`
- **H1:** “AI that texts your leads, qualifies them, and books appointments, 24/7.”  
- **Subhead:** Upload leads… team only talks to people who are ready  
- **HIW:** CSV → SMS → hot surface — **thin, SMS-only**  
- **Voice:** Retell logo only — **honesty risk**  

### `/pricing`
- **H2:** “Pay for messages, not headcount.”  
- **Channels:** SMS + website chat quotas; no Voice  
- **Dollars:** $147 / $597 / $1,497 / $2,497 — **do not change**  

### `/demo`
- **H1:** “See SurFox AI In Action”  
- **Story:** Upload leads / hot notifications — SMS-list tilt  

### `/roi`
- **H1:** AI SDR vs human SDR cost comparison  
- **Tilt:** SMS resurrection / SMS beats Phone table — conflicts with marketing Voice as a SurFox channel  

### `/integrations`
- **Tilt:** SMS-first roadmap copy — **must change** for 3-channel  

### Verticals (`/staffing`, `/wholesalers`, `/home-services`, `/events`)
- **HIW sections exist** (stronger than home) but **SMS/list**; website chat underused; Voice absent  

---

## 10. Note for next deliverable

This file is **audit + gaps only**. Design + copy Claude Code package comes **after** this audit. No publish. No invented traffic. Pricing dollars unchanged pending channel-label decisions.

**CMO one-liner:** Site is a strong 2-door SMS+web story with outcome H1; redesign must force Skipio-equal 3-channel visuals, Meera-style job HIW, and CPO-fenced Voice copy—without Voice on CSV/reactivation and without three-way memory claims.
