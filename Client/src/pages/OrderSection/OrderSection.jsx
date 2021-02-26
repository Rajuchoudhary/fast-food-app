import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { LinkButtonBlack } from '../../components/LinkButton/LinkButton';
import Loading from '../../components/Loading/Loading';
import Message from '../../components/Notification/Message/Message';
import OrderItem from '../../components/OrderItem/OrderItem';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import { userCencelOrderAction } from '../../redux/actions/userActions';
import { CLEAR_CANCEL_ORDER_ERROR } from '../../redux/constants/userConstants';
import { totalItems } from '../../utils/cartFunctions';
import './OrderSection.scss';

const OrderSection = ({ removeAction, cencelBtn = false }) => {
  const { orderId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { orderDetail } = useSelector((state) => state.order);
  const { loading, data, error } = useSelector((state) => state.cancelOrder);

  useEffect(() => {
    dispatch({ type: CLEAR_CANCEL_ORDER_ERROR });
    return () => {
      dispatch({ type: CLEAR_CANCEL_ORDER_ERROR });
    };
  }, [dispatch]);
  const cancelOrder = () => {
    dispatch(userCencelOrderAction(orderId, history));
  };

  return (
    <>
      {orderDetail?.items?.length === 0 ? (
        <Message msg="Please check your unpaid orders" />
      ) : (
        <>
          <h2 className="order-section__title">
            Your order ({totalItems(orderDetail?.items)})
          </h2>

          <ResponseHandler error={error} data={data} />

          <div className="order-section__items">
            {orderDetail?.items?.length > 0 &&
              orderDetail?.items?.map((item) => {
                return (
                  <OrderItem
                    key={item.id}
                    data={item}
                    removeAction={removeAction}
                  />
                );
              })}
          </div>
          {cencelBtn ? (
            orderDetail?.isPaid ? null : loading ? (
              <button className="order-section__btn">
                <Loading />
              </button>
            ) : (
              orderDetail?.items?.length > 0 && (
                <button className="order-section__btn" onClick={cancelOrder}>
                  cancel order
                </button>
              )
            )
          ) : orderDetail?.isPaid ? null : (
            <LinkButtonBlack
              btnLink={`/update-order/${orderDetail?._id}`}
              btnText="edit order"
            />
          )}
        </>
      )}
    </>
  );
};

export default OrderSection;
