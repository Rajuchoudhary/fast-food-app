import * as publicConstants from '../constants/publicConstants';

const initialState = { loading: false, data: [], error: null };

export const getHomePageDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case publicConstants.GET_HOME_PAGE_DATA_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case publicConstants.GET_HOME_PAGE_DATA_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case publicConstants.GET_HOME_PAGE_DATA_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const getMenuPageDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case publicConstants.GET_MENU_PAGE_DATA_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case publicConstants.GET_MENU_PAGE_DATA_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case publicConstants.GET_MENU_PAGE_DATA_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const getItemDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case publicConstants.GET_ITEM_DETAIL_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case publicConstants.GET_ITEM_DETAIL_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case publicConstants.GET_ITEM_DETAIL_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const getCategoryListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case publicConstants.GET_CATEGORY_LIST_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case publicConstants.GET_CATEGORY_LIST_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case publicConstants.GET_CATEGORY_LIST_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
