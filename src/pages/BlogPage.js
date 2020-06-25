import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import '../css/App.css';

export default class BlogPage extends React.Component {
  render() {
      const text = "Read on as people share and reflect on their expriences with mental health and mental illness."
      return (
      <div className="BlogPage">
        <PublicNavbar />
        <BigHeader title="XP Blog" txt={text}/>
      </div>
    );
  }
}
