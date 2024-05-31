import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css'; 


const Nav = () => {
  
  const navigate = useNavigate();
  
  const goToBookList = () => {
      navigate("/booklist");
      };

  const goToInfo = () => {
      navigate("/info");
      };

  const goToMyPage = () => {
      navigate("/mypage");
      };

  const goToQuestion = () => {
      navigate("/question");
      };
      
  return (
    <div className="Nav">
      <div onClick={goToBookList}>도서목록</div>  
      <div onClick={goToInfo}>독립서점</div>  
      <div onClick={goToMyPage}>마이페이지</div>  
      <div onClick={goToQuestion}>문의하기</div>  
    </div>
  )
}

export default Nav
