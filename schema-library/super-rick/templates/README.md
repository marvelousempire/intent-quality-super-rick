# Super Rick understanding templates

Stationary forms extracted from [`standard-voice-stack/understandings/`](https://git.jailynmarvin.com/marvelousempire/standard-voice-stack/tree/main/understandings).

**Doctrine:** [`../doctrine.md`](../doctrine.md) · **Intent law:** RL-INTENT-001 / OR-046 (nephew `docs/standards/declaration-of-intent-model.md`)

| Template file | Kind | Voice prototype |
|---------------|------|-----------------|
| `declaration-of-intent.template.md` | `declaration-of-intent` | The 🛡 shield block at the top of every core voice doc (first move — mint `INT-NNNN`, embed in every core doc) |
| `why-guide.template.md` | `why-guide` | `Super-Rick-Why-Guide.md` |
| `comp.template.md` | `comp` | `PRIVATE VOICE-FIRST AI SYSTEM — COMP.md` |
| `ledger.template.md` | `ledger` | `Super-Rick-Voice-Stack-Ledger.md` |
| `gap-analysis.template.md` | `gap-analysis` | `PRIVATE VOICE-FIRST AI SYSTEM — GAP ANALYSIS.md` |
| `bridge-plan.template.md` | `bridge-plan` | `PRIVATE VOICE-FIRST AI SYSTEM — BRIDGE PLAN.md` |
| `repo-inventory.template.md` | `repo-inventory` | `VOICE-STACK-REPO-INVENTORY.md` |
| `architecture-l3.template.md` | `architecture-l3` | `EMOTION-SWARMER-ARCHITECTURE-L3.md` |
| `cross-product-patterns.template.md` | `cross-product-patterns` | `Ready-Play-Voice-Patterns.md` |
| `full-stack-undressing.template.md` | `full-stack-undressing` | `FULL-STACK-UNDRESSING.md` |
| `fleet-audit.template.md` | `fleet-audit` | `Voice-Fleet-Audit-2026-06-30.md` |
| `incident-gap.template.md` | `incident-gap` | `Ready-Play-DGX-Inference-Gap-2026-06-30.md` |
| `numbered-understanding.template.md` | `numbered-understanding` | MakeDoors `0001-*.md` |
| `platform-handbook-mirror.template.md` | `platform-handbook-mirror` | `yousirjuan/docs/setup/30-voice-stack-full-undressing.md` |
| `audit.template.md` | `audit` | `CACHE-RAG-REDIS-NAS-STACK-AUDIT.md` (living subsystem audit — `fleet-audit` is the dated fleet-wide flavor) |
| `architecture.template.md` | `architecture` | `PIPECAT-FRAMEPROCESSOR-ARCHITECTURE.md` (component internals — `architecture-l3` is the ambition-level variant) |
| `benchmark.template.md` | `benchmark` | `DAILY-DRIVER-MODEL-BENCHMARK-2026-06-30.md` |
| `model-ranking.template.md` | `model-ranking` | `Voice-Model-Ranking-2026.md` (the measured superseding authority the why-guide de-stale banner points at) |
| `setup-specs.template.md` | `setup-specs` | `M5-MAX-DGX-INFERENCE-SETUP.md` · `Voice-System-Specs-and-iPhone-Performance.md` |
| `incident.template.md` | `incident` | `RAG-Reranker-Keep-Warm.md` class (postmortem + rule — `incident-gap` is the cross-product gap record) |
| `understandings-readme.template.md` | `understandings-readme` | `README.md` (folder front desk; `--bundle` writes a minimal seed only) |

**YSJ mirror registry:** [`../registry/ysj-mirror.registry.json`](../registry/ysj-mirror.registry.json)

Generate filled copies:

```bash
node scripts/scaffold-super-rick-understanding.mjs --help
```

Shared blocks (Declaration shield, Last-verified stamps, de-stale banners, glyph legend, LED bars,
Law callouts, Grade mixin, Boss Moves, Verify blocks, Related footers): [`_chrome.md`](_chrome.md) —
copy into any doc; not a scaffold kind.

Placeholders use `{{DOUBLE_BRACES}}`. Delete optional sections marked `<!-- optional -->` when not needed.