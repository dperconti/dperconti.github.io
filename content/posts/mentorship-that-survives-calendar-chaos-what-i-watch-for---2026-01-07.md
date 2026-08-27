---
title: "Mentorship that survives calendar chaos: what I watch for"
date: 2026-01-07T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

What I watch for is not enthusiasm around **Mentorship that survives calendar chaos** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

If Mentorship only happens in 1:1s that never change assignments, you are performing care. Real mentorship changes what someone owns next week.

Teaching judgment means letting people own a slice, fail without shame, and hear specific feedback before the lesson evaporates.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Boring controls that compound

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

## Where this shows up

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

AI-assisted workflows arrive without coaching norms. People paste secrets into tools, accept insecure snippets, and skip tests because the model “looked sure.” Literacy clinics on one failure mode per month beat a single all-hands about AI.

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

## What I refuse to romanticize

Each failure mode below is a missing control. Another meeting will not install it.

- Seniors rewarded only for personal output, so teaching becomes unpaid overtime.
- Feedback that arrives only at review time, when grades feel political instead of formative.
- Mentorship as calendar filler: 1:1s that never change assignments or ownership.
- Stealing the work under the banner of helping — the mentee never practices judgment under load.

## What you give up

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering craft.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Every PR review: at least one comment that teaches a reusable pattern.
- Use review comments as teaching artifacts.
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).

## What to carry forward

The measure of mentorship is whether the next hard problem can be owned by someone else — with you still available, not required.

Continuity is the product. Tools and frameworks are optional accessories.

On **Mentorship that survives calendar chaos**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
