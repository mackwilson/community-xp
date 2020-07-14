import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import SmallHeader from '../comps/SmallHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPageOne: true,
      showPageTwo: false,
      showPageThree: false
    }
  }
  render () {
    return (
      <div className="SignUpPage">
        <PublicNavbar />
        <div className="content">
          <SmallHeader title="Sign Up for Community XP"/>
          <Footer />
        </div>
      </div>
    );
  }
}
