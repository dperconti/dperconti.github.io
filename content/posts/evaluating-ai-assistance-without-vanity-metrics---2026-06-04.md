---
title: "Evaluating AI assistance without vanity metrics"
date: 2026-06-04T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

AI changes how fast drafts appear. It does not change who is accountable for correctness, security, or operability.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Measure assistance with outcomes you already care about: change-fail rate, review quality, escaped defects. Suggestion counts are arcade tickets.

For **Evaluating AI assistance without vanity metrics**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

No exit criteria for tools — the vendor becomes the process.

Leaders celebrating velocity while review quality quietly collapses.

Private prompt folklore instead of shared harnesses and policies.

No coaching loop for juniors using assistants — mistakes accelerate.

## Controls that answer those failures

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Publish what must never go into a model tool: secrets, unrestricted customer data, unresolved legal holds. Ambiguity here becomes shadow IT with a chat UI.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Measure what you claim to care about. If **Evaluating AI assistance without vanity metrics** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## A concrete scene

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

## Tradeoffs

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Evaluating AI assistance without vanity metrics** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

When pressure rises, teams drop the unowned practice first. Put **Evaluating AI assistance without vanity metrics** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## What to do this month

- Prefer shared eval snippets and prompt templates over private magic.
- Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).
- Publish allowed tools and prohibited data classes in the engineering handbook.
- Add a “human verified” checklist to PRs that used model drafts.

Treat “the model said so” as a non-reason in design review. Ask for the invariant, the test, or the threat model instead.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

A literacy clinic walks through one authz bug introduced by an accepted suggestion. The room learns more than from a generic AI town hall.

## Close

Literacy is a coaching problem. Treat it like any other craft skill under load.

Carry the claim as a habit, not a brand: **Evaluating AI assistance without vanity metrics** either compounds ownership or it was applause.
