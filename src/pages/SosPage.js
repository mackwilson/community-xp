import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class SosPage extends React.Component {
  render() {
      const text = "This is the SOS page. Navigate here at any time to see suggested actions to take when you are feeling unsafe or in crisis."
      return (
      <div className="SosPage">
        <PublicNavbar />
        <div className="content">
          <BigHeader title="SOS Page" txt={text}/>

          <Footer />
        </div>
      </div>
    );
  }
}
