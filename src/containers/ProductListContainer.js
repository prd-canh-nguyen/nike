import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import apiCaller from "../util/apiCaller";
import checkParams from "../functions/checkParams";

import { actRenderCartPage, actFilter } from "../actions/index";

function filterPriceMain(productList, value) {
  let filterStar = productList.filter((product) => {
    return product.price >= value.start;
  });
  let filterEnd = filterStar.filter((product) => {
    return product.price < value.end;
  });
  if (filterEnd.length === 0) {
    filterEnd = ["NO PRODUCT"];
  }
  return filterEnd;
}

function ProductListContainer(props) {
  const [productList, setProductList] = useState([]);
  var { sex, slug } = useParams();
  const dispatch = useDispatch();
  function sortBy(sort) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setProductList(
      productList.sort(function (a, b) {
        if (sort === "Price: Hight-Low") {
          return b.price - a.price;
        }
        if (sort === "Price: Low-Hight") {
          return a.price - b.price;
        }
      })
    );
    if (sort === "Newest") {
      return apiCaller(`nike/${sex}/${slug}`).then(({ data }) => {
        return setProductList(data);
      });
    }
  }
  function filterPrice(value) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    apiCaller(`nike/${sex}/${slug}`).then(({ data }) => {
      let a = filterPriceMain(data, value);
      setProductList(a);
    });
  }
  useEffect(() => {
    apiCaller(`nike/${sex}/${slug}`).then(({ data }) => {
      setProductList(data);
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, [sex, slug]);
  useEffect(() => {
    return () => {
      dispatch(actRenderCartPage(false));
    };
  }, []);
  return (
    <ProductListPage
      productList={productList}
      title={checkParams(slug)}
      sortBy={sortBy}
      sex={sex}
      filterPrice={filterPrice}
    />
  );
}

export default ProductListContainer;
