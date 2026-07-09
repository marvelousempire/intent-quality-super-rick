# Super Rick — Schema Library domain

**Canonical home** for Super Rick understanding forms, JSON schemas, YSJ mirror registry, and scaffold tooling.

| Surface | URL |
|---------|-----|
| **Gitea** | http://git.localhost/marvelousempire/intent-quality-super-rick |
| **Parent index** | [`schema-library`](../README.md) (sub-repo checkout at `super-rick/` when cloned from the umbrella repo) |
| **Path in this repo** | `schema-library/super-rick/` |

## Layout

| Path | Role |
|------|------|
| [`WHAT-IS-A-WHY-GUIDE.md`](WHAT-IS-A-WHY-GUIDE.md) | **Start-here handout** — what a Why Guide is, looks like, and how to fill it (for operators + other AIs) |
| [`doctrine.md`](doctrine.md) | Human law — thirteen forms, four documentation layers, field-fill rules |
| [`templates/`](templates/) | Stationary `*.template.md` shells (`{{PLACEHOLDER}}` + ✍️ hints) |
| [`schemas/`](schemas/) | Machine contracts (JSON Schema) |
| [`registry/ysj-mirror.registry.json`](registry/ysj-mirror.registry.json) | Hub → yousirjuan setup chapter mirror map |
| [`scripts/`](scripts/) | `scaffold-super-rick-understanding.mjs` · `audit-super-rick-ysj-mirror.mjs` |

Design standards (orb tokens, intent chrome) remain at repo root: [`standards/orb-design-system.md`](../../standards/orb-design-system.md) · [`THE-SUPER-RICK-WAY.md`](../../THE-SUPER-RICK-WAY.md).

Legacy stationery at [`standards/templates/`](../../standards/templates/) is superseded by [`templates/`](templates/) here — same Super Rick chart, schema-library path is canonical for agents.

## Agents — where to create / read

1. **What is a Why Guide?** `schema-library/super-rick/WHAT-IS-A-WHY-GUIDE.md` (handout — show this to another AI)
2. **Read doctrine:** `schema-library/super-rick/doctrine.md`
3. **Scaffold a new hub bundle:**
   ```bash
   node schema-library/super-rick/scripts/scaffold-super-rick-understanding.mjs \
     --kind why-guide --domain chat --title "Super Rick Chat" \
     --repo-hub standard-chat-stack --out ~/Developer/standard-chat-stack/understandings
   ```
4. **Audit YSJ mirror:**
   ```bash
   node schema-library/super-rick/scripts/audit-super-rick-ysj-mirror.mjs --domain voice
   ```
5. **From Nephew** (thin wrappers): `make scaffold-super-rick-understanding` · `make audit-super-rick-ysj-mirror`

**Bright line:** Hub understandings live in `standard-{domain}-stack/understandings/`. This folder holds the **forms** — not product-specific filled docs.

## Submodule note

When checked out inside the umbrella [`marvelousempire/schema-library`](https://git.jailynmarvin.com/marvelousempire/schema-library) repo, this entire `intent-quality-super-rick` repository appears at `super-rick/`. Content paths are then `super-rick/schema-library/super-rick/…`.