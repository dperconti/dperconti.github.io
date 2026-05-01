import Base from "@layouts/Baseof";
import ProjectCard from "@layouts/components/ProjectCard";
import { getSinglePage } from "@lib/contentParser";

const Projects = ({ projects }) => {
  return (
    <Base
      title="Projects"
      meta_title="Projects — Product case studies"
      description="Product case studies: what I built, how I built it, and what I learned."
    >
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-10 mb-12">
              <h1 className="h1 mb-4 glass-heading">Projects</h1>
              <p className="text-xl font-secondary text-text">
                Case studies of products I’ve built: the problem, architecture, and outcomes.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="mx-auto lg:col-10">
              <div className="row">
                {projects.map((project, i) => (
                  <ProjectCard
                    className="col-12 mb-6 sm:col-6"
                    key={`project-${i}`}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const projects = getSinglePage("content/projects");
  return {
    props: {
      projects,
    },
  };
};

