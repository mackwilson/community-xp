import React from 'react';
import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

function XPPage(props){
    return (
    <div className="XPPage">
      <CustomNav/>
      <div className="header section noFill">
        <h1 className="centre-text">XP COMMUNITY</h1>
      </div>
      <Footer />
    </div>
  );
}

export default XPPage;