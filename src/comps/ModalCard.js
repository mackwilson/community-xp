import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/App.css';

function LinkCard(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const image = props.img? <img className="modalImg" src={props.img} alt={props.img} /> : null;
  
  return (
    <div>
      <Card bg="dark">
        <Card.Img variant="top" src={props.img} alt={props.alt} className="cardImage" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-light">{props.subtitle}</Card.Subtitle>
          <Button variant="outline-light" onClick={handleShow} className="cardBtn">
            See More
          </Button>

          <Modal show={show} onHide={handleClose} centered >
            <Modal.Header closeButton>
              <Modal.Title>{props.title}:</Modal.Title>
              <Modal.Title className="pinkText pl-2">{props.subtitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {image}
              {props.txt}
            </Modal.Body>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LinkCard;
