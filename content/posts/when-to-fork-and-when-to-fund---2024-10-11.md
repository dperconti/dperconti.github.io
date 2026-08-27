---
title: "When to fork and when to fund"
date: 2024-10-11T05:00:00Z
categories:
  - Open Source
  - Engineering
draft: false
---

Most teams endorse “When to fork and when to fund” quickly and operationalize it slowly. Unowned commons become incident factories. Own what you share.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

For **When to fork and when to fund**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## A scene from delivery

A docs PR from a new hire fixes the onboarding hole everyone walked past. Senior review turns it into a teaching moment and a permanent path improvement.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Upstream-first keeps collaboration cheap. Private patches bit-rot; upstream fixes travel with every pull.

Budget maintainer burden against team capacity. A popular internal library without maintainers is a future incident with a README.

Maintainer burden is capacity planning. If your team cannot fund review hours, do not advertise contribution pathways that create unpaid queues.

Docs PRs as onboarding practice: new hires improve the path they just walked; seniors review for accuracy. That loop teaches systems and writing.

Borrowing patterns without citing sources teaches the wrong citizenship. Attribution is part of the craft, not optional polish.

When to fork and when to fund: forks need owners; funding maintainers is often cheaper than permanent divergence. Write exit criteria before you fork.

Upstream first keeps collaboration cheap. Private patches bit-rot; upstream fixes travel with every pull.

## Another texture

Internal open source thrives when CODEOWNERS answer within a published SLA. Without that, shared packages become political parking lots.

A team “does open source” with drive-by PRs while ignoring a critical dependency’s issue tracker. Citizenship would start with the dependency they already run in production.

## Tradeoffs

Strict CODEOWNERS can slow shared packages and also prevent orphaned code. Prefer slow ownership over silent abandonment.

Upstream engagement costs calendar time and returns fewer surprise forks. Budget it like reliability work.

Funding maintainers feels optional until you calculate the cost of a divergent fork.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **When to fork and when to fund** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

Citizenship without capacity planning creates unpaid queues and brittle commons. Own what you share, including docs freshness and security contacts.

## Failure modes

Each of these is a missing control, not a personality problem:

- Maintainer burnout after unplanned virality.
- Docs that lie because nobody owns freshness after the launch wave.
- Permanent forks with no merge-back plan.
- Unowned shared libraries that become political bottlenecks.

## What to do this month

- Pick one critical dependency and schedule quarterly upstream engagement.
- Require CODEOWNERS for internal shared packages.
- Treat docs PRs as valid onboarding tasks with senior review.

Internal open source needs explicit ownership, review norms, and a path to deprecate — not only a monorepo folder named “shared.”

Borrow patterns, not brand names. Cite people for ideas you use; do not name-drop for SEO. Substance beats affiliation theater.

Governance for small teams can be light: CODEOWNERS, a security contact, and a deprecation policy — enough to be trustworthy without a bureaucracy cosplay.

Open source governance for small teams should optimize for trust: security contact, release ownership, and a clear path to say no to scope that the maintainers cannot carry.

Upstream first fails when legal review is an afterthought. Bring license and export constraints into the same conversation as the technical fix.

Internal open source across product teams fails when shared packages have no deprecation path. Fear of breaking consumers freezes the commons.

Security contacts and release owners are not bureaucracy when they are two names on a page. They are how outsiders know you are serious.

Contributing without cosplay means your PRs match your production dependencies and your review standards match what you demand internally.

Licenses are leadership judgment. “Engineering said it was fine” is not a control. Know the license class before you ship.

Licenses, liability, and leadership judgment: know what you ship. Do not outsource compliance to hope.

A private fork drifts for two years. Security fixes stop applying cleanly. The missing artifact was a merge-back owner and a timeline.

A team forks to move fast, then discovers CVE patches no longer apply cleanly. The missing artifact was not bravado — it was a merge-back owner and a calendar.

An internal library goes viral after a blog post. Maintainer burden spikes. Leadership either funds the maintainers or declines the fame. Ambiguous ownership after virality is predictable failure.

Docs lie after launch because freshness had no owner. New contributors learn folklore. Assign docs ownership like any other production surface.

One more practice worth installing: Before forking: write the exit criteria and the merge-back owner.

## Close

Upstream first keeps collaboration cheap. Practice it before you need it.

Carry the claim as a habit, not a brand: **When to fork and when to fund** either compounds ownership or it was applause.
