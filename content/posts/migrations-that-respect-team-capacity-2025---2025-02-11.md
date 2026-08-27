---
title: "Migrations that respect team capacity (2025)"
date: 2025-02-11T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

**Migrations that respect team capacity** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Engineering craft earns trust when incidents get cheaper, reviews teach, and migrations complete without heroic weekends.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Sequence under ordinary pressure

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

## The wreck as syllabus

- Debt that never appears on the board and therefore never loses to a feature fairly.
- Reviews as status gates — slow, unkind, and educationally empty.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.

## The costs of doing it right

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Prefer systems that teach through their structure — clear boundaries beat cleverness.

## Where this couples to adjacent work

This work does not live alone. It couples to Cross-team collaboration.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every incident: ship one permanent control within a week.
- Incident response that improves the system ends with a control change dated within a week.
- API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client.
- Every review: teach one reusable pattern in writing.
- Every API: publish consumer expectations and deprecation rules.
- Every quarter: schedule debt repayment proportional to change-fail pain.

## The point, again

Craft is operability under inheritance. Build for the next engineer.

Continuity is the product. Tools and frameworks are optional accessories.

On **Migrations that respect team capacity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
