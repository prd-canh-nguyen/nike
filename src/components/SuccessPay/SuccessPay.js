import React from "react";
import cancel from "../../assets/image/cancel.svg";

function SuccessPay(props) {
  function handleSuccess() {
    props.handleSuccess();
  }
  return (
    <div className="container-modal success show">
      <div className="container__cart-wrap-pay-success">
        <div className="container__cart-wrap-pay-success-text">
          <i
            className="fas fa-check-circle container__cart-notify-larm-icon"
            style={{ marginRight: 15, fontSize: 26 }}
          ></i>
          {props.isProduct === 0 ? "No product" : "Payment success"}
        </div>
        <div className="">
          <img
            src={cancel}
            alt=""
            className="container__cart-wrap-pay-success-icon"
            onClick={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
}

export default SuccessPay;
