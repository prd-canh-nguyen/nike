import React, { useEffect } from "react";
import apiCaller from "../util/apiCaller";
import { useSelector, useDispatch } from "react-redux";
import { actRenderRelateProduct } from "../actions/index";
import RelateProduct from "../components/RelateProduct/RelateProduct";

function RelateCartContainer(props) {
  var { sex } = props;
  const relateProduct = useSelector((state) => state.relateProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    apiCaller(`nike/relate/${sex}`).then(({ data }) => {
      dispatch(actRenderRelateProduct(data));
    });
  }, [sex]);
  return <RelateProduct relateProduct={relateProduct} />;
}

export default RelateCartContainer;
