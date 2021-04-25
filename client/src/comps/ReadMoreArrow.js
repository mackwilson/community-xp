import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function ReadMoreArrow() {
  
  const readMore = () =>{
    window.scrollTo({top: 800, behavior: 'smooth'});
  };
  
  return (
    <div className="width-80">
      <Row className="centre-text greyText italic">
        <Col onClick={readMore}>
          <h3>Scroll to Explore</h3>
          <h3><FontAwesomeIcon icon={faChevronDown} /></h3>
        </Col>
      </Row>
    </div>
  );
}

export default ReadMoreArrow;