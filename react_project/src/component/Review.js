import React, { useState, useEffect } from 'react';
import './Review.css'; 

function Review() {
  const initialBooks = [
    {
      id: 1,
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
      complete: 0,
      reviews: 300
      
  },
  {
      id: 2,
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
      complete: 0,
      reviews: 200
  },
  {
      id: 3,
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
      complete: 0,
      reviews: 500
  },
  {
      id: 4,
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
      complete: 0,
      reviews: 100
  },
  {
      id: 5,
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
      complete: 0,
      reviews: 600
  },
  {
      id: 6,
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
      complete: 0,
      reviews: 50
  },
  {
      id: 7,
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
      complete: 0,
      reviews: 800
  },
  { 
      id: 8,
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
      complete: 0,
      reviews: 90
  },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const sortedBooks = initialBooks.sort((a, b) => b.reviews - a.reviews);
    setBooks(sortedBooks);
  }, []);

  return (
    <div className='review-container'>
      <div className="review">
        <h1 className="review_title">리뷰 순위</h1>
            
        <ol className='review-ol'>
            {books.map((book, index) => (
              <li className='review-li' key={book.id}>
                <div className='review-li-content'>
                  {index + 1}. {book.name}
                </div>
                <div className='review-li-img'>
                  <img src={book.img} alt={book.name} />
                </div>
              </li>
            ))}
        </ol>
  
      </div>
    </div>
  );
}

export default Review;
