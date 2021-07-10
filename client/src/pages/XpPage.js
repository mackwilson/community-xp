import React from 'react';
import Fade from 'react-reveal/Fade';

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import Header from '../comps/Header.js';
import CheckItOut from '../comps/CheckItOut.js';

import '../css/App.css';
import text from '../assets/text/pageText.json';

function XPPage(props){
    return (
    <div className="XPPage">
      <CustomNav/>
      <Fade>
        <Header
          title={text.uxp.title}
          subtitle={text.uxp.subtitle}
        />
      </Fade>
      <Footer />
      
      <CheckItOut />
    </div>
  );
}

export default XPPage;