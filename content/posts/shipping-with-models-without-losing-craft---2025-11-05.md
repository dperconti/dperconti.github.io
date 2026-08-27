---
title: "Shipping with models without losing craft"
date: 2025-11-05T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

**Shipping with models without losing craft** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

AI in engineering workflows is not a tooling purchase. It is a change to how drafts, reviews, and accountability interact under time pressure.

AI changes how fast drafts appear. It does not change who is accountable for correctness, security, or operability.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Pressure test

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

No coaching loop for juniors using assistants — mistakes accelerate.

Leaders celebrating velocity while review quality quietly collapses.

## Boring controls that compound

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

## The costs of doing it right

Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.

Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.

Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.

- No exit criteria for tools — the vendor becomes the process.
- Private prompt folklore instead of shared harnesses and policies.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Own the outcome. Let models accelerate drafts — never the truth.

## Do not silo the practice

This work does not live alone. It couples to Mentorship.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Track escaped defects that originated in assisted drafts and coach from that set.
- Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).
- Add a “human verified” checklist to PRs that used model drafts.
- Prompting is not process.
- Define allowed tools and data boundaries.
- Prefer shared eval snippets and prompt templates over private magic.

## The point, again

Literacy is a coaching problem. Treat it like any other craft skill under load.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Shipping with models without losing craft**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
