import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Review.css'; 

const Review = () => {
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

  const sortedBooks = initialBooks.sort((a, b) => b.reviews - a.reviews);
  const topReviewedBook = sortedBooks[0];
  const secondTopReviewedBook = sortedBooks[1];
  const thirdTopReviewedBook = sortedBooks[2];

  return (
    <div className='row-container'>
      <div className='row-title'>베스트셀러 순위</div>
      <div className="row">
        <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ clickable: true }}>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">1위       {topReviewedBook.name}</div>
            <div className="author">{topReviewedBook.author}</div>
            <div className="intro">
              {`출판사: ${topReviewedBook.publisher}, 출간일: ${topReviewedBook.date}, 페이지 수: ${topReviewedBook.pages}, 장르: ${topReviewedBook.genre}`}
            </div>
            <div className="reviews">리뷰 수: {topReviewedBook.reviews}</div>
          </div>
          <img src={topReviewedBook.img} alt={topReviewedBook.name} />
        </SwiperSlide>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">2위       {secondTopReviewedBook.name}</div>
            <div className="author">{secondTopReviewedBook.author}</div>
            <div className="intro">
              {`출판사: ${secondTopReviewedBook.publisher}, 출간일: ${secondTopReviewedBook.date}, 페이지 수: ${secondTopReviewedBook.pages}, 장르: ${secondTopReviewedBook.genre}`}
            </div>
            <div className="reviews">리뷰 수: {secondTopReviewedBook.reviews}</div>
          </div>
          <img src={secondTopReviewedBook.img} alt={secondTopReviewedBook.name} />
        </SwiperSlide>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">3위       {thirdTopReviewedBook.name}</div>
            <div className="author">{thirdTopReviewedBook.author}</div>
            <div className="intro">
              {`출판사: ${thirdTopReviewedBook.publisher}, 출간일: ${secondTopReviewedBook.date}, 페이지 수: ${secondTopReviewedBook.pages}, 장르: ${secondTopReviewedBook.genre}`}
            </div>
            <div className="reviews">리뷰 수: {thirdTopReviewedBook.reviews}</div>
          </div>
          <img src={thirdTopReviewedBook.img} alt={thirdTopReviewedBook.name} />
        </SwiperSlide>
        </Swiper>
    </div>
  </div>
  )
}

export default Review

