import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class XPPage extends React.Component {
  render() {
      return (
      <div className="XPPage">
        <PublicNavbar loggedIn={true} />
        <BigHeader title="XP Community" />
        <Footer />
      </div>
    );
  }
}
