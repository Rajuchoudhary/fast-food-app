import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../../../components/Rating/Rating';
import { USER_CLEAR_REVIEW_STATE } from '../../../redux/constants/userConstants';
import OrderFeedbackForm from './OrderFeedbackForm';

const OrderItem = ({ data, orderId, isDelivered }) => {
  const dispatch = useDispatch();

  const [fromState, setFormState] = useState(false);

  const toggleForm = () => {
    dispatch({ type: USER_CLEAR_REVIEW_STATE });
    setFormState(!fromState);
  };

  useEffect(() => {
    if (data?.review) {
      setFormState(false);
    }
    dispatch({ type: USER_CLEAR_REVIEW_STATE });
    return () => {
      dispatch({ type: USER_CLEAR_REVIEW_STATE });
    };
  }, [dispatch, data]);

  return (
    <div className="order-item">
      <div className="order-item__content">
        <Link target="_blank" to={`/item-detail/${data?.id}`}>
          {data?.name}
        </Link>
        <div className="order-item__detail">
          <div>
            <p>
              price: <span>${data?.price}</span>
            </p>
            <small>X</small>
            <p>
              Quantity: <span>{data?.qty}</span>
            </p>
          </div>
          <p>
            Total Cost: <span>${data?.price * data?.qty}</span>
          </p>
        </div>

        {data?.review ? (
          <div className="order-item__rating">
            <Rating value={data?.review?.rating} />
            <p>{data?.review?.comment}</p>
          </div>
        ) : (
          <button onClick={toggleForm} className="order-item__rateBtn">
            rate now
          </button>
        )}
        {fromState ? (
          <OrderFeedbackForm
            orderId={orderId}
            data={data}
            isDelivered={isDelivered}
          />
        ) : null}
      </div>
    </div>
  );
};

export default OrderItem;
