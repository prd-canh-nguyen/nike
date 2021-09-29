import React from "react";
import down from "../../assets/image/down.svg";
import AddReviewContainer from "../../containers/AddReviewContainer";

function showStar(rating) {
  var result = [];
  for (let i = 1; i <= rating; i++) {
    result.push(<i key={i} className="fas fa-star container__comment-list-star choose"/>);
  }
  for (let i = 1; i <= 5 - rating; i++) {
    result.push(<i key={5 + i} className="fas fa-star container__comment-list-star"/>);
  }
  return result;
}

function showReview(reviews) {
  var result = null;
  if (reviews.length > 0) {
    result = reviews.map((review, index) => {
      return (
        <li key={index} className="container__comment-item">
          <div className="container__comment-item-wrap">
            <div className="container__comment-item-start-name">
              <div className="container__comment-item-start">
                {showStar(review.rating)}
              </div>
            </div>
            <div className="container__comment-item-name">
              {review.name} - {review.time}
            </div>
          </div>
          <div className="container__comment-user">{review.content}</div>
        </li>
      );
    });
  }
  return result;
}

function NoteCart(props) {
  var { description, review, rating } = props;
  return (
    <div>
      <div className="container__detail-product-describe">{description[0]}</div>
      <ul
        className="container__detail-product-delivery-return-list mg-b-40"
        id="container__detail-product-delivery-return-list"
      >
        <li className="container__detail-product-size-fix-item">
          {description[1][0]}
        </li>
        <li className="container__detail-product-size-fix-item">
          {description[1][1]}
        </li>
        <li className="container__detail-product-size-fix-item">
          {description[1][2]}
        </li>
      </ul>
      <div className="container__detail-product-delivery-return border-top">
        <div
          className="container__detail-product-delivery-return-title"
          data-toggle="collapse"
          data-parent="#accordion"
          data-target="#collapse1"
        >
          <div className="container__detail-product-delivery-return-title-text">
            Size &amp; Fit
          </div>
          <i className="fas fa-chevron-down down"></i>
        </div>
        <div id="collapse1" className="panel-collapse collapse">
          <ul
            className="container__detail-product-delivery-return-list"
            id="container__detail-product-delivery-return-list"
          >
            <li className="container__detail-product-size-fix-item">
              {description[2][0]}
            </li>
            <li className="container__detail-product-size-fix-item">
              {description[2][1]}
            </li>
            <li className="container__detail-product-size-fix-item">
              {description[2][2]}
            </li>
          </ul>
        </div>
      </div>
      <div className="container__detail-product-delivery-return">
        <div
          className="container__detail-product-delivery-return-title"
          data-toggle="collapse"
          data-parent="#accordion"
          data-target="#collapse2"
        >
          <div className="container__detail-product-delivery-return-title-text">
            Free Delivery and Returns
          </div>
          <i className="fas fa-chevron-down down"></i>
        </div>
        <div id="collapse2" className="panel-collapse collapse">
          <ul
            className="container__detail-product-delivery-return-list"
            id="container__detail-product-delivery-return-list"
          >
            <li className="container__detail-product-size-fix-item">
              {description[3][0]}
            </li>
            <li className="container__detail-product-size-fix-item">
              {description[3][1]}
            </li>
            <li className="container__detail-product-size-fix-item">
              {description[3][2]}
            </li>
          </ul>
        </div>
      </div>

      <div className="container__detail-product-delivery-return border-top">
        <div
          className="container__detail-product-delivery-return-title"
          data-toggle="collapse"
          data-parent="#accordion"
          data-target="#collapse3"
        >
          <div className="container__detail-product-delivery-return-title-text">
            Review ({review.length})
          </div>
          <div className="container__detail-product-delivery-img-wrap">
            <div className="container__detail-product-delivery-img-icon-wrap">
              <i className="fas fa-star " />
              <i className="fas fa-star " />
              <i className="fas fa-star " />
              <i className="fas fa-star " />
              <i className="fas fa-star gray-star" />
            </div>
            <i className="fas fa-chevron-down down"></i>
          </div>
        </div>
        <div id="collapse3" className="panel-collapse collapse">
          <ul className="container__comment-list">
            {showReview(review, rating)}
          </ul>
          {/* AddReviewContainer */}
          <AddReviewContainer />
        </div>
      </div>
    </div>
  );
}

export default NoteCart;
