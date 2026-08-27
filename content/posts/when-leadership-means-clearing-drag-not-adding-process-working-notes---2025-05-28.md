---
title: "When leadership means clearing drag, not adding process — working notes"
date: 2025-05-28T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

A field note on **When leadership means clearing drag, not adding process** should be inspectable next week. Mechanisms beat vibes.

If you are working on Retrieval and operable RAG, start with how answers fail — stale, unauthorized, empty, politely wrong — and design controls for each bucket before polishing the chat UI.

Retrieval quality is an operations problem. Chunking, access control, and source freshness decide trust more than model choice.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Coaching lens

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

## Operating rhythm

- Review connector failures in the same forum as product incidents.
- Add a thin-context path: refuse or escalate instead of inventing.
- Name a freshness owner per major source with a refresh SLO.
- Log retrieval traces for every production answer for at least 30 days.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.

## The wreck as syllabus

- Connectors treated as temporary glue with no product owner.
- No owner for corpus freshness; silent drift until users stop asking.
- Evals skipped because “users will tell us.” Users leave instead.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

If connectors and permissions are “later,” trust is already gone.

## The neighboring discipline

This work does not live alone. It couples to Engineering craft.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Review connector failures in the same forum as product incidents.
- Name a freshness owner per major source with a refresh SLO.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Log retrieval traces for every production answer for at least 30 days.
- Add a thin-context path: refuse or escalate instead of inventing.
- Permissions bugs in RAG are data breaches with a conversational UI.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **When leadership means clearing drag, not adding process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
