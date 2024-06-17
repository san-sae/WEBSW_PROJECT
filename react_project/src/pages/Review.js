import React, { useContext, useEffect, useState } from 'react';
import './Review.css';

import Header from '../component/Header';
import Nav from '../component/Nav';

import { useParams } from 'react-router-dom';
import { ReviewContext } from '../component/ReviewContext';

export const mockBook = [
  {
      isbn: 9788932473901,
      name: "이기적 유전자",
      author: "리처드 도킨스",
      publisher: "을유문화사",
      date: "2018-10-20",
      pages: 632,
      genre: "과학",
      img: "img/selfishGene.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0 
  },
  {
      isbn: 9788957365793,
      name: "EBS 다큐프라임 자본주의",
      author: "EBS 자본주의 제작팀",
      publisher: "가나출판사",
      date: "2013-09-27",
      pages: 388,
      genre: "경제",
      img: "img/ebsCapitalism.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
  {
      isbn: 9788936434120,
      name: "소년이 온다",
      author: "한강",
      publisher: "창비",
      date: "2024-05-10",
      pages: 284,
      genre: "소설",
      img: "img/humanActs.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
  {
      isbn: 9791187142560,
      name: "인관관계론",
      author: "데일 카네기",
      publisher: "현대지성",
      date: "2019-10-07",
      pages: 352,
      genre: "자기계발",
      img: "img/influencePeople.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
  {
      isbn: 9791190313186,
      name: "지적 대화를 위한 넓고 얕은 지식1",
      author: "채사장",
      publisher: "웨일북",
      date: "2020-02-01",
      pages: 388,
      genre: "인문학",
      img: "img/humanities.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
  {
      isbn: 9788983711892,
      name: "코스모스",
      author: "칼 세이건",
      publisher: "사이언스북스",
      date: "2006-12-20",
      pages: 719,
      genre: "과학",
      img: "img/cosmos.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
  {
      isbn: 9788936811549,
      name: "죽음의 수용소에서",
      author: "빅터 프랭클",
      publisher: "청아출판사",
      date: "2020-05-30",
      pages: 224,
      genre: "인문학",
      img: "img/searchForMeaning.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
  {
      isbn: 9788937460449,
      name: "데미안",
      author: "헤르만 헤세",
      publisher: "민음사",
      date: "2000-12-20",
      pages: 239,
      genre: "소설",
      img: "img/demian.png",
      issueNum: 0,
      rating: 0,
      level: 0,
      complete: 0
  },
];


function Review() {
  const { isbn } = useParams();
  const { addReview } = useContext(ReviewContext);
  const [reviewDate, setReviewDate] = useState(new Date().toISOString().slice(0, 10));
  const [reviewContent, setReviewContent] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectRating = document.getElementById("review-eval");
    const selectLevel = document.getElementById("review-level");
    const selectComplete = document.getElementById("review-complete");

    const selectRatingValue = selectRating.value;
    const selectLevelValue = selectLevel.value;
    const selectCompleteValue = selectComplete.value;

    const updatedBooks = [...mockBook];

    const bookIndex = updatedBooks.findIndex(book => book.isbn === parseInt(isbn));

    if(bookIndex !== -1) {
      const book = updatedBooks[bookIndex];
      book.rating = ((book.rating * book.issueNum) + selectRating) / (book.issueNum + 1);
      book.level = ((book.level * book.issueNum) + selectLevelValue) / (book.issueNum + 1);
      book.complete = ((book.complete * book.issueNum) + selectCompleteValue) / (book.issueNum + 1);
      book.issueNum += 1;

      const review = {
        book,
        reviewDate,
        rating: selectRatingValue,
        level: selectLevelValue,
        complete: selectCompleteValue,
        content: reviewContent,
      };

      addReview(review);
      // 별점 적용 전
    }
  }

  return (
    <div className="review-page">
      <Header></Header>
      <Nav></Nav>
      <div className='write-review'>
        <h2>리뷰 작성 페이지</h2>
        <form className="review-form">
          <div className="review-name">
            <input className='name' type="text" value={isbn}  />
            <input className='date' type="date" value={reviewDate} readOnly />
          </div>
          <div className="review-group">
            <select
              id="review-eval"
              name='review-eval' 
              required
            >
              <option value="" disabled selected>별점</option>
              <option value="5">5점</option>
              <option value="4">4점</option>
              <option value="3">3점</option>
              <option value="2">2점</option>
              <option value="1">1점</option>
            </select>
            <select
              id="review-level" 
              name="review-level"
              required  
            >
              <option value="" disabled selected>난이도</option>
              <option value="5">매우 높음</option>
              <option value="4">높음</option>
              <option value="3">중간</option>
              <option value="2">낮음</option>
              <option value="1">매우 낮음</option>
            </select>
            <select
              id="review-complete" 
              name='review-complete'
              required
            >
              <option value="" disabled selected>완독 시간</option>
              <option value="1">1일 이하</option>
              <option value="2">2~4일</option>
              <option value="3">5~7일</option>
              <option value="4">1~2주</option>
              <option value="5">3주 이상</option>
            </select>
          </div>
          <div className="review-content">
            <textarea 
              placeholder="리뷰를 작성하시오..."
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              required
            />
              </div>
          <div className="submit-btn">
            <button onClick={handleSubmit} type="submit">리뷰 제출</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Review;
