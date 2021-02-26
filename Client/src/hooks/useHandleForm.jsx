import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinAction, signupAction } from '../redux/actions/authActions';

const useHandleForm = (formInput, formType) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(formInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newState = { ...formState };
    newState[name] = value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === 'signup') {
      dispatch(signupAction(formState, history));
    } else {
      dispatch(signinAction(formState, history));
    }
  };

  return [formState, handleInputChange, handleSubmit];
};

export default useHandleForm;
