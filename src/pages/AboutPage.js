import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import SectionHeader from '../comps/SectionHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class HomePage extends React.Component {
  render() {
      const headerText = "What is CommUnity XP? Who is behind it? Read about our vision and how we got here."
      return (
      <div>
        <PublicNavbar />
        <div className="content">
          <BigHeader title="About" txt={headerText}/>
          <SectionHeader title="Our Vision"/>
          <div className="left-text">
            <p>This is where we explain what the project is all about. I think we should organize this into themes, perhaps we can have cards that open modals with more information about the themes.</p>
            <p>asfalksjdfkljasdhfl;aksjdlfkajsdlkfj text text text text alsdjf;laksdjfl;kasjdflk;</p>
          </div>
          <div className="gap-div" />

          <SectionHeader title="Our Team" />
          <div className="left-text">
            <p>This is where we talk about ourselves. I'm also thinking cards here, which have our headshots and names on them. The Cards can be clicked to open modals that have more info (role, pronouns, background, bio, etc.).</p>
          </div>
          <div className="gap-div" />

          <SectionHeader title="Contact Us" />
          <div className="left-text">
            <p>Contact info. What contact do we want here? We should probably make a team email, and I can add the Instagram. Also maybe a Donate button?</p>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
