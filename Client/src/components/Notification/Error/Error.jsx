import { IoIosCloseCircle } from 'react-icons/io';
import './Error.scss';

const Error = ({ msg }) => {
  return (
    <div className="error-msg">
      <span>
        <IoIosCloseCircle />
      </span>
      {msg}
    </div>
  );
};

export default Error;
