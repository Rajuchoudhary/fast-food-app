import { useState } from 'react';

const usePageClick = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterState, setFilterState] = useState('all');

  const handleFilterChange = (e) => {
    setCurrentPage(1);
    setFilterState(e.target.value);
  };

  const onPageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return { currentPage, filterState, handleFilterChange, onPageClick };
};

export default usePageClick;
