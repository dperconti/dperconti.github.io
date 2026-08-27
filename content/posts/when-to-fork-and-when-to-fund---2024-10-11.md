---
title: "When to fork and when to fund"
date: 2024-10-11T05:00:00Z
categories:
  - Open Source
  - Engineering
draft: false
---

**When to fork and when to fund** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Good Open source practice looks like citizenship on the dependencies you run — not drive-by PRs for applause.

Contribute where your team already depends. Cosplay contributions create noise, not leverage.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## The operating controls

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Open source governance for small teams should optimize for trust: security contact, release ownership, and a clear path to say no to scope that the maintainers cannot carry.

Internal open source across product teams fails when shared packages have no deprecation path. Fear of breaking consumers freezes the commons.

When to fork and when to fund: forks need owners; funding maintainers is often cheaper than permanent divergence. Write exit criteria before you fork.

Upstream first fails when legal review is an afterthought. Bring license and export constraints into the same conversation as the technical fix.

Borrow patterns, not brand names. Cite people for ideas you use; do not name-drop for SEO. Substance beats affiliation theater.

Contributing without cosplay means your PRs match your production dependencies and your review standards match what you demand internally.

## Texture from the work

Docs lie after launch because freshness had no owner. New contributors learn folklore. Assign docs ownership like any other production surface.

Internal open source thrives when CODEOWNERS answer within a published SLA. Without that, shared packages become political parking lots.

A team “does open source” with drive-by PRs while ignoring a critical dependency’s issue tracker. Citizenship would start with the dependency they already run in production.

## What I refuse to romanticize

Each failure mode below is a missing control. Another meeting will not install it.

- Permanent forks with no merge-back plan.
- Unowned shared libraries that become political bottlenecks.
- Contributing for theater while ignoring the dependencies you actually run.
- Maintainer burnout after unplanned virality.

## Tradeoffs worth naming

Strict CODEOWNERS can slow shared packages and also prevent orphaned code. Prefer slow ownership over silent abandonment.

Upstream engagement costs calendar time and returns fewer surprise forks. Budget it like reliability work.

Funding maintainers feels optional until you calculate the cost of a divergent fork.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Upstream first fails when legal review is an afterthought. Bring license and export constraints into the same conversation as the technical fix.

Borrow patterns, not brand names. Cite people for ideas you use; do not name-drop for SEO. Substance beats affiliation theater.

Contributing without cosplay means your PRs match your production dependencies and your review standards match what you demand internally.

Borrowing patterns without citing sources teaches the wrong citizenship. Attribution is part of the craft, not optional polish.

Licenses, liability, and leadership judgment: know what you ship. Do not outsource compliance to hope.

A private fork drifts for two years. Security fixes stop applying cleanly. The missing artifact was a merge-back owner and a timeline.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

A durable approach borrows controls from Mentorship instead of inventing a parallel religion.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Before forking: write the exit criteria and the merge-back owner.
- Pick one critical dependency and schedule quarterly upstream engagement.
- Treat docs PRs as valid onboarding tasks with senior review.
- Budget maintainer capacity explicitly in planning — not as leftover evenings.
- Require CODEOWNERS for internal shared packages.
- Open source governance for small teams should optimize for trust: security contact, release ownership, and a clear path to say no to scope that the maintainers cannot carry..

## Close

Upstream first keeps collaboration cheap. Practice it before you need it.

Continuity is the product. Tools and frameworks are optional accessories.

On **When to fork and when to fund**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
