import React from "react";
import ReactLoading from "react-loading";

export const LoadingHome = (props) => {
  return (
    <div className="container-modal-loading">
      <div className="loading">
        <ReactLoading type="bars" color="black" height={50} width={80} />
      </div>
    </div>
  );
};

export const LoadingProduct = (props) => {
  return (
    <div className="container-modal-loading-product">
      <div className="loading">
        <ReactLoading type="bars" color="black" height={50} width={80} />
      </div>
    </div>
  );
};

export const TestLoading = (props) => {
  window.scrollTo(0, 0);
  return (
    <div className="container-modal-loading-sex">
      <div className="loading mar">
        <ReactLoading type="bars" color="black" height={50} width={80} />
      </div>
    </div>
  );
};
