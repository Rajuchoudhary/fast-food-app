import React, { useState } from 'react';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { adminDeleteCategoryAction } from '../../../redux/actions/adminActions';
import { ADMIN_ADD_CATEGORY_RESET_STATE } from '../../../redux/constants/adminConstants';

const CategoryCard = ({ categoryId, category }) => {
  const dispatch = useDispatch();
  const [showOption, setShowOption] = useState(false);

  const { loading } = useSelector((state) => state.adminDeleteCategory);

  const onClickDelete = () => {
    setShowOption(!showOption);
  };

  const deleteCategory = () => {
    dispatch({ type: ADMIN_ADD_CATEGORY_RESET_STATE });
    dispatch(adminDeleteCategoryAction(categoryId));
  };

  return (
    <div className="category-card">
      <p>{category}</p>
      <div className="category-card__btns">
        <button className="category-card__delete" onClick={onClickDelete}>
          <IoIosCloseCircle />
        </button>
        <Link
          to={`/admin/categories/${categoryId}/${category}`}
          className="category-card__edit"
        >
          <IoIosCheckmarkCircle />
        </Link>
      </div>
      {showOption && (
        <div className="category-card__option">
          {loading ? (
            <button className="category-card__yes">
              <Loading />
            </button>
          ) : (
            <button className="category-card__yes" onClick={deleteCategory}>
              yes
            </button>
          )}
          <button className="category-card__no" onClick={onClickDelete}>
            no
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
