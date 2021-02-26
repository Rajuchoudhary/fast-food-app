import { call, delay, put, spawn, takeLatest } from 'redux-saga/effects';
import * as api from '../api/userAPI';
import { CLEAR_USER_INFO, SAVE_USER_INFO } from '../constants/authConstants';
import { CLEAR_CART } from '../constants/cartConstants';
import {
  ADD_ORDER,
  CANCEL_ORDER,
  CLEAR_ORDER,
} from '../constants/orderConstants';
import * as userConstants from '../constants/userConstants';

//User Place Order
function* userPlaceOrder(props) {
  try {
    yield put({ type: userConstants.USER_PLACE_ORDER_REQUEST_STATUS });

    const result = yield call(api.userPlaceOrderAPI, props.payload.data);

    yield put({
      type: ADD_ORDER,
      payload: result.orderDetail,
    });

    yield put({
      type: userConstants.USER_PLACE_ORDER_REQUEST_SUCCESS,
      payload: result,
    });
    yield delay(1500);
    props.payload.history.push('/paynow');
    yield put({
      type: CLEAR_CART,
    });
  } catch (err) {
    yield put({
      type: userConstants.USER_PLACE_ORDER_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User Get Order Detail
function* userGetOrderDetail(props) {
  try {
    yield put({ type: userConstants.USER_GET_ORDER_DETAIL_REQUEST_STATUS });

    const result = yield call(api.userGetOrderDetailAPI, props.payload);

    yield put({
      type: ADD_ORDER,
      payload: result,
    });

    yield put({
      type: userConstants.USER_GET_ORDER_DETAIL_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: userConstants.USER_GET_ORDER_DETAIL_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User Update Order
function* userUpdateOrder(props) {
  try {
    yield put({ type: userConstants.USER_UPDATE_ORDER_REQUEST_STATUS });

    const result = yield call(api.userUpdateOrderAPI, props.payload.data);

    yield put({
      type: ADD_ORDER,
      payload: result.orderDetail,
    });

    yield put({
      type: userConstants.USER_UPDATE_ORDER_REQUEST_SUCCESS,
      payload: result,
    });

    yield delay(800);
    props.payload.history.push('/paynow');
  } catch (err) {
    yield put({
      type: userConstants.USER_UPDATE_ORDER_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User Cancel Order
function* userCancelOrder(props) {
  try {
    yield put({ type: userConstants.USER_CANCEL_ORDER_REQUEST_STATUS });

    const result = yield call(api.userCancelOrderAPI, props.payload.orderId);

    yield put({
      type: CANCEL_ORDER,
    });

    yield put({
      type: userConstants.USER_CANCEL_ORDER_REQUEST_SUCCESS,
      payload: result,
    });

    setTimeout(() => {
      props.payload.history.push('/menu');
    }, 1500);
  } catch (err) {
    yield put({
      type: userConstants.USER_CANCEL_ORDER_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User update detail
function* UserUpdateDetail(props) {
  try {
    yield put({ type: userConstants.USER_UPDATE_DETAIL_REQUEST_STATUS });

    const result = yield call(api.usetUpdateDetailAPI, props.payload.data);

    yield put({
      type: userConstants.USER_UPDATE_DETAIL_REQUEST_SUCCESS,
      payload: result,
    });

    yield delay(800);

    yield put({
      type: CLEAR_USER_INFO,
    });

    props.payload.history.push('/signin');
  } catch (err) {
    yield put({
      type: userConstants.USER_UPDATE_DETAIL_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User get orders
function* UserGetOrders(props) {
  try {
    yield put({ type: userConstants.USER_GET_ORDERS_REQUEST_STATUS });

    const result = yield call(api.userGetOrdersAPI, props.payload);

    yield put({
      type: userConstants.USER_GET_ORDERS_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: userConstants.USER_GET_ORDERS_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User add review
function* UserAddReview(props) {
  try {
    yield put({ type: userConstants.USER_ADD_REVIEW_REQUEST_STATUS });

    const result = yield call(api.userAddReviewAPI, props.payload);

    yield put({
      type: userConstants.USER_GET_ORDER_DETAIL_REQUEST_SUCCESS,
      payload: result.order,
    });

    yield put({
      type: userConstants.USER_ADD_REVIEW_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: userConstants.USER_ADD_REVIEW_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User pay for order
function* UserPayForOrder(props) {
  try {
    yield put({ type: userConstants.USER_PAY_FOR_ORDER_REQUEST_STATUS });

    const result = yield call(api.userPayForOrderAPI, props.payload.data);

    yield put({
      type: ADD_ORDER,
      payload: result.order,
    });

    yield put({
      type: userConstants.USER_PAY_FOR_ORDER_REQUEST_SUCCESS,
      payload: result,
    });
    yield delay(10000);
    yield put({ type: CLEAR_ORDER });
  } catch (err) {
    yield put({
      type: userConstants.USER_PAY_FOR_ORDER_REQUEST_FAIL,
      payload: err,
    });
  }
}

//User upload image
function* UserUploadImage(props) {
  try {
    yield put({ type: userConstants.UPLOAD_IMAGE_REQUEST_STATUS });

    const result = yield call(api.userUploadImageAPI, props.payload);

    yield put({
      type: SAVE_USER_INFO,
      payload: { image: result },
    });

    yield put({
      type: userConstants.UPLOAD_IMAGE_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: userConstants.UPLOAD_IMAGE_FAIL,
      payload: err,
    });
  }
}

//Watch for actions
function* watchUserPlaceOrder() {
  yield takeLatest(userConstants.USER_PLACE_ORDER_REQUEST, userPlaceOrder);
}
function* watchUserGetOrderDetail() {
  yield takeLatest(
    userConstants.USER_GET_ORDER_DETAIL_REQUEST,
    userGetOrderDetail
  );
}
function* watchUserUpdateOrder() {
  yield takeLatest(userConstants.USER_UPDATE_ORDER_REQUEST, userUpdateOrder);
}
function* watchUserCancelOrder() {
  yield takeLatest(userConstants.USER_CANCEL_ORDER_REQUEST, userCancelOrder);
}

function* watchUserUpdateDetail() {
  yield takeLatest(userConstants.USER_UPDATE_DETAIL_REQUEST, UserUpdateDetail);
}

function* watchUserGetOrders() {
  yield takeLatest(userConstants.USER_GET_ORDERS_REQUEST, UserGetOrders);
}

function* watchUserAddReview() {
  yield takeLatest(userConstants.USER_ADD_REVIEW_REQUEST, UserAddReview);
}

function* watchUserPayForOrder() {
  yield takeLatest(userConstants.USER_PAY_FOR_ORDER_REQUEST, UserPayForOrder);
}
function* watchUserUploadImage() {
  yield takeLatest(userConstants.UPLOAD_IMAGE_REQUEST, UserUploadImage);
}

export default function* UserSagas() {
  yield spawn(watchUserPlaceOrder);
  yield spawn(watchUserGetOrderDetail);
  yield spawn(watchUserUpdateOrder);
  yield spawn(watchUserCancelOrder);
  yield spawn(watchUserUpdateDetail);
  yield spawn(watchUserGetOrders);
  yield spawn(watchUserAddReview);
  yield spawn(watchUserPayForOrder);
  yield spawn(watchUserUploadImage);
}
