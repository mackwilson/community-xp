import React from 'react';
import '../css/App.css';

function BigHeader(props) {
  return (
    <div className="BigHeader" id="header">
      <h1 className="centre-text">{props.title}</h1>
      <p className="centre-text">{props.txt}</p>
    </div>
  );
}

export default BigHeader;
