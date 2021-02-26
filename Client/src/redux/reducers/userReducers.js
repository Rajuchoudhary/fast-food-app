import * as userConstants from '../constants/userConstants';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const userPlaceOrderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_PLACE_ORDER_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.USER_PLACE_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case userConstants.USER_PLACE_ORDER_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case userConstants.RESET_USER_PLACE_ORDER:
      return initialState;

    default:
      return state;
  }
};

export const userGetOrderDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_GET_ORDER_DETAIL_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.USER_GET_ORDER_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case userConstants.USER_GET_ORDER_DETAIL_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case userConstants.CLEAR_GET_ORDER_DETAIL_ERROR:
      return initialState;

    default:
      return state;
  }
};

export const userUpdateOrderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_UPDATE_ORDER_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.USER_UPDATE_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case userConstants.USER_UPDATE_ORDER_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case userConstants.RESET_UPDATE_ORDER:
      return initialState;

    default:
      return state;
  }
};

export const userCancelOrderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_CANCEL_ORDER_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.USER_CANCEL_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case userConstants.USER_CANCEL_ORDER_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case userConstants.CLEAR_CANCEL_ORDER_ERROR:
      return initialState;

    default:
      return state;
  }
};

export const userUpdateDetailReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_UPDATE_DETAIL_REQUEST_STATUS:
      return { ...initialState, loading: true };
    case userConstants.USER_UPDATE_DETAIL_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };
    case userConstants.USER_UPDATE_DETAIL_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };
    case userConstants.USER_UPDATE_DETAIL_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const userGetOrdersReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_GET_ORDERS_REQUEST_STATUS:
      return { ...initialState, loading: true };
    case userConstants.USER_GET_ORDERS_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };
    case userConstants.USER_GET_ORDERS_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const userAddReviewReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_ADD_REVIEW_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.USER_ADD_REVIEW_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case userConstants.USER_ADD_REVIEW_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case userConstants.USER_CLEAR_REVIEW_STATE:
      return initialState;

    default:
      return state;
  }
};

export const userPayForOrderReducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.USER_PAY_FOR_ORDER_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.USER_PAY_FOR_ORDER_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case userConstants.USER_PAY_FOR_ORDER_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case userConstants.CLEAR_PAY_FOR_ORDER_ERROR:
      return initialState;

    default:
      return state;
  }
};

export const uploadImageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case userConstants.UPLOAD_IMAGE_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case userConstants.UPLOAD_IMAGE_SUCCESS:
      return { ...state, loading: false, data: payload };

    case userConstants.UPLOAD_IMAGE_FAIL:
      return { ...state, loading: false, error: payload };

    case userConstants.UPLOAD_IMAGE_CLEAR_ERROR:
      return initialState;

    default:
      return state;
  }
};
