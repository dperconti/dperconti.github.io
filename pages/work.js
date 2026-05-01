import Base from "@layouts/Baseof";
import ProjectCard from "@layouts/components/ProjectCard";
import { getSinglePage } from "@lib/contentParser";

const companiesWorkedWith = [
  { name: "Pangea", href: "https://www.pangea.io/", note: "FX risk + global payments" },
  { name: "Stable Sea", href: "https://www.stablesea.com/", note: "Onchain treasury + payments" },
  { name: "Spoonly", href: "https://spoonly.care/", note: "Virtual integrative care" },
];

const Work = ({ projects }) => {
  return (
    <Base
      title="Work"
      meta_title="Work — projects and companies"
      description="Projects I’ve built and companies I’ve worked with."
    >
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-10 mb-12">
              <h1 className="h1 mb-4 glass-heading">Work</h1>
              <p className="text-xl font-secondary text-text">
                Case studies + company experience. Click a project to go deep on architecture and outcomes.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="mx-auto lg:col-10">
              <h2 className="h2 mb-8 text-center">Projects</h2>
              <div className="row">
                {projects.map((project, i) => (
                  <ProjectCard
                    className="col-12 mb-6 sm:col-6"
                    key={`work-project-${i}`}
                    project={project}
                  />
                ))}
              </div>

              <div className="mt-16" id="companies">
                <h2 className="h2 mb-8 text-center">Companies I’ve worked with</h2>
                <div className="row">
                  {companiesWorkedWith.map((c) => (
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
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Work;

export const getStaticProps = async () => {
  const projects = getSinglePage("content/projects");
  return {
    props: {
      projects,
    },
  };
};

