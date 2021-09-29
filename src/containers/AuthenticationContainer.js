import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Registration from "../components/User/Registration";
import Login from "../components/User/Login";
import apiCaller from "../util/apiCaller";
import { actAuthentication, actShowForm } from "../actions/index";

function AuthenticationContainer(props) {
  const [isRegistration, setIsRegistration] = useState(false);
  const [formRegistration, setFormRegistration] = useState({});
  const [isLogin, setIsLogIn] = useState(false);
  const [formLogin, setFormLogin] = useState({});
  const [showTypesForm, setShowTypesForm] = useState("login");
  const [isShow, setIsShow] = useState(false);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);
  const isSuccess = useSelector((state) => state.authentication.isSuccess);
  const dispatch = useDispatch();
  function handleRegistration(value) {
    setIsRegistration(!isRegistration);
    setFormRegistration(value);
  }
  function handleLogin(value) {
    setIsLogIn(!isLogin);
    setFormLogin(value);
  }
  function showRegistration() {
    setShowTypesForm("registration");
  }
  function handleHideForm() {
    setIsShow(true);
    props.handleHideForm();
  }
  function preLogin() {
    setShowTypesForm("login");
  }
  useEffect(() => {
    props.isSuccess(isSuccess);
  }, [isSuccess]);
  useEffect(() => {
    setIsShow(false);
  }, [props.show]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    apiCaller("registration", "POST", formRegistration).then(({ data }) => {
      if (data.isSuccess === true) {
        setShowTypesForm("login");
      } else {
        if (JSON.stringify(formRegistration) !== "{}") {
          setMessage1("It looks like you're already a Member.");
        }
      }
    });
  }, [isRegistration]);
  useEffect(() => {
    if (JSON.stringify(formLogin) !== "{}") {
      apiCaller("user", "POST", formLogin).then(({ data }) => {
        if (data.token !== "") {
          localStorage.setItem("user", JSON.stringify(data.token));
          dispatch(
            actAuthentication({
              isSuccess: true,
              name: data.name,
            })
          );
        } else {
          if (formLogin.mail !== "") {
            setMessage("Your email or password was entered incorrectly.");
          }

          dispatch(
            actAuthentication({
              isSuccess: false,
              name: "",
            })
          );
        }
      });
    }
  }, [isLogin]);
  if (isShow == false) {
    if (showTypesForm === "login") {
      return (
        <Login
          handleLogin={handleLogin}
          showRegistration={showRegistration}
          handleHideForm={handleHideForm}
          message={message}
        />
      );
    } else {
      return (
        <Registration
          handleRegistration={handleRegistration}
          handleHideForm={handleHideForm}
          message={message1}
          preLogin={preLogin}
        />
      );
    }
  } else {
    return null;
  }
}

export default AuthenticationContainer;
