import "./Pagination.css";

const Pagination = ({ activePage, setActivePage, countPage }) => {
  const arr = Array(countPage || 1).fill(1);
  return (
    <div className="pagination">
      {countPage ? (
        arr.map((_, i) => (
          <div
            key={i}
            className={
              i + 1 === activePage
                ? "pagination__btn pagination__btn-active"
                : "pagination__btn"
            }
            onClick={() => setActivePage(i + 1)}
          >
            {i + 1}
          </div>
        ))
      ) : (
        <p>0</p>
      )}
    </div>
  );
};

export default Pagination;
