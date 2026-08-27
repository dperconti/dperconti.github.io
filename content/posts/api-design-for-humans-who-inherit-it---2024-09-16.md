---
title: "API design for humans who inherit it"
date: 2024-09-16T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**API design for humans who inherit it** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft earns trust when incidents get cheaper, reviews teach, and migrations complete without heroic weekends.

Operability under inheritance is the craft metric that compounds.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Every review: teach one reusable pattern in writing.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

### 2. Practice

Every API: publish consumer expectations and deprecation rules.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

### 3. Practice

Every quarter: schedule debt repayment proportional to change-fail pain.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

### 4. Practice

Every incident: ship one permanent control within a week.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

### 5. Practice

Every design: state the reversible path and the revisit date.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

## How the practice decays

Stop doing these:

- Reviews as status gates — slow, unkind, and educationally empty.
- Big-bang migrations that consume goodwill and leave half-migrated states.
- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Debt that never appears on the board and therefore never loses to a feature fairly.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

A durable approach borrows controls from Green software and efficiency instead of inventing a parallel religion.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every design: state the reversible path and the revisit date.
- Every API: publish consumer expectations and deprecation rules.
- Every review: teach one reusable pattern in writing.
- Code review as teaching: require at least one pattern comment.
- Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them.

## What to carry forward

Craft is operability under inheritance. Build for the next engineer.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **API design for humans who inherit it**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
