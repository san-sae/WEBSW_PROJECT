import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Row.css'; 

const Row = () => {
  return (
    <div className='row-container'>
      <div className="row">
        <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{ clickable: true }}>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">나의 채식 테이블</div>
            <div className="author">홀썸모먼트 저</div>
            <div className="intro">배달 어플, 외식, 밀키트까지 직접 차리는 집밥을 방해하는 요소는 정말 많습니다. 그래서 우리는 어느새 집밥이 번거롭고 귀찮은 일이라 생각하게 되었습니다. 하지만 때우듯 처리하는 한 끼로 우리는 생각보다 많은 것을 잃고 있습니다. 그중 누가 뭐래도 가장 큰 손실은 바로 건강이지요.</div>
          </div> 
          <img src="./images/book.png" alt="book1" />
        </SwiperSlide>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">나의 채식 테이블</div>
            <div className="author">홀썸모먼트 저</div>
            <div className="intro">배달 어플, 외식, 밀키트까지 직접 차리는 집밥을 방해하는 요소는 정말 많습니다. 그래서 우리는 어느새 집밥이 번거롭고 귀찮은 일이라 생각하게 되었습니다. 하지만 때우듯 처리하는 한 끼로 우리는 생각보다 많은 것을 잃고 있습니다. 그중 누가 뭐래도 가장 큰 손실은 바로 건강이지요.</div>
          </div> 
          <img src="./images/book.png" alt="book2" />
        </SwiperSlide>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">나의 채식 테이블</div>
            <div className="author">홀썸모먼트 저</div>
            <div className="intro">배달 어플, 외식, 밀키트까지 직접 차리는 집밥을 방해하는 요소는 정말 많습니다. 그래서 우리는 어느새 집밥이 번거롭고 귀찮은 일이라 생각하게 되었습니다. 하지만 때우듯 처리하는 한 끼로 우리는 생각보다 많은 것을 잃고 있습니다. 그중 누가 뭐래도 가장 큰 손실은 바로 건강이지요.</div>
          </div> 
          <img src="./images/book.png" alt="book3" />
        </SwiperSlide>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">나의 채식 테이블</div>
            <div className="author">홀썸모먼트 저</div>
            <div className="intro">배달 어플, 외식, 밀키트까지 직접 차리는 집밥을 방해하는 요소는 정말 많습니다. 그래서 우리는 어느새 집밥이 번거롭고 귀찮은 일이라 생각하게 되었습니다. 하지만 때우듯 처리하는 한 끼로 우리는 생각보다 많은 것을 잃고 있습니다. 그중 누가 뭐래도 가장 큰 손실은 바로 건강이지요.</div>
          </div> 
          <img src="./images/book.png" alt="book4" />
        </SwiperSlide>
        <SwiperSlide className="bookslide"> 
          <div className="book">
            <div className="bookname">나의 채식 테이블</div>
            <div className="author">홀썸모먼트 저</div>
            <div className="intro">배달 어플, 외식, 밀키트까지 직접 차리는 집밥을 방해하는 요소는 정말 많습니다. 그래서 우리는 어느새 집밥이 번거롭고 귀찮은 일이라 생각하게 되었습니다. 하지만 때우듯 처리하는 한 끼로 우리는 생각보다 많은 것을 잃고 있습니다. 그중 누가 뭐래도 가장 큰 손실은 바로 건강이지요.</div>
          </div> 
          <img src="./images/book.png" alt="book5" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default Row

