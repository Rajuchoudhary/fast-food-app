import Steps from '../../components/Steps/Steps';
import './CartPageHolder.scss';

const CartPageHolder = ({ left, children, step }) => {
  return (
    <div className="cart-page-holder">
      <div className="cart-page-holder__container">
        <div className="cart-page-holder__steps">
          <Steps step={step} />
        </div>
        <div className="cart-page-holder__content">
          <div className="cart-page-holder__left">{left}</div>
          <div className="cart-page-holder__right">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CartPageHolder;
