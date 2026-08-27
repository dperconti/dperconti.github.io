---
title: "Who owns the knowledge graph behind the bot?"
date: 2025-08-24T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Who owns the knowledge graph behind the bot?** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Retrieval and operable RAG is infrastructure with a product owner. Treat it that way and you will skip a year of trust erosion.

Retrieval quality is an operations problem. Chunking, access control, and source freshness decide trust more than model choice.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Pressure test

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

No owner for corpus freshness; silent drift until users stop asking.

## What to put in place before the announcement

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

## The costs of doing it right

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

- Treating retrieval as a model problem when it is a data-operations problem.
- Connectors treated as temporary glue with no product owner.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

If connectors and permissions are “later,” trust is already gone.

## Where this couples to adjacent work

A durable approach borrows controls from AI in engineering workflows instead of inventing a parallel religion.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## Harnesses beat vibes

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Add a thin-context path: refuse or escalate instead of inventing.
- Chunking strategy as an architecture choice belongs in the same review as service boundaries.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Name a freshness owner per major source with a refresh SLO.
- Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise.
- Review connector failures in the same forum as product incidents.

## What to carry forward

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Who owns the knowledge graph behind the bot?**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
