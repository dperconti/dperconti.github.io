---
title: "Architecture decisions you can reverse"
date: 2025-06-13T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Architecture decisions you can reverse** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft is not aesthetics. It is whether the next engineer — including future you — can change the system without folklore and without fear.

Technical debt is not a moral failing. Unscheduled debt is. Put repayment where features live.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## The operating controls

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

## Concrete cases

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

## The wreck as syllabus

Each failure mode below is a missing control. Another meeting will not install it.

- Reviews as status gates — slow, unkind, and educationally empty.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.
- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Debt that never appears on the board and therefore never loses to a feature fairly.

## The costs of doing it right

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

This work does not live alone. It couples to Green software and efficiency.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every design: state the reversible path and the revisit date.
- Every incident: ship one permanent control within a week.
- Every API: publish consumer expectations and deprecation rules.
- Every review: teach one reusable pattern in writing.
- API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client.
- Every quarter: schedule debt repayment proportional to change-fail pain.

## Close

Leave the codebase more explainable than you found it.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Architecture decisions you can reverse**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
