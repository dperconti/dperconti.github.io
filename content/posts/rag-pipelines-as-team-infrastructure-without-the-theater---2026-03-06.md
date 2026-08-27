---
title: "RAG pipelines as team infrastructure without the theater"
date: 2026-03-06T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

Without the theater, **RAG pipelines as team infrastructure** is quieter: fewer frameworks, more written owners, less applause for motion.

Retrieval and operable RAG looks solved in a demo and unfinished in production for the same reason: connectors, permissions, and freshness were deferred as “plumbing.”

Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Practices with enough detail to copy

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Name a freshness owner per major source with a refresh SLO.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

### 2. Practice

Review connector failures in the same forum as product incidents.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

### 3. Practice

Log retrieval traces for every production answer for at least 30 days.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

### 4. Practice

Add a thin-context path: refuse or escalate instead of inventing.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

### 5. Practice

Before UI polish: ship connectors, authz checks, and a 50-question eval set.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

## How the practice decays

Stop doing these:

- Treating retrieval as a model problem when it is a data-operations problem.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- No owner for corpus freshness; silent drift until users stop asking.
- Evals skipped because “users will tell us.” Users leave instead.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering craft.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

## Tempo changed; accountability did not

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Log retrieval traces for every production answer for at least 30 days.
- Add a thin-context path: refuse or escalate instead of inventing.
- Review connector failures in the same forum as product incidents.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Name a freshness owner per major source with a refresh SLO.
- Permissions in RAG are not optional.

## The point, again

Build the eval loop first. Everything else is speculation with a chat box.

Continuity is the product. Tools and frameworks are optional accessories.

On **RAG pipelines as team infrastructure**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
