---
title: "Architecture decisions you can reverse (2026)"
date: 2025-06-15T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Architecture decisions you can reverse** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft earns trust when incidents get cheaper, reviews teach, and migrations complete without heroic weekends.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## How the practice decays

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Big-bang migrations that consume goodwill and leave half-migrated states.

Docs that rot because nobody owns freshness; new hires learn folklore instead.

Reviews as status gates — slow, unkind, and educationally empty.

Debt that never appears on the board and therefore never loses to a feature fairly.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

## Scenes from delivery

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

## What you give up

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Prefer systems that teach through their structure — clear boundaries beat cleverness.

## Do not silo the practice

This work does not live alone. It couples to Green software and efficiency.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every incident: ship one permanent control within a week.
- Documentation that earns its keep means runbooks and decision records over aspirational diagrams.
- Every API: publish consumer expectations and deprecation rules.
- Every design: state the reversible path and the revisit date.
- Every review: teach one reusable pattern in writing.

## The point, again

Craft is operability under inheritance. Build for the next engineer.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Architecture decisions you can reverse**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
