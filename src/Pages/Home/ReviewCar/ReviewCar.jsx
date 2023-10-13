import React, { useEffect, useState } from 'react';
import ReviewCardCar from './ReviewCardCar';

const ReviewCar = () => {
    const [reviews, setReviews] = useState([]);
    const [isShow, setIsShow] = useState(false);
  
    useEffect(() => {
      fetch("https://cars-store-server.vercel.app/allCar")
        .then(res => res.json())
        .then(data => setReviews(data));
    });
  
    return (
      <div className="my-container">
        <h2 className="text-3xl font-bold text-center md:text-4xl section-header">
          Read what our customers say
        </h2>
  
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
          {reviews.slice(0, isShow ? reviews.length : 2).map(review => (
           <ReviewCardCar key={review._id} review={review}></ReviewCardCar>
          ))}
        </div>
  
        <div onClick={() => setIsShow(!isShow)} className="mt-8 text-center">
          <button className="px-8 btn">{isShow ? "hide all" : "view all"}</button>
        </div>
      </div>
    );
  };

export default ReviewCar;