import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import { LinkButtonBlack } from '../../components/LinkButton/LinkButton';
import Message from '../../components/Notification/Message/Message';
import './CartSection.scss';

const CartSection = ({ backLink, backLinkText, removeAction }) => {
  const { items } = useSelector((state) => state.cart);

  return (
    <>
      {items?.length === 0 ? (
        <Message msg="Please add items to your cart" />
      ) : (
        <>
          <h2 className="cart-section__title">your cart ({items?.length})</h2>

          <div className="cart-section__items">
            {items?.length > 0 &&
              items?.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    data={item}
                    removeAction={removeAction}
                  />
                );
              })}
          </div>
          <div className="cart-section__btn">
            <LinkButtonBlack btnLink={`${backLink}`} btnText={backLinkText} />
          </div>
        </>
      )}
    </>
  );
};

export default CartSection;
