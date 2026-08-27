---
title: "Permissions in RAG: the boring requirement"
date: 2026-05-17T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Add a thin-context path: refuse or escalate instead of inventing.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

### 2

Review connector failures in the same forum as product incidents.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

### 3

Before UI polish: ship connectors, authz checks, and a 50-question eval set.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

### 4

Log retrieval traces for every production answer for at least 30 days.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

When pressure rises, teams drop the unowned practice first. Put **Permissions in RAG: the boring requirement** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## Scenes

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

## Tradeoffs

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Thin context should refuse or escalate. Inventing confidence is how retrieval systems lose the room — and how support tickets turn into vague complaints about “the AI.”

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Permissions in RAG: the boring requirement** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## Failure modes

Each of these is a missing control, not a personality problem:

- No owner for corpus freshness; silent drift until users stop asking.
- Evals skipped because “users will tell us.” Users leave instead.
- Connectors treated as temporary glue with no product owner.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Support escalations mention “the bot was wrong last month too.” Without retrieval traces, engineering debates model temperature instead of the stale source.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

On **Permissions in RAG: the boring requirement**, keep the loop short: write the decision, name the owner, verify the outcome.
