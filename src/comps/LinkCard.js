import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import '../css/App.css';

function LinkCard(props) {
  return (
    <div>
      <Link to={props.link}>
        <Card
          className="mb-2 card linkCard pinkShadow"
        >
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default LinkCard;
