# Changelog — intent-quality-super-rick

## [1.9.1] — Friday, July 10, 2026 at 3:02:31 AM Eastern · *First family receipts flip three matrix rows to measured*

### Changed
- **`SUPER-RICK-STACK-MATRIX.md`** — three rows move from claim/candidate to **measured 2026-07-10**
  (receipts in `~/.nephew/run/`, `INT-20260709-BRIEFCASE-FATHER-CONSOLE`):
  - **Voice · STT (Parakeet)** and **Voice · STT (WhisperKit)** — MLComputePlan probe: encoders
    98–100% **ANE-capable**, but the M5 Max planner sends **100% of ops to GPU under `.all`** —
    state now carries ⚠️ *residency unpinned*; action = pin `cpuAndNeuralEngine` + re-measure.
    Parakeet grade A → A− until pinned.
  - **Quant · Mac** — `benchmark-mlx-vs-ollama` measured: MLX +7.9% wall-ms on short turns
    (voice bench) but −35% prefill at long context and ±40% decode variance under load —
    **not promoted across the board**; per-workload routing named; idle-machine re-bench gate.
  - Last-synced stamp updated.
- **`VERSION`** — 1.9.0 → 1.9.1.

## [1.9.0] — Thursday, July 9, 2026 at 10:58:00 PM Eastern · *Matrix re-sync: Briefcase audit — two stacks born, M5 silicon law, council reasoning*

### Changed
- **`SUPER-RICK-STACK-MATRIX.md`** — Briefcase-audit pass (`INT-20260709-BRIEFCASE-FATHER-CONSOLE`):
  - New modality rows: **Sports · detect+track** and **Sports · replay segment**
    (`standard-sports-tracking-stack`, born tonight — SAM 2 Core ML is **image-only**, live-ANE
    claim forbidden) and **Avatar · splat train/render** + **Avatar · talking broker**
    (`standard-avatar-stack`, born tonight — splatting is **Metal compute, not Core ML/ANE**;
    Phase 2 research ceiling named, i2v bridge via video stack).
  - New **Council · reasoning** row — one shared reasoning engine (Qwen3-32B-class) + faculty
    context/tools/RAG pipe, never per-chair big LLMs; MLX-on-M5 serving `candidate — unmeasured`.
  - **Quant · Mac** row — M5 GPU Neural Accelerators floor named (macOS 26.2+).
  - Related links: Vision, Visual, Sports, Avatar Why Guides added (RAG link's target file is
    being created in `standard-rag-stack` this same pass — dangling link closed fleet-side).
  - Last-synced stamp updated.

## [1.8.0] — Thursday, July 9, 2026 at 7:30 PM Eastern · *What is a Why Guide handout*

### Added
- **`schema-library/super-rick/WHAT-IS-A-WHY-GUIDE.md`** — standalone operator/AI handout: definition,
  document skeleton, six-column table + Corrected & Expanded shape, day-one and post-audit fill
  procedure, field guide, laws, anti-patterns, done checklist, prototype paths, and a one-liner for
  prompts. Fills the gap where doctrine + template + voice prototype existed but no single “show
  another AI what this is” report lived.

### Changed
- `schema-library/super-rick/doctrine.md` — links handout at top + §1 why-guide.
- `schema-library/super-rick/README.md` — layout row + agents step 1 = handout.
- Root `README.md` — layout row for the handout.
- `standards/templates/README.md` · `why-guide.template.md` · `THE-SUPER-RICK-WAY.md` — pointers to handout.

## [1.7.0] — Wednesday, July 9, 2026 · *Super Rick Decision Protocol — AI reasoning stack*

### Added
- **`Super-Rick-Decision-Protocol.md`** — operational decision engine for Super Rick Culture:
  eleven components (intent lock → placement → label detector → drag check → options →
  SOTA → receipt-or-grade-down → bounded elevate → decision record → gap-naming → seed),
  light vs heavy paths (reasoning speed contract), ship-gate handoff, agent one-liner.
  Complements the seven disciplines + Super Rick gate (philosophy) with forced steps so
  agents stop market-cosplay (e.g. “NAS as CDN”) and improve placement-first decisions.
- **`schema-library/super-rick/templates/decision-record.template.md`** — stationery for
  durable decisions; scaffold kind `decision-record`.
- Schema enum + scaffold `KIND_TO_*` rows for `decision-record` (23rd kind).
- **`schema-library/super-rick/examples/Super-Rick-Decision-dxp6800-cdn-framing-2026-07-09.md`**
  — first filed decision-record (DXP6800 “CDN” framing rejected; placement-first cold vault + VPS edge).

### Changed
- **`THE-SUPER-RICK-WAY.md`** — links Decision Protocol as the AI/human decision layer.
- **`README.md`** · **schema-library doctrine / templates README** — layout + form table.

## [1.6.1] — 2026-07-05 · Tech Stack + Changelog surfaces standard

### Added
- `standards/tech-stack-and-changelog-surfaces.md` — every console's "what does this run
  on" + "what shipped" surfaces standardized on os-pill-and-about-modal + Pockit's
  changelog accordion, after a comparative survey found them the strongest of every
  candidate already in the framework. Reference implementation: `nephew` Briefcase
  console. Full survey + integration record: `optimus-nephew`'s Extraction Chamber
  `extraction-chamber/tech-stack-and-changelog-patterns/`.

## [1.6.0] — 2026-07-04 · Super Rick Speed Contract (all five modalities)

- **Super-Rick-Speed-Contract.md** — the speed+efficiency half of THE-SUPER-RICK-WAY: the always-warm
  fast-draft + heavy-escalation + fallback + watchdog + /health pattern (proven in voice at 206ms),
  generalized to chat, visual, video, and vision — each tuned to its physics. Honest maturity table:
  voice+chat 🟢 done, video 🟡 has the machinery, visual+vision 🔴 the gap this opens. Each stack gets
  the contract in its own repo (individually-then-fused). IDEA-0006.


All notable changes to the Super Rick Standards. Semver on the standards (see `README.md`).

## [1.6.1] — Wednesday, July 8, 2026 (evening) · *Receipt sync — Visual fleet-green + light-turn measured*

### Changed
- **`SUPER-RICK-STACK-MATRIX.md`** — Visual board → **live · A−** (86ms paint, products rendered, `make heal-optimus-board`); chat light-turn → **17.3s** measured (was 464s; slim soul + Mac 7B + no RAG/tools/session).
- **`Super-Rick-Speed-Contract.md`** — Visual modality **🟢**; fleet **5/5**; documents `make heal-optimus-board`.
- **`THE-SUPER-RICK-WAY.md`** — chat row: light-turn law shipped (464s→17s).

## [1.6.0] — Wednesday, July 8, 2026 · *Stack matrix + Speed Contract wired across all modalities*

### Added
- **`SUPER-RICK-STACK-MATRIX.md`** — fused cross-modality table: component · state · grade · strongest-available · action · who. The north-star index for dated-vs-superior; honest state labels (`live` / `candidate — unmeasured` / `cloud-only`).
- **`Super-Rick-Speed-Contract.md`** — one warmth pattern across voice/chat/visual/video/vision; fleet wiring via `make fleet-warm` + `install-warm-fleet-watchdog`.

### Changed
- **`THE-SUPER-RICK-WAY.md`** — scope table refreshed to July 8 measured truth; video + sound rows added; links to matrix + Speed Contract.
(Repo renamed from `standards-super-rick` → `intent-quality-super-rick`; the consumer hub repo
`voice-stack` was renamed → `standard-voice-stack`. The standard version line is unchanged.)

> **Rename note (no version bump):** repo references updated to the new names — this repo
> `standards-super-rick` → `intent-quality-super-rick`; consumer hub `voice-stack` →
> `standard-voice-stack`. The design language is unchanged; `VERSION` stays `1.1.0`.


## [1.3.0] — Friday, July 3, 2026 at 1:45:00 PM Eastern · *Schema Library super-rick domain*

### Added
- **`schema-library/super-rick/`** — canonical Schema Library domain for Super Rick: `doctrine.md`,
  thirteen `templates/`, `schemas/super-rick-understanding.doc.schema.json`, YSJ mirror
  `registry/ysj-mirror.registry.json`, and `scripts/` (scaffold + audit).
- **`schema-library/README.md`** — how this repo fits the umbrella `marvelousempire/schema-library`
  sub-repo layout.

### Changed
- `standards/templates/README.md` — points agents to `schema-library/super-rick/templates/`.
- Root `README.md` — layout table lists `schema-library/super-rick/` as the agent entry.

> **Verify:** `node schema-library/super-rick/scripts/scaffold-super-rick-understanding.mjs --check`

## [1.2.0] — Friday, July 3, 2026 at 1:11:40 PM Eastern · *The Super Rick Way + the stationery*

### Added
- `THE-SUPER-RICK-WAY.md` — the philosophy: psychology, the seven disciplines, the Super Rick
  gate, and the full-multimedia scope table (voice, text chat, retrieval, vision, image, sound,
  quantization).
- `standards/templates/` — **the stationery**: 17 fill-in templates extracted from the
  `standard-voice-stack/understandings/` prototype corpus, so every new system (chat, vision,
  image, sound, …) is charted the Super Rick way. Core chain: `declaration-of-intent` →
  `comp` → `why-guide` → `gap-analysis` → `bridge-plan` → `ledger`; supporting types: `audit`,
  `architecture`, `inventory-undressing`, `setup-specs`, `model-ranking`, `benchmark`,
  `incident`, `cross-product-patterns`, `understandings-readme`; shared blocks in `_chrome.md`;
  index + charting order + filename law in `standards/templates/README.md`. Every field carries
  a ✍️ fill instruction.

### Changed
- `README.md` — Layout table now lists the philosophy doc and the stationery.
- `products/products.json` — `standards_version` → `1.2.0`.

## [1.1.1] — Tuesday, June 30, 2026 at 3:45 PM Eastern · *Voice fleet cassette truth*

### Added
- `standards/voice-fleet-cassette-truth.md` — doctor + speech smoke law; NeuTTS arm64 ONNX doctrine (`ref_codes`, `make smoke-neutts-air`).

### Changed
- `products/products.json` — `standards_version` → `1.1.1`; `standard-voice-stack` notes cite NeuTTS `:8096` live.

## [1.1.0] — Thursday, June 25, 2026 Eastern · *Orb advances: emotion settle, tap-to-talk, DEV MODE*

### Added
- `standards/orb-design-system.md` → **v1.1 additions (binding)**: emotion now **settles** (color
  lerps, amber↔blue swing, emotion-driven brightness) instead of snapping; a breathing **tap-to-talk**
  affordance; and **DEV MODE** (live response timer + STT/Turn timings + scrolling interaction/error
  log + smart ⚑ Report button). Extracted from the shipped `super-rick-presence` work.

### Changed
- `products/products.json` — `standards_version` → `1.1.0`; `super-rick-presence` and `voice-stack`
  re-pinned to `1.1.0` (they implement the v1.1 orb).

## [1.0.0] — Thursday, June 25, 2026 at 1:56 PM Eastern · *Seed the canonical Super Rick Standard*

### Added
- `standards/orb-design-system.md` — the complete Presence orb design system (principles, design
  tokens, 5-tone emotion palette, typography, layout anchors, motion, cinematic effects, state
  machine, DOs/DON'Ts, 6-lever skinning model), extracted from the live `super-rick-presence` code.
- `products/products.json` + `products/README.md` — the per-product version registry (`super-rick-presence`
  reference-implementation, `voice-stack` consumer; both pinned to `1.0.0`).
- `VERSION` (`1.0.0`), `README.md` (with Declaration of Intent `INT-0021 #super-rick-standards`), `CLAUDE.md`.

### Context
First of the `standards-*` repo family. Extracted from `voice-stack/interfaces/orb` so the Super Rick
Standards have one versioned home, separate from the orb *implementation* (`super-rick-presence`) and
the voice *documentation* (`voice-stack`). Mirrored Gitea (primary) → GitHub (insurance).
