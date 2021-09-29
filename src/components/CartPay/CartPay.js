import React, { useState } from "react";
import moneyConvert from "../../functions/moneyConvert";

function CartPay(props) {
  var money = 0;
  var { cartList } = props;
  if (cartList) {
    for (let i = 0; i < cartList.length; i++) {
      money = money + cartList[i].product.price * cartList[i].number;
    }
  }
  function handlePay() {
    props.handlePay();
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
      <div className="container__cart-wrap-pay">
        <div className="container__cart-wrap-pay-title">Summary</div>
        <div className="container__cart-wrap-pay-main">
          <div className="container__cart-wrap-pay-main-text">
            Subtotal
            <i className="fas fa-question-circle container__cart-wrap-pay-main-icon" />
          </div>
          <div className="container__cart-wrap-pay-main-price">
            {moneyConvert(money)}
            <span className="vnd">₫</span>
          </div>
        </div>
        <div className="container__cart-wrap-pay-delivery">
          <div className="container__cart-wrap-pay-delivery-text">
            Estimated Delivery &amp; Handling
          </div>
          <div className="container__cart-wrap-pay-delivery-price">
            0<span className="vnd">₫</span>
          </div>
        </div>
        <div className="container__cart-wrap-pay-total">
          <div className="container__cart-wrap-pay-total-text">Total</div>
          <div className="container__cart-wrap-pay-total-price">
            {moneyConvert(money)}
            <span className="vnd">₫</span>
          </div>
        </div>
        <div
          className="container__cart-wrap-pay-btn btn-shop"
          onClick={handlePay}
        >
          PAY
        </div>
      </div>
    </div>
  );
}

export default CartPay;
