import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import pageText from '../../assets/text/pageText.json';
import '../../css/App.css';
import '../../css/Resources.css';

// Not using matching quiz for now
// const takeQuiz = (
//   <Row className="spaceBottom darkText">
//     <Col xs={9}>
//       <p>Not sure where to start? Our quiz can help!</p>
//     </Col>
//     <Col className="right-text">
//       <Link to="/resources">
//         <Button className="darkText blueFill pinkShadow btn thinBorder darkBorder">
//           Take Quiz
//         </Button>
//       </Link>
//     </Col>
//   </Row>
// );

export default function ResourceControlPanel() {
  return (
    <div>
      <h2 className="bold">{pageText.resources.title}</h2>
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
          <Button className="darkText blueFill pinkShadow btn thinBorder darkBorder">
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