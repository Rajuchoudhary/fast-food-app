import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import DashboardHolder from '../../../components/Dashboard/DashboardHolder/DashboardHolder';
import Input from '../../../components/FormElements/Input/Input';
import { LinkButtonBlack } from '../../../components/LinkButton/LinkButton';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { adminUpdateCategoryAction } from '../../../redux/actions/adminActions';
import { ADMIN_RESET_CATEGORY } from '../../../redux/constants/adminConstants';
import './AdminCategoryPage.scss';

const AdminUpdateCategoryPage = () => {
  const { categoryId, categoryName } = useParams();
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state.adminUpdateCategory
  );

  const [formState, setFormState] = useState({
    category: categoryName,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  useEffect(() => {
    dispatch({ type: ADMIN_RESET_CATEGORY });
    return () => {
      dispatch({ type: ADMIN_RESET_CATEGORY });
    };
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminUpdateCategoryAction(categoryId, formState.category));
  };

  return (
    <DashboardHolder>
      <div className="admin-category-page">
        <div className="admin-category-page__header">
          <h5>update category</h5>
        </div>
        <div className="admin-category-page__container">
          <div className="admin-category-page__btn">
            <LinkButtonBlack
              btnLink="/admin/categories"
              btnText="back to categories"
            />
          </div>
          <div className="admin-category-page__content">
            <form
              className="admin-category-page__form admin-category-page__form--update"
              onSubmit={handleSubmit}
            >
              <ResponseHandler error={error} data={data} />
              <Input
                name="category"
                value={formState['category'] ? formState['category'] : ''}
                onChange={handleInputChange}
                msg={error?.errors?.map(
                  (item, index) =>
                    item.field === 'category' && `${item.message} `
                )}
                placeholder="category name..."
              />
              {loading ? (
                <Button btnText={<Loading />} />
              ) : (
                <Button type="submit" btnText="update" />
              )}
            </form>
          </div>
        </div>
      </div>
    </DashboardHolder>
  );
};

export default AdminUpdateCategoryPage;
