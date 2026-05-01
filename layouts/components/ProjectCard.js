import Link from "next/link";

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

const ProjectCard = ({ project, className }) => {
  const fm = project.frontmatter || {};
  const title = fm.title || project.slug;
  const description = fm.description || "";
  const status = fm.product_status;
  const stack = Array.isArray(fm.stack) ? fm.stack : [];
  const highlights = Array.isArray(fm.highlights) ? fm.highlights : [];

  return (
    <div className={className}>
      <div className="card">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={status} />
          {stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-theme-light px-3 py-1 text-xs font-secondary text-text"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="h3 mb-2 mt-4 font-normal">
          <Link href={`/projects/${project.slug}`} className="block">
            {title}
          </Link>
        </h2>

        {description && <p className="text-text">{description}</p>}

        {highlights.length > 0 && (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text">
            {highlights.slice(0, 3).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        <Link
          className="btn-link mt-7 inline-flex items-center hover:text-primary"
          href={`/projects/${project.slug}`}
        >
          Read case study
          <svg
            className="ml-1"
            width="22"
            height="11"
            viewBox="0 0 16 8"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.3536 4.35355c.1952-.19526.1952-.51184.0-.7071L12.1716.464467C11.9763.269205 11.6597.269205 11.4645.464467c-.1953.195262-.1953.511845.0.707103L14.2929 4 11.4645 6.82843c-.1953.19526-.1953.51184.0.7071C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553l3.182-3.18198zM-.437114e-7 4.5H15v-1H.437114e-7l-.874228e-7 1z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

