import React from 'react';
import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class XPPage extends React.Component {
  render() {
      return (
      <div className="XPPage">
        <CustomNav loggedIn={true} />
        <div className="header section noFill">
          <h1 className="centre-text">XP COMMUNITY</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
