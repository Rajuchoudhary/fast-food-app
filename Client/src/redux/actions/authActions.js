import * as authConstants from '../constants/authConstants';

export const signupAction = (data, history) => {
  return {
    type: authConstants.USER_SIGNUP_REQUEST,
    payload: { data, history },
  };
};
export const signinAction = (data, history) => {
  return {
    type: authConstants.USER_SIGNIN_REQUEST,
    payload: { data, history },
  };
};

export const forgotAction = (data) => ({
  type: authConstants.USER_FORGOT_REQUEST,
  payload: data,
});

export const resetAction = (data, history) => ({
  type: authConstants.USER_RESET_REQUEST,
  payload: { data, history },
});

export const signoutAction = () => ({
  type: authConstants.CLEAR_USER_INFO,
});
