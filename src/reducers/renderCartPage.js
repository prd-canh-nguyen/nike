import * as Types from "../constants/actionTypes";

var initialState = false;

const renderCartPage = (state = initialState, action) => {
  switch (action.type) {
    case Types.RENDER_CART_PAGE:
      state = action.isCheck;
      return state;
    default:
      return state;
  }
};

export default renderCartPage;
