---
title: "Code review as teaching, not gatekeeping — note 86"
date: 2025-04-28T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

Another working note on **Code review as teaching, not gatekeeping**: same thesis, sharper edges from recent delivery pressure.

People praise Engineering craft in the abstract and starve it in the sprint. The fix is to put craft controls on the same board as features.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

Docs that rot because nobody owns freshness; new hires learn folklore instead.

Every incident: ship one permanent control within a week.

Every quarter: schedule debt repayment proportional to change-fail pain.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

## The costs of doing it right

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

Leaders who isolate the practice from Cross-team collaboration create beautiful local optima and expensive global failure.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every design: state the reversible path and the revisit date.
- Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions.
- Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them.
- Every review: teach one reusable pattern in writing.
- Every API: publish consumer expectations and deprecation rules.
- Every incident: ship one permanent control within a week.

## The point, again

Prefer systems that teach through their structure — clear boundaries beat cleverness.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Code review as teaching, not gatekeeping**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
