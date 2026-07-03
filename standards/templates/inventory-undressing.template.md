<!-- STATIONERY · Inventory / Full Undressing — the exhaustive reference
WHAT: two flavors, same skeleton:
  (a) FULL UNDRESSING — every service, model, port, env var, make target of a deployed stack;
  (b) REPO INVENTORY — the where-truth-lives map across repos (link, don't duplicate).
FILENAME: {STACK}-UNDRESSING.md / {STACK}-REPO-INVENTORY.md — undated, living.
For hardware inventory + letter grades, bolt on the Grade mixin (_chrome.md §7).
-->

# {Stack} — {Full Undressing / Repo Inventory}

<!-- ✍️ De-stale banner(s), then the Declaration of Intent block (full — this is a core reference).
     Then: **Last verified** stamp · Runtime owner · repo pointers · a "Start here" link to the Ledger. -->

## 1. One-line truth

<!-- ✍️ The whole stack in one sentence. -->

## 2. Hardware nodes

| Node | Role in {stack} |
|------|------------------|
| <!-- ✍️ each machine + its function --> | |

### Remote access (network law)

| Rule | Law |
|------|-----|
| <!-- ✍️ canonical path / DNS / rejected alternatives / implications --> | |

## 3. Operator surfaces (doors)

| Surface | URL | Backend | Auth |
|---------|-----|---------|------|
| <!-- ✍️ operator copy uses name-only door URLs (http://{id}.localhost/), NEVER gateway ports --> | | | |

## 4. Ports & processes

| Port | Process | Script / path |
|------|---------|---------------|
| <!-- ✍️ per node; follow with the "critical" prose (what must never be killed) --> | | |

## 5. Services

| Service | URL env | Port | Role |
|---------|---------|------|------|

## 6. Models

| Alias | Actual weights | Served by | Used for |
|-------|----------------|-----------|----------|
<!-- ✍️ follow with Decommissioned prose — name what was retired so nobody resurrects it. -->

## 7. Engines

| Engine ID | Model / backing | Tier | Route | Status | {User-facing?} |
|-----------|-----------------|------|-------|--------|----------------|
<!-- ✍️ Status = live/bridge/fallback honest labels; add covenant bullets after the table. -->

## 8. Caching & memory

| Subsystem | Config keys | Values | Purpose |
|-----------|-------------|--------|---------|
<!-- ✍️ + latest smoke-receipt line. -->

## 9. Pipeline

```
{ASCII flow}
```

| Module | Path |
|--------|------|

## 10. Settings / cassette config

| Setting | Default | Meaning |
|---------|---------|---------|

## 11. Environment variables

| Variable | Default | Purpose |
|----------|---------|---------|

## 12. Make targets & ensure scripts

| Target | What it does |
|--------|--------------|

## 13. Fleet repos

| Repo | Role |
|------|------|
<!-- ✍️ REPO-INVENTORY flavor expands this into per-repo path tables:
     | Path | Content | Mirror here? |  — Mirror = No / link / Index+link / Summarize.
     The law: LINK, don't duplicate; one canonical home per truth. -->

## 14. Honest scorecard

| Pillar | Status |
|--------|--------|
| <!-- ✍️ glyph + honest note per pillar --> | |

## 15. Verify commands

```bash
# ✍️ re-prove the inventory
```

## Related

- <!-- ✍️ Ledger (start here) · COMP · setup guide · grade/tuning doc. -->
