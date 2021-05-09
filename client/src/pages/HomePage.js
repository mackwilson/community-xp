import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import TeamIcons from '../comps/TeamIcons.js';
import Header from '../comps/Header.js';
import ReadMoreArrow from '../comps/ReadMoreArrow.js';
import CheckItOut from '../comps/CheckItOut.js';
import LandAckModal from '../comps/LandAckModal.js';

import text from '../assets/text/pageText.json';

import '../css/App.css';

export default function HomePage () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  const problemsBlock = <Fade className="spaceTop">
    <p>{text.home.problem.problems[0]}</p>
    <p>{text.home.problem.problems[1]}</p>
  </Fade>
  
  const impactBlock = <Fade className="spaceTop">
    <p>{text.home.problem.impacts[0]}</p>
    <p>{text.home.problem.impacts[1]}</p>
    <p>{text.home.problem.impacts[2]}</p>
  </Fade>

    return (
    <div className="HomePage">
      <CustomNav />
      
      <LandAckModal />
      
      <Fade>
        <Header 
          title={text.home.title}
          subtitle={text.home.subtitle}
        />
      </Fade>
      
      <ReadMoreArrow />
      
      <Fade bottom>
        <div className="section">
          <Row>
            <h2>{text.home.problem.title}</h2>
          </Row>
          <Row className="spaceBottom">
            <Button 
              className="btn blueShadow greyFill pinkText-light"
              onClick={() => handleSelect(0)}
            ><h4>Problems</h4></Button>
            <h4>{" "}<FontAwesomeIcon icon={faLongArrowAltRight} />{" "}</h4>
            <Button 
              className="btn blueShadow greyFill pinkText-light"
              onClick={() => handleSelect(1)}
            ><h4>Student Impact</h4></Button>
          </Row>
          
          {index === 0 ? problemsBlock : impactBlock}
          
          <Row className="spaceTop centre-text">
            <h4 className="width-80 spaceTop">{text.home.problem.summary}</h4>
          </Row>
          
        </div>
      </Fade>
      
      <Fade bottom>
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
      </Fade>
      
      <div className="section">
        <Fade bottom>
          <Row>
            <h2>{text.home.uxp.title}</h2>
          </Row>
          <Row>
            <p>{text.home.uxp.blurb[0]}</p>
            <p>{text.home.uxp.blurb[1]}</p>
          </Row>
        </Fade>

        <div className="gap-div" />
        <Fade bottom>
          <Row className="spaceTop">
            <Col xs={4}>Image</Col>
            <Col>
              <h4>{text.home.uxp.sections[0].title}</h4>
              <p>{text.home.uxp.sections[0].text[0]}</p> 
              <p>{text.home.uxp.sections[0].text[1]}</p>
              <Row className="justify-content-md-center">
                <Link to="/resources">
                  <Button className="spaceTop darkText blueFill pinkShadow btn">
                    {text.home.uxp.sections[0].button}
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Fade>
        <div className="gap-div" />
        
        <Fade bottom>
          <Row className="spaceTop">
            <Col>
              <h4>{text.home.uxp.sections[1].title}</h4>
              <p>{text.home.uxp.sections[1].text[0]}</p>
              <p>{text.home.uxp.sections[1].text[1]}</p>
              <Row className="justify-content-md-center">
                <Link to="/xp">
                  <Button className="spaceTop darkText blueFill pinkShadow btn">
                    {text.home.uxp.sections[1].button[0]}
                  </Button>
                </Link>
              </Row>
              <Row className="justify-content-md-center">
                <Link to="/signup">
                  <Button className="spaceTop darkText blueFill pinkShadow btn">
                    {text.home.uxp.sections[1].button[1]}
                  </Button>
                </Link>
              </Row>
            </Col>
            <Col xs={4}>Image</Col>
          </Row>
        </Fade>
        <div className="gap-div" />
        
        <Fade bottom>
          <Row className="spaceTop">
            <Col xs={4}>Image</Col>
            <Col>
              <h4>{text.home.uxp.sections[2].title}</h4>
              <p>{text.home.uxp.sections[2].text[0]}</p> 
              <p>{text.home.uxp.sections[2].text[1]}</p>
              <p>{text.home.uxp.sections[2].text[2]}</p>
              <Row className="justify-content-md-center">
                <Link to="/resources">
                  <Button className="spaceTop darkText blueFill pinkShadow btn">
                    {text.home.uxp.sections[2].button[0]}
                  </Button>
                </Link>
              </Row>
              <Row className="justify-content-md-center">
                <Link to="/signup">
                  <Button className="spaceTop darkText blueFill pinkShadow btn">
                    {text.home.uxp.sections[2].button[1]}
                  </Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Fade>
        
      </div>
      
      <div className="section">
        <Fade bottom>
          <Row>
            <h2>{text.home.team.title}</h2>
          </Row>
          <TeamIcons showModal={false} />
          <Row className="spaceTop">
            <p>{text.home.team.text}</p>
          </Row>
          <Row className="justify-content-md-center">
            <Link to="/about">
              <Button className="spaceTop darkText blueFill pinkShadow btn">
                {text.home.team.button}
              </Button>
            </Link>
          </Row>
        </Fade>
      </div>
      
      <CheckItOut />
      
      <Footer />
    </div>
  );
}
