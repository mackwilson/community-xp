import React from 'react';
import '../css/App.css';

function SmallHeader(props) {
  return (
    <div className="header darkFill" id="SmallHeader">
      <h1 className="pinkText">{props.title}</h1>
    </div>
  );
}

export default SmallHeader;
