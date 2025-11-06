import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

export interface PaginationProps {
  /**
   * Current page number (1-indexed)
   */
  currentPage: number;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Total number of items
   */
  totalItems: number;
  /**
   * Number of items per page
   */
  itemsPerPage: number;
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;
  /**
   * Custom label for items (e.g., "users", "items", "records", "entries")
   * @default "entries"
   */
  itemLabel?: string;
  /**
   * Show rows info text
   * @default true
   */
  showRowsInfo?: boolean;
  /**
   * Show page numbers
   * @default true
   */
  showPageNumbers?: boolean;
  /**
   * Maximum number of page buttons to show
   * @default 10
   */
  maxPageButtons?: number;
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  itemLabel = "entries",
  showRowsInfo = true,
  showPageNumbers = true,
  maxPageButtons = 10,
  className,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  // Calculate which page numbers to show
  const getPageNumbers = () => {
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: number[] = [];
    const half = Math.floor(maxPageButtons / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, start + maxPageButtons - 1);

    if (end - start < maxPageButtons - 1) {
      start = Math.max(1, end - maxPageButtons + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const classes = ["arkem-pagination", className].filter(Boolean).join(" ");

  return (
    <div className={classes} role="navigation" aria-label="Pagination">
      {showRowsInfo && (
        <div className="arkem-pagination__info" aria-live="polite">
          Showing {startIndex + 1} to {endIndex} of {totalItems} {itemLabel}
        </div>
      )}

      <div className="arkem-pagination__controls">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrevious}
          disabled={isFirstPage}
          className="arkem-pagination__button arkem-pagination__button--prev"
          aria-label="Go to previous page"
          aria-disabled={isFirstPage}
        >
          <ChevronLeft aria-hidden="true" />
        </button>

        {/* Page Numbers */}
        {showPageNumbers &&
          pageNumbers.map((page) => {
            const isCurrentPage = page === currentPage;
            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageClick(page)}
                className={`arkem-pagination__button arkem-pagination__button--page ${
                  isCurrentPage ? "is-active" : ""
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={isCurrentPage ? "page" : undefined}
              >
                {page}
              </button>
            );
          })}

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={isLastPage}
          className="arkem-pagination__button arkem-pagination__button--next"
          aria-label="Go to next page"
          aria-disabled={isLastPage}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

