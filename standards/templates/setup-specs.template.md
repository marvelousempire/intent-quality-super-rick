<!-- STATIONERY · Setup / Specs Guide — the hardware + runtime floor
WHAT: node specs, inference software, routing + failover, quantization-per-chip, minimums, and
the repeatable weigh-and-measure benchmark. The floor the Undressing doc stands on.
FILENAME: {NODES}-SETUP.md or {System}-Specs.md — undated, living.
-->

# {Nodes / System} — Setup & Specs

<!-- ✍️ Declaration of Intent block (full) + Scope prose + **Verified:** stamp. -->

## 0. One-line truth

<!-- ✍️ Which silicon does what, in one sentence. -->

## 1. Node A — {name}

| Spec | Value |
|------|-------|
| <!-- ✍️ chip, RAM, storage, OS — verified, not from memory --> | |

<!-- ✍️ One paragraph: why this node owns its role. Add a "Correction of record" callout if a
     previously published spec was wrong. -->

### Inference software

| Software | Role | Endpoint |
|----------|------|----------|

## 2. Node B — {name}

<!-- ✍️ Same shape: | Spec | Value | + | Software | Role | Port (mesh) |. -->

## 3. Routing — {primary}-first, {secondary} fallback

<!-- ✍️ Prose + the routing snippet, then: -->

| Failover mode | Covered? |
|---------------|----------|
| <!-- ✍️ every failure path: ✅ / ⬜ — honest --> | |

## 4. Quantization — right format per node

| Format | Built for | Use on |
|--------|-----------|--------|
<!-- ✍️ the per-chip law (e.g. FP8 native on Blackwell, GGUF/MLX on Apple Silicon). -->

## 5. Weigh & measure

<!-- ✍️ THE SIGNATURE SECTION. The repeatable benchmark: the command, then the measured table,
     then the verdict. The measurement is allowed to overturn the plan. -->

```bash
# ✍️ tools/weigh-and-measure.sh or equivalent — exact repro command
```

| Model | Tools | Context | tok/s | Verdict |
|-------|-------|---------|-------|---------|
| <!-- ✍️ ✅/⚠️ tool-accept · ctx window · measured throughput · 🏆 winner / verdict word --> | | | | |

**Result:** <!-- ✍️ the decision the numbers force. --> **Hard rules:** <!-- ✍️ what must hold (receipts, no unmeasured defaults). -->

## 6. {The resident agent / service}

| Key | Value | Why |
|-----|-------|-----|
<!-- ✍️ its config of record + a privacy/tenancy paragraph. -->

## 7. Verify

```bash
# ✍️ health probes for every node + endpoint
```

## 8. Honest gaps

| Item | Status |
|------|--------|
| <!-- ✍️ glyph + what's still not covered --> | |

## Related

- <!-- ✍️ Undressing · Ledger · model ranking · benchmark notes. -->

<!-- ✍️ MINIMUM-SPECS flavor (user-facing "will it run" doc): replace §1–2 with a tier table
     | Tier | Spec | Services | (Edge/Core/Client) + software gates bash + an auto-adapt
     architecture section (client/server/advisor bullets) + | Block | Relevant keys | config table.
     Mirror it to the product Help folder and note the export command in the header. -->
