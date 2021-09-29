import * as actionTypes from "../constants/actionTypes";

const initialState = [];

const mainProductSex = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RENDER_PRODUCT_MAIN:
      state = action.products;
      return [...state];

    default:
      return [...state];
  }
};

export default mainProductSex;
