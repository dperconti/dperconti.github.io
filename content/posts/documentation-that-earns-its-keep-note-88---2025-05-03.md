---
title: "Documentation that earns its keep — note 88"
date: 2025-05-03T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

Another working note on **Documentation that earns its keep**: same thesis, sharper edges from recent delivery pressure.

Engineering craft is not aesthetics. It is whether the next engineer — including future you — can change the system without folklore and without fear.

Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Docs that rot because nobody owns freshness; new hires learn folklore instead.

Every review: teach one reusable pattern in writing.

Every incident: ship one permanent control within a week.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

## What you give up

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Leave the codebase more explainable than you found it.

## The neighboring discipline

Leaders who isolate the practice from Cross-team collaboration create beautiful local optima and expensive global failure.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every incident: ship one permanent control within a week.
- Every design: state the reversible path and the revisit date.
- Technical debt with a repayment schedule appears beside features with an owner and a trigger metric.
- Every review: teach one reusable pattern in writing.
- Documentation that earns its keep means runbooks and decision records over aspirational diagrams.
- Every API: publish consumer expectations and deprecation rules.

## The point, again

Craft is operability under inheritance. Build for the next engineer.

Continuity is the product. Tools and frameworks are optional accessories.

On **Documentation that earns its keep**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
