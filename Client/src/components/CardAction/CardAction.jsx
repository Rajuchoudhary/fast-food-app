import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../redux/actions/cartActions';
import './CardAction.scss';
import CardButtons from './CardButtons';

const CardAction = ({ data }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const [Loading, setLoading] = useState(false);

  if (Loading) {
    setTimeout(() => {
      setLoading(!Loading);
    }, 500);
  }

  const addToCart = () => {
    setLoading(!Loading);
    dispatch(
      addToCartAction({
        id: data?._id,
        name: data?.itemName,
        image: data?.image?.url,
        description: data?.description,
        price: data?.price,
        qty,
      })
    );
  };

  return (
    <div className="card-action">
      <CardButtons qty={qty} setQty={setQty} />
      <p>${data?.price}</p>
      {Loading ? (
        <button className="card-action__btn card-action__add-to-cart">
          <span className="card-action__add-to-cart--spinner">
            <ImSpinner8 />
          </span>
        </button>
      ) : (
        <button
          className="card-action__btn card-action__add-to-cart"
          onClick={addToCart}
        >
          <FaCartPlus />
        </button>
      )}
    </div>
  );
};

export default CardAction;
