import React from 'react';
import SmallHeader from '../comps/SmallHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import Footer from '../comps/Footer.js';
import BasicInfo from '../comps/BasicInfo.js';
import PersonalInfo from '../comps/PersonalInfo.js';
import SafetyInfo from '../comps/SafetyInfo.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default class SignUpPage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      element: <BasicInfo handler={this.showPersonalInfo.bind(this)} />
    }
  }
  
  signUp() {
    this.props.history.push('/profile');
  }
  
  showPersonalInfo() {
    this.setState({
      element: <PersonalInfo back={this.showBasicInfo.bind(this)} handler={this.showSafetyInfo.bind(this)} />
    });
  }
  
  showBasicInfo() {
    this.setState({
      element: <BasicInfo handler={this.showPersonalInfo.bind(this)} />
    });
  }
  
  showSafetyInfo() {
    this.setState({
      element: <SafetyInfo back={this.showPersonalInfo.bind(this)} handler={this.signUp.bind(this)} />
    });
  }
  
  render() {
    return (
      <div className="SignUpPage">
        <PublicNavbar />
        <div className="content whiteText">
          <SmallHeader title="Sign Up"/>
          <div className="signup-box pinkBorder darkFill thinBorder">
            {this.state.element}
          </div>
          <div className="signup-box centre-text darkFill pinkBorder thinBorder">
            <Row className="justify-content-md-center">
              <Col>
                Already have an account? <Link to="/login">Log in instead!</Link>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
