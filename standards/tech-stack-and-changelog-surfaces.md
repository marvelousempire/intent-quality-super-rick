# Standard — Tech Stack + Changelog surfaces

**Declared:** 2026-07-05 · **Status:** standard (proven, live in `nephew` Briefcase console)

## The rule

Every Type B console (a Tauri-wrapped or standalone HTML door) that ships a "what does this
run on" surface and a "what shipped" surface uses these two patterns — not a hardcoded array,
not a simplified knockoff.

### Tech Stack / About

- Pattern: **os-pill-and-about-modal** (`nephew/.claude/rules/os-pill-and-about-modal.md`).
- Hero row (icon, name, version, byline) + a live spec table (OS, architecture, kernel,
  backend, uptime, memory, status) fed by a real `GET /api/v1/about` endpoint on the
  console's own server — every field read from the live process at click time, nothing
  typed into a JS array.
- A curated "what this is built on" architecture table (the console's own dependency
  stack — Gitea, Search, HCC, Pockit, sovereign hardware, etc.) may sit underneath the
  live facts — that content stays valuable, it's just not a *substitute* for the live facts.

### Changelog

- Pattern: **Pockit's changelog accordion**
  (`nephew/src/cassette-framework/pockit-changelog-render.js` +
  `nephew/containers/nephew-ct/family-hub/pockit-changelog.css`).
- Served to every console for free via the shared `/family-office-kit/` route
  (`HUB_KIT_ASSETS` in `scripts/lib/mac-app-prototype-kit.mjs` already maps both files) —
  reference them, don't reinvent them.
- Feed it the console's own `CHANGELOG.md` via a `GET /api/v1/changelog` endpoint on the
  console's own server, capped at a reasonable number of most-recent releases (25 is the
  proven default — the full archive can run to 100+ entries and there's no reason to ship
  the whole history into one modal).

## Reference implementation

`nephew` Briefcase console (`scripts/apple/briefcase-server.mjs` +
`scripts/apple/resources/briefcase-console.html`) — both endpoints live, both UIs upgraded
from a hardcoded array / link-out to the real thing. See the comparative survey +
integration record in `optimus-nephew`'s Extraction Chamber:
`extraction-chamber/tech-stack-and-changelog-patterns/`.

## Why this is the standard, not just "what Briefcase did"

The operator's own framing: "if this is the best that we know, it should be the standard" —
Super Rick keeps learning because standards are meant to be re-checked and tightened, not
frozen. This standard exists so the NEXT console doesn't re-derive "what should the Tech
Stack modal look like" from scratch — it reads this file, points at the two existing
renderers, and ships.
