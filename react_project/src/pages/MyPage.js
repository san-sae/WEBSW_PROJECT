import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Nav from './../component/Nav';
import { ReviewContext } from '../component/ReviewContext';
import './MyPage.css';

const MyPage = () => {
    const [enteredPassword, setEnteredPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { reviews } = useContext(ReviewContext);
    const navigate = useNavigate();

    const id = localStorage.getItem('id');
    const password = localStorage.getItem('password');
    const username = localStorage.getItem('username');

    const handlePasswordChange = (e) => {
        setEnteredPassword(e.target.value);
    };

    const handlePasswordSubmit = () => {
        if (enteredPassword === password) {
            setIsAuthenticated(true);
        } else {
            alert('비밀번호가 틀렸습니다. 다시 시도해 주세요.');
        }
    };

    const goBack = () => {
        navigate("/Home");
    };

    return (
        <div className="display-container">
            <Nav />
            <br />
            <div id="main_content">
                {!isAuthenticated ? (
                    <div className="password-check-container">
                        <div id="input_pws">
                        <h2 className='hh2'>마이페이지</h2>
                        <h2 className='hh2'>비밀번호를 입력하세요</h2>
                        <input
                            type="password"
                            value={enteredPassword}
                            onChange={handlePasswordChange}
                            placeholder="비밀번호"
                        />
                        <br />
                        <br />

                        <button onClick={handlePasswordSubmit}>확인</button>
                        
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2>사용자 정보 (임시)</h2>
                        <div className="data-group">
                            <p><strong>사용자 이름:</strong> {username}</p>
                            <p><strong>ID:</strong> {id}</p>
                            {/* <p><strong>비밀번호:</strong> {password}</p> */}
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
                    </div>
                )}
                {/* <button className="backButton" onClick={goBack}>홈으로</button> */}
            </div>
        </div>
    );
};

export default MyPage;
