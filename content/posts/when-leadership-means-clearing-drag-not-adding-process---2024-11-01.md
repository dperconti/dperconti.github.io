---
title: "When leadership means clearing drag, not adding process"
date: 2024-11-01T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

**When leadership means clearing drag, not adding process** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

If you are working on Retrieval and operable RAG, start with how answers fail — stale, unauthorized, empty, politely wrong — and design controls for each bucket before polishing the chat UI.

Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Log retrieval traces for every production answer for at least 30 days.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

### 2. Practice

Before UI polish: ship connectors, authz checks, and a 50-question eval set.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

### 3. Practice

Add a thin-context path: refuse or escalate instead of inventing.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

### 4. Practice

Name a freshness owner per major source with a refresh SLO.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

### 5. Practice

Review connector failures in the same forum as product incidents.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

## Failure modes that teach

Stop doing these:

- Evals skipped because “users will tell us.” Users leave instead.
- Treating retrieval as a model problem when it is a data-operations problem.
- Connectors treated as temporary glue with no product owner.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

This work does not live alone. It couples to Agentic systems.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## Tempo changed; accountability did not

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Name a freshness owner per major source with a refresh SLO.
- Add a thin-context path: refuse or escalate instead of inventing.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Log retrieval traces for every production answer for at least 30 days.
- Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies.
- Review connector failures in the same forum as product incidents.

## What to carry forward

If connectors and permissions are “later,” trust is already gone.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **When leadership means clearing drag, not adding process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
