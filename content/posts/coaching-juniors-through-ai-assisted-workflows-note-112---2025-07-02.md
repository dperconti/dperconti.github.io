---
title: "Coaching juniors through AI-assisted workflows — note 112"
date: 2025-07-02T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

Another working note on **Coaching juniors through AI-assisted workflows**: same thesis, sharper edges from recent delivery pressure.

If Mentorship only happens in 1:1s that never change assignments, you are performing care. Real mentorship changes what someone owns next week.

With AI in the loop, mentorship shifts toward verification, taste, and accountability. Syntax was never the hard part.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## The seductive counterargument

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## The operating controls

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

## Scenes from delivery

AI-assisted workflows arrive without coaching norms. People paste secrets into tools, accept insecure snippets, and skip tests because the model “looked sure.” Literacy clinics on one failure mode per month beat a single all-hands about AI.

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

## Tradeoffs worth naming

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

AI tools introduced without coaching on verification, data boundaries, or accountability.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

This work does not live alone. It couples to AI in engineering workflows.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out..
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).
- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- The psychology of asking for help is shaped by what got rewarded last time someone asked.

## The point, again

The measure of mentorship is whether the next hard problem can be owned by someone else — with you still available, not required.

Continuity is the product. Tools and frameworks are optional accessories.

On **Coaching juniors through AI-assisted workflows**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
