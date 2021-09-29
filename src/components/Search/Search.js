import React, { useState, useRef } from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";
import logo2 from "../../assets/image/logo2.svg";
import search from "../../assets/image/search.svg";
import cancel from "../../assets/image/cancel.svg";
import moneyConvert from "../../functions/moneyConvert";
import { LoadingHome } from "../Loading/Loading";

import { useDispatch } from "react-redux";
import { actAddToCart } from "../../actions/index";

function Search(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const typingTimeoutRef = useRef(null);
  const { products } = props;
  var params = useLocation().pathname.slice(6, 10);

  function handleInput(event) {
    var { value } = event.target;
    setInput(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const valueSearch = {
        valueSearch: value,
      };
      props.valueSearch(valueSearch);
    }, 500);
  }
  function closeSearch() {
    props.closeSearch();
  }
  var { isShowSearch } = props;
  function showProduct(products, history, props, params, input) {
    function onToCart(slug) {
      dispatch(actAddToCart({}));
      props.closeSearch();
      if (params != "cart") {
        history.push(`cart/${slug}`);
      } else {
        history.push(`${slug}`);
      }
    }
    var result = input !== "" ? <LoadingHome /> : null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        var { name, price, img, sex, slug } = product;
        return (
          <li key={index} className="row search__wrap-item">
            <div className="search__wrap-item-img">
              <img src={img[0]} alt="" className="search__wrap-item-img-" />
            </div>
            <div className="search__wrap-item-wrap">
              <div className="search__wrap-item-text">{`${name}  (${sex})`}</div>
              <div className="search__wrap-item-text">
                {moneyConvert(price)}đ
              </div>
              <div
                className="search__wrap-item-text"
                onClick={() => {
                  onToCart(slug);
                }}
              >
                Detail
              </div>
            </div>
          </li>
        );
      });
    }
    return result;
  }
  return (
    <div className={`container-custom search ${isShowSearch ? "" : "isHidden"}`}>
      <div className="container-fluid">
        <div className="search__wrap">
          <div className="search__wrap-header">
            <img src={logo2} alt="" className="search__wrap-header-logo" />
            <div className="search__wrap-input">
              <div className="menu__wrap-search-icon">
                <img src={search} alt="" />
              </div>
              <input
                type="text"
                className="menu__wrap-search-input"
                placeholder="Search"
                value={input}
                onChange={handleInput}
              />
            </div>
            <img
              src={cancel}
              alt=""
              className="search__wrap-cancel"
              onClick={closeSearch}
            />
          </div>
          <ul className="search__wrap-list">
            {showProduct(products, history, props, params, input)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;
