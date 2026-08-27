---
title: "Eval loops for retrieval quality"
date: 2026-05-09T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Eval loops for retrieval quality** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Retrieval and operable RAG looks solved in a demo and unfinished in production for the same reason: connectors, permissions, and freshness were deferred as “plumbing.”

Retrieval quality is an operations problem. Chunking, access control, and source freshness decide trust more than model choice.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Review connector failures in the same forum as product incidents.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

### 2. Practice

Add a thin-context path: refuse or escalate instead of inventing.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

### 3. Practice

Log retrieval traces for every production answer for at least 30 days.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

### 4. Practice

Name a freshness owner per major source with a refresh SLO.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

### 5. Practice

Before UI polish: ship connectors, authz checks, and a 50-question eval set.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

## How the practice decays

Stop doing these:

- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- Treating retrieval as a model problem when it is a data-operations problem.
- Connectors treated as temporary glue with no product owner.
- No owner for corpus freshness; silent drift until users stop asking.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

## The neighboring discipline

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Review connector failures in the same forum as product incidents.
- Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty).
- Name a freshness owner per major source with a refresh SLO.
- Permissions bugs in RAG are data breaches with a conversational UI.
- Log retrieval traces for every production answer for at least 30 days.
- Add a thin-context path: refuse or escalate instead of inventing.

## Close

If connectors and permissions are “later,” trust is already gone.

Continuity is the product. Tools and frameworks are optional accessories.

On **Eval loops for retrieval quality**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
