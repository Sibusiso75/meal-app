const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          className={i + 1 === currentPage ? 'active' : ''}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
  
  export default Pagination;
  