import React, { useState, useEffect } from 'react';
import './Review.css'; 

function Review() {
  const initialBooks = [
    { id: 1, title: 'Book A', reviews: 10 },
    { id: 2, title: 'Book B', reviews: 25 },
    { id: 3, title: 'Book C', reviews: 5 },
    { id: 4, title: 'Book D', reviews: 15 },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const sortedBooks = initialBooks.sort((a, b) => b.reviews - a.reviews);
    setBooks(sortedBooks);
  }, []);

  return (
    <div className="review">
      <h1>리뷰 많은 책</h1>
      <ol>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} 
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Review;
