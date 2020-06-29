import React from 'react';
import PrivateNavbar from '../comps/PrivateNavbar.js';
import Footer from '../comps/Footer.js';
import SmallHeader from '../comps/SmallHeader.js';
import '../css/App.css';

export default class Profile extends React.Component {
  render () {
    return (
      <div className="Profile">
        <PrivateNavbar />
        <div className="content">
          <SmallHeader title="My Profile" />
          <Footer />
        </div>
      </div>
    );
  }
}
