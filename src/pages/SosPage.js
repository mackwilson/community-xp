import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import CardSection from '../comps/CardSection.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class SosPage extends React.Component {
  render() {
      const text = "This is the SOS page. Navigate here at any time to see suggested actions to take when you are feeling unsafe or in crisis."
      const teamContent = [
        {
          title: "Emergency Services",
          text: "(Pronouns: xx) Dani is a recent graduate from <br/> the University of Waterloo. ",
        }, {
          title: "Emergency Contacts",
          text: "(Pronouns: xx) Ben has an undergraduate degree in Peace and Conflict Studies from the University of Waterloo, and recently went back for his Masters.",
        }, {
          title: "Safety Plan",
          text: "(Pronouns: xx) Lars is in his fifth and final year in Systems Design Engineering at the University of Waterloo.",
        }
      ];
      return (
      <div className="SosPage">
        <PublicNavbar />
        <div className="content">
          <BigHeader title="SOS Page" txt={text}/>
          <CardSection cards={teamContent} />
          <Footer />
        </div>
      </div>
    );
  }
}
