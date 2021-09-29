import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

HomePage.propTypes = {};

function HomePage(props) {
  var { products, type } = props;
  let history = useHistory();
  var standard = type.charAt(0).toUpperCase() + type.slice(1);
  function handelLink() {
    history.push(`cart/${products[0].slug}`);
  }
  if (products.length > 0) {
    return (
      <div>
        <div className="container-custom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="container__wrap">
                  {/* <div className="container__wrap-title">{standard}</div> */}
                  <div data-aos="zoom-in">
                    <div className="container__wrap-img">
                      <div className="container__wrap-img" onClick={handelLink}>
                        <img
                          src={products[0].img}
                          alt=""
                          className="container__wrap-img-"
                        />
                        <div className="container__wrap-text">
                          <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                          >
                            <div className="container__wrap-text-title">
                              {products[0].description[0]}
                            </div>
                            <div className="container__wrap-text-main">
                              {products[0].description[2]}
                            </div>
                            <div className="container__wrap-text-title">
                              {products[0].description[1]}
                            </div>
                            <div className="container__wrap-text-button btn-shop mg-t-20">
                              Shop
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container__wrap-title">Trending</div>
                  <div className="container__wrap-trending">
                    <div className="row gutter-16">
                      <div data-aos="flip-left">
                        <div className="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <Link
                            to={`${type}/${products[1].slug}`}
                            exact="true"
                            className="container__wrap-trending-img"
                          >
                            <img
                              src={products[1].img}
                              alt=""
                              className="container__wrap-trending-img-"
                            />
                            <div className="container__wrap-trending-title-button">
                              <div className="container__wrap-trending-title">
                                {products[1].description[0]}
                              </div>
                              <div className="container__wrap-trending-button btn-shop mg-t-20">
                                Shop
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div data-aos="flip-right">
                        <div className="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
                          <Link
                            to={`${type}/${products[2].slug}`}
                            exact="true"
                            className="container__wrap-trending-img"
                          >
                            <img
                              src={products[2].img}
                              className="container__wrap-trending-img-"
                            />
                            <div className="container__wrap-trending-title-button">
                              <div className="container__wrap-trending-title black">
                                {products[2].description[0]}
                              </div>
                              <div className="container__wrap-trending-button black-hover btn-shop mg-t-20">
                                Shop
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container__wrap-title">Featured</div>
                  <div data-aos="zoom-in-down">
                    <div className="container__wrap-featured">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="container__wrap-featured-img">
                            <Link
                              to={`${type}/${products[3].slug}`}
                              exact="true"
                            >
                              <img
                                src={products[3].img}
                                alt=""
                                className="container__wrap-featured-img-"
                              />
                            </Link>
                          </div>
                          <div className="container__wrap-featured-title-button">
                              <div className="container__wrap-featured-title">
                                {products[3].description[0]}
                              </div>
                              <div className="container__wrap-featured-main">
                                {products[3].description[2]}
                              </div>
                              <div className="container__wrap-featured-title">
                                {products[3].description[1]}
                              </div>
                              <Link
                                to={`${type}/${products[3].slug}`}
                                exact="true"
                                className="container__wrap-featured-button btn-shop mg-t-20"
                              >
                                Shop
                              </Link>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container__wrap-title">Featured</div>
                  <div className="container__wrap-essentials">
                    <div className="row gutter-16">
                      <div data-aos="fade-up" data-aos-duration="500">
                        {" "}
                        <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                          <Link
                            to={`${type}/${products[4].slug}`}
                            exact="true"
                            className="container__wrap-essentials-img"
                          >
                            <img
                              src={products[4].img}
                              alt=""
                              className="container__wrap-essentials-img-"
                            />
                            <div className="container__wrap-essentials-btn btn-shop">
                              {products[4].description[0]}
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div data-aos="fade-up" data-aos-duration="500">
                        <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                          <Link
                            to={`${type}/${products[5].slug}`}
                            exact="true"
                            className="container__wrap-essentials-img"
                          >
                            <img
                              src={products[5].img}
                              alt=""
                              className="container__wrap-essentials-img-"
                            />
                            <div className="container__wrap-essentials-btn btn-shop small-">
                              Shorts
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div data-aos="fade-up" data-aos-duration="500">
                        <div className="col col-xs-12 col-sm-4 col-md-4 col-lg-4">
                          <Link
                            to={`${type}/${products[6].slug}/`}
                            exact="true"
                            className="container__wrap-essentials-img"
                          >
                            <img
                              src={products[6].img}
                              alt=""
                              className="container__wrap-essentials-img-"
                            />
                            <div className="container__wrap-essentials-btn btn-shop">
                              {products[6].description[0]}
                            </div>
                          </Link>
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
  } else {
    return <div></div>;
  }
}

export default HomePage;
