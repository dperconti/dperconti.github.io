import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Link from "next/link";

const Thesis = () => {
  const { name, designation } = config.profile;

  return (
    <Base
      title={`Thesis — ${name}`}
      meta_title={`Hands-on leadership — ${name}`}
      description="Reliable systems and capable teams are the same problem. A short thesis on hands-on engineering leadership."
    >
      <article className="site-frame">
        <p className="site-page-sub">thesis · {designation}</p>
        <h1 className="site-page-title">Hands-on leadership</h1>

        <div className="site-prose">
          <p>
            <strong>
              Reliable systems and capable teams are the same problem.
            </strong>{" "}
            Scale one without the other and you get theater — either a platform
            nobody can operate, or an org chart that ships slowly.
          </p>
          <p>
            The work I care about sits at that intersection: payments and
            backend platforms that have to be correct, infrastructure that has
            to stay cheap and calm under load, and teams that can own outcomes
            without waiting for permission. At places like Pangea, Heard, Ness,
            Elevate Security, and Skillshare, the pattern has been consistent —
            stay close enough to feel the drag, then clear it.
          </p>
          <p>
            Hands-on does not mean doing everyone&apos;s job. It means knowing
            where latency hides, where onboarding breaks, where a migration will
            tax the team — and being willing to architect, debug, or renegotiate
            scope when the system asks for it. AI and automation are leverage
            here, not decoration: RAG pipelines and developer tooling matter when
            they remove real toil.
          </p>
          <p>
            Leadership, then, is less about ceremony and more about compounding
            trust. Hire for ownership. Reorganize when the shape of the product
            changes. Keep delivery velocity honest. Ship systems that still work
            when you are not in the room.
          </p>
        </div>

        <div className="site-links">
          <Link href="/">← home</Link>
          <Link href="/about/">about</Link>
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
