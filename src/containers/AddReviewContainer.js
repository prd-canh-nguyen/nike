import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthenticationContainer from "./AuthenticationContainer";
import AddReview from "../components/AddReview/AddReview";
import { actReview } from "../actions/index";
import apiCaller from "../util/apiCaller";

function AddReviewContainer(props) {
  const [review, setReview] = useState(true);
  const [rating, setRating] = useState(0);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isSuccess = useSelector((state) => state.authentication.isSuccess);
  const name = useSelector((state) => state.authentication.name);
  const newReview = useSelector((state) => state.addToCart.review);
  const slug = useSelector((state) => state.addToCart.slug);
  function handleReview(review) {
    setReview(isSuccess);
  }
  function showForm(review) {
    function isSuccess(){

    }
    function handleHideForm(){
      
    }
    var result =
      review === false ? <AuthenticationContainer show={show} isSuccess={isSuccess} handleHideForm={handleHideForm} /> : null;
    return result;
  }
  useEffect(() => {
    if (isSuccess === true) {
      setReview(isSuccess);
    }
  }, [isSuccess]);
  function userReview(content) {
    setShow(!show);
    var today = new Date();
    var time =
      today.toLocaleDateString() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();
    var review = {
      name,
      time,
      content,
      rating,
    };
    if (isSuccess) {
      dispatch(actReview(review));
      let newState = [...newReview];
      newState.unshift(review);
      apiCaller(`review/${slug}`, "POST", { newState, rating });
    }
  }
  function star(star) {
    setRating(star + 1);
  }
  return (
    <div>
      <AddReview
        handleReview={handleReview}
        userReview={userReview}
        star={star}
      />
      {showForm(review)}
    </div>
  );
}

export default AddReviewContainer;
