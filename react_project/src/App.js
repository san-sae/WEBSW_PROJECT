import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Review from './pages/Review';
import Info from './pages/Info';
import MyPage from './pages/MyPage';
import Question from './pages/Question';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      <main>
        <Review />
      </main>
    </div>
  );
}

export default App;
