---
title: "Connectors are the hard part of retrieval"
date: 2026-06-25T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Connectors are the hard part of retrieval** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Retrieval and operable RAG is infrastructure with a product owner. Treat it that way and you will skip a year of trust erosion.

Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Mechanisms worth installing

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

## Where this shows up

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

## Failure modes that teach

Each failure mode below is a missing control. Another meeting will not install it.

- Evals skipped because “users will tell us.” Users leave instead.
- Treating retrieval as a model problem when it is a data-operations problem.
- Connectors treated as temporary glue with no product owner.
- No owner for corpus freshness; silent drift until users stop asking.

## What you give up

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

If connectors and permissions are “later,” trust is already gone.

## Where this couples to adjacent work

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs.
- Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies.
- Add a thin-context path: refuse or escalate instead of inventing.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Review connector failures in the same forum as product incidents.
- Name a freshness owner per major source with a refresh SLO.

## The point, again

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

Continuity is the product. Tools and frameworks are optional accessories.

On **Connectors are the hard part of retrieval**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
