---
title: "When retrieval lies politely"
date: 2026-04-20T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

The useful version of “When retrieval lies politely” is narrower than the slogan: Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

When pressure rises, teams drop the unowned practice first. Put **When retrieval lies politely** in the path of work — templates, checklists, review norms — or admit it was optional applause.

On **When retrieval lies politely**, polish the chat UI last. Connectors, authz at retrieval time, freshness owners, and a gold-question suite decide whether users trust the answers. Demo fluency without those controls is a long half-life of embarrassment.

## A scene from delivery

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Measure what you claim to care about. If **When retrieval lies politely** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## Another texture

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

## Tradeoffs

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.

Thin context should refuse or escalate. Inventing confidence is how retrieval systems lose the room — and how support tickets turn into vague complaints about “the AI.”

## Failure modes

Each of these is a missing control, not a personality problem:

- Evals skipped because “users will tell us.” Users leave instead.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- No owner for corpus freshness; silent drift until users stop asking.
- Connectors treated as temporary glue with no product owner.

## What to do this month

- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Log retrieval traces for every production answer for at least 30 days.
- Add a thin-context path: refuse or escalate instead of inventing.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

## Close

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

Carry the claim as a habit, not a brand: **When retrieval lies politely** either compounds ownership or it was applause.
