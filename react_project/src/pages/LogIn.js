import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './LogIn.css'; 

const LogIn = () => {
    let id= null;
    let password=null;
    const [id2, setId2] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const handleIdChange = (e) => {
        setId2(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword2(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        id=localStorage.getItem('id');
        password=localStorage.getItem('password');
        
        if(id2 !== id){
            setError('아이디가 틀렸습니다');
            return;
        }

        if(password2 !== password){
            setError('비밀번호가 틀렸습니다');
            return;
        }

        console.log('Id:', id2);
        console.log('Password:', password2);


        navigate("/main");
    };

    const navigate = useNavigate();
    
    const goToSignin = () => {
        navigate("/signin");
    };

    return (
        <div className="body">
            <div className="book-container">
                <h1 className="a">Book</h1>
                <img className="i" src="./images/book.png" alt="logo-one" />
            </div>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <h2 className="b">Login</h2>
                    {error && <p className="error">{error}</p>}
                    <div className="input-group">
                        <label htmlFor="id">아이디:</label>
                        <input
                            type="text"
                            id="id2"
                            value={id2}
                            onChange={handleIdChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password2"
                            value={password2}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit" className="loginButton">로그인</button>
                    <button type="button" className="signinButton" onClick={goToSignin}>회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
