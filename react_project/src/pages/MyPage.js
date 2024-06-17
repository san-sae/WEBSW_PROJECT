import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from './../component/Nav'
import Header from '../component/Header';
import { ReviewContext } from '../component/ReviewContext';
import './MyPage.css';

const MyPage = () => {
    const id = localStorage.getItem('id');
    const password = localStorage.getItem('password');
    const username = localStorage.getItem('username');
    const { reviews } = useContext(ReviewContext);
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/Home");
    };

    return (
        <div className="display-container">
            <Header />
            <Nav />
            <br></br>
            <div id="main_content">
              <h2>사용자 정보 (임시)</h2>
              <div className="data-group">
                  <p><strong>사용자 이름</strong> {username}</p>
                  <p><strong>ID:</strong> {id}</p>
                  <p><strong>비밀번호:</strong> {password}</p>
              </div>
              <div className="review-groups">
                <h2>최근 리뷰</h2>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className='review-item'>
                            <div className="review-title">
                                <p><strong>책 제목:</strong> {review.book.name}</p>
                                <p><strong>작성 날짜:</strong> {review.reviewDate}</p>
                            </div>
                            <div className="review-details">
                                <p><strong>별점:</strong> {review.rating}</p>
                                <p><strong>난이도:</strong> {review.level}</p>
                                <p><strong>완독 시간:</strong> {review.complete}</p>
                            </div>
                            <div className="review-content">
                                <p><strong>리뷰 내용:</strong> {review.content}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>리뷰가 없습니다.</p>
                )}
            </div>
              <button className="backButton" onClick={goBack}>홈으로</button>
            </div>
        </div>
    );
};

export default MyPage;
