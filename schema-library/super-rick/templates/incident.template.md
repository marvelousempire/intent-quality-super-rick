<!-- STATIONERY · Incident / Postmortem — durable record + rule
WHAT: something broke, masqueraded as working, or nearly recurred. This doc makes the lesson
structural: symptom → layered root cause → shipped fix → rule → verify. "Load this before
touching {X}" is its job description. Pair with a Clinic case when the failure can recur.
FILENAME: {Product}-{Failure}-{YYYY-MM-DD}.md (dated incident) or {Topic}-{Rule-Slug}.md
(resolved incident that became a standing rule/runbook).
-->

# {{INCIDENT_TITLE}} — {{INCIDENT_DATE}}

> <!-- ✍️ Purpose line: "Durable record of {failure}. Load this before touching {code path}." -->

**Product:** {{TITLE}} · **Fix shipped:** {surface} **v{X.Y.Z}** · **Status:** {resolved {date} / monitored}
**Rule:** <!-- ✍️ RL-ID if the incident minted one --> · **Clinic:** <!-- ✍️ case id/slug --> · **PR:** #{N}
**Last verified:** <!-- ✍️ Eastern timestamp -->

## TL;DR

| Layer | Status ({{INCIDENT_DATE}}) |
|-------|------------------------|
| <!-- ✍️ each affected layer + glyph status after the fix --> | |

## Symptom

<!-- ✍️ What the operator/system SAW — the observable, in their words where possible. -->

## Root cause ({N} layers)

<!-- ✍️ One subsection per layer — most masquerade failures have 2–3 stacked causes. Each: -->

### 1. {Layer}

| Endpoint / check | Check | Result |
|------------------|-------|--------|
| <!-- ✍️ the evidence rows that pin this layer --> | | |

**Fix:** <!-- ✍️ the source-code change for THIS layer (file + behavior). Root cause gate: source
fix, never a patch-around (RL-ROOT-001). -->

## What shipped ({surface} v{X.Y.Z})

| File | Change |
|------|--------|
| <!-- ✍️ every file + one-line change --> | |

Tests: <!-- ✍️ what covers the regression now. -->

## The rule (structural prevention)

1. <!-- ✍️ the numbered prevention mechanics (keep-warm / preflight / gate) — what makes recurrence impossible, not monitored. -->

## Tunables

| Env | Default | Meaning |
|-----|---------|---------|
| <!-- ✍️ the knobs the fix introduced --> | | |

## Verify commands

```bash
# ✍️ prove the fix holds, expected output as comments
```

## Operator notes

<!-- ✍️ Backup filenames, restore steps, completed unblock steps — anything the operator needs
     if it ever resurfaces. -->

## Cross-stack alignment

| Concern | {{TITLE}} | {{SIBLING_PRODUCT}} |
|---------|-------------|-------------|
| <!-- ✍️ when a sibling product shares the failure class: has IT been fixed too? (the mirror-the-fix guard) --> | | |

## Related

- <!-- ✍️ Clinic case · the rule file · the pattern doc · the audit that caught it. -->
