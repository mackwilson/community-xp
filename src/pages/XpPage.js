import React from 'react';
import PrivateNavbar from '../comps/PrivateNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import '../css/App.css';

export default class XPPage extends React.Component {
  render() {
      return (
      <div className="XPPage">
        <PrivateNavbar />
        <BigHeader title="XP Community" />
      </div>
    );
  }
}
