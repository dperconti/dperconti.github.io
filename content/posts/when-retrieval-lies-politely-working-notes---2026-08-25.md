---
title: "When retrieval lies politely — working notes"
date: 2026-08-25T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

A field note on **When retrieval lies politely** should be inspectable next week. Mechanisms beat vibes.

Retrieval and operable RAG looks solved in a demo and unfinished in production for the same reason: connectors, permissions, and freshness were deferred as “plumbing.”

A RAG system without an owner for freshness is a demo with a long half-life of embarrassment.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## The wreck as syllabus

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

No owner for corpus freshness; silent drift until users stop asking.

Evals skipped because “users will tell us.” Users leave instead.

Treating retrieval as a model problem when it is a data-operations problem.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

## Texture from the work

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

## Tradeoffs worth naming

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

## Where this couples to adjacent work

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

## Harnesses beat vibes

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Chunking strategy as an architecture choice belongs in the same review as service boundaries.
- Permissions in RAG are not optional.
- Add a thin-context path: refuse or escalate instead of inventing.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Review connector failures in the same forum as product incidents.
- Log retrieval traces for every production answer for at least 30 days.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **When retrieval lies politely**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
