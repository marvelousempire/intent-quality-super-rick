# {{DOMAIN_TITLE}} Stack — Repo Inventory (canonical map)

> **Purpose:** One map of *where {{DOMAIN_NOUN}} truth lives* across the Family Office fleet.  
> **Canonical hub:** `{{REPO_HUB}}` — mounted in Nephew at `Nephew/Understandings/{{DOMAIN_TITLE}}/`.

**Last verified:** {{LAST_SYNCED}} · Pockit **v{{POCKIT_VERSION}}**

---

## The rule

| Layer | Repo | Role |
|-------|------|------|
| **Understandings + status** | `{{REPO_HUB}}` | Mental models, GAP, WHY guide, ledger |
| **Runtime + API** | `nephew` | tower-api, config, cassettes, doors |
| **Design language** | `intent-quality-super-rick` | Intent chrome, orb tokens |
| **Platform handbook** | `yousirjuan` | Public-safe `docs/setup/` mirror — not canonical |
| **Consumer product** | {{CONSUMER_REPO}} | {{CONSUMER_ROLE}} |

**Sync discipline:** When {{DOMAIN_NOUN}} ships in `nephew`, refresh **ledger + GAP** in the hub first, then bump the Nephew submodule pointer, then mirror platform-safe undressing to **yousirjuan** (see registry `data/super-rick-ysj-mirror.registry.json`).

---

## {{REPO_HUB}} (this hub)

| Path | Content |
|------|---------|
| `understandings/Super-Rick-{{DOMAIN_TITLE}}-Why-Guide.md` | WHY table |
| `understandings/Super-Rick-{{DOMAIN_TITLE}}-Stack-Ledger.md` | Scorecard |
| `understandings/PRIVATE {{DOMAIN_UPPER}}-FIRST AI SYSTEM — COMP.md` | North star |
| `understandings/{{DOMAIN_UPPER}}-STACK-REPO-INVENTORY.md` | This file |

---

## nephew (runtime — link, don’t duplicate)

| Path | Content | Mirror here? |
|------|---------|--------------|
| `{{CONFIG_PATH}}` | Live engine truth | Summarize in ledger only |
| `{{API_PATH}}` | HTTP routes | No — link |

---

## yousirjuan (platform handbook — mirror only)

| Path | Content | Mirror here? |
|------|---------|--------------|
| `{{YSJ_SETUP_CHAPTER}}` | Public-safe full undressing | **Yes** — from hub `FULL-STACK-UNDRESSING.md` |
| `{{YSJ_INFERENCE_CHAPTER}}` | Inference floor (if applicable) | **Yes** — from hub inference doc |
| `{{YSJ_AI_SKILL}}` | Platform philosophy | Link only — no duplicate ports |

**Rule:** YSJ never hosts COMP, GAP, or WHY guide as canonical — index and mirror operational truth only.

---

## Verify

```bash
{{VERIFY_BLOCK}}
```

---

## Related

- [Ledger](Super-Rick-{{DOMAIN_TITLE}}-Stack-Ledger.md)
- Nephew index: [`Nephew/Understandings/{{DOMAIN_TITLE}}/`](../../../Nephew/Understandings/{{DOMAIN_TITLE}}/)