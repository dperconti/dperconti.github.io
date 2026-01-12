import { useEffect, useState } from "react";

const ChapterSidebar = ({ headings, isOpen, onToggle }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      // Find the current active heading based on scroll position
      let current = "";
      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].slug);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            current = headings[i].slug;
            break;
          }
        }
      }

      // If we're at the top, highlight the first heading
      if (scrollPosition < 200 && headings.length > 0) {
        current = headings[0].slug;
      }

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleClick = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Toggle Button - Desktop only */}
      <button
        onClick={onToggle}
        className="fixed left-4 top-20 z-40 hidden lg:flex items-center justify-center w-10 h-10 rounded-lg bg-body/80 backdrop-blur-sm border border-border text-text hover:bg-primary hover:text-white transition-colors shadow-sm"
        aria-label={isOpen ? "Hide table of contents" : "Show table of contents"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <aside
          className="chapter-sidebar hidden lg:block fixed left-0 top-16 bottom-0 w-64 z-30 overflow-y-auto pt-8 pb-20"
          aria-label="Table of contents"
        >
          <div className="px-4">
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Chapters
            </h2>
            <nav>
              <ul className="space-y-1">
                {headings.map((heading, index) => (
                  <li
                    key={index}
                    className={`${
                      heading.level === 3 ? "ml-4" : ""
                    } transition-colors`}
                  >
                    <button
                      onClick={() => handleClick(heading.slug)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        activeId === heading.slug
                          ? "border-r-2 border-primary font-medium"
                          : "hover:bg-border/50"
                      }`}
                      aria-current={activeId === heading.slug ? "location" : undefined}
                    >
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </>
  );
};

export default ChapterSidebar;
