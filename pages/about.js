import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";
import Link from "next/link";

const About = () => {
  const { name, designation, bio } = config.profile;

  return (
    <Base
      title={`About — ${name}`}
      meta_title={`About — ${name}`}
      description={bio}
    >
      <article className="site-frame">
        <p className="site-page-sub">about</p>
        <h1 className="site-page-title">{name}</h1>
        <p className="site-lede" style={{ marginBottom: "1.5rem" }}>
          {designation}
        </p>

        <div className="site-prose">
          <p>
            I lead engineering through coaching, cross-team collaboration, and
            the processes that make AI and event-driven workflows ownable.
            Payments and platforms are still the craft — leadership is how teams
            keep judgment as the tools move.
          </p>
          <p>
            Recent chapters include Pangea, Heard, Ness, Elevate Security,
            Skillshare, and Lululemon — spanning FX and payments platforms,
            security automation, and global checkout infrastructure.
          </p>
        </div>

        <div className="site-links">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a
            href="/Donato_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          <Link href="/contact/">contact</Link>
        </div>
      </article>
    </Base>
  );
};

export default About;
