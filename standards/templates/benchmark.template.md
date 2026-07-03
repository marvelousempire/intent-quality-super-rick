<!-- STATIONERY · Benchmark — a dated, single-session lab note
WHAT: one measurement session, recorded as a point-in-time artifact. Even a benchmark that FAILS
to run is written up — the blocker is the finding. Feeds de-stale corrections in Ledger/GAP/Ranking.
FILENAME: {Topic}-BENCHMARK-{YYYY-MM-DD}.md — fully dated; superseded by a newer file, never
edited into a different truth.
-->

# {Topic} benchmark — {YYYY-MM-DD}

**Goal:** <!-- ✍️ what this session set out to measure/crown, in one sentence. -->

**Trigger:** <!-- ✍️ what prompted it — cite the audit/incident/question, with a link. -->

## Headline outcome

<!-- ✍️ The finding in prose — including "could not run because {blocker}" when that's the truth.
     Support it with the state-at-test-time table: -->

| Process | {Resource} | Role |
|---------|-----------:|------|
| <!-- ✍️ what was consuming the resource at test time; right-align the numeric column; end with a **Free** row --> | | |

## Results

<!-- ✍️ When the benchmark DID run: the measured table (adapt columns), each row receipt-backed: -->

| Candidate | {Metric 1} | {Metric 2} | Verdict |
|-----------|-----------:|-----------:|---------|
| <!-- ✍️ 🏆 the winner; honest verdict words --> | | | |

Receipt: `receipts/{YYYY-MM-DD}-{topic}.json`

## What this means

1. <!-- ✍️ numbered implications — what the numbers force us to conclude. -->

## The decision (operator)

- <!-- ✍️ when the result leaves a genuine operator choice: the options as bullets, then: -->

**Recommended:** <!-- ✍️ the expert pick + why. -->

## Method (for repro)

```bash
# ✍️ the exact reproduction script — someone must be able to re-run this in a year
```

## Status

- Benchmark: <!-- ✍️ complete / blocked ({blocker}) -->
- Decision: <!-- ✍️ taken ({what}) / pending ({whose}) -->
- Related: <!-- ✍️ shared-root-cause links ("RAG fix #2 shares this root cause"), superseding docs. -->
