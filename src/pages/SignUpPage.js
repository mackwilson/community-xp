import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import PublicNavbar from '../comps/PublicNavbar.js';
import SmallHeader from '../comps/SmallHeader.js';
import Footer from '../comps/Footer.js';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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

export default class SignUpPage extends React.Component {  
  signUp() {
    this.props.history.push('/profile');
  }
  
  render () {
    return (
      <div className="SignUpPage">
        <PublicNavbar />
        <div className="content">
          <SmallHeader title="Sign Up for Community XP"/>
          <div className="signup-box">
            <Formik
              validateOnChange={false} 
              validationSchema={schema}
              onSubmit={this.signUp.bind(this)}
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                username: '',
                password: '',
                program: '',
                year: '',
                acceptTerms: false
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
                  <Row className="justify-content-md-left">
                    <h6>Basic Information</h6>
                  </Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control 
                        type="firstName" 
                        name="firstName" 
                        placeholder="Enter First Name" 
                        value={values.firstName} 
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.firstName}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formLastName">
                      <Form.Label>LastName</Form.Label>
                      <Form.Control 
                        type="lastName" 
                        name="lastName" 
                        placeholder="Enter Last Name" 
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
                      <Form.Label>Email</Form.Label>
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
                  
                  <Row className="left-text">
                    <h6>Account Information</h6>
                  </Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formUsername">
                      <Form.Label>Username</Form.Label>
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
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="Password" 
                        name="password" 
                        placeholder="Password" 
                        value={values.password} 
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
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
                    <Form.Group id="formAgreeTerms">
                      <Form.Check 
                        type="checkbox" 
                        name="acceptTerms"
                        value={values.acceptTerms}
                        onChange={handleChange}
                        isInvalid={!!errors.acceptTerms}
                        label="I agree to CommUnity XP Terms and Conditions" 
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.acceptTerms}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  
                  <Row className="left-text">
                    <h6>Optional Information</h6>
                  </Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formPassword">
                      <Form.Label>Program</Form.Label>
                      <Form.Control 
                        type="program" 
                        name="program" 
                        placeholder="Your Program" 
                        value={values.program} 
                        onChange={handleChange}
                        isInvalid={!!errors.program}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.program}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPasswordConf">
                      <Form.Label>Year</Form.Label>
                      <Form.Control 
                        type="password" 
                        name="passwordConf" 
                        placeholder="Your Year" 
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formHometown">
                      <Form.Label>Hometown</Form.Label>
                      <Form.Control 
                        type="hometown" 
                        name="hometown"
                        placeholder="Your Hometown" 
                        value={values.hometown} 
                        onChange={handleChange}
                        isInvalid={!!errors.hometown}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.hometown}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control 
                        type="country" 
                        name="country"
                        placeholder="Country" 
                        value={values.country} 
                        onChange={handleChange}
                        isInvalid={!!errors.country}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.country}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group id="formEmailCheckbox">
                      <Form.Check type="checkbox" label="Subscribe to email updates about CommUnityXP" />
                    </Form.Group>
                  </Form.Row>
                  
                  <Row className="justify-content-md-center">
                    <Col>
                      <Button variant="dark" type="submit" className="btn-block">
                        Create Account
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
              </Formik>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
