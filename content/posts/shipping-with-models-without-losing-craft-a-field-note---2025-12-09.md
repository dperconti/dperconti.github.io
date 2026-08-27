---
title: "Shipping with models without losing craft: naming the owner"
date: 2025-12-09T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

Most teams endorse “Shipping with models without losing craft” quickly and operationalize it slowly. Put AI in the workflow — harnesses, evals, review norms — not on the slide deck as inevitability theater.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Shared harnesses beat private prompt folklore. If the “right way” lives in one chat history, you do not have a team practice — you have a bus factor dressed as productivity.

Measure assistance with outcomes you already care about: change-fail rate, review quality, escaped defects. Suggestion counts are arcade tickets.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Publish allowed tools and prohibited data classes in the engineering handbook.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

### 2

Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

### 3

Add a “human verified” checklist to PRs that used model drafts.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

### 4

Prefer shared eval snippets and prompt templates over private magic.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Shipping with models without losing craft** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Scenes

A literacy clinic walks through one authz bug introduced by an accepted suggestion. The room learns more than from a generic AI town hall.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

## Tradeoffs

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

On **Shipping with models without losing craft**, tempo is not the product. Verification notes, data boundaries, and review norms decide whether faster drafts become cheaper defects. Fluency is not evidence.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Shipping with models without losing craft** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## Failure modes

Each of these is a missing control, not a personality problem:

- No exit criteria for tools — the vendor becomes the process.
- No coaching loop for juniors using assistants — mistakes accelerate.
- Treating model output as authority because it sounds senior.
- Private prompt folklore instead of shared harnesses and policies.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Treat “the model said so” as a non-reason in design review. Ask for the invariant, the test, or the threat model instead.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

Publish what must never go into a model tool: secrets, unrestricted customer data, unresolved legal holds. Ambiguity here becomes shadow IT with a chat UI.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

## Close

Literacy is a coaching problem. Treat it like any other craft skill under load.

On **Shipping with models without losing craft**, keep the loop short: write the decision, name the owner, verify the outcome.
