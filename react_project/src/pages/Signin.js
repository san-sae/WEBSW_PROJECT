import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Signin.css'; 

const Signin = () => {    
    const [username, setUsername] = useState('');
    const [id, setId] = useState('');  
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordCheck] = useState('');
    const [error, setError] = useState(''); 

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    
    const handleIdChange = (e) => {
    setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordCheckChange = (e) => {
        setPasswordCheck(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== passwordcheck) {
            setError('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return; 
        }

        localStorage.setItem('id', id); //
        localStorage.setItem('password', password); //
        localStorage.setItem('username', username);

        console.log(localStorage.getItem('id2'))
        console.log('Username:', username);
        console.log('Id:', id);
        console.log('Password:', password);
        console.log('Passwordcheck:', passwordcheck);

        navigate("/");
    };

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/");
    };

    return (
        <div className="all">
            <div className="signin-container">
                <form className="c" onSubmit={handleSubmit}>
                    <h2 className="b">회원가입</h2>
                    <div className="input-group">
                        <label htmlFor="username">사용자 이름:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="id">아이디:</label>
                        <input
                            type="text"
                            id="id"
                            value={id}
                            onChange={handleIdChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="passwordcheck">비밀번호 확인:</label>
                        <input
                            type="password"
                            id="passwordcheck"
                            value={passwordcheck}
                            onChange={handlePasswordCheckChange}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button className="signupButton" type="submit">회원가입</button>
                </form>
                
            </div>
        </div>
    );
};

export default Signin;
