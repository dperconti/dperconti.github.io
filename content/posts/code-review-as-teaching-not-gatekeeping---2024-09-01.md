---
title: "Code review as teaching, not gatekeeping"
date: 2024-09-01T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Code review as teaching, not gatekeeping** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft is not aesthetics. It is whether the next engineer — including future you — can change the system without folklore and without fear.

Architecture that cannot be walked back becomes politics. Prefer reversible decisions with explicit revisit criteria.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Transferring judgment

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

## Practices with enough detail to copy

- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every design: state the reversible path and the revisit date.
- Every API: publish consumer expectations and deprecation rules.
- Every review: teach one reusable pattern in writing.
- Every incident: ship one permanent control within a week.

## How the practice decays

- Reviews as status gates — slow, unkind, and educationally empty.
- Big-bang migrations that consume goodwill and leave half-migrated states.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering leadership.

Put repayment of known debt on the same board as features. Unowned debt is future incident prep disguised as optimism. If it cannot compete for capacity in the open, it will compete for sleep during an outage.

A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle — not becoming the queue.

Continuity planning is leadership work even when the org chart is stable. Ask who can run the critical path if two people are out. If the answer is folklore, you have a continuity defect — schedule the teaching and the written runbook before the calendar forces it.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every review: teach one reusable pattern in writing.
- Every design: state the reversible path and the revisit date.
- Every API: publish consumer expectations and deprecation rules.
- Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them.
- Incident response that improves the system ends with a control change dated within a week.
- Every quarter: schedule debt repayment proportional to change-fail pain.

## What to carry forward

Leave the codebase more explainable than you found it.

Continuity is the product. Tools and frameworks are optional accessories.

On **Code review as teaching, not gatekeeping**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
