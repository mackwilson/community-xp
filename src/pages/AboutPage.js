import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import SectionHeader from '../comps/SectionHeader.js';
import ModalCard from '../comps/ModalCard.js';
import Footer from '../comps/Footer.js';
import mack from '../assets/mack.jpg';
import dani from '../assets/dani.jpg';
import benny from '../assets/benny.jpg';
import lars from '../assets/lars.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/App.css';

export default class AboutPage extends React.Component {
  render() {
      const headerText = "What is CommUnity XP? Who is behind it? Read about our vision and how we got here."
      const communityText = ""
      const accessibilityText = ""
      const educationText = ""
      const daniBio = "(Pronouns: xx) Dani is a recent graduate from the University of Waterloo. "
      const benBio = "(Pronouns: xx) Ben has an undergraduate degree in Peace and Conflict Studies from the University of Waterloo, and recently went back for his Masters."
      const larsBio = "(Pronouns: xx) Lars is in his fifth and final year in Systems Design Engineering at the University of Waterloo."
      const mackBio = "(Pronouns: xx) Mack is a recent graduate from Biomedical Engineering at the University of Waterloo. They work full time as a Software Engineer for a Silicon Valley tech startup. They have experience with full-stack development, including everything from project management, to web development, to server architecture."
      
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
          <div className="centre-text">
            <CardGroup>
              <ModalCard title="Community" txt={communityText} />
              <ModalCard title="Accessibility" txt={accessibilityText} />
              <ModalCard title="Education" txt={educationText} />
            </CardGroup>
          </div>
          <div className="gap-div" />

          <SectionHeader title="Our Team" />
          <div className="left-text">
            <p>Our team started working together throughout early 2020. 
              Dani originally developed the idea and founded the project, 
              and Ben soon joined on to do outreach, design, and web 
              development.</p>
            <p>After realizing how great the idea was, Mack and Lars soon 
              joined on and put their experience with UX research and full-stack 
              development to work.</p>
            <p>The small but mighty team got to work making the UXP site a 
            reality. Mental health is a cause close to all of our hearts, and 
            we are all extremely passionate, talented, and diverse. Click the 
            buttons below to read more about each team member!</p>
          </div>
          <div className="centre-text">
            <CardGroup>
              <ModalCard title="Dani" subtitle="Dani Title" img={dani} txt={daniBio} />
              <ModalCard title="Ben" subtitle="Ben Title" img={benny } txt={benBio} />
              <ModalCard title="Lars" subtitle="Lars Title" img={lars} txt={larsBio} />
              <ModalCard title="Mack" subtitle="Mack Title" img={mack} txt={mackBio} />
            </CardGroup>
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
