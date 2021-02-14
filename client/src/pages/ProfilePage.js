import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import Footer from '../comps/Footer.js';
import SmallHeader from '../comps/SmallHeader.js';
import '../css/App.css';

export default class Profile extends React.Component {
  render () {
    return (
      <div className="Profile">
        <PublicNavbar loggedIn={true} />
        <SmallHeader title="My Profile" />
        <Footer />
      </div>
    );
  }
}
