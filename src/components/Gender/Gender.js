import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import checkedImg from "../../assets/image/checked.svg";

const sexs = ["men", "women", "kids"];

function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Gender(props) {
  const [type, setType] = useState("");
  const { sex } = props;
  var { slug } = useParams();
  function handleSort(){
    props.handleSort()
  }
  useEffect(() => {
    setType(sex);
  }, [sex]);
  function showSex() {
    var result = null;
    result = sexs.map((element, index) => {
      return (
        <Link
          to={`/nike/${element}/${slug}`}
          exact="true"
          key={index}
          className="container__wrap-product-gender-item"
          onClick={handleSort}
        >
          <div
            className={`container__wrap-product-gender-item-check ${
              element === type ? "checked" : ""
            }`}
          >
            <img
              src={element === type ? checkedImg : ""}
              alt=""
              className="container__wrap-product-gender-item-img"
            />
          </div>
          <div className="container__wrap-product-gender-item-text">
            {jsUcfirst(element)}
          </div>
        </Link>
      );
    });
    return result;
  }
  return (
    <div className="container__wrap-product-gender">
      <div className="container__wrap-product-gender-item-text">Gender</div>
      {showSex()}
    </div>
  );
}

export default Gender;
