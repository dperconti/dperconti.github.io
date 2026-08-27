---
title: "Migrations that respect team capacity"
date: 2024-11-12T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

“Migrations that respect team capacity” stops being abstract the moment you ask who gets paged when it fails.

Architecture that cannot be walked back becomes politics. Prefer reversible decisions with explicit revisit criteria.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

Put repayment and operability on the same board as features so debt competes in the open instead of at 2 a.m. Unscheduled debt always loses to the loudest slide.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Every incident: ship one permanent control within a week.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

### 2

Every API: publish consumer expectations and deprecation rules.

Migrations earn trust when each slice leaves the system operable and reversible. Percentage-complete without a kill switch is optimism with a burn-down chart.

### 3

Every design: state the reversible path and the revisit date.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

### 4

Every review: teach one reusable pattern in writing.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Migrations that respect team capacity** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Scenes

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

## Tradeoffs

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

When pressure rises, teams drop the unowned practice first. Put **Migrations that respect team capacity** in the path of work — templates, checklists, review norms — or admit it was optional applause.

Observability should answer what changed for which users, tied to an owner. Orphaned dashboards are decoration.

## Failure modes

Each of these is a missing control, not a personality problem:

- Reviews as status gates — slow, unkind, and educationally empty.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.
- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Debt that never appears on the board and therefore never loses to a feature fairly.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

API consumer contracts should name required fields, error semantics, and deprecation windows. Optional-everything APIs become archaeology projects.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Review latency is a craft signal. A queue that sits for days teaches people to bypass standards or to ship without teaching comments.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

A service grows a second write path “temporarily.” Eighteen months later both paths are sacred. Temporary needs an expiration owner on the same board as the feature.

## Close

Craft is operability under inheritance. Build for the next engineer.

Carry the claim as a habit, not a brand: **Migrations that respect team capacity** either compounds ownership or it was applause.
