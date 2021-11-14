import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserHeaderBlock from './UserHeaderBlock.js';
import '../css/App.css';
import '../css/Header.css';

export default function Header(props) {
  const userLoggedIn = props.loggedIn || false;

  return (
    <div className="header greyFill">
      <Row>
        <Col md={8}>
          <h1 className="pinkText-light">{props.title}</h1>
          <h4 className="pinkText-light">{props.subtitle}</h4>
        </Col>
        <Col>
          <UserHeaderBlock loggedIn={userLoggedIn} />
        </Col>
      </Row>
    </div>
  );
}
