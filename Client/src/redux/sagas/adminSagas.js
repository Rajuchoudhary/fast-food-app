import { call, delay, put, spawn, takeLatest } from 'redux-saga/effects';
import * as api from '../api/adminAPI';
import * as adminConstants from '../constants/adminConstants';
import { SAVE_USER_INFO } from '../constants/authConstants';
import { GET_CATEGORY_LIST_REQUEST_SUCCESS } from '../constants/publicConstants';

//Admin Signin
function* adminSignin(props) {
  try {
    yield put({ type: adminConstants.ADMIN_SIGNIN_REQUEST_STATUS });

    const result = yield call(api.adminSigninAPI, props.payload.data);

    yield put({
      type: adminConstants.ADMIN_SIGNIN_REQUEST_SUCCESS,
      payload: result,
    });

    yield delay(800);
    yield put({
      type: SAVE_USER_INFO,
      payload: result?.userDetail,
    });
    props.payload.history.push('/admin/dashboard');
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_SIGNIN_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin add Item
function* adminAddItem(props) {
  try {
    yield put({ type: adminConstants.ADMIN_ADD_ITEM_REQUEST_STATUS });

    const result = yield call(api.AdminAddItemAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_ADD_ITEM_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_ADD_ITEM_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin update Item
function* adminUpdateItem(props) {
  try {
    yield put({ type: adminConstants.ADMIN_UPDATE_ITEM_REQUEST_STATUS });

    const result = yield call(api.AdminUpdateItemAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_UPDATE_ITEM_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_UPDATE_ITEM_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin delete Item
function* adminDeleteItem(props) {
  try {
    yield put({ type: adminConstants.ADMIN_DELETE_ITEM_REQUEST_STATUS });

    const result = yield call(api.AdminDeleteItemAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_DELETE_ITEM_REQUEST_SUCCESS,
      payload: result,
    });

    yield put({
      type: adminConstants.ADMIN_GET_ITEMS_REQUEST,
      payload: { currentPage: 1, category: 'all' },
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_DELETE_ITEM_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin get items with category
function* adminGetItems(props) {
  try {
    yield put({ type: adminConstants.ADMIN_GET_ITEMS_REQUEST_STATUS });

    const result = yield call(api.AdminGetItemsAPI, props.payload);
    yield put({
      type: adminConstants.ADMIN_GET_ITEMS_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_GET_ITEMS_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin get item detail
function* adminGetItemDetail(props) {
  try {
    yield put({ type: adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST_STATUS });

    const result = yield call(api.AdminGetItemDetailAPI, props.payload);
    yield put({
      type: adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin update category
function* adminUpdateCategory(props) {
  try {
    yield put({ type: adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST_STATUS });

    const result = yield call(api.AdminUpdateCategoryApi, props.payload);
    yield put({
      type: GET_CATEGORY_LIST_REQUEST_SUCCESS,
      payload: result,
    });
    yield put({
      type: adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin add category
function* adminAddCategory(props) {
  try {
    yield put({ type: adminConstants.ADMIN_ADD_CATEGORY_REQUEST_STATUS });

    const result = yield call(api.AdminAddCategoryApi, props.payload);

    yield put({
      type: adminConstants.ADMIN_ADD_CATEGORY_REQUEST_SUCCESS,
      payload: result,
    });

    yield put({
      type: GET_CATEGORY_LIST_REQUEST_SUCCESS,
      payload: result.categoryList,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_ADD_CATEGORY_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin delete category
function* adminDeleteCategory(props) {
  try {
    yield put({ type: adminConstants.ADMIN_DELETE_CATEGORY_REQUEST_STATUS });

    const result = yield call(api.AdminDeleteCategoryApi, props.payload);
    yield put({
      type: GET_CATEGORY_LIST_REQUEST_SUCCESS,
      payload: result.categoryList,
    });
    yield put({
      type: adminConstants.ADMIN_DELETE_CATEGORY_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_DELETE_CATEGORY_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin get all orders
function* adminGetOrders(props) {
  try {
    yield put({ type: adminConstants.ADMIN_GET_ORDERS_REQUEST_STATUS });

    const result = yield call(api.AdminGetOrdersAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_GET_ORDERS_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_GET_ORDERS_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin get all order detail
function* adminGetOrderDetail(props) {
  try {
    yield put({ type: adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_STATUS });

    const result = yield call(api.AdminGetOrderDetailAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin update order
function* adminUpdateOrder(props) {
  try {
    yield put({ type: adminConstants.ADMIN_UPDATE_ORDER_REQUEST_STATUS });

    const result = yield call(api.AdminUpdateOrderAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_SUCCESS,
      payload: result.updatedOrder,
    });

    yield put({
      type: adminConstants.ADMIN_UPDATE_ORDER_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_UPDATE_ORDER_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Admin get all users
function* adminGetUsers(props) {
  try {
    yield put({ type: adminConstants.ADMIN_GET_USERS_REQUEST_STATUS });

    const result = yield call(api.AdminGetUsersAPI, props.payload);

    yield put({
      type: adminConstants.ADMIN_GET_USERS_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: adminConstants.ADMIN_GET_USERS_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Watch for Actions
function* watchAdminSignin() {
  yield takeLatest(adminConstants.ADMIN_SIGNIN_REQUEST, adminSignin);
}

function* watchAdminAddItem() {
  yield takeLatest(adminConstants.ADMIN_ADD_ITEM_REQUEST, adminAddItem);
}

function* watchAdminUpdateItem() {
  yield takeLatest(adminConstants.ADMIN_UPDATE_ITEM_REQUEST, adminUpdateItem);
}

function* watchAdminDeleteItem() {
  yield takeLatest(adminConstants.ADMIN_DELETE_ITEM_REQUEST, adminDeleteItem);
}

function* watchAdminGetItems() {
  yield takeLatest(adminConstants.ADMIN_GET_ITEMS_REQUEST, adminGetItems);
}

function* watchAdminGetItemDetail() {
  yield takeLatest(
    adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST,
    adminGetItemDetail
  );
}

function* watchAdminAddCategory() {
  yield takeLatest(adminConstants.ADMIN_ADD_CATEGORY_REQUEST, adminAddCategory);
}

function* watchAdminUpdateCategory() {
  yield takeLatest(
    adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST,
    adminUpdateCategory
  );
}

function* watchAdminDeleteCategory() {
  yield takeLatest(
    adminConstants.ADMIN_DELETE_CATEGORY_REQUEST,
    adminDeleteCategory
  );
}

function* watchAdminGetOrders() {
  yield takeLatest(adminConstants.ADMIN_GET_ORDERS_REQUEST, adminGetOrders);
}

function* watchAdminGetOrderDetail() {
  yield takeLatest(
    adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST,
    adminGetOrderDetail
  );
}

function* watchAdminUpdateOrder() {
  yield takeLatest(adminConstants.ADMIN_UPDATE_ORDER_REQUEST, adminUpdateOrder);
}

function* watchAdminGetUsers() {
  yield takeLatest(adminConstants.ADMIN_GET_USERS_REQUEST, adminGetUsers);
}

export default function* AdminSagas() {
  yield spawn(watchAdminSignin);
  yield spawn(watchAdminAddItem);
  yield spawn(watchAdminUpdateItem);
  yield spawn(watchAdminDeleteItem);
  yield spawn(watchAdminGetItems);
  yield spawn(watchAdminGetItemDetail);
  yield spawn(watchAdminAddCategory);
  yield spawn(watchAdminUpdateCategory);
  yield spawn(watchAdminDeleteCategory);
  yield spawn(watchAdminGetOrders);
  yield spawn(watchAdminGetOrderDetail);
  yield spawn(watchAdminUpdateOrder);
  yield spawn(watchAdminGetUsers);
}
