import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import './index.css';
import HomePage from './pages/Home';
import DiscoverPage from './pages/Discover';
import ContactPage from './pages/Contact';
import IrisPage from './pages/Iris';
import FeedbackPage from './pages/Feedback';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import GamePage from './pages/Game';
import SpaceRocks from "./pages/SpaceRocks";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/iris" element={<IrisPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              <Route path="/games" element={<GamePage />} />

              <Route path="/games/spacerocks/play" element={<SpaceRocks />} />

              <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
      </Router>
  </React.StrictMode>
);
