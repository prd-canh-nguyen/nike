import * as actionTypes from "../constants/actionTypes";

export const actRenderProductMain = (products) => {
  return {
    type: actionTypes.RENDER_PRODUCT_MAIN,
    products: products,
  };
};

export const actAddToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product: product,
  };
};

export const actAddProductsToCart = (product, number, size) => {
  return {
    type: actionTypes.ADD_PRODUCTS_TO_CART,
    detail: {
      product: product,
      number: number,
      size: size,
    },
  };
};

export const actRenderRelateProduct = (products) => {
  return {
    type: actionTypes.RENDER_RELATE_PRODUCT,
    products: products,
  };
};

export const actAuthentication = (authen) => {
  return {
    type: actionTypes.AUTHENTICATION,
    authen: authen,
  };
};

export const actShowForm = (isOpen) => {
  return {
    type: actionTypes.SHOW_FORM,
    isOpen: isOpen,
  };
};

export const actReview = (review) => {
  return {
    type: actionTypes.ADD_PRODUCT_REVIEW,
    review: review,
  };
};

export const actShowNotifyCart = (isShow) => {
  return {
    type: actionTypes.SHOW_NOTIFY_CART,
    isShow: isShow,
  };
};

export const actRemoveCartProduct = (index) => {
  return {
    type: actionTypes.REMOVE_CART_PRODUCT,
    index: index,
  };
};

export const actRemoveAllCart = () => {
  return {
    type: actionTypes.REMOVE_ALL_CART,
  };
};

export const actRenderCartPage = (isCheck) => {
  return {
    type: actionTypes.RENDER_CART_PAGE,
    isCheck: isCheck,
  };
};

export const actScroll = (position) => {
  return {
    type: actionTypes.SCROLL,
    position: position,
  };
};

export const actSearch = (isShow) => {
  return {
    type: actionTypes.SEARCH,
    isShow: isShow,
  };
};

export const actRenderProductSearch = (products) => {
  return {
    type: actionTypes.RENDER_PRODUCTS_SEARCH,
    products: products,
  };
};

export const actFilter = (key) => {
  return {
    type: actionTypes.FILTER,
    key: key,
  };
};

export const actCartNotify = (product, size) => {
  return {
    type: actionTypes.CART_NOTIFY,
    product: product,
    size: size,
  };
};
