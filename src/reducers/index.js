import { combineReducers } from "redux";

import mainProductSex from "./mainProductSex";
import addToCart from "./addToCart";
import relateProduct from "./relateProduct";
import authentication from "./authentication";
import showForm from "./showForm";
import addProductsToCart from "./addProductsToCart";
import showNotifyCart from "./showNotifyCart";
import renderCartPage from "./renderCartPage";
import showPosition from "./showPosition";
import showSearch from "./showSearch";
import showProductSearch from "./showProductSearch";
import showFilter from './showFilter'
import cartNotify from './cartNotify'

const appReducers = combineReducers({
  mainProductSex,
  addToCart,
  relateProduct,
  authentication,
  showForm,
  addProductsToCart,
  showNotifyCart,
  renderCartPage,
  showPosition,
  showSearch,
  showProductSearch,
  showFilter,
  cartNotify
});

export default appReducers;
