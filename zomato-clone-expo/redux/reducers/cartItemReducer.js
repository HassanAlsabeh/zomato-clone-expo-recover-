import { ActionTypes } from "../contants/action-types";

const initialState = {
  cartItems: [],
  checkoutItems:[]
};

export const cartItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CARTITEMFETCH:
      return {
        cartItems: payload,
      };
    case ActionTypes.CHECKOUT:
      return {
        checkoutItems: payload,
      };
    default:
      return state;
  }
};
