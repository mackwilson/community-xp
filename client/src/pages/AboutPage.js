import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import SectionHeader from '../comps/SectionHeader.js';
import CardSection from '../comps/CardSection.js';
import PublicNavbar from '../comps/PublicNavbar.js';

import mack from '../assets/images/mack.jpg';
import benny from '../assets/images/benny.jpg';
import dani from '../assets/images/dani.jpg';
import lars from '../assets/images/lars.jpg';
import pageText from '../assets/text/pageText.json';
import cardContent from '../assets/text/cardContent.json';

export default class AboutPage extends React.Component {
  render() {
    // todo: have the json files be returned JS objects so these imports can be embedded
      let teamCards = cardContent.about.team;
      for (const [i,v] of teamCards.entries()) {
        if (v.title === "Mack") {
          teamCards[i].photo = mack;
        } else if (v.title === "Dani") {
          teamCards[i].photo = dani;
        } else if (v.title === "Ben") {
          teamCards[i].photo = benny;
        } else if (v.title === "Lars") {
          teamCards[i].photo = lars;
        } else {
          teamCards[i].photo = null;
        }
      }
      
      return (
      <div className="AboutPage">
        <PublicNavbar />
        <BigHeader title="About" subtitle={pageText.about.header}/>
        
        <div className="section">
          <SectionHeader title="Our Vision"/>
          <CardSection txt={pageText.about.vision} cards={cardContent.about.vision} />
        </div>
        
        <div className="section">
          <SectionHeader title="Meet the Team!" />
          <CardSection txt={pageText.about.team} cards={cardContent.about.team} />
        </div>
        
        <div className="section">
          <SectionHeader title="Contact Us" />
          <CardSection cards={cardContent.about.contact} />
        </div>
      </div>
    );
  }
}
