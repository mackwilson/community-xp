import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import TeamIcons from '../comps/TeamIcons.js';
import Header from '../comps/Header.js';
import text from '../assets/text/pageText.json';
import '../css/App.css';

export default function HomePage () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const problemsBlock = <div className="spaceTop">
    <p>{text.home.problem.problems[0]}</p>
    <p>{text.home.problem.problems[1]}</p>
  </div>
  
  const impactBlock = <div>
    <p>{text.home.problem.impacts[0]}</p>
    <p>{text.home.problem.impacts[1]}</p>
    <p>{text.home.problem.impacts[2]}</p>
  </div>

    return (
    <div className="HomePage">
      <CustomNav />
      <div className="section">
        <Header 
          title={text.home.title}
          subtitle={text.home.subtitle}
        />
      </div>
      
      <div className="section">[read more arrow + more space]</div>
      
      <div className="section">
        <Row>
          <h2>{text.home.problem.title}</h2>
        </Row>
        <Row>
          <Button 
            className="btn blueShadow greyFill whiteText"
            onClick={() => handleSelect(0)}
          ><h4>Problems</h4></Button>
          [arrow]
          <Button 
            className="btn blueShadow greyFill whiteText"
            onClick={() => handleSelect(1)}
          ><h4>Student Impact</h4></Button>
        </Row>
        
        {index === 0 ? problemsBlock : impactBlock}
        
        <Row className="spaceTop centre-text">
          <h4 className="width-80 spaceTop">{text.home.problem.summary}</h4>
        </Row>
        
      </div>
          
      <div className="section">
        <Row>
          <h2>{text.home.needs.title}</h2>
        </Row>
        
        <Row>
          <Row>
            <Col xs={3}>
              <h4>{text.home.needs.needs[0].title}</h4>
            </Col>
            <Col>
              <p>{text.home.needs.needs[0].text}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h4>{text.home.needs.needs[1].title}</h4>
            </Col>
            <Col>
              <p>{text.home.needs.needs[1].text}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <h4>{text.home.needs.needs[2].title}</h4>
            </Col>
            <Col>
              <p>{text.home.needs.needs[2].text}</p>
            </Col>
          </Row>
        </Row>
      
        <Row className="spaceTop centre-text">
          <h4 className="width-80 spaceTop">{text.home.needs.summary}</h4>
        </Row>
      </div>
      
      <div className="section">
        <Row>
          <h2>{text.home.uxp.title}</h2>
        </Row>
        <Row>
          <p>{text.home.uxp.blurb[0]}</p>
          <p>{text.home.uxp.blurb[1]}</p>
        </Row>
        <Row className="spaceTop">
          <Col xs={4}>Image</Col>
          <Col>
            <h4>{text.home.uxp.sections[0].title}</h4>
            <p>{text.home.uxp.sections[0].text[0]}</p> 
            <p>{text.home.uxp.sections[0].text[1]}</p>
            <Link to="/resources">
              <Button className="spaceTop darkText blueFill pinkShadow btn">
                {text.home.uxp.sections[0].button}
              </Button>
            </Link>
          </Col>
        </Row>
        <div className="gap-div" />
        
        <Row className="spaceTop">
          <Col>
            <h4>{text.home.uxp.sections[1].title}</h4>
            <p>{text.home.uxp.sections[1].text[0]}</p>
            <p>{text.home.uxp.sections[1].text[1]}</p>
            <div>
              <Link to="/xp">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  {text.home.uxp.sections[1].button[0]}
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  {text.home.uxp.sections[1].button[1]}
                </Button>
              </Link>
            </div>
          </Col>
          <Col xs={4}>Image</Col>
        </Row>
        <div className="gap-div" />

        <Row className="spaceTop">
          <Col xs={4}>Image</Col>
          <Col>
            <h4>{text.home.uxp.sections[2].title}</h4>
            <p>{text.home.uxp.sections[2].text[0]}</p> 
            <p>{text.home.uxp.sections[2].text[1]}</p>
            <p>{text.home.uxp.sections[2].text[2]}</p>
            <div>
              <Link to="/resources">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  {text.home.uxp.sections[2].button[0]}
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  {text.home.uxp.sections[2].button[1]}
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        
      </div>
      
      <div className="section">
        <Row>
          <h2>{text.home.team.title}</h2>
        </Row>
        <TeamIcons showModal={false} />
        <Row className="spaceTop">
          <p>{text.home.team.text}</p>
          <Link to="/about">
            <Button className="spaceTop darkText blueFill pinkShadow btn">
              {text.home.team.button}
            </Button>
          </Link>
        </Row>
      </div>
      
      <div className="section centre-text">
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
      </div>
      
      <Footer />
    </div>
  );
}
