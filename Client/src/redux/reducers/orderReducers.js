import * as orderConstants from '../constants/orderConstants';

const initialState = {
  orderDetail: null,
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case orderConstants.ADD_ORDER:
      return {
        ...initialState,
        orderDetail: payload,
      };

    case orderConstants.UPDATE_ORDER:
      const existItem = state.orderDetail.items.find(
        (item) => item.id === payload.id
      );

      return {
        ...state,
        orderDetail: {
          ...state.orderDetail,
          items: state.orderDetail.items.map((item) =>
            item.id === existItem.id ? payload : item
          ),
        },
      };

    case orderConstants.REMOVE_FROM_ORDER:
      return {
        ...state,
        orderDetail: {
          ...state.orderDetail,
          items: state.orderDetail.items.filter((item) => item.id !== payload),
        },
      };

    case orderConstants.CANCEL_ORDER:
      return initialState;

    case orderConstants.UPDATE_ORDER_PAYMENT_TYPE:
      return {
        ...state,
        paymentMethod: payload,
      };

    case orderConstants.UPDATE_ORDER_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryDetail: payload,
      };

    case orderConstants.CLEAR_ORDER:
      return initialState;

    default:
      return state;
  }
};
