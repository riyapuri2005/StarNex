import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from "./auth_optional_pages/Login";
import SignupPage from "./auth_optional_pages/Signup";
import VerifyAuthBeforeRender from "./auth_optional_pages/VerifyAuthBeforeRender";
import GameHolder from "./auth_optional_pages/GameHolder";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
          <Routes>

              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />

              <Route path="/home" element={<VerifyAuthBeforeRender toChangeTo="home" />} />
              <Route path="/discover" element={<VerifyAuthBeforeRender toChangeTo="discover" />} />
              <Route path="/contact" element={<VerifyAuthBeforeRender toChangeTo="contact" />} />
              <Route path="/iris" element={<VerifyAuthBeforeRender toChangeTo="iris" />} />
              <Route path="/feedback" element={<VerifyAuthBeforeRender toChangeTo="feedback" />} />

              <Route path="/games/angryman/play" element={<GameHolder gameName="angryman" />} />
              <Route path="/games/carrush/play" element={<GameHolder gameName="carrush" />} />
              <Route path="/games/spaceship/play" element={<GameHolder gameName="spaceship" />} />
              <Route path="/games/spacerocks/play" element={<GameHolder gameName="spacerocks" />} />

              <Route path="/games/*" element={<Navigate to="/discover" />} />
              <Route path="*" element={<Navigate to="/home" />} />

          </Routes>
      </Router>
);
