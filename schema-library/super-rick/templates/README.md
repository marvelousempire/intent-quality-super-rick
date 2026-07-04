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

**YSJ mirror registry:** [`../registry/ysj-mirror.registry.json`](../registry/ysj-mirror.registry.json)

Generate filled copies:

```bash
node scripts/scaffold-super-rick-understanding.mjs --help
```

Placeholders use `{{DOUBLE_BRACES}}`. Delete optional sections marked `<!-- optional -->` when not needed.