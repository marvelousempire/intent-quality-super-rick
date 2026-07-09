# The Super Rick Speed Contract — one warmth pattern across all five modalities

> The speed + efficiency half of [`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md). Super Rick is the
> premium bar for **every** modality of AI production — so the *feel* must be uniform even when the
> physics are not. This doc answers the operator's question — *"does it all work the same, with speed
> and efficiency, across chat, voice, visual, video, and vision?"* — honestly, and gives every stack
> the same guarantee expressed in its own terms.

## The honest answer first (measured 2026-07-08)

**No — not yet uniform.** Same *principle*, very different *maturity*:

| Modality | Speed/warm doctrine today | Super Rick culture | Verdict |
|----------|---------------------------|--------------------|---------|
| **Voice** | mature — always-warm draft, protected tenant, Mac fallback, watchdog, `/health voice_draft` (**206ms live**) | reference impl | 🟢 |
| **Chat** | shares the voice pipeline (same warm draft + auto DGX→Mac fallback) | covered | 🟢 |
| **Video** | heavy by nature — lane-managed heavy window + fast-draft engine (LTX); warm-draft contract written | explicit contract | 🟡 |
| **Visual** | board CPT + freshness watchdog + `make heal-optimus-board` (spark VP tunnel) | **86ms** paint · products rendered · fleet **5/5** | 🟢 |
| **Vision** | RF-DETR ANE detector warm path (`ensure-warm-vision-detector`) | partial — deep path async | 🟡 |

The truthful statement: **voice + chat + visual fleet-warm are measured green (5/5); video/vision have
the machinery and written contract — fleet warm watchdog wires the measured dashboard.**

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