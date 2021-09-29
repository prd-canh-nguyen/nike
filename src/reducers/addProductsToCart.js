import * as Types from "../constants/actionTypes";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const addProductsToCart = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_PRODUCTS_TO_CART:
      var newState = JSON.parse(JSON.stringify(state));
      var index = findId(state, action.detail.product.slug, action.detail.size);
      if (index === -1) {
        newState.push({
          product: action.detail.product,
          number: 1,
          size: action.detail.size,
        });
      } else {
        newState[index].number = newState[index].number + 1;
      }
      state = newState;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case Types.REMOVE_CART_PRODUCT:
      var newState = JSON.parse(JSON.stringify(state));
      newState.splice(action.index, 1);
      state = newState;
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case Types.REMOVE_ALL_CART:
      localStorage.removeItem("cart");
      state = [];
      return [...state];
    default:
      return [...state];
  }
};

const findId = (state, id, size) => {
  var index = -1;
  if (state.length > 0) {
    for (let i = 0; i < state.length; i++) {
      if (state[i].product.slug === id && state[i].size === size) {
        index = i;
      }
    }
  }
  return index;
};

export default addProductsToCart;

