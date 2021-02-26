import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/FormElements/Input/Input';
import Loading from '../../components/Loading/Loading';
import ResponseHandler from '../../components/ResponseHandler/ResponseHandler';
import { adminSigninAction } from '../../redux/actions/adminActions';
import { ADMIN_SIGNIN_RESET_STATE } from '../../redux/constants/adminConstants';

const AdminSignInForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.adminSignin);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminSigninAction(formState, history));
  };

  useEffect(() => {
    dispatch({ type: ADMIN_SIGNIN_RESET_STATE });
    return () => {
      dispatch({ type: ADMIN_SIGNIN_RESET_STATE });
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
    </form>
  );
};

export default AdminSignInForm;
