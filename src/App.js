import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./assets/css/base.css";
import "./assets/css/main.css";
import "./assets/css/reponsive.css";
import "aos/dist/aos.css";
import Aos from "aos";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Foorter/Footer";
import SearchContainer from "./containers/SearchContainer";
import {
  actAuthentication,
  actRenderCartPage,
  actScroll,
  actSearch,
} from "./actions/index";
import apiCaller from "./util/apiCaller";
import routes from "./routes";

function showRoute() {
  var result = null;
  result = routes.map((route, index) => {
    return (
      <Route
        key={index}
        exact={route.exact}
        path={route.path}
        component={route.main}
      />
    );
  });
  return result;
}

function App() {
  const [scroll, setScroll] = useState(false);
  const [menus, setMenus] = useState(false);
  const dispatch = useDispatch();
  var isShowCartNotify = useSelector((state) => state.showNotifyCart);
  var isRenderCartPay = useSelector((state) => state.renderCartPage);
  var isShowSearch = useSelector((state) => state.showSearch);
  var numberCart = useSelector((state) => {
    var number = 0;
    for (let i = 0; i < state.addProductsToCart.length; i++) {
      number = state.addProductsToCart[i].number + number;
    }
    return number;
  });
  var showFilter = useSelector((state) => state.showFilter);
  function handleCartPay() {
    dispatch(actRenderCartPage(true));
  }
  function handleInput() {
    dispatch(actSearch(true));
  }
  function ShowCartNotify() {
    if (isRenderCartPay) {
      return <Redirect to="/nike/pay-cart" />;
    }
  }
  function setShow(value) {
    setMenus(value);
  }
  window.onscroll = function () {
    if (document.documentElement.scrollTop >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    dispatch(actScroll(scroll));
  }, [scroll]);
  useEffect(() => {
    var token = "";
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user"));
    }
    apiCaller("token", "POST", { token: token }).then((response) => {
      if (response !== undefined) {
        dispatch(actAuthentication(response.data));
      }
    });
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div
      className={`${
        isShowCartNotify || isShowSearch || menus || showFilter ? "App" : ""
      }`}
    >
      <Router>
        <SearchContainer />
        {/* NAVBAR */}
        <NavBar
          numberCart={numberCart}
          handleCartPay={handleCartPay}
          handleInput={handleInput}
          scroll={scroll}
          setShow={setShow}
        />
        {/* ROUTES */}
        <div className={`${scroll ? "mg-t-80" : ""}`}>
          <Switch>{showRoute()}</Switch>
        </div>
        {/* FOOTER */}
        {/* ShowCartNotify */}
        {ShowCartNotify()}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
