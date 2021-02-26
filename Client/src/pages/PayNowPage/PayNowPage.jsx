import { useSelector } from 'react-redux';
import Message from '../../components/Notification/Message/Message';
import useTitle from '../../hooks/useTitle';
import CartPageHolder from '../CartPageHolder/CartPageHolder';
import OrderSection from '../OrderSection/OrderSection';
import ThankyouPage from '../ThankyouPage/ThankyouPage';
import HandlePayment from './HandlePayment';
import OrderDelivery from './OrderDelivery';
import OrderDetail from './OrderDetail';
import OrderPayment from './OrderPayment';
import './PayNowPage.scss';

const PayNowPage = () => {
  useTitle('Pay Now');

  const { orderDetail } = useSelector((state) => state.order);

  return (
    <>
      {orderDetail?.isPaid ? (
        <ThankyouPage />
      ) : (
        <CartPageHolder
          step={4}
          left={
            orderDetail?.items?.length > 0 ? (
              <OrderSection
                backLink="/update-order"
                backLinkText="edit order"
                removeAction={true}
              />
            ) : (
              <Message msg="Please add items to your cart" />
            )
          }
        >
          {orderDetail?.items?.length > 0 && (
            <div className="pay-now-page">
              <h2 className="pay-now-page__title">order details</h2>
              <div className="pay-now-page__summery">
                <h1>Summery</h1>
                <OrderDetail orderDetail={orderDetail} />
                <OrderDelivery orderDetail={orderDetail} />
                <OrderPayment orderDetail={orderDetail} />
                <HandlePayment orderDetail={orderDetail} />
              </div>
            </div>
          )}
        </CartPageHolder>
      )}
    </>
  );
};

export default PayNowPage;
