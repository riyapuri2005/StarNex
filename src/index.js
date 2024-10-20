import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import Discover from './pages/Discover';
import Contact from './pages/Contact';
import Iris from './pages/Iris';
import Feedback from './pages/Feedback';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Game from './pages/Game';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/discover" element={<HomePage />} />
              <Route path="/contact" element={<HomePage />} />
              <Route path="/iris" element={<HomePage />} />
              <Route path="/feedback" element={<HomePage />} />
              <Route path="/login" element={<HomePage />} />
              <Route path="/signup" element={<HomePage />} />
              <Route path="/game" element={<HomePage />} />
              <Route path="/game/spacerock" element={<HomePage />} />
          </Routes>
      </Router>
    <HomePage />
  </React.StrictMode>
);
