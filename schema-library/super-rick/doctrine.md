# Super Rick Understandings — stationary forms

**Prototype repo:** [`standard-voice-stack`](https://git.jailynmarvin.com/marvelousempire/standard-voice-stack) → `understandings/`  
**Reference WHY guide:** [`Super-Rick-Why-Guide.md`](../../Nephew/Understandings/Voice/understandings/Super-Rick-Why-Guide.md)  
**What is a Why Guide? (handout):** [`WHAT-IS-A-WHY-GUIDE.md`](WHAT-IS-A-WHY-GUIDE.md) — start here when teaching another AI or operator  
**Intent law:** [`declaration-of-intent-model.md`](../standards/declaration-of-intent-model.md) (OR-046) · [`intent-quality-super-rick`](https://git.jailynmarvin.com/marvelousempire/intent-quality-super-rick)  
**Machine schema:** [`super-rick-understanding.doc.schema.json`](schemas/super-rick-understanding.doc.schema.json)

When the board says **Super Rick way**, **intent quality**, or **understandings folder**, they mean this bundle: the same *forms* voice used in 2026, filled out for **chat**, **vision**, **presence**, or the next modality — not a one-off doc style per product.

---

## What this is

| Layer | Path | Role |
|-------|------|------|
| **Why Guide handout** | [`WHAT-IS-A-WHY-GUIDE.md`](WHAT-IS-A-WHY-GUIDE.md) | Standalone: what a Why Guide is, what it looks like, how to fill it |
| **Doctrine** | This file | What each form is for + how to fill every field |
| **Stationary templates** | [`templates/`](templates/) | Copy-paste shells with `{{PLACEHOLDER}}` labels |
| **JSON schema** | [`schemas/super-rick-understanding.doc.schema.json`](schemas/super-rick-understanding.doc.schema.json) | Doc kind + hub metadata for agents |
| **Scaffold** | `node schema-library/super-rick/scripts/scaffold-super-rick-understanding.mjs` | Generate a filled shell in one command |

**Bright line:** Runtime code stays in **nephew** (or the product repo). **Understandings** stay in the product **hub repo** (`standard-voice-stack`, future `standard-chat-stack`, …) or `Nephew/Understandings/<Domain>/` until a hub exists.

---

## Four documentation layers (hub → runtime → platform)

| Layer | Repo | What belongs | Mirror rule |
|-------|------|--------------|-------------|
| **1 Hub understandings** | `standard-{domain}-stack` | COMP, WHY, ledger, GAP, undressing, inventory | **Author here first** |
| **2 Runtime** | `nephew` | `voice-config.json`, routes, cassettes, help articles | Summarize in ledger; never duplicate COMP |
| **3 Platform handbook** | `yousirjuan` | `docs/setup/NN-*.md` public-safe undressing + hardware | Mirror from hub `full-stack-undressing` (+ inference docs) |
| **4 Platform philosophy** | `yousirjuan` `ai-skills/` | Why voice/TTS matters on the platform | Link to setup chapter + hub; never operational truth |

**YSJ mirror registry:** [`registry/ysj-mirror.registry.json`](registry/ysj-mirror.registry.json) — maps each domain to setup chapter paths.

**Sync discipline (voice example):** Author in `standard-voice-stack/understandings/` → mirror platform-safe copy to `yousirjuan/docs/setup/30-voice-stack-full-undressing.md` → bump Nephew submodule → `make vault-ingest-docs`. Do **not** put COMP/WHY tables in YSJ chapters — use the **platform lens** table (see `platform-handbook-mirror` form).

---

## The thirteen forms (voice prototype → any modality)

| Kind | Voice prototype | Fill when |
|------|-----------------|-----------|
| `why-guide` | `Super-Rick-Why-Guide.md` | Every stack needs a **tech + rationale table** (Nuclear Level 3) |
| `comp` | `PRIVATE VOICE-FIRST AI SYSTEM — COMP.md` | **North star** — intention, success criteria, stack spec |
| `ledger` | `Super-Rick-Voice-Stack-Ledger.md` | **One scorecard** — vision vs reality at a glance |
| `gap-analysis` | `PRIVATE VOICE-FIRST AI SYSTEM — GAP ANALYSIS.md` | Honest **shipped vs COMP** crosswalk |
| `bridge-plan` | `PRIVATE VOICE-FIRST AI SYSTEM — BRIDGE PLAN.md` | **Phased execution** without greenfield rewrite |
| `repo-inventory` | `VOICE-STACK-REPO-INVENTORY.md` | **Where truth lives** across fleet repos |
| `architecture-l3` | `EMOTION-SWARMER-ARCHITECTURE-L3.md` | **Deep-dive** one processor / subsystem |
| `cross-product-patterns` | `Ready-Play-Voice-Patterns.md` | **Adoptable patterns** from sibling products |
| `full-stack-undressing` | `FULL-STACK-UNDRESSING.md` | Every port, model, covenant — **config truth** |
| `fleet-audit` | `Voice-Fleet-Audit-2026-06-30.md` | Dated **operational truth** after measurement |
| `incident-gap` | `Ready-Play-DGX-Inference-Gap-2026-06-30.md` | **Incident** with root cause + prevention |
| `numbered-understanding` | MakeDoors `0001-*.md` | Short **mental model** (status, plain language, example) |
| `platform-handbook-mirror` | `yousirjuan/docs/setup/30-voice-stack-full-undressing.md` | **Public-safe** platform chapter mirrored from hub undressing |

**Minimum bundle for a new Super Rick product** (chat, vision, …):

1. `comp` → 2. `why-guide` → 3. `ledger` → 4. `gap-analysis` → 5. `bridge-plan` → 6. `repo-inventory`

Add `full-stack-undressing` when the stack has live ports/models; add `architecture-l3` per major processor.

---

## Shared front matter (every form)

### Staleness banner (optional, top)

```markdown
> ⚠️ **YYYY-MM-DD de-stale (INT-####):** What changed. Point to the doc that **supersedes** stale claims — never delete history silently.
```

**Fill:** One sentence symptom + link to ranking/audit doc. Required when COMP claims drift from live probes.

### Declaration of Intent shield (required on primary docs)

```markdown
> ## 🛡 DECLARATION OF INTENT 🎗 · `INT-NNNN` `#hashtag`
>
> | Field | Declaration |
> |-------|-------------|
> | **Why** | Why this document exists for operators/agents. |
> | **Problem** | What was scattered, buried, or missing before this doc. |
> | **Accomplish** | What reading this doc accomplishes in one pass. |
> | **Tags** | `kebab` · `tags` · `max-five` |
> | **Intent ID** | `INT-NNNN` `#hashtag` → Nephew `data/intent-ledger.json` |
```

**Fill rules:**

| Field | How to write it |
|-------|-----------------|
| **Why** | Operator need — "one table that answers *why* each …" |
| **Problem** | Concrete pain — "buried in COMP §3", "no standalone sheet" |
| **Accomplish** | Deliverable — "canonical doc linked from ledger and door" |
| **Tags** | Match domain + doc kind (`why-guide`, `super-rick-chat`, `comp`) |
| **Intent ID** | Mint via `make intent-add` if new; reuse product intent when sibling |

### Sync footer line (required)

```markdown
**Last synced:** {Weekday, Month D, YYYY at H:MM AM/PM Eastern} · Pockit **vX.Y.Z** · {other surface versions}
```

Use `TZ=America/New_York date '+%A, %B %-d, %Y at %-I:%M %p Eastern'` — RL-HRTS.

---

## Form-by-form field guide

### 1. `why-guide` — Super Rick Why Guide (prototype)

> **Teaching handout (definition + procedure + mini example):** [`WHAT-IS-A-WHY-GUIDE.md`](WHAT-IS-A-WHY-GUIDE.md)

**Filename:** `Super-Rick-{Domain}-Why-Guide.md` or `Super-Rick-Why-Guide.md` when hub is single-domain.

| Section | Fill |
|---------|------|
| **Source** | Link to COMP §3 + `comp_version` |
| **Design standards** | Always cite `intent-quality-super-rick` |
| **How to read this table** | Six column definitions (copy from template — do not improvise) |
| **The Why Guide** | One row per **component** — not one row per vendor marketing claim |
| **Corrected & Expanded** | Optional audit table when live probes supersede COMP rows |
| **Hardware tuning** | Expert levers table — mark Boss Move vs safe |
| **Family Office alignment** | WHY row × Family Office today × sibling product × Gap |
| **Related** | COMP, ledger, GAP, repo inventory |

**Row fill (six columns):**

| Column | Fill |
|--------|------|
| Component / Feature | Proper noun tech or architectural choice |
| Core Problem It Solves | Pain removed — latency, flat voice, memory loss, … |
| Purpose | Job in the stack — one clause |
| Why Chosen (month YYYY) | Evidence at adoption time — measured or cited |
| Unique Advantage | What alternatives don't give **on Family Office metal** |
| Human-Like Contribution | How the **operator feels** it — not benchmark numbers |

**Law:** Do **not** duplicate the full WHY table inside COMP — COMP §3 points here only (voice lesson learned).

---

### 2. `comp` — North star master copy

**Filename:** `PRIVATE {DOMAIN}-FIRST AI SYSTEM — COMP.md`

| Section | Fill |
|---------|------|
| Title block | Product name, Supernova level, `comp_version`, staleness pointer |
| Metadata table | Project, seed package, Pockit alias, API entrypoints, doors |
| Why {Product}? | Three-Ricks table (Boss / Style / Top shelf) — adapt metaphors per domain if needed |
| §1 Intention Statement | Prose north star — sovereign, premium, instant, present |
| §2 Success Criteria | Verifiable bullets — sub-150ms, privacy, barge-in, … |
| §3 Why Guide | **Pointer only** to standalone why-guide |
| §4+ | Hardware split, stack config, pipeline diagram, checklist |

---

### 3. `ledger` — Understanding ledger

**Filename:** `Super-Rick-{Domain}-Stack-Ledger.md`

| Section | Fill |
|---------|------|
| Vision pillars | Sovereign · Premium · Instant · Present (tune labels per domain) |
| Two finish lines | Shipped program % vs COMP north star % |
| Eye-to-eye scorecard | Capability × COMP target × Reality × status emoji |
| Pillar score bars | ASCII bars for quick scan |
| Config truth | Live config file table — honest `status` per engine |
| Plans + verify | Linked plans, curl smoke commands |

**Status symbols:** ✅ live · ⚠️ partial · ⬜ not built · 🔬 scaffold only

---

### 4. `gap-analysis`

| Section | Fill |
|---------|------|
| How to read | Role of COMP vs ledger vs this file |
| Two finish lines | Same as ledger — keep in sync |
| Covenant glue | Optional — map Nephew Max / Jarvis pillars when product is a pillar |
| Crosswalk tables | COMP improvement over prior work; prior work COMP omits |
| Ranked gaps | Ordered by operator pain |

**Law:** Refresh when **ledger** moves — GAP is the narrative crosswalk, ledger is the scorecard.

---

### 5. `bridge-plan`

| Section | Fill |
|---------|------|
| Intention block | Intention · Not now · Done when · Goal (OR-045) |
| Strategic decision | Evolve in place vs greenfield — locked choice + why |
| Architecture diagram | Mermaid — UI unchanged, API extended |
| Phases | P1…Pn with verify gate per phase |
| Git-tracked plan | Link `plans/NNNN-*.md` |

---

### 6. `repo-inventory`

| Section | Fill |
|---------|------|
| The rule | Hub repo vs runtime repo vs design standards |
| Per-repo tables | Path · content · mirror here? |
| Sync discipline | Submodule bump, vault ingest, index-corpus |
| Verify block | curl commands |

---

### 7. `architecture-l3`

| Section | Fill |
|---------|------|
| Philosophy | One paragraph — what this subsystem *is* |
| Pipeline position | ASCII where it sits in the bus |
| Component table | Agent/module × role × tier × output |
| Integration | Code paths, timeouts, failure modes |
| COMP companion | Link from COMP § processors |

---

### 8. `cross-product-patterns`

| Section | Fill |
|---------|------|
| Two products table | Family Office vs consumer — tenancy, corpus, TTS, … |
| Pattern N | **File** · **Why** · **Gap** · **Adopt** — repeat per pattern |

---

### 9. `full-stack-undressing`

| Section | Fill |
|---------|------|
| One-line truth | Production honest summary |
| Hardware nodes | Edge / brain / network law |
| Services table | Port · bind · health · owner |
| Models table | Name · location · status · notes |
| Covenant flags | From live config JSON — no label-over-reality |

---

### 10. `fleet-audit` / 11. `incident-gap`

Dated filename `*{YYYY-MM-DD}.md`. Symptom · Root cause · Fix · Prevention · Evidence (Clinic shape). Link to why-guide row if a component claim was wrong.

---

### 12. `numbered-understanding`

Short mental model: **Status** · **Source** · **Applies to** · **Tags** · Plain language · Visual map · Example compliant/violation · Canonical links. Use for cross-cutting doctrine inside a hub (like Make Doors).

---

### 13. `platform-handbook-mirror` — You-Sir Juan setup chapter

**Filename:** `yousirjuan/docs/setup/NN-{domain}-stack-full-undressing.md` (voice: ch. 30).

| Section | Fill |
|---------|------|
| Public-safe banner | No credentials, WG keys, or WAN identifiers |
| Canonical mirror pointer | Hub repo → `understandings/FULL-STACK-UNDRESSING.md` |
| Runtime owner line | Nephew config path (`data/voice-config.json`, etc.) |
| Platform lens table | YSJ platform philosophy vs Family Office live stack |
| Mirrored body | Ports, models, covenant — **secrets stripped** |
| Fleet documentation map | Hub + nephew + intent-quality + this chapter |
| Sync discipline | `git pull` hub → diff → update chapter |
| Boss Moves | Operator-only sudo/browser steps |
| Related chapters | Cross-links within `docs/setup/` |

**Forbidden:** Duplicating COMP §3 WHY table or full GAP analysis in YSJ — link to hub instead.

---

## Scaffold a new hub

```bash
# Full minimum bundle into ~/Developer/standard-chat-stack/understandings/
node scripts/scaffold-super-rick-understanding.mjs \
  --domain chat \
  --title "Super Rick Chat" \
  --slug super-rick-chat \
  --repo-hub standard-chat-stack \
  --comp-version 1.0.0 \
  --ledger-id INT-0000 \
  --hashtag super-rick-chat \
  --cassette chat \
  --door http://chat.localhost/ \
  --out ~/Developer/standard-chat-stack/understandings

# Single form
node scripts/scaffold-super-rick-understanding.mjs \
  --kind why-guide \
  --domain chat \
  --title "Super Rick Chat" \
  --out ./understandings/Super-Rick-Chat-Why-Guide.md
```

After authoring: register hub in `data/fleet-repos.json`, add `Nephew/Understandings/Chat/` index row, mirror to YSJ per registry, run `make vault-ingest-docs`.

```bash
# After full-stack-undressing — print YSJ mirror path from registry
node scripts/scaffold-super-rick-understanding.mjs \
  --kind full-stack-undressing --domain voice --title "Super Rick Voice" \
  --out ~/Developer/standard-voice-stack/understandings \
  --mirror-ysj
```

---

## Verify

```bash
node scripts/scaffold-super-rick-understanding.mjs --check
node scripts/validate-schema-library.mjs
node scripts/audit-super-rick-ysj-mirror.mjs --domain voice
```

---

## Related

- [`prototype-blueprint-trinity.md`](../pockit/Prototype-Blueprint-Trinity.md) — HCC + door + WordPress per product
- [`declaration-of-intent-model.md`](../standards/declaration-of-intent-model.md) — shield + engineeringWhyGuide columns
- Voice hub README: [`Nephew/Understandings/Voice/README.md`](../../Nephew/Understandings/Voice/README.md)