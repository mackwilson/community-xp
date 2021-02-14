import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';

import mack from '../assets/images/mack.jpg';
import benny from '../assets/images/benny.jpg';
import dani from '../assets/images/dani.jpg';
import pageText from '../assets/text/pageText.json';

export default class AboutPage extends React.Component {
  render() {
    // todo: have the json files be returned JS objects so these imports can be embedded
      // let teamCards = cardContent.about.team;
      // for (const [i,v] of teamCards.entries()) {
      //   if (v.title === "Mack") {
      //     teamCards[i].photo = mack;
      //   } else if (v.title === "Dani") {
      //     teamCards[i].photo = dani;
      //   } else if (v.title === "Ben") {
      //     teamCards[i].photo = benny;
      //   } else {
      //     teamCards[i].photo = null;
      //   }
      // }
      
      return (
      <div className="AboutPage">
        <PublicNavbar />
        <BigHeader title="ABOUT US"/>
        
        <div className="section">
        
          <h3 className="left-text">THE PROJECT</h3>
        </div>
        
        <div className="section">
          <h3 className="right-text">THE TEAM</h3>
        </div>
        
        <div className="section">
          <h3 className="centre-text">OUR VISION</h3>
        </div>
      </div>
    );
  }
}
