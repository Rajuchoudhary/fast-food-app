import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  addToOrderAction,
  removeFromOrderAction,
} from '../../redux/actions/orderActions';
import CardButtons from '../CardAction/CardButtons';
import './OrderItem.scss';

const OrderItem = ({ data, removeAction = false }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(data?.qty);
  const [itemData, setItemData] = useState(data);
  // let itemData = data;

  useEffect(() => {
    dispatch(addToOrderAction({ ...itemData, qty }));
  }, [dispatch, qty, itemData]);

  const removeFromOrder = (id) => {
    dispatch(removeFromOrderAction(id));
  };

  return (
    <div className="order-item2">
      <div className="order-item2__photo">
        <img src={data?.image} alt="" />
      </div>
      <div className="order-item2__text">
        <h2 className="order-item2__title">{data?.name}</h2>
        <p className="order-item2__description">{data?.description}</p>
      </div>
      <p className="order-item2__price">
        ${data?.price} <small>x</small> {qty} ={' '}
        <span>${data?.price * data?.qty}</span>
      </p>
      {!removeAction && (
        <div className="order-action">
          <CardButtons qty={qty} setQty={setQty} />
          <button
            className="order-action__btn order-action__delete"
            onClick={() => removeFromOrder(data.id)}
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
