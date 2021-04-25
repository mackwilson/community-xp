import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserHeaderBlock from './UserHeaderBlock.js';
import '../css/App.css';

export default function Header(props) {  
  const userLoggedIn = props.loggedIn || false;
  
  return (
    <div className="header">
      <Row>
        <Col xs={8}>
          <h1>{props.title}</h1>
          <h4>{props.subtitle}</h4>
        </Col>
        <Col>
          <UserHeaderBlock loggedIn={userLoggedIn} />
        </Col>
      </Row>
    </div>
  );
}
