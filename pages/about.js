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
            I build and lead engineering for payments systems, backend
            platforms, and AI-assisted product work across fintech and health
            tech. The through-line is practical: ship reliable systems, grow
            teams that can own them, and stay close enough to the craft that
            decisions stay grounded.
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
