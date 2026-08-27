---
title: "Reorganizing when the product shape changes"
date: 2024-09-19T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

**Reorganizing when the product shape changes** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Boring controls that compound

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

## Concrete cases

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

## Failure modes that teach

Each failure mode below is a missing control. Another meeting will not install it.

- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.
- Collaboration theater: more shared channels, same missing contracts.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.
- Hero bridges that mask missing contracts until attrition.

## Tradeoffs worth naming

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Continuity is the product of clear contracts — not of more conversation.

## The neighboring discipline

Leaders who isolate the practice from Engineering leadership create beautiful local optima and expensive global failure.

Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code. Urgency without triage is just anxiety with a deadline.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Reorganizations that change reporting lines without rewriting ownership maps just move the fog. Update runbooks and the “who decides” table in the same week you change the org chart.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Interfaces between teams beat shared Slack channels.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- For every shared system: name a primary owner per failure mode.
- Before joint delivery: publish the interface doc and the escalation path.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.

## The point, again

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **Reorganizing when the product shape changes**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
