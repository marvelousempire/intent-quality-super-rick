# Shared chrome — the reusable blocks every understanding doc draws from

> Copy the blocks you need into any doc built from this stationery. Each block shows the exact
> shape, then a ✍️ note on how to fill it.

## 1. Declaration of Intent block

See [`declaration-of-intent.template.md`](declaration-of-intent.template.md) — the full form.
Core docs (COMP, Why Guide, GAP, Ledger, inventories, audits) embed it at the top, blockquoted.

## 2. Last verified / Audited stamp

```markdown
**Last verified:** {Weekday, Month D, YYYY at H:MM PM Eastern} · {Surface} **v{X.Y.Z}** · {repo} main @ {short-sha}
```

✍️ Full Eastern wall-clock timestamp (`TZ=America/New_York date '+%A, %B %-d, %Y at %-I:%M %p Eastern'`),
then every version pin the doc's claims depend on — **name the surface before the version**
(RL-NSBV: "Pockit v1.91.76", never bare "v1.91.76"). Update this line every time the doc is refreshed.
Living scorecards use `**Last verified:**`; plans use `**Audited:**`; sync mirrors use `**Last synced:**`.

## 3. De-stale / correction banner

```markdown
> ⚠️ **{YYYY-MM-DD} de-stale ({INT-NNNN}):** {claim(s)} in this doc are **superseded by
> [`{superseding-doc}.md`](./{superseding-doc}.md)**. Corrections: {claim} → {measured reality};
> {claim} → {measured reality}.
```

✍️ Added at the very top of a living doc when a claim is overturned. Use 🔴 instead of ⚠️ when the
overturned claim was load-bearing (a default route, a shipped "best"). Never silently rewrite the
stale row — the banner is the audit trail. For myth-busting at scale, use a two-column table:
`| Claim in {doc} | Reality (measured {date}) |` with verdict words **FALSE / BLOCKED / Freed**.

## 4. Status glyph legend

```markdown
✅ live · ⚠️ partial · ⬜ not built · 🔬 scaffold only · ❌ claimed-but-never-deployed / forbidden · ⏸ frozen
```

✍️ State the legend inline once, immediately before the first table that uses it. 🏆 marks a
benchmark winner. Letter grades (A…F, with `→` trajectories like `C→A`) are for the Grade table
(block 7). Rankings may use circled numbers ①②③④.

## 5. LED pillar bars

```markdown
Sovereign   ████████████░░░░  ⚠️ {honest one-line note}
Premium     ██████████████░░  ✅ {honest one-line note}
```

✍️ Monospace fenced block, one bar per pillar. The bar is an eyeball score; the trailing glyph +
parenthetical is the honest justification. Pair with a percentage line where useful
("~68% of COMP north star / ~94% of shipped program").

## 6. Law callout

```markdown
**Law:** {one enforceable sentence — what must always / never happen}.
```

✍️ Bold label, one sentence, enforceable (a verify command should be able to catch a violation).
Named variants: **Config-truth law** ("no label-over-reality"), **Quality Covenant** rows.

## 7. Grade + expert-tuning mixin (bolt onto any Inventory or Audit)

```markdown
## Grades + the gap to Grade-A

| Component | Grade | Gap | To reach A |
|-----------|-------|-----|------------|
| {component} | {B−} | {the specific deficiency} | {the specific action} |

## Expert tuning — the levers

### {Node} (Boss Moves = sudo)
```

✍️ Every component gets a letter grade AND the named steps to A — nothing rests at B silently.
The tuning section lists the factory-disabled / non-default levers experts enable: safe ones as
commands the agent runs, sudo/risky ones fenced under a **Boss Move** label with exact commands.

## 8. Boss Moves (ONLY YOU) section

```markdown
## Boss Moves (ONLY YOU)

1. {sudo / physical / human-auth action, with the exact command or click path}
```

✍️ Only genuinely operator-gated actions (sudo, hardware, human sign-in, destructive-confirm).
Safe work never appears here — agents execute it (RL-0051 / RL-EXPERT-001).

## 9. Verify block

```markdown
## Verify

```bash
curl -s {url}/health | jq '{fields}'   # expect: {expected shape}
make {target}                          # expect: {expected output}
```
```

✍️ Every doc that states operational truth ends with the commands that re-prove it, each with the
expected output as a comment. Add a `Human:` line for the one check that needs eyes (browser/audio).

## 10. Related footer

```markdown
## Related

- North star: [COMP]({comp-file}.md)
- Scorecard: [Ledger]({ledger-file}.md) · [GAP]({gap-file}.md)
- {incident / patterns / inventory links}
```

✍️ Every doc closes with its position in the chain. Obsidian-native docs may use `[[wikilinks]]`;
cross-repo links use full Gitea URLs. Receipts cite `receipts/{YYYY-MM-DD}-{topic}.json`.
