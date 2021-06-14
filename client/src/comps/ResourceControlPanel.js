import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import pageText from '../assets/text/pageText.json';
import '../css/App.css';
import '../css/Resources.css';

export default function ResourceControlPanel() {
  return (
    <div>
      <h2 className="blueText">{pageText.resources.title}</h2>
      <Row className="spaceBottom darkText">
        <Col xs={9}>
          <p>Not sure where to start? Our quiz can help!</p>
        </Col>
        <Col className="right-text">
          <Link to="/resources">
            <Button className="darkText blueFill pinkShadow btn">
              Take Quiz
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="spaceTop">
        <Col xs={9}>
          <Form.Group controlId="formGroupSearch">
            <Form.Control 
              type="search" 
              name="search"
              placeholder="Search and press Enter"
              className="darkBorder thinBorder whiteFill darkText"
            />
          </Form.Group>
        </Col>
        <Col className="right-text">
          <Button className="darkText blueFill pinkShadow btn">
            Go
          </Button>
        </Col>
      </Row>
      <div className="whiteFill filter-box darkText">
        Filters...
      </div>
    </div>
  )
}