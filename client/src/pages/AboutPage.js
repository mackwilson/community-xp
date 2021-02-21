import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import CustomNav from '../comps/CustomNav.js';
import TeamIcons from '../comps/TeamIcons.js';

export default class AboutPage extends React.Component {
  render() {
      return (
      <div className="AboutPage">
        <CustomNav />
        <div className="header section noFill">
          <h1 className="centre-text">ABOUT US</h1>
        </div>
        <div className="section">
          <h2 className="left-text">THE PROJECT</h2>
          <Row className="spaceTop">
            <Col>
              <p>Lorem ipsum dolor sit amet, alkdjfhkaldshflkadsjhfkldsjhfkladsjhf.</p> 
            </Col>
            <Col xs={4}>Image</Col>
          </Row>
        </div>
        
        <div className="section">
          <h2 className="right-text">THE TEAM</h2>
          <TeamIcons showModal={true}/>
          <Row className="spaceTop">
            <p>We are an awesome team of bright young creators and leaders, each with our own mental wellness story. We are all connected in various ways, from rugby teammates, classmates, or childhood friends. Click the icons below to check out each member of our team!</p>
          </Row>
        </div>
        
        <div className="section">
          <h2 className="centre-text">OUR VISION</h2>
          <Row className="spaceTop">
            <Col>
              <p>Lorem ipsum dolor sit amet, alkdjfhkaldshflkadsjhfkldsjhfkladsjhf.</p> 
            </Col>
            <Col xs={4}>Image</Col>
          </Row>
        </div>
        
        <div className="section">
          <h2 className="left-text">CONTACT US</h2>
          <Row className="spaceTop">
            <Col xs={2} >
              <Link to="/">
                <Button className="darkText blueFill pinkShadow btn">
                  Email Us
                </Button>
              </Link>
            </Col>
            <Col>
              <h4>Get in Touch!</h4>
              <p>Want more information? Interested in joining us? Shoot us an email and let us know!</p> 
            </Col>
          </Row>
          
          <Row className="spaceTop">
            <Col xs={2}>
              <Link to="/">
                <Button className="darkText blueFill pinkShadow btn">
                  Make a Donation
                </Button>
              </Link>
            </Col>
            <Col>
              <h4>Donate!</h4>
              <p>We are graciously accepting donations on our new Kickstarter page.</p> 
            </Col>
          </Row>
          <Row className="spaceTop">
            <Col xs={2}>Image of map or something</Col>
            <Col>
              <h4>Kitchener, ON</h4>
              <p>We work 100% remotely, but most of us are based out of the Kitchener-Waterloo region on Ontario, Canada.</p> 
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
