---
title: "Teaching teams to distrust fluent wrongness"
date: 2025-09-19T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

**Teaching teams to distrust fluent wrongness** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

The useful question for AI in engineering workflows is boring: what did the model change, what did a human verify, and where does that trail live?

Fluent wrongness is the new failure mode. Confidence in prose is not evidence.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

Private prompt folklore instead of shared harnesses and policies.

Prefer shared eval snippets and prompt templates over private magic.

Add a “human verified” checklist to PRs that used model drafts.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

## Tradeoffs worth naming

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Tempo is a gift. Accountability is still the job. Keep both in the same sentence.

## The neighboring discipline

This work does not live alone. It couples to Buy-versus-build judgment.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record.
- Add a “human verified” checklist to PRs that used model drafts.
- Prefer shared eval snippets and prompt templates over private magic.
- Track escaped defects that originated in assisted drafts and coach from that set.
- Publish allowed tools and prohibited data classes in the engineering handbook.
- Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).

## Close

Literacy is a coaching problem. Treat it like any other craft skill under load.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Teaching teams to distrust fluent wrongness**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
