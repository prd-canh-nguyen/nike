import React from "react";

function Footer(props) {
  return (
    <div className="container-custom footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="footer__wrap">
              <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                  <ul className="footer__wrap-list">
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        FIND A STORE
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        BECOME A MEMBER
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        SIGN UP FOR EMAIL
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        SEND US FEEDBACK
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                  <ul className="footer__wrap-list">
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        GET HELP
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        Order Status
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        Delivery
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        Returns
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        Payment Options
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                  <ul className="footer__wrap-list">
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        ABOUT NIKE
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        News
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        Careers
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link small">
                        Investors
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                  <ul className="footer__wrap-list footer__wrap-list-icon">
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        <i className="fab fa-twitter footer__wrap-item-link-icon" />
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        <i className="fab fa-facebook-f footer__wrap-item-link-icon" />
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        <i className="fab fa-youtube footer__wrap-item-link-icon" />
                      </a>
                    </li>
                    <li className="footer__wrap-item">
                      <a href="#" className="footer__wrap-item-link">
                        <i className="fab fa-instagram footer__wrap-item-link-icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="footer__bottom">
                    <div className="footer__bottom-wrap">
                      <a className="footer__bottom-wrap-place-link">
                        <i className="fas fa-map-marker-alt footer__footer__bottom-wrap-icon" />
                        <div className="footer__footer__bottom-wrap-text">
                          Vietnam
                        </div>
                      </a>
                      <div className="footer__footer__bottom-wrap-text">
                        © 2021 Nike, Inc. All Rights Reserved
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
