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
        <Row className="justify-content-md-center">
          <h5>Now (optionally) tell us a bit about yourself!</h5>
        </Row>
        <Formik
          validateOnChange={false} 
          validationSchema={schema}
          onSubmit={this.state.handler}
          initialValues={{
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
            <Form.Row>
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Program</Form.Label>
                <Form.Control 
                  type="program" 
                  name="program" 
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
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formHometown">
                <Form.Label>Hometown</Form.Label>
                <Form.Control 
                  type="hometown" 
                  name="hometown"
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
                  value={values.country} 
                  onChange={handleChange}
                  isInvalid={!!errors.country}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Row className="justify-content-md-center right-text">
              <Col>
                <Button variant="dark" type="submit" className="btn blueFill pinkShadow">
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








