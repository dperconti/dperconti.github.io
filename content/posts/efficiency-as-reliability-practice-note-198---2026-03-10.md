---
title: "Efficiency as reliability practice — note 198"
date: 2026-03-10T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

Another working note on **Efficiency as reliability practice**: same thesis, sharper edges from recent delivery pressure.

I treat Green software and efficiency as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Grow the next owner

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

## Practices with enough detail to copy

- Ephemeralize non-prod by default; justify always-on in writing.
- Report idle environment hours next to cloud spend in engineering reviews.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Track flaky test quarantine time as a reliability SLO.

## Failure modes that teach

- Greenwashing metrics that never change an architecture decision.
- Always-on environments for demos that could be ephemeral.
- Flaky CI accepted as weather instead of a defect.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Efficiency is operational maturity. Lead it like any other reliability practice.

## The neighboring discipline

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Make decisions durable. A one-page note with context, options, chosen path, owner, and a revisit date beats a meeting that everyone remembers differently by Thursday. Verbal alignment evaporates under calendar pressure; written decisions compound.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Put repayment of known debt on the same board as features. Unowned debt is future incident prep disguised as optimism. If it cannot compete for capacity in the open, it will compete for sleep during an outage.

## Tempo changed; accountability did not

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Track flaky test quarantine time as a reliability SLO.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Report idle environment hours next to cloud spend in engineering reviews.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets..
- Ephemeralize non-prod by default; justify always-on in writing.

## The point, again

Refuse waste that buys no safety. That is both green and kind to the on-call.

Continuity is the product. Tools and frameworks are optional accessories.

On **Efficiency as reliability practice**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
