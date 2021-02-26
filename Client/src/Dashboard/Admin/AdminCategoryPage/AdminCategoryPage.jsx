import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button/Button';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import Input from '../../../components/FormElements/Input/Input';
import Loading from '../../../components/Loading/Loading';
import Message from '../../../components/Notification/Message/Message';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { adminAddCategoryAction } from '../../../redux/actions/adminActions';
import { GetCategoryListAction } from '../../../redux/actions/publicActions';
import {
  ADMIN_ADD_CATEGORY_RESET_STATE,
  ADMIN_DELETE_CATEGORY_RESET_STATE,
} from '../../../redux/constants/adminConstants';
import './AdminCategoryPage.scss';
import CategoryCard from './CategoryCard';

const AdminCategoryPage = () => {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.getCategoryList
  );
  const { loading: addLoading, data: addData, error: addError } = useSelector(
    (state) => state.adminAddCategory
  );

  const { data: deleteData, error: deleteError } = useSelector(
    (state) => state.adminDeleteCategory
  );

  useEffect(() => {
    dispatch(GetCategoryListAction());
  }, [dispatch]);

  const [formState, setFormState] = useState({
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADMIN_DELETE_CATEGORY_RESET_STATE });
    dispatch(adminAddCategoryAction(formState.category));
  };

  useEffect(() => {
    dispatch({ type: ADMIN_ADD_CATEGORY_RESET_STATE });
    dispatch({ type: ADMIN_DELETE_CATEGORY_RESET_STATE });
    return () => {
      dispatch({ type: ADMIN_ADD_CATEGORY_RESET_STATE });
      dispatch({ type: ADMIN_DELETE_CATEGORY_RESET_STATE });
    };
  }, [dispatch]);

  return (
    <DashboardHolder>
      <div className="admin-category-page">
        <div className="admin-category-page__header">
          <h5>categories ({data?.length})</h5>
        </div>
        <ResponseHandler error={addError} data={addData} />
        <ResponseHandler error={deleteError} data={deleteData} />
        <div className="admin-category-page__container">
          <div className="admin-category-page__content">
            <ResponseHandler error={error} />
            <form className="admin-category-page__form" onSubmit={handleSubmit}>
              <Input
                name="category"
                value={formState['category'] ? formState['category'] : ''}
                onChange={handleInputChange}
                msg={addError?.errors?.map(
                  (item, index) =>
                    item.field === 'category' && `${item.message} `
                )}
                placeholder="category name..."
              />
              {addLoading ? (
                <Button btnText={<Loading />} />
              ) : (
                <Button type="submit" btnText="add" />
              )}
            </form>

            {loading ? (
              <Loading big={true} />
            ) : data?.length > 0 ? (
              <div className="admin-category-page__list">
                {data?.map((item) => {
                  return (
                    <CategoryCard
                      key={item._id}
                      categoryId={item._id}
                      category={item.category}
                    />
                  );
                })}
              </div>
            ) : (
              <Message msg="No Category yet." />
            )}
          </div>
        </div>
      </div>
    </DashboardHolder>
  );
};

export default AdminCategoryPage;
