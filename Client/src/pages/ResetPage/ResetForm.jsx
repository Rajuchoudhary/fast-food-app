import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import { resetAction } from '../../redux/actions/authActions';
import { USER_RESET_RESET_STATE } from '../../redux/constants/authConstants';

const ResetForm = () => {
  const history = useHistory();
  const { token } = useParams();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.userReset);

  const [formState, setFormState] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      resetAction(
        {
          resetToken: token,
          password: formState.password,
          confirmPassword: formState.confirmPassword,
        },
        history
      )
    );
  };

  useEffect(() => {
    return () => {
      dispatch({ type: USER_RESET_RESET_STATE });
    };
  }, [dispatch]);

  return (
    <form className="reset-page__form" onSubmit={handleSubmit}>
      <ResponseHandler error={error} data={data} />

      <Input
        name="password"
        value={formState['password'] ? formState['password'] : ''}
        onChange={handleInputChange}
        msg={error?.errors?.map(
          (item, index) => item.field === 'password' && `${item.message} `
        )}
        type="password"
        placeholder="password..."
      />
      <Input
        name="confirmPassword"
        value={formState['confirmPassword'] ? formState['confirmPassword'] : ''}
        onChange={handleInputChange}
        msg={error?.errors?.map(
          (item, index) =>
            item.field === 'confirmPassword' && `${item.message} `
        )}
        type="password"
        placeholder="confirm password..."
      />
      {loading ? (
        <Button btnText={<Loading />} />
      ) : (
        <Button type="submit" btnText="update password" />
      )}
    </form>
  );
};

export default ResetForm;
