import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import LinkCard from '../comps/LinkCard.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class SplashPage extends React.Component {
  render() {
      const text = "Welcome to CommUnity XP! Explore mental health resources that are right for you, connect with your community, and share your own experiences to gain XP. Use the SOS page for help with crisis management."
      return (
      <div>
        <PublicNavbar />
        <div className="content">
          <BigHeader title="CommUnity XP" txt={text}/>
          <div className="centre-text">
            <CardGroup>
              <LinkCard title="SOS" link="/sos" />
              <LinkCard title="Resources" link="/resources" />
              <LinkCard title="XP Blog" link="/blog"/>
              <LinkCard title="About UXP" link="/about" />
              <LinkCard title="Sign Up" link="/signup" />
              <LinkCard title="Log In" link="/login" />
            </CardGroup>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
