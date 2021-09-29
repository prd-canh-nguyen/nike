import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddToCart from "../pages/AddToCart/AddToCart";
import apiCaller from "../util/apiCaller";
import CartNotify from "../components/CartNotify/CartNotify";
import { LoadingProduct } from "../components/Loading/Loading";
import {
  actAddToCart,
  actAddProductsToCart,
  actShowNotifyCart,
  actRenderCartPage,
  actCartNotify,
} from "../actions/index";

function AddToCartContainer(props) {
  const [isCheck, setIsCheck] = useState(false);
  var { slug } = useParams();
  var isShowCartNotify = useSelector((state) => state.showNotifyCart);
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.addToCart);
  const cartNotify = useSelector((state)=>state.cartNotify)
  const cartProductDetail = useSelector((state) => state.addProductsToCart);
  function size(size) {
    dispatch(actAddProductsToCart(cartProduct, 1, size));
    dispatch(actShowNotifyCart(true));
    dispatch(actCartNotify(cartProduct, size));
  }
  function showNotify() {
    function handleCloseNotify() {
      dispatch(actShowNotifyCart(false));
    }
    function handleCheckCart() {
      dispatch(actShowNotifyCart(false));
      setIsCheck(true);
    }
    var result = null;
    if (isShowCartNotify) {
      result = (
        <CartNotify
          handleCloseNotify={handleCloseNotify}
          cartProductDetail={cartNotify}
          handleCheckCart={handleCheckCart}
        />
      );
    }
    return result;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    apiCaller(`nike/cart/${slug}`).then(({ data }) => {
      dispatch(actAddToCart(data));
    });
  }, [slug]);

  useEffect(() => {
    return () => {
      dispatch(actAddToCart({}));
      dispatch(actRenderCartPage(false));
    };
  }, []);

  if (isCheck) {
    return <Redirect to="/nike/pay-cart" />;
  }
  if (JSON.stringify(cartProduct) !== "{}") {
    return (
      <div>
        <AddToCart cartProduct={cartProduct} size={size} />
        {showNotify()}
      </div>
    );
  } else {
    return <LoadingProduct />;
  }
}

export default AddToCartContainer;
