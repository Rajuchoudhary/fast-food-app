import { BsDash, BsPlus } from 'react-icons/bs';
import './CardButtons.scss';

const CardButtons = ({ qty, setQty }) => {
  const onIncrement = () => {
    setQty(qty + 1);
  };
  const onDecrement = () => {
    if (qty === 1) {
      return;
    }
    setQty(qty - 1);
  };

  return (
    <div className="card-buttons">
      <button onClick={onDecrement}>
        <BsDash />
      </button>
      <p>{qty}</p>
      <button onClick={onIncrement}>
        <BsPlus />
      </button>
    </div>
  );
};

export default CardButtons;
