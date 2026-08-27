---
title: "Permissions in RAG: the boring requirement"
date: 2026-05-17T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Permissions in RAG: the boring requirement** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Retrieval and operable RAG is infrastructure with a product owner. Treat it that way and you will skip a year of trust erosion.

Retrieval quality is an operations problem. Chunking, access control, and source freshness decide trust more than model choice.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Why smart teams still dodge this

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## What to put in place before the announcement

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

## Texture from the work

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

## The costs of doing it right

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

If connectors and permissions are “later,” trust is already gone.

## Do not silo the practice

This work does not live alone. It couples to AI in engineering workflows.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Review connector failures in the same forum as product incidents.
- Name a freshness owner per major source with a refresh SLO.
- Add a thin-context path: refuse or escalate instead of inventing.
- Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty).
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise.

## What to carry forward

Build the eval loop first. Everything else is speculation with a chat box.

Continuity is the product. Tools and frameworks are optional accessories.

On **Permissions in RAG: the boring requirement**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
