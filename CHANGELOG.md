# Changelog — intent-quality-super-rick

All notable changes to the Super Rick Standards. Semver on the standards (see `README.md`).
(Repo renamed from `standards-super-rick` → `intent-quality-super-rick`; the consumer hub repo
`voice-stack` was renamed → `standard-voice-stack`. The standard version line is unchanged.)

> **Rename note (no version bump):** repo references updated to the new names — this repo
> `standards-super-rick` → `intent-quality-super-rick`; consumer hub `voice-stack` →
> `standard-voice-stack`. The design language is unchanged; `VERSION` stays `1.1.0`.

## [1.4.0] — Friday, July 3, 2026 at 8:47:16 PM Eastern · *Schema-library stationery complete — 7 new kinds + shared chrome*

### Added
- **Seven stationery kinds** ported from `standards/templates/` into the canonical
  `schema-library/super-rick/templates/` domain, closing the gap between the 1.2.0 stationery
  and the 1.3.0 schema-library domain (every untemplated doc type in the
  `standard-voice-stack/understandings/` prototype corpus now has a kind):
  `audit` (living subsystem — distinct from dated `fleet-audit`), `architecture` (component
  internals — distinct from `architecture-l3`), `benchmark`, `model-ranking`, `setup-specs`,
  `incident` (postmortem + rule — distinct from `incident-gap`), `understandings-readme`.
- **`templates/_chrome.md`** — the shared blocks (shield, stamps, de-stale banners, glyph legend,
  LED bars, Law callouts, Grade mixin, Boss Moves, Verify, Related) — copy-in, not a kind.
- Schema `kind` enum + scaffold `KIND_TO_TEMPLATE`/`KIND_TO_OUTPUT` rows for all seven
  (21 kinds total); new `BENCHMARK_TOPIC` context key.

### Fixed
- `RANKING_DOC` context now year-stamped (`{{DOMAIN_TITLE}}-Model-Ranking-{{YEAR}}.md`) per the
  filename law — matches the `model-ranking` kind output and the `Voice-Model-Ranking-2026.md`
  prototype (was date-stamped).

### Not ported (deliberate)
- `standards/templates/inventory-undressing.template.md` — already covered by the existing
  `repo-inventory` + `full-stack-undressing` pair.

> **Verify:** `node schema-library/super-rick/scripts/scaffold-super-rick-understanding.mjs --check`
> (21 kinds) + kind smokes (`model-ranking` → `Chat-Model-Ranking-2026.md`, `benchmark` →
> `VOICE-BENCHMARK-<date>.md`, `understandings-readme` → `README.md`).

## [1.3.1] — Friday, July 3, 2026 at 8:38:10 PM Eastern · *Declaration of Intent template lands in the schema-library domain*

### Fixed
- **`schema-library/super-rick/templates/declaration-of-intent.template.md`** — the core chain's
  step 1 (the 🛡 shield, "required on primary docs" per `doctrine.md`) existed in
  `standards/templates/` but was missing from the canonical `schema-library/super-rick/templates/`
  domain shipped in 1.3.0. Added as kind `declaration-of-intent`: schema enum row, scaffold
  `KIND_TO_TEMPLATE`/`KIND_TO_OUTPUT` wiring, and first slot in the `--bundle` chain (now 7 docs).
- `schema-library/super-rick/templates/README.md` — broken doctrine link
  (`../../super-rick-understandings.md` → `../doctrine.md`), broken YSJ registry path
  (`data/super-rick-ysj-mirror.registry.json` → `../registry/ysj-mirror.registry.json`), and the
  new `declaration-of-intent` row at the top of the kind table.
- `schema-library/super-rick/doctrine.md` — two dead `../standards/declaration-of-intent-model.md`
  links now point at the nephew canonical
  (`marvelousempire/nephew` → `docs/standards/declaration-of-intent-model.md`); shield section
  names its template.

> **Verify:** `node schema-library/super-rick/scripts/scaffold-super-rick-understanding.mjs --check`
> (14 kinds) + single-kind scaffold smoke.

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
