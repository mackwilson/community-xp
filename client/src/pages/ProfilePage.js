import React from 'react';
import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class Profile extends React.Component {
  render () {
    return (
      <div className="Profile">
        <CustomNav loggedIn={true} />
        <h2 className="centre-text darkText">My Profile</h2>
        <Footer />
      </div>
    );
  }
}
