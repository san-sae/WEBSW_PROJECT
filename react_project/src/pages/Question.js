import React, { useState } from 'react';
import axios from 'axios';
import './Question.css';
import Nav from './../component/Nav';
import Header from '../component/Header';

// const MyPage = () => {
//   const id = localStorage.getItem('id');
//   const password = localStorage.getItem('password');
//   const username = localStorage.getItem('username');

// };


const ContactForm = () => {
  const username = localStorage.getItem('username');

  const [formData, setFormData] = useState({
    nickname: '',
    mail: '',
    subject: '',
    question: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/api/contact', formData);
      alert(response.data.message);
      setFormData({
        nickname: '',
        mail: '',
        subject: '',
        question: ''
      });
    } catch (error) {
      alert('There was an error sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ques">
      <Header />
      <Nav />
      <h1>문의하기</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">사용자 이름 : {username}</label>
          {/* <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} required /> */}
        </div>
        <div>
          <label htmlFor="mail">이메일</label>
          <input type="email" id="mail" className='theinput' name="mail" value={formData.mail} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="subject">제목</label>
          <input type="text" id="subject" className='theinput' name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="question">문의 내용</label>
          <textarea id="question" name="question" className='thecontext' value={formData.question} onChange={handleChange} required></textarea>
        </div>
        <br></br>
        <button type="submit" id="send_button" disabled={loading}>
          {loading ? '전송 중' : '제출'}
        </button>
      </form>
      {/* {loading && <p>문의 내용을 전달하고 있습니다...</p>} */}
    </div>
  );
};

export default ContactForm;
