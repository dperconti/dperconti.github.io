import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";

const proof = [
  "Led product and platform engineering for With Light, TrunkMatch, and Deb.",
  "Built and scaled engineering teams at Pangea, Stable Sea, and Spoonly.",
  "Shipped systems across web, mobile, and data-heavy product domains.",
  "Focused on reliable delivery, clear execution, and maintainable architecture.",
  "Hired, coached, and unblocked engineers while keeping roadmaps moving.",
];

const selectedWork = [
  {
    name: "With Light",
    href: "https://withlight.ai/",
    summary:
      "DBT-first emotional wellness product with guided AI coaching and structured skill flows.",
  },
  {
    name: "TrunkMatch",
    href: "https://www.trunkmatch.com/",
    summary:
      "Marketplace matching and queueing for kids’ hand-me-downs by size, age, and fit.",
  },
  {
    name: "Deb",
    href: "https://www.meetdeb.com/",
    summary:
      "Debt management product focused on cash-flow clarity and explainable payoff strategies.",
  },
];

const Home = () => {
  const { name } = config.profile;
  const role = "Engineering Manager";

  return (
    <Base
      title={`${name} — ${role}`}
      meta_title={`${name} — ${role}`}
      description={`${name}, ${role}. Product and platform engineering leadership.`}
    >
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-secondary font-semibold mb-3 text-[#5D4037] text-clean-bold">
              {name}
            </h1>
            <p className="text-lg md:text-xl font-secondary font-normal mb-10 text-[#8D6E63] text-clean">
              {role}
            </p>

            <ul className="space-y-3 mb-14 list-disc pl-5 marker:text-[#8D6E63]">
              {proof.map((item) => (
                <li
                  key={item}
                  className="text-base md:text-lg font-secondary font-normal text-[#5D4037] text-clean leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-14">
              <h2 className="text-xl md:text-2xl font-secondary font-semibold mb-6 text-[#5D4037] text-clean-bold">
                Selected work
              </h2>
              <ul className="space-y-5">
                {selectedWork.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-secondary font-medium text-[#5D4037] underline underline-offset-4 hover:opacity-80"
                    >
                      {item.name}
                    </a>
                    <p className="mt-1 text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      {item.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-secondary font-semibold mb-4 text-[#5D4037] text-clean-bold">
                Contact
              </h2>
              <ul className="space-y-2 text-base font-secondary font-normal text-[#5D4037]">
                <li>
                  <a
                    href={`mailto:${social.email}`}
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    {social.email}
                  </a>
                </li>
                <li>
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;
