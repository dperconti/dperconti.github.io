---
title: "Evaluating AI assistance without vanity metrics: what I watch for"
date: 2026-08-10T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

What I watch for is not enthusiasm around **Evaluating AI assistance without vanity metrics** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

The useful question for AI in engineering workflows is boring: what did the model change, what did a human verify, and where does that trail live?

Fluent wrongness is the new failure mode. Confidence in prose is not evidence.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Design the loop

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Private prompt folklore instead of shared harnesses and policies.

Publish allowed tools and prohibited data classes in the engineering handbook.

Track escaped defects that originated in assisted drafts and coach from that set.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

## The costs of doing it right

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Tempo is a gift. Accountability is still the job. Keep both in the same sentence.

## Do not silo the practice

This work does not live alone. It couples to Buy-versus-build judgment.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Keeping humans accountable when models draft code means the merge still carries a name and a verification note.
- Prefer shared eval snippets and prompt templates over private magic.
- Publish allowed tools and prohibited data classes in the engineering handbook.
- Add a “human verified” checklist to PRs that used model drafts.
- Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).
- Track escaped defects that originated in assisted drafts and coach from that set.

## What to carry forward

Own the outcome. Let models accelerate drafts — never the truth.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Evaluating AI assistance without vanity metrics**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
