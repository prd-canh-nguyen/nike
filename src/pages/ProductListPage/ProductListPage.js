import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailProducts from "../../components/DetailProducts/DetailProducts";
import { useParams } from "react-router-dom";
import down from "../../assets/image/down.svg";
import Gender from "../../components/Gender/Gender";
import FilterPrice from "../../components/FilterPrice/FilterPrice";
import black from "../../assets/image/black.svg";
import cancel2 from "../../assets/image/cancel2.svg";
import { actFilter } from "../../actions/index";

function ProductListPage(props) {
  const [trend, setTrend] = useState(false);
  const [ess, setEss] = useState(false);
  const [filter, setFilter] = useState("Newest");
  const [show, setShow] = useState(false);
  const [checked, setCheched] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  var { sex, slug } = useParams();
  const dispatch = useDispatch();
  function handleOption(index) {
    if (index === 2) {
      setTrend(!trend);
    }
    if (index === 4) {
      setEss(!ess);
    }
  }
  function handleFilter(value) {
    setCheched(!checked);
    setFilter(value);
    setShow(false);
    props.sortBy(value);
  }
  function handleShow() {
    setShow(!show);
  }
  function handleSort() {
    setFilter("Newest");
  }
  function filterPrice(value) {
    props.filterPrice(value);
    setFilter("Newest");
  }
  function handleShowFilter(value) {
    setIsFilter(value);
    dispatch(actFilter(value))
  }
  useEffect(() => {
    setFilter("Newest");
  }, [sex, slug]);

  function showCategory() {
    return (
      <ul className="container__wrap-product-theme-list">
        <li className="container__wrap-product-theme-item">
          <Link
            to={`/nike/cart/basketball-shoe`}
            exact="true"
            className="container__wrap-product-them-children-item"
          >
            New form Nike
          </Link>
        </li>
        <li
          className={`container__wrap-product-theme-item ${
            trend ? "show" : ""
          } hide-on-mid-tablap`}
        >
          <div
            onClick={() => {
              handleOption(2);
            }}
          >
            {" "}
            Trending <span style={{ float: "right", marginRight: 16 }}>+</span>
          </div>
          <ul className="container__wrap-product-them-children">
            <li className="container__wrap-product-them-children-item">
              <Link
                to={`new-releases`}
                exact="true"
                className="container__wrap-product-them-children-item"
              >
                New releases
              </Link>
            </li>
            <li className="container__wrap-product-them-children-item">
              <Link
                to={`best-sellers`}
                exact="true"
                className="container__wrap-product-them-children-item"
              >
                Best sellers
              </Link>
            </li>
          </ul>
        </li>
        <li className="container__wrap-product-theme-item hide-on-min-laptop">
          <Link
            to={`new-releases`}
            exact="true"
            className="container__wrap-product-them-children-item"
          >
            New releases
          </Link>
        </li>
        <li className="container__wrap-product-theme-item hide-on-min-laptop">
          <Link
            to={`best-sellers`}
            exact="true"
            className="container__wrap-product-them-children-item"
          >
            Best sellers
          </Link>
        </li>
        <li className="container__wrap-product-theme-item">
          <Link
            to={`supper-2-hits`}
            exact="true"
            className="container__wrap-product-them-children-item"
          >
            Supper 2 hits
          </Link>
        </li>
        <li className="container__wrap-product-theme-item hide-on-min-laptop">
          <Link
            to={`tops-t-shirts`}
            exact="true"
            className="container__wrap-product-them-children-item"
          >
            Tops and T-Shirts
          </Link>
        </li>
        <li className="container__wrap-product-theme-item hide-on-min-laptop">
          <Link
            to={`shorts`}
            exact="true"
            className="container__wrap-product-them-children-item hide-on-min-laptop"
          >
            Shorts
          </Link>
        </li>
        <li className="container__wrap-product-theme-item hide-on-min-laptop">
          <Link
            to={`pants-leggings`}
            exact="true"
            className="container__wrap-product-them-children-item hide-on-min-laptop"
          >
            Pants and Lenggings
          </Link>
        </li>
        <li
          className={`container__wrap-product-theme-item ntn-9 ${
            ess ? "show" : ""
          } hide-on-mid-tablap`}
        >
          <div
            onClick={() => {
              handleOption(4);
            }}
          >
            The Essentials{" "}
            <span style={{ float: "right", marginRight: 16 }}>+</span>
          </div>

          <ul className="container__wrap-product-them-children">
            <li className="container__wrap-product-them-children-item">
              <Link
                to={`tops-t-shirts`}
                exact="true"
                className="container__wrap-product-them-children-item"
              >
                Tops and T-Shirts
              </Link>
            </li>
            <li className="container__wrap-product-them-children-item">
              <Link
                to={`shorts`}
                exact="true"
                className="container__wrap-product-them-children-item"
              >
                Shorts
              </Link>
            </li>
            <li className="container__wrap-product-them-children-item">
              <Link
                to={`pants-leggings`}
                exact="true"
                className="container__wrap-product-them-children-item"
              >
                Pants and Lenggings
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
  function optionShow(show, isTrue) {
    function showImg(filter, sort) {
      var checkedImg = isTrue ? (
        <div className={`container__wrap-product-filter-wrap-option-item-img ${filter === sort ? "checked" : ""}`}>
          <img src={filter === sort ? black : ""} />
        </div>
      ) : null;
      return checkedImg;
    }
    return (
      <div
        className={`container__wrap-product-filter-wrap-option nav ${
          show ? "show" : ""
        }`}
      >
        <ul className="container__wrap-product-filter-wrap-option-list">
          <li
            className="container__wrap-product-filter-wrap-option-item"
            onClick={() => {
              handleFilter("Newest");
            }}
          >
            <div className="container__wrap-product-filter-wrap-option-item-text-img">
              {showImg(filter, "Newest")}
              <div>Newest</div>
            </div>
          </li>
          <li
            className="container__wrap-product-filter-wrap-option-item"
            onClick={() => {
              handleFilter("Price: Hight-Low");
            }}
          >
            <div className="container__wrap-product-filter-wrap-option-item-text-img">
              {showImg(filter, "Price: Hight-Low")}
              <div> Price: Hight-Low</div>
            </div>
          </li>
          <li
            className="container__wrap-product-filter-wrap-option-item"
            onClick={() => {
              handleFilter("Price: Low-Hight");
            }}
          >
            <div className="container__wrap-product-filter-wrap-option-item-text-img">
              {showImg(filter, "Price: Low-Hight")}
              <div> Price: Low-Hight</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="container-custom mg-t-30">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="container__wrap">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="container__wrap-product">
                    <div className="container__wrap-product-title">
                      {/* TITLE */}
                      {props.title}
                    </div>
                    {/* optionShow */}
                    <div className="row">
                      <div className="hidden-xs hidden-sm col-md-12 col-lg-12">
                        <div className="container__wrap-product-filter-wrap">
                          <div className="container__wrap-product-filter-wrap-text">
                            Sort By:
                          </div>
                          <div
                            className="container__wrap-product-filter-wrap-icon"
                            onClick={handleShow}
                          >
                            {filter}
                            <img
                              src={down}
                              alt=""
                              className="container__wrap-product-filter-wrap-icon-img"
                            />
                          </div>
                          {/* option filter */}
                          {optionShow(show, false)}
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 hidden-md hidden-lg">
                        <div
                          className="btn-filter"
                          onClick={() => {
                            handleShowFilter(true);
                          }}
                        >
                          Filter
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutter-16">
                <div className="col col-xs-12 col-sm-12 col-md-3 col-lg-2">
                  {/* showCategory */}
                  {showCategory()}
                  <div
                    className={`filter-responsive ${
                      isFilter ? "filter-responsive-show" : ""
                    }`}
                  >
                    {/* optionShow */}
                    {/* Gender */}
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 hidden-md hidden-lg">
                        <div className="col-xs-12 col-sm-12 hidden-md hidden-lg filter-responsive-wrap">
                          <div
                            className="filter-responsive-cancel-img"
                            onClick={() => {
                              handleShowFilter(false);
                            }}
                          >
                            <img src={cancel2} />
                          </div>
                          <div className="filter-responsive-title">Filter</div>
                        </div>
                        <div className="container__wrap-product-filter-wrap-text">
                          Sort By
                        </div>
                        {optionShow(true, true)}
                      </div>
                    </div>
                    <div className="row">
                      <Gender sex={props.sex} handleSort={handleSort} />
                      {/* FilterPrice */}
                      <FilterPrice
                        filterPrice={filterPrice}
                        sortBy={filter}
                        checked={checked}
                      />
                    </div>
                  </div>
                </div>
                {/* DetailProducts */}
                <div className="container__wrap-product-wrap">
                  <DetailProducts productList={props.productList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
