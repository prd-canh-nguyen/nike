import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../assets/image/logo.svg";
import logo2 from "../../assets/image/logo2.svg";
import search from "../../assets/image/search.svg";
import cancel from "../../assets/image/cancel.svg";
import cart from "../../assets/image/cart.svg";
import menu from "../../assets/image/menu.svg";
import Menus from "../Menus/Menus";
import AuthenticationContainer from "../../containers/AuthenticationContainer";

const menusTop = [
  {
    to: "/nike/men",
    exact: true,
    name: "Help",
  },
  {
    to: "/nike/men",
    exact: true,
    name: "Join Us",
  },
  {
    to: "/nike/men",
    exact: true,
    name: "Sign In",
  },
];

function showNavBarTop() {
  var result = null;
  result = menusTop.map((element, index) => {
    return (
      <li key={index} className="navbar__wrap-item">
        <Link
          to={element.to}
          exact={element.exact.toString()}
          className="navbar__wrap-item-link"
        >
          {element.name}
        </Link>
      </li>
    );
  });
  return result;
}

function NavBar(props) {
  var { numberCart, scroll } = props;
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const isSuccesss = useSelector((state) => state.authentication.isSuccess);
  function handleCartPay() {
    props.handleCartPay();
  }
  function handleInput() {
    props.handleInput();
  }
  function handleMenus(value) {
    setShow(value);
    props.setShow(value)
  }
  function handleLogin() {
    setLogin(true);
    setShow(false);
  }
  function handleHideForm() {
    setLogin(false);
  }
  function handleLink() {
    setShow(false);
    props.setShow(false)
  }
  function isSuccess(value) {
    setLogin(!value);
    setIsLog(!value);
  }
  useEffect(() => {
    setIsLog(isSuccesss);
  });
  function showLogin() {
    var result = null;
    if (login) {
      result = (
        <AuthenticationContainer
          handleHideForm={handleHideForm}
          isSuccess={isSuccess}
        />
      );
    }
    return result;
  }
  return (
    <div>
      <div className="container-custom navbar-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="navbar__wrap hide-on-laptop">
                <img src={logo} alt="" className="navbar__wrap-img" />
                <ul className="navbar__wrap-list">
                  {/* showNavBarTop */}
                  {showNavBarTop()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-custom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className={`menu__wrap ${scroll ? "scroll" : ""}`}>
                <img src={logo2} alt="" className="menu__wrap-img" />
                <ul className="menu__wrap-list hide-on-laptop">
                  {/* showMainMenus */}
                  <Menus handleLink={handleLink} />
                </ul>
                <div className="menu__wrap-search-cart">
                  <div className="menu__wrap-search" onClick={handleInput}>
                    <div className="menu__wrap-search-icon">
                      <img src={search} alt="" />
                    </div>
                    <input
                      type="text"
                      className="menu__wrap-search-input hide-on-laptop"
                      placeholder="Search"
                      value={""}
                    />
                  </div>
                  <div className="menu__wrap-cart-">
                    <div className="menu__wrap-cart " onClick={handleCartPay}>
                      <img src={cart} alt="" />
                    </div>
                    <div
                      className={`${
                        numberCart === 0
                          ? "menu__wrap-cart-notify no-cart"
                          : "menu__wrap-cart-notify"
                      }`}
                    >
                      {numberCart}
                    </div>
                  </div>
                  <div
                    className="menu__wrap-menu"
                    onClick={() => {
                      handleMenus(true);
                    }}
                  >
                    <img src={menu} className="menu__wrap-menu-cart" />
                  </div>
                </div>
                {/* menu__wrap-search focus */}
                <div className="menu__wrap-exit ">
                  <img src={cancel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RESPONSIVE NAVBAR */}
      <div
        className={`container-modal-reponsive ${show ? "show" : ""}`}
        onClick={() => {
          handleMenus(false);
        }}
      ></div>
      <ul
        className={`menu__wrap-list reponsive ${
          show ? "show-menus" : "hide-menus"
        }`}
      >
        <img src={logo2} className="container-modal-reponsive-logo" />
        <Menus handleLink={handleLink} />
        <img src={logo} className="container-modal-reponsive-logo2" />
        <div
          className={`container__cart-wrap-pay-btn btn-shop container-modal-reponsive-login ${
            isLog ? "isLog" : ""
          }`}
          onClick={handleLogin}
        >
          Login
        </div>
      </ul>
      {showLogin()}
    </div>
  );
}

export default NavBar;
