# Changelog — intent-quality-super-rick

All notable changes to the Super Rick Standards. Semver on the standards (see `README.md`).
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
