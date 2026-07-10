# Super Rick Stack Matrix — component · state · strongest-available · action

> The cross-modality north-star table for *Super Rick everything.* Each row names what is **live**
> (receipt required), what is **strongest-available in 2026** (dated-vs-superior pass), and the
> **action to Grade-A**. Per-stack Ledgers remain the measured scorecard; this matrix is the fused
> ceiling map — never confuse target with deployed.
>
> **Law:** Document ≠ deploy. Claim ≠ candidate. No receipt → write `candidate — unmeasured`.

**Last synced:** Thursday, July 9, 2026 at 10:58 PM Eastern · pulls from modality Ledgers + Why Guides + live receipts · Briefcase audit pass (`INT-20260709-BRIEFCASE-FATHER-CONSOLE`): two stacks born (sports-tracking · avatar), M5 silicon law (GPU Neural Accelerators via MLX ≠ ANE via Core ML), council reasoning law

| Modality | Component | State now | Grade | Strongest-available (2026) | Action to A | Who |
|----------|-----------|-----------|-------|---------------------------|-------------|-----|
| **Voice · STT** | Parakeet v3 via `mw` (M5 ANE cascade preferred) | ✅ live | **A** | Parakeet-realtime-EOU-120m streaming (candidate — unmeasured) | weigh streaming EOU vs `mw`; keep WhisperKit fallback | voice |
| **Voice · STT** | WhisperKit ANE resident | ✅ fallback | A− | tied SOTA for M5 | keep as ANE fallback when `mw` unreachable | voice |
| **Voice · TTS fast** | Holler / Qwen3-TTS (M5) | ✅ live | B+ | Qwen3-TTS edge (keep) | keep as fast default | voice |
| **Voice · TTS emotional** | Higgs v3 (DGX) | ⚠️ too slow | **C** | **CosyVoice2-0.5B ~150 ms** (blocked on M5 — Python 3.9, CosyVoice needs ≥3.10 + gradio 5.4); IndexTTS-2, Kokoro 82M | free DGX GPU lane OR CosyVoice on py3.10+ venv; `make benchmark-cosyvoice-m5` | voice + DGX |
| **Voice · TTS** | Fish S2 Pro | ❌ phantom | F | candidate only | evaluate with receipt or drop claim | voice |
| **Chat · daily driver** | `nephew:fast` = qwen3-coder:30b A3B | ✅ live | **A−** | MLX-served Qwen3 on M5 (candidate — unmeasured); skip think-mode | measure MLX vs Ollama on M5; light-turn classifier before RAG | chat |
| **Chat · prime** | Qwen3-32B-FP8 vLLM | ⏸ on-demand | B+ | same class, right-sized ctx | keep on-demand; heavy turns only | DGX |
| **Chat · arena** | SuperRickArenaPage | ✅ shipped | B | per-pane latency receipts strip | add measured receipts per pane | chat |
| **Chat · maker** | picture / video / song tools | ✅ live | B− | trimmed maker prompt + smaller tool model | cut 27K-token tool-loop tax (217s→target <60s) | chat |
| **Chat · conversational** | light-turn law (classifier + slim soul + Mac 7B) | ✅ shipped · measured | **B** | sub-5s warm path (candidate — unmeasured) | **17.3s** (was 464s); `mac-ollama-edge` · `qwen2.5:7b` · 0 retrieve hits; receipt `~/.nephew/run/light-turn-chat-receipt.json`; target <5s | chat |
| **RAG · embed** | bge-m3 1024-d FP16 `:9200` | ✅ live | **A** | same (canonical) | keep | RAG |
| **RAG · rerank** | bge-reranker-v2-m3 `:9201` | ✅ live | B+ | M5 edge keep-warm (shipped) | verify keep-warm under GPU pressure | RAG |
| **RAG · vector** | Qdrant Brain A/B | ⚠️ dual | B | unified collections + LVQ8 candidate | reconcile two brains; re-measure ingest | RAG |
| **RAG · coverage** | corpus indexed | 🔴 thin | **D** | full repo + plans + apps indexed | expand `NEPHEW_DEFAULT_COLLECTIONS`; on-save reindex (Plan 0229) | RAG |
| **RAG · multimodal** | vision vector | ⬜ text-only | C− | bge-vl / Plan 0109 Phase B (candidate) | ship vision-vector path with receipt | RAG |
| **Video · draft** | Wan 2.2 TI2V-5B | ✅ render-proven | **A−** | LTX-2 vs Wan 2.2 (candidate — unmeasured head-to-head) | receipt-gated compare on GB10 | video |
| **Video · draft fast** | LTX-Video 2B | ✅ on-volume | B+ | LTX warm-draft contract (Speed Contract) | wire `/health video_draft` + instant preview ≤2s | video |
| **Video · final** | HunyuanVideo | ✅ render-proven | **A−** | Hunyuan (keep sovereign ceiling) | Avatar adapter (jax ABI risk — dedicated window) | video + DGX |
| **Video · identity** | HunyuanVideo i2v v2 | ✅ render-proven | B+ | HunyuanVideo Avatar talking (adapter step) | in-container pip audit → weights → receipt smoke | video |
| **Video · image** | SD-Turbo + Flux FP8 | ✅ live | A− | Flux (keep); Nano Banana (cloud bar) | keep; name cloud bar on every ship | video |
| **Video · post** | Topaz Video AI | ⬜ documented | C | Topaz (industry standard, local) | CLI hook after DGX render | video |
| **Video · cloud bar** | Kling 3.0 / Nano Banana | cloud-only | — | named bar, never substituted | say sovereign ≠ cloud on every ship | — |
| **Vision · detect** | RF-DETR Court Vision (M5 ANE) | ⚠️ partial | B− | same + deep bge-vl escalation | `make ensure-warm-vision-detector`; deep async path | vision |
| **Visual · board** | Optimus VP board (`/optimus/`) | ✅ live · fleet warm | **A−** | spark VP tunnel when Mac Colima down | **86ms** paint · products rendered · `make heal-optimus-board` · receipt `~/.nephew/run/optimus-board-fresh.json` · fleet **5/5** | visual |
| **Sound · music** | ACE-Step | ✅ live (chat maker) | B | SOTA audio-gen pass (candidate — unmeasured) | run dated-vs-superior audio pass | chat + sound |
| **Quant · DGX** | FP8 / AWQ | ✅ live | A | FP8-KV + right-sized ctx | finish vLLM expert levers | DGX |
| **Quant · Mac** | GGUF / Ollama | ✅ live | B+ | **MLX serving** (20–87% faster, candidate routing) | enable MLX path for daily driver with receipt; M5 GPU Neural Accelerators need macOS 26.2+ | Mac |
| **Sports · detect + track** | RT-DETR-class on ANE + ByteTrack CPU (genesis stack, born 2026-07-09) | ⬜ charted — candidate — unmeasured | — | RT-DETR v3 class via Core ML/ANE | convert → Xcode ANE-residency report → fps/W receipt | sports |
| **Sports · replay segment** | SAM 2 video via MPS/MLX, **offline** | ⬜ candidate — unmeasured | — | SAM 2 video (**Core ML = image-only**, July 2026 — live-ANE claim forbidden) | offline minutes-per-clip receipt on M5 Max | sports |
| **Avatar · splat train/render** | Metal-compute engines (msplat / MetalSplatter / RadianceKit class) — **not Core ML/ANE** | ⬜ candidate — unmeasured | — | ~70 s/scene · ~350 FPS market claims (M4 Max, unmeasured here) | one family head end-to-end on M5 Max + FPS receipt | avatar |
| **Avatar · talking broker** | Phase 2 — research-grade ceiling named; interim bridge = HunyuanVideo i2v (video stack, render-proven) | ⬜ ceiling named | — | talking-head splats (research, July 2026) | keep Phase 1/2 honesty line; bridge via i2v | avatar + video |
| **Council · reasoning** | shared reasoning engine — Qwen3-32B-class (vLLM prime lane today, on-demand) | ⏸ on-demand | B+ | MLX-served reasoning on M5 (candidate — unmeasured); faculty = context/tools/RAG pipe, **not** per-chair big LLMs | reasoning bench (depth + TTFT + tok/s) before promoting a council default | chat + DGX |

## How to use this matrix

1. **Ledger first** — if a row disagrees with its stack Ledger, the Ledger wins; re-sync this file.
2. **Install gate** — `candidate — unmeasured` rows trigger weigh-and-measure before adopt.
3. **Per-modality Why Guides** — each stack's corrected table carries the narrative; this file is the fused index.
4. **Speed Contract** — warm-draft targets per modality: [`Super-Rick-Speed-Contract.md`](Super-Rick-Speed-Contract.md).

## Related

- Culture: [`THE-SUPER-RICK-WAY.md`](THE-SUPER-RICK-WAY.md)
- Fused window: [`optimus-nephew/standards/FUSED-STACK-OVERVIEW.md`](https://git.jailynmarvin.com/marvelousempire/optimus-nephew/src/branch/main/standards/FUSED-STACK-OVERVIEW.md)
- Voice · [`standard-voice-stack/understandings/Super-Rick-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-voice-stack/src/branch/main/understandings/Super-Rick-Why-Guide.md)
- Chat · [`standard-chat-stack/understandings/Super-Rick-Chat-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-chat-stack/src/branch/main/understandings/Super-Rick-Chat-Why-Guide.md)
- Video · [`standard-video-stack/understandings/Super-Rick-Video-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-video-stack/src/branch/main/understandings/Super-Rick-Video-Why-Guide.md)
- RAG · [`standard-rag-stack/understandings/Super-Rick-RAG-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-rag-stack/src/branch/main/understandings/Super-Rick-RAG-Why-Guide.md)
- Vision · [`standard-vision-stack/understandings/Super-Rick-Vision-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-vision-stack/src/branch/main/understandings/Super-Rick-Vision-Why-Guide.md)
- Visual · [`standard-visual-stack/understandings/VISUAL-STACK-UNDRESSING.md`](https://git.jailynmarvin.com/marvelousempire/standard-visual-stack/src/branch/main/understandings/VISUAL-STACK-UNDRESSING.md)
- Sports · [`standard-sports-tracking-stack/understandings/Super-Rick-Sports-Tracking-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-sports-tracking-stack/src/branch/main/understandings/Super-Rick-Sports-Tracking-Why-Guide.md)
- Avatar · [`standard-avatar-stack/understandings/Super-Rick-Avatar-Why-Guide.md`](https://git.jailynmarvin.com/marvelousempire/standard-avatar-stack/src/branch/main/understandings/Super-Rick-Avatar-Why-Guide.md)