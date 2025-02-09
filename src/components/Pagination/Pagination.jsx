import React from "react";
import "./Pagination.css";

const Pagination = ({ page, setPage }) => {
  return (
    <>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
