import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import CardSection from '../comps/CardSection.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class SosPage extends React.Component {
  render() {
      const text = "Crisis management resources all in one place when you need them."
      const teamContent = [
        {
          title: "Emergency Services",
          textSubHeading: [
            "Call 911",
            "Call emergency mental health services"
          ],
          text: [
            "Police or paramedics will be the fastest responding service if you are in need of emergent health care or crisis management. If you fear for the safety of yourself or those around you, we encourage you to call 911.",
            "Police aren't for everyone. Your next best bet is emergency services designed specifically for mental health, crisis management and de-escalation."
          ],
          btnText: [null, "See options"],
          btnLink: [null, "/resources"]
        }, {
          title: "Emergency Contacts",
          text: [
            "If you aren't in immediate danger, your personal emergency contacts can be very helpful. This can be a close friend, roommate, partner, or family member that understands what you are going through, and ideally, knows how to help you manage whatever is going on right now.",
            "Quick Tip: Creating an account with CommUnity XP allows us to store this contact information and present it to you right here so it is easier and quicker to access."
          ],
        }, {
          title: "Safety Plan",
          text: "Create an account with CommUnity XP to create your personalized safety plan with practical steps you can take to manage a crisis.",
          btnLink: "/signup",
          btnText: "Create Account"
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
