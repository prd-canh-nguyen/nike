import React, { Component } from "react";
import cancel from "../../assets/image/cancel.svg";
import { checkMail, checkPassword } from "../../functions/checkForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      messageMail: null,
      messagePassword: null,
    };
  }
  handleForm = (event) => {
    var { target } = event;
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  handleLogin = () => {
    if (
      checkMail(this.state.mail) !== "Please enter a valid email address." &&
      checkMail(this.state.mail) !== "Email is incorrect." &&
      checkPassword(this.state.password) !== "Please enter a valid password."
    ) {
      this.props.handleLogin({
        mail: this.state.mail,
        password: this.state.password,
      });
    }
    this.setState({
      messageMail: checkMail(this.state.mail),
      messagePassword: checkPassword(this.state.password),
    });
  };
  showRegistration = () => {
    this.props.showRegistration();
  };
  handleHideForm = () => {
    this.props.handleHideForm();
  };
  render() {
    var { message } = this.props;
    return (
      <div className="modal-login">
        <div className="form-login login">
          <img
            src="./assets/img/logo2.svg"
            alt=""
            className="form-login__img"
          />
          <div onClick={this.handleHideForm}>
            <img src={cancel} alt="" className="form-cancle" />
          </div>
          
          <div className="form-login__title">
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </div>
          <div className="form-login__warap-input">
            <input
              type="text"
              className="form-login__input"
              placeholder="Email address"
              name="mail"
              value={this.state.mail}
              onChange={this.handleForm}
            />
          </div>
          <div className="form-login__error">{this.state.messageMail}</div>
          <div className="form-login__warap-input">
            <input
              type="password"
              className="form-login__input"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleForm}
            />
          </div>
          <div className="form-login__error">{this.state.messagePassword}</div>
          <div className="form-login__error">{this.state.messagePassword === null && this.state.messageMail === null  ? message : null}</div>
          <div className="form-login__forgot-password">Forgot password?</div>
          <div className="form-login__policy">
            By logging in, you agree to Nike's <span>Privacy Policy</span> and{" "}
            <span>Terms of Use.</span>
          </div>
          <div className="form-login__btn btn-shop" onClick={this.handleLogin}>
            SIGN IN
          </div>
        
          <div className="form-login__no-acount">
            Not a member? <span onClick={this.showRegistration}>Join Us.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
