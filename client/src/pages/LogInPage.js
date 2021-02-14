import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';

const schema = Yup.object({
  password: Yup.string().required(),
  username: Yup.string().required(),
});

class LogInPage extends React.Component { 
  logIn() {
    this.props.history.push('/profile');
  }
  
  render () {
    return (
      <div className="LogInPage">
        <CustomNav />
        <div className="login-box thinBorder greyFill pinkText-light">
          <Row className="justify-content-md-center">
            <h4>Welcome back!</h4>
          </Row>
          <Formik
            validationSchema={schema}
            onSubmit={this.logIn.bind(this)}
            initialValues={{
              username: '',
              password: '',
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="justify-content-md-center fluid">
                  <Col>
                    <Form.Group controlId="formGroupUsername">
                      <Form.Label><p>Username</p></Form.Label>
                      <Form.Control 
                        type="username" 
                        name="username"
                        value={values.username} 
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                        placeholder="type anything for now"
                        className="darkBorder thinBorder greyFill-light pinkText-light"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label><p>Password</p></Form.Label>
                      <Form.Control 
                        type="password" 
                        name="password"
                        value={values.password} 
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        placeholder="type anything for now"
                        className="darkBorder thinBorder greyFill-light pinkText-light"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="centre-text">
                  <Col>
                    <Button 
                      variant="dark" 
                      type="submit" 
                      className="btn-block btn darkText blueFill pinkShadow"
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      {" "}Log In
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
            </Formik>
        </div>
        <div className="login-box greyFill centre-text">
          <Row className="justify-content-md-center">
            <Col>
              <p className="pinkText-light">Don't have an account? <Link to="/signup" className="blueText">Sign up instead.</Link></p>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}


export default withRouter(LogInPage);