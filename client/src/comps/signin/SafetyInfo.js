import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../../css/App.css';

const schema = Yup.object({
  firstName: Yup.string().max(100, "We love the enthusiasm, but please keep it under 100 characters"),
  phone: Yup.string().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i, "Please make sure you've use a valid phone number format."),
});

export default class SafetyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: props.handler
    }
  }

  render () {
    return (
      <div className="SafetyInfo">
        <Row className="justify-content-md-center">
          <h4>Lastly, some important details for your safety.</h4>
          <p className="centre-text width-80 spaceBottom italic">This section is optional and purely for informational purposes. Information from this section will go into your personalized SOS Plan. This information can be presented back to you during a crisis. CommUnity XP will NEVER take action on your behalf (including contacting your emergency contact).</p>
        </Row>
        <Formik
          validateOnChange={false}
          validationSchema={schema}
          onSubmit={this.state.handler}
          initialValues={{
            contactName: '',
            contactNumber: '',
            relation: '',
            phone: '',
            prompt: ''
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
                  <Form.Label><p>Emergency Contact Name</p></Form.Label>
                  <Form.Control
                    type="firstName"
                    name="firstName"
                    placeholder="Their First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                    className="darkBorder thinBorder greyFill-light pinkText-light"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formPhone">
                  <Form.Label><p>Emergency Contact Phone Number</p></Form.Label>
                  <Form.Control
                    type="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                    className="darkBorder thinBorder greyFill-light pinkText-light"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row className="spaceTop">
                <Form.Group as={Col} controlId="formCheckbox">
                  <Form.Label><p>In a crisis situation, which emergency services are you comfortable with? Please check all that apply.</p></Form.Label>
                  <Form.Check
                    type="checkbox"
                    id="911"
                    onChange={handleChange}
                    label="911 emergency services (eg. police or paramedics)"
                  />
                  <Form.Check
                    type="checkbox"
                    id="alt-emerg"
                    onChange={handleChange}
                    label="Alternative emergency services for mental health (eg. a crisis helpline)"
                  />
                  <Form.Check
                    type="checkbox"
                    id="alt-emerg"
                    onChange={handleChange}
                    label="My emergency contact"
                  />
                  <Form.Check
                    type="checkbox"
                    id="alt-emerg"
                    onChange={handleChange}
                    label="My therapist/counsellor"
                  />
                  <Form.Check
                    type="checkbox"
                    id="alt-emerg"
                    onChange={handleChange}
                    label="None, don't prompt me to reach out to anyone"
                  />
                  <Form.Check
                    type="checkbox"
                    id="alt-emerg"
                    onChange={handleChange}
                    label="Other, prompt me to take my own action"
                  />
                </Form.Group>
              </Form.Row>

              <Row className="justify-content-md-center centre-text">
                <Col>
                  <Button variant="dark" type="submit" className="btn darkText blueFill pinkShadow">
                    <FontAwesomeIcon icon={faCheck} />
                    {" "}Create Account
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
