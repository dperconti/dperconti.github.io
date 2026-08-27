---
title: "Code review as teaching, not gatekeeping: naming the owner"
date: 2025-01-07T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

“Code review as teaching, not gatekeeping” stops being abstract the moment you ask who gets paged when it fails.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

For **Code review as teaching, not gatekeeping**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Code review as teaching, not gatekeeping** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## A scene from delivery

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

On **Code review as teaching, not gatekeeping**, craft shows up as reversible decisions, reviews that teach, and remediations that change a control within a week of an incident — not as aesthetics in a diagram.

## Another texture

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

A service grows a second write path “temporarily.” Eighteen months later both paths are sacred. Temporary needs an expiration owner on the same board as the feature.

## Tradeoffs

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Put repayment and operability on the same board as features so debt competes in the open instead of at 2 a.m. Unscheduled debt always loses to the loudest slide.

Observability should answer what changed for which users, tied to an owner. Orphaned dashboards are decoration.

## Failure modes

Each of these is a missing control, not a personality problem:

- Reviews as status gates — slow, unkind, and educationally empty.
- Big-bang migrations that consume goodwill and leave half-migrated states.
- Debt that never appears on the board and therefore never loses to a feature fairly.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.

## What to do this month

- Every incident: ship one permanent control within a week.
- Every API: publish consumer expectations and deprecation rules.
- Every design: state the reversible path and the revisit date.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

API consumer contracts should name required fields, error semantics, and deprecation windows. Optional-everything APIs become archaeology projects.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

Migrations earn trust when each slice leaves the system operable and reversible. Percentage-complete without a kill switch is optimism with a burn-down chart.

Review latency is a craft signal. A queue that sits for days teaches people to bypass standards or to ship without teaching comments.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

## Close

Prefer systems that teach through their structure — clear boundaries beat cleverness.

On **Code review as teaching, not gatekeeping**, keep the loop short: write the decision, name the owner, verify the outcome.
