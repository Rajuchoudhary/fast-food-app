import { BsClipboardData } from 'react-icons/bs';
import './Message.scss';

const Message = ({ msg }) => {
  return (
    <h1 className="message">
      <span>
        <BsClipboardData />
      </span>
      {msg}
    </h1>
  );
};

export default Message;
