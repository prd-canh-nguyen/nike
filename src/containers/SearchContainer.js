import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search/Search";
import apiCaller from "../util/apiCaller";

import {
  actSearch,
  actRenderProductSearch,
  actAddToCart,
} from "../actions/index";

function SearchContainer(props) {
  const [valueInput, setValueInput] = useState("");
  const products = useSelector((state) => state.showProductSearch);

  function valueSearch(e) {
    setValueInput(e.valueSearch);
  }
  const dispatch = useDispatch();
  var isShowSearch = useSelector((state) => state.showSearch);
  function closeSearch() {
    dispatch(actSearch(false));
  }
  useEffect(() => {
    if (valueInput != "") {
      apiCaller(`search/${valueInput}`, "GET", null).then((data) => {
        dispatch(actRenderProductSearch(data.data));
      });
    } else {
      dispatch(actRenderProductSearch([]));
    }
  }, [valueInput]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Search
      closeSearch={closeSearch}
      isShowSearch={isShowSearch}
      valueSearch={valueSearch}
      products={products}
    />
  );
}

export default SearchContainer;
