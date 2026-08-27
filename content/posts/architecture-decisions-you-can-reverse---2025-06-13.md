---
title: "Architecture decisions you can reverse"
date: 2025-06-13T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

Most teams endorse “Architecture decisions you can reverse” quickly and operationalize it slowly. Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Architecture decisions you can reverse** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

Observability should answer what changed for which users, tied to an owner. Orphaned dashboards are decoration.

## How it actually works

Start with controls that are boring on purpose: written owners, verification, and a path for the next person.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Review latency is a craft signal. A queue that sits for days teaches people to bypass standards or to ship without teaching comments.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Put repayment and operability on the same board as features so debt competes in the open instead of at 2 a.m. Unscheduled debt always loses to the loudest slide.

## Where this shows up

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

## Tradeoffs

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

For **Architecture decisions you can reverse**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Failure modes

Each of these is a missing control, not a personality problem:

- Docs that rot because nobody owns freshness; new hires learn folklore instead.
- Reviews as status gates — slow, unkind, and educationally empty.
- Big-bang migrations that consume goodwill and leave half-migrated states.
- Dashboards nobody trusts because alerts fire for noise and silence for harm.

## What to do this month

- Every review: teach one reusable pattern in writing.
- Every design: state the reversible path and the revisit date.
- Every incident: ship one permanent control within a week.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

API consumer contracts should name required fields, error semantics, and deprecation windows. Optional-everything APIs become archaeology projects.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Migrations earn trust when each slice leaves the system operable and reversible. Percentage-complete without a kill switch is optimism with a burn-down chart.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

A service grows a second write path “temporarily.” Eighteen months later both paths are sacred. Temporary needs an expiration owner on the same board as the feature.

## Close

Leave the codebase more explainable than you found it.

Carry the claim as a habit, not a brand: **Architecture decisions you can reverse** either compounds ownership or it was applause.
