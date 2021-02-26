import { useEffect, useState } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import Select from '../../../components/FormElements/Select/Select';
import Loading from '../../../components/Loading/Loading';
import Message from '../../../components/Notification/Message/Message';
import PagePagination from '../../../components/PagePagination/PagePagination';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { adminGetItemsAction } from '../../../redux/actions/adminActions';
import { GetCategoryListAction } from '../../../redux/actions/publicActions';
import AdminItemCard from './AdminItemCard';
import './AdminMenuPage.scss';

const AdminMenuPage = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.adminGetItems);
  const { loading: listLoading, data: listData } = useSelector(
    (state) => state.getCategoryList
  );

  const [formState, setFormState] = useState({
    category: 'all',
  });

  const handleInputChange = (e) => {
    setCurrentPage(1);
    setFormState({ ...formState, category: e.target.value });
  };

  const [currentPage, setCurrentPage] = useState(1);

  const onPageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(dispatch(GetCategoryListAction()));
  }, [dispatch]);

  useEffect(() => {
    dispatch(adminGetItemsAction(currentPage, formState.category));
  }, [dispatch, formState, currentPage]);

  return (
    <DashboardHolder>
      <div className="admin-menu-page">
        <div className="admin-menu-page__header">
          <h5>menu items ({data?.totalitem})</h5>
        </div>

        <div className="admin-menu-page__container">
          <div className="admin-menu-page__content">
            <ResponseHandler error={error} data={data} />
            {listLoading ? (
              <Loading big={true} />
            ) : listData?.length > 0 ? (
              <>
                <div className="admin-menu-page__option">
                  <Link to="/admin/add-item" className="admin-menu-page__add">
                    add new item
                    <span>
                      <CgPlayListAdd />
                    </span>
                  </Link>
                  <form className="admin-menu-page__form">
                    <Select
                      name="category"
                      onChange={handleInputChange}
                      value={formState['category'] ? formState['category'] : ''}
                      msg={error?.errors?.map(
                        (item, index) =>
                          item.field === 'category' && `${item.message} `
                      )}
                      list={['all', ...listData?.map((item) => item.category)]}
                    />
                  </form>
                </div>

                {loading ? (
                  <Loading big={true} />
                ) : data?.itemList?.length > 0 ? (
                  <>
                    {data?.itemList?.length === 0 ? (
                      <Message msg="No menu item yet." />
                    ) : (
                      <div className="admin-menu-page__grid">
                        {data?.itemList?.map((item) => {
                          return <AdminItemCard key={item._id} data={item} />;
                        })}
                      </div>
                    )}
                    {data?.totalitem > 10 && (
                      <div className="admin-menu-page__pagination">
                        <PagePagination
                          activePage={currentPage}
                          onChange={onPageClick}
                          totalItemsCount={
                            data?.totalitem ? data?.totalitem : 0
                          }
                        />
                      </div>
                    )}
                  </>
                ) : null}
              </>
            ) : (
              <Message msg="No item yet. Start adding category first." />
            )}
          </div>
        </div>
      </div>
    </DashboardHolder>
  );
};

export default AdminMenuPage;
