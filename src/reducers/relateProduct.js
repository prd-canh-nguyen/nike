import * as actionTypes from "../constants/actionTypes";

var initialState = [];

const relateProduct = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RENDER_RELATE_PRODUCT:
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};
export default relateProduct;
