import { useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { adminDeleteItemAction } from '../../../redux/actions/adminActions';

const AdminItemCard = ({ data }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.adminDeleteItem);
  const [showOption, setShowOption] = useState(false);

  const onClickDelete = () => {
    setShowOption(!showOption);
  };

  const deleteItem = () => {
    dispatch(adminDeleteItemAction(data._id));
  };

  return (
    <div className="admin-item-card">
      <ResponseHandler error={error} />
      <div className="admin-item-card__content">
        <div className="admin-item-card__photo">
          <img src={data?.image.url} alt="" />
        </div>

        <Link
          className="admin-item-card__name"
          target="_blank"
          to={`/item-detail/${data._id}`}
        >
          {data.itemName}
        </Link>

        <div className="admin-item-card__btns">
          <Link
            to={`/admin/edit-item/${data._id}`}
            className="admin-item-card__edit"
          >
            <MdModeEdit />
          </Link>
          <button className="admin-item-card__delete" onClick={onClickDelete}>
            <MdDelete />
          </button>
        </div>
      </div>
      {showOption && (
        <div className="admin-item-card__option">
          <p>
            delete it. <br /> are you sure?
          </p>
          <div className="admin-item-card__option__btns">
            {loading ? (
              <button className="admin-item-card__option__yes">
                <Loading />
              </button>
            ) : (
              <button
                className="admin-item-card__option__yes"
                onClick={deleteItem}
              >
                yes
              </button>
            )}
            <button
              className="admin-item-card__option__no"
              onClick={onClickDelete}
            >
              no
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminItemCard;
