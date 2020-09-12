import React from 'react';
import '../css/App.css';

function BigHeader(props) {
  return (
    <div className="header darkFill" id="BigHeader">
      <h1 className="centre-text pinkText">{props.title}</h1>
      <p className="centre-text whiteText">{props.txt}</p>
    </div>
  );
}

export default BigHeader;
