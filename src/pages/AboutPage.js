import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import SectionHeader from '../comps/SectionHeader.js';
import CardSection from '../comps/CardSection.js';
import Footer from '../comps/Footer.js';
import mack from '../assets/mack.jpg';
import dani from '../assets/dani.jpg';
import benny from '../assets/benny.jpg';
import lars from '../assets/lars.jpg';

export default class AboutPage extends React.Component {
  render() {
      const headerText = "What is CommUnity XP? Who is behind it? Read about our vision and how we got here."
      
      // TODO: put all the text into a utility json 
      // TODO: add support for "alt" for all images (when supplied)
      const projectText = [
        "This is where we explain what the project is all about. I think we should organize this into themes, perhaps we can have cards that open modals with more information about the themes.",
        "asfalksjdfkljasdhfl;aksjdlfkajsdlkfj text text text text alsdjf;laksdjfl;kasjdflk;"
      ];
      
      const projectContent = [
        {
          title: "Community",
          text: ""
        }, {
          title: "Accessibility",
          text: ""
        }, {
          title: "Theme 3",
          text: ""
        }
      ];
      
      const teamText = [
        "Our team started working together throughout early 2020. Dani originally developed the idea and founded the project, and Ben soon joined on to do outreach, design, and web development.",
        "After realizing how great the idea was, Mack and Lars soon joined on and put their experience with UX research and full-stack development to work.",
        "The small but mighty team got to work making the UXP site a reality. Mental health is a cause close to all of our hearts, and we are all extremely passionate, talented, and diverse. Click the buttons below to read more about each team member!"
      ];
      
      const teamContent = [
        {
          title: "Dani",
          subtitle: "Founder & Executive Director",
          photo: dani,
          textSubHeading: "Pronouns: she/her",
          text: "Dani is a recent graduate from the University of Waterloo. ",
          alt: "dani"
        }, {
          title: "Ben",
          subtitle: "Director of Operations",
          photo: benny,
          alt: "benny",
          textSubHeading: "Pronouns: he/they",
          btnText: "Email Ben",
          btnLink: "mailto:bskinner@communityxp.ca",
          text: "Ben has an undergraduate degree in Peace and Conflict Studies from the University of Waterloo, and recently went back for his Masters. They cover the broad, vague umbrella of Operations for UXP, meaning they do anything and everything to keep the group running! This includes most of our outreach and organization, so give him a shout if you're interested in connecting for business purposes.",
        }, {
          title: "Lars",
          subtitle: "Head of User Experience",
          photo: lars,
          alt: "lars",
          textSubHeading: "Pronouns: he/him",
          text: "Lars is in his fifth and final year in Systems Design Engineering at the University of Waterloo.",
        }, {
          title: "Mack",
          subtitle: "Head of Development",
          photo: mack,
          alt: "mack",
          btnText: [null, "Email Mack"],
          btnLink: [null, "mailto:mwilson@communityxp.ca"],
          textSubHeading: ["Pronouns: they/them", null],
          text: [
            "Mack is a recent graduate from Biomedical Engineering at the University of Waterloo. They work full time as a Software Engineer for a Silicon Valley tech startup. They have experience with full-stack development, including everything from project management, to web development, to server architecture.",
            "Mack joined CommUnity XP in May 2020 to lead the development of the site. They work closely with Lars on the design and user experience of the web UI. Additionally, they are responsible for all server architecture, database management, deploy processes, and general IT services for the team. They are loving the energy from the entire UXP team and are super happy to be here."
          ],
        }
      ];
      
      const contactContent =  [
        {
          title: "Socials",
          text: "Blah blah blah social media blah blah millennial blah blah connect with us!",
          btnLink: "https://www.instagram.com/community_xp/",
          btnText: "Instagram"
        },
        {
          title: "Contact",
          text: "Looking to join us? Have some feedback? Just want to connect? Click the button below to email us with your info and your request!",
          btnLink: "mailto:info@communityxp.ca",
          btnText: "Email UXP"
        },
        {
          title: "Donate",
          text: [
            "We would love to accept your donation! We are funded mostly through grants and crowdfunding. However, we don't have a good donation process set up yet. Check back soon for one!",
            "In the meantime, reach out to us and we can see if we can make something work!"
          ],
          btnLink: [null, "mailto:info@communityxp.ca"],
          btnText: [null, "Email Us"]
        }
      ];
      
      return (
      <div>
        <PublicNavbar />
        <div className="content">
          <BigHeader title="About" txt={headerText}/>
          
          <SectionHeader title="Our Vision"/>
          <CardSection txt={projectText} cards={projectContent} />
          <div className="gap-div" />
          
          <SectionHeader title="Our Team" />
          <CardSection txt={teamText} cards={teamContent} />
          <div className="gap-div" />
          
          <SectionHeader title="Contact Us" />
          <CardSection cards={contactContent} />
          <Footer />
        </div>
      </div>
    );
  }
}
