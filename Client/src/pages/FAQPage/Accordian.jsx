import { useState } from 'react';
import { BsDash, BsPlus } from 'react-icons/bs';

const Accordian = () => {
  const [state, setState] = useState(true);

  const onClick = () => {
    setState(!state);
  };

  return (
    <div className="accordian">
      <div className="accordian__header">
        <h3>Lorem Ipsum is simply dummy text of the printing?</h3>

        <button onClick={onClick}>{state ? <BsPlus /> : <BsDash />}</button>
      </div>
      <p
        className={`accordian__description ${state ? 'accordian__close' : ''}`}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English.
      </p>
    </div>
  );
};

export default Accordian;
