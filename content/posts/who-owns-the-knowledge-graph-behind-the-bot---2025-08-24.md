---
title: "Who owns the knowledge graph behind the bot?"
date: 2025-08-24T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

Most teams endorse “Who owns the knowledge graph behind the bot?” quickly and operationalize it slowly. Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Who owns the knowledge graph behind the bot?** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## A scene from delivery

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.

Thin context should refuse or escalate. Inventing confidence is how retrieval systems lose the room — and how support tickets turn into vague complaints about “the AI.”

## Another texture

Support escalations mention “the bot was wrong last month too.” Without retrieval traces, engineering debates model temperature instead of the stale source.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

## Tradeoffs

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

For **Who owns the knowledge graph behind the bot?**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Who owns the knowledge graph behind the bot?** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Failure modes

Each of these is a missing control, not a personality problem:

- Evals skipped because “users will tell us.” Users leave instead.
- No owner for corpus freshness; silent drift until users stop asking.
- Treating retrieval as a model problem when it is a data-operations problem.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

## What to do this month

- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Add a thin-context path: refuse or escalate instead of inventing.
- Name a freshness owner per major source with a refresh SLO.

Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

## Close

If connectors and permissions are “later,” trust is already gone.

Carry the claim as a habit, not a brand: **Who owns the knowledge graph behind the bot?** either compounds ownership or it was applause.
