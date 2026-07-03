<!-- STATIONERY · Architecture — a component's internal design
WHAT: explains one component/layer deeply enough that a new agent can extend it without
re-deriving it: philosophy, pipeline position, parts table, wiring code, golden rules, file map.
FILENAME: {COMPONENT}-ARCHITECTURE.md (append -L{N} when it names an ambition level).
Lightweight header — no full Declaration block; a subtitle line carries the intent.
-->

# {Component} Architecture{ (L{N})}

*{Parent-doc} companion · Intent {INT-NNNN} · {Month YYYY}*

## Philosophy

<!-- ✍️ Why this component exists and the design stance, in a short paragraph — the "multi-perspective
     intelligence" style statement, not marketing. -->

## Pipeline position

```
{one-line ASCII flow: …upstream → [THIS COMPONENT] → downstream…}
```

<!-- ✍️ One sentence on WHERE it sits and why there (before/after which stages, and what that buys). -->

## The parts

| {Agent / Processor / Part} | Role | {Tier / reacts to} | {Output / emits} |
|----------------------------|------|--------------------|------------------|
| <!-- ✍️ one row per part: name (bold), responsibility, which model-tier or input frames it takes, what artifact it produces --> | | | |

<!-- ✍️ Follow with the latency/performance contract for the whole component ("target ≤950 ms"). -->

## Integration

- <!-- ✍️ how it plugs into the host framework (bus, frames, adapter) — bullets. -->

## Merge / decision strategy

<!-- ✍️ When parts produce competing outputs: the numbered precedence order and what is optional polish. -->

## Real calls

<!-- ✍️ The actual invocation params + a short code block of the wiring — real code, not pseudocode. -->

```python
# ✍️ the load-bearing snippet
```

## Golden rules

1. <!-- ✍️ the 3 rules an extender must never break — each one enforceable. -->

## File map

| File | Purpose |
|------|---------|
| <!-- ✍️ every source path that implements this, one-line role each --> | |

## Flow

```
{full ASCII diagram — the whole component at one glance}
```

**See also:** <!-- ✍️ sibling architectures · the COMP section this implements · the Ledger row it lights up. -->
