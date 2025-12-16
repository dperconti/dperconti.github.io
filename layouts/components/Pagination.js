import Link from "next/link";
import React from "react";

const Pagination = ({ currentPage, totalPages }) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  // Generate smart page list with ellipsis
  const generatePageList = () => {
    const pageList = [];
    const maxVisiblePages = 7; // Show max 7 page numbers
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pageList.push(i);
      }
    } else {
      // Always show first page
      pageList.push(1);
      
      // Calculate range around current page (show 2 pages on each side)
      let startPage = Math.max(2, currentPage - 2);
      let endPage = Math.min(totalPages - 1, currentPage + 2);
      
      // If near the beginning, show more pages at start
      if (currentPage <= 4) {
        startPage = 2;
        endPage = 5;
      }
      
      // If near the end, show more pages at end
      if (currentPage >= totalPages - 3) {
        startPage = totalPages - 4;
        endPage = totalPages - 1;
      }
      
      // Add ellipsis before if there's a gap between 1 and startPage
      if (startPage > 2) {
        pageList.push('ellipsis-start');
      }
      
      // Add pages in the range (excluding first and last which are already handled)
      for (let i = startPage; i <= endPage; i++) {
        pageList.push(i);
      }
      
      // Add ellipsis after if there's a gap between endPage and last page
      if (endPage < totalPages - 1) {
        pageList.push('ellipsis-end');
      }
      
      // Always show last page
      pageList.push(totalPages);
    }
    
    return pageList;
  };

  const pageList = generatePageList();

  return (
    <>
      {totalPages > 1 && (
        <nav
          className="mb-4 flex justify-center -space-x-px"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <Link
              href={indexPageLink ? "/" : `/page/${currentPage - 1}`}
              className="border border-primary px-2 py-2 text-text"
            >
              <>
                <span className="sr-only">Previous</span>
                <svg
                  className="mt-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            </Link>
          ) : (
            <span className="border border-primary px-2 py-2 text-text">
              <>
                <span className="sr-only">Previous</span>
                <svg
                  className="mt-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            </span>
          )}

          {/* page index */}
          {pageList.map((page, i) => {
            // Handle ellipsis
            if (page === 'ellipsis-start' || page === 'ellipsis-end') {
              return (
                <span
                  key={`ellipsis-${i}`}
                  className="border border-primary px-4 py-2 text-text"
                >
                  ...
                </span>
              );
            }
            
            // Handle page numbers
            const isFirstPage = page === 1;
            const isCurrentPage = page === currentPage;
            
            return (
              <React.Fragment key={`page-${page}`}>
                {isCurrentPage ? (
                  <span
                    aria-current="page"
                    className={`border border-primary bg-primary px-4 py-2 text-white`}
                  >
                    {page}
                  </span>
                ) : (
                  <Link
                    href={isFirstPage ? "/" : `/page/${page}`}
                    passHref
                    className={`border border-primary px-4 py-2 text-text`}
                  >
                    {page}
                  </Link>
                )}
              </React.Fragment>
            );
          })}

          {/* next page */}
          {hasNextPage ? (
            <Link
              href={`/page/${currentPage + 1}`}
              className="border border-primary px-2 py-2 text-text"
            >
              <>
                <span className="sr-only">Next</span>
                <svg
                  className="mt-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            </Link>
          ) : (
            <span className="border border-primary px-2 py-2 text-text">
              <>
                <span className="sr-only">Next</span>
                <svg
                  className="mt-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;

