import { IoIosCheckmarkCircle } from 'react-icons/io';
import './Success.scss';

const Success = ({ msg, children }) => {
  return (
    <div className="success-msg">
      <span>
        <IoIosCheckmarkCircle />
      </span>
      {msg}
      {children}
    </div>
  );
};

export default Success;
