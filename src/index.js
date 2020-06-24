import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ResourcePage from './pages/ResourcePage.js';
import XpPage from './pages/XpPage.js';
import SosPage from './pages/SosPage.js';
import SignUpPage from './pages/SignUpPage.js';
import LogInPage from './pages/LogInPage.js';
import ProfilePage from './pages/ProfilePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/resources" component={ResourcePage} />
      <Route path="/xp" component={XpPage} />
      <Route path="/sos" component={SosPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LogInPage} />
      <Route path="/profile" component={ProfilePage} />
    </div>
  </Router>,
  document.getElementById('root')
);

