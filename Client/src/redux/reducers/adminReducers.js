import * as adminConstants from '../constants/adminConstants';

const initialState = { loading: false, data: null, error: null };

export const adminSigninReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_SIGNIN_REQUEST_STATUS:
      return {
        ...initialState,
        loading: true,
      };
    case adminConstants.ADMIN_SIGNIN_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_SIGNIN_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case adminConstants.ADMIN_SIGNIN_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const adminAddItemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_ADD_ITEM_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_ADD_ITEM_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_ADD_ITEM_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case adminConstants.ADMIN_ADD_ITEM_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const adminUpdateItemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_UPDATE_ITEM_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_UPDATE_ITEM_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_UPDATE_ITEM_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case adminConstants.ADMIN_UPDATE_ITEM_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const adminDeleteItemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_DELETE_ITEM_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_DELETE_ITEM_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_DELETE_ITEM_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const adminGetItemsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_GET_ITEMS_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_GET_ITEMS_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_GET_ITEMS_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const adminGetItemDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const adminAddCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_ADD_CATEGORY_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_ADD_CATEGORY_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_ADD_CATEGORY_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case adminConstants.ADMIN_ADD_CATEGORY_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const adminUpdateCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case adminConstants.ADMIN_RESET_CATEGORY:
      return initialState;

    default:
      return state;
  }
};

export const adminDeleteCategoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_DELETE_CATEGORY_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_DELETE_CATEGORY_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_DELETE_CATEGORY_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    case adminConstants.ADMIN_DELETE_CATEGORY_RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

export const adminGetOrdersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_GET_ORDERS_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_GET_ORDERS_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_GET_ORDERS_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const adminGetOrderDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const adminUpdateOrderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_UPDATE_ORDER_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_UPDATE_ORDER_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_UPDATE_ORDER_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const adminGetUsersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case adminConstants.ADMIN_GET_USERS_REQUEST_STATUS:
      return { ...initialState, loading: true };

    case adminConstants.ADMIN_GET_USERS_REQUEST_SUCCESS:
      return { ...state, loading: false, data: payload };

    case adminConstants.ADMIN_GET_USERS_REQUEST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
