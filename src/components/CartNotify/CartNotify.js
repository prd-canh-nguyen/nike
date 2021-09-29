import React from "react";
import moneyConvert from "../../functions/moneyConvert";

import cancel from "../../assets/image/cancel.svg";

function CartNotify(props) {
  var { name, type, price, img } = props.cartProductDetail.product;
  var { size } = props.cartProductDetail;
  function handleCloseNotify() {
    props.handleCloseNotify();
  }
  function handleCheckCart() {
    props.handleCheckCart();
  }
  return (
    <div className="container-modal-notify">
      <div className="container__cart-notify">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container__cart-notify-larm">
              <i className="fas fa-check-circle container__cart-notify-larm-icon" />
              <div className="container__cart-notify-larm-text">Add to Bag</div>
            </div>
            <img
              src={cancel}
              className="container__cart-notify-larm-exit"
              onClick={handleCloseNotify}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-4 col-sm-3 col-md-3 col-lg-3">
            <img
              src={img[0]}
              alt=""
              className="container__cart-wrap-item-img"
            />
          </div>
          <div className="col col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <div className="container__cart-notify-detail">{name}</div>
            <div className="container__cart-notify-detail">{type}</div>
            <div className="container__cart-notify-detail">
              <span className="ma-r-10">Size {size}</span>
            </div>
            <div className="container__cart-notify-detail">
              {moneyConvert(price)}₫
            </div>
            <div
              className="container__cart-notify-detail-btn btn-shop"
              onClick={handleCheckCart}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartNotify;
