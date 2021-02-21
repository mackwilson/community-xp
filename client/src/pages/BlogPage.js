import React from 'react';
import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
// import pageText from '../assets/text/pageText.json';
import '../css/App.css';

export default class BlogPage extends React.Component {
  render() {
      return (
      <div className="BlogPage">
        <CustomNav />
        <div className="header section noFill">
          <h1 className="centre-text">XP BLOG</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
