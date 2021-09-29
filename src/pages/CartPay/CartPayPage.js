import React, { useState } from "react";
import cancel from "../../assets/image/cancel.svg";
import CartList from "../../components/CartList/CartList";
import CartPay from "../../components/CartPay/CartPay";

function CartPayPage(props) {
  const [code, setCode] = useState(true);
  function handleRemoveCart(index) {
    props.handleRemoveCart(index);
  }
  function handleCode() {
    setCode(false);
  }
  function showCode() {
    var result = null;
    if (code) {
      result = (
        <div>
          <div className="container__cart-wrap-code">
            <div className="container__cart-wrap-code-title">
              HAVE A PROMO CODE?
            </div>
            <div className="container__cart-wrap-code-text">
              If you have a promo code you will be able to apply it on the
              payment page during checkout.
            </div>
            <img
              src={cancel}
              alt=""
              className="container__cart-wrap-code-cancle"
              onClick={handleCode}
            />
          </div>
        </div>
      );
    }
    return result;
  }
  function handlePay() {
    props.handlePay();
  }
  return (
    <div>
      <div className="container-custom">
        <div className="container-fluid">
          <div className="container__cart">
            <div className="row container__cart-responsive">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div className="container__cart-wrap">
                  {/* showCode */}
                  {showCode()}
                  <div className="container__cart-wrap-title">Bag</div>

                  {/* CartList */}
                  <div className="container__cart-wrap-list" >
                    <CartList
                      cartList={props.cartList}
                      handleRemoveCart={handleRemoveCart}
                    />
                  </div>

                </div>
              </div>
              {/* CartPay */}
              <CartPay cartList={props.cartList} handlePay={handlePay} />
            </div>
            <div className="container__cart-wrap-item-favourites">
                    <div className="container__cart-wrap-item-favourites-title">
                      Favourites
                    </div>
                    <div className="container__cart-wrap-item-favourites-text">
                      <span>Want to view your favourites?</span>
                      <span>Join us</span>
                      <span> or</span>
                      <span>Sign in</span>
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPayPage;
