# **Super Rick {{DOMAIN_TITLE}} Agent — Bridge Plan**

**Evolve {{LEGACY_NAME}} in place → Super Rick north star**

| Doc | Role |
|-----|------|
| [**COMP**](PRIVATE%20{{DOMAIN_UPPER}}-FIRST%20AI%20SYSTEM%20%E2%80%94%20COMP.md) | Target — COMP v{{COMP_VERSION}} |
| [**Gap Analysis**](PRIVATE%20{{DOMAIN_UPPER}}-FIRST%20AI%20SYSTEM%20%E2%80%94%20GAP%20ANALYSIS.md) | Shipped vs COMP |
| **This file** | Phased bridge — no greenfield rewrite |

**Git-tracked plan:** [`plans/{{PLAN_ID}}`](../../../plans/{{PLAN_ID}})  
**Audited:** {{LAST_SYNCED}}

---

## Intention

| Field | Content |
|-------|---------|
| **Intention** | Close the gap between **shipped {{LEGACY_NAME}}** and **Super Rick COMP** without a risky greenfield rewrite. |
| **Not now** | {{NOT_NOW}} |
| **Done when** | {{DONE_WHEN}} |
| **Goal** | The board gets Super Rick quality on the **existing** sovereign surface — same door, same covenant, measurably better. |

---

## Strategic decision (locked)

**Approach: evolve in place** — not greenfield.

| Choice | Why |
|--------|-----|
| ✅ **Evolve in place** | Keeps door, config covenant, verify gates, prior plan investment. |
| ❌ **Greenfield** | Throws away production UI and routing. Defer unless Phase N fails. |

---

## Architecture after bridge

```mermaid
flowchart TB
  subgraph ui [Unchanged — {{UI_SURFACE}}]
    VP[{{UI_ENTRY}}]
  end
  subgraph api [{{API_HOST}} — extended]
    TA[{{API_ROUTE}}]
    P1[{{PROCESSOR_1}}]
    P2[{{PROCESSOR_2}}]
  end
  VP --> TA --> P1 --> P2
```

**Law:** {{ARCHITECTURE_LAW}}

---

## Phases

| Phase | Deliverable | Verify |
|-------|-------------|--------|
| **P1** | {{P1_DELIVERABLE}} | `{{P1_VERIFY}}` |
| **P2** | {{P2_DELIVERABLE}} | `{{P2_VERIFY}}` |

---

## Related

- [Ledger](Super-Rick-{{DOMAIN_TITLE}}-Stack-Ledger.md)
- [Why Guide](Super-Rick-{{DOMAIN_TITLE}}-Why-Guide.md)