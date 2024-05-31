import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Bar.css'; 

const Bar = () => {
  const navigate = useNavigate();

  const goToMain = () => {
  navigate("/main");
  };

  return (
    <div className="bar">
      <img className="l" src="./img/book" alt="logo-one" onClick={goToMain}/>
      <div className='x'>
        <div className="t">BOOKLOG</div>
        <div className="e">
          <div>대표 : </div>
          <div>주소 : 청주시 서원구 충대로 1, ...</div>
          <div>사업자등록번호 : 229-89-30000  통신판매업신고 : 제 3000-00000호</div>
          <div>이메일 : abcdefg@abc.com  호스팅 서비스사업자 : BOOKLOG(주)</div>
        </div>
      </div>
      <div className='x'>
        <div className="t">BOOKLOG 고객센터</div>
        <div className="e">
          <div>번호 : 010-1234-1234</div>
          <div>이용시간 : 오전 7시 ~ 오후 9시</div>
        </div>
      </div>
    </div>
  )
}

export default Bar