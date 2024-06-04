import React from 'react';
import { useNavigate } from "react-router-dom";
import Nav from './../component/Nav'
import './MyPage.css';

const MyPage = () => {
    const id = localStorage.getItem('id');
    const password = localStorage.getItem('password');
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/signin");
    };

    return (
        <div className="display-container">
            <Nav />
            <br></br>
            <div id="main_content">
              <h2>사용자 정보 (임시)</h2>
              <div className="data-group">
                  <p><strong>사용자 이름</strong> {username}</p>
                  <p><strong>ID:</strong> {id}</p>
                  <p><strong>비밀번호:</strong> {password}</p>
              </div>
              <button className="backButton" onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
};

export default MyPage;
