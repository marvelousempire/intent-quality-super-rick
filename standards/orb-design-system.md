# Super Rick Standard — The Presence Orb Design System

> **Canonical Super Rick Standard.** This is the single source of truth for the Super Rick
> voice-first cinematic design language. The orb *implementation* lives in
> [`super-rick-presence`](https://git.jailynmarvin.com/marvelousempire/super-rick-presence)
> (`app/globals.css` + `lib/presence-state.ts` + the shader uniforms); every value below is
> **pulled from that live code**, not invented — so this standard and the running UI stay one
> source of truth. Products pin a version of this standard via `products/products.json`.

> **North aesthetic:** *one living orb in near-black space — a Presence, not a chat website.* Calm, cinematic, voice-first. The UI gets out of the way; the orb **is** the interface.

---

## 1. Design principles (the "why it looks like this")

| # | Principle | In practice |
|---|-----------|-------------|
| 1 | **The orb is the UI** | Chrome is hidden by default; it fades in on pointer move and fades back out (5.2s). The orb + voice carry the experience. |
| 2 | **Near-black, single light source** | Deep space (`#030308`) with one soft radial glow behind the orb. No cards, no panels competing for attention. |
| 3 | **Cinematic, not app-like** | Film-grain texture, soft-light blends, backdrop blur, glow shadows — a "shot," not a form. |
| 4 | **Emotion is visible** | The orb's color, intensity, and warmth shift with the emotion of the reply (5 tones). The dot + orb agree. |
| 5 | **Calm motion** | Slow opacity fades (0.45s ease); nothing snaps. Full `prefers-reduced-motion` support. |
| 6 | **Voice-first, tap-to-talk** | A full-screen invisible tap layer; talking is the primary action, settings are tucked in a corner. |

---

## 2. Design tokens

### Color

| Token | Value | Use |
|-------|-------|-----|
| `--bg-void` | `#030308` | the near-black ground |
| `--bg-glow` | `radial-gradient(ellipse 80% 60% at 50% 45%, rgba(28,38,72,.35), transparent 70%)` | the single light behind the orb |
| `--text` | `rgba(220,228,245,.88)` | primary text |
| `--text-dim` | `rgba(200,214,245,.55)` | status line, labels |
| `--text-faint` | `rgba(160,180,220,.45)` | renderer tag, hints |
| `--accent` | `rgb(130,170,255)` (cornflower blue) | active state, focus, primary CTA |
| `--accent-fill` | `rgba(80,120,220,.18)` | active chip / selected background |
| `--glass` | `rgba(6,8,16,.82)` + `backdrop-filter: blur(16px)` | the settings panel |
| `--hairline` | `rgba(255,255,255,.08)` | borders on glass + chips |
| `--error` | `#ff8f8f` | mic/turn errors |

### Emotion palette (orb core + rim, RGB 0–1 → drives the shader)

| Emotion | Core | Rim | Intensity | Warmth | Dot |
|---------|------|-----|-----------|--------|-----|
| **neutral** | `(.45,.55,.95)` blue | `(.2,.35,.7)` | 0.50 | 0.35 | `#7aa8ff` |
| **warm** | `(1,.72,.35)` amber | `(.85,.45,.15)` | 0.75 | 0.85 | `#ffb35c` |
| **calm** | `(.35,.65,.95)` sky | `(.15,.4,.75)` | 0.45 | 0.40 | `#6eb5ff` |
| **excited** | `(1,.55,.25)` orange | `(.95,.25,.1)` | 0.90 | 0.55 | `#ff7a45` |
| **empathetic** | `(.55,.75,1)` soft blue | `(.35,.5,.85)` | 0.65 | 0.70 | `#9ec8ff` |

> The orb defaults to the **blue family** (neutral/calm) and warms to **amber/orange** with energy. Blue = listening/thinking; warm = engaged/excited.

### Typography

| Token | Value |
|-------|-------|
| Family | `"SF Pro Text", "Segoe UI", system-ui, -apple-system, sans-serif` · antialiased |
| **Label** (uppercase) | `0.65rem`, `letter-spacing .12em`, UPPERCASE, dim |
| **Status** | `0.78rem`, `letter-spacing .22em`, UPPERCASE, centered top |
| Panel title | `0.95rem` / weight 500 |
| Chip | `0.68rem` |
| Transcript | `0.92rem` / line-height 1.55, centered, `text-shadow 0 1px 24px rgba(0,0,0,.65)` |

**Rule:** small + wide-tracked + UPPERCASE for chrome labels; normal-case only for the transcript (the human's words).

### Space & layout (anchors)

| Element | Position |
|---------|----------|
| Status line | top **12%**, centered |
| Settings gear (◦) | top-right `1.1rem` |
| Settings panel | top-right, `width min(18rem, 100vw−2rem)`, radius **14px** |
| Emotion indicator | bottom **18%**, centered |
| Transcript | bottom **2.25rem**, centered, `width min(34rem, 100vw−2.5rem)` |
| Radius | chips/dots `999px` (pill) · panel `14px` · buttons `10px` |

### Motion

| Token | Value |
|-------|-------|
| Chrome fade | `opacity .45s ease` |
| Chrome auto-hide | reveal on pointer/touch, hide after **5.2s** |
| Panel enter | slide+fade `x:16→0, .28s` (Framer Motion) |
| Reduced motion | all animation/transition → `0.01ms` (honored globally) |

### Effects (the cinematic layer)

| Effect | How |
|--------|-----|
| **Film grain** | `feTurbulence` SVG noise, `opacity .18`, `mix-blend-mode: soft-light` over the root |
| **Single glow** | radial gradient behind the orb (`--bg-glow`) |
| **Glass** | `backdrop-filter: blur(16px)` on the panel + gear |
| **Dot glow** | `box-shadow 0 0 12px <emotion>` on the emotion dot |
| **Post-processing** | Bloom · Vignette · ChromaticAberration · Noise (WebGL fallback) / WebGPU when available |
| **Orb shader** | SDF raymarch (TSL) / GLSL icosahedron, `snoise` fbm interior; uniforms: `uCoreColor`, intensity, warmth, audio RMS/bass/mid/treble |

---

## 3. State machine

`idle → listening → thinking → speaking → idle`

| State | Label | Orb behavior |
|-------|-------|--------------|
| `idle` | **"Here"** | slow breathing, neutral blue |
| `listening` | "Listening…" | reacts to mic RMS/bass/mid/treble (calm tone) |
| `thinking` | "Thinking…" | inward churn, no audio |
| `speaking` | "Speaking…" | reacts to TTS audio + the turn's emotion tone |

Voice reactivity: `useVoiceReactivity` → Web Audio analyser → shader uniforms.

---

## 4. Design DOs

- **DO** keep the orb the hero — one orb, one glow, near-black ground.
- **DO** drive color from **emotion**, using the palette above (don't hardcode new colors).
- **DO** keep chrome small, uppercase, wide-tracked, and **auto-hiding**.
- **DO** animate with slow opacity fades; respect `prefers-reduced-motion`.
- **DO** use the glass+blur recipe for any floating surface.
- **DO** keep every floating control top-right or bottom-center — never crowd the orb.

## 5. Design DON'Ts

- **DON'T** turn it into a chat website — no message bubbles, no scrolling feed, no cards.
- **DON'T** add bright/opaque backgrounds — the void must stay near-black.
- **DON'T** introduce new accent hues outside the blue↔amber emotion range without updating the palette token.
- **DON'T** snap or bounce chrome in; no fast/aggressive motion.
- **DON'T** let the canvas steal pointer events (it's `pointer-events: none`; the tap layer handles input).
- **DON'T** show the chrome permanently — it fades; the orb is the focus.

---

## 6. Skinning / token extraction

To re-skin without forking the logic, override these **6 levers**:

1. `--bg-void` + `--bg-glow` — the ground + the single light.
2. `EMOTION_PALETTE` (`lib/presence-state.ts`) — the orb's core/rim per emotion.
3. `--accent` / `--accent-fill` — interactive color.
4. `--glass` + blur radius — the floating-surface material.
5. Type scale + tracking (the label/status/transcript sizes above).
6. Motion durations (`.45s` fade, `5.2s` auto-hide, `.28s` panel).

A "skin" is a JSON/CSS-vars file that sets those six; the state machine, shaders, and layout stay identical.

---

## Source of truth (in `super-rick-presence`)

| Concern | File |
|---------|------|
| Chrome tokens (color/type/space/motion/effects) | `app/globals.css` |
| State + emotion model + palette | `lib/presence-state.ts` |
| Orb shader (uniforms, fbm, raymarch) | `components/PresenceOrb/` (`shaders.ts`, `tsl/`) |
| Voice reactivity | `components/PresenceOrb/useVoiceReactivity.ts` |
| Settings panel + switchers | `components/UIOverlay/index.tsx` |

When the orb UI changes, update this standard in the same pass and bump `VERSION` if the change is binding.
