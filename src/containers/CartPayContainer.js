import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartPayPage from "../pages/CartPay/CartPayPage";
import {
  actRemoveCartProduct,
  actRemoveAllCart,
  actRenderCartPage,
} from "../actions/index";
import AuthenticationContainer from "../containers/AuthenticationContainer";
import SuccessPay from "../components/SuccessPay/SuccessPay";

function CartPayContainer(props) {
  const [isHandlePay, setIsHandlePay] = useState(false);
  const [success, setSuccess] = useState(false);
  const isSuccess = useSelector((state) => state.authentication.isSuccess);
  var cartList = useSelector((state) => state.addProductsToCart);
  var cartList = useSelector((state) => state.addProductsToCart);
  const dispatch = useDispatch();
  function handleRemoveCart(index) {
    dispatch(actRemoveCartProduct(index));
  }
  function handlePay() {
    if (!isSuccess) {
      setIsHandlePay(true);
    } else {
      setSuccess(true);
    }
  }
  function setIsShow() {
    setIsHandlePay(false);
  }
  function Pay() {
    function handleHideForm() {
      setIsHandlePay(false);
    }
    function isSuccess() {}
    var result = null;
    if (isHandlePay) {
      result = (
        <AuthenticationContainer
          setIsShow={setIsShow}
          handleHideForm={handleHideForm}
          isSuccess={isSuccess}
        />
      );
    }
    return result;
  }
  function handleSuccess() {
    setSuccess(false);
    dispatch(actRemoveAllCart());
  }
  function showSuccess(isProduct) {
    var result = null;
    if (success) {
      result = (
        <SuccessPay handleSuccess={handleSuccess} isProduct={isProduct} />
      );
    }
    return result;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      dispatch(actRenderCartPage(false));
    };
  }, []);
  useEffect(() => {
    setIsHandlePay(false);
  }, [isSuccess]);
  return (
    <div>
      <CartPayPage
        cartList={cartList}
        handleRemoveCart={handleRemoveCart}
        handlePay={handlePay}
      />
      {Pay()}
      {showSuccess(cartList.length)}
    </div>
  );
}

export default CartPayContainer;
