# Super Rick {{DOMAIN_TITLE}} Stack — Full System Undressing

> ## 🛡 DECLARATION OF INTENT 🎗 · `{{LEDGER_ID}}` `{{HASHTAG}}`
>
> | Field | Declaration |
> |-------|-------------|
> | **Why** | Operators need every service, model, port, and covenant in one read. |
> | **Problem** | Truth scattered across config, routes, LaunchAgents, and plans. |
> | **Accomplish** | Full undressing of the deployed stack with honest gaps named. |
> | **Tags** | `{{SLUG}}-undressing` · `configuration` · `sovereign` |
> | **Intent ID** | `{{LEDGER_ID}}` `{{HASHTAG}}` |

**Last verified:** {{LAST_SYNCED}} · Pockit **v{{POCKIT_VERSION}}**  
**Runtime owner:** [`marvelousempire/nephew`](https://git.jailynmarvin.com/marvelousempire/nephew)  
**This repo:** canonical for {{DOMAIN_NOUN}} *documentation* (`{{REPO_HUB}}`).

**Start here for scorecard:** [`Super-Rick-{{DOMAIN_TITLE}}-Stack-Ledger.md`](./Super-Rick-{{DOMAIN_TITLE}}-Stack-Ledger.md)

---

## 1. One-line truth

{{ONE_LINE_TRUTH}}

---

## 2. Hardware nodes

| Node | Role |
|------|------|
| **{{EDGE_NODE}}** | {{EDGE_ROLE}} |
| **{{FRONTIER_NODE}}** | {{FRONTIER_ROLE}} |
| **WireGuard mesh** | `{{WG_BIND}}` — internal bind (see yousirjuan ch.02) |

---

## 3. Services & ports

| Service | Port | Bind | Health | Owner |
|---------|------|------|--------|-------|
| {{SERVICE}} | {{PORT}} | {{BIND}} | `{{HEALTH_PATH}}` | {{OWNER}} |

---

## 4. Models & engines

| Engine | Model / weights | Location | Status |
|--------|-----------------|----------|--------|
| {{ENGINE}} | {{MODEL}} | {{LOCATION}} | {{STATUS}} |

---

## 5. Quantization matrix

*Every model runs at a precision, and the precision follows the hardware — **never leave a model's quant unstated**. Mac = GGUF (Q4_K_M / Q5_K_M / Q6_K / Q8_0, llama.cpp + Metal); DGX = FP8 / AWQ / GPTQ (native NVFP8/FP4, vLLM + CUDA); embedding/rerank sidecars = FP16. Cross-ref: yousirjuan ch.31 (inference floor) + ch.16 (RAG quantization).*

| Model / weights | Engine | Hardware node | Format | Precision note (VRAM · quality · tok/s) |
|-----------------|--------|---------------|--------|------------------------------------------|
| {{MODEL}} | {{ENGINE}} | {{NODE}} | {{QUANT}} | {{QUANT_NOTE}} |

Choices are **measured, not asserted** — `{{WEIGH_MEASURE_TOOL}}` (e.g. `standard-voice-stack/tools/weigh-and-measure.sh`) reports **tool-call acceptance · context window · time-to-first-token · tokens/sec** per model/quant, and writes a receipt.

---

## 6. Chunking & indexing

*Retrieval / RAG stacks only — otherwise write "**N/A — this stack has no corpus.**" How raw source becomes vectors: the chunker parameters and the indexer that writes them. Every number stated (a "sophisticated chunker" with no size is not a spec).*

| Parameter | Value |
|-----------|-------|
| Chunker strategy | {{CHUNK_STRATEGY}} (e.g. sliding-window with boundary snap) |
| Chunk size | {{CHUNK_SIZE}} (chars ≈ tokens) |
| Overlap | {{CHUNK_OVERLAP}} |
| Stride | {{CHUNK_STRIDE}} |
| Boundary snap | {{CHUNK_SNAP}} |
| Indexer | `{{INDEXER_SCRIPT}}` → {{VECTOR_STORE}} |
| Reindex trigger | {{REINDEX_TRIGGER}} (timer · on-save watch · manual) |

---

## 7. Embedding & retrieval schema

*Retrieval stacks only — else "**N/A.**" The embedder with its **dimensionality and precision**, the reranker, and the collection/payload schema.*

| Element | Value |
|---------|-------|
| Embedder | {{EMBED_MODEL}} ({{EMBED_DIM}}-dim, {{EMBED_PRECISION}}) |
| Vector kinds | {{VECTOR_KINDS}} (dense · sparse · ColBERT · vision) |
| Reranker | {{RERANK_MODEL}} @ `{{RERANK_PORT}}` |
| Vector store | {{VECTOR_STORE}} @ `{{VECTOR_PORT}}` |
| Collections | {{COLLECTIONS}} |
| Payload fields | {{PAYLOAD_FIELDS}} |
| Retrieve path | {{RETRIEVE_API}} (+ MCP tool) |

---

## 8. Memory tiers

*Stacks that hold state only — else "**N/A — stateless.**" The three tiers and where each persists; retrieval is the RAG side (§6–7), not a substitute for durable memory.*

| Tier | Store | Lifecycle / eviction |
|------|-------|----------------------|
| Short-term (STM) | {{STM_STORE}} | {{STM_LIFECYCLE}} |
| Durable | {{DURABLE_STORE}} | {{DURABLE_LIFECYCLE}} |
| Retrieval | {{RETRIEVAL_STORE}} | {{RETRIEVAL_LIFECYCLE}} |

---

## 9. Covenant flags (`{{CONFIG_PATH}}`)

| Flag | Value | Honest note |
|------|-------|-------------|
| {{FLAG}} | {{VALUE}} | {{NOTE}} |

---

## 10. Platform handbook mirror (yousirjuan)

| Repo | Path | Role |
|------|------|------|
| **yousirjuan** | `{{YSJ_SETUP_CHAPTER}}` | Public-safe operator chapter — mirror after hub merge |
| **yousirjuan** | `{{YSJ_AI_SKILL}}` | Platform philosophy — link only |

**Sync:** Author here first → diff into YSJ chapter (platform lens, no secrets) → `node scripts/audit-super-rick-ysj-mirror.mjs --domain {{DOMAIN}}`

---

## Verify

```bash
{{VERIFY_BLOCK}}
node scripts/audit-super-rick-ysj-mirror.mjs --domain {{DOMAIN}}
```