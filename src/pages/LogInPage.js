import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import SmallHeader from '../comps/SmallHeader.js';
import Footer from '../comps/Footer.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default class LogInPage extends React.Component {
  render () {
    return (
      <div className="LogInPage">
        <PublicNavbar />
        <div className="content">
          <SmallHeader title="Log In" />
          <div className="centre-text">
            <p>Click the button below to see what a logged-in user would see. </p>
            <Button
              size="lg"
              variant="dark"
            >
              <Link to="/xp">Log In </Link>
            </Button>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
