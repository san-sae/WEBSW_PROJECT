import React, { useState } from 'react';
import './Review.css';

function Review() {
  const [bookName, setBookName] = useState('');
  const [rating, setRating] = useState(0);
  const [level, setLevel] = useState(0);
  const [complete, setComplete] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviewDate, setReviewDate] = useState(new Date().toISOString().slice(0, 10));

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
  };

  const handleRatingChange = (event) => {;
    setRating(parseInt(event.target.value));
  };

  const handleLevelChange = (event) => {
    setLevel(parseInt(event.target.value));
  };

  const handleCompleteChange = (event) => {
    setComplete(parseInt(event.target.value));
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmitReview = (event) => {
    event.preventDefault();
    console.log('Submitted Review:', { bookName, rating, reviewText, reviewDate });
    // 여기에서 실제로 서버에 리뷰를 전송하는 등의 작업을 수행할 수 있습니다.
    // 서버에 리뷰를 저장하고 성공적으로 저장되었음을 사용자에게 알릴 수 있습니다.
  };

  return (
    <div className="review-page">
      <h1>리뷰 작성 페이지</h1>
      <form className="review-form" onSubmit={handleSubmitReview}>
        <div className="review-name">
          <label>책 제목:</label>
          <input type="text" value={bookName} onChange={handleBookNameChange} />
          <label>리뷰 작성 날짜:</label>
          <input type="date" value={reviewDate} readOnly />
        </div>
        <div className="review-group">
          <div className="review-eval">
            <label>별점:</label>
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
              <option value="5">5점</option>
              <option value="4">4점</option>
              <option value="3">3점</option>
              <option value="2">2점</option>
              <option value="1">1점</option>
            </select>
          </div>
          <div className="review-level">
            <label>난이도:</label>
            <select value={level} onChange={(e) => setLevel(parseInt(e.target.value))}>
              <option value="5">매우 높음</option>
              <option value="4">높음</option>
              <option value="3">중간</option>
              <option value="2">낮음</option>
              <option value="1">매우 낮음</option>
            </select>
          </div>
          <div className="review-complete">
            <label>완독 시간:</label>
            <select value={complete} onChange={(e) => setComplete(parseInt(e.target.value))}>
              <option value="1">1일</option>
              <option value="2">2~4일</option>
              <option value="3">5~7일</option>
              <option value="4">1~2주</option>
              <option value="5">3주 이상</option>
            </select>
          </div>
        </div>
        <div className="review-content">
          <label>리뷰 내용:</label>
          <textarea value={reviewText} onChange={handleReviewTextChange} />
        </div>
        <div className="submit-btn">
          <button type="submit">리뷰 작성 완료</button>
        </div>
      </form>
    </div>
  );
}

export default Review;
