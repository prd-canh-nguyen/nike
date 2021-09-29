import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import apiCaller from "../util/apiCaller";
import { actRenderProductMain } from "../actions/index";

import HomePage from ".././pages/HomePage/HomePage";
import { LoadingHome } from "../components/Loading/Loading";

function HomeContainer(props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const mapStateProductMain = useSelector((state) => state.mainProductSex);
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(actRenderProductMain([]));
    apiCaller(`nike/${slug}`).then((response) => {
      setLoading(false);
      var { data } = response;
      dispatch(actRenderProductMain(data));
    });
  }, [slug]);
  if (loading || mapStateProductMain.length === 0) {
    return <LoadingHome />;
  } else {
    return (
      <div>
        <HomePage products={mapStateProductMain} type={slug} />
      </div>
    );
  }
}

export default HomeContainer;
