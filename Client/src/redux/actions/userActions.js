import * as userConstants from '../constants/userConstants';

export const userPlaceOrderAction = (data, history) => {
  return {
    type: userConstants.USER_PLACE_ORDER_REQUEST,
    payload: { data, history },
  };
};

export const userGetOrderDetailAction = (orderId) => {
  return {
    type: userConstants.USER_GET_ORDER_DETAIL_REQUEST,
    payload: orderId,
  };
};

export const userUpdateOrderAction = (data, history) => {
  return {
    type: userConstants.USER_UPDATE_ORDER_REQUEST,
    payload: { data, history },
  };
};

export const userCencelOrderAction = (orderId, history) => {
  return {
    type: userConstants.USER_CANCEL_ORDER_REQUEST,
    payload: { orderId, history },
  };
};

export const userUpdateDetailAction = (data, history) => ({
  type: userConstants.USER_UPDATE_DETAIL_REQUEST,
  payload: { data, history },
});

export const userGetOrdersAction = (currentPage) => ({
  type: userConstants.USER_GET_ORDERS_REQUEST,
  payload: currentPage,
});

export const userAddReviewAction = (data) => ({
  type: userConstants.USER_ADD_REVIEW_REQUEST,
  payload: data,
});

export const userPayForOrderAction = (data, history) => ({
  type: userConstants.USER_PAY_FOR_ORDER_REQUEST,
  payload: { data, history },
});

export const userUploadImageAction = (image, public_id) => ({
  type: userConstants.UPLOAD_IMAGE_REQUEST,
  payload: { image, public_id },
});
