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
        <h2 className="pinkText centre-text">Log In</h2>
        <div className="login-box thinBorder pinkBorder darkFill whiteText">
          <Row className="justify-content-md-center">
            <div className="h8">Welcome back!</div>
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
                      <Form.Label>Username</Form.Label>
                      <Form.Control 
                        type="username" 
                        name="username"
                        value={values.username} 
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                        placeholder="type anything for now"
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
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        name="password"
                        value={values.password} 
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                        placeholder="type anything for now"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
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
        <div className="login-box darkFill centre-text pinkBorder thinBorder whiteText">
          <Row className="justify-content-md-center">
            <Col>
              Don't have an account? <Link to="/signup" className="whiteText">Sign up instead.</Link>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}


export default withRouter(LogInPage);