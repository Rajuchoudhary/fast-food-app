import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../../../components/FormElements/Select/Select';
import TextArea from '../../../components/FormElements/TextArea/TextArea';
import Loading from '../../../components/Loading/Loading';
import { userAddReviewAction } from '../../../redux/actions/userActions';

const OrderFeedbackForm = ({ orderId, data, isDelivered }) => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.userAddReview);

  const [formState, setFormState] = useState({
    rating: '',
    comment: '',
    itemId: data?.id,
    orderId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userAddReviewAction(formState));
  };

  return (
    <div>
      <form className="order-item__form" onSubmit={handleSubmit}>
        <Select
          name="rating"
          value={formState['rating'] ? formState['rating'] : ''}
          onChange={handleChange}
          msg={error?.errors?.map(
            (item, index) => item.field === 'rating' && `${item.message} `
          )}
        />
        <TextArea
          placeholder="your comment..."
          rows="2"
          name="comment"
          value={formState['comment'] ? formState['comment'] : ''}
          onChange={handleChange}
          msg={error?.errors?.map(
            (item, index) => item.field === 'comment' && `${item.message} `
          )}
        />
        {loading ? (
          <button>{<Loading />}</button>
        ) : isDelivered ? (
          <button type="submit">submit</button>
        ) : (
          <h1>Wait untill you receive it.</h1>
        )}
      </form>
    </div>
  );
};

export default OrderFeedbackForm;
