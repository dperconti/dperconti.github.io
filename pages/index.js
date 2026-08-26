import config from "@config/config.json";
import social from "@config/social.json";
import Base from "@layouts/Baseof";

const proof = [
  "Engineering Manager at Pangea, leading backend, infrastructure, and data systems for an FX trading and payments platform.",
  "Previously Engineering Manager at Heard, Ness, and Elevate Security — scaling teams and shipping production systems across fintech and security.",
  "Built AI-powered systems using RAG pipelines, vector search, and LLM integrations; reduced manual categorization work by ~40% at Heard.",
  "Led global payments infrastructure at Skillshare, migrating a PHP monolith to NestJS microservices across 13 payment providers.",
  "Hands-on across architecture, cloud infrastructure (AWS, GCP), and delivery — known for fast execution and reliable systems at scale.",
];

const experience = [
  {
    company: "Pangea",
    title: "Engineering Manager",
    dates: "April 2025 – Present",
    highlight:
      "Led a team of 6 senior and staff engineers; built real-time RFQ and market data pipelines (~50% lower quote latency) and scaled event-driven GCP infrastructure with Pub/Sub, Terraform, and Cloud Run.",
  },
  {
    company: "Heard",
    title: "Engineering Manager",
    dates: "October 2023 – April 2025",
    highlight:
      "Reorganized a 14-person engineering org into functional squads; led Heroku → AWS migration (uptime 97.5% → 99.9%, ~20% lower infra cost) and AI transaction categorization with RAG.",
  },
  {
    company: "Ness",
    title: "Engineering Manager",
    dates: "September 2022 – October 2023",
    highlight:
      "Led backend, mobile, and infrastructure through 10 production releases in 9 months; built Plaid integrations that cut onboarding time by ~50%.",
  },
  {
    company: "Elevate Security",
    title: "Engineering Manager",
    dates: "June 2021 – September 2022",
    highlight:
      "Led 18 engineers across platform, frontend, and analytics; delivered real-time security automation and a no-code workflow engine used by enterprise customers.",
  },
  {
    company: "Skillshare",
    title: "Staff Software Engineer",
    dates: "2019 – 2021",
    highlight:
      "Led engineering for global payments, checkout, and revenue recognition; architected multi-provider payment orchestration and NestJS microservice migration.",
  },
  {
    company: "Lululemon",
    title: "Lead Software Engineer",
    dates: "2017 – 2019",
    highlight:
      "Led backend and API development for Buy Online, Pick-Up In Store (BOPIS); built serverless inventory and fulfillment workflows on AWS Lambda.",
  },
];

const Home = () => {
  const { name } = config.profile;
  const role = "Engineering Manager";

  return (
    <Base
      title={`${name} — ${role}`}
      meta_title={`${name} — ${role}`}
      description={`${name}, ${role}. Engineering leadership across payments, platforms, and AI systems.`}
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
                Experience
              </h2>
              <ul className="space-y-6">
                {experience.map((item) => (
                  <li key={item.company}>
                    <p className="text-base md:text-lg font-secondary font-medium text-[#5D4037]">
                      {item.company}
                      <span className="font-normal text-[#8D6E63]">
                        {" "}
                        — {item.title}
                      </span>
                    </p>
                    <p className="mt-0.5 text-sm font-secondary font-normal text-[#8D6E63]">
                      {item.dates}
                    </p>
                    <p className="mt-1 text-sm md:text-base font-secondary font-normal text-[#8D6E63] text-clean leading-relaxed">
                      {item.highlight}
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
                <li>
                  <a
                    href="/Donato_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    Resume
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
