import React, { useState } from "react";
import { Link } from "react-router-dom";
import moneyConvert from "../../functions/moneyConvert";
import { TestLoading } from "../../components/Loading/Loading";
import EmptyProduct from "../../components/EmptyProduct/EmptyProduct";

function ProductItem(products) {
  var result = null;
  if (products.length > 0) {
    result = products.map((product, index) => {
      var { img, name, type, price, slug } = product;
      return (
        <Link
          key={index}
          to={`/nike/cart/${slug}`}
          exact="true"
          className="col col-xs-6 col-sm-6 col-md-6 col-lg-4 no-direction container__wrap-product-item-wrap"
        >
          <img src={img} alt="" className="container__wrap-product-item-img" />
          <div className="container__wrap-product-item-detail">
            <div className="container__wrap-product-item-detail-type">
              {name}
            </div>
            <div className="container__wrap-product-item-detail-type">
              {type}
            </div>
            <div className="container__wrap-product-item-detail-type">
              1 Colour
            </div>
            <div className="container__wrap-product-item-detail-type">
              {moneyConvert(price)}₫
            </div>
          </div>
        </Link>
      );
    });
  }
  return result;
}

function DetailProducts(props) {
  var { productList } = props;
  if (productList.length === 1) {
    if (productList[0] === "NO PRODUCT") {
      return (
        <div className="col col-xs-12 col-sm-12 col-md-9 col-lg-10">
          <div className="row gutter-16">
            <EmptyProduct />
          </div>
        </div>
      );
    }
  }
  if (productList.length === 0) {
    return (
      <div className="col col-xs-12 col-sm-12 col-md-9 col-lg-10">
        <div className="row gutter-16">
          <TestLoading />
        </div>
      </div>
    );
  } else {
    return (
      <div className="col col-xs-12 col-sm-12 col-md-9 col-lg-10">
        <div className="row gutter-16 responsive">
          {/* ProductItem */}
          {ProductItem(productList)}
        </div>
      </div>
    );
  }
}

export default DetailProducts;
