import React, { useState } from "react";
import material from "../../assets/image/material.svg";
import moneyConvert from "../../functions/moneyConvert";
import NoteCart from "../../components/NoteCart/NoteCart";
import RelateProductContainer from "../../containers/RelateCartContainer";
import ImgModal from "../../components/ImgModal/ImgModal";

function showInfo(type, price, name) {
  return (
    <div>
      <div className="container__detail-product-type-price">
        <div className="container__detail-product-type">
          <div className="container__detail-product-type-text">{type}</div>
        </div>
        <div className="container__detail-product-price">
          {moneyConvert(price)}₫
        </div>
      </div>
      <div className="container__detail-product-name">{name}</div>
    </div>
  );
}

function AddToCart(props) {
  var {
    review,
    description,
    img,
    name,
    rating,
    size,
    slug,
    type,
    price,
    sex,
  } = props.cartProduct;
  const [imgModal, setImgModal] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [dimension, setDimension] = useState("");
  const [showMessage, setShowMessage] = useState("");
  const [index, setIndex] = useState("");
  const [position, setPosition] = useState(0);
  function showSize() {
    var result = null;
    function handleSize(index, size) {
      setCurrent(index);
      setDimension(size);
    }
    result = size.map((size, index) => {
      return (
        <div
          key={index}
          className={`container__detail-product-size-item ${
            current === index ? "choose" : ""
          }`}
          onClick={() => handleSize(index, size)}
        >
          {size}
        </div>
      );
    });
    return result;
  }
  function showImg(imgs) {
    function handleImgModal(index) {
      setIndex(index);
      setImgModal(true);
      setPosition(document.documentElement.scrollTop);
    }
    var result = null;
    if (imgs.length > 0) {
      result = imgs.map((img, index) => {
        return (
          <div
            key={index}
            className="col responsive col-xs-12 col-sm-12 col-md-6 col-lg-6"
          >
            <div data-aos="fade-up">
            <img
              src={img}
              alt=""
              className="container__detail-product-img"
              onClick={() => {
                handleImgModal(index);
              }}
            />
            </div>
          </div>
        );
      });
    }
    return result;
  }

  function showImgModal() {
    var result = null;
    if (imgModal) {
      return (
        <ImgModal
          isImgModal={imgModal}
          handleImgModal={handleImgModalProps}
          img={img}
          index={index}
          position={position}
        />
      );
    }
    return result;
  }

  function handleImgModalProps(position) {
    setImgModal(false);
  }
  function addProductToCart() {
    if (dimension === "") {
      setShowMessage("show");
    } else {
      setShowMessage("");
      props.size(dimension);
    }
  }
  return (
    <div>
      <div className="container-custom mg-t-30 responsive">
        <div className="container-custom-info col-xs-12 col-sm-12 hidden-md hidden-lg">
          {showInfo(type, price, name)}
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              {/* showImg */}
              <div className="row responsive img gutter-12">{showImg(img)}</div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="row">
                {/* showInfo */}
                <div className="container-custom-info hidden-xs hidden-sm col-md-4 col-lg-4">
                  {showInfo(type, price, name)}
                </div>
              </div>
              <div className="container__detail-product-material">
                <img
                  src={material}
                  alt=""
                  className="container__detail-product-material-img"
                />
                <div className="container__detail-product-material-text">
                  Sustainable Materials
                </div>
              </div>
              <div className="container__detail-product-size-title">
                Select Size
              </div>

              <div className="container__detail-product-size">
                {/* showSize */}
                {showSize()}
              </div>
              <div
                className={`container__detail-product-options-size ${showMessage}`}
              >
                Please select a size.
              </div>
              <div
                className="container__detail-product-btn btn-shop"
                onClick={addProductToCart}
              >
                Add To Bag
              </div>
              {/* NoteCart */}
              <NoteCart
                description={description}
                review={review}
                rating={rating}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom">
        <div className="container-fluid">
          <div className="container__product-like">
            <div className="container__product-like-title">
              YOU MIGHT ALSO LIKE
            </div>
            {/* RelateProduct */}
            <RelateProductContainer sex={sex} />
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <span className="has-color" />
                <span className="no-color" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ImgModal */}
      {showImgModal()}
    </div>
  );
}

export default AddToCart;
