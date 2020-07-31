import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PublicNavbar from '../comps/PublicNavbar.js';
import SmallHeader from '../comps/SmallHeader.js';
import Footer from '../comps/Footer.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, withRouter } from 'react-router-dom';
import '../css/App.css';

const schema = Yup.object({
  password: Yup.string().required(),
  username: Yup.string().required(),
});

class LogInPage extends React.Component { 
  logIn() {
    this.props.history.push('/xp');
  }
  
  render () {
    return (
      <div className="LogInPage">
        <PublicNavbar />
        <div className="content dark">
          <SmallHeader title="Log In" />
          <div className="login-box">
          <div className="centre-text">
            <p>Welcome back!</p>
          </div>
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
                <div className="centre-text">
                  <Button variant="dark" type="submit" className="dark btn blueOutline pinkShadow">
                    Log In
                  </Button>
                </div>
              </Form>
            )}
            </Formik>
            <div className="centre-text">
              <p>Don't have an account? <Link to="/signup" className="pinkText">Sign up</Link> instead</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}


export default withRouter(LogInPage);