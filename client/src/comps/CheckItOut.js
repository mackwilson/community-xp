import React from 'react';

import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default function CheckItOut() {
  return (
    <div className="section centre-text">
      <Fade bottom>
        <h2 className="centre-text">CHECK IT OUT!</h2>
        <div>
          <Link to="/resources">
            <Button className="spaceTop darkText blueFill pinkShadow btn">
              Resources
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/xp">
            <Button className="spaceTop darkText blueFill pinkShadow btn">
              UXP CommUnity
            </Button>
          </Link>
        </div>
      </Fade>
      <div className="gap-div spaceBottom"/>
    </div>
  );
}