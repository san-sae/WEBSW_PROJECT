import React from 'react';
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import BookList from "./pages/BookList.js";
import Home from "./pages/Home";
import Info from "./pages/Info";
import LogIn from "./pages/LogIn"
import MyPage from "./pages/MyPage"
import Question from "./pages/Question"
import Review from "./pages/Review"
import Signin from "./pages/Signin"
import { ReviewProvider } from './component/ReviewContext.js';

function App() {
  return (
    <ReviewProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/question" element={<Question />} />
          <Route path="/review/:isbn" element={<Review />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter> 
    </ReviewProvider>
  );
}

export default App;
