import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PreAuthHomePage from './pre_auth_pages/Home';
import PreAuthDiscoverPage from './pre_auth_pages/Discover';
import PreAuthContactPage from './pre_auth_pages/Contact';
import PreAuthIrisPage from './pre_auth_pages/Iris';
import PreAuthFeedbackPage from './pre_auth_pages/Feedback';
import LoginPage from './pre_auth_pages/Login';
import SignupPage from './pre_auth_pages/Signup';
import GameHolder from "./pre_auth_pages/GameHolder";
import AngryMan from "./post_auth_pages/AngryMan";
import CarRush from "./post_auth_pages/CarRush";
import SpaceShip from "./post_auth_pages/SpaceShip";
import SpaceRocks from "./post_auth_pages/SpaceRocks";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
          <Routes>
              <Route path="/home" element={<PreAuthHomePage />} />
              <Route path="/discover" element={<PreAuthDiscoverPage />} />
              <Route path="/contact" element={<PreAuthContactPage />} />
              <Route path="/iris" element={<PreAuthIrisPage />} />
              <Route path="/feedback" element={<PreAuthFeedbackPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              <Route path="/games/angryman/play" element={<GameHolder gameName="angryman" gameJSX={<AngryMan />} />} />
              <Route path="/games/carrush/play" element={<GameHolder gameName="carrush" gameJSX={<CarRush />} />} />
              <Route path="/games/spaceship/play" element={<GameHolder gameName="spaceship" gameJSX={<SpaceShip />} />} />
              <Route path="/games/spacerocks/play" element={<GameHolder gameName="spacerocks" gameJSX={<SpaceRocks />} />} />

              <Route path="/games/*" element={<Navigate to="/discover" />} />
              <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
      </Router>
);
