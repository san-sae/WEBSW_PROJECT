const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// 문의 목록 저장을 위한 메모리 데이터베이스 (간단한 예제용)
let inquiries = [];

// POST 요청 시 이메일 전송 처리 및 문의 내역 저장
router.post('/', (req, res) => {
  const { nickname, mail, subject, question } = req.body;

  // SMTP 전송 서버 설정
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER, // 내 이메일
      pass: process.env.GMAIL_PASS // 애플리케이션 전용 비밀번호
    }
  });

  // 전송할 이메일 옵션 설정
  const mailOptions = {
    from: mail, // 사용자가 입력한 이메일
    to: 'drone0101@naver.com', // 받는 사람 이메일
    subject: subject, // 입력받은 제목
    text: `닉네임 : ${nickname}\n메일주소 : ${mail}\n문의 내용 : ${question}` // 입력받은 내용
  };

  // 이메일 보내기
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error occurred: ' + error.message });
    } else {
      console.log('Email sent: ' + info.response);
      // 문의 내역 저장
      inquiries.push({ date: new Date(), nickname, mail, subject, question });
      res.status(200).json({ message: '문의 내용이 정상적으로 전달되었습니다!' });
    }
  });
});

// GET 요청 시 문의 목록 반환
router.get('/list', (req, res) => {
  res.json({ inquiries });
});

module.exports = router;
