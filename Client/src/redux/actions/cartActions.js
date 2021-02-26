import * as cartConstants from '../constants/cartConstants';

export const addToCartAction = (data) => ({
  type: cartConstants.CART_ADD_ITEM,
  payload: data,
});

export const removeFromCartAction = (id) => ({
  type: cartConstants.CART_REMOVE_ITEM,
  payload: id,
});

export const addPaymentMethodAction = (paymentMethod) => ({
  type: cartConstants.CART_ADD_PAYMENT_METHOD,
  payload: paymentMethod,
});

export const addDeliveryAddressAction = (data) => ({
  type: cartConstants.CART_ADD_DELIVERY_ADDRESS,
  payload: data,
});
