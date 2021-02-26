import * as authConstants from '../constants/authConstants';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const userSignupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authConstants.USER_SIGNUP_REQUEST_STATUS:
      return {
        ...initialState,
        loading: true,
      };
    case authConstants.USER_SIGNUP_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case authConstants.USER_SIGNUP_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case authConstants.USER_SIGNUP_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const userSigninReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authConstants.USER_SIGNIN_REQUEST_STATUS:
      return {
        ...initialState,
        loading: true,
      };
    case authConstants.USER_SIGNIN_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case authConstants.USER_SIGNIN_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case authConstants.USER_SIGNIN_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const saveUserInfoReducer = (state = { loading: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case authConstants.SAVE_USER_INFO:
      return { ...state, ...payload };

    case authConstants.CLEAR_USER_INFO:
      return { loading: false };

    default:
      return state;
  }
};

export const userForgotReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authConstants.USER_FORGOT_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case authConstants.USER_FORGOT_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case authConstants.USER_FORGOT_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case authConstants.USER_FORGOT_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const userResetReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case authConstants.USER_RESET_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case authConstants.USER_RESET_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case authConstants.USER_RESET_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case authConstants.USER_RESET_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};
