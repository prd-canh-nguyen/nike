import * as Types from "../constants/actionTypes";

const initialState = {};

const cartNotify = (state = initialState, action) => {
  switch (action.type) {
    case Types.CART_NOTIFY:
      state = {
        product : action.product,
        size : action.size
      };
      return { ...state };

    default:
      return { ...state };
  }
};

export default cartNotify;
