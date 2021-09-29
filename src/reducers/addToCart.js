import * as Types from "../constants/actionTypes";

var initialState = {};

const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      state = action.product;
      return { ...state };
    case Types.ADD_PRODUCT_REVIEW:
      let newState = JSON.parse(JSON.stringify(state));
      newState.review.unshift(action.review);
      state = JSON.parse(JSON.stringify(newState));
      return { ...state };
    default:
      return { ...state };
  }
};

export default addToCart;
