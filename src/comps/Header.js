import React from 'react';
import logo from '../assets/cuxp-logo.png';
import '../css/App.css';

function Header() {
  return (
    <div className="Header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to CommUnity XP! We are currently under construction. Come back soon!
      </p>
    </div>
  );
}

export default Header;
