import React from 'react';
import PublicNavbar from '../comps/PublicNavbar.js';
import BigHeader from '../comps/BigHeader.js';
import Footer from '../comps/Footer.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/App.css';

export default class ResourcePage extends React.Component {
  render() {
      const text = "One of our goals at UXP is to help you access the resources you need. This page is made for that!"
      return (
      <div className="ResourcePage">
        <PublicNavbar />
        <div className="content">
          <BigHeader title="Resources" txt={text}/>
          <div className="left-text">
            <Tabs defaultActiveKey="category" id="uncontrolled-tab-example">
              <Tab eventKey="category" title="By Category">
                <p className="left-text">Resources by category </p>
              </Tab>
              <Tab eventKey="near" title="Near Me">
                <p className="left-text">Resources by location</p>
              </Tab>
              <Tab eventKey="quiz" title="Resource Matcher">
                <p className="left-text">Take the Resource Matcher quiz! Tell us about yourself and we will suggest a collection of resources.</p>
              </Tab>
            </Tabs>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
