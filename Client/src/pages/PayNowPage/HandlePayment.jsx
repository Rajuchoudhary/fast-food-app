import { useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';
import Success from '../../components/Notification/Success/Success';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import { userPayForOrderAction } from '../../redux/actions/userActions';
import Axios from '../../redux/api/axios';
import { deliveryCost, subTotal } from '../../utils/cartFunctions';

const HandlePayment = ({ orderDetail }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sdkReady, setSdkReady] = useState(false);

  const { loading, error } = useSelector((state) => state.userPay);

  useEffect(() => {
    const paypalScript = async () => {
      const { data: clientId } = await Axios.get('/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;

      script.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(script);
    };

    paypalScript();
  }, []);

  const handlePayment = (orderId, paymentMethod, transactionId) => {
    dispatch(
      userPayForOrderAction({ orderId, paymentMethod, transactionId }, history)
    );
  };

  return (
    <>
      <ResponseHandler error={error} />
      <div className="pay-now-page__summery--btn">
        {orderDetail?.isPaid ? (
          <Success msg="Order has been paid!" />
        ) : (
          sdkReady &&
          (loading ? (
            <Loading big />
          ) : orderDetail?.paymentMethod === 'paypal' ? (
            <PayPalButton
              amount={
                subTotal(orderDetail?.items) +
                deliveryCost(subTotal(orderDetail?.items))
              }
              onSuccess={(data) => {
                handlePayment(
                  orderDetail?._id,
                  orderDetail?.paymentMethod,
                  data?.id
                );
              }}
            />
          ) : orderDetail?.paymentMethod === 'stripe' ? (
            <StripeCheckout
              token={(token) =>
                handlePayment(
                  orderDetail?._id,
                  orderDetail?.paymentMethod,
                  token.id
                )
              }
              stripeKey="pk_test_51HavCiC1nShCdeevE63PgtXXHrdSTSpmazAaROjrGEkXCfjCMtay56yj14iFpedQ5ODbSplLBrxc6Yb1CFFRWAiE00l2GZLBe0"
              email="youremail@gmail.com"
              amount={orderDetail?.totalCost * 100}
            />
          ) : (
            <Button
              btnText="Complete Order"
              onClick={() =>
                handlePayment(
                  orderDetail?._id,
                  orderDetail?.paymentMethod,
                  'COD'
                )
              }
            />
          ))
        )}
      </div>
    </>
  );
};

export default HandlePayment;
