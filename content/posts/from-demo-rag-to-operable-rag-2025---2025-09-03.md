---
title: "From demo RAG to operable RAG (2025)"
date: 2025-09-03T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**From demo RAG to operable RAG** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Retrieval and operable RAG looks solved in a demo and unfinished in production for the same reason: connectors, permissions, and freshness were deferred as “plumbing.”

Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Grow the next owner

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

## Operating rhythm

- Log retrieval traces for every production answer for at least 30 days.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Name a freshness owner per major source with a refresh SLO.
- Add a thin-context path: refuse or escalate instead of inventing.
- Review connector failures in the same forum as product incidents.

## The wreck as syllabus

- No owner for corpus freshness; silent drift until users stop asking.
- Connectors treated as temporary glue with no product owner.
- Evals skipped because “users will tell us.” Users leave instead.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

Leaders who isolate the practice from Agentic systems create beautiful local optima and expensive global failure.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Add a thin-context path: refuse or escalate instead of inventing.
- When retrieval lies politely, users blame “the AI” and stop reporting.
- Review connector failures in the same forum as product incidents.
- Name a freshness owner per major source with a refresh SLO.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Chunking strategy as an architecture choice belongs in the same review as service boundaries.

## The point, again

If connectors and permissions are “later,” trust is already gone.

Continuity is the product. Tools and frameworks are optional accessories.

On **From demo RAG to operable RAG**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
