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
        <BigHeader title="COMMUNITY XP" subtitle={pageText.splash.header}/>
        <div className="centre-text width-80 darkText">
          <CardGroup>
            <LinkCard title="SOS" link="/sos" subtitle={pageText.splash.tidbits.sos}/>
            <LinkCard title="Resources" link="/resources" subtitle={pageText.splash.tidbits.resources}/>
            <LinkCard title="XP Blog" link="/blog" subtitle={pageText.splash.tidbits.blog}/>
            <LinkCard title="About UXP" link="/#About" subtitle={pageText.splash.tidbits.about}/>
            <LinkCard title="Sign Up" link="/signup" subtitle={pageText.splash.tidbits.signup}/>
            <LinkCard title="Log In" link="/login" subtitle={pageText.splash.tidbits.login}/>
          </CardGroup>
        </div>
        <AboutPage/>
        <Footer />
      </div>
    );
  }
}
