import React from 'react';
import ModalCard from './ModalCard.js';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/App.css';

function CardSection(props) {
  const cards = [];
  if (props.cards) {
    for (const [i, v] of props.cards.entries()) {
      cards.push(<ModalCard key={i} options={v}></ModalCard>);
    }
  }
  
  const txt = [];
  if (props.txt) {
    for (const[i, v] of props.txt.entries()) {
      txt.push(<p key={i}>{v}</p>);
    }
  }
  
  return (
    <>
      <div className="left-text">{txt}</div>
      <div className="centre-text">
        <CardGroup>{cards}</CardGroup>
      </div>
    </>
  )
}

export default CardSection;