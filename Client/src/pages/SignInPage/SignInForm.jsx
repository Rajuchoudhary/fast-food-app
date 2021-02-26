import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import useHandleForm from '../../hooks/useHandleForm';
import { USER_SIGNIN_RESET_STATE } from '../../redux/constants/authConstants';

const SignInForm = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.userSignin);

  const [formState, handleInputChange, handleSubmit] = useHandleForm(
    {
      email: '',
      password: '',
    },
    'signUp'
  );

  useEffect(() => {
    dispatch({ type: USER_SIGNIN_RESET_STATE });
    return () => {
      dispatch({ type: USER_SIGNIN_RESET_STATE });
    };
  }, [dispatch]);

  return (
    <form className="signin-page__form" onSubmit={handleSubmit}>
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
      {loading ? (
        <Button btnText={<Loading />} />
      ) : (
        <Button type="submit" btnText="sign in" />
      )}
      <Link className="signin-page__link" to="/forgot">
        Forgot password?
      </Link>
    </form>
  );
};

export default SignInForm;
