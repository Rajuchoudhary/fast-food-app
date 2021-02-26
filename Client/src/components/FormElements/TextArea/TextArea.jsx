import './TextArea.scss';

const TextArea = ({ placeholder = 'placeholder text', msg, ...rest }) => {
  return (
    <>
      <div className="textarea">
        <textarea
          className="textarea__text"
          name=""
          id=""
          cols="30"
          rows="10"
          {...rest}
          placeholder={placeholder}
        ></textarea>
      </div>
      {msg && <span className="error">{msg}</span>}
    </>
  );
};
export default TextArea;
