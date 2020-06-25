import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import '../css/App.css';

export default class ResourcePage extends React.Component {
  render() {
      const text = "One of our goals at UXP is to help you access the resources you need. This page is made for that!"
      return (
      <div className="ResourcePage">
        <PublicNavbar />
        <BigHeader title="Resources" txt={text}/>
      </div>
    );
  }
}
