import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import LinkCard from '../comps/LinkCard.js';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../comps/Footer.js';
import AboutPage from './AboutPage.js';
import pageText from '../assets/text/pageText.json';
import '../css/App.css';

export default class SplashPage extends React.Component {
  render() {
      return (
      <div>
        <PublicNavbar />
        <div className="content">
          <BigHeader title="CommUnity XP" txt={pageText.splash.header}/>
          <div className="centre-text">
            <CardGroup>
              <LinkCard title="SOS" link="/sos" />
              <LinkCard title="Resources" link="/resources" />
              <LinkCard title="XP Blog" link="/blog"/>
              <LinkCard title="About UXP" link="/#About" />
              <LinkCard title="Sign Up" link="/signup" />
              <LinkCard title="Log In" link="/login" />
            </CardGroup>
          </div>
          <div className="gap-div"></div>
          <AboutPage/>
          <Footer />
        </div>
      </div>
    );
  }
}
