import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import SmallHeader from '../comps/SmallHeader.js';
import '../css/App.css';

export default class SignUpPage extends React.Component {
  render () {
    return (
      <div className="SignUpPage">
        <PublicNavbar />
        <SmallHeader title="Sign Up for Community XP"/>
      </div>
    );
  }
}
