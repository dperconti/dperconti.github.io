---
title: "API design for humans who inherit it: a field note"
date: 2025-04-25T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

A field note on **API design for humans who inherit it** should be inspectable next week. Mechanisms beat vibes.

People praise Engineering craft in the abstract and starve it in the sprint. The fix is to put craft controls on the same board as features.

Operability under inheritance is the craft metric that compounds.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Operating rhythm

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Every design: state the reversible path and the revisit date.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

### 2. Practice

Every quarter: schedule debt repayment proportional to change-fail pain.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

### 3. Practice

Every review: teach one reusable pattern in writing.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

### 4. Practice

Every incident: ship one permanent control within a week.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

### 5. Practice

Every API: publish consumer expectations and deprecation rules.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

## How the practice decays

Stop doing these:

- Big-bang migrations that consume goodwill and leave half-migrated states.
- Debt that never appears on the board and therefore never loses to a feature fairly.
- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Reviews as status gates — slow, unkind, and educationally empty.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Craft is operability under inheritance. Build for the next engineer.

## Do not silo the practice

This work does not live alone. It couples to Engineering leadership.

Clear drag before you add ceremony. Review queues, ambiguous interfaces, missing environments, and decision latency tax the team more than a missing standup. Leaders who invent process without clearing path create motion that feels like management and performs like delay.

A manager absorbs every hard design conversation “to unblock the team.” Velocity looks fine for a quarter. Then vacation happens, and the team discovers it cannot make a medium decision without the manager’s taste. The remedy is timed pairing on the hardest 10% and written decision records for the rest.

Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it. Stay close enough to feel texture; distant enough that people still own outcomes.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client.
- Every incident: ship one permanent control within a week.
- Every API: publish consumer expectations and deprecation rules.
- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every design: state the reversible path and the revisit date.
- Every review: teach one reusable pattern in writing.

## The point, again

Prefer systems that teach through their structure — clear boundaries beat cleverness.

Continuity is the product. Tools and frameworks are optional accessories.

On **API design for humans who inherit it**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
