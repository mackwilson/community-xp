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
  
  const image = o.photo 
    ? <img className="modalImg" src={o.photo} alt={o.alt} /> 
    : null;
    
  const title = o.subtitle 
    ? o.title + ":" 
    : o.title;
    
  const subtitle = o.subtitle 
    ? <Modal.Title className="pinkText pl-2">
        {o.subtitle}
      </Modal.Title> 
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
      <Card className="card pinkShadow">
        <Card.Img variant="top" src={o.photo} alt={o.alt} className="cardImage" />
        <Card.Body>
          <Card.Title>{o.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-light">{o.subtitle}</Card.Subtitle>
          <Button variant="outline-light" onClick={handleShow} className="cardBtn btn whiteShadow">
            See More
          </Button>

          <Modal show={show} onHide={handleClose} centered >
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
              {subtitle}
            </Modal.Header>
            <Modal.Body>
              {image}
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
    ? <h5>{subHeading}</h5> 
    : null;
    
  const btn = (btnText && btnLink) 
    ? <div className="centre-text">
        <Button variant="dark" href={btnLink} target="_blank" className="cardBtn dark pinkShadow btn">
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

export default ModalCard;
