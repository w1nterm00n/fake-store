
const Pagination = ({ postsPerPage, length, handlePagination, currentPage }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
     //тут проверка чтобы не выводилось больше, чем задано на странице
    paginationNumbers.push(i);  //создаются числа (которые отобразятся в пагинации)
  }

  return (
    <div className='pagination'>
      {paginationNumbers.map((pageNumber) => ( //рендеринг кнопок
        <button key={pageNumber} 
        className={currentPage === pageNumber ? 'active' : ''}
        onClick={() => handlePagination(pageNumber)}>
            {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
