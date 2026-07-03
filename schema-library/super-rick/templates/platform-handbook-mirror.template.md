# Chapter {{CHAPTER_NUM}} — Super Rick {{DOMAIN_TITLE}} Stack (Full Undressing)

**Public-safe** · the complete configured stack as deployed on the Family Office — every service, model, port, tweak, and covenant.

**Canonical technical copy (mirrored):** `marvelousempire/{{REPO_HUB}}` → `understandings/FULL-STACK-UNDRESSING.md`  
**Runtime owner:** `marvelousempire/nephew` → `{{CONFIG_PATH}}`, `src/{{DOMAIN}}/`

**Last verified:** {{LAST_SYNCED}} · Pockit **v{{POCKIT_VERSION}}**

Complements [Chapter {{RELATED_CHAPTER}}](./{{RELATED_CHAPTER_SLUG}}.md) with the **{{YEAR}}** {{DOMAIN_TITLE}} era truth.

---

## Platform lens — what You-Sir Juan ships vs what Nephew runs

| Layer | You-Sir Juan platform | Family Office live stack |
|-------|----------------------|---------------------------|
| Philosophy | [`ai-skills/{{AI_SKILL_FILE}}`](../../{{AI_SKILL_PATH}}) | **Super Rick** — sovereign, premium, present |
| Default privacy | Local STT/TTS first | **Zero cloud** — quality covenant enforces |
| Hardware map | [`ai-skills/model-to-hardware-mapping.md`](../../ai-skills/model-to-hardware-mapping.md) | {{LIVE_HARDWARE_SUMMARY}} (from yousirjuan ch.01 + ch.32) |
| Product surface | Family interface vision | Pockit + cassette door {{DOOR_URL}} |
| Config registry | Platform docs (this chapter) | Nephew `{{CONFIG_PATH}}` |

This chapter is the **operator undressing** — not marketing copy. Do **not** duplicate the hub COMP or WHY table here — link to `standard-{domain}-stack/understandings/`.

---

## 1. Surfaces you open

| What | URL |
|------|-----|
| **Primary door** | {{DOOR_URL}} |
| Pockit cassette | http://pockit.localhost/#/c/{{CASSETTE_ID}} |
| API (JSON only) | http://127.0.0.1:8088/api/v1/{{DOMAIN}}/* |

Run `make doors` once per Mac (sudo) so `.localhost` URLs need no port.

---

## 2. Software inventory

<!-- Mirror from hub FULL-STACK-UNDRESSING — strip secrets; keep ports/models honest -->

| Component | Port | Notes |
|-----------|------|-------|
| {{SERVICE}} | {{PORT}} | {{NOTES}} |

---

## 3. Models (names in config)

| Alias | Where | Role |
|-------|-------|------|
| {{MODEL_ALIAS}} | {{LOCATION}} | {{ROLE}} |

---

## 4. Configuration tweaks (`{{CONFIG_PATH}}`)

Key operator toggles — summarize from live Nephew config; never paste secrets.

| Block | Notable values |
|-------|----------------|
| {{CONFIG_BLOCK}} | {{VALUES}} |

---

## 5. Turn flow (one sentence per stage)

```text
{{TURN_FLOW_ONE_LINER}}
```

---

## 6. Fleet documentation map

| Repo | What to read |
|------|--------------|
| **{{REPO_HUB}}** | `understandings/FULL-STACK-UNDRESSING.md` (this chapter's twin) |
| **nephew** | `{{CONFIG_PATH}}`, Pockit help `docs/pockit/help/{{DOMAIN}}/` |
| **intent-quality-super-rick** | Orb design standards |
| **yousirjuan** | This file + related setup chapters |

**Sync discipline:** Author in **{{REPO_HUB}}** first; mirror this chapter from `understandings/FULL-STACK-UNDRESSING.md` after each hub merge (platform-safe framing only).

```bash
cd ~/Developer/{{REPO_HUB}} && git pull --ff-only origin main
# Then diff/update this chapter from understandings/FULL-STACK-UNDRESSING.md
```

---

## 7. Boss Moves

1. **Doors fail** → `make doors` (sudo, once per Mac)
2. **Door blank / error** → restart edge service; hard-refresh browser
3. **Mic** → grant browser permission on {{DOOR_URL}}
4. **Frontier stack down** → SSH `{{SPARK_ALIAS}}`, verify containers, run ensure targets from Mac

---

## Related chapters

- [{{RELATED_CHAPTER_TITLE}}](./{{RELATED_CHAPTER_SLUG}}.md)
- [15 — Doors & Pockit navigation](./15-doors-cassettes-pockit-navigation.md)
- Nephew doctrine: `docs/schema-library/super-rick-understandings.md`