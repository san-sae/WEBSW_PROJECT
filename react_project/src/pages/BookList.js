import React from 'react';
import { Link } from "react-router-dom";
import './BookList.css';

import Nav from '../component/Nav';
import Header from '../component/Header';
import { mockBook } from "./Review";
  
function BookList() {
    return (
      <div id="book-list">
        <Header></Header>
        <Nav></Nav>
        <div className="list">
          <h2 className="list-header">책 목록</h2>
          <div className='list-content'>
            <p className='text'><b>현재 리뷰가 가능한 책 목록입니다.</b></p>
            {mockBook.map((book, index) => (
              <div key={index} className="book-item">
                <div className="book-image">
                  <img src={`${book.img}`} alt={book.name} />
                </div>
                <div className="book-info">
                  <h3>{book.name}</h3>
                  <p>저자: {book.author}</p>
                  <p>출판사: {book.publisher}</p>
                  <p>출간일: {book.date}</p>
                  <p>장르: {book.genre}</p>
                </div>
                <div className="review-button">
                  <Link to={`/review/${book.isbn}`} className='btn'>리뷰하기</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
  
  
export default BookList;