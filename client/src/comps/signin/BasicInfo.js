import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../../css/App.css';

const schema = Yup.object({
  password: Yup.string()
    .required("* Please enter a password.")
    .min(6, "To keep things secure, your password must have at least 6 characters."),
  confirmPassword: Yup.string()
    .required("* Please confirm your password.")
    .test('passwords-match', 'Uh oh! Those passwords do not match. Please try again!', function(value) {
      return this.parent.password === value;
    }),
  username: Yup.string()
    .required("* You need a unique username for your UXP account.")
    .min(3, "Usernames have to be at least 3 characters long.")
    .max(49, "Usernames must be under 50 characters long."),
  email: Yup.string()
    .required("* Please enter an email address so we can verify your account.")
    .email("Uh oh! That doesn't look like a valid email. Try again!")
    .matches(/^[A-Z0-9._%+-]+@[A-Z]+.[A-Z]+/i, "Uh oh! That doesn't look like a valid email. Try again!"),
  acceptTerms: Yup.bool()
    .test("accept-terms", "* Please accept the terms and conditions to create an account.", function(value) {
      return value === true;
    }).required("Please accept the terms and conditions")
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
        <Row className="justify-content-md-center spaceBottom">
          <h4>Create your CommUnity XP account!</h4>
        </Row>
        <Formik
          validateOnChange={false}
          validationSchema={schema}
          onSubmit={this.state.handler}
          initialValues={{
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

                <Form.Group as={Col} controlId="formUsername">
                  <Form.Label><p>Username *</p></Form.Label>
                  <Form.Control
                    type="username"
                    name="username"
                    placeholder="Pick a Username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    className="darkBorder thinBorder greyFill-light pinkText-light"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                  <Form.Label><p>Email *</p></Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className="darkBorder thinBorder greyFill-light pinkText-light"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

              </Form.Row>


              <Form.Row>

                <Form.Group as={Col} controlId="formPassword">
                  <Form.Label><p>Password *</p></Form.Label>
                  <Form.Control
                    type="Password"
                    name="password"
                    placeholder="At least 6 characters"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    className="darkBorder thinBorder greyFill-light pinkText-light"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formConfirmPassword">
                  <Form.Label><p>Confirm Password *</p></Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    className="darkBorder thinBorder greyFill-light pinkText-light"
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
                    label="Yes, add me to the CommUnity XP email newsletter!"
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
                    label="I agree to CommUnity XP Terms and Conditions *"
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
