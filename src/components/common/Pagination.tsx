interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

type PageItem = number | "start-ellipsis" | "end-ellipsis";

function getVisiblePages(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set<number>([
    1,
    totalPages,
    currentPage - 1,
    currentPage,
    currentPage + 1,
  ]);

  const visiblePages = Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  return visiblePages.reduce<PageItem[]>((items, page, index) => {
    const previousPage = visiblePages[index - 1];

    if (previousPage && page - previousPage > 1) {
      items.push(previousPage === 1 ? "start-ellipsis" : "end-ellipsis");
    }

    items.push(page);
    return items;
  }, []);
}

export const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = getVisiblePages(currentPage, totalPages);

  if (totalPages <= 1) return null;

  return (
    <nav className="mt-4 d-flex justify-content-center" aria-label="Paginação">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            type="button"
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Anterior
          </button>
        </li>

        {visiblePages.map((page) => {
          if (typeof page !== "number") {
            return (
              <li key={page} className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            );
          }

          return (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <button
                type="button"
                className="page-link"
                aria-current={currentPage === page ? "page" : undefined}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            type="button"
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Próxima
          </button>
        </li>
      </ul>
    </nav>
  );
};
