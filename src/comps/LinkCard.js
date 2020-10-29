import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import '../css/App.css';

function LinkCard(props) {
  const cardSubtitle = props.subtitle 
    ? <Card.Subtitle className="mb-2 text-light h8 spaceTop">{props.subtitle}</Card.Subtitle>
    : null;
    
  return (
    <div>
      <Card
        className="mb-2 card linkCard pinkText greyFill"
      >
        <Card.Body>
          <Card.Title className="h7">{props.title}</Card.Title>
          {cardSubtitle}
          <Link to={props.link}>
            <Button className="spaceTop darkText blueFill pinkShadow btn">
              Read More
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LinkCard;
