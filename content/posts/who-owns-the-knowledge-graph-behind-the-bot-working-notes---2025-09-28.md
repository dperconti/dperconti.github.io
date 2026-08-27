---
title: "Who owns the knowledge graph behind the bot? — working notes"
date: 2025-09-28T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

A field note on **Who owns the knowledge graph behind the bot?** should be inspectable next week. Mechanisms beat vibes.

If you are working on Retrieval and operable RAG, start with how answers fail — stale, unauthorized, empty, politely wrong — and design controls for each bucket before polishing the chat UI.

A RAG system without an owner for freshness is a demo with a long half-life of embarrassment.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## What to put in place before the announcement

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

## Texture from the work

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

## The wreck as syllabus

Each failure mode below is a missing control. Another meeting will not install it.

- Connectors treated as temporary glue with no product owner.
- No owner for corpus freshness; silent drift until users stop asking.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- Treating retrieval as a model problem when it is a data-operations problem.

## The costs of doing it right

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Where this couples to adjacent work

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

## Tempo changed; accountability did not

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Log retrieval traces for every production answer for at least 30 days.
- Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback.
- Name a freshness owner per major source with a refresh SLO.
- Permissions in RAG are not optional.
- Add a thin-context path: refuse or escalate instead of inventing.
- Review connector failures in the same forum as product incidents.

## What to carry forward

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Who owns the knowledge graph behind the bot?**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
