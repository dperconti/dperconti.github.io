import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";

const Home = () => {
  const { name, designation, bio } = config.profile;
  const role = designation || "Engineering Manager";

  return (
    <Base
      title={`${name} — ${role}`}
      meta_title={`${name} — ${role}`}
      description={bio}
    >
      <section className="relative z-10 flex flex-1 items-center py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl md:text-5xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold tracking-tight">
              {name}
            </h1>
            <p className="text-lg md:text-xl font-secondary font-normal mb-6 text-[#8D6E63] text-clean">
              {role}
            </p>
            <p className="text-base md:text-lg font-secondary font-normal mb-12 text-[#5D4037]/80 text-clean leading-relaxed">
              Building payments systems, platforms, and engineering teams across
              fintech and health tech.
            </p>

            <nav
              aria-label="Links"
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            >
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-secondary font-medium text-[#5D4037] underline underline-offset-4 decoration-[#8D6E63]/40 hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href="/Donato_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-secondary font-medium text-[#5D4037] underline underline-offset-4 decoration-[#8D6E63]/40 hover:opacity-70 transition-opacity"
              >
                Resume
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-secondary font-medium text-[#5D4037] underline underline-offset-4 decoration-[#8D6E63]/40 hover:opacity-70 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="/contact/"
                className="text-base font-secondary font-medium text-[#5D4037] underline underline-offset-4 decoration-[#8D6E63]/40 hover:opacity-70 transition-opacity"
              >
                Contact
              </a>
            </nav>

            <p className="mt-16 text-sm font-secondary font-normal text-[#8D6E63]/80 tracking-wide">
              Pangea · Heard · Elevate Security · Skillshare
            </p>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;
