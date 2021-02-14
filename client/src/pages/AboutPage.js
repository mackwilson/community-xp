import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import CustomNav from '../comps/CustomNav.js';
import TeamIcons from '../comps/TeamIcons.js';
import Footer from '../comps/Footer.js';
import Header from '../comps/Header.js';
import text from '../assets/text/pageText.json';

export default class AboutPage extends React.Component {
  render() {
      return (
      <div className="AboutPage">
        <CustomNav />
        <div className="section">
          <Header 
            title={text.about.title}
            subtitle={text.about.subtitle}
          />
        </div>
        <div className="section">
          <Row>
            <Col xs={2}>
              Image
            </Col>
            <Col>
              <p>{text.about.project.text[0]}</p> 
              <p>{text.about.project.text[1]}</p> 
              <p>{text.about.project.text[2]}</p> 
              <p>{text.about.project.text[3]}</p> 
            </Col>
          </Row>
        </div>
        
        <div className="section">[read more arrow + more space]</div>
        
        <div className="section">
          <Row>
            <h2 className="left-text">{text.about.vision.title}</h2>
          </Row>
          <Row className="spaceTop width-80 centre-text">
            <h4 className="width-80">{text.about.vision.summary}</h4>
          </Row>
          <Row className="spaceTop">
            <p>{text.about.vision.text[0]}</p> 
            <p>{text.about.vision.text[1]}</p> 
          </Row>
        </div>
        
        <div className="section">
          <Row>
            <h2>{text.about.mission.title}</h2>
          </Row>
          <Row className="spaceTop width-80 centre-text">
            <h4 className="width-80">{text.about.mission.text}</h4>
          </Row>
        </div>
        
        <div className="section">
          <Row>
            <h2 className="left-text">{text.about.values.title}</h2>
          </Row>
          <Row className="spaceTop">
            <p>{text.about.values.text[0]}</p> 
            <p>{text.about.values.text[1]}</p> 
            <p>{text.about.values.text[2]}</p> 
            <p>{text.about.values.text[3]}</p> 
            <p>{text.about.values.text[4]}</p> 
            <p>{text.about.values.text[5]}</p> 
            <p>{text.about.values.text[6]}</p> 
            <p>{text.about.values.text[7]}</p> 
            <p>{text.about.values.text[8]}</p> 

          </Row>
        </div>
        
        <div className="section">
          <h2 className="left-text">{text.about.team.title}</h2>
          <Row className="spaceTop">
            <p>{text.about.team.text}</p>
          </Row>
          <TeamIcons showModal={true}/>
        </div>
        
        
        <div className="section">
          <h2 className="left-text">CONNECT WITH US!</h2>
          <Row className="spaceTop">
            <Col xs={2} >
              <Link to="/">
                <Button className="darkText blueFill pinkShadow btn">
                  Email Us
                </Button>
              </Link>
            </Col>
            <Col>
              <h4>Contact</h4>
              <p>Want more information? Interested in joining us? Shoot us an email and let us know!</p> 
            </Col>
          </Row>
          
          <Row className="spaceTop">
            <Col xs={2}>
              <Link to="/">
                <Button className="darkText blueFill pinkShadow btn">
                  View Kickstarter
                </Button>
              </Link>
            </Col>
            <Col>
              <h4>Donate</h4>
              <p>We are graciously accepting donations on our new Kickstarter page.</p> 
            </Col>
          </Row>
          <Row className="spaceTop">
            <Col xs={2}>Image of map or something</Col>
            <Col>
              <h4>Locate</h4>
              <p>We work 100% remotely, but most of us are based out of the Kitchener-Waterloo region on Ontario, Canada.</p> 
            </Col>
          </Row>
        </div>
        <div className="section centre-text">
          <h2 className="centre-text">CHECK IT OUT!</h2>
          <div>
            <Link to="/resources">
              <Button className="spaceTop darkText blueFill pinkShadow btn">
                Resources
              </Button>
            </Link>
          </div>
          <div>
            <Link to="/xp">
              <Button className="spaceTop darkText blueFill pinkShadow btn">
                UXP CommUnity
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
