import React from 'react';
import '../css/App.css';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';

export default class HomePage extends React.Component {
  render() {
      const text = "What is CommUnity XP? Who is behind it? Read about our vision and how we got here."
      return (
      <div>
        <PublicNavbar />
        <div className="content">
          <BigHeader title="About" txt={text}/>
        </div>
      </div>
    );
  }
}
