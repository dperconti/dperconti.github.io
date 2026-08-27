---
title: "Shipping with models without losing craft: a field note"
date: 2025-12-09T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

A field note on **Shipping with models without losing craft** should be inspectable next week. Mechanisms beat vibes.

The useful question for AI in engineering workflows is boring: what did the model change, what did a human verify, and where does that trail live?

Fluent wrongness is the new failure mode. Confidence in prose is not evidence.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Sequence under ordinary pressure

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

## The wreck as syllabus

- No coaching loop for juniors using assistants — mistakes accelerate.
- Leaders celebrating velocity while review quality quietly collapses.
- Private prompt folklore instead of shared harnesses and policies.

## Tradeoffs worth naming

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Own the outcome. Let models accelerate drafts — never the truth.

## Where this couples to adjacent work

This work does not live alone. It couples to Buy-versus-build judgment.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Prefer shared eval snippets and prompt templates over private magic.
- Define allowed tools and data boundaries.
- Prompting is not process.
- Add a “human verified” checklist to PRs that used model drafts.
- Track escaped defects that originated in assisted drafts and coach from that set.
- Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).

## Additional texture

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

Watch for this decay mode: Treating model output as authority because it sounds senior.

If you only remember one move: name the owner of the failure mode before you celebrate the happy path.

## The point, again

Literacy is a coaching problem. Treat it like any other craft skill under load.

Continuity is the product. Tools and frameworks are optional accessories.

On **Shipping with models without losing craft**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
