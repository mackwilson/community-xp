import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';

function Footer() {
  return (
    <div className="Footer darkFill">
      <footer className="site-footer">
        <div className="copyright">
          <FontAwesomeIcon icon={faCopyright} /> 2020 CommUnity XP
        </div>
        <div className="to-top">
          <a href="#header"><FontAwesomeIcon icon={faArrowUp} /> Top </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;