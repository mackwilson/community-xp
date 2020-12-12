import React from 'react';
import '../css/App.css';

function SmallHeader(props) {
  return (
    <div className="header centre-text" id="SmallHeader">
      <h2 className="pinkText">{props.title}</h2>
    </div>
  );
}

export default SmallHeader;
