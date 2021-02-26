import Pagination from 'react-js-pagination';
import './PagePagination.scss';

const PagePagination = ({
  activePage,
  onChange,
  totalItemsCount,
  itemsCountPerPage = 10,
}) => {
  return (
    <Pagination
      innerClass="innerClass"
      activeClass="activeClass"
      activeLinkClass="activeLinkClass"
      itemClass="itemClass"
      itemClassFirst="itemClassFirst"
      itemClassPrev="itemClassPrev"
      itemClassNext="itemClassNext"
      itemClassLast="itemClassLast"
      hideFirstLastPages
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      onChange={onChange}
    />
  );
};

export default PagePagination;
