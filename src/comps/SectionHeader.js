import React from 'react';
import '../css/App.css';

function SectionHeader(props) {
  return (
    <div className="SectionHeader darkFill">
      <div className="left-text">
        <h2 className="pinkText">{props.title}</h2>
        <p className="whiteText">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
