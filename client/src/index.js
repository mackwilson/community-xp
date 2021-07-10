import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from './store/store';

import ResourcePage from './pages/ResourcePage.js';
import XpPage from './pages/XpPage.js';
import SignUpPage from './pages/SignUpPage.js';
import LogInPage from './pages/LogInPage.js';
import ProfilePage from './pages/ProfilePage.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ScrollToTop from './comps/ScrollToTop.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

const { store, persistor } = persistStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <Router>
        <ScrollToTop>
          <>
            <Route exact path="/" component={HomePage} />
            <Route path="/resources" component={ResourcePage} />
            <Route path="/xp" component={XpPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LogInPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/about" component={AboutPage} />
          </>
        </ScrollToTop>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

