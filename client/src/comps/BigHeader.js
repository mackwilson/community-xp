import React from 'react';
import '../css/App.css';

function BigHeader(props) {
  return (
    <div className="header section noFill" id="BigHeader">
      <h1 className="centre-text">{props.title}</h1>
    </div>
  );
}

export default BigHeader;
