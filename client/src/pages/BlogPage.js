import React from 'react';
import CustomNav from '../comps/CustomNav.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import pageText from '../assets/text/pageText.json';
import '../css/App.css';

export default class BlogPage extends React.Component {
  render() {
      return (
      <div className="BlogPage">
        <CustomNav />
        <BigHeader title="XP Blog" subtitle={pageText.blog.header}/>
        <Footer />
      </div>
    );
  }
}
