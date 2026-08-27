---
title: "Connectors are the hard part of retrieval under real load"
date: 2026-08-07T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

Under real load, **Connectors are the hard part of retrieval** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

Retrieval and operable RAG looks solved in a demo and unfinished in production for the same reason: connectors, permissions, and freshness were deferred as “plumbing.”

Retrieval quality is an operations problem. Chunking, access control, and source freshness decide trust more than model choice.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## The operating controls

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

## Concrete cases

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

## What I refuse to romanticize

Each failure mode below is a missing control. Another meeting will not install it.

- No owner for corpus freshness; silent drift until users stop asking.
- Treating retrieval as a model problem when it is a data-operations problem.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- Connectors treated as temporary glue with no product owner.

## The costs of doing it right

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Build the eval loop first. Everything else is speculation with a chat box.

## Where this couples to adjacent work

A durable approach borrows controls from Agentic systems instead of inventing a parallel religion.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise.
- Chunking strategy as an architecture choice belongs in the same review as service boundaries.
- Add a thin-context path: refuse or escalate instead of inventing.
- Name a freshness owner per major source with a refresh SLO.
- Review connector failures in the same forum as product incidents.
- Log retrieval traces for every production answer for at least 30 days.

## What to carry forward

If connectors and permissions are “later,” trust is already gone.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Connectors are the hard part of retrieval**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
