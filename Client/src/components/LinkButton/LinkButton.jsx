import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

export const LinkButtonGreen = ({ btnText, btnLink = '/' }) => {
  return (
    <Link to={btnLink} className="link-btn link-btn__green">
      {btnText}
    </Link>
  );
};
export const LinkButtonBlack = ({ btnText, btnLink = '/' }) => {
  return (
    <Link to={btnLink} className="link-btn link-btn__black">
      <span>
        <BsArrowLeft />
      </span>
      {btnText}
    </Link>
  );
};
