import { useEffect, useState, useRef } from "react";

const ChapterNavigation = ({ headings }) => {
  const [activeId, setActiveId] = useState("");
  const scrollContainerRef = useRef(null);

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

      // Scroll active item into view in the navigation
      if (current && scrollContainerRef.current) {
        const activeButton = scrollContainerRef.current.querySelector(
          `[data-heading-slug="${current}"]`
        );
        if (activeButton) {
          activeButton.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleClick = (slug) => {
    const element = document.getElementById(slug);
    if (element) {
      const headerOffset = 120; // Account for mobile nav height
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
    <nav
      className="chapter-navigation lg:hidden sticky top-16 z-20 border-b"
      aria-label="Chapter navigation"
    >
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {headings.map((heading, index) => (
          <button
            key={index}
            data-heading-slug={heading.slug}
            onClick={() => handleClick(heading.slug)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeId === heading.slug
                ? "bg-primary text-white"
                : "bg-border/50 text-text hover:bg-border hover:text-primary"
            }`}
            aria-current={activeId === heading.slug ? "location" : undefined}
          >
            {heading.text}
          </button>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default ChapterNavigation;
