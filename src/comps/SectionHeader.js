import React from 'react';
import '../css/App.css';

function SectionHeader(props) {
  return (
    <div className="SectionHeader">
      <div className="left-text">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
