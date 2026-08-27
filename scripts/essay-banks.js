/**
 * Theme content banks for long-form post rewrites.
 * Each theme has enough unique material to compose distinct 1100–1500 word essays.
 */
module.exports = {
  leadership: {
    label: 'Engineering leadership',
    theses: [
      'Engineering leadership is the craft of making ownership, risk, and feedback loops visible — then refusing to steal the learning by taking the keyboard every time it gets hard.',
      'The job is not to be the smartest person in the room. It is to leave clearer owners, cheaper decisions, and a team that can run without your narration.',
      'Strategy that never touches delivery becomes theater. Delivery that never touches strategy becomes thrash. Leadership sits in the coupling between the two.',
      'Quiet continuity beats loud frameworks. You are paid for systems and people that still work when you are not in the room.',
    ],
    openings: [
      (t) =>
        `${t} is usually treated as a personality trait or a quarterly theme. It is neither. It is an operating system for how decisions get made, verified, and inherited.`,
      (t) =>
        `Teams endorse ${t} quickly and operationalize it slowly. The gap is almost always missing owners, missing controls, and missing evidence.`,
      (t) =>
        `I judge ${t} with a simple inheritance test: after a week of work, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?`,
    ],
    deep: [
      `Clear drag before you add ceremony. Review queues, ambiguous interfaces, missing environments, and decision latency tax the team more than a missing standup. Leaders who invent process without clearing path create motion that feels like management and performs like delay.`,
      `Make decisions durable. A one-page note with context, options, chosen path, owner, and a revisit date beats a meeting that everyone remembers differently by Thursday. Verbal alignment evaporates under calendar pressure; written decisions compound.`,
      `Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it. Stay close enough to feel texture; distant enough that people still own outcomes.`,
      `Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code. Urgency without triage is just anxiety with a deadline.`,
      `Put repayment of known debt on the same board as features. Unowned debt is future incident prep disguised as optimism. If it cannot compete for capacity in the open, it will compete for sleep during an outage.`,
      `Hire and promote for ownership: people who name tradeoffs in writing, ask for help early, and leave systems operable by someone else. Theatrical confidence is cheap in interviews and expensive in production.`,
      `Separate sponsorship from surveillance. Be present enough to feel latency in decisions; distant enough that the work remains theirs. Stealing hard problems under the banner of help produces brittle teams and exhausted managers.`,
      `Reorganizations that change reporting lines without rewriting ownership maps just move the fog. Update runbooks and the “who decides” table in the same week you change the org chart.`,
    ],
    scenarios: [
      `A platform team and two product streams share a schema. Everyone “aligned” in a roadmap meeting. Three weeks later, two breaking changes land in the same release train because nobody owned the deprecation clock. The fix is not another sync. It is a published contract: schema owner, change window, and who gets paged when clients break.`,
      `A manager absorbs every hard design conversation “to unblock the team.” Velocity looks fine for a quarter. Then vacation happens, and the team discovers it cannot make a medium decision without the manager’s taste. The remedy is timed pairing on the hardest 10% and written decision records for the rest.`,
      `An incident write-up is eloquent and changes nothing. No test, no budget, no privilege change, no ownership map update. Leadership failed the expensive coaching moment. Feelings are not remediation.`,
      `Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.`,
    ],
    tradeoffs: [
      `The tradeoff in staying close to craft is calendar math. You cannot pair on everything. Choose the slices that teach the most — authz boundaries, data migrations, agent side effects — and make those teaching moments reusable artifacts.`,
      `The tradeoff in written decisions is speed of the first hour for speed of the next month. Teams that skip the page pay in Slack archaeology and repeated conflict.`,
      `Centralizing decisions feels efficient until you become the hub. Decentralizing without interfaces feels empowering until failure modes have no owner. Publish the interface either way.`,
    ],
    failures: [
      `Leaders who disappear into strategy lose the texture of the work and start optimizing for narratives instead of outcomes.`,
      `Leaders who never leave the details never grow successors; the team becomes a dependency graph with one hub.`,
      `Process theater: more standups, more status, same ambiguous owners. Motion increases; throughput does not.`,
      `Heroic firefighting rewarded over boring reliability work — until the heroes leave and the system forgets how to recover.`,
      `Roadmaps that hide capacity fiction. Platform work scheduled as free. Collaboration tax paid in burnout.`,
    ],
    practices: [
      `Weekly: one written decision, one ownership clarification, one coaching loop that changes next week’s assignment.`,
      `After each incident: one permanent control within a week — test, alert, budget, privilege, or ownership change.`,
      `Quarterly: prune ceremonies that do not produce a decision, a learning, or a durable artifact.`,
      `Continuously: ask whether the next person can run this without you. If not, the system is incomplete.`,
      `When adding AI or agents to a workflow: require logs, budgets, and a human kill switch before autonomy theater.`,
    ],
    closes: [
      `Ship the habit, not the slogan. Then check whether ownership got cheaper.`,
      `Coaching is the mechanism. Process is the memory. Tools are leverage only when accountability stays human.`,
      `If this feels quieter than a keynote, that is intentional. Compounding leadership work rarely looks like theater.`,
    ],
  },

  mentorship: {
    label: 'Mentorship',
    theses: [
      'Mentorship that survives calendar chaos is a set of small, observable loops — not a quarterly speech about growth.',
      'Teaching judgment means letting people own a slice, fail without shame, and hear specific feedback before the lesson evaporates.',
      'With AI in the loop, mentorship shifts toward verification, taste, and accountability. Syntax was never the hard part.',
      'Growing seniors who can grow others is how organizations scale craft without scaling heroics.',
    ],
    openings: [
      (t) =>
        `${t} fails in busy calendars for a predictable reason: it was scheduled as inspiration instead of designed as a feedback loop with an owner.`,
      (t) =>
        `If ${t} only happens in 1:1s that never change assignments, you are performing care. Real mentorship changes what someone owns next week.`,
      (t) =>
        `${t} is engineering work. It produces artifacts: better reviews, clearer decisions, safer incident leads, and people who can teach without you in the room.`,
    ],
    deep: [
      `Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.`,
      `Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.`,
      `Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.`,
      `Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.`,
      `Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.`,
      `Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.`,
      `When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.`,
      `Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.`,
    ],
    scenarios: [
      `A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.`,
      `A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.`,
      `AI-assisted workflows arrive without coaching norms. People paste secrets into tools, accept insecure snippets, and skip tests because the model “looked sure.” Literacy clinics on one failure mode per month beat a single all-hands about AI.`,
      `Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.`,
    ],
    tradeoffs: [
      `The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.`,
      `The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.`,
      `With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”`,
    ],
    failures: [
      `Mentorship as calendar filler: 1:1s that never change assignments or ownership.`,
      `Stealing the work under the banner of helping — the mentee never practices judgment under load.`,
      `Feedback that arrives only at review time, when grades feel political instead of formative.`,
      `Seniors rewarded only for personal output, so teaching becomes unpaid overtime.`,
      `AI tools introduced without coaching on verification, data boundaries, or accountability.`,
    ],
    practices: [
      `Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.`,
      `Every PR review: at least one comment that teaches a reusable pattern.`,
      `Every month: one public sponsorship act — authorship, presentation, or incident lead.`,
      `When AI drafts: require a human verification note in the PR describing what was checked and how.`,
      `Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).`,
    ],
    closes: [
      `The measure of mentorship is whether the next hard problem can be owned by someone else — with you still available, not required.`,
      `Grow judgment in public artifacts. Hallway wisdom does not compound.`,
      `If your calendar is full, shrink the loop — do not cancel the coaching.`,
    ],
  },

  collaboration: {
    label: 'Cross-team collaboration',
    theses: [
      'Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.',
      'Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.',
      'The collaboration tax is paid in ambiguity. Clarity is a kindness and a throughput strategy.',
      'Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.',
    ],
    openings: [
      (t) =>
        `${t} gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.`,
      (t) =>
        `When people say they need better ${t}, I look for missing contracts: who consumes what, what “done” means, and who gets paged when the joint system lies.`,
      (t) =>
        `${t} is design work. Meetings can choose among options. They cannot permanently store ownership.`,
    ],
    deep: [
      `Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.`,
      `Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.`,
      `Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.`,
      `Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.`,
      `Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.`,
      `Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.`,
      `Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.`,
      `Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.`,
    ],
    scenarios: [
      `Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.`,
      `Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.`,
      `A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.`,
      `A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.`,
    ],
    tradeoffs: [
      `Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.`,
      `Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.`,
      `Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.`,
    ],
    failures: [
      `Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.`,
      `Hero bridges that mask missing contracts until attrition.`,
      `Collaboration theater: more shared channels, same missing contracts.`,
      `Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.`,
      `Hand-offs that drop context so the receiving team re-learns the sender’s scars.`,
    ],
    practices: [
      `Before joint delivery: publish the interface doc and the escalation path.`,
      `When stuck: write the disagreement as options with tradeoffs; meet only to choose.`,
      `After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.`,
      `Quarterly: delete channels and meetings that produce no decisions or artifacts.`,
      `For every shared system: name a primary owner per failure mode.`,
    ],
    closes: [
      `Protocols beat vibes. Write the boundary, name the owner, make failure legible.`,
      `If collaboration feels expensive, check the interface before you hire more coordinators.`,
      `Continuity is the product of clear contracts — not of more conversation.`,
    ],
  },

  craft: {
    label: 'Engineering craft',
    theses: [
      'Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.',
      'Architecture that cannot be walked back becomes politics. Prefer reversible decisions with explicit revisit criteria.',
      'Technical debt is not a moral failing. Unscheduled debt is. Put repayment where features live.',
      'Operability under inheritance is the craft metric that compounds.',
    ],
    openings: [
      (t) =>
        `${t} is not aesthetics. It is whether the next engineer — including future you — can change the system without folklore and without fear.`,
      (t) =>
        `People praise ${t} in the abstract and starve it in the sprint. The fix is to put craft controls on the same board as features.`,
      (t) =>
        `${t} earns trust when incidents get cheaper, reviews teach, and migrations complete without heroic weekends.`,
    ],
    deep: [
      `Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.`,
      `API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.`,
      `Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.`,
      `Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.`,
      `Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.`,
      `Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.`,
      `Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.`,
      `Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.`,
    ],
    scenarios: [
      `A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.`,
      `An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.`,
      `Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.`,
      `API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.`,
    ],
    tradeoffs: [
      `Reversible architecture can look indecisive to executives who want inevitability. Translate: we are buying option value and reducing blast radius.`,
      `Teaching reviews take minutes longer than rubber stamps. Escaped defects take days. Budget the minutes.`,
      `Right-sizing tests means saying no to low-value suites that burn CI energy without protecting user invariants.`,
    ],
    failures: [
      `Reviews as status gates — slow, unkind, and educationally empty.`,
      `Dashboards nobody trusts because alerts fire for noise and silence for harm.`,
      `Big-bang migrations that consume goodwill and leave half-migrated states.`,
      `Docs that rot because nobody owns freshness; new hires learn folklore instead.`,
      `Debt that never appears on the board and therefore never loses to a feature fairly.`,
    ],
    practices: [
      `Every design: state the reversible path and the revisit date.`,
      `Every incident: ship one permanent control within a week.`,
      `Every API: publish consumer expectations and deprecation rules.`,
      `Every quarter: schedule debt repayment proportional to change-fail pain.`,
      `Every review: teach one reusable pattern in writing.`,
    ],
    closes: [
      `Craft is operability under inheritance. Build for the next engineer.`,
      `Prefer systems that teach through their structure — clear boundaries beat cleverness.`,
      `Leave the codebase more explainable than you found it.`,
    ],
  },

  ai: {
    label: 'AI in engineering workflows',
    theses: [
      'AI changes how fast drafts appear. It does not change who is accountable for correctness, security, or operability.',
      'Put AI in the workflow — harnesses, evals, review norms — not on the slide deck as inevitability theater.',
      'Team literacy beats individual prompt cleverness. Shared practice compounds; private magic does not.',
      'Fluent wrongness is the new failure mode. Confidence in prose is not evidence.',
    ],
    openings: [
      (t) =>
        `${t} is not a tooling purchase. It is a change to how drafts, reviews, and accountability interact under time pressure.`,
      (t) =>
        `Leaders who talk about ${t} without talking about verification are selling tempo and buying escaped defects.`,
      (t) =>
        `The useful question for ${t} is boring: what did the model change, what did a human verify, and where does that trail live?`,
    ],
    deep: [
      `Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.`,
      `Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.`,
      `Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.`,
      `Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”`,
      `Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.`,
      `Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.`,
      `Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.`,
      `Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.`,
    ],
    scenarios: [
      `A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.`,
      `Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.`,
      `AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.`,
      `A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.`,
    ],
    tradeoffs: [
      `Verification notes add friction to the PR. They remove friction from the incident. Budget for the former.`,
      `Restricting tools feels anti-innovation until the first compliance event. Policy is what lets you expand autonomy later.`,
      `Tempo gains are real on boilerplate and real-negative on subtle invariants. Teach the difference explicitly.`,
    ],
    failures: [
      `Leaders celebrating velocity while review quality quietly collapses.`,
      `Private prompt folklore instead of shared harnesses and policies.`,
      `Treating model output as authority because it sounds senior.`,
      `No exit criteria for tools — the vendor becomes the process.`,
      `No coaching loop for juniors using assistants — mistakes accelerate.`,
    ],
    practices: [
      `Add a “human verified” checklist to PRs that used model drafts.`,
      `Run a monthly literacy clinic on one failure mode (secrets, authz, flaky tests).`,
      `Track escaped defects that originated in assisted drafts and coach from that set.`,
      `Publish allowed tools and prohibited data classes in the engineering handbook.`,
      `Prefer shared eval snippets and prompt templates over private magic.`,
    ],
    closes: [
      `Tempo is a gift. Accountability is still the job. Keep both in the same sentence.`,
      `Literacy is a coaching problem. Treat it like any other craft skill under load.`,
      `Own the outcome. Let models accelerate drafts — never the truth.`,
    ],
  },

  rag: {
    label: 'Retrieval and operable RAG',
    theses: [
      'Demo RAG is a weekend. Operable RAG is product work: freshness, permissions, connectors, evals, and an owner who gets paged when answers go stale.',
      'Retrieval quality is an operations problem. Chunking, access control, and source freshness decide trust more than model choice.',
      'Connectors are the hard part of retrieval. Treat them as product surface area, not glue code you apologize for later.',
      'A RAG system without an owner for freshness is a demo with a long half-life of embarrassment.',
    ],
    openings: [
      (t) =>
        `${t} looks solved in a demo and unfinished in production for the same reason: connectors, permissions, and freshness were deferred as “plumbing.”`,
      (t) =>
        `If you are working on ${t}, start with how answers fail — stale, unauthorized, empty, politely wrong — and design controls for each bucket before polishing the chat UI.`,
      (t) =>
        `${t} is infrastructure with a product owner. Treat it that way and you will skip a year of trust erosion.`,
    ],
    deep: [
      `Own freshness: every source needs a refresh policy, a staleness signal, and a human accountable when the corpus lies. Silent drift is how users stop asking.`,
      `Build evals early — gold questions, regression sets, and failure buckets (wrong, stale, unauthorized, empty). Without them you argue about vibes while users lose trust.`,
      `Design chunking as architecture: preserve meaning units, cite sources, and refuse to shred tables into noise. “Improving” chunk size without an eval is a regression with good intentions.`,
      `Permissions in RAG are not optional. Enforce authz at retrieval time; never “filter in the prompt.” Prompt-side filtering is a leak with extra steps.`,
      `Instrument the pipeline: query → retrieved IDs → scores → answer → user feedback. Make polite lies auditable. If you cannot replay what was retrieved, you cannot improve it.`,
      `Fail gracefully when context is thin: say what you do not know, ask for a tighter question, or escalate to a human path. Inventing confidence is how demos become liabilities.`,
      `Ground answers in systems teams actually run — tickets, dashboards, runbooks — not paraphrases of marketing docs. Citation quality is a product requirement.`,
      `Connectors need product management: identity, rate limits, partial failure, schema drift, and who owns the break. Glue code without an owner becomes a career-limiting outage.`,
    ],
    scenarios: [
      `A bot answers from last quarter’s runbooks with perfect tone and wrong on-call. Freshness had no owner. Users learned to distrust the system in a week.`,
      `An engineer “improves” chunking and destroys table Q&A. No eval suite existed, so the regression shipped as a win. Gold questions would have caught it in CI.`,
      `Permissions were “coming later.” The chat UI shipped. Then an answer included a doc the user should not see. That is not a model problem; it is an access-control problem you deferred.`,
      `Who owns the knowledge graph behind the bot? “The AI squad” means nobody owns source quality. Assign freshness owners per major corpus with an SLO.`,
    ],
    tradeoffs: [
      `Evals feel slow before launch and priceless after. Fifty gold questions beat a thousand vague complaints.`,
      `Strict authz can reduce recall. That is acceptable. Unauthorized recall is not a quality feature.`,
      `Thin-context refusals lower answer rate and raise trust. Optimize for trust if the product depends on it.`,
    ],
    failures: [
      `Shipping the chat UI before connectors and authz — then spending a year apologizing for hallucinations that were access bugs.`,
      `No owner for corpus freshness; silent drift until users stop asking.`,
      `Evals skipped because “users will tell us.” Users leave instead.`,
      `Treating retrieval as a model problem when it is a data-operations problem.`,
      `Connectors treated as temporary glue with no product owner.`,
    ],
    practices: [
      `Before UI polish: ship connectors, authz checks, and a 50-question eval set.`,
      `Name a freshness owner per major source with a refresh SLO.`,
      `Log retrieval traces for every production answer for at least 30 days.`,
      `Add a thin-context path: refuse or escalate instead of inventing.`,
      `Review connector failures in the same forum as product incidents.`,
    ],
    closes: [
      `Operable RAG is infrastructure with a product owner. Demo RAG is a screenshot.`,
      `If connectors and permissions are “later,” trust is already gone.`,
      `Build the eval loop first. Everything else is speculation with a chat box.`,
    ],
  },

  agents: {
    label: 'Agentic systems',
    theses: [
      'Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.',
      'Treat agents like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is distributed risk.',
      'Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.',
      'Logs, budgets, and kill switches are leadership tools — not only platform niceties.',
    ],
    openings: [
      (t) =>
        `${t} attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.`,
      (t) =>
        `If you are shipping ${t}, design the stop path before the autonomy story. Teams remember the first uncontrolled side effect longer than the first clever demo.`,
      (t) =>
        `${t} should feel like junior systems in production: explicit tools, limited blast radius, and a named human who owns outcomes.`,
    ],
    deep: [
      `Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.`,
      `Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.`,
      `Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.`,
      `Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”`,
      `Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.`,
      `Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.`,
      `Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.`,
      `Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.`,
    ],
    scenarios: [
      `Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.`,
      `An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.`,
      `A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.`,
      `Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.`,
    ],
    tradeoffs: [
      `Harnesses slow the first demo and save the first incident. Sequence matters.`,
      `Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.`,
      `Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.`,
    ],
    failures: [
      `Omnipotent agents that “just figure it out” until they take the wrong production action.`,
      `No kill switch; stopping requires redeploying or begging a vendor.`,
      `Retries without idempotency keys — duplicate side effects under partial failure.`,
      `Hand-offs that drop context, so humans redo the work.`,
      `Multi-agent theater without clear interfaces or ownership of outcomes.`,
    ],
    practices: [
      `Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.`,
      `Require event emission for every tool call in production.`,
      `Chaos-test retries: kill mid-flight and prove no duplicate side effects.`,
      `Define stop-and-ask rules in writing; review them like any other safety control.`,
      `Keep a named human owner for every agentic workflow that can change production state.`,
    ],
    closes: [
      `Autonomy is earned with observability. Until then, keep the blast radius small.`,
      `Logs, budgets, and kill switches are how leaders sleep.`,
      `Own the outcome. Let agents accelerate the safe middle of the workflow.`,
    ],
  },

  sustainability: {
    label: 'Green software and efficiency',
    theses: [
      'Green software is an engineering constraint: efficiency as reliability and cost discipline, not a branding exercise after the fact.',
      'Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.',
      'What Asim Hussain’s green software work asks of us is plain: treat energy and carbon awareness as first-class design inputs.',
      'Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.',
    ],
    openings: [
      (t) =>
        `${t} gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.`,
      (t) =>
        `I treat ${t} as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.`,
      (t) =>
        `${t} is not a separate virtue track. It is the discipline of fewer retries, right-sized environments, and CI that does not burn cycles for vanity.`,
    ],
    deep: [
      `Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.`,
      `Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.`,
      `Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.`,
      `Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.`,
      `Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.`,
      `The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.`,
      `Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.`,
      `Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.`,
    ],
    scenarios: [
      `A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.`,
      `Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.`,
      `Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.`,
      `Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.`,
    ],
    tradeoffs: [
      `Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.`,
      `Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.`,
      `Deleting pipeline stages requires courage and good eval of what still protects users.`,
    ],
    failures: [
      `Greenwashing metrics that never change an architecture decision.`,
      `Dashboards of carbon without owners who can change schedules or sizing.`,
      `Retry storms celebrated as resilience while they burn budget and hide bugs.`,
      `Always-on environments for demos that could be ephemeral.`,
      `Flaky CI accepted as weather instead of a defect.`,
    ],
    practices: [
      `Add one sustainability question to every architecture review with a named follow-up owner.`,
      `Budget retries: cap and alert when amplification exceeds a threshold.`,
      `Ephemeralize non-prod by default; justify always-on in writing.`,
      `Track flaky test quarantine time as a reliability SLO.`,
      `Report idle environment hours next to cloud spend in engineering reviews.`,
    ],
    closes: [
      `Efficiency is operational maturity. Lead it like any other reliability practice.`,
      `Refuse waste that buys no safety. That is both green and kind to the on-call.`,
      `Constraints clarify design. Carbon and energy are constraints — use them.`,
    ],
  },

  opensource: {
    label: 'Open source practice',
    theses: [
      'Open source is mentorship with a public paper trail — powerful, and it has a real maintainer cost.',
      'Contribute where your team already depends. Cosplay contributions create noise, not leverage.',
      'Upstream first is a collaboration habit: fix at the source when you can, fork only with an exit plan.',
      'Unowned commons become incident factories. Own what you share.',
    ],
    openings: [
      (t) =>
        `${t} is often sold as brand and rarely budgeted as maintenance. Leadership has to hold both truths at once.`,
      (t) =>
        `Good ${t} looks like citizenship on the dependencies you run — not drive-by PRs for applause.`,
      (t) =>
        `${t} scales mentorship when review quality is real and maintainer burden is funded.`,
    ],
    deep: [
      `Budget maintainer burden against team capacity. A popular internal library without maintainers is a future incident with a README.`,
      `Docs PRs as onboarding practice: new hires improve the path they just walked; seniors review for accuracy. That loop teaches systems and writing.`,
      `Internal open source needs explicit ownership, review norms, and a path to deprecate — not only a monorepo folder named “shared.”`,
      `Licenses, liability, and leadership judgment: know what you ship. Do not outsource compliance to hope.`,
      `When to fork and when to fund: forks need owners; funding maintainers is often cheaper than permanent divergence. Write exit criteria before you fork.`,
      `Borrow patterns, not brand names. Cite people for ideas you use; do not name-drop for SEO. Substance beats affiliation theater.`,
      `Upstream-first keeps collaboration cheap. Private patches bit-rot; upstream fixes travel with every pull.`,
      `Governance for small teams can be light: CODEOWNERS, a security contact, and a deprecation policy — enough to be trustworthy without a bureaucracy cosplay.`,
    ],
    scenarios: [
      `A team “does open source” with drive-by PRs while ignoring a critical dependency’s issue tracker. Citizenship would start with the dependency they already run in production.`,
      `An internal library goes viral after a blog post. Maintainer burden spikes. Leadership either funds the maintainers or declines the fame. Ambiguous ownership after virality is predictable failure.`,
      `A private fork drifts for two years. Security fixes stop applying cleanly. The missing artifact was a merge-back owner and a timeline.`,
      `Docs lie after launch because freshness had no owner. New contributors learn folklore. Assign docs ownership like any other production surface.`,
    ],
    tradeoffs: [
      `Upstream engagement costs calendar time and returns fewer surprise forks. Budget it like reliability work.`,
      `Strict CODEOWNERS can slow shared packages and also prevent orphaned code. Prefer slow ownership over silent abandonment.`,
      `Funding maintainers feels optional until you calculate the cost of a divergent fork.`,
    ],
    failures: [
      `Contributing for theater while ignoring the dependencies you actually run.`,
      `Unowned shared libraries that become political bottlenecks.`,
      `Permanent forks with no merge-back plan.`,
      `Docs that lie because nobody owns freshness after the launch wave.`,
      `Maintainer burnout after unplanned virality.`,
    ],
    practices: [
      `Pick one critical dependency and schedule quarterly upstream engagement.`,
      `Require CODEOWNERS for internal shared packages.`,
      `Treat docs PRs as valid onboarding tasks with senior review.`,
      `Before forking: write the exit criteria and the merge-back owner.`,
      `Budget maintainer capacity explicitly in planning — not as leftover evenings.`,
    ],
    closes: [
      `Citizenship scales mentorship — if you fund the maintenance, not only the applause.`,
      `Own what you share. Unowned commons become incident factories.`,
      `Upstream first keeps collaboration cheap. Practice it before you need it.`,
    ],
  },

  buybuild: {
    label: 'Buy-versus-build judgment',
    theses: [
      'AI compresses the typing cost of building. It does not compress the ownership cost of running what you built.',
      'Buy commodities. Build the harness that makes your judgment visible: policy, evals, audit, and exit.',
      'A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.',
      'If you cannot unwind it, you did not buy a tool — you adopted a dependency with a logo.',
    ],
    openings: [
      (t) =>
        `${t} debates go wrong when they start from pride or fear instead of ownership: who runs the failure mode, and what does exit cost?`,
      (t) =>
        `In an AI-accelerated world, ${t} is less about typing speed and more about maintenance, integration debt, and who owns outcomes.`,
      (t) =>
        `${t} should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.`,
    ],
    deep: [
      `Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.`,
      `Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.`,
      `Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.`,
      `Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.`,
      `When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.`,
      `Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.`,
      `Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.`,
      `Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.`,
    ],
    scenarios: [
      `A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.`,
      `Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.`,
      `A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.`,
      `No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.`,
    ],
    tradeoffs: [
      `Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.`,
      `Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.`,
      `Vendor features arrive fast. Your process still needs translation into owned runbooks.`,
    ],
    failures: [
      `Building because pride, buying because fear — neither from ownership analysis.`,
      `No exit plan; switching costs discovered during an outage or a price hike.`,
      `Vendor success metrics replacing your product metrics.`,
      `Shadow purchases by teams that skip security and data review.`,
      `Custom platforms that reinvent commodity chrome while underfunding the harness.`,
    ],
    practices: [
      `Every purchase: name the internal owner and the failure-mode runbook.`,
      `Every build: name the commodity you refused to buy and why ownership differs.`,
      `Annual: run a tabletop exit for one critical vendor.`,
      `Require eval and audit ownership to stay in-house for AI tooling.`,
      `Track integration debt items on the same board as features until retired.`,
    ],
    closes: [
      `Own the outcome. Buy time on commodities; keep judgment and exit under your roof.`,
      `Harnesses outlive vendors. Invest accordingly.`,
      `If nobody can operate the failure mode, you rented a demo.`,
    ],
  },
}

/** Cross-theme pairings that make sense in a bridge section */
module.exports.CROSS = {
  leadership: ['mentorship', 'collaboration', 'craft'],
  mentorship: ['ai', 'leadership', 'craft'],
  collaboration: ['leadership', 'craft', 'buybuild'],
  craft: ['leadership', 'sustainability', 'collaboration'],
  ai: ['mentorship', 'agents', 'buybuild'],
  rag: ['agents', 'ai', 'craft'],
  agents: ['ai', 'buybuild', 'craft'],
  sustainability: ['craft', 'leadership', 'buybuild'],
  opensource: ['mentorship', 'craft', 'collaboration'],
  buybuild: ['ai', 'agents', 'leadership'],
}
