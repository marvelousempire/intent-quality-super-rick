<!-- STATIONERY · Cross-Product Patterns — adopt without mixing tenancy
WHAT: captures what a sibling product does well so this product adopts the PATTERNS (never the
tenancy/data). Each pattern: file → flow → why it's best → our gap/adopt decision.
FILENAME: {Sibling}-{Domain}-Patterns.md — undated, living.
-->

# {Sibling Product} {Domain} Patterns

> <!-- ✍️ Purpose line: "What {sibling} does well with {domain}, so {our product} adopts the
> patterns — without mixing tenancy." Canonical runtime: {sibling repo} (this doc mirrors, never owns). -->

**Last verified:** <!-- ✍️ Eastern timestamp + both products' version pins --> · **Repos:** <!-- ✍️ pointers -->

## Two products, one hardware standard

| Dimension | {Our product} | {Sibling} |
|-----------|---------------|-----------|
| <!-- ✍️ tenancy · users · data store · model routing · transport — the rows that explain why code can't be copied wholesale --> | | |

---

<!-- ✍️ REPEATING UNIT — one block per pattern: -->

## Pattern {N} — {name}

**File:** `{path in the sibling repo}`

```
{ASCII/text flow of how the sibling does it}
```

**Why it's best:** <!-- ✍️ the evidence — measured behavior, failure modes it avoids. -->

**{Our product} gap / adopt:** <!-- ✍️ the honest delta + the adopt decision: adopt as-is / adapt ({how}) / reference only. Name the file where ours would live. -->

<!-- ✍️ Optional: a feature sub-table | Feature | {Sibling} | {Ours} | with ✅/❌/⚠️, and a
     **Cross-doc:** link when an incident/architecture doc carries the deep dive. -->

---

## Alignment checklist

| Technology | WHY-guide row | {Our product} | {Sibling} | Align? |
|------------|---------------|----------------|-----------|--------|
| <!-- ✍️ every shared technology: does each side ship it, and must they converge? --> | | | | |

## What not to copy

- <!-- ✍️ the tenancy/data/auth pieces that must stay different — the guard against naive porting. -->

## Related

- <!-- ✍️ the sibling's canonical docs · our Why Guide rows · incidents shared across the pair. -->
