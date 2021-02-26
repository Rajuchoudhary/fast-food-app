import * as adminConstants from '../constants/adminConstants';

export const adminSigninAction = (data, history) => {
  return {
    type: adminConstants.ADMIN_SIGNIN_REQUEST,
    payload: { data, history },
  };
};

export const adminAddItemAction = (data) => ({
  type: adminConstants.ADMIN_ADD_ITEM_REQUEST,
  payload: data,
});

export const adminUpdateItemAction = (itemId, data) => ({
  type: adminConstants.ADMIN_UPDATE_ITEM_REQUEST,
  payload: { itemId, data },
});

export const adminDeleteItemAction = (itemId) => ({
  type: adminConstants.ADMIN_DELETE_ITEM_REQUEST,
  payload: itemId,
});

export const adminGetItemsAction = (currentPage, category) => ({
  type: adminConstants.ADMIN_GET_ITEMS_REQUEST,
  payload: { currentPage, category },
});

export const adminGetItemDetailAction = (itemId) => ({
  type: adminConstants.ADMIN_GET_ITEM_DETAIL_REQUEST,
  payload: itemId,
});

export const adminAddCategoryAction = (category) => ({
  type: adminConstants.ADMIN_ADD_CATEGORY_REQUEST,
  payload: category,
});

export const adminUpdateCategoryAction = (categoryId, categoryText) => ({
  type: adminConstants.ADMIN_UPDATE_CATEGORY_REQUEST,
  payload: { categoryId, categoryText },
});

export const adminDeleteCategoryAction = (categoryId) => ({
  type: adminConstants.ADMIN_DELETE_CATEGORY_REQUEST,
  payload: categoryId,
});

export const adminGetOrdersAction = (currentPage, filter) => ({
  type: adminConstants.ADMIN_GET_ORDERS_REQUEST,
  payload: { currentPage, filter },
});

export const adminGetOrderDetailAction = (orderId) => ({
  type: adminConstants.ADMIN_GET_ORDER_DETAIL_REQUEST,
  payload: orderId,
});

export const adminUpdateOrderAction = (orderId) => ({
  type: adminConstants.ADMIN_UPDATE_ORDER_REQUEST,
  payload: orderId,
});

export const adminGetUsersAction = (currentPage) => ({
  type: adminConstants.ADMIN_GET_USERS_REQUEST,
  payload: currentPage,
});
