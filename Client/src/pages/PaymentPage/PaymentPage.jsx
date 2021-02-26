import { useState } from 'react';
import { FaCreditCard, FaMoneyCheckAlt } from 'react-icons/fa';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { IoLogoPaypal } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import useTitle from '../../hooks/useTitle';
import { addPaymentMethodAction } from '../../redux/actions/cartActions';
import CartPageHolder from '../CartPageHolder/CartPageHolder';
import CartSection from '../CartSection/CartSection';
import './PaymentPage.scss';

const PaymentPage = () => {
  useTitle('Payment Options');
  const history = useHistory();
  const dispatch = useDispatch();
  const { items, paymentMethod } = useSelector((state) => state.cart);

  const [formState, setFormState] = useState({
    paymentMethod: paymentMethod ? paymentMethod : 'cod',
  });

  const handlePaymentChange = (e) => {
    const text = e.target.value;
    setFormState({ ...formState, paymentMethod: text });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPaymentMethodAction(formState.paymentMethod));
    history.push('/delivery');
  };

  return (
    <CartPageHolder
      step={2}
      left={<CartSection backLink="/cart" backLinkText="back to cart" />}
    >
      {items?.length === 0 ? null : (
        <div className="payment-page">
          <h2 className="payment-page__title">payment options</h2>
          <form className="payment-page__form" onSubmit={handleSubmit}>
            <div className="payment-page__payment-options">
              <label
                htmlFor="stripe"
                className={`payment-page__payment-type ${
                  formState['paymentMethod'] === 'stripe'
                    ? 'payment-page__payment-active'
                    : ''
                }`}
              >
                <small>
                  <IoIosCheckmarkCircle />
                </small>
                <p>
                  <span>
                    <FaCreditCard />
                  </span>
                  Credit / Debit Card
                </p>
                <input
                  type="radio"
                  hidden
                  id="stripe"
                  name="paymentMethod"
                  value="stripe"
                  checked={formState['paymentMethod'] === 'stripe'}
                  onChange={handlePaymentChange}
                />
              </label>

              <label
                htmlFor="paypal"
                className={`payment-page__payment-type ${
                  formState['paymentMethod'] === 'paypal'
                    ? 'payment-page__payment-active'
                    : ''
                }`}
              >
                <small>
                  <IoIosCheckmarkCircle />
                </small>
                <p>
                  <span>
                    <IoLogoPaypal />
                  </span>
                  pay with paypal
                </p>
                <input
                  type="radio"
                  hidden
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formState['paymentMethod'] === 'paypal'}
                  onChange={handlePaymentChange}
                />
              </label>

              <label
                htmlFor="cod"
                className={`payment-page__payment-type ${
                  formState['paymentMethod'] === 'cod'
                    ? 'payment-page__payment-active'
                    : ''
                }`}
              >
                <small>
                  <IoIosCheckmarkCircle />
                </small>
                <p>
                  <span>
                    <FaMoneyCheckAlt />
                  </span>
                  cash on delivery
                </p>
                <input
                  type="radio"
                  hidden
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={formState['paymentMethod'] === 'cod'}
                  onChange={handlePaymentChange}
                />
              </label>
            </div>
            <div className="payment-page__form--btn">
              <Button type="submit" icon={true} btnText="delivery details" />
            </div>
          </form>
        </div>
      )}
    </CartPageHolder>
  );
};

export default PaymentPage;
