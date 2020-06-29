import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import '../css/App.css';

export default class BlogPage extends React.Component {
  render() {
      const text = "Read on as people share and reflect on their expriences with mental health and mental illness."
      return (
      <div className="BlogPage">
        <PublicNavbar />
        <div className="content">
          <BigHeader title="XP Blog" txt={text}/>
          <Footer />
        </div>
      </div>
    );
  }
}
