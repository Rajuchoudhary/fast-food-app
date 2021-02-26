import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { userGetOrderDetailAction } from '../../redux/actions/userActions';
import { CLEAR_GET_ORDER_DETAIL_ERROR } from '../../redux/constants/userConstants';
import OrderPageHolder from '../OrderPageHolder/OrderPageHolder';
import OrderSection from '../OrderSection/OrderSection';
import OrderSummery from './OrderSummery';
import './UpdateOrderPage.scss';
import UpdatePaymentAndDelivery from './UpdatePaymentAndDelivery';

const UpdateOrderPage = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderDetail } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch({ type: CLEAR_GET_ORDER_DETAIL_ERROR });
    dispatch(userGetOrderDetailAction(orderId));
    return () => {
      dispatch({ type: CLEAR_GET_ORDER_DETAIL_ERROR });
    };
  }, [dispatch, orderId]);

  return (
    <OrderPageHolder
      left={<OrderSection removeAction={false} cencelBtn={true} />}
    >
      {!orderDetail ? (
        <Loading big={true} />
      ) : orderDetail?.items ? (
        <>
          <OrderSummery orderDetail={orderDetail} />
          <UpdatePaymentAndDelivery
            orderDetail={orderDetail}
            orderId={orderId}
          />
        </>
      ) : null}
    </OrderPageHolder>
  );
};

export default UpdateOrderPage;
