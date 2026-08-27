---
title: "Connectors are the hard part of retrieval"
date: 2026-06-25T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

I care about “Connectors are the hard part of retrieval” for one practical reason: it either leaves clearer ownership next week, or it was theater.

Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Thin context should refuse or escalate. Inventing confidence is how retrieval systems lose the room — and how support tickets turn into vague complaints about “the AI.”

Measure what you claim to care about. If **Connectors are the hard part of retrieval** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## A scene from delivery

Support escalations mention “the bot was wrong last month too.” Without retrieval traces, engineering debates model temperature instead of the stale source.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Connectors are the hard part of retrieval** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Another texture

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

## Tradeoffs

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Connectors are the hard part of retrieval** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Failure modes

Each of these is a missing control, not a personality problem:

- No owner for corpus freshness; silent drift until users stop asking.
- Treating retrieval as a model problem when it is a data-operations problem.
- Connectors treated as temporary glue with no product owner.
- Evals skipped because “users will tell us.” Users leave instead.

## What to do this month

- Review connector failures in the same forum as product incidents.
- Name a freshness owner per major source with a refresh SLO.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

If someone new cannot explain **Connectors are the hard part of retrieval** from your artifacts in fifteen minutes, the practice is still private.
