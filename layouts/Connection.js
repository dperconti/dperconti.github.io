import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import Link from "next/link";

const Connection = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title } = frontmatter;

  const links = [
    {
      title: "Date Me",
      url: "/date-request",
      icon: "💕",
      description: "Let's grab coffee, dinner, or do something fun together!",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "With Light",
      url: "https://withlight.ai/",
      icon: "✨",
      description: "Empower your emotional wellness with DBT & AI",
      color: "from-indigo-500 to-purple-500",
      external: true,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/dperconti/",
      icon: "📷",
      description: "Follow me on Instagram for daily updates",
      color: "from-purple-500 to-pink-500",
      external: true,
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/dperconti/",
      icon: "💼",
      description: "Connect with me professionally on LinkedIn",
      color: "from-blue-500 to-blue-600",
      external: true,
    },
    {
      title: "GitHub",
      url: "https://github.com/dperconti",
      icon: "💻",
      description: "Check out my code and open source projects",
      color: "from-gray-700 to-gray-900",
      external: true,
    },
  ];

  const LinkCard = ({ link }) => {
    const content = (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${link.color} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
      >
        <div className="relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-3xl">{link.icon}</span>
            <h3 className="text-xl font-semibold text-white">{link.title}</h3>
            {link.external && (
              <svg
                className="ml-auto h-5 w-5 text-white opacity-70 transition-opacity group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </div>
          <p className="text-sm text-white/90">{link.description}</p>
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    );

    if (link.external) {
      return (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={link.url} className="block">
        {content}
      </Link>
    );
  };

  return (
    <section className="section pt-[72px]">
      <div className="container">
        <div className="row">
          <div className="mx-auto lg:col-10">
            {title && markdownify(title, "h1", "h1 mb-4 text-center")}
            {mdxContent && (
              <div className="content mb-12 text-center">
                <MDXRemote {...mdxContent} components={shortcodes} />
              </div>
            )}
            <div className="grid gap-6 md:grid-cols-2">
              {links.map((link, index) => (
                <LinkCard key={index} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;

