import React from 'react';
import '../css/App.css';

function BigHeader(props) {
  return (
    <div className="header section greyFill" id="BigHeader">
      <h1 className="centre-text pinkText">{props.title}</h1>
      <h6 className="centre-text whiteText">{props.subtitle}</h6>
    </div>
  );
}

export default BigHeader;
