import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css'; 

const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };



  return (
    <div className="head">
      <div type="submit" className="logout" onClick={handleSubmit}>로그아웃</div> 
      <div onClick={goToHome} className="logo">BOOKLOG</div>   
    </div>
  );
}

export default Header;
