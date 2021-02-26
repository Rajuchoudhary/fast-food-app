import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import useTitle from '../../hooks/useTitle';
import { deliveryCost, subTotal, totalItems } from '../../utils/cartFunctions';
import CartPageHolder from '../CartPageHolder/CartPageHolder';
import CartSection from '../CartSection/CartSection';
import './CartPage.scss';

const CartPage = () => {
  useTitle('Your Cart');
  const history = useHistory();
  const { items } = useSelector((state) => state.cart);

  const toDelivery = () => {
    history.push('/payment');
  };

  return (
    <CartPageHolder
      step={1}
      left={<CartSection backLink="/menu" backLinkText="back to menu" />}
    >
      {items?.length === 0 ? null : (
        <div className="cart-page">
          <h2 className="cart-page__title">summery</h2>
          <div className="cart-page__detail">
            <p>
              Total Items <span>{totalItems(items)}</span>
            </p>
            <p>
              Sub total <span>${subTotal(items)} USD</span>
            </p>
            <p>
              Delivery Cost <span>${deliveryCost(subTotal(items))} USD</span>
            </p>
            <p className="cart-page__detail--total">
              Total cost{' '}
              <span>
                ${subTotal(items) + deliveryCost(subTotal(items))} USD
              </span>
            </p>
          </div>
          <div className="cart-page__btn">
            <Button icon={true} btnText="payment" onClick={toDelivery} />
          </div>
        </div>
      )}
    </CartPageHolder>
  );
};

export default CartPage;
