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
            <Button className="spaceTop darkText blueFill pinkShadow btn thinBorder darkBorder">
              Resources
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/xp">
            <Button className="spaceTop darkText blueFill pinkShadow btn thinBorder darkBorder">
              UXP CommUnity
            </Button>
          </Link>
        </div>
      </Fade>
      <div className="gap-div spaceBottom"/>
    </div>
  );
}