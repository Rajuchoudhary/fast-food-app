import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import * as api from '../api/publicAPI';
import * as publicConstants from '../constants/publicConstants';

//Get Home Page Data
function* getHomePage() {
  try {
    yield put({ type: publicConstants.GET_HOME_PAGE_DATA_REQUEST_STATUS });

    const result = yield call(api.getHomePageDataAPI);

    yield put({
      type: publicConstants.GET_HOME_PAGE_DATA_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: publicConstants.GET_HOME_PAGE_DATA_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Get Menu Page Items
function* getMenuPageData(props) {
  try {
    yield put({ type: publicConstants.GET_MENU_PAGE_DATA_REQUEST_STATUS });

    const result = yield call(api.getMenuPageDataAPI, props.payload);

    yield put({
      type: publicConstants.GET_MENU_PAGE_DATA_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: publicConstants.GET_MENU_PAGE_DATA_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Get item detail
function* getItemDetail(props) {
  try {
    yield put({ type: publicConstants.GET_ITEM_DETAIL_REQUEST_STATUS });

    const result = yield call(api.getItemDetailAPI, props.payload);

    yield put({
      type: publicConstants.GET_ITEM_DETAIL_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: publicConstants.GET_ITEM_DETAIL_REQUEST_FAIL,
      payload: err,
    });
  }
}

//Get category list
function* getCategoryList(props) {
  try {
    yield put({ type: publicConstants.GET_CATEGORY_LIST_REQUEST_STATUS });

    const result = yield call(api.getCategoryListAPI, props.payload);
    yield put({
      type: publicConstants.GET_CATEGORY_LIST_REQUEST_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: publicConstants.GET_CATEGORY_LIST_REQUEST_FAIL,
      payload: err,
    });
  }
}

function* watchGetHomePageData() {
  yield takeLatest(publicConstants.GET_HOME_PAGE_DATA_REQUEST, getHomePage);
}

function* watchGetMenuPageData() {
  yield takeLatest(publicConstants.GET_MENU_PAGE_DATA_REQUEST, getMenuPageData);
}

function* watchGetItemDetail() {
  yield takeLatest(publicConstants.GET_ITEM_DETAIL_REQUEST, getItemDetail);
}

function* watchGetCategoryList() {
  yield takeLatest(publicConstants.GET_CATEGORY_LIST_REQUEST, getCategoryList);
}

export default function* PublicSagas() {
  yield spawn(watchGetHomePageData);
  yield spawn(watchGetMenuPageData);
  yield spawn(watchGetItemDetail);
  yield spawn(watchGetCategoryList);
}
