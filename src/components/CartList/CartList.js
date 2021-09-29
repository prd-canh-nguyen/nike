import React from "react";
import moneyConvert from "../../functions/moneyConvert";

function handleRemoveCart(index, props) {
  props.handleRemoveCart(index);
}

function CartList(props) {
  var { cartList } = props;
  var result = (
    <div className="container__cart-wrap-no-item">
      There are no items in your bag.
    </div>
  );
  if (cartList) {
    if (cartList.length > 0) {
      result = cartList.map((cartItem, index) => {
        var { img, name, type, price } = cartItem.product;
        var { size, number } = cartItem;
        return (
          <div key={index} className="container__cart-wrap-item">
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="row">
                <div className="col-xs-4 col-sm-2 col-md-2 col-lg-3">
                  <img
                    src={img[0]}
                    alt=""
                    className="container__cart-wrap-item-img"
                  />
                </div>
                <div className="col-xs-8 col-sm-10 col-md-10 col-lg-9">
                  <div className="container__cart-wrap-item-detail">
                    <div>{name}</div>
                    <div>
                      {moneyConvert(price)}
                      <span className="vnd">₫</span>
                    </div>
                  </div>
                  <div className="container__cart-wrap-item-detail">{type}</div>
                  <div className="container__cart-wrap-item-detail">
                    Monarch/Black/Opti Yellow
                  </div>
                  <div className="container__cart-wrap-item-detail">
                    <span>Size {size}</span>
                    <span>Quantity {number}</span>
                  </div>
                  <div
                    className="container__cart-wrap-item-detail"
                    onClick={() => {
                      handleRemoveCart(index, props);
                    }}
                  >
                    Remove
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  }
  return result;
}

export default CartList;
