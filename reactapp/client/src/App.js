import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';
import CardsPage from './pages/cards';
import PhotoApiPage from './pages/photoapi';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SigninPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/cards" element={<CardsPage />} />
        <Route exact path="/photoapi" element={<PhotoApiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
