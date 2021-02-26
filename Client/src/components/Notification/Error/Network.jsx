import { IoIosWarning } from 'react-icons/io';
import './Error.scss';

const Network = ({ msg }) => {
  return (
    <div className="network">
      <span>
        <IoIosWarning />
      </span>
      {msg}
    </div>
  );
};

export default Network;
