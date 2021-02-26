import * as orderConstants from '../constants/orderConstants';

export const addOrderAction = (data) => ({
  type: orderConstants.ADD_ORDER,
  payload: data,
});

export const addToOrderAction = (data) => ({
  type: orderConstants.UPDATE_ORDER,
  payload: data,
});

export const removeFromOrderAction = (id) => ({
  type: orderConstants.REMOVE_FROM_ORDER,
  payload: id,
});

export const cencelOrderAction = (id) => ({
  type: orderConstants.CANCEL_ORDER,
  payload: id,
});

export const updateOrderPaymentTypeAction = (paymentType) => ({
  type: orderConstants.UPDATE_ORDER_PAYMENT_TYPE,
  payload: paymentType,
});

export const updateOrderDeliveryAddressAction = (data) => ({
  type: orderConstants.UPDATE_ORDER_DELIVERY_ADDRESS,
  payload: data,
});
