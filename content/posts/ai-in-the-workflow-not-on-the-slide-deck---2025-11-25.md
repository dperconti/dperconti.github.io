---
title: "AI in the workflow, not on the slide deck"
date: 2025-11-25T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

**AI in the workflow, not on the slide deck** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

The useful question for AI in engineering workflows is boring: what did the model change, what did a human verify, and where does that trail live?

Put AI in the workflow — harnesses, evals, review norms — not on the slide deck as inevitability theater.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## What load reveals

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

No exit criteria for tools — the vendor becomes the process.

No coaching loop for juniors using assistants — mistakes accelerate.

## The operating controls

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

## The costs of doing it right

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

- Leaders celebrating velocity while review quality quietly collapses.
- Treating model output as authority because it sounds senior.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets..
- Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).
- Keeping humans accountable when models draft code means the merge still carries a name and a verification note.
- Prefer shared eval snippets and prompt templates over private magic.
- Track escaped defects that originated in assisted drafts and coach from that set.
- Publish allowed tools and prohibited data classes in the engineering handbook.

## Close

Literacy is a coaching problem. Treat it like any other craft skill under load.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **AI in the workflow, not on the slide deck**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
