import './Input.scss';

const Input = ({
  name,
  value,
  onChange,
  msg,
  type = 'text',
  placeholder = 'placeholder text',
}) => {
  return (
    <>
      <div className="input">
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="input__text"
          type={type}
          placeholder={placeholder}
        />
      </div>
      {msg && <span className="error">{msg}</span>}
    </>
  );
};

export default Input;
