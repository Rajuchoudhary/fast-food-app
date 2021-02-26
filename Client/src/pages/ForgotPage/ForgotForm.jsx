import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import { forgotAction } from '../../redux/actions/authActions';
import { USER_FORGOT_RESET_STATE } from '../../redux/constants/authConstants';

const ForgotForm = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.userForgot);

  const [formState, setFormState] = useState({
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotAction(formState));
  };

  useEffect(() => {
    dispatch({ type: USER_FORGOT_RESET_STATE });
    return () => {
      dispatch({ type: USER_FORGOT_RESET_STATE });
    };
  }, [dispatch]);

  return (
    <form className="forgot-page__form" onSubmit={handleSubmit}>
      <ResponseHandler error={error} data={data} />
      <Input
        name="email"
        value={formState['email'] ? formState['email'] : ''}
        onChange={handleInputChange}
        msg={error?.errors?.map(
          (item, index) => item.field === 'email' && `${item.message} `
        )}
        type="email"
        placeholder="email..."
      />
      {loading ? (
        <Button btnText={<Loading />} />
      ) : (
        <Button type="submit" btnText="reset now" />
      )}
    </form>
  );
};

export default ForgotForm;
