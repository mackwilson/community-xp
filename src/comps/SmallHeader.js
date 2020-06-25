import React from 'react';
import '../css/App.css';

function SmallHeader(props) {
  return (
    <div className="SmallHeader">
      <h1 className="left-text">{props.title}</h1>
    </div>
  );
}

export default SmallHeader;
