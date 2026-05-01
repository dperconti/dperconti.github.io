import config from "@config/config.json";
import ProjectSingle from "@layouts/ProjectSingle";
import { getSinglePage } from "@lib/contentParser";
import { parseMDX } from "@lib/utils/mdxParser";

const ProjectArticle = ({ project, mdxContent, slug }) => {
  return <ProjectSingle mdxContent={mdxContent} slug={slug} project={project} />;
};

export const getStaticPaths = () => {
  const allSlug = getSinglePage("content/projects");
  const paths = allSlug.map((item) => ({
    params: {
      single: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { single } = params;
  const projects = getSinglePage("content/projects");
  const project = projects?.filter((p) => p.slug == single);
  const mdxContent = await parseMDX(project[0].content);

  return {
    props: {
      project,
      mdxContent,
      slug: single,
    },
  };
};

export default ProjectArticle;

