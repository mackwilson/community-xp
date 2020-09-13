import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import pageText from '../assets/text/pageText.json';
import '../css/App.css';

export default class BlogPage extends React.Component {
  render() {
      return (
      <div className="BlogPage">
        <PublicNavbar />
        <BigHeader title="XP Blog" txt={pageText.blog.header}/>
        <Footer />
      </div>
    );
  }
}
