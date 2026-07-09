# Super Rick Decision Record — DXP6800 Pro is not a CDN (placement-first)

> **Kind:** `decision-record` · **Domain:** other · **Date:** 2026-07-09  
> **Protocol:** [`Super-Rick-Decision-Protocol.md`](../../../Super-Rick-Decision-Protocol.md) (intent-quality-super-rick ≥ 1.7.0)  
> **Mode:** heavy  
> **Slug:** dxp6800-cdn-framing · **Hub:** intent-quality-super-rick  
> **Status:** locked · exemplar for RL-SR-DEC-001

---

## 1. Intent lock

| Field | Value |
|-------|--------|
| **Job / outcome** | Stop multi-machine model re-downloads; optionally serve family static/site origin from bulk storage on family hardware |
| **Non-goals** | Global multi-region CDN; public edge on the NAS; live inference off NFS/SMB |
| **Bound** | Improve existing placement roles; do not invent a “CDN product” on UGOS |

---

## 2. Placement

| Field | Value |
|-------|--------|
| **Existing role** | cold vault / archive (+ optional private origin); public HTTPS already on VPS |
| **Home (host/path)** | UGREEN DXP6800 Pro `nasa.local` / `192.168.10.119` · `/volume2/media/ai-models` (cold) · VPS `nephew-ct` (public edge) |
| **New surface justified?** | no — cold vault + stage-to-local + VPS edge already covers the job |

---

## 3. Label detector

| Market label heard | Concrete job or **rejected** |
|--------------------|------------------------------|
| CDN | **Rejected** as product role. Concrete jobs: (1) model cold vault + `model-ensure` LAN-first (2) optional private static origin on NAS Docker/volume |

---

## 4. Drag check

| Risk | Severity | Mitigation or **blocks ship** |
|------|----------|-------------------------------|
| Inference off NAS NFS | high | **Blocked** — RL-MODELCACHE-001; stage to local hot only |
| SMB slow path as happy path | high | Allow internet pull when faster; backfill NAS after |
| Public TLS/edge on DXP | med–high | **Blocked** — public HTTPS stays VPS |
| Over-built static CDN ceremony | low–med | Thin origin only if needed; doors/proxy enough for family traffic |

**Net:** proceed with **thin polish of existing path** only (model-ensure reliability; optional static origin later) — **do not** rebrand DXP as CDN

---

## 5. Options considered

| Option | Pros | Cons |
|--------|------|------|
| Status quo (tiered vault + VPS edge) | Correct architecture; already partial | Mac ensure path still has friction |
| Thin polish (`model-ensure`, Mac mount) | Stops re-pull tax; low drag | Needs mount reliability |
| “Make DXP a CDN” product role | Sounds premium | Wrong silicon for public edge; live-path drag; cosplay |

---

## 6. Dated-vs-superior

| Field | Value |
|-------|--------|
| **Strongest available today** | Family placement: cold vault on NAS + local hot inference + VPS public edge (home-lab correct; beats commercial CDN cosplay for private models) |
| **Choice** | Keep tiered design; polish ensure path; reject CDN label |
| **Why not stronger** | N/A — multi-region CDN is out of bound and not superior for private fleet weights |
| **Check date** | 2026-07-09 |

---

## 7. Receipt

| Claim | Receipt type | Pointer |
|-------|--------------|---------|
| DXP role is NAS storage + cold vault | doc | `yousirjuan/hardware/ugreen-dxp6800-pro-spec.md` · fleet capability matrix |
| Model pull-once law exists | doc | RL-MODELCACHE-001 · `tiered-ai-model-storage.md` · journal 2026-06-26 re-download incident |
| Public edge is VPS | doc | fleet-capability-matrix “VPS public edge” |
| “CDN framing is inferior” | reasoning + doc | this decision-record + Decision Protocol |

---

## 8. Bounded elevate

| Check | Notes |
|-------|--------|
| Expert supply (what they may not have asked) | Placement matrix + drag check; light vs heavy decision stack (RL-SR-DEC-001) so agents don’t re-ask “are we a CDN?” |
| Inside intent bound? | yes |
| Disposition | ship (protocol + agent wiring) · teach why · defer static origin |

---

## 9. Decision (locked)

| Field | Value |
|-------|--------|
| **Chosen** | DXP remains cold vault / archive (+ optional private origin later). Not a CDN. Polish `model-ensure` / Mac vault mount next for model path. |
| **Rejected** | “Setup DXP as CDN” as architecture goal |
| **Grade now** | Architecture placement **A−** (design correct); ensure execution **B+** (Mac mount / rsync friction) |
| **Path to A** | Reliable Mac vault mount + `model-ensure` wins over bare `ollama pull`; fix macOS rsync flag friction |
| **Next action** | Agent: merge Decision Protocol 1.7.0 + nephew RL-SR-DEC-001; operator optional: Mac mount reliability pass |

---

## 10. Machine-usable line

```text
intent: private model/static origin without re-download or public-edge on NAS
options: status-quo | thin-polish-ensure | dxp-as-cdn-label
placement_role: cold_vault + public_HTTPS_on_VPS
chosen: keep tiered design; reject CDN label; polish model-ensure
rejected_why: CDN cosplay puts live/public path on wrong box and adds drag
drag_risks: NFS inference; slow SMB happy-path; public TLS on UGOS
receipt: yousirjuan NAS spec + RL-MODELCACHE-001 + fleet matrix VPS edge
grade_path_to_A: B+ ensure path → reliable Mac vault + model-ensure default
seed: Super-Rick-Decision-Protocol.md · RL-SR-DEC-001 · this decision-record
```

---

## 11. Seed close-out

| Seed | Path / id |
|------|-----------|
| Rule / RL | RL-SR-DEC-001 (nephew) · RL-MODELCACHE-001 |
| Why Guide / matrix row | Decision Protocol + this exemplar |
| Clinic case | (none new — re-download incident already journaled 2026-06-26) |
| Script / make | `make model-ensure MODEL=…` |
| This record filed at | `schema-library/super-rick/examples/Super-Rick-Decision-dxp6800-cdn-framing-2026-07-09.md` |

---

## Related

- Super Rick Way · Decision Protocol · Speed Contract  
- Nephew: RL-WGE-002 · RL-ELEVATE-001 · RL-SR-DEC-001 · RL-MODELCACHE-001  
