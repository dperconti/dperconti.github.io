---
title: "Right-sizing infrastructure as leadership work (2024)"
date: 2024-11-24T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Right-sizing infrastructure as leadership work** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Green software and efficiency is not a separate virtue track. It is the discipline of fewer retries, right-sized environments, and CI that does not burn cycles for vanity.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Failure modes that teach

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Always-on environments for demos that could be ephemeral.

Greenwashing metrics that never change an architecture decision.

Flaky CI accepted as weather instead of a defect.

Retry storms celebrated as resilience while they burn budget and hide bugs.

## Mechanisms worth installing

Those failures map to controls. Install the smallest ones that make failure legible.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

## Concrete cases

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

## Tradeoffs worth naming

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Constraints clarify design. Carbon and energy are constraints — use them.

## The neighboring discipline

This work does not live alone. It couples to Buy-versus-build judgment.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Add one sustainability question to every architecture review with a named follow-up owner.
- Report idle environment hours next to cloud spend in engineering reviews.
- Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets..
- Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater..
- Ephemeralize non-prod by default; justify always-on in writing.
- Budget retries: cap and alert when amplification exceeds a threshold.

## The point, again

Efficiency is operational maturity. Lead it like any other reliability practice.

Continuity is the product. Tools and frameworks are optional accessories.

On **Right-sizing infrastructure as leadership work**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
