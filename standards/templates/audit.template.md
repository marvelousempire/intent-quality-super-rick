<!-- STATIONERY · Audit — layer-by-layer operational truth
WHAT: the meticulous "what is actually true" pass over a subsystem — distinguishing look-alike
layers, recording measured decisions, and closing gaps found along the way. Load before touching
the subsystem.
FILENAME: {SUBSYSTEM}-AUDIT.md for a living audit refreshed in place, or
{Subsystem}-Audit-YYYY-MM-DD.md for a point-in-time fleet audit (superseded, not edited).
-->

# {Subsystem} Audit{ — YYYY-MM-DD}

<!-- ✍️ Declaration of Intent block (full, for living audits) OR a lightweight blockquote intro
     (for dated audits): purpose + Intent INT-NNNN + which living docs this pairs with. -->

**Last verified:** <!-- ✍️ full Eastern timestamp + version pins + which nodes were live (chrome §2) -->

## TL;DR

- <!-- ✍️ headline truths, one bullet each — what a reader must know before touching anything. -->

## 1. {Distinguish the look-alikes}

<!-- ✍️ The "three different caches" move: when the subsystem has layers people conflate, table
     them apart first. Adapt columns to the domain: -->

| Layer | What it stores / does | Backend | Survives restart? | TTL / lifetime |
|-------|------------------------|---------|-------------------|----------------|
| <!-- ✍️ one row per layer; the point is the DIFFERENCES --> | | | | |

## 2. {Pipeline / flow}

```
{ASCII pipeline of the audited path, with measured latencies inline where known}
```

## 3. {Inventory sections — one per concern}

<!-- ✍️ Repeat as needed. Each: short prose + a table keyed by a stable first column. Standard shapes:
     | Role | Module | Auto-heal |            (responsibilities → code → self-heal path)
     | Model | Family/engine | Host | Backed up? |   (inventory + backup map, ✅/⚠️ + size)
     | Service | Port | Health probe |         (edge services)
     | Asset | Quant/dtype | Host | Notes |     (quantization floor) -->

## 4. The measured decision

<!-- ✍️ When the audit settles a routing/default choice, record it with the receipt: -->

Receipt: `receipts/{YYYY-MM-DD}-{topic}.json`

| Option | Measured | Note |
|--------|----------|------|
| <!-- ✍️ each candidate + its number; bold the verdict row ("THE LIVE DEFAULT") --> | | |

<!-- ✍️ Then one paragraph of rationale — measured-before-flipped, and what would change the call. -->

## 5. Health truths (don't re-debug these)

- <!-- ✍️ the known-good facts and known failure classes (e.g. "stale-container class") that cost a session to learn. -->

## 6. Gaps closed

| Gap | Fix | Verify |
|-----|-----|--------|
| <!-- ✍️ every gap the audit closed SAME-SESSION (RL-0052): problem → shipped fix (file) → verify command + expected output --> | | |

**Still open:** <!-- ✍️ what remains, each with its owning plan/bridge phase. -->

## 7. Operator verify block

```bash
# ✍️ re-prove the audit: curl/jq/make with expected outputs as comments
```

## Related

- <!-- ✍️ Ledger · Why Guide · incidents this audit triggered or resolved · superseding rankings. -->
