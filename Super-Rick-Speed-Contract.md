# The Super Rick Speed Contract — one warmth pattern across all five modalities

> The speed + efficiency half of [`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md). Super Rick is the
> premium bar for **every** modality of AI production — so the *feel* must be uniform even when the
> physics are not. This doc answers the operator's question — *"does it all work the same, with speed
> and efficiency, across chat, voice, visual, video, and vision?"* — honestly, and gives every stack
> the same guarantee expressed in its own terms.

> ⚠️ **DE-STALE 2026-07-22 — the Chat row below was green on inherited, invalidated evidence.**
> The 2026-07-08 measurements assumed **DGX Ollama resident** with `nephew:fast` warm. Two
> correct ships falsified that assumption and nothing re-checked the receipt:
> **RL-DGX-RUNTIME-001** (2026-07-18, daily brain Ollama → vLLM `nephew:prime`) and **Plan 0546
> Phase E** (2026-07-20, DGX Ollama *uninstalled*). Re-measured 2026-07-22: a two-word `"say hi"`
> through `/api/v1/chat/completions` took **62.8 s** — 200× off this document's own ≤300 ms bar.
>
> Two root causes, both now fixed or tagged: `macEdgeModelCandidates()` had reverted to leading
> with a 45.6 GB **code** model (UNATT-0144, fixed in nephew **1.95.10**), and every turn carries
> **~16.8k prompt tokens** with no light-turn gate (UNATT-0142, open).
>
> **Chat was never independently measured** — it was marked 🟢 by inheriting Voice's receipt
> ("shares the voice pipeline"). That was true when written and false by the time it mattered:
> `/api/v1/chat/completions` and the voice turn resolve their model by **different paths**. Voice
> remains genuinely green (**223 ms**, re-verified live 2026-07-22 via `voice_draft.meets_target`).
>
> **The pattern in this document is sound and is not what failed.** What failed is that nothing
> linked these numbers to the assumptions they rested on. That gap is now closed mechanically:
> **RL-RECEIPT-DEPS-001** — `nephew/data/receipt-dependencies.json` registers these rows and
> `make check-receipt-freshness` resolves their facts from source, so the next runtime change
> flags this document automatically instead of waiting for an operator to notice.

## The honest answer first (measured 2026-07-08 · Chat row de-staled 2026-07-22)

**No — not yet uniform.** Same *principle*, very different *maturity*:

| Modality | Speed/warm doctrine today | Super Rick culture | Verdict |
|----------|---------------------------|--------------------|---------|
| **Voice** | mature — always-warm draft, protected tenant, Mac fallback, watchdog, `/health voice_draft` (**223ms live, re-verified 2026-07-22**) | reference impl | 🟢 |
| **Chat** | **not independently measured** — was green by inheriting Voice's receipt; `/api/v1/chat/completions` resolves its model by a different path. Re-measured **62.8 s** (2026-07-22) | needs own probe | 🔴 |
| **Video** | heavy by nature — lane-managed heavy window + fast-draft engine (LTX); warm-draft contract written | explicit contract | 🟡 |
| **Visual** | board CPT + freshness watchdog + `make heal-optimus-board` (spark VP tunnel) | **86ms** paint · products rendered · fleet **5/5** | 🟢 |
| **Vision** | RF-DETR ANE detector warm path (`ensure-warm-vision-detector`) | partial — deep path async | 🟡 |

The truthful statement (**revised 2026-07-22**): **voice + visual are measured green on their own
receipts; chat is 🔴 pending its own probe** (it was never independently measured); video/vision have
the machinery and written contract — fleet warm watchdog wires the measured dashboard.

**Freshness is now computable, not remembered.** Every row above that asserts a measured property
is registered in `nephew/data/receipt-dependencies.json` with the facts it assumes
(RL-RECEIPT-DEPS-001). Run `make check-receipt-freshness` in nephew before citing any number here:
a row whose runtime, seat, or lane has moved reports **STALE** and names the fact that changed.
Chat's row is the worked example — it flags on both `dgx.chat_runtime` and `dgx.ollama_installed`.

## The one pattern (the smart-swap, generalized)

Every modality gets the **same shape**, tuned to its physics:

> **An always-warm, sub-perceptible *fast draft* answers immediately; the *heavy* tier is an
> escalation, never a prerequisite for the first response; a fallback tier guarantees the draft even
> when the primary is busy; a watchdog keeps it warm; `/health` shows the live tier.**

| Modality | Fast draft (always warm) | Heavy escalation | Fallback | "Instant" target |
|----------|--------------------------|------------------|----------|------------------|
| **Voice** | small pinned LLM (`nephew:fast`, protected) | prime 32B / vLLM audit | **Mac Ollama (qwen2.5:7b)** | first token **≤300ms** |
| **Chat** | same warm draft | same prime | same Mac fallback | first token **≤300ms** |
| **Visual** | pre-rendered board + instant tap feedback (cached CPT, `:active` press) | live re-sync on demand | static/cached fragment | interaction **≤100ms**, paint **≤1s** |
| **Video** | fast-draft engine (LTX low-res preview) shown immediately | Hunyuan/vLLM heavy render in the heavy window | queued render receipt | **preview ≤2s**, final async |
| **Vision** | small on-device detector (RF-DETR / Court Vision, ANE) | deep multimodal (bge-vl / Plan 0109 corpus) | Mac ANE local | detect **≤100ms**, deep async |

The lesson from voice applies everywhere: **decouple the felt speed from the heavy work.** A video
render or a deep-vision pass may take seconds — but the operator should always get an *instant*
acknowledgement/preview/draft from a warm, small, fallback-backed tier.

## The Super Rick culture bar (the seven disciplines) — per modality, from step 1

Per THE-SUPER-RICK-WAY, the rigor is the **first** move, not a retrofit. For every modality:

1. **Weigh & measure** — benchmark the draft + heavy path (voice proved 206ms; each stack states its number, no guessing).
2. **Quantization per chip** — FP8 on the DGX, GGUF/MLX on the Mac — the speed×quality lever tuned per hardware.
3. **Elevate** (RL-ELEVATE-001) — supply the warm-tier/fallback the operator didn't know to ask for, and build it.
4. **Sovereign + family-cache** — the fast/fallback tiers run on family hardware; models pulled once, never re-downloaded.
5. **Self-heal** (RL-SMART-001) — a watchdog keeps each modality's draft warm; `/health` tells the truth.
6. **Honest ceilings** — where a modality is genuinely heavy (video final render), say so; give a fast *preview*, not a fake "instant."
7. **Seed it** — each stack's contract lives in its own repo's understandings (separate stacks, separate why-guides) so it works **individually** before the fusion.

## Why individually-then-fused (the operator's own reason)

Each modality gets this contract in **its own stack repo** first — `standard-{voice,chat,visual,video,vision}-stack` — so each retrieves + responds quickly on its own (like SME does), *proven per stack*, before Optimus Nephew fuses them behind the one Nephew voice. Fusing five slow stacks makes one slow system; fusing five warm ones makes the revolution.

## The rollout (each is a real, shippable slice)

- **Voice + Chat** — 🟢 done (smart-swap Slices 1–5; IDEA-0005).
- **Visual** — 🟢 fleet-green 2026-07-08: `make heal-optimus-board`, `ensure-optimus-board-fresh`, **86ms** paint receipt.
- **Video** — write the explicit warm-draft contract: LTX fast preview shown instantly, Hunyuan escalates in the heavy window; a `/health video_draft` field.
- **Vision** — bring camera-input vision home: a small always-warm on-device detector + deep escalation; its own stack contract.

## Fleet wiring (Nephew)

```bash
cd ~/Developer/nephew
make fleet-warm                    # measured dashboard → ~/.nephew/run/fleet-warm.json
make install-warm-fleet-watchdog   # every 5 min — all five modalities
make heal-optimus-board            # Visual 🔴 heal — spark VP tunnel + landing + sync + doors
```

## Related

- [`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md) — the culture this speeds up
- [`Super-Rick-Decision-Protocol.md`](Super-Rick-Decision-Protocol.md) — light vs heavy for **decisions** (same shape as this warmth pattern)
- [`SUPER-RICK-STACK-MATRIX.md`](SUPER-RICK-STACK-MATRIX.md) — strongest-available per component
- Voice reference: `standard-voice-stack/understandings/Hybrid-Always-Warm-Voice-Tier.md`
- Idea: optimus-nephew `ideas/idea-ledger.json` → **IDEA-0006**
- Rules: `RL-ELEVATE-001` · `RL-SMART-001` · `RL-FLEET-OFFLOAD-001` · `RL-DGX-LEDGER-001`