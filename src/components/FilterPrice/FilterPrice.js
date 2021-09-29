import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import checkedImg from "../../assets/image/checked.svg";
import { useParams } from "react-router-dom";

const price = [
  { start: 200000, end: 500000 },
  { start: 500000, end: 1000000 },
  { start: 1000000, end: 2000000 },
  { start: 2000000, end: 20000000 },
];

function FilterPrice(props) {
  var { sex, slug } = useParams();
  const [range, setRange] = useState(-1);
  const { sortBy, checked } = props;
  function anldeRangePrice(index, element) {
    setRange(index);
    props.filterPrice(element);
  }
  useEffect(() => {
    setRange(-1);
  }, [sex, slug]);
  useEffect(() => {
    if (sortBy === "Newest") {
      setRange(-1);
    }
  }, [checked]);
  function FilterPrice() {
    var result = null;
    result = price.map((element, index) => {
      return (
        <div
          key={index}
          className="container__wrap-product-gender-item"
          onClick={() => {
            anldeRangePrice(index, element);
          }}
        >
          <div
            className={`container__wrap-product-gender-item-check ${
              range === index ? "checked" : ""
            }`}
          >
            <img
              src={range === index ? checkedImg : ""}
              alt=""
              className="container__wrap-product-gender-item-img"
            />
          </div>
          <div className="container__wrap-product-gender-item-text">
            {`${element.start / 1000000} - ${element.end / 1000000} (Million)`}
          </div>
        </div>
      );
    });
    return result;
  }
  return (
    <div className="container__wrap-product-gender price">
      <div className="container__wrap-product-gender-item-text">Shop by Price</div>
      {FilterPrice()}
    </div>
  );
}

export default FilterPrice;
