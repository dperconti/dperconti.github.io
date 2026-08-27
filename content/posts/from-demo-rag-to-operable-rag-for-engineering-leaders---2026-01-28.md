---
title: "From demo RAG to operable RAG: what fails first"
date: 2026-01-28T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

Most teams endorse “From demo RAG to operable RAG” quickly and operationalize it slowly. Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

When pressure rises, teams drop the unowned practice first. Put **From demo RAG to operable RAG** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

Treating retrieval as a model problem when it is a data-operations problem.

No owner for corpus freshness; silent drift until users stop asking.

Connectors treated as temporary glue with no product owner.

Evals skipped because “users will tell us.” Users leave instead.

## Controls that answer those failures

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.

## A concrete scene

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

## Tradeoffs

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

On **From demo RAG to operable RAG**, polish the chat UI last. Connectors, authz at retrieval time, freshness owners, and a gold-question suite decide whether users trust the answers. Demo fluency without those controls is a long half-life of embarrassment.

For **From demo RAG to operable RAG**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## What to do this month

- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Add a thin-context path: refuse or escalate instead of inventing.
- Review connector failures in the same forum as product incidents.
- Name a freshness owner per major source with a refresh SLO.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

If someone new cannot explain **From demo RAG to operable RAG** from your artifacts in fifteen minutes, the practice is still private.
