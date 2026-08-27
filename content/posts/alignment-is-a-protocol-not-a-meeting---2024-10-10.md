---
title: "Alignment is a protocol, not a meeting"
date: 2024-10-10T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

**Alignment is a protocol, not a meeting** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Boring controls that compound

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

## Scenes from delivery

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

## Failure modes that teach

Each failure mode below is a missing control. Another meeting will not install it.

- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Collaboration theater: more shared channels, same missing contracts.

## Tradeoffs worth naming

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Continuity is the product of clear contracts — not of more conversation.

## The neighboring discipline

This work does not live alone. It couples to Engineering craft.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Working agreements that age well name how to change the agreement.
- Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID.
- Before joint delivery: publish the interface doc and the escalation path.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- For every shared system: name a primary owner per failure mode.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **Alignment is a protocol, not a meeting**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
