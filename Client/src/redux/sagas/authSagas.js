import { call, delay, put, spawn, takeLatest } from 'redux-saga/effects';
import * as api from '../api/authAPI';
import * as authConstants from '../constants/authConstants';

//User Signup
function* userSignup(props) {
  try {
    yield put({ type: authConstants.USER_SIGNUP_REQUEST_STATUS });

    const result = yield call(api.signupAPI, props.payload.data);

    yield put({
      type: authConstants.USER_SIGNUP_REQUEST_SUCCESS,
      payload: result,
    });

    yield delay(800);

    yield put({
      type: authConstants.SAVE_USER_INFO,
      payload: result?.userDetail,
    });

    props.payload.history.push('/dashboard');
  } catch (err) {
    yield put({
      type: authConstants.USER_SIGNUP_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User Signin
function* userSignin(props) {
  try {
    yield put({ type: authConstants.USER_SIGNIN_REQUEST_STATUS });

    const result = yield call(api.signinAPI, props.payload.data);

    yield put({
      type: authConstants.USER_SIGNIN_REQUEST_SUCCESS,
      payload: result,
    });

    yield delay(800);

    yield put({
      type: authConstants.SAVE_USER_INFO,
      payload: result?.userDetail,
    });
    props.payload.history.push('/dashboard');
  } catch (err) {
    yield put({
      type: authConstants.USER_SIGNIN_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User Forgot Password
function* userForgot(props) {
  try {
    yield put({ type: authConstants.USER_FORGOT_REQUEST_STATUS });

    const result = yield call(api.forgotAPI, props.payload);

    yield put({
      type: authConstants.USER_FORGOT_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({ type: authConstants.USER_FORGOT_REQUEST_FAIL, payload: err });
  }
}

//User Reset Password
function* userReset(props) {
  try {
    yield put({ type: authConstants.USER_RESET_REQUEST_STATUS });

    const result = yield call(api.resetAPI, props.payload.data);

    yield put({
      type: authConstants.USER_RESET_REQUEST_SUCCESS,
      payload: result,
    });
    setTimeout(() => {
      props.payload.history.push('/signin');
    }, 800);
  } catch (err) {
    yield put({ type: authConstants.USER_RESET_REQUEST_FAIL, payload: err });
  }
}

//Watch for Actions
function* watchUserSignup() {
  yield takeLatest(authConstants.USER_SIGNUP_REQUEST, userSignup);
}

function* watchUserSignin() {
  yield takeLatest(authConstants.USER_SIGNIN_REQUEST, userSignin);
}

function* watchUserForgot() {
  yield takeLatest(authConstants.USER_FORGOT_REQUEST, userForgot);
}
function* watchUserReset() {
  yield takeLatest(authConstants.USER_RESET_REQUEST, userReset);
}

export default function* AuthSagas() {
  yield spawn(watchUserSignup);
  yield spawn(watchUserSignin);
  yield spawn(watchUserForgot);
  yield spawn(watchUserReset);
}
