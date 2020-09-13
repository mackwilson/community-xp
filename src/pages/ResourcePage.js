import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import pageText from '../assets/text/pageText.json';
import '../css/App.css';

export default class ResourcePage extends React.Component {
  render() {
      return (
      <div className="ResourcePage">
        <PublicNavbar />
        <BigHeader title="Resources" txt={pageText.resources.header}/>
        <div className="left-text">
          <Tabs defaultActiveKey="category" id="uncontrolled-tab-example">
            <Tab eventKey="category" title="By Category">
              <p className="left-text">Resources by category </p>
            </Tab>
            <Tab eventKey="near" title="Near Me">
              <p className="left-text">Resources by location</p>
            </Tab>
            <Tab eventKey="search" title="Search">
              <p className="left-text">Search for resources in our database</p>
            </Tab>
            <Tab eventKey="quiz" title="Resource Matcher">
              <p className="left-text">Take the Resource Matcher quiz! Tell us about yourself and we will suggest a collection of resources.</p>
              <p className="left-text">If you're logged in, you can save this to your profile!</p>
            </Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    );
  }
}
