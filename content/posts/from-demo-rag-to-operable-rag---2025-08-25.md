---
title: "From demo RAG to operable RAG"
date: 2025-08-25T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

The useful version of “From demo RAG to operable RAG” is narrower than the slogan: Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Resist the urge to expand scope into neighboring slogans. If a control does not make **From demo RAG to operable RAG** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

Treating retrieval as a model problem when it is a data-operations problem.

Evals skipped because “users will tell us.” Users leave instead.

Connectors treated as temporary glue with no product owner.

No owner for corpus freshness; silent drift until users stop asking.

## Controls that answer those failures

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.

## A concrete scene

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

## Tradeoffs

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

For **From demo RAG to operable RAG**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

When pressure rises, teams drop the unowned practice first. Put **From demo RAG to operable RAG** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## What to do this month

- Log retrieval traces for every production answer for at least 30 days.
- Review connector failures in the same forum as product incidents.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Add a thin-context path: refuse or escalate instead of inventing.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

Support escalations mention “the bot was wrong last month too.” Without retrieval traces, engineering debates model temperature instead of the stale source.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

Carry the claim as a habit, not a brand: **From demo RAG to operable RAG** either compounds ownership or it was applause.
