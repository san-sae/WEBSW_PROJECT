import React, { useState } from 'react';
import axios from 'axios';
import './Question.css';
import Nav from './../component/Nav';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    mail: '',
    subject: '',
    question: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <div className="container">
      <Nav />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nickname">닉네임  </label>
          <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="mail">이메일  </label>
          <input type="email" id="mail" name="mail" value={formData.mail} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="subject">제목  </label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="question">문의 내용  </label>
          <textarea id="question" name="question" value={formData.question} onChange={handleChange} required></textarea>
        </div>
        <br></br>
        <button type="submit" id="send_button">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
