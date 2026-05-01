import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";

const companiesBuilt = [
  { name: "With Light", href: "https://withlight.ai/", note: "DBT tools + guided AI coaching" },
  { name: "TrunkMatch", href: "https://www.trunkmatch.com/", note: "Matching-first marketplace for hand-me-downs" },
  { name: "Aevum", href: "https://withaevum.com/", note: "Scheduling infrastructure (coming soon)" },
  { name: "Deb", href: "https://www.meetdeb.com/", note: "Smart debt management" },
  { name: "Mendbloom", href: "https://www.mendbloom.com/", note: "Financial OS for therapists" },
  { name: "Altum", href: "https://www.altum.education/", note: "Whole-child education OS" },
];

const companiesWorkedWith = [
  { name: "Pangea", href: "https://www.pangea.io/", note: "FX risk + global payments" },
  { name: "Stable Sea", href: "https://www.stablesea.com/", note: "Onchain treasury + payments" },
  { name: "Spoonly", href: "https://spoonly.care/", note: "Virtual integrative care" },
];

const CompanyList = ({ title, items }) => {
  return (
    <div className="mt-10">
      <h2 className="h2 mb-6 text-center">{title}</h2>
      <div className="row">
        {items.map((c) => (
          <div key={c.name} className="col-12 mb-6 md:col-4">
            <div className="card h-full">
              <h3 className="h4 mb-2">{c.name}</h3>
              <p className="text-text mb-4">{c.note}</p>
              <a className="btn btn-primary" href={c.href} target="_blank" rel="noreferrer">
                Visit site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Companies = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const title = frontmatter?.title || "Companies";

  return (
    <section className="!pt-[60px] pb-10">
      <div className="container">
        <h1 className="h1 mb-10 text-center">{title}</h1>

        <div className="row">
          <div className="mx-auto lg:col-11">
            <div className="content">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>

        <CompanyList title="Products I’ve built" items={companiesBuilt} />
        <CompanyList title="Companies I’ve worked with" items={companiesWorkedWith} />
      </div>
    </section>
  );
};

export default Companies;

