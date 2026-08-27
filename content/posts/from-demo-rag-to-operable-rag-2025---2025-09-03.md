---
title: "From demo RAG to operable RAG: naming the owner"
date: 2025-09-03T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

The useful version of “From demo RAG to operable RAG” is narrower than the slogan: A RAG system without an owner for freshness is a demo with a long half-life of embarrassment.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

Resist the urge to expand scope into neighboring slogans. If a control does not make **From demo RAG to operable RAG** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## A scene from delivery

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **From demo RAG to operable RAG** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## Another texture

Support escalations mention “the bot was wrong last month too.” Without retrieval traces, engineering debates model temperature instead of the stale source.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

## Tradeoffs

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

When pressure rises, teams drop the unowned practice first. Put **From demo RAG to operable RAG** in the path of work — templates, checklists, review norms — or admit it was optional applause.

Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.

## Failure modes

Each of these is a missing control, not a personality problem:

- Connectors treated as temporary glue with no product owner.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- Evals skipped because “users will tell us.” Users leave instead.
- No owner for corpus freshness; silent drift until users stop asking.

## What to do this month

- Add a thin-context path: refuse or escalate instead of inventing.
- Log retrieval traces for every production answer for at least 30 days.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

## Close

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

Carry the claim as a habit, not a brand: **From demo RAG to operable RAG** either compounds ownership or it was applause.
