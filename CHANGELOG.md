# Changelog — standards-super-rick

All notable changes to the Super Rick Standards. Semver on the standards (see `README.md`).

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
