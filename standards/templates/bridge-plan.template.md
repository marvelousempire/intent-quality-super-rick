<!-- STATIONERY · Bridge Plan — the phased execution plan
WHAT: how to evolve what's shipped toward COMP without a greenfield rewrite. The narrative twin of
a git-tracked numbered plan (plans/NNNN-….md) — create both; the plan is the todo list, this doc
is the reasoning + phase record.
FILENAME: {SYSTEM NAME} — BRIDGE PLAN.md — undated, living; per-phase SHIPPED dates carry history.
-->

# **{System Name} — Bridge Plan**

*Evolve {what exists} in place → {north-star name}.*

| Doc | Role |
|-----|------|
| [COMP]({comp-file}.md) | The destination |
| [GAP]({gap-file}.md) | What's between here and there |
| **This file** | How we cross |
| `plans/{NNNN}-{slug}.md` | Git-tracked task twin |

**Git-tracked plan:** {link} · **Audited:** <!-- ✍️ full Eastern timestamp + version pins -->

## Intention

| Field | Content |
|-------|---------|
| **Intention** | <!-- ✍️ what we are building, in intent language --> |
| **Not now** | <!-- ✍️ explicit exclusions this bridge — the anti-gold-plating row --> |
| **Done when** | <!-- ✍️ the observable finish line: a command, a door, a feeling --> |
| **Goal** | <!-- ✍️ the one-line north star --> |

## Strategic decision (locked)

<!-- ✍️ The evolve-vs-greenfield (or equivalent) call, LOCKED so it isn't relitigated: -->

| Choice | Why |
|--------|-----|
| ✅ {chosen path} | <!-- ✍️ evidence --> |
| ❌ {rejected path} | <!-- ✍️ why not --> |

## Architecture after bridge

```mermaid
flowchart TB
  %% ✍️ the target architecture once all phases land
```

**Law:** <!-- ✍️ the one architectural rule the bridge must never violate. -->

## Phase status

**Out of {N} phases: {a} ✅ , {b} ⚠️ , {c} ⬜**

| Phase | Title | Status |
|-------|-------|--------|
| 0 | {title} | ✅ / ⚠️ / ⬜ |

---

<!-- ✍️ REPEATING UNIT — one section per phase, exactly this shape: -->

## Phase {N} — {title} {status glyph}

**Goal:** <!-- ✍️ one paragraph; include the performance contract (numbers) when the phase has one. -->

**Status:** <!-- ✍️ ⬜ not started, or "SHIPPED {YYYY-MM-DD}" + touched files inline. -->

| # | Task | Owner |
|---|------|-------|
| 1 | <!-- ✍️ literal what-to-do --> | Agent <!-- ✍️ Owner is "Agent" unless genuinely operator-gated --> |

**Critical files**

| File | Change |
|------|--------|
| <!-- ✍️ every path this phase touches, and how --> | |

**Verification**

```bash
# ✍️ the commands that prove this phase, with expected output as comments
```

---

## What we keep (non-negotiable)

| Asset | Why |
|-------|-----|
| <!-- ✍️ the shipped things the bridge must not destroy — pairs with GAP "what prior work has that COMP omits" --> | |

## Boss Moves (ONLY YOU)

1. <!-- ✍️ sudo / physical / human-auth steps only, numbered, with exact commands. Empty is a valid (and good) state. -->

## Out of scope (this bridge)

- <!-- ✍️ bulleted exclusions — what the next bridge owns. -->

## Verification gates (ship checklist)

```bash
# ✍️ the global gates run before any phase merges
```

Human: <!-- ✍️ the one manual test that needs operator eyes/ears. -->

## Related plans

| Plan | Relationship |
|------|--------------|
| {NNNN} | <!-- ✍️ feeds / supersedes / sibling --> |

## Status

| Item | State |
|------|-------|
| <!-- ✍️ dated headline snapshot --> | |
