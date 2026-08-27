---
title: "Career conversations that change next week’s work: what I watch for"
date: 2026-07-14T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

What I watch for is not enthusiasm around **Career conversations that change next week’s work** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

Mentorship fails in busy calendars for a predictable reason: it was scheduled as inspiration instead of designed as a feedback loop with an owner.

Mentorship that survives calendar chaos is a set of small, observable loops — not a quarterly speech about growth.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## What to put in place before the announcement

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

## Where this shows up

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

AI-assisted workflows arrive without coaching norms. People paste secrets into tools, accept insecure snippets, and skip tests because the model “looked sure.” Literacy clinics on one failure mode per month beat a single all-hands about AI.

## What I refuse to romanticize

Each failure mode below is a missing control. Another meeting will not install it.

- Feedback that arrives only at review time, when grades feel political instead of formative.
- AI tools introduced without coaching on verification, data boundaries, or accountability.
- Seniors rewarded only for personal output, so teaching becomes unpaid overtime.
- Mentorship as calendar filler: 1:1s that never change assignments or ownership.

## What you give up

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

This work does not live alone. It couples to AI in engineering workflows.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Critique privately and specifically.
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).
- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Pair on the decision, not only the code.
- Every PR review: at least one comment that teaches a reusable pattern.

## Close

If your calendar is full, shrink the loop — do not cancel the coaching.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Career conversations that change next week’s work**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
