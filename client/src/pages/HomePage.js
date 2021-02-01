import React from 'react';
import BigHeader from '../comps/BigHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import Footer from '../comps/Footer.js';
import pageText from '../assets/text/pageText.json';
import '../css/App.css';

export default class HomePage extends React.Component {
  render() {
      return (
      <div className="HomePage">
        <PublicNavbar />
        <BigHeader title="COMMUNITY XP" subtitle={pageText.splash.header}/>
        <div className="centre-text width-80 darkText">
          
        </div>
        <Footer />
      </div>
    );
  }
}
