import React from "react";

const Pagination = ({
  currentPage,
  currentMovies,
  movies,
  paginateNext,
  paginatePrev,
}) => {
  return (
    <nav>
      <ul className="pagination">
        <li className="pagination__page">
          Items per page {currentMovies.length}
        </li>
        <li className="pagination__allpages">
          {currentPage} of {movies.length}
        </li>
        <li
          className="pagination__item pagination__item--prev"
          onClick={() => paginatePrev()}
        >
          &lt;Prev
        </li>
        <li
          className="pagination__item pagination__item--next"
          onClick={() => paginateNext()}
        >
          Next&gt;
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
