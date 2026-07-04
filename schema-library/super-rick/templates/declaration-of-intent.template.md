<!-- STATIONERY · Declaration of Intent (the shield)
WHEN: first move of any new system/doc — before code, before COMP. Register the intent as
INT-NNNN in nephew data/intent-ledger.json (node scripts/intent-ledger.mjs add …), then embed
this block (blockquoted) at the top of every core doc for the system.
Doctrine: ../doctrine.md → "Declaration of Intent shield (required on primary docs)".
Intent law: RL-INTENT-001 / OR-046 — nephew docs/standards/declaration-of-intent-model.md.
-->

> ## 🛡 DECLARATION OF INTENT 🎗 · `{{LEDGER_ID}}` `{{HASHTAG}}`
>
> | Field | Declaration |
> |-------|-------------|
> | **Why** | <!-- ✍️ The operator's motivation in one or two sentences — the pain or drive, not the feature. Written so a stranger understands why this exists at all. --> |
> | **Problem** | <!-- ✍️ What is broken/scattered/missing TODAY. Name where the current truth lives buried (e.g. "buried in COMP §3"), or what fails. Honest, not marketing. --> |
> | **Accomplish** | <!-- ✍️ What this doc/system achieves when done — concrete and checkable, naming the canonical artifact(s) it creates and what links to them. --> |
> | **Tags** | <!-- ✍️ 3–5 backticked kebab tags, dot-separated, matching domain + doc kind: `{{SLUG}}` · `super-rick` · `intent-quality` --> |
> | **Intent ID** | `{{LEDGER_ID}}` `{{HASHTAG}}` → Nephew `data/intent-ledger.json` |
>
> *Per the Intent Model (RL-INTENT-001 / OR-046).*

<!-- ✍️ Fill rules (doctrine.md → shield section):
     - Why:        operator need — "one table that answers *why* each …"
     - Problem:    concrete pain — "buried in COMP §3", "no standalone sheet"
     - Accomplish: deliverable — "canonical doc linked from ledger and door"
     - Tags:       match domain + doc kind (`why-guide`, `{{SLUG}}`, `comp`)
     - Intent ID:  mint via `make intent-add` if new; reuse the product intent when sibling
-->

<!-- ✍️ Bridge-plan variant: when scoping a build rather than declaring a doc's purpose, use rows
     **Intention / Not now / Done when / Goal** instead — same table shape:
     - Intention: what we are building, in intent language
     - Not now:   explicit exclusions this phase (prevents gold-plating)
     - Done when: the observable finish line (a command, a door, a feeling)
     - Goal:      the one-line north star
-->
