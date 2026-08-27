---
title: "Collaboration tax and how to cut it: a field note"
date: 2026-06-08T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

A field note on **Collaboration tax and how to cut it** should be inspectable next week. Mechanisms beat vibes.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## How the practice decays

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Collaboration theater: more shared channels, same missing contracts.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

Hero bridges that mask missing contracts until attrition.

Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## Mechanisms worth installing

Those failures map to controls. Install the smallest ones that make failure legible.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

## Texture from the work

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

## What you give up

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Protocols beat vibes. Write the boundary, name the owner, make failure legible.

## The neighboring discipline

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Conflict as a design input means capturing the disagreement as constraints and options.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- The meeting you should replace with a doc is the one that only redistributes status.
- Before joint delivery: publish the interface doc and the escalation path.
- For every shared system: name a primary owner per failure mode.

## The point, again

Continuity is the product of clear contracts — not of more conversation.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Collaboration tax and how to cut it**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
