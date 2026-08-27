---
title: "Right-sizing infrastructure as leadership work — note 72"
date: 2025-03-23T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

Another working note on **Right-sizing infrastructure as leadership work**: same thesis, sharper edges from recent delivery pressure.

I treat Green software and efficiency as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## How the practice decays

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Always-on environments for demos that could be ephemeral.

Greenwashing metrics that never change an architecture decision.

Retry storms celebrated as resilience while they burn budget and hide bugs.

Flaky CI accepted as weather instead of a defect.

## Mechanisms worth installing

Those failures map to controls. Install the smallest ones that make failure legible.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

## Concrete cases

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

## The costs of doing it right

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

## Tempo changed; accountability did not

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ephemeralize non-prod by default; justify always-on in writing.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Ephemeralize non-prod by default.
- Track flaky test quarantine time as a reliability SLO.
- Report idle environment hours next to cloud spend in engineering reviews.
- Budget retries: cap and alert when amplification exceeds a threshold.

## Close

Refuse waste that buys no safety. That is both green and kind to the on-call.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Right-sizing infrastructure as leadership work**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
