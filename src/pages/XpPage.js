import React from 'react';
import PrivateNavbar from '../comps/PrivateNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class XPPage extends React.Component {
  render() {
      return (
      <div className="XPPage">
        <PrivateNavbar />
        <div className="content">
          <BigHeader title="XP Community" />
          <div className="gapDiv" />
          <Footer />
        </div>
      </div>
    );
  }
}
