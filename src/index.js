import 'bootstrap/dist/css/bootstrap.min.css';
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
import SpaceRocks from "./pages/SpaceRocks";
import AngryMan from "./pages/AngryMan";
import CarRush from "./pages/CarRush";
import SpaceShip from "./pages/SpaceShip";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/iris" element={<IrisPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              <Route path="/games/angryman/play" element={<AngryMan />} />
              <Route path="/games/carrush/play" element={<CarRush />} />
              <Route path="/games/spacerocks/play" element={<SpaceRocks />} />
              <Route path="/games/spaceship/play" element={<SpaceShip />} />


              <Route path="/games/*" element={<Navigate to="/discover" />} />
              <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
      </Router>
);
