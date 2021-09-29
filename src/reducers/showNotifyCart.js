import * as Types from "../constants/actionTypes";

var initialState = false;

const showNotifyCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_NOTIFY_CART:
      state = action.isShow;
      return state;
    default:
      return state;
  }
};

export default showNotifyCart;