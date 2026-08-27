---
title: "Code review as teaching, not gatekeeping: what fails first"
date: 2025-04-28T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

People praise Code review as teaching, not gatekeeping in the abstract and starve it in the sprint. The fix is to put craft controls on the same board as features.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Measure what you claim to care about. If **Code review as teaching, not gatekeeping** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

Put repayment and operability on the same board as features so debt competes in the open instead of at 2 a.m. Unscheduled debt always loses to the loudest slide.

## A scene from delivery

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Review latency is a craft signal. A queue that sits for days teaches people to bypass standards or to ship without teaching comments.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

On **Code review as teaching, not gatekeeping**, craft shows up as reversible decisions, reviews that teach, and remediations that change a control within a week of an incident — not as aesthetics in a diagram.

## Another texture

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

A service grows a second write path “temporarily.” Eighteen months later both paths are sacred. Temporary needs an expiration owner on the same board as the feature.

## Tradeoffs

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Code review as teaching, not gatekeeping** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Failure modes

Each of these is a missing control, not a personality problem:

- Debt that never appears on the board and therefore never loses to a feature fairly.
- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Reviews as status gates — slow, unkind, and educationally empty.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.

## What to do this month

- Every review: teach one reusable pattern in writing.
- Every API: publish consumer expectations and deprecation rules.
- Every incident: ship one permanent control within a week.

API consumer contracts should name required fields, error semantics, and deprecation windows. Optional-everything APIs become archaeology projects.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Migrations earn trust when each slice leaves the system operable and reversible. Percentage-complete without a kill switch is optimism with a burn-down chart.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

## Close

Craft is operability under inheritance. Build for the next engineer.

If someone new cannot explain **Code review as teaching, not gatekeeping** from your artifacts in fifteen minutes, the practice is still private.
