import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemImg from '../../../assets/imgae/burger.png';
import Button from '../../../components/Button/Button';
import Input from '../../../components/FormElements/Input/Input';
import Select from '../../../components/FormElements/Select/Select';
import TextArea from '../../../components/FormElements/TextArea/TextArea';
import Loading from '../../../components/Loading/Loading';
import ResponseHandler from '../../../components/ResponseHandler/ResponseHandler';
import { adminAddItemAction } from '../../../redux/actions/adminActions';
import { ADMIN_ADD_ITEM_RESET_STATE } from '../../../redux/constants/adminConstants';
import { resizeFile } from '../../../utils/ResizeFile';

const AddItemForm = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.adminAddItem);

  const { data: listData } = useSelector((state) => state.getCategoryList);

  const [formState, setFormState] = useState({
    image: '',
    itemName: '',
    price: 0,
    description: '',
    category: listData?.map((item) => item.category)[0],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADMIN_ADD_ITEM_RESET_STATE });
    dispatch(adminAddItemAction(formState));
  };

  useEffect(() => {
    dispatch({ type: ADMIN_ADD_ITEM_RESET_STATE });
    return () => {
      dispatch({ type: ADMIN_ADD_ITEM_RESET_STATE });
    };
  }, [dispatch]);

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

  useEffect(() => {
    return () => {
      dispatch({ type: ADMIN_ADD_ITEM_RESET_STATE });
    };
  }, [dispatch]);

  return (
    <form className="add-item-page__form" onSubmit={handleSubmit}>
      <ResponseHandler error={error} data={data} />

      {listData ? (
        <>
          <div className="add-item-page__photo">
            <img
              src={uploadImg ? URL.createObjectURL(uploadImg) : ItemImg}
              alt=""
            />
            <label htmlFor="upload" className="add-item-page__form__btn">
              upload
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
            msg={error?.errors?.map(
              (item, index) => item.field === 'itemName' && `${item.message} `
            )}
          />
          <Input
            name="price"
            value={formState['price'] ? formState['price'] : ''}
            onChange={handleInputChange}
            placeholder="Price..."
            msg={error?.errors?.map(
              (item, index) => item.field === 'price' && `${item.message} `
            )}
          />
          <Select
            list={listData?.map((item) => item.category)}
            name="category"
            onChange={handleInputChange}
            value={formState['category'] ? formState['category'] : ''}
            msg={error?.errors?.map(
              (item, index) => item.field === 'category' && `${item.message} `
            )}
          />
          <TextArea
            rows={6}
            name="description"
            value={formState['description'] ? formState['description'] : ''}
            onChange={handleInputChange}
            placeholder="item description..."
            msg={error?.errors?.map(
              (item, index) =>
                item.field === 'description' && `${item.message} `
            )}
          />
          {loading ? (
            <Button btnText={<Loading />} />
          ) : (
            <Button type="submit" btnText="add item" />
          )}
        </>
      ) : (
        <h1>No Category found!</h1>
      )}
    </form>
  );
};

export default AddItemForm;
