# Handoff: SurFox AI — Homepage Redesign ("Thread")

## Overview
A redesigned marketing homepage for **SurFox AI**, an AI-native SMS platform that engages, qualifies, and books leads via text autonomously. The goal of this redesign is to make the site read as a **serious, enterprise-grade product** (Stripe/Vercel level of polish) while staying **bold and category-defining** — replacing the previous "hobbyist" blue→violet-gradient look.

The defining idea: the hero **is** a live SMS qualification unfolding inside a phone — a cold real-estate-wholesaler lead becoming a booked call, with no human involved. Everything else on the page reinforces "conversation beats broadcast."

## About the Design Files
The files in this bundle are **design references created in HTML/CSS/vanilla JS** — a prototype showing the intended look, copy, and behavior. **They are not production code to copy directly.**

The task is to **recreate this design in the existing SurFox marketing codebase** (Next.js 15 App Router + React + Tailwind v4, the `rei-crm-marketing` project), using its established patterns (the existing `Nav`/`Footer` components, `lucide-react` icons, Tailwind classes, and `next/image`). Match the visuals pixel-closely, but implement with the codebase's conventions — do not paste raw HTML into a React component.

- `surfox-homepage.html` — the full design reference (open in a browser to see it live, including the hero animation).
- `assets/newSurFoxLogo1.png` — the SurFox logo (already in the repo at `public/newSurFoxLogo1.png`).
- `assets/AI-controlroom.png` — product screenshot used in the "control room" section (already in the repo at `public/images/`).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and the hero interaction are all intended as shown. Recreate pixel-closely. The one deliberately "illustrative" element is the hero phone conversation — its content is fixed sample copy, not dynamic data.

---

## Design Tokens

### Color
| Token | Hex | Usage |
|---|---|---|
| Ink (primary text / dark buttons) | `#13171F` | Headlines, body-dark, primary button bg, lead ("them") chat bubbles |
| Ink-2 (deep) | `#0E1320` | Phone bezel, dynamic island |
| Paper (page background) | `#F4F5F3` | Page background (warm neutral) |
| Card / white | `#FFFFFF` | Cards, phone screen, panels |
| Muted text | `#5A626E` | Sub-copy, descriptions |
| Faint text | `#8A92A0` | Eyebrow meta, captions, status |
| Hairline | `#E4E6E2` | Borders |
| Hairline-2 | `#EDEEEB` | Inner dividers |
| **Cyan (accent)** | `#0FB6C9` | The one accent — "AI/live" signal, highlights. Pulled from the fox-logo eye color. Use sparingly; never as a gradient. |
| Cyan-deep (accent on light) | `#0A7C8C` | Accent text on light bg, headline emphasis, eyebrows |
| Cyan tint | `#F0F8F9` | Soft accent panel background (learning callout) |
| Qualified green | `#12A150` | "Qualified / booked / hot" success states only |
| Chat AI bubble bg | `#F1F3F4` | The AI's outgoing message bubbles (gray) |
| Chat AI tint | `#EAF7F9` | Avatar bg, "AI live" pill, annotation tags |
| Booked banner bg / border / text | `#E9F8EF` / `#cdeed9` / `#0c7a3c` | Calendar "Call booked" banner |

**No gradients anywhere.** The previous site's blue→violet gradient was removed on purpose. Buttons are solid ink (Vercel-style); cyan is a precise signal color.

### Typography
Three Google fonts:
- **Space Grotesk** (display) — all headings, big numbers, names, prices. Weights 400/500/600/700. `letter-spacing: -0.02em` to `-0.03em`; tight line-heights (~1.0–1.05).
- **IBM Plex Sans** (body/UI) — body copy, buttons, descriptions. Weights 400/500/600/700.
- **IBM Plex Mono** (eyebrows + metrics) — uppercase eyebrows (`letter-spacing: .18–.2em`), small labels, status text, price notes.

Headline sizes (desktop): hero H1 `52px/600`; section H2 `40px/600`; statement H2 `58px/700`; big stat numbers `44–72px/600`.

### Spacing / Radius / Shadow
- Page max-width: `1080px`, side padding `32px`. (Nav/footer use a slightly wider `1180px` inner.)
- Section vertical padding: `~84px` (top/bottom).
- Card radius: `16–22px`. Buttons: `9px`. Pills: `999px`. Phone bezel: `52px`; phone screen: `40px`.
- Shadows are soft and low: e.g. card `0 30px 64px -38px rgba(19,23,31,.24)`; phone `0 56px 96px -38px rgba(14,19,32,.58)`. No harsh/dark drop shadows.

### Buttons
- **Primary (`.btn-ink`)**: bg `#13171F`, white text, 600 weight, `padding:11px 20px`, radius `9px`; hover → `#000`.
- **Cyan (`.btn-cyan`)**: bg `#0FB6C9`, text `#06222a`; hover `#1bc6da`. Used on final CTAs and the "Most popular" plan.
- **Ghost (`.btn-ghost`)**: white bg, `1px solid #E4E6E2` border, ink text; hover border darkens.

---

## Page Structure (top to bottom)

### 0. Sticky Nav (simplified)
Clean, minimal, light-mode SaaS nav. Translucent paper background with blur and a bottom hairline. Structure left → right:

`Logo | Product ▾ | Pricing | Company ▾ | Sign in | Start free trial`

- **Product** dropdown: `For Staffing Firms`, `For Real Estate`. (A `Home Services` item gets added later once that page exists — keep the dropdown easy to extend.)
- **Pricing** — direct link to `#pricing`.
- **Company** dropdown: `About`, `Contact`.
- **Sign in** — plain text link (muted), no button styling.
- **Start free trial** — the single ink/primary CTA button. **Only one CTA in the nav** — no "Request Demo" or duplicate "Get Started".

Dropdowns open on hover/focus: a white card (radius 12px, hairline border, soft shadow `0 18px 40px -18px rgba(19,23,31,.22)`, ~208px wide) with muted links that go ink on hover (paper-tinted hover row). The dropdown trigger is a text+chevron; the chevron rotates 180° on open. Keep the existing cyan underline-on-hover for plain links. Everything that used to live in the old busy nav moves to the footer (below).

### 1. Hero — TWO COLUMN (the centerpiece)
- **Grid:** `grid-template-columns: 1.02fr 0.98fr; gap:48px; align-items:center`. Collapses to one column below `860px`.
- **Left column (`.hero-copy`, max-width 540px, left-aligned):**
  - Eyebrow (mono): `CONVERSATIONAL AI FOR SMS`
  - H1 (Space Grotesk 52/600): "This is a cold lead becoming a *booked call.*" — "booked call." in cyan-deep `#0A7C8C`.
  - Lede (19px, muted, max 470px): "No human touched this conversation. SurFox texted, qualified, and booked, while the operator was doing something else."
  - Two buttons: ink "Start free trial" + ghost "See pricing →" (both link to `#pricing`).
- **Right column (`.hero-phone`):** a **phone mockup** containing the live SMS conversation (see "Hero phone" below).
- The whole phone must fit above the fold on a normal laptop — the phone is a **fixed height** device, not a growing card.

### 2. Annotated moments (3-up, below hero)
Three left-aligned items (mono number + Space Grotesk h4 + muted p), max-width 760px centered:
- `01 — Reads real intent` — "Not keyword matching. It knows 'maybe' means keep going, not stop."
- `02 — Works the objection` — "Pulls out the number, frames the offer, and keeps momentum."
- `03 — Closes for the call` — "Books a real time on your calendar and hands off the transcript."
These fade/slide in after the hero conversation finishes playing.

### 3. Social proof — results card
White card, max-width 880px. Header row (mono): `PROOF · STAFFING FIRM` left, green `✓ 7-day campaign` right. Then a 4-column stat strip (Space Grotesk numbers `46px`):
- `12` — hot leads generated in 7 days
- `11` — appointments booked
- `~$300K` (green) — in potential pipeline
- `1` — already closed

Footer of card: narrative line — "A staffing firm generated **12 hot leads in 7 days.** One closed, eleven appointments booked, and roughly **$300K in potential pipeline.**" — then a mono caption: `REAL CUSTOMER. REAL CAMPAIGN. NO VA. NO SDR.`

### 4. Quiet stats (4-up band)
White band, top/bottom hairline. Big Space Grotesk numbers with cyan-deep unit suffix:
- `100%` — of your list, worked
- `50pt` — scoring on every thread
- `24/7` — follow-up, no headcount
- `$147` — to start, not $1,000

### 5. Statement divider
Centered, large Space Grotesk 58/700: "A text blaster **sends.** SurFox AI **sells.**" — "sends." in faint gray `#8A92A0`, "sells." in cyan-deep. Sub-line (muted): "Blasting the same message to thousands isn't selling. Holding the conversation that books the call is."

### 6. "AI learns over time" callout
Soft cyan-tint panel (`#F0F8F9`, border `#dCEEF1`, radius 24px), two columns:
- **Left:** eyebrow `COMPOUNDING ADVANTAGE`; H2 (Space Grotesk 38/600) "Every conversation makes the next one *smarter.*" ("smarter." cyan-deep); paragraph about SurFox studying phrasing/objections/yes-moments and folding it into the next campaign; mono micro-line: "Growth learns from your last 100 conversations · Scale from your last 1,000."
- **Right:** a small white card titled `QUALIFIED RATE ↑ OVER TIME` with **4 ascending bars** (cyan gradient, light → saturated, heights 34/55/76/100%), the tallest labeled "best yet", and an x-axis of `Campaign 1 · 4 · 8 · 12`. (Conceptual illustration — no real chart library needed; CSS bars are fine.)

### 7. Product — control room
Centered section head: eyebrow `THE CONTROL ROOM`; H2 "Every conversation, in one place."; sub. Below, a **browser-chrome frame** (3 dots + mono URL `app.getsurfox.com/control-room`) wrapping the screenshot `AI-controlroom.png` (repo: `public/images/AI-controlroom.png`).

### 8. Pricing (`id="pricing"`) — 3 tiers
Section head: eyebrow `PRICING`; H2 "Pay for messages, not headcount."; sub "Real conversational AI at SMB pricing. Every plan includes a 14-day free trial." Three cards; the middle is highlighted.

| Plan | Price | Volume | Description | Features | Button |
|---|---|---|---|---|---|
| **Starter** | `$147 / mo` | 2,000 conversations / mo | "For operators testing the waters on a focused list." | AI conversation engine · 50-point lead scoring · Knowledge base upload · Google & Outlook calendar booking | ghost "Start free trial" |
| **Growth** *(Most popular)* | `$597 / mo` | 10,000 conversations / mo | "For teams ready to work a full list every month." | Everything in Starter · Conversation learning (last 100) · A/B testing & optimization · Zapier integration | cyan "Start free trial" |
| **Scale** | `$2,497 / mo` | 40,000 conversations / mo | "For high-volume operations running constant campaigns." | Everything in Growth · Conversation learning (last 1,000) · Multiple personas & campaigns · Priority support | ghost "Start free trial" |

The **Growth** card has a cyan border, a cyan shadow, and a `MOST POPULAR` mono pin badge at top-left. Prices are Space Grotesk `46px`; the `/ mo` suffix is small IBM Plex Sans faint. Volume line in cyan-deep. Feature checks use a cyan-deep check icon. Below the grid, a mono note: "14-day free trial on every plan · Pre-approved Twilio A2P so you can text within minutes."

### 9. Final CTA
Centered: H2 (Space Grotesk 54/600) "The buyers are on your list *right now.*" ("right now." cyan-deep). Sub: "Upload a list and watch the first conversations begin within minutes." Cyan button "Start your free trial".

### 10. Footer (expanded — carries the nav overflow)
The footer now holds the navigation that was removed from the top bar. Layout: a top region split into a **brand block** (logo + one-line tagline "AI that texts, qualifies, and books your leads, autonomously.") and a **4-column link grid**, then a hairline, then a bottom row (copyright left, `Privacy · Terms` right).

Columns:
- **Product:** Platform · Pricing · Integrations · Security
- **Solutions:** For Staffing Firms · For Real Estate · Home Services
- **Company:** About · Contact · Leadership · Careers
- **Resources:** Blog · ROI calculator · AI principles

Column headers are mono uppercase faint labels; links are muted → ink on hover. Bottom row: `© 2026 SurFox AI, Inc.` On mobile the 4 columns collapse to 2. Use the existing `footer.tsx` as the base and expand it.

---

## Hero phone (the key component)

A vertical **phone mockup** in the hero's right column:
- **Bezel:** `#0E1320`, width `392px`, radius `52px`, padding `13px`, big soft shadow.
- **Screen:** white, radius `40px`, `overflow:hidden`, fixed total height (~590px) so the whole device sits above the fold.
- **Dynamic island:** a `108×28px` `#0E1320` pill, centered, overlapping the top of the screen.
- **Status bar:** `9:41` (Space Grotesk) left; signal bars + battery glyph right (drawn with small CSS shapes).
- **Conversation header:** circular avatar "M" (cyan tint), `Marta R.` / `Motivated seller · Maple St`, and an `● AI live` pill (cyan, pulsing dot) on the right.
- **Thread (fixed-height scroll area, height ~262px, `overflow-y:auto`, scrollbar hidden):** message bubbles.
  - AI ("ai") bubbles: gray `#F1F3F4`, dark text, left-aligned, tail bottom-left.
  - Lead ("them") bubbles: ink `#13171F`, white text, right-aligned, tail bottom-right.
  - Lead bubbles have a small mono annotation tag to their left: `READS INTENT`, `CAPTURES PRICE`, `BOOKS CALL` (cyan tint pill).
- **Result footer (below the thread, inside the screen):** a circular score ring `44/50` (green arc), `● Hot · qualified`, a meta line `Motivated · price captured · cash-ready · 3m 12s`, and a full-width green **"Call booked · 5:30 PM / Handed off to your team"** banner with a calendar icon.

### Conversation script (fixed copy)
1. AI: "Hi Marta, Alex here with Brightway Homes. Saw you might consider an offer on the Maple St house. Still open to it?"
2. Lead *(reads intent)*: "Maybe. Depends what you're offering."
3. AI: "Fair. Ballpark, what number were you hoping for?"
4. Lead *(captures price)*: "Around 240 if it's cash and quick"
5. AI: "That works on our end. Cash, no repairs, you pick the close date. Got 10 min tomorrow to talk specifics?"
6. Lead *(books call)*: "Yeah, after 5 is good"
7. AI: "Booked you for 5:30. Talk then."

---

## Interactions & Behavior

### Hero conversation animation (the one required interaction)
On load (gated to the hero scrolling into view; fires immediately since it's at the top):
1. **Message 1 (the first AI bubble) is visible immediately — NO delay, no animation.** It must be on screen at first paint.
2. Every subsequent message reveals **one at a time** on a stagger (~700ms first gap, then per-message):
   - Before each **AI** message, show a **typing indicator** (3 bouncing dots in a gray bubble) for a duration roughly proportional to the message length (~620–1180ms), then swap the dots for the message text.
   - **Lead** messages appear after a short beat; their **annotation tag** (`READS INTENT`, etc.) fades in ~240ms after the bubble.
3. As each message appears, the thread **auto-scrolls to the bottom** (`thread.scrollTop = thread.scrollHeight`) so the newest message is always in view — like a real phone. (Use an **instant** scroll assignment, not smooth, for reliability.)
4. After the last message, the **score/result footer** fades in, then the 3 "annotated moments" below the hero stagger in.

**Robustness requirements (important):**
- Reveal each element by toggling it visible on the stagger timer; the motion flourish should be **transform-only** (a small `translateY` rise), so that if motion is ever suppressed, content is never left invisible.
- Respect `prefers-reduced-motion: reduce` — when set, **skip the animation entirely and render the full conversation statically** (all bubbles shown, typing indicators hidden, result + annotations visible).
- The first message must render even with JS disabled.

### Other interactions
- Standard button hovers (see Buttons). Nav link hover underline (cyan) already in the repo.
- The `● AI live` dot and the green "ready" dots have a subtle infinite opacity pulse (decorative; fine to keep or drop).
- Anchor links: hero buttons and nav "Pricing" scroll to `#pricing` (smooth scroll).
- Fully responsive: hero collapses to one column under 860px (text centers, phone below); stat/results/pricing grids collapse to 1–2 columns on small screens.

### State
No real data/state management required — the conversation is fixed sample copy. The only "state" is the animation timeline (a sequence of timeouts) plus the thread scroll position. In React, implement with a `useEffect` that runs the staggered reveal on mount (guarded by an `IntersectionObserver` and a `prefers-reduced-motion` check), using refs to the message elements and the scroll container.

---

## Assets
- **Logo:** `newSurFoxLogo1.png` — already in repo at `public/newSurFoxLogo1.png` (a dark metallic fox head + "SurFox" wordmark with cyan "AI"). Used in nav (~26px tall) and footer (~24px).
- **Product screenshot:** `AI-controlroom.png` — already in repo at `public/images/AI-controlroom.png`. Used in the control-room browser frame.
- No other imagery. Icons (check, calendar, arrow) are simple inline SVGs / `lucide-react`.

## Files in this bundle
- `surfox-homepage.html` — full design reference (open in a browser; the hero animation runs on load).
- `assets/newSurFoxLogo1.png`, `assets/AI-controlroom.png` — copies of the two images for previewing the HTML locally.

## Target codebase notes
- Repo: `rei-crm-marketing` (Next.js 15 App Router, React 18, Tailwind v4, `lucide-react`, `framer-motion` available).
- Replace the current homepage at `src/app/page.tsx` (+ its `HomeClientSections.tsx`). Update `src/app/components/nav.tsx` to the simplified nav (section 0) and expand `src/app/components/footer.tsx` to the column layout (section 10).
- Keep SEO/JSON-LD schema blocks from the current `page.tsx`, but update any pricing references to **$147 / $597 / $2,497**.
- The hero animation needs `'use client'`; the rest can stay server-rendered for LCP. Fonts: add Space Grotesk + IBM Plex Sans + IBM Plex Mono (via `next/font/google`), exposed as CSS variables.
