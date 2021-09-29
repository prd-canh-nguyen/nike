import * as Types from "../constants/actionTypes";

const initialState = [];

const showProductSearch = (state = initialState, action) => {
  switch (action.type) {
    case Types.RENDER_PRODUCTS_SEARCH:
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};

export default showProductSearch;
