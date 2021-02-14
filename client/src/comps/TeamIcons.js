import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

import Icon from './Icon.js';
import icons from '../assets/text/teamIcons.js';
import '../css/App.css';

function TeamIcons(props) {
  const cards = [];
  if (icons) {
    for (const [i, v] of icons.entries()) {
      cards.push(
        <Icon 
          key={i}
          id={i} 
          content={v} 
          showModal={props.showModal}
        />
      );
    }
  }
  
  return (
    <div className="centre-text">
      <CardGroup>{cards}</CardGroup>
    </div>
  )
}

export default TeamIcons;