---
title: "Who owns the knowledge graph behind the bot?: naming the owner"
date: 2025-09-28T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

If you are working on Who owns the knowledge graph behind the bot?, start with how answers fail — stale, unauthorized, empty, politely wrong — and design controls for each bucket before polishing the chat UI.

Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

On **Who owns the knowledge graph behind the bot?**, polish the chat UI last. Connectors, authz at retrieval time, freshness owners, and a gold-question suite decide whether users trust the answers. Demo fluency without those controls is a long half-life of embarrassment.

Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Review connector failures in the same forum as product incidents.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

### 2

Name a freshness owner per major source with a refresh SLO.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

### 3

Log retrieval traces for every production answer for at least 30 days.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

### 4

Add a thin-context path: refuse or escalate instead of inventing.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Who owns the knowledge graph behind the bot?** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Scenes

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

## Tradeoffs

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin context should refuse or escalate. Inventing confidence is how retrieval systems lose the room — and how support tickets turn into vague complaints about “the AI.”

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Failure modes

Each of these is a missing control, not a personality problem:

- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- Evals skipped because “users will tell us.” Users leave instead.
- Connectors treated as temporary glue with no product owner.
- Treating retrieval as a model problem when it is a data-operations problem.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

## Close

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

If someone new cannot explain **Who owns the knowledge graph behind the bot?** from your artifacts in fifteen minutes, the practice is still private.
