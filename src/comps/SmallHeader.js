import React from 'react';
import '../css/App.css';

function SmallHeader(props) {
  return (
    <div className="SmallHeader" id="header">
      <h1>{props.title}</h1>
    </div>
  );
}

export default SmallHeader;
