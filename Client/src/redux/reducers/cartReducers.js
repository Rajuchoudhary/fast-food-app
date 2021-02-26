import * as cartConstants from '../constants/cartConstants';

const initialState = {
  items: [],
  paymentMethod: '',
  deliveryDetail: {},
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case cartConstants.CART_ADD_ITEM:
      const existItem = state.items.find((item) => item.id === payload.id);

      if (existItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existItem.id ? payload : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, payload],
        };
      }

    case cartConstants.CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };

    case cartConstants.CART_ADD_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: payload,
      };

    case cartConstants.CART_ADD_DELIVERY_ADDRESS:
      return {
        ...state,
        deliveryDetail: payload,
      };

    case cartConstants.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};
