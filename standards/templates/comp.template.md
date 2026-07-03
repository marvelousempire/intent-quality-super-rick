<!-- STATIONERY · COMP — the north star / final master copy
WHAT: the aspirational, self-contained master spec of the finished system. Everything else
measures against it: GAP crosswalks shipped-vs-COMP, Bridge executes toward it, Ledger scores it.
It is the DESTINATION, not current reality — it is allowed to describe things that don't exist yet.
FILENAME: {SYSTEM NAME} — COMP.md — undated, living. Carries its own comp_version (semver,
explicitly NOT the product's version namespace).
-->

# **{SYSTEM NAME} — FINAL MASTER COPY**

{Ambition tier, e.g. Supernova Level 3} · {Weekday, Month D, YYYY}
**Document version: `{1.0.0}`** (`comp_version` — the north-star spec's own semver; not {product} semver)

<!-- ✍️ De-stale banners accumulate here when reality overturns a COMP claim (chrome §3). -->

<!-- ✍️ Lead paragraph: one paragraph stating this is the single, complete, self-contained spec —
     and that it carries the actual propagation-seed contents (if it does). -->

| Field | Value |
|-------|-------|
| **Project** | <!-- ✍️ system name + one-line essence --> |
| **comp_version** | `{1.0.0}` |
| **Seed package** | <!-- ✍️ path to the plantable seed, if any --> |
| **{Console} alias** | <!-- ✍️ where it lives in Pockit / the console --> |
| **Full-send API** | <!-- ✍️ the one endpoint that exercises the whole system --> |
| **Ops status** | <!-- ✍️ honest one-liner + glyph --> |
| **{Surface} (door)** | <!-- ✍️ http://{name}.localhost/ — canonical door URL, never a port --> |

## Why {name}?

<!-- ✍️ The identity/brand rationale. If the name blends archetypes, table them:
     | {Name-part} | Archetype | What it means for this system | -->

## Companion docs

| Companion doc | Role |
|---------------|------|
| [GAP ANALYSIS]({gap-file}.md) | Honest shipped-vs-COMP crosswalk (living) |
| [BRIDGE PLAN]({bridge-file}.md) | Phased execution toward this spec |
| [Ledger]({ledger-file}.md) | Start-here scorecard |
| <!-- ✍️ architectures, seeds, surfaces --> | |

<!-- ✍️ One prose line: "COMP is the destination; Bridge + GAP are the living map." -->

---

## 1. Intention Statement

<!-- ✍️ The manifesto — a few sentences of what finished FEELS like, in operator language. -->

## 2. Success Criteria

<!-- ✍️ Bulleted, MEASURABLE targets (latency budgets, capabilities, feels-like tests). Each one
     must be checkable by a command or a named human test. Close with a validation pointer. -->

## 3. The Why Guide

Canonical table: [`{System}-Why-Guide.md`]({System}-Why-Guide.md) — **do not duplicate it here.**

## 4. Hardware & Workload Split

<!-- ✍️ Node → role breakdown (which silicon runs what, and why) + the handoff rule between nodes. -->

## 5. Premium Stack & Configurations

<!-- ✍️ Component list with exact env-var/config pins — the target configuration, pinned. -->

## 6. Full Pipeline Flow + Custom Components

```
{ASCII pipeline — input → … → output}
```

| Component | Role | Seed path |
|-----------|------|-----------|
| <!-- ✍️ each custom processor/agent, its responsibility, and where its code will live --> | | |

## 7. Access & Security

<!-- ✍️ Bulleted rules: doors, auth perimeter, remote access law, tenancy. -->

## 8. Implementation Checklist

<!-- ✍️ Numbered build steps, then the verify gates: -->

```bash
# ✍️ the make/curl gates that prove each step
```

## 9. The Propagation Seed

<!-- ✍️ OPTIONAL: full plantable file contents (compose, scripts, processors) fenced inline,
     with a note naming the canonical on-disk copy. Skip if the system has no seed. -->

## 10. The Surface / UI

<!-- ✍️ The operator-facing surface: prose + table | Surface | URL | Status | + a **Law:** line
     (the one UX rule that must never break). -->

---

## Appendix A — Shipped reality

| Layer | Shipped today ({surface} v{X.Y.Z}) | COMP v{comp} target |
|-------|-------------------------------------|---------------------|
| <!-- ✍️ each layer: what exists now (version-pinned) vs the target. This appendix trails the GAP doc — keep the pointer, let GAP carry the detail. --> | | |

## Appendix B — Agent handoff prompt

<!-- ✍️ A copy-paste block a fresh agent can start from: **Intent:** line + the reading order. -->

---

**Shipped vs target:** [GAP]({gap-file}.md) · **How to build it:** [BRIDGE]({bridge-file}.md) · **Seed:** {path}
