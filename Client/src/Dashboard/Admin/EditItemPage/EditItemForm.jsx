import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemImg from '../../../assets/imgae/burger.png';
import Button from '../../../components/Button/Button';
import Input from '../../../components/FormElements/Input/Input';
import Select from '../../../components/FormElements/Select/Select';
import TextArea from '../../../components/FormElements/TextArea/TextArea';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import {
  adminGetItemDetailAction,
  adminUpdateItemAction,
} from '../../../redux/actions/adminActions';
import { ADMIN_UPDATE_ITEM_RESET_STATE } from '../../../redux/constants/adminConstants';
import { resizeFile } from '../../../utils/ResizeFile';

const EditItemForm = () => {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const { data: categoryData } = useSelector((state) => state.getCategoryList);

  const { loading, data, error } = useSelector(
    (state) => state.adminGetItemDetail
  );
  const {
    loading: updateLoading,
    data: updateData,
    error: updateError,
  } = useSelector((state) => state.adminUpdateItem);

  useEffect(() => {
    dispatch({ type: ADMIN_UPDATE_ITEM_RESET_STATE });
    dispatch(adminGetItemDetailAction(itemId));
    return () => {
      dispatch({ type: ADMIN_UPDATE_ITEM_RESET_STATE });
    };
  }, [dispatch, itemId]);

  const [formState, setFormState] = useState({
    image: '',
    itemName: '',
    price: 0,
    description: '',
    category: '',
    publicId: '',
  });

  useEffect(() => {
    if (!loading && data?.price) {
      setFormState({
        image: data?.image?.url,
        itemName: data?.itemName,
        price: data?.price,
        description: data?.description,
        category: data?.category,
        publicId: data?.image?.public_id,
      });
    }
  }, [data, loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADMIN_UPDATE_ITEM_RESET_STATE });
    dispatch(adminUpdateItemAction(itemId, formState));
  };

  const [uploadImg, setUploadImg] = useState(null);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    let res;

    if (file) {
      setUploadImg(file);
      res = await resizeFile(file, 320, 180, file.type.split('/')[1]);
    }
    setFormState({ ...formState, image: res });
  };

  return (
    <>
      {loading ? (
        <Loading big={true} />
      ) : (
        <form className="edit-item-page__form" onSubmit={handleSubmit}>
          <ResponseHandler error={updateError} data={updateData} />
          <ResponseHandler error={error} data={data} />

          {categoryData && (
            <>
              <div className="edit-item-page__photo">
                <img
                  src={
                    formState.image
                      ? formState.image
                      : uploadImg
                      ? URL.createObjectURL(uploadImg)
                      : ItemImg
                  }
                  alt=""
                />
                <label htmlFor="upload" className="edit-item-page__form__btn">
                  upload{' '}
                  <input
                    type="file"
                    hidden
                    id="upload"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              {error?.errors?.map(
                (item, index) =>
                  item.field === 'image' && (
                    <span key={item.message} className="error">
                      {item.message}
                    </span>
                  )
              )}
              <Input
                name="itemName"
                value={formState['itemName'] ? formState['itemName'] : ''}
                onChange={handleInputChange}
                placeholder="item name..."
                msg={updateError?.errors?.map(
                  (item, index) =>
                    item.field === 'itemName' && `${item.message} `
                )}
              />
              <Input
                name="price"
                value={formState['price'] ? formState['price'] : ''}
                onChange={handleInputChange}
                placeholder="Price..."
                msg={updateError?.errors?.map(
                  (item, index) => item.field === 'price' && `${item.message} `
                )}
              />
              <Select
                list={categoryData?.map((item) => item.category)}
                name="category"
                onChange={handleInputChange}
                value={formState['category'] ? formState['category'] : ''}
                msg={updateError?.errors?.map(
                  (item, index) =>
                    item.field === 'category' && `${item.message} `
                )}
              />
              <TextArea
                rows={6}
                name="description"
                value={formState['description'] ? formState['description'] : ''}
                onChange={handleInputChange}
                placeholder="item description..."
                msg={updateError?.errors?.map(
                  (item, index) =>
                    item.field === 'description' && `${item.message} `
                )}
              />
              {loading || updateLoading ? (
                <Button btnText={<Loading />} />
              ) : (
                <Button type="submit" btnText="update item" />
              )}
            </>
          )}
        </form>
      )}
    </>
  );
};

export default EditItemForm;
