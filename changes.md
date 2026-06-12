# EcoMatch — Product Plan & Roadmap (`changes.md`)

> **Product:** A B2B industrial symbiosis marketplace where one business's waste/byproduct
> becomes another's raw material (coffee grounds → skincare, fabric scraps → insulation,
> wood offcuts → furniture, spent grain → animal feed).
>
> **Scope of this document:** Define the full page list, the data we collect from users,
> how logistics works for both sides, the product/listing data model, and PM recommendations.
>
> **Guiding principle for this phase:** _Build the basic marketplace that works end-to-end first._
> Matching is powered by a **simple ML-based recommendation system** on the backend (purity, distance,
> volume, material-type scoring) — **no generative-AI / LLM features in this phase.** We can layer
> smarter intelligence later once the core loop (List → Discover → Connect → Transact → Deliver) is solid.

---

## 1. Total Pages We Need

We currently have **7 pages built** (Landing, Sign In, Sign Up, Preferences/Onboarding, Marketplace,
Listing Details, Messages). Below is the **complete page list** for a working business, marked by status
and priority. The two account types are **Generator** (has waste/byproduct to sell) and **Upcycler**
(wants material to source). Most pages are shared; a few are role-specific.

### A. Public / Marketing (no login)
| # | Page | Status | Priority | Purpose |
|---|------|--------|----------|---------|
| 1 | Landing Page | ✅ Built | P0 | Value prop, how it works, social proof, CTA |
| 2 | How It Works | ✅ Built (section) | P1 | Operational flow for both roles |
| 3 | About / Contact | ⬜ To build | P2 | Trust, company info, support contact |
| 4 | Pricing / Plans | ⬜ To build | P2 | Subscription / commission model |
| 5 | Legal (Privacy, Terms) | ⬜ To build | P1 | Required for any real B2B platform |

### B. Authentication & Onboarding
| # | Page | Status | Priority | Purpose |
|---|------|--------|----------|---------|
| 6 | Sign In | ✅ Built | P0 | Login |
| 7 | Sign Up | ✅ Built | P0 | Register |
| 8 | Forgot / Reset Password | ⬜ To build | P1 | Account recovery |
| 9 | Email / Business Verification | ⬜ To build | P0 | Verify the business is real (KYB-lite) |
| 10 | Onboarding — Business Profile (Preferences) | ✅ Built | P0 | Business type, materials, transport |

### C. Core Application (logged-in)
| # | Page | Status | Priority | Purpose |
|---|------|--------|----------|---------|
| 11 | Dashboard / Home | ⬜ To build | **P0** | Snapshot: active listings, new matches, pending deals, impact stats |
| 12 | Marketplace / Browse | ✅ Built | P0 | Discover material listings with filters |
| 13 | Listing Details | ✅ Built | P0 | Full product info + match/compatibility + map |
| 14 | Create / Edit Listing | ⬜ To build | **P0** | Generator posts a new byproduct (form + photos) |
| 15 | My Listings (manage) | ✅ Partly (details view) | P0 | List/pause/edit/delete own listings, see views & requests |
| 16 | Matches / Recommendations | ⬜ To build | P0 | ML-ranked list of compatible counterparts |
| 17 | Requests / Inquiries | ⬜ To build | **P0** | Incoming & outgoing "request to source" with accept/decline |
| 18 | Messages / Inbox | ✅ Built | P0 | 1:1 chat per deal |
| 19 | Deal / Order Page | ⬜ To build | **P0** | Single agreed transaction: status, quantity, price, pickup, docs |
| 20 | Logistics / Shipment Tracking | ⬜ To build | P1 | Pickup scheduling + status timeline for a deal |
| 21 | Contracts / Agreements | ⬜ To build | P2 | Simple agreement record + downloadable PDF |
| 22 | Analytics / Impact Reports | ⬜ To build | P2 | Waste diverted, CO₂ saved, ₹ saved (for ESG) |

### D. Account & Settings
| # | Page | Status | Priority | Purpose |
|---|------|--------|----------|---------|
| 23 | Profile / Company Page | ⬜ To build | P1 | Public-facing company profile + ratings |
| 24 | Account Settings | ⬜ To build | P1 | Edit business info, materials, transport, password |
| 25 | Notifications | ⬜ To build | P1 | Match alerts, request alerts, message alerts |
| 26 | Billing / Subscription | ⬜ To build | P2 | Invoices, plan management |
| 27 | Help / Support + Feedback | ✅ Feedback added (footer) | P2 | FAQ, contact, feedback (now in footer) |

> **Minimum set to be a _working_ marketplace (MVP):** Pages 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20.
> Everything else is fast-follow.

---

## 2. Information We Need to Ask the User

Collected progressively — **don't ask everything at sign-up.** Split into: (a) account, (b) business
profile, (c) role-specific preferences, (d) logistics. (a) + minimal (b) at onboarding; the rest can be
filled when posting/sourcing the first listing.

### a) Account & Identity (Sign Up)
- Full name / contact person
- Work email + password
- Phone number (for logistics coordination & OTP)
- Company / business name

### b) Business Profile (Onboarding — partly built)
- **Business type / role:** Generator (Supplier), Upcycler (Manufacturer), or **Both** *(already built)*
- Industry / category (cafe, brewery, textile, carpentry, food processing, etc.)
- Business address / location (with map pin → used for distance matching)
- Operating city / service radius
- **Verification:** GST / business registration number, optional documents (KYB-lite for trust)
- Company size / scale (helps estimate typical volumes)

### c) Material Preferences (Onboarding — built)
- **Primary material interests** (Coffee, Textiles, Wood, Plastics, Metals, Brewery Grain, …) *(built)*
- For a **Generator:** what byproducts they generate + typical volume + frequency (daily/weekly/monthly)
- For an **Upcycler:** what feedstock they need + required purity/grade + min/max volume + max distance

### d) Logistics Capabilities (Onboarding — built)
- **Transport capabilities:** Local Pickup, Freight Delivery, Courier *(built)*
- Who arranges transport: Generator drops off / Upcycler picks up / Platform-partnered carrier
- Available pickup days/times & dock/loading info
- Packaging format (loose, bagged, palletised, bulk, wet/dry)
- Service radius / max shipping distance willing to cover

### e) Per-Listing Info (asked when creating a listing — see §4)
- Material details, quantity, purity, photos, price, availability window, logistics terms.

> **PM note:** Tag each field as **required vs optional** and show a **profile completeness meter**.
> More complete profiles → better ML match scores → faster deals. Make completeness a visible incentive.

---

## 3. How We Manage Logistics for Both Users

Logistics is the make-or-break of physical B2B marketplaces. Keep **Phase 1 simple** (manual/self-coordinated),
add structure in Phase 2, partner integrations in Phase 3.

### The two sides
- **Generator (Supplier):** has the material at a location, available on certain days, in a certain format.
- **Upcycler (Buyer):** needs the material delivered or will pick it up, within a max distance.

### Phase 1 — Self-coordinated (MVP, build now)
1. Every listing declares a **logistics term**: `Local Pickup` / `Freight (supplier-arranged)` / `Courier` / `Buyer-arranged`.
2. On a confirmed deal, both parties get a **Deal Page** (§1, page 19) that shows:
   - Pickup/delivery address (revealed only after both accept — privacy),
   - Agreed pickup date/time window,
   - Quantity, packaging format, and who is responsible for transport.
3. **Distance & route** shown on a map (we already render a map on Listing Details). Distance is a key
   **ML matching input** (closer = higher score = lower cost & emissions).
4. Coordination happens in **Messages**, with a structured "Schedule Pickup" action that writes the
   agreed slot to the Deal Page.
5. A simple **status timeline:** `Requested → Accepted → Scheduled → Picked Up → Delivered → Completed`.

### Phase 2 — Assisted logistics
- **Logistics quote helper:** estimate cost by distance × volume × vehicle type (lookup table, not AI).
- **Pickup calendar** with confirmations and reminders (email/SMS).
- **Proof of pickup/delivery:** photo + e-signature / OTP at handover.
- Standard **packaging guidance** per material type.

### Phase 3 — Partner network
- Integrate **3rd-party local transporters / fleet partners** ("EcoMatch-partnered transport").
- In-app booking + live tracking + consolidated invoicing.
- Optional **route consolidation** (multiple nearby pickups on one trip) to cut cost & emissions.

### Responsibility matrix (default, configurable per deal)
| Logistics term | Who arranges | Who pays (default) | Platform role |
|----------------|--------------|--------------------|---------------|
| Local Pickup | Upcycler | Upcycler | Show address + schedule slot |
| Freight (supplier) | Generator | Negotiable | Track shipment status |
| Courier | Either | Negotiable | Provide carrier options |
| Platform-partnered | Platform | Buyer (incl. in price) | Book + track + invoice |

> **PM note:** Always make transport responsibility & cost **explicit before the deal is accepted** —
> ambiguity here is the #1 cause of failed B2B waste exchanges.

---

## 4. Product (Material) Information & Listing Model

A "product" here = a **material/byproduct listing**. This is the core object of the marketplace.

### Core listing fields
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Title | text | ✅ | e.g. "120kg Spent Coffee Grounds — Daily Supply" |
| Material category | enum | ✅ | Organic, Textiles, Wood, Plastics, Metals, Grain… (drives matching) |
| Description | text | ✅ | Condition, source process, suitable uses |
| Photos | image[] | ✅ | Min 1, gallery supported (already in UI) |
| Quantity | number + unit | ✅ | e.g. 120 kg |
| Frequency / availability | enum | ✅ | One-time / Daily / Weekly / Monthly |
| Availability date / window | date | ✅ | When it's ready for pickup |
| Purity / grade | % or grade | ✅ | Key ML input & trust signal |
| Moisture / condition | text/enum | optional | Wet/dry, contaminated/clean (matters for organics) |
| Price | number + unit | ✅ | Per kg / per lot / "Free — disposal saving" |
| Pricing model | enum | ✅ | Fixed / Negotiable / Free |
| Location | geo + city | ✅ | Map pin → distance matching |
| Logistics term | enum | ✅ | See §3 |
| Packaging format | enum | optional | Loose, bagged, palletised, bulk |
| Source business | ref | ✅ (auto) | Linked to verified company profile |
| Certifications / docs | file[] | optional | Lab report, compliance docs |
| Status | enum | ✅ (auto) | Active / Paused / Reserved / Completed / Expired |

### Derived / system fields
- **Match / Compatibility score** (ML): computed per viewing-upcycler from material-type fit, purity vs
  requirement, volume fit, and distance. (Already visualised as the "AI Compatibility Score" gauge — keep
  the gauge UI but power it with the **ML recommendation** model, not generative AI.)
- **Match reason** ("Why it matches"): a short, rule-based explanation (distance, purity, volume) — already in UI.
- **Estimated impact:** CO₂ saved, waste diverted, ₹ saved (simple formula per material × volume).
- Views, saves, and active requests count (for the Generator's analytics).

### Listing lifecycle
`Draft → Published (Active) → Reserved (request accepted) → In Transit → Completed`
(plus `Paused` and `Expired` side-states). Each transition is visible to both parties and logged.

### Trust & quality signals (important for B2B)
- Verified-business badge, purity/lab docs, company rating & reviews after completed deals,
  response time, completed-deal count.

---

## 5. PM Recommendations — Making This Best in the Market

Based on current progress (strong UI for 7 pages, no backend/logistics/transaction flow yet), here's
where to focus. **Theme: finish the transactional loop and nail trust + logistics before adding intelligence.**

### 🔴 Must-do next (close the core loop)
1. **Create-Listing flow + real My-Listings management.** Right now a Generator can't actually post or
   manage material. This is the supply side of the marketplace — without it there's nothing to browse.
2. **Request → Accept/Decline → Deal Page.** Turn "Request to Source" (already a button) into a real
   stateful flow with a single source-of-truth Deal Page. This is the moment value is created.
3. **Dashboard/Home.** Both roles need a landing surface after login showing matches, requests, deals,
   and impact — currently there's no home base.
4. **Business verification (KYB-lite).** B2B trades involve money and physical goods. A simple
   GST/registration check + verified badge dramatically increases trust and conversion.
5. **Logistics scheduling on the Deal Page** (Phase 1 from §3). Make transport responsibility, slot, and
   cost explicit before acceptance.

### 🟡 High-value differentiators
6. **Ratings & reviews after completed deals** — reputation is the moat in any marketplace.
7. **Impact reporting (CO₂ / waste / ₹ saved)** — this is a real B2B buying reason (ESG/sustainability
   reporting). We already show stats on the landing page; make them per-account and exportable.
8. **Notifications (email + SMS + in-app)** for new matches, requests, and messages — drives re-engagement
   and faster deals.
9. **Profile completeness incentive** — better data → better ML matches; gamify it.
10. **Saved searches & alerts** for Upcyclers (sidebar already hints at "Saved Searches").

### 🟢 Sequence the ML recommendation system right
- Start with a **transparent, rule-weighted score** (material-type fit, purity vs need, volume fit,
  distance). It's explainable, debuggable, and good enough to be valuable.
- Graduate to a **learning-to-rank ML model** once we have enough completed-deal data (use accepted/
  completed deals as positive signals). **Keep the explanation rule-based** so users trust the matches.
- **Defer generative-AI features** (auto-descriptions, chatbots, etc.) until the marketplace has liquidity.

### Strategic moats to aim for
- **Local liquidity:** win one city/region deeply (e.g. Pune) before expanding — density of supply+demand
  within a small radius is what makes industrial symbiosis economical.
- **Logistics as a service:** the partner that solves "how does the material actually get there cheaply"
  wins this category. Treat logistics as a first-class product, not an afterthought.
- **Trust infrastructure:** verification, purity proof, ratings, and clear deal terms.

### Quick wins (low effort, high polish)
- Forgot-password page, About/Contact, real Settings page (the profile dropdown now links here).
- Empty states + loading states across pages.
- Make the existing stat numbers data-driven instead of hardcoded.
- Mobile pass on the dashboard pages (Marketplace/Messages) — currently desktop-first.

---

## Appendix — Current Progress Snapshot (for context)
- **Built (7):** Landing, Sign In, Sign Up, Onboarding/Preferences, Marketplace, Listing Details, Messages.
- **Recently added:** site-wide Footer with a **Feedback** option, margins/padding around the Operational
  Flow & Testimonials sections, and an expanded **profile dropdown** (Profile, Settings, Saved Listings,
  Help, Feedback, Sign Out).
- **Biggest gaps:** Create Listing, Requests/Deals flow, Dashboard, Verification, and Logistics scheduling.
