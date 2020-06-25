import React from 'react';
import '../css/App.css';
import PrivateNavbar from '../comps/PrivateNavbar.js';

export default class Profile extends React.Component {
  render () {
    return (
      <div className="Profile">
        <PrivateNavbar />
        <h1>This is where profiles are.</h1>
      </div>
    );
  }
}
