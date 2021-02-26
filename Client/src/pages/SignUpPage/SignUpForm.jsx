import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import useHandleForm from '../../hooks/useHandleForm';
import { USER_SIGNUP_RESET_STATE } from '../../redux/constants/authConstants';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.userSignup);

  const [formState, handleInputChange, handleSubmit] = useHandleForm(
    {
      name: '',
      email: '',
      mobileNo: 0,
      password: '',
      confirmPassword: '',
    },
    'signup'
  );

  useEffect(() => {
    dispatch({ type: USER_SIGNUP_RESET_STATE });
    return () => {
      dispatch({ type: USER_SIGNUP_RESET_STATE });
    };
  }, [dispatch]);

  return (
    <form className="signup-page__form" onSubmit={handleSubmit}>
      <ResponseHandler error={error} data={data} />

      <Input
        name="name"
        value={formState['name'] ? formState['name'] : ''}
        msg={error?.errors?.map(
          (item, index) => item.field === 'name' && `${item.message} `
        )}
        onChange={handleInputChange}
        placeholder="name..."
      />
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
        name="mobileNo"
        value={formState['mobileNo'] ? formState['mobileNo'] : ''}
        onChange={handleInputChange}
        msg={error?.errors?.map(
          (item, index) => item.field === 'mobileNo' && `${item.message} `
        )}
        type="number"
        placeholder="mobile no..."
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
        <Button type="submit" btnText="sign up" />
      )}
    </form>
  );
};

export default SignUpForm;
