import { useState } from "react";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "./shortcodes/all";
import ChapterSidebar from "./components/ChapterSidebar";
import ChapterNavigation from "./components/ChapterNavigation";
import { extractHeadings } from "@lib/utils/extractHeadings";

const Chapter = ({ data }) => {
  const { frontmatter, mdxContent, content } = data;
  const { title } = frontmatter;
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Extract headings from raw markdown content
  const headings = extractHeadings(content);

  return (
    <section className="!pt-[60px] pb-10">
      {/* Mobile Chapter Navigation */}
      <ChapterNavigation headings={headings} />

      {/* Desktop Chapter Sidebar */}
      <ChapterSidebar
        headings={headings}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="container">
        <div className="row">
          {/* Content area - adjusts based on sidebar state */}
          <div
            className={`mx-auto transition-all duration-300 ${
              sidebarOpen
                ? "lg:col-8 lg:ml-auto lg:mr-4 lg:pl-4"
                : "lg:col-10 lg:mx-auto"
            }`}
          >
            {markdownify(title, "h1", "h1 mb-20 text-center book-title")}
            <div className="content">
              <MDXRemote {...mdxContent} components={shortcodes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chapter;
