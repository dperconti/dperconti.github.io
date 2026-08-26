import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Link from "next/link";

const Thesis = () => {
  const { name, designation } = config.profile;

  return (
    <Base
      title={`Thesis — ${name}`}
      meta_title={`Engineering leadership — ${name}`}
      description="Engineering leadership is coaching people who build together — especially when agents join the loop."
    >
      <article className="site-frame">
        <p className="site-page-sub">thesis · {designation}</p>
        <h1 className="site-page-title">Engineering leadership</h1>

        <div className="site-prose">
          <p>
            <strong>
              Engineering leadership is coaching people who build together —
              especially when agents join the loop.
            </strong>{" "}
            Mentorship, cross-team collaboration, and clear process around AI
            and event-driven workflows are how ownership stays real as the tools
            move.
          </p>
          <p>
            The work I care about is still people and systems: helping engineers
            grow, aligning teams that do not share a roadmap by default, and
            designing the rituals that keep delivery honest. Coaching is not a
            side channel — it is how judgment compounds when the surface area of
            the product keeps expanding.
          </p>
          <p>
            AI changes the tempo, not the responsibility. RAG pipelines,
            connectors, and event-driven agentic workflows are leverage when
            teams can see what ran, why it ran, and who owns the outcome. Without
            that, you get demos. With it, you get a harness people can operate
            under load.
          </p>
          <p>
            Leadership, then, is less ceremony and more continuity: hire for
            ownership, mentor in public, renegotiate process when agents join the
            workflow, and leave systems that still work when you are not in the
            room.
          </p>
        </div>

        <div className="site-links">
          <Link href="/">← home</Link>
          <Link href="/about/">about</Link>
          <Link href="/writing/">writing</Link>
          <a
            href="/Donato_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume →
          </a>
        </div>
      </article>
    </Base>
  );
};

export default Thesis;
