import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';

const schema = Yup.object({
  firstName: Yup.string().required("* Required field"),
  phone: Yup.string().required("* Required field"),
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
          <h5>Lastly, some important details for your safety.</h5>
        </Row>
        <Formik
          validateOnChange={false} 
          validationSchema={schema}
          onSubmit={this.state.handler}
          initialValues={{
            firstName: '',
            lastName: '',
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
              <Row className="justify-content-md-center">
                <h6>Please provide an emergency contact .</h6>
              </Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Label>* First Name</Form.Label>
                  <Form.Control 
                    type="firstName" 
                    name="firstName" 
                    placeholder="Their First Name" 
                    value={values.firstName} 
                    onChange={handleChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control 
                    type="lastName" 
                    name="lastName" 
                    placeholder="Their Last Name" 
                    value={values.lastName} 
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formPhone">
                  <Form.Label>* Phone Number</Form.Label>
                  <Form.Control 
                    type="phone" 
                    name="phone"
                    value={values.phone} 
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="formRelation">
                  <Form.Label>Relation to You</Form.Label>
                  <Form.Control 
                    type="relation" 
                    name="relation"
                    value={values.relation} 
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              
              <Row className="justify-content-md-center">
                <h6>In a crisis situation, what should be the first thing we prompt you to do?</h6>
              </Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formPrompt">
                  <Form.Control 
                    type="prompt" 
                    name="prompt"
                    placeholder="E.g: Call my emergency contact, etc" 
                    value={values.prompt} 
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form.Row>
              
              <Row className="justify-content-md-center">
                <h6>Which emergency service are you most comfortable with?</h6>
              </Row>
              <Form.Row>
                <Form.Group controlId="formSelect">
                  <Form.Control as="select">
                    <option>911 (police or paramedic services)</option>
                    <option>Alternative emergency services for mental health</option>
                    <option>My emergency contact</option>
                    <option>My therapist/counsellor</option>
                    <option>None</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group> 
              </Form.Row>           
          
              <Row className="justify-content-md-center">
                <Col>
                  <Button variant="dark" type="submit" className="btn-block btn blueOutline pinkShadow">
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
