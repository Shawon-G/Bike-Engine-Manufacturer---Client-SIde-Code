import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("https://bike-engine-manufacturer.onrender.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-16">
        {" "}
        Customers Reviews
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {reviews?.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
