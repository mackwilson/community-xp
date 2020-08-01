import React from 'react';
import SmallHeader from '../comps/SmallHeader.js';
import PublicNavbar from '../comps/PublicNavbar.js';
import Footer from '../comps/Footer.js';
import BasicInfo from '../comps/BasicInfo.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';

export default class SignUpPage extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  signUp() {
    this.props.history.push('/profile');
  }
  
  render () {
    return (
      <div className="SignUpPage">
        <PublicNavbar />
        <div className="content dark">
          <SmallHeader title="Sign Up for CommUnity XP"/>
          <div className="signup-box">
            <BasicInfo />
          </div>
          <div className="signup-box centre-text">
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
