import React, { Component } from "react";
import cancel from "../../assets/image/cancel.svg";
import logo2 from "../../assets/image/logo2.svg";
import {
  checkMail,
  checkPassword,
  checkLastName,
  checkSex,
  checkFirstName,
} from "../../functions/checkForm";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      firstName: "",
      lastName: "",
      sex: "",
      messageMail: null,
      messagePassword: null,
      messageFirstName: null,
      messageLastName: null,
      messageSex: null,
    };
  }
  handleForm = (event) => {
    var { target } = event;
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  setSex = (sex) => {
    this.setState({
      sex: sex,
    });
  };
  handleRegistration = () => {
    if (
      checkMail(this.state.mail) === null &&
      checkPassword(this.state.password) === null &&
      checkLastName(this.state.lastName) === null &&
      checkFirstName(this.state.firstName) === null &&
      checkSex(this.state.sex) === null
    ) {
      this.props.handleRegistration({
        mail: this.state.mail,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        sex: this.state.sex,
      });
    }
    this.setState({
      messageMail: checkMail(this.state.mail),
      messagePassword: checkPassword(this.state.password),
      messageFirstName: checkFirstName(this.state.firstName),
      messageLastName: checkLastName(this.state.lastName),
      messageSex: checkSex(this.state.sex),
    });
  };
  handleHideForm = () => {
    this.props.handleHideForm();
  };
  preLogin = ()=>{
    this.props.preLogin()
  }
  render() {
    var { message } = this.props;
    console.log(message)
    return (
      <div className="modal-login">
        <div className="form-login register">
          <img src={logo2} alt="" className="form-login__img" />
          <div onClick={this.handleHideForm}>
            <img src={cancel} alt="" className="form-cancle" />
          </div>
          <div className="form-login__title">BECOME A NIKE MEMBER</div>
          <div className="form-login__des">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
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
          <div className="form-login__warap-input">
            <input
              type="text"
              className="form-login__input"
              placeholder="Fist Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleForm}
            />
          </div>
          <div className="form-login__error">{this.state.messageFirstName}</div>
          <div className="form-login__warap-input">
            <input
              type="text"
              className="form-login__input"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleForm}
            />
          </div>
          <div className="form-login__error">{this.state.messageLastName}</div>
          <div className="form-login__warap-sex">
            <div
              className={`form-login__sex ${
                this.state.sex === "Male" ? "choose" : ""
              }`}
              onClick={() => {
                this.setSex("Male");
              }}
            >
              Male
            </div>
            <div
              className={`form-login__sex ${
                this.state.sex === "Female" ? "choose" : ""
              }`}
              onClick={() => {
                this.setSex("Female");
              }}
            >
              Female
            </div>
          </div>
          <div className="form-login__error">{this.state.messageSex}</div>
          <div className="form-login__error">
            {this.state.messageMail === null &&
            this.state.messagePassword === null &&
            this.state.messageFirstName === null &&
            this.state.messageLastName === null &&
            this.state.messageSex === null
              ? message
              : null}
          </div>
          <div className="form-login__policy">
            By creating an account, you agree to Nike's{" "}
            <span>Privacy Policy</span> and <span>Terms of Use.</span>
          </div>
          <div
            className="form-login__btn btn-shop"
            onClick={this.handleRegistration}
          >
            SIGN IN
          </div>
          <div className="form-login__no-acount">
            Not a member? <span onClick={this.preLogin} >Sign In.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
