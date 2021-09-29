import React, { useState } from "react";
import { Link } from "react-router-dom";
import moneyConvert from "../../functions/moneyConvert";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function showRelateProduct(products) {
  var result = null;
  if (products.length > 0) {
    result = products.map((product, index) => {
      var { slug, img, name, type, price } = product;
      return (
        <Link
          to={slug}
          exact={"true"}
          key={index}
          className="col-xs-4 col-sm-4 col-md-4 col-lg-4 focus-no-border no-direction"
        >
          <div className="container__wrap-product-item">
            <img
              src={img}
              alt=""
              className="container__wrap-product-item-img"
            />
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
          </div>
        </Link>
      );
    });
  }
  return result;
}

function RelateProduct(props) {
  const [position, setPosition] = useState(function () {
    if (parseInt(document.body.clientWidth) <= 768) {
      return 1.5;
    } else {
      return 3;
    }
  });
  window.addEventListener("resize", function () {
    if (parseInt(document.body.clientWidth) <= 768) {
      setPosition(1.5);
    } else {
      setPosition(3);
    }
  });
  var { relateProduct } = props;
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: position,
    slidesToScroll: 1,
  };
  return (
    <div className="row no-wrap has-border">
      {/* showRelateProduct */}
      <Slider {...settings}>{showRelateProduct(relateProduct)}</Slider>
    </div>
  );
}

export default RelateProduct;
