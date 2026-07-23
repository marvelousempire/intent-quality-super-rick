# Super Rick Decision Protocol — how AI (and humans) reason in Super Rick Culture

> The **operational** half of [`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md).  
> Philosophy = seven disciplines + ship gate. **This doc** = forced reasoning steps so agents  
> improve decisions **in-line with Super Rick Intent** — elevate, not gold-plate; measure, not  
> cosplay market labels.
>
> **Standards version:** pairs with intent-quality-super-rick **≥ 1.7.0**.  
> **Nephew wiring:** RL-SR-DEC-001 · orchestration pre-gate (advisory architecture path).  
> **Stationery:** [`schema-library/super-rick/templates/decision-record.template.md`](schema-library/super-rick/templates/decision-record.template.md)

---

## Why this exists

Super Rick Culture already knows *what good looks like*. Models still:

- Jump to **market labels** (CDN, platform, mesh, “AI OS”) before naming the job
- Invent a **new role** when an existing placement fits
- Claim **green** without a receipt or a path to A
- **Gold-plate** past the operator’s intent (or under-build the expert version)

This protocol is the **decision engine** on top of the culture: structured, light-or-heavy, seed-or-it-evaporates.

**Canonical example (2026-07-09):** “Is the DXP6800 Pro a CDN?”  
Intent = private model/static origin · Placement = cold vault + VPS edge · Label “CDN” **rejected** · Drag if live-path · Already better architecture · Polish `model-ensure`, don’t rebrand the box.  
**Filed decision-record:** [`schema-library/super-rick/examples/Super-Rick-Decision-dxp6800-cdn-framing-2026-07-09.md`](schema-library/super-rick/examples/Super-Rick-Decision-dxp6800-cdn-framing-2026-07-09.md)

---

## When it fires

All external signals that imply comparison, adoption, installation, optimization, or “do we have
this?” first enter [`RL-SR-INTAKE-001`](standards/universal-external-intake.md). The intake law invokes
this Decision Protocol after resolving claims and identifying the owning Standard Stacks.

| Trigger | Mode |
|---------|------|
| Architecture / infra / “should we…?” / placement of workload | **Heavy** (full protocol or light→escalate) |
| Non-trivial product choice with more than one serious option | **Heavy** |
| Super Rick pre-gate on orchestration (RL-WGE-002) for design-shaped tasks | **Heavy** (or light if scope is tiny) |
| Simple factual lookup, typo fix, already-locked playbook step | **Skip** (or one-line intent lock only) |
| Light operator chat that still needs a judgment | **Light** |

---

## Light vs heavy (reasoning speed contract)

Same shape as the Super Rick Speed Contract: **fast draft first; heavy escalation only when needed.**

| Mode | Steps | When |
|------|-------|------|
| **Light** | 1 intent lock → 2 placement → answer (+ optional drag one-liner) | Clear existing role; low blast radius; no new product surface |
| **Heavy** | Full sequence 1–11 | New role, public edge, multi-node, “CDN/platform” labels, grade claims, ship plans |

Never run the full philosophy essay on a light turn. Never skip intent lock on a heavy turn.

---

## The eleven components (AI reasoning stack)

### 1. Intent lock (first, not last)

Before options:

| Field | Required |
|-------|----------|
| **Job / outcome** | What success looks like in operator language |
| **Non-goals** | What we are *not* doing |
| **Bound** | Elevate inside this fence; no gold-plate past it |

> Read for **intent**, not literal instructions (discipline 4 / RL-ELEVATE-001).

### 2. Placement matrix (right silicon before new product)

Ask: *which existing family role owns this?*

| Role | Typical home | Does |
|------|--------------|------|
| **Cold vault / archive** | DXP6800 Pro NAS | Pull-once models, media, backups — not live inference |
| **Local hot** | DGX M.2 / Mac disk | Staged weights; inference / tools run here |
| **Brain** | DGX Spark | Ollama/vLLM, RAG, tower-api |
| **Edge feel** | Mac M5 | Doors, Pockit, light models, ANE |
| **Public HTTPS edge** | VPS (`nephew-ct`) | TLS, reverse-proxy over WG — **not** the NAS |
| **LAN door** | Mac family-tape / Pockit | `*.localhost` → LAN upstreams |
| **Private origin (optional)** | NAS Docker / static volume | Family assets/sites **origin**; edge still VPS or door |

If a row already fits → **improve that path**. Do not invent a parallel product role.

### 3. Label detector (anti–market-cosplay)

| If the idea sounds like… | Do this |
|--------------------------|---------|
| CDN, mesh, platform, “AI OS”, super-app, home cloud | Expand to **concrete jobs** or reject the label |
| Super Rick as a **sticker** on mediocre work | Refuse — Super Rick is **culture + gate**, not branding |

**Test:** Can you describe the change using only placement roles and jobs, with zero market buzzwords? If not, the idea is still fog.

### 4. Drag check (pre-mortem — required on heavy)

Before “yes we should”:

- Single point of failure / wrong public edge
- Slow path treated as happy path (e.g. SMB restore vs internet pull)
- Live inference or live DB off NAS NFS
- Extra mounts/sync that fail open to public registry
- Complexity out of proportion to family traffic

If **drag ≥ benefit** under current scale → **don’t**, or ship the **thin slice** only.

### 5. Options considered (at least two when heavy)

Name real alternatives (including **status quo / do nothing** and **thin polish of existing path**).  
Best-of-bests merge is allowed; blind single-school is not.

### 6. Dated-vs-superior (SOTA step)

| Field | Required |
|-------|----------|
| Strongest available *today* | Named option or stack |
| Our choice | What we pick |
| Why not stronger | Written, or “N/A — we are picking the strongest” |
| Check date | ISO or human Eastern date |

No “best/fast/done” without this row (discipline 1–2).

### 7. Receipt-or-grade-down

| Claim type | Needs |
|------------|--------|
| Measured | Probe, bench, curl, test path, timed run |
| Live | Health / door / fleet-warm style receipt |
| Documented | Cite path + last-verified |
| Unknown | Must be 🟡 or gap-named — **not** 🟢 |

Measurement may **overturn** the plan. No receipt → cannot claim 🟢 / “done” / “we’re better than X” as fact.

### 8. Bounded elevate

| Check | Pass if |
|-------|---------|
| Expert supply | Named the technique/guardrail the operator may not have known to ask |
| Inside intent | Still inside the intent-lock fence |
| Disposition | **Ship** · **Teach why** · or **Defer with named gap** |

Elevate ≠ bigger scope. Gold-plate fails Super Rick Intent.

### 9. Decision record (machine-usable shape)

Every non-trivial call should be expressible as:

```text
intent | options | placement_role | chosen | rejected_why |
drag_risks | receipt | grade + path_to_A | seed
```

Use the stationery form for durable decisions:  
`schema-library/super-rick/templates/decision-record.template.md`  
Scaffold: `--kind decision-record`.

### 10. Gap-naming law

You may say **B+ / partial / “already better than X framing”** only if:

- the gap to **A** is explicit, and  
- the next action is named (owner optional; “Agent” default unless operator-gated).

No soft green. Advisory gate with **mandatory gap naming** (same spirit as RL-WGE-002).

### 11. Teach / seed close-out (compound)

If the decision mattered for next session:

| Seed type | Examples |
|-----------|----------|
| Rule | `.claude/rules/…`, RL id |
| Why Guide / matrix row | state · why · strongest · action |
| Clinic case | unresolved admission or closed case |
| Script / make target | `model-ensure`, heal, probe |
| Decision record | dated file in hub `understandings/` or clinic |

Chat-only = Super Rick that evaporates (clinic prime-time / DRY seeds — RL-CPTS-001).

---

## Operator checklist (copy into a turn)

### Light path

```
[ ] 1 Intent lock — job · non-goals · bound
[ ] 2 Placement — existing role named (or “none — escalate heavy”)
[ ] 4 Drag — one line if any
[ ] Answer — no fake green
```

### Heavy path

```
[ ] 1 Intent lock — job · non-goals · bound
[ ] 2 Placement matrix — role or justified new surface
[ ] 3 Label detector — buzzwords expanded or rejected
[ ] 4 Drag check — risks vs benefit
[ ] 5 Options — ≥2 including status quo / thin polish
[ ] 6 SOTA — strongest · choice · why-not · date
[ ] 7 Receipt — type named or grade-down
[ ] 8 Bounded elevate — ship / teach / defer+gap
[ ] 9 Decision record — fields filled (or template filed)
[ ] 10 Gap to A — named if not A
[ ] 11 Seed — rule/doc/script/clinic or “none — ephemeral OK”
```

### Ship gate (still required for build/ship)

After a decision that becomes work, the classic Super Rick gate still applies  
([`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md) § gate):

```
[ ] Intent encompassed
[ ] Strongest option (or why not)
[ ] Measured (receipt may overturn plan)
[ ] Expert tweaks / Boss Moves
[ ] Documented (Why Guide / ledger)
[ ] Grade-A path named
[ ] Sovereign + backed up (≥2 copies, right silicon, no re-download)
```

---

## Mapping to Super Rick Intent

| Super Rick Intent | Protocol component |
|-------------------|--------------------|
| Expert-grade version of *what they want* | 1 Intent lock · 8 Bounded elevate |
| Highest tier, measured | 6 SOTA · 7 Receipt |
| Right silicon / no single-copy / family cache | 2 Placement · ship gate sovereign row |
| Refuse B when A is known | 10 Gap-naming |
| Culture from step one | Protocol **before** design, not after ship |
| Don’t re-learn | 9 Decision record · 11 Seed |

---

## Explicit non-goals (what not to add)

- A 40-page “AI constitution” nobody runs  
- Full 11 steps on every light chat turn  
- Replacing the seven disciplines (this **extends** them)  
- “Reason harder” without structure (confident bluff)  
- Rebranding existing correct placement with market labels  

---

## Relationship to other Super Rick surfaces

| Surface | Relationship |
|---------|----------------|
| [`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md) | Philosophy + seven disciplines + ship gate |
| [`Super-Rick-Speed-Contract.md`](Super-Rick-Speed-Contract.md) | Warm-draft vs heavy for **modalities**; this protocol is warm-draft vs heavy for **decisions** |
| [`SUPER-RICK-STACK-MATRIX.md`](SUPER-RICK-STACK-MATRIX.md) | Placement truth for modalities; consult before inventing roles |
| Nephew RL-WGE-002 | Orchestration pre/post gate; decision protocol feeds **pre-gate research/placement** |
| RL-ELEVATE-001 | Bounded elevate (component 8) |
| RL-MODELCACHE-001 | Placement: cold vault on NAS, never infer off NFS |
| RL-CPTS-001 | Seed close-out (component 11) |

---

## Agent one-liner (soul / system prompt)

> On architecture or non-trivial “should we” questions: **intent lock → placement → reject market labels → drag check → receipt or grade-down → name gap to A → seed if it mattered.** Light path when placement is obvious; heavy path when inventing roles or claiming green. Super Rick is culture and gate, not a sticker.

---

*Distilled 2026-07-09 from operator Super Rick Culture + DXP/CDN clarification session. First seed of the AI decision stack for Family Office agents.*
