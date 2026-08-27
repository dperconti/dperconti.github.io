---
title: "Migrations that respect team capacity"
date: 2024-11-12T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Migrations that respect team capacity** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft is not aesthetics. It is whether the next engineer — including future you — can change the system without folklore and without fear.

Architecture that cannot be walked back becomes politics. Prefer reversible decisions with explicit revisit criteria.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## The wreck as syllabus

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Big-bang migrations that consume goodwill and leave half-migrated states.

Docs that rot because nobody owns freshness; new hires learn folklore instead.

Reviews as status gates — slow, unkind, and educationally empty.

Dashboards nobody trusts because alerts fire for noise and silence for harm.

## Boring controls that compound

Those failures map to controls. Install the smallest ones that make failure legible.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

## Where this shows up

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

## Tradeoffs worth naming

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Leave the codebase more explainable than you found it.

## Do not silo the practice

A durable approach borrows controls from Green software and efficiency instead of inventing a parallel religion.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

## Tempo changed; accountability did not

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every design: state the reversible path and the revisit date.
- Documentation that earns its keep means runbooks and decision records over aspirational diagrams.
- Every incident: ship one permanent control within a week.
- Every API: publish consumer expectations and deprecation rules.
- Every review: teach one reusable pattern in writing.

## The point, again

Prefer systems that teach through their structure — clear boundaries beat cleverness.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Migrations that respect team capacity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
