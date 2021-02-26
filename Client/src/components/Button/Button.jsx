import { BsArrowRight } from 'react-icons/bs';
import './Button.scss';

const Button = ({ type = 'button', btnText, icon = false, ...rest }) => {
  return (
    <button type={type} className="btn" {...rest}>
      {btnText}
      {icon && (
        <span>
          <BsArrowRight />
        </span>
      )}
    </button>
  );
};

export default Button;
