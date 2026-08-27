---
title: "From demo RAG to operable RAG"
date: 2025-08-25T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**From demo RAG to operable RAG** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Retrieval and operable RAG is infrastructure with a product owner. Treat it that way and you will skip a year of trust erosion.

Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## What I refuse to romanticize

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Treating retrieval as a model problem when it is a data-operations problem.

Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.

Connectors treated as temporary glue with no product owner.

Evals skipped because “users will tell us.” Users leave instead.

## Mechanisms worth installing

Those failures map to controls. Install the smallest ones that make failure legible.

Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.

Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.

When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

## Texture from the work

An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.

A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.

A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.

## The costs of doing it right

Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.

Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.

Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.

Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.

Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.

Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.

Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.

Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.

## The neighboring discipline

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

## Tempo changed; accountability did not

Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Permissions bugs in RAG are data breaches with a conversational UI.
- Review connector failures in the same forum as product incidents.
- Log retrieval traces for every production answer for at least 30 days.
- Before UI polish: ship connectors, authz checks, and a 50-question eval set.
- Name a freshness owner per major source with a refresh SLO.
- Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback.

## Close

Build the eval loop first. Everything else is speculation with a chat box.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **From demo RAG to operable RAG**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
