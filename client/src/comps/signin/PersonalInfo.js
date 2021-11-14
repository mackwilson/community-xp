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
  bio: Yup.string()
    .max(280, "We love the enthusiasm, but please keep your bio under 280 characters!"),
  uni: Yup.string()
    .max(100, "We love the enthusiasm, but please keep it under 100 characters"),
  location: Yup.string()
    .max(100, "We love the enthusiasm, but please keep it under 100 characters"),
  lastName: Yup.string()
    .max(100, "We love the enthusiasm, but please keep it under 100 characters"),
  firstName: Yup.string()
    .max(100, "We love the enthusiasm, but please keep it under 100 characters"),
});

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: props.handler
    }
  }
  render () {
    return (
      <div className="PersonalInfo">
        <Row className="justify-content-md-center centre-text">
          <h4>Account created! Now you can personalize it a bit.</h4>
          <p className="centre-text width-80 spaceBottom italic">This section is optional. Click Next to skip, or when you're done. If provided, this information will be displayed on your XP profile for other users to see. CommUnity XP does not use this information anywhere else.</p>
        </Row>
        <Formik
          validateOnChange={false}
          validationSchema={schema}
          onSubmit={this.state.handler}
          initialValues={{
            firstName: '',
            lastName: '',
            uni: '',
            location: '',
            bio: ''
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
            <Form.Row className="spaceTop">
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label><p>First Name</p></Form.Label>
                <Form.Control
                  type="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                  className="darkBorder thinBorder greyFill-light pinkText-light"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label><p>Last Name</p></Form.Label>
                <Form.Control
                  type="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                  className="darkBorder thinBorder greyFill-light pinkText-light"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label><p>University</p></Form.Label>
                <Form.Control
                  type="text"
                  name="uni"
                  value={values.uni}
                  isInvalid={!!errors.uni}
                  onChange={handleChange}
                  className="darkBorder thinBorder greyFill-light pinkText-light"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.uni}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="formPasswordConf">
                <Form.Label><p>Location</p></Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={values.location}
                  isInvalid={!!errors.location}
                  onChange={handleChange}
                  className="darkBorder thinBorder greyFill-light pinkText-light"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.location}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formHometown">
                <Form.Label><p>Bio</p></Form.Label>
                <Form.Control
                  type="text"
                  name="bio"
                  value={values.bio}
                  onChange={handleChange}
                  isInvalid={!!errors.bio}
                  placeholder="Introduce yourself in 280 characters or less!"
                  className="darkBorder thinBorder greyFill-light pinkText-light"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.bio}
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








