import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css'; 


const Nav = () => {
  
  const navigate = useNavigate();
  
  const goToSignin = () => {
      navigate("/signin");
      };

  return (
    <div className="Nav">
      <div onClick={goToSignin}>도서목록</div>  
      <div onClick={goToSignin}>독립서점</div>  
      <div onClick={goToSignin}>마이페이지</div>  
      <div onClick={goToSignin}>문의하기</div>  
    </div>
  )
}

export default Nav
