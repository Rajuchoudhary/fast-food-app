import './Select.scss';

const Select = ({ name, value, onChange, list, msg }) => {
  return (
    <>
      <div className="select">
        <select name={name} value={value} onChange={onChange}>
          {list?.length > 0 ? (
            list?.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })
          ) : (
            <>
              <option value="">select</option>
              <option value="1">bad</option>
              <option value="2">ok</option>
              <option value="3">good</option>
              <option value="4">very good</option>
              <option value="5">delicious</option>
            </>
          )}
        </select>
      </div>
      {msg && <span className="error">{msg}</span>}
    </>
  );
};

export default Select;
