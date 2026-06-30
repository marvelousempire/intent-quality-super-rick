# Voice fleet cassette truth — doctor must match speech

**Standards version:** 1.1.1 · **Intent:** `INT-0021` `#super-rick-standards`  
**Applies to:** `standard-voice-stack`, `nephew` fleet cassettes (`higgs-tts`, `neutts-air`, voice edge)

---

## Rule

A fleet TTS cassette is **live** only when **both** pass:

1. **`GET /doctor`** — reports honest readiness (`state: ready`, model/repo fields match `data/voice-config.json`).
2. **`POST /v1/audio/speech`** (or product smoke) — returns **HTTP 200** and non-trivial WAV bytes.

**Forbidden:** marking `status: live` from doctor alone when synthesis path is untested.

---

## NeuTTS Air arm64 doctrine (Jun 30, 2026)

| Field | Required on Spark Grace |
|-------|-------------------------|
| `codec_repo` | `neuphonic/neucodec-onnx-decoder` |
| `ref_codes` | `true` in `/doctor` |
| Ref assets | Pre-encoded `.pt` + aligned `.txt` in `deploy/dgx/fleet/neutts-air/refs/` |
| Runtime encoder | **None** — PyTorch NeuCodec `encode_reference` fails on arm64 Linux |

**Verify:** `make smoke-neutts-air` (from Mac over WireGuard). Allow **120s+** on cold CPU infer.

**Anti-pattern:** doctor green + speech **502** — the pre-fix failure mode on DGX Spark.

---

## Higgs Audio v3 (reference)

| Field | Truth |
|-------|-------|
| Port | `:8095` |
| Doctor | `ready` + `bosonai/higgs-audio-v3-tts-4b` |
| Warm latency | ~3.2s typical |
| Primary | `dgx_emotional_primary` in `voice-config.json` |

---

## Related

- Status: `standard-voice-stack/status/voice/2026-06-30-neutts-air-arm64-live.md`
- Receipt: `standard-voice-stack/receipts/2026-06-30-neutts-air-smoke.json`
- Runtime: `nephew/data/voice-config.json` · `nephew/scripts/smoke-neutts-air.mjs`