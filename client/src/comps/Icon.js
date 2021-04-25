import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/App.css';

function Icon(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const o = props.content;
  
  const modalImage = o && o.photo 
    ? <img className="cardImg modalImg pinkBorder" src={o.photo} alt={o.imgAlt} /> 
    : null;
    
  const cardImage = o && o.photo 
    ? <Card.Img variant="top" src={o.photo} alt={o.imgAlt} className="cardImg" />
    : null;
    
  const modalSubtitle = o && o.role 
    ? <div className="centre-text whiteText spaceTop h9">
        {o.role}
      </div> 
    : null;
    
  const cardSubtitle = o && o.role 
    ? <Card.Subtitle className="mb-2 text-dark"><p>{o.role}</p></Card.Subtitle>
    : null;
  
  const modalShowBtn = props.showModal === true
  ? <Button 
      variant="outline-light" 
      onClick={handleShow} 
      className="spaceTop blueFill btn darkText pinkShadow"
    >
      More...
    </Button>
  : null;
    
  let txt = makeModalContentBlock(
    props.id, 
    "Email " + o.name, 
    o.email, 
    o.text, 
    "Pronouns: " + o.pronouns
  );
  
  return (
    <div>
      <Card className="card noFill">
        {cardImage}
        <Card.Body>
          <Card.Title><h3>{o.name}</h3></Card.Title>
          {cardSubtitle}
          {modalShowBtn}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton />
            <Modal.Body className="darkFill whiteText">
              <Row>
                <Col>
                  {modalImage}
                  <Modal.Title centered className="pinkText centre-text">
                    <h3>{o.name}</h3>
                  </Modal.Title>
                  <p>{modalSubtitle}</p>
                </Col>
                <Col md={7}>
                  {txt}
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
          
        </Card.Body>
      </Card>
    </div>
  );
}

/*
  This function is a util that returns a block with:
  - subheading (if provided)
  - one chunk of text 
  - link button (if provided)  
*/
function makeModalContentBlock(key, btnText, btnLink, text, subHeading) {
  const subhead = subHeading 
    ? <p className="pinkText">{subHeading}</p> 
    : null;
    
  const btn = (btnText && btnLink) 
    ? <div className="centre-text">
        <Button href={btnLink} target="_blank" className="darkText blueFill pinkShadow btn">
          {btnText}
        </Button>
      </div>
    : null;
    
  return(
    <div className="content" key={key}>
      {subhead}
      <p>{text}</p>
      {btn}
    </div>
  );
}

export default Icon;
