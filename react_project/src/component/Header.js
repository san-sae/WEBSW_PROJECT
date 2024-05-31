import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css'; 


const Header = () => {
  
  const navigate = useNavigate();
  
  const goToMain = () => {
  navigate("/main");
  };

  const goToLogin = () => {
    navigate("/");
    };

  return (
    <div className="head">
      <div className="logout" onClick={goToLogin}>로그아웃</div>  
      <img className="m" src="./images/book.png" alt="logo-one" onClick={goToMain}/>
    </div>
  )
}

export default Header
