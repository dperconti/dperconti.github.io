import config from "@config/config.json";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Base from "./Baseof";
import shortcodes from "./shortcodes/all";

const Badge = ({ children }) => {
  if (!children) return null;
  return (
    <span className="inline-flex items-center rounded-full bg-theme-light px-3 py-1 text-xs font-secondary text-text">
      {children}
    </span>
  );
};

const StatusBadge = ({ status }) => {
  if (!status) return null;
  const label =
    status === "coming_soon"
      ? "Coming soon"
      : status === "sunset"
        ? "Sunset"
        : "Live";
  return (
    <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-secondary text-text">
      {label}
    </span>
  );
};

const ProjectSingle = ({ project, mdxContent, slug }) => {
  const { frontmatter, content } = project[0];
  const {
    title,
    description,
    role,
    team,
    stack,
    product_status,
    links,
    image,
  } = frontmatter;

  const metaDescription = description ? description : content.slice(0, 160);
  const { base_url } = config.site;
  const canonical = `${base_url}projects/${slug}/`;
  const metaImage = image || `${base_url}images/default-blog-image.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: metaDescription,
    url: canonical,
  };

  const stackList = Array.isArray(stack) ? stack : [];
  const website = links?.website;
  const demo = links?.demo;
  const appStore = links?.app_store;

  return (
    <Base title={title} meta_title={title} description={metaDescription} image={metaImage} canonical={canonical}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="pt-20 pb-6">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-10">
              <Link className="mb-12 inline-flex items-center text-primary hover:underline" href="/projects">
                <svg
                  className="mr-2"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M.292892 7.29289c-.3905235.39053-.3905235 1.02369.0 1.41422L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711 8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8 8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107.928932 7.68054.538408 7.04738.538408 6.65685.928932L.292892 7.29289zM21 7H1V9H21V7z"
                    fill="currentcolor"
                  ></path>
                </svg>
                Back to Projects
              </Link>

              <article>
                <h1 className="h2 mt-12">{title}</h1>
                {metaDescription && (
                  <p className="mt-4 text-text text-lg font-secondary">{metaDescription}</p>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <StatusBadge status={product_status} />
                  {role && <Badge>{role}</Badge>}
                  {team && <Badge>{team}</Badge>}
                  {stackList.slice(0, 6).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                {(website || demo || appStore) && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {website && (
                      <a className="btn btn-primary" href={website} target="_blank" rel="noreferrer">
                        Visit site
                      </a>
                    )}
                    {demo && (
                      <a className="btn" href={demo} target="_blank" rel="noreferrer">
                        Watch demo
                      </a>
                    )}
                    {appStore && (
                      <a className="btn" href={appStore} target="_blank" rel="noreferrer">
                        App Store
                      </a>
                    )}
                  </div>
                )}

                <div className="content text-left mt-10">
                  <MDXRemote {...mdxContent} components={shortcodes} />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default ProjectSingle;

