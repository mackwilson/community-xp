import React from 'react';
import '../css/App.css';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';

export default class HomePage extends React.Component {
  render() {
      const text = "Welcome to CommUnity XP! Read on to get to know more about this project, or use the navigation to explore the site."
      return (
      <div className="HomePage">
        <PublicNavbar />
        <BigHeader title="CommUnity XP" txt={text}/>
      </div>
    );
  }
}
