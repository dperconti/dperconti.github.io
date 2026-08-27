---
title: "Documentation that earns its keep"
date: 2025-01-18T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Documentation that earns its keep** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft is not aesthetics. It is whether the next engineer — including future you — can change the system without folklore and without fear.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## From ambiguity to an operable slice

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

## What I refuse to romanticize

- Dashboards nobody trusts because alerts fire for noise and silence for harm.
- Big-bang migrations that consume goodwill and leave half-migrated states.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.

## The costs of doing it right

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Put repayment of known debt on the same board as features. Unowned debt is future incident prep disguised as optimism. If it cannot compete for capacity in the open, it will compete for sleep during an outage.

A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle — not becoming the queue.

Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code. Urgency without triage is just anxiety with a deadline.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every review: teach one reusable pattern in writing.
- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every API: publish consumer expectations and deprecation rules.
- API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client.
- Every incident: ship one permanent control within a week.
- Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them.

## Close

Craft is operability under inheritance. Build for the next engineer.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Documentation that earns its keep**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
