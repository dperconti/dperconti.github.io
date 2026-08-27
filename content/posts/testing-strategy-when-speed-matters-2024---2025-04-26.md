---
title: "Testing strategy when speed matters (2024)"
date: 2025-04-26T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Testing strategy when speed matters** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

People praise Engineering craft in the abstract and starve it in the sprint. The fix is to put craft controls on the same board as features.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Every incident: ship one permanent control within a week.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

### 2. Practice

Every design: state the reversible path and the revisit date.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

### 3. Practice

Every review: teach one reusable pattern in writing.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

### 4. Practice

Every API: publish consumer expectations and deprecation rules.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

### 5. Practice

Every quarter: schedule debt repayment proportional to change-fail pain.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

## What I refuse to romanticize

Stop doing these:

- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Reviews as status gates — slow, unkind, and educationally empty.
- Debt that never appears on the board and therefore never loses to a feature fairly.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

Leaders who isolate the practice from Green software and efficiency create beautiful local optima and expensive global failure.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every API: publish consumer expectations and deprecation rules.
- Every quarter: schedule debt repayment proportional to change-fail pain.
- Testing strategy when speed matters protects the invariants customers feel.
- Every review: teach one reusable pattern in writing.
- Every incident: ship one permanent control within a week.
- Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions.

## The point, again

Prefer systems that teach through their structure — clear boundaries beat cleverness.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Testing strategy when speed matters**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
