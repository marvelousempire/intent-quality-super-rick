# intent-quality-super-rick — agent orientation

This repo is the **canonical, versioned Super Rick design language**. Standards only — no app code.

- **Implementation** (orb code): `~/Developer/nephew/apps/super-rick-presence` → repo `marvelousempire/super-rick-presence`.
- **This repo**: the *rules* (`standards/`) + the per-product version registry (`products/products.json`) + `VERSION`.
- **Publish path:** Gitea `marvelousempire/intent-quality-super-rick` (primary). GitHub is offsite insurance only — never treat it as primary, never auto-push it.

## When you change a standard

1. Edit `standards/` (keep it in lockstep with the live `super-rick-presence` code).
2. Bump `VERSION` (semver: MAJOR breaking · MINOR additive · PATCH clarify).
3. Add a `CHANGELOG.md` entry (human-readable Eastern timestamp).
4. Branch → PR → merge on Gitea (never commit straight to `main`).

## When a product adopts the standard

Update its row in `products/products.json` (`pinned_standards_version`). See `products/README.md`.

The Super Rick intent + quality + standards home (renamed from `standards-super-rick`). Consumer `standard-voice-stack` pins a version of this standard.
