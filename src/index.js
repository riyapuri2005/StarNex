import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import DiscoverPage from './pages/Discover';
import ContactPage from './pages/Contact';
import IrisPage from './pages/Iris';
import FeedbackPage from './pages/Feedback';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import GamePage from './pages/Game';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/iris" element={<IrisPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/game" element={<GamePage />} />
          </Routes>
      </Router>
  </React.StrictMode>
);
