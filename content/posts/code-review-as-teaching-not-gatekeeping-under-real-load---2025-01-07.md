---
title: "Code review as teaching, not gatekeeping under real load"
date: 2025-01-07T05:00:00Z
categories:
  - Engineering
  - Architecture
draft: false
---

Under real load, **Code review as teaching, not gatekeeping** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

People praise Engineering craft in the abstract and starve it in the sprint. The fix is to put craft controls on the same board as features.

Operability under inheritance is the craft metric that compounds.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## The operating controls

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

## Texture from the work

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

## Failure modes that teach

Each failure mode below is a missing control. Another meeting will not install it.

- Debt that never appears on the board and therefore never loses to a feature fairly.
- Docs that rot because nobody owns freshness; new hires learn folklore instead.
- Big-bang migrations that consume goodwill and leave half-migrated states.
- Reviews as status gates — slow, unkind, and educationally empty.

## The costs of doing it right

Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.

Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.

Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.

A platform team and two product streams share a schema. Everyone “aligned” in a roadmap meeting. Three weeks later, two breaking changes land in the same release train because nobody owned the deprecation clock. The fix is not another sync. It is a published contract: schema owner, change window, and who gets paged when clients break.

Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it. Stay close enough to feel texture; distant enough that people still own outcomes.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Code review as teaching: require at least one pattern comment.
- Every review: teach one reusable pattern in writing.
- Every quarter: schedule debt repayment proportional to change-fail pain.
- Every API: publish consumer expectations and deprecation rules.
- Every design: state the reversible path and the revisit date.
- Testing strategy when speed matters protects the invariants customers feel.

## Close

Prefer systems that teach through their structure — clear boundaries beat cleverness.

Continuity is the product. Tools and frameworks are optional accessories.

On **Code review as teaching, not gatekeeping**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
