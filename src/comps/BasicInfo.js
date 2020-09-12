import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';

const schema = Yup.object({
  password: Yup.string()
    .required("* Required field")
    .min(6, "Password must have at least 6 characters"),
  confirmPassword: Yup.string()
    .required("* Required field")
    .test('passwords-match', 'Passwords do not match', function(value) {
      return this.parent.password === value;
    }),
  username: Yup.string().required("* Required field"),
  firstName: Yup.string().required("* Required field"),
  lastName: Yup.string().required("* Required field"),
  email: Yup.string()
    .required("* Required field")
    .email("Invalid email")
    .matches(/^[A-Z0-9._%+-]+@uwaterloo.ca/i, "Invalid UWaterloo email"),
  acceptTerms: Yup.bool()
    .test("accept-terms", "* Please accept the terms", function(value) {
      return value === true;
    }).required("Please accept the terms")
});

export default class BasicInfo extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      handler: props.handler
    }
  }
  
  render () {
    return (
      <div className="BasicInfo">
        <Row className="justify-content-md-center">
          <h5>We're so excited to meet you! First, the boring details.</h5>
        </Row>
        <Formik
          validateOnChange={false}
          validationSchema={schema} 
          onSubmit={this.state.handler}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            acceptTerms: false,
            emailUpdates: false
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            isValid,
            isInvalid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>* First Name</Form.Label>
                  <Form.Control 
                    type="firstName" 
                    name="firstName" 
                    value={values.firstName} 
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>* Last Name</Form.Label>
                  <Form.Control 
                    type="lastName" 
                    name="lastName" 
                    value={values.lastName} 
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label>* Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="UWaterloo Email" 
                    value={values.email} 
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formUsername">
                  <Form.Label>* Username</Form.Label>
                  <Form.Control 
                    type="username" 
                    name="username"
                    placeholder="Pick a Username" 
                    value={values.username} 
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formPassword">
                  <Form.Label>* Password</Form.Label>
                  <Form.Control 
                    type="Password" 
                    name="password" 
                    placeholder="At least 6 characters" 
                    value={values.password} 
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formConfirmPassword">
                  <Form.Label>* Confirm Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    name="confirmPassword" 
                    value={values.confirmPassword} 
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group id="formEmailCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="I would like to get email updates from CommUnity XP"
                    name="acceptTerms"
                    value={values.emailUpdates}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group id="formAgreeTerms">
                  <Form.Check 
                    type="checkbox" 
                    name="acceptTerms"
                    value={values.acceptTerms}
                    onChange={handleChange}
                    isInvalid={!!errors.acceptTerms}
                    label="* I agree to CommUnity XP Terms and Conditions" 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.acceptTerms}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Row className="justify-content-md-center right-text">
                <Col>
                  <Button variant="dark" type="submit" className="btn darkText blueFill pinkShadow">
                    <FontAwesomeIcon icon={faArrowRight} />
                    {" "}Next
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
          </Formik>
      </div>          
    );
  }
}
