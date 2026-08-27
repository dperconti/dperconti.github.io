---
title: "When leadership means clearing drag, not adding process in practice"
date: 2026-06-22T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

In practice, **When leadership means clearing drag, not adding process** is a sequence of controls you can name — not a philosophy deck.

Retrieval and operable RAG is infrastructure with a product owner. Treat it that way and you will skip a year of trust erosion.

Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What I refuse to romanticize

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Connectors treated as temporary glue with no product owner.

Treating retrieval as a model problem when it is a data-operations problem.

No owner for corpus freshness; silent drift until users stop asking.

Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

## Boring controls that compound

Those failures map to controls. Install the smallest ones that make failure legible.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

## Concrete cases

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

## What you give up

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Build the eval loop first. Everything else is speculation with a chat box.

## The neighboring discipline

A durable approach borrows controls from Engineering craft instead of inventing a parallel religion.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

## When models join the workflow

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Log retrieval traces for every production answer for at least 30 days.
- Name a freshness owner per major source with a refresh SLO.
- Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback.
- Review connector failures in the same forum as product incidents.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path.

## The point, again

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

Continuity is the product. Tools and frameworks are optional accessories.

On **When leadership means clearing drag, not adding process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
