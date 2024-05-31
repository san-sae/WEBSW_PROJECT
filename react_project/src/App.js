import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Signin from "./pages/Signin";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Booklist from "./pages/Booklist"
import Infopage from "./pages/Infopage"
import Mypage from "./pages/Mypage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/main" element={<Main />} />
        <Route path="/booklist" element={<Booklist />} />
        <Route path="/infopage" element={<Infopage />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
