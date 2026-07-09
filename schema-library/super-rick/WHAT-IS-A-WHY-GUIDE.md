# What is a Why Guide?

> **One handout for operators and AIs.** Read this file alone and you know what a Why Guide is,
> what it looks like, and how to fill one out. Template, field doctrine, and filled prototypes are
> linked at the bottom — this doc is the start-here.

**Standards version:** intent-quality-super-rick **v1.4.0**  
**Last verified:** Thursday, July 9, 2026 at 7:02 PM Eastern  
**Kind:** meta / handout (not a product Why Guide)

---

## 30-second definition

A **Why Guide** is the **intent layer** for a system: one living document with tables that answer
**why each technology or architectural choice exists** — not just what was installed.

| Pair with | Answers |
|-----------|---------|
| **COMP** | What are we building toward? (north star) |
| **Why Guide** | Why is each piece in the stack? (rationale + measured truth) |
| **Ledger** | What is live *today*? (scorecard) |
| **GAP** | Shipped vs COMP — honest crosswalk |

If COMP is the destination and the Ledger is the dashboard, the Why Guide is the **engineering
rationale sheet** every operator and agent can open in one pass.

It is **not** a notes dump, not a marketing one-pager, and not a duplicate of COMP. COMP §3 only
**points** here; the full table lives only in the Why Guide.

---

## What it looks like (shape)

Every Why Guide is an undated living markdown file. Canonical filename patterns:

- `Super-Rick-Why-Guide.md` (single-domain hub)
- `Super-Rick-{Domain}-Why-Guide.md` (e.g. Chat, Video, Vision)
- `{System}-Why-Guide.md` (generic system name)

### Skeleton (top to bottom)

```text
1. De-stale banners (optional, newest first) — when a claim was overturned
2. Declaration of Intent shield (INT-NNNN)
3. Source (link to COMP §3 + version) · Design standards · Last synced
4. How to read this table (six column definitions — do not improvise)
5. The Why Guide          ← aspirational / adoption-time table (six columns)
6. Corrected & Expanded   ← added after first real audit (status · measured · action)
7. Hardware tuning        ← optional expert levers (safe vs Boss Move)
8. Family Office alignment← optional product-vs-product crosswalk
9. Related                ← COMP · Ledger · GAP · inventory · incidents
```

### Visual: the main table (what people mean by “a Why Guide”)

Six fixed columns — same every time:

| Component / Feature | Core Problem It Solves | Purpose | Why Chosen (Month YYYY) | Unique Advantage | Human-Like Contribution |
|---------------------|------------------------|---------|-------------------------|------------------|-------------------------|
| **…** | pain, as felt | job in one clause | evidence at adoption | what alternatives don't give | how the operator *feels* it |

After measurement, a second table **supersedes** rows without erasing history:

| Component (corrected) | Status | Why / measured | Strongest available YYYY | Action |
|-----------------------|--------|----------------|--------------------------|--------|
| **…** | ✅ / ⚙️ / ⚠️ / ❌ / ⏸ | number + context | market best for this role | keep / wire / fix / drop |

### Mini example (one row — voice stack flavor)

**Aspirational table row:**

| Component / Feature | Core Problem It Solves | Purpose | Why Chosen (June 2026) | Unique Advantage | Human-Like Contribution |
|---------------------|------------------------|---------|------------------------|------------------|-------------------------|
| **bge-reranker-v2-m3** (cross-encoder) | Dense order buries the *right* answer | Re-score the pool; lift the exact match | Same-backbone pair with bge-m3; measured 50–90 ms @ pool 16 | Cross-encoder precision on Family Office metal | The answer feels *spot-on*, not just *related* |

**Corrected row (after audit):**

| Component (corrected) | Status | Why / measured | Strongest available 2026 | Action |
|-----------------------|--------|----------------|--------------------------|--------|
| **RAG** bge-m3 + Qdrant + reranker + Redis STM | ✅ SOTA, measured | embed ~110 ms · search 30–60 ms · rerank 50–90 ms · **~250 ms E2E** | strongest 2026 | **keep** |

Full worked examples: see [Filled prototypes](#filled-prototypes-what-done-looks-like) below.

---

## Where it sits in the Super Rick chart

When charting a new system, create the **core chain** in this order:

| # | Doc | Role of Why Guide |
|---|-----|-------------------|
| 1 | Declaration of Intent | Mint `INT-NNNN`; Why Guide embeds its own shield |
| 2 | **COMP** | North star — §3 is a **pointer only** to this Why Guide |
| 3 | **Why Guide** ← *you are here* | Intent layer: component + why, then measured truth |
| 4 | GAP Analysis | Shipped vs COMP narrative |
| 5 | Bridge Plan | Phased closes of the gap |
| 6 | Ledger | Single start-here scorecard (*what is live*) |

Supporting docs (audit, inventory, incident, model ranking) **link back** into Why Guide rows when
they overturn a claim.

Philosophy binding: Super Rick discipline #5 — *Document everything in a living Why Guide*
([`THE-SUPER-RICK-WAY.md`](../../THE-SUPER-RICK-WAY.md)).

---

## How to fill one out (procedure)

### Day one (create with COMP)

1. **Copy the template** into the hub’s `understandings/` folder:
   - Template: [`templates/why-guide.template.md`](templates/why-guide.template.md)
   - Or scaffold:  
     `node schema-library/super-rick/scripts/scaffold-super-rick-understanding.mjs --kind why-guide --domain {domain} …`
2. **Name the file** undated: `Super-Rick-{Domain}-Why-Guide.md` (living doc — no date in the name).
3. **Fill chrome first**
   - Declaration of Intent (Why / Problem / Accomplish / Tags / Intent ID)
   - **Source:** link COMP §3 + COMP version
   - **Design standards:** `intent-quality-super-rick`
   - **Last synced:** full Eastern timestamp + every surface version the rows depend on  
     (`TZ=America/New_York date '+%A, %B %-d, %Y at %-I:%M %p Eastern'`)
4. **Copy “How to read this table”** from the template — do not invent new column meanings.
5. **Add one row per component**, top-to-bottom in **pipeline order** (ingest → reason → act → speak,
   etc.). Not one row per vendor marketing claim.
6. **Date the “Why chosen” header** (`Why Chosen (July 2026)`). “Current” is a date, not a forever.
7. **Every claim needs a receipt** — measurement, path, curl, commit, or leaderboard **with citation**.  
   If you cannot cite one, write **`candidate — unmeasured`**. That phrase is law, not weakness.
8. **Leave out** “Corrected & Expanded” on day one. Add it only after a real audit.
9. **Link from COMP §3, Ledger, and GAP** so agents land here instead of hunting chat history.
10. **Run the Super Rick gate** before first commit ([`THE-SUPER-RICK-WAY.md`](../../THE-SUPER-RICK-WAY.md)).

### After the first measurement audit

1. **Do not silently rewrite** the original six-column table. Keep it as “what we believed at adoption.”
2. **Add** `## The Why Guide — Corrected & Expanded (YYYY-MM-DD, {audit name})`.
3. Intro blockquote: audit method + honest overall verdict (e.g. “~70–75% SOTA; real gaps are TTS speed and GPU budget”).
4. One corrected row per contested component:

| Status glyph | Meaning |
|--------------|---------|
| ✅ | SOTA / live as claimed |
| ⚙️ | Built, still wiring |
| ⚠️ | Works but too slow / partial |
| ❌ | Phantom, unmeasured claim, or generation-behind |
| ⏸ | Frozen / on-demand / intentionally parked |
| 🔧 | Candidate — deps green, not promoted |

5. **Action column** is mandatory: keep / wire as primary / fix: {specific} / evaluate or drop the claim.
6. Optional: **Hardware tuning** table (Lever · Hardware · State · Win · Class) — Class = `safe` vs `Boss Move (sudo)`.
7. Optional: **Family Office alignment** when a sibling product shares the stack.
8. When a later incident overturns a *corrected* row, add a **de-stale banner** at the top (newest first)
   naming date, intent ID, and the superseding doc — never delete history silently.

### Refresh forever

- Living file — refresh in place; freshness lives in **Last synced**, not the filename.
- Stale rows are **corrected or superseding-bannered**, not left.
- Point-in-time lab notes (benchmarks, dated audits) stay in **dated** files and are linked from here.

---

## Field guide — six columns (aspirational table)

| Column | How to write it | Good | Bad |
|--------|-----------------|------|-----|
| **Component / Feature** | Proper-noun tech or architectural choice | `bge-m3 + Qdrant + Redis STM` | `our memory stuff` |
| **Core Problem It Solves** | Pain as the operator *feels* it | `answers feel related, not spot-on` | `improves quality` |
| **Purpose** | Job in the stack — one clause | `re-score the pool, lift the exact match` | long essay |
| **Why Chosen (Month YYYY)** | Evidence at adoption time | measured ms, hardware fit, cited board | `best in class` with no receipt |
| **Unique Advantage** | What alternatives don't give **on our metal** | `~250 ms E2E with rerank ON` | generic vendor slogan |
| **Human-Like Contribution** | Operator experience, not another benchmark | `remembers you like a best friend` | `low latency` (put that in Unique Advantage) |

### Corrected table columns

| Column | Fill |
|--------|------|
| **Component (corrected)** | Same identity as the aspirational row (or the real system that replaced a phantom claim) |
| **Status** | Glyph + short word (table above) |
| **Why / measured** | The **measured** number with context (warm/cold, host, config pin) |
| **Strongest available YYYY** | Today's market-best for this *role* (dated-vs-superior pass) |
| **Action** | Concrete next move — never blank |

### Declaration of Intent (required on the Why Guide itself)

| Field | Why-guide flavor |
|-------|------------------|
| **Why** | Operators and agents need one table that answers *why* each {system} technology exists |
| **Problem** | WHY lived buried in COMP §3 / chat / multiple repos — no standalone sheet |
| **Accomplish** | Canonical WHY doc, linked from ledger, GAP, and the product door |
| **Tags** | `why-guide` · `super-rick` · `{modality}` · `intent-quality` |
| **Intent ID** | `INT-NNNN` in Nephew `data/intent-ledger.json` |

---

## Laws (non-negotiable)

1. **Measure before you claim.** Receipt or `candidate — unmeasured`.
2. **One component per row** — pipeline order, not marketing order.
3. **Do not duplicate the full WHY table inside COMP** — pointer only.
4. **Supersede, don't erase** — original table stays; corrected table + de-stale banners carry new truth.
5. **Date every “why chosen” and every “strongest available”** — “current” is not a forever.
6. **Name surfaces before versions** in Last synced (e.g. Pockit **v1.92.83**, not bare `v1.92.83`).
7. **No label-over-reality** — a Super Rick doc may say “this is slow” or “not built”; it may not look done without being done.

---

## Anti-patterns (what a Why Guide is *not*)

| Don't | Do instead |
|-------|------------|
| Generic “notes” or meeting dump | Six-column table + receipts |
| Copy COMP wholesale | COMP north star; Why Guide rationale only |
| Rewrite rows when measurement wins | Keep adoption table; add Corrected & Expanded |
| Claim “tops leaderboards” with no link | Cite or mark `candidate — unmeasured` |
| Put date in the filename for the living guide | Undated filename; date in Last synced / audit section title |
| One Why Guide for “all of AI” | One per hub/system (voice, chat, vision, briefcase, …) |

---

## Done checklist (agent / operator)

```
[ ] File lives in hub understandings/ with undated Why-Guide name
[ ] Declaration of Intent + Source + Last synced (Eastern + surface pins)
[ ] How to read this table present (six columns, template wording)
[ ] One row per real component, pipeline order
[ ] Every claim has receipt or "candidate — unmeasured"
[ ] Why Chosen header is month+year dated
[ ] COMP §3 points here (no full table in COMP)
[ ] Ledger / GAP link here
[ ] After audit: Corrected table with status + measured + action
[ ] Super Rick gate passed for documented distinctions
```

---

## Forms and doctrine (authoritative fill detail)

| Artifact | Path | Use |
|----------|------|-----|
| **This handout** | `schema-library/super-rick/WHAT-IS-A-WHY-GUIDE.md` | Show another AI / operator what a Why Guide is |
| **Field doctrine** | [`doctrine.md`](doctrine.md) §1 `why-guide` | Form-by-form fill rules for all thirteen forms |
| **Blank template** | [`templates/why-guide.template.md`](templates/why-guide.template.md) | Copy-paste shell with ✍️ comments |
| **Legacy stationery index** | [`../../standards/templates/README.md`](../../standards/templates/README.md) | Chart order + filename law |
| **Philosophy** | [`../../THE-SUPER-RICK-WAY.md`](../../THE-SUPER-RICK-WAY.md) | Seven disciplines + Super Rick gate |
| **Chrome blocks** | [`../../standards/templates/_chrome.md`](../../standards/templates/_chrome.md) | De-stale banners, stamps, glyphs |

---

## Filled prototypes (what “done” looks like)

| Domain | Path (Developer tree) |
|--------|------------------------|
| **Voice** (canonical prototype) | `standard-voice-stack/understandings/Super-Rick-Why-Guide.md` |
| **Chat** | `standard-chat-stack/understandings/Super-Rick-Chat-Why-Guide.md` |
| **Video** | `standard-video-stack/understandings/Super-Rick-Video-Why-Guide.md` |
| **Vision** | hub `understandings/Super-Rick-Vision-Why-Guide.md` (or worktree equivalent) |
| **Briefcase / Optimus** | `optimus-nephew/understandings/Briefcase-Super-Rick-Why-Guide.md` |

Start with **voice** when teaching a new AI — it has the richest Corrected & Expanded audit table and
de-stale banner history.

---

## One-liner for prompts

> A Why Guide is a living Super Rick doc: six-column table of *why each stack component exists*,
> plus an optional measured Corrected table (status · number · action). Pair with COMP (north star)
> and Ledger (what is live). Receipt or `candidate — unmeasured`. Template:
> `intent-quality-super-rick` → `schema-library/super-rick/templates/why-guide.template.md`.
> Full handout: `schema-library/super-rick/WHAT-IS-A-WHY-GUIDE.md`.
