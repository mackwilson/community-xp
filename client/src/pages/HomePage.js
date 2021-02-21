import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import TeamIcons from '../comps/TeamIcons.js';
import img1 from '../assets/images/carousel-1.jpg';
import text from '../assets/text/pageText.json';
import '../css/App.css';

export default function HomePage () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
    <div className="HomePage">
      <CustomNav />
      <div className="section">
        <Carousel 
          fade={true}
          controls={false}
          interval={null}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h2>SECOND SLIDE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>
      
      <div className="section">
        <Row>
          <h2>WHAT'S GOING ON?</h2>
        </Row>
        <Row>
          <Button 
            className="btn blueShadow greyFill whiteText"
            onClick={() => handleSelect(0)}
          >Accessibility</Button>
          <Button 
            className="btn blueShadow greyFill whiteText"
            onClick={() => handleSelect(1)}
          >Toxic Academic Culture</Button>
          <Button 
            className="btn blueShadow greyFill whiteText"
            onClick={() => handleSelect(2)}
          >Suicide Ideation</Button>
        </Row>
      </div>
      <div className="section centre-text">
        [Stats]
      </div>
      
      <div className="section centre-text">
        [Quotes]
      </div>
      <div className="section centre-text">
        <h4>The Problem Is Blah blah adkljflsa;kjdf.</h4>
      </div>
      
      <div className="section">
        <Row>
          <h2>SO, WHAT CAN WE DO?</h2>
        </Row>
        <Carousel 
          fade={true}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h4>First Slide</h4>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>SECOND SLIDE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        <Row className="spaceTop">
          <p>Something must be done blah blah blah </p>
        </Row>
      </div>
      
      <div className="section">
        <Row>
          <h2>{text.home.uxp.title}</h2>
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
            <p>{text.home.uxp.sections[1].text}</p>
            <div>
              <Link to="/blog">
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
      
      <Footer />
    </div>
  );
}
