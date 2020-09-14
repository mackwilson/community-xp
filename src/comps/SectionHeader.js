import React from 'react';
import '../css/App.css';

function SectionHeader(props) {
  return (
    <div className="SectionHeader">
      <div className="left-text">
        <h3 className="pinkText">{props.title}</h3>
        <p className="whiteText">{props.text}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
