import { FaCreditCard, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoLogoPaypal } from 'react-icons/io5';

const OrderPayment = ({ orderDetail }) => {
  return (
    <div className="pay-now-page__payment">
      <h1>Payment Method</h1>
      <label
        htmlFor="payment"
        className="pay-now-page__payment-type pay-now-page__payment-active"
      >
        <small>
          <IoIosCheckmarkCircle />
        </small>
        <p>
          {orderDetail?.paymentMethod === 'stripe' ? (
            <>
              <span>
                <FaCreditCard />
              </span>
              Credit / Debit Card
            </>
          ) : orderDetail?.paymentMethod === 'paypal' ? (
            <>
              <span>
                <IoLogoPaypal />
              </span>
              pay with paypal
            </>
          ) : (
            <>
              <span>
                <FaMoneyCheckAlt />
              </span>
              cash on delivery
            </>
          )}
        </p>
      </label>
    </div>
  );
};

export default OrderPayment;
