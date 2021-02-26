import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemCard from '../../components/ItemCard/ItemCard';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Notification/Message/Message';
import PagePagination from '../../components/PagePagination/PagePagination';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import usePageClick from '../../hooks/usePageClick';
import useTitle from '../../hooks/useTitle';
import {
  GetCategoryListAction,
  getMenuPageDataAction,
} from '../../redux/actions/publicActions';
import './MenuPage.scss';

const MenuPage = () => {
  useTitle('Our Menu');
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state) => state.menuPageData);
  const { loading: listLoading, data: listData } = useSelector(
    (state) => state.getCategoryList
  );

  const {
    currentPage,
    filterState,
    handleFilterChange,
    onPageClick,
  } = usePageClick();

  useEffect(() => {
    dispatch(GetCategoryListAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMenuPageDataAction(currentPage, filterState));
  }, [dispatch, filterState, currentPage]);
  return (
    <div className="menu-page">
      <div className="menu-page__container">
        <h1 className="menu-page__heading">our menu</h1>

        <ResponseHandler error={error} data={data} />

        <div className="menu-page__filter">
          {listLoading ? (
            <Loading big={true} />
          ) : (
            listData?.length > 0 &&
            ['all', ...listData?.map((item) => item.category)].map((item) => {
              return (
                <label
                  htmlFor={item}
                  className={`menu-page__btn ${
                    filterState === item ? 'menu-page__btn--active' : ''
                  }`}
                  key={item}
                >
                  {item}
                  <input
                    type="radio"
                    hidden
                    id={item}
                    name="filter"
                    value={item}
                    onChange={handleFilterChange}
                  />
                </label>
              );
            })
          )}
        </div>

        {!listLoading && loading ? (
          <Loading big={true} />
        ) : data?.itemList?.length > 0 ? (
          <>
            <div className="menu-page__grid">
              {data?.itemList?.map((item) => {
                return <ItemCard key={item?._id} data={item} />;
              })}
            </div>
            {data?.totalitem > 9 && (
              <div className="menu-page__pagination">
                <PagePagination
                  activePage={currentPage}
                  onChange={onPageClick}
                  itemsCountPerPage={9}
                  totalItemsCount={data?.totalitem ? data?.totalitem : 0}
                />
              </div>
            )}
          </>
        ) : (
          data?.itemList?.length === 0 && <Message msg="No Item yet" />
        )}
      </div>
    </div>
  );
};

export default MenuPage;
