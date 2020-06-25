import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class ResourcePage extends React.Component {
  render() {
      const text = "One of our goals at UXP is to help you access the resources you need. This page is made for that!"
      return (
      <div className="ResourcePage">
        <PublicNavbar />
        <div className="content">
          <BigHeader title="Resources" txt={text}/>
          <Footer />
        </div>
      </div>
    );
  }
}
