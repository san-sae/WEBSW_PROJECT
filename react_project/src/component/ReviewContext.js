import React, { createContext, useState } from 'react';

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

