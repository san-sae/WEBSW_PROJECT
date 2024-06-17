import React, { useState, useEffect } from 'react';
import './Row.css'; 

function Row() {

  return (
    <div className='review-container'>
      <div className='review'>
        <div className='review-h1'>독서의 즐거움을 두배로, 당신의 책 플랫폼 BOOKLOG</div>
        <div className='review-h2'>원하는 책을 찾고, 솔직한 리뷰를 남겨보세요!</div>
        <div className='review-p'>독서의 즐거움을 나누는 공간에 오신 것을 환영합니다! <br/>이곳에선 다양한 책 추천을 받고, 직접 읽은 책에 대한 솔직한 리뷰를 작성할 수 있습니다.
          <br/>독자들의 생생한 평가를 통해 다음에 읽을 책을 쉽게 선택해 보세요.</div>
      </div>
    </div>
  );
}

export default Row;
