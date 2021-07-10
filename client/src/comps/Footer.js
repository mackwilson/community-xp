import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';
import '../css/Footer.css';

function Footer() {
  
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };


  return (
    <div className="Footer darkFill">
      <footer className="site-footer">
        <div className="copyright">
          <FontAwesomeIcon icon={faCopyright} /> 2020-2021 CommUnity XP
        </div>
        <div className="to-top" onClick={scrollTop}>
          <FontAwesomeIcon icon={faArrowUp} /> Jump to Top
        </div>
      </footer>
    </div>
  );
}

export default Footer;