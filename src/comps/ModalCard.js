import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/App.css';

function ModalCard(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  /* 
    this modal card is designed to be very flexible for various areas of the site
    buttons, links & images can be used, and text can be broken or grouped
    
    the only prop passed should be "options"
    
    options should be an object like follows:
      {
        title: string (required), 
        subtitle: string (optional),
        photo: path/to/image (optional),
        alt: img alt string(required if photo is given),
        text: string OR array of strings (i.e. multiple blocks) (required),
        textSubHeading: string OR array of strings (optional),
        btnText: string OR array of strings (optional),
        btnLink: string OR array of strings (optional)
      } 
  */
  const o = props.options;
  
  const modalImage = o.photo 
    ? <img className="cardImg modalImg pinkBorder" src={o.photo} alt={o.alt} /> 
    : null;
    
  const cardImage = o.photo 
    ? <Card.Img variant="top" src={o.photo} alt={o.alt} className="cardImg pinkBorder" />
    : null;
    
  const title = o.subtitle 
    ? <Modal.Title centered className="whiteText centre-text">
        {o.title}
      </Modal.Title>
    : o.title;
    
  const modalSubtitle = o.subtitle 
    ? <div className="card-subtitle centre-text">
        {o.subtitle}
      </div> 
    : null;
    
  const cardSubtitle = o.subtitle 
    ? <Card.Subtitle className="mb-2 text-light">{o.subtitle}</Card.Subtitle>
    : null;
    
  let txt = [];
  if (typeof(o.text) == "string") {
    txt.push(makeModalContentBlock(1, o.btnText, o.btnLink, o.text, o.textSubHeading));
  } else {
    for (const [i, v] of o.text.entries()) {
      const subhead = o.textSubHeading && o.textSubHeading[i]
        ? o.textSubHeading[i]
        : null;
      const link = o.btnLink && o.btnLink[i] && o.btnText && o.btnText[i]
        ? o.btnLink[i]
        : null;
      const btn = o.btnText && o.btnText[i] && o.btnLink && o.btnLink[i]
        ? o.btnText[i]
        : null;
      txt.push(makeModalContentBlock(i, btn, link, v, subhead));
    };
    
  }
  
  return (
    <div>
      <Card className="card pinkBorder thinBorder">
        {cardImage}
        <Card.Body>
          <Card.Title>{o.title}</Card.Title>
          {cardSubtitle}
          <Button variant="outline-light" onClick={handleShow} className="spaceTop dark btn blueOutline pinkShadow">
            Read More
          </Button>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Body className="dark whiteText pinkBorder thinBorder">
              {modalImage}
              {title}
              {modalSubtitle}
              {txt}
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
  
  TODO: add support for images in this block to allow multiple images 
*/
function makeModalContentBlock(key, btnText, btnLink, text, subHeading) {
  const subhead = subHeading 
    ? <h5 className="pinkText">{subHeading}</h5> 
    : null;
    
  const btn = (btnText && btnLink) 
    ? <div className="centre-text">
        <Button variant="dark" href={btnLink} target="_blank" className="spaceTop dark blueOutline pinkShadow btn">
          {btnText}
        </Button>
      </div>
    : null;
    
  return(
    <div className="content spaceTop" key={key}>
      {subhead}
      <p>{text}</p>
      {btn}
    </div>
  );
}

export default ModalCard;
