import React, { useState } from "react";

function AddReview(props) {
  const [star, setStar] = useState(-1);
  const [click, setClick] = useState(false);
  const [review, setReview] = useState(false);
  const [userReview, setUserReview] = useState("");
  function handleStar(index) {
    if (index === -1) {
      if (click === true) return;
    }
    setStar(index);
    setClick(false);
  }
  function handleSetStar(index) {
    setClick(true);
    setStar(index);
    props.star(star);
  }
  function showStar() {
    var array = [0, 0, 0, 0, 0];
    var result = null;
    result = array.map((element, index) => {
      return (
        <i
          key={index}
          className={`fas fa-star container__comment-icon ${
            star >= index ? "choose" : ""
          }`}
          onMouseEnter={() => {
            handleStar(index);
          }}
          onMouseOut={() => {
            handleStar(-1);
          }}
          onClick={() => {
            handleSetStar(index);
          }}
        />
      );
    });
    return result;
  }
  function handleReview() {
    setReview(!review);
    props.handleReview(review);
    props.userReview(userReview);
    setUserReview("");
  }
  function handleUserReview(event) {
    var { target } = event;
    var {value } = target;
    setUserReview(value);
  }
  return (
    <div>
      <div className="container__comment">{showStar()}</div>
      <div className="container__comment-text">
        <div className="container__comment-text-input-wrap">
          <textarea
            name
            id
            className="container__comment-text-input"
            rows={4}
            name="review"
            value={userReview}
            onChange={handleUserReview}
          />
        </div>
        <div className="btn-shop container__comment-btn" onClick={handleReview}>
          SUBMIT
        </div>
      </div>
    </div>
  );
}

export default AddReview;
