import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  addToCartAction,
  removeFromCartAction,
} from '../../redux/actions/cartActions';
import CardButtons from '../CardAction/CardButtons';
import './CartItem.scss';

const CartItem = ({ data, removeAction = false }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(data?.qty);
  const [itemData] = useState(data);

  useEffect(() => {
    dispatch(addToCartAction({ ...itemData, qty }));
  }, [dispatch, qty, itemData]);

  const removeFromCart = (id) => {
    dispatch(removeFromCartAction(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__photo">
        <img src={data?.image} alt="" />
        af
      </div>
      <div className="cart-item__text">
        <Link
          to={`/item-detail/${data?.id}`}
          target="_blank"
          className="cart-item__title"
        >
          {data?.name}
        </Link>
      </div>
      <p className="cart-item__price">
        ${data?.price} <small>x</small> {qty} ={' '}
        <span>${data?.price * data?.qty}</span>
      </p>
      {!removeAction && (
        <div className="cart-action">
          <CardButtons qty={qty} setQty={setQty} />
          <button
            className="cart-action__btn cart-action__delete"
            onClick={() => removeFromCart(data.id)}
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
