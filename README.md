# intent-quality-super-rick

**The canonical Super Rick Standards** — the voice-first cinematic design language every
Family Office product that wears the Super Rick identity must follow, **version-tracked** so each
product pins an exact standards release.

> ## 🛡 DECLARATION OF INTENT 🎗 · `INT-0021` `#super-rick-standards`
>
> | Field | Declaration |
> |-------|-------------|
> | **Why** | The operator wants every product we build to share one versioned Super Rick design language, so the look/feel/behavior is consistent and each product can pin exactly which standards release it implements. |
> | **Problem** | The Super Rick Standards (the orb design system) lived embedded inside `standard-voice-stack/interfaces/orb`, with no version, no per-product registry, and a copy starting to diverge on GitHub vs Gitea. There was no single source of truth and no way to say "product X is on Super Rick Standards v1.0.0." |
> | **Accomplish** | One standards-only repo (separate from the orb *implementation* in `super-rick-presence`), carrying the canonical design system + a `products/products.json` registry mapping each product → its pinned standards version, mirrored Gitea (primary) → GitHub (insurance). |
> | **Tags** | `super-rick-standards` · `design-system` · `voice-first` · `version-tracking` · `declaration-of-intent` |
> | **Intent ID** | `INT-0021` `#super-rick-standards` → nephew `data/intent-ledger.json` |

This is the **Super Rick intent + quality home** — the canonical versioned standards for the Super Rick identity. (Renamed from `standards-super-rick`; carries the design-language standard plus the per-product version registry.)

---

## What this repo is (and is not)

| | |
|---|---|
| **Standards** (here) | The *rules* — design system, tokens, emotion palette, DOs/DON'Ts, skinning levers, the per-product version registry. **No application code.** |
| **Implementation** | The orb *code* lives in [`super-rick-presence`](https://git.jailynmarvin.com/marvelousempire/super-rick-presence) (the Presence orb) — that repo stays orb-code-only. |
| **Documentation** | Voice stack status, understandings, and smoke receipts live in [`standard-voice-stack`](https://git.jailynmarvin.com/marvelousempire/standard-voice-stack). |

## Layout

| Path | Purpose |
|------|---------|
| `VERSION` | The current Super Rick Standards semver (the number products pin to). |
| `standards/orb-design-system.md` | **Canonical** — the complete orb design system (principles, tokens, emotion palette, state machine, DOs/DON'Ts, skinning). Extracted from the live `super-rick-presence` code. |
| `products/products.json` | The **version registry** — every product that wears Super Rick + the standards version it pins. |
| `products/README.md` | How a product adopts / bumps its pinned standards version. |
| `CHANGELOG.md` | What changed per standards release. |

## How a product pins a Super Rick Standards version

1. Read the current `VERSION` and `standards/`.
2. Implement the product surface to that standard.
3. Add (or update) the product's row in `products/products.json` with `pinned_standards_version`.
4. When the standard bumps, the product **chooses** when to adopt — it stays on its pinned version until it updates its row. This is the version track: at any moment you can answer *"which Super Rick Standards is product X on?"* from one file.

## Versioning

Semver on the **standards**:

- **MAJOR** — a breaking change to the design language (new required token, removed surface, an aesthetic products must re-implement).
- **MINOR** — additive standard (new optional token, new skinning lever, a new documented pattern).
- **PATCH** — clarification, typo, non-binding guidance.

Bump `VERSION` + add a `CHANGELOG.md` entry in the same change.

## Forge + mirror

| Surface | URL |
|---------|-----|
| **Gitea (primary)** | https://git.jailynmarvin.com/marvelousempire/intent-quality-super-rick |
| **Clone (SSH)** | `ssh://git@10.1.0.5:2424/marvelousempire/intent-quality-super-rick.git` |
| **GitHub (private mirror)** | `git@github.com:marvelousempire/intent-quality-super-rick.git` — offsite insurance only |

Mirror is **Gitea → GitHub push-mirror** (Gitea is canonical; agents never auto-push GitHub).
Per nephew rule `new-repo-gitea-github-mirror`.

## Related

- [`super-rick-presence`](https://git.jailynmarvin.com/marvelousempire/super-rick-presence) — the orb implementation (the reference product).
- [`standard-voice-stack`](https://git.jailynmarvin.com/marvelousempire/standard-voice-stack) — voice docs + status + receipts.
- Runtime code: [`marvelousempire/nephew`](https://git.jailynmarvin.com/marvelousempire/nephew) (`apps/super-rick-presence`, `src/voice/`).
