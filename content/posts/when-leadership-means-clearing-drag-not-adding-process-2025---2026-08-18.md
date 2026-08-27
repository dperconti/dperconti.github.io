---
title: "When leadership means clearing drag, not adding process (2025)"
date: 2026-08-18T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

**When leadership means clearing drag, not adding process** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

If you are working on Retrieval and operable RAG, start with how answers fail — stale, unauthorized, empty, politely wrong — and design controls for each bucket before polishing the chat UI.

Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Log retrieval traces for every production answer for at least 30 days.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

### 2. Practice

Add a thin-context path: refuse or escalate instead of inventing.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

### 3. Practice

Before UI polish: ship connectors, authz checks, and a 50-question eval set.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

### 4. Practice

Review connector failures in the same forum as product incidents.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

### 5. Practice

Name a freshness owner per major source with a refresh SLO.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

## The wreck as syllabus

Stop doing these:

- No owner for corpus freshness; silent drift until users stop asking.
- Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.
- Treating retrieval as a model problem when it is a data-operations problem.
- Evals skipped because “users will tell us.” Users leave instead.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Build the eval loop first. Everything else is speculation with a chat box.

## Where this couples to adjacent work

This work does not live alone. It couples to AI in engineering workflows.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Permissions in RAG are not optional.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Name a freshness owner per major source with a refresh SLO.
- Review connector failures in the same forum as product incidents.
- Log retrieval traces for every production answer for at least 30 days.
- Add a thin-context path: refuse or escalate instead of inventing.

## Close

If connectors and permissions are “later,” trust is already gone.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **When leadership means clearing drag, not adding process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
