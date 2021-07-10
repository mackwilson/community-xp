import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import BasicInfo from '../comps/BasicInfo.js';
import PersonalInfo from '../comps/PersonalInfo.js';
import SafetyInfo from '../comps/SafetyInfo.js';

import '../css/App.css';
import '../css/SignUp.css';

const basicInfoState = {
  showBasicInfo: true,
  showPersonalInfo: false,
  showSafetyInfo: false
};

const personalInfoState = {
  showBasicInfo: false,
  showPersonalInfo: true,
  showSafetyInfo: false
};

const safetyInfoState = {
  showBasicInfo: false,
  showPersonalInfo: false,
  showSafetyInfo: true
}

export default class SignUpPage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      showBasicInfo: true,
      showPersonalInfo: false,
      showSafetyInfo: false
    }
  }
  
  signUp() {
    this.props.history.push('/profile');
  }
  
  showPersonalInfo() {
    this.setState(personalInfoState);
  }
  
  showBasicInfo() {
    this.setState(basicInfoState);
  }
  
  showSafetyInfo() {
    this.setState(safetyInfoState);
  }
  
  render() {
    const personalInfo = 
    <PersonalInfo 
      back={this.showBasicInfo.bind(this)} 
      handler={this.showSafetyInfo.bind(this)} 
    />;
    
    const basicInfo = 
    <BasicInfo 
      handler={this.showPersonalInfo.bind(this)} 
    />;
    
    const safetyInfo = 
    <SafetyInfo 
    back={this.showPersonalInfo.bind(this)} 
    handler={this.signUp.bind(this)} 
    />;
    
    const logInLink = 
    <div className="signup-box centre-text greyFill pinkText-light">
      <Row className="justify-content-md-center">
        <Col>
          <p>Already have an account? <Link to="/login" className="blueText">Log in instead!</Link></p>
        </Col>
      </Row>
    </div>;
    
    return (
      <div className="SignUpPage">
      
        <CustomNav />
        <Fade>
          <div className="signup-box greyFill pinkText-light">
            {this.state.showBasicInfo ? basicInfo : null}
            {this.state.showPersonalInfo ? personalInfo : null}
            {this.state.showSafetyInfo ? safetyInfo : null}
          </div>
        </Fade>
        
        <Fade>
          {this.state.showBasicInfo ? logInLink : null}
        </Fade>
        
        <Footer />
        
      </div>
    );
  }
}
