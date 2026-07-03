# The Super Rick Stationery — understanding-doc templates

> **Canonical path moved:** [`schema-library/super-rick/templates/`](../../schema-library/super-rick/templates/) in this repo (Schema Library `super-rick` domain). This folder remains for backward links; **agents and new work use the schema-library path.**

> The fill-in forms for **the Super Rick way** of documenting any build — chat, voice, vision,
> image, sound, retrieval, anything. Extracted 2026-07-03 from the prototype corpus at
> [`standard-voice-stack/understandings/`](https://git.jailynmarvin.com/marvelousempire/standard-voice-stack/src/branch/main/understandings)
> (the voice stack was the first system charted this way). Philosophy: [`../../THE-SUPER-RICK-WAY.md`](../../THE-SUPER-RICK-WAY.md).

## How to use the stationery

1. Copy the template into your system's `understandings/` folder, drop the `.template` from the
   name, and follow the filename law below.
2. Every `{placeholder}` gets a real value. Every `<!-- ✍️ … -->` comment tells you how to fill
   the field next to it — delete the comment once filled (or keep it; comments don't render).
3. Nothing ships in a doc without a **receipt** (measurement, curl, file path, commit). If you
   can't cite one, write `candidate — unmeasured`. That is the law that makes these docs Super Rick.
4. Run the Super Rick gate (in THE-SUPER-RICK-WAY.md) **before** the first commit, not after.

## The chart — which docs, in which order

When you start charting a new system (e.g. "Super Rick text chat"), create the **core chain** in
this order. Supporting docs are created when their trigger fires.

| # | Doc | Template | When |
|---|-----|----------|------|
| 1 | **Declaration of Intent** | [`declaration-of-intent.template.md`](declaration-of-intent.template.md) | First — before anything. Registered as `INT-NNNN` in nephew `data/intent-ledger.json`. Embedded at the top of every core doc. |
| 2 | **COMP** (north star) | [`comp.template.md`](comp.template.md) | Next — the aspirational master spec everything measures against. |
| 3 | **Why Guide** | [`why-guide.template.md`](why-guide.template.md) | With COMP — the intent layer: every component + *why* it exists, measured. |
| 4 | **GAP Analysis** | [`gap-analysis.template.md`](gap-analysis.template.md) | Once anything is shipped — the honest shipped-vs-COMP crosswalk. Living doc. |
| 5 | **Bridge Plan** | [`bridge-plan.template.md`](bridge-plan.template.md) | When you commit to closing the gap — phased execution, twinned with a numbered `plans/NNNN` file. |
| 6 | **Ledger** | [`ledger.template.md`](ledger.template.md) | The single start-here scorecard. Everything else resyncs from it. |
| — | **README (folder index)** | [`understandings-readme.template.md`](understandings-readme.template.md) | As soon as the folder has 2+ docs. |

Supporting types (create on trigger):

| Doc | Template | Trigger |
|-----|----------|---------|
| **Audit** | [`audit.template.md`](audit.template.md) | You need the layer-by-layer operational truth of a subsystem before touching it. |
| **Architecture** | [`architecture.template.md`](architecture.template.md) | A component's internal design needs explaining (agents, processors, pipelines). |
| **Inventory / Undressing** | [`inventory-undressing.template.md`](inventory-undressing.template.md) | The full "every service, port, model, env var" reference; or a where-truth-lives repo map. |
| **Setup / Specs** | [`setup-specs.template.md`](setup-specs.template.md) | Hardware/runtime floor: node specs, routing, quantization, minimums. |
| **Model Ranking** | [`model-ranking.template.md`](model-ranking.template.md) | Choosing the best model/engine per role — the measured superseding authority. |
| **Benchmark (dated)** | [`benchmark.template.md`](benchmark.template.md) | A single measurement session — point-in-time lab note, superseded not edited. |
| **Incident** | [`incident.template.md`](incident.template.md) | Something broke or masqueraded as working — durable postmortem + rule. |
| **Cross-Product Patterns** | [`cross-product-patterns.template.md`](cross-product-patterns.template.md) | A sibling product does something well worth adopting (without mixing tenancy). |

Shared elements (banners, stamps, glyphs, LED bars, Boss Moves, Law callouts, Verify blocks):
[`_chrome.md`](_chrome.md) — copy blocks from there into any doc.

## The filename law

- **Living docs** (COMP, GAP, Bridge, Ledger, Why Guide, inventories, README) — **undated
  filenames**, refreshed in place. Freshness lives in the `**Last verified:**` / `**Audited:**`
  line (full Eastern timestamp) — never in the filename.
- **Point-in-time artifacts** (benchmarks, dated audits, incidents) — **date-stamped filenames**
  (`…-YYYY-MM-DD.md`) or year-stamped rankings (`…-YYYY.md`). Superseded by a newer file, never
  edited into a different truth.
- When a living doc's claim is overturned, do not silently rewrite history — add a **de-stale
  banner** (see `_chrome.md`) naming the date, intent ID, and the superseding doc.

## The one rule that holds it all

> **Measure before you claim. Cite the receipt or write "candidate — unmeasured."**
> A Super Rick doc is allowed to say "this is slow" or "this is not built" — it is never allowed
> to look done without being done (no label-over-reality).
