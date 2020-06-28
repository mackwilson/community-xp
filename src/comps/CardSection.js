import React from 'react';
import ModalCard from '../comps/ModalCard.js';
import CardGroup from 'react-bootstrap/CardGroup';
import '../css/App.css';

function CardSection(props) {
  const cards = [];
  for (const [i, v] of props.cards.entries()) {
    if (v.photo) {
      cards.push(<ModalCard key={i} title={v.title} subtitle={v.subtitle} img={v.photo} alt={v.alt} txt={v.text}></ModalCard>);
    } else {
      cards.push(<ModalCard key={i} title={v.title} subtitle={v.subtitle} txt={v.text}></ModalCard>);
    }
  }
  
  const txt = [];
  for (const[i, v] of props.txt.entries()) {
    txt.push(<p key={i}>{v}</p>);
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