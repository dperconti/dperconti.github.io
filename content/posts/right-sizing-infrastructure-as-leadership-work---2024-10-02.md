---
title: "Right-sizing infrastructure as leadership work"
date: 2024-10-02T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Right-sizing infrastructure as leadership work** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

I treat Green software and efficiency as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Transferring judgment

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

## Practices with enough detail to copy

- Budget retries: cap and alert when amplification exceeds a threshold.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Track flaky test quarantine time as a reliability SLO.
- Ephemeralize non-prod by default; justify always-on in writing.
- Report idle environment hours next to cloud spend in engineering reviews.

## What I refuse to romanticize

- Flaky CI accepted as weather instead of a defect.
- Dashboards of carbon without owners who can change schedules or sizing.
- Greenwashing metrics that never change an architecture decision.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Hire and promote for ownership: people who name tradeoffs in writing, ask for help early, and leave systems operable by someone else. Theatrical confidence is cheap in interviews and expensive in production.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Clear drag before you add ceremony. Review queues, ambiguous interfaces, missing environments, and decision latency tax the team more than a missing standup. Leaders who invent process without clearing path create motion that feels like management and performs like delay.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ephemeralize non-prod by default; justify always-on in writing.
- Report idle environment hours next to cloud spend in engineering reviews.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater..
- Measuring compute waste without an owner who can delete or resize is dashboards as decoration.
- Add one sustainability question to every architecture review with a named follow-up owner.

## Close

Efficiency is operational maturity. Lead it like any other reliability practice.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Right-sizing infrastructure as leadership work**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
