import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import PublicNavbar from '../comps/PublicNavbar.js';
import Footer from '../comps/Footer.js';
import img1 from '../assets/images/carousel-1.jpg';
import '../css/App.css';

export default function HomePage () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
    <div className="HomePage">
      <PublicNavbar />
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
          <h2>INTRODUCING: COMMUNITY XP</h2>
        </Row>
        <Row className="spaceTop">
          <Col xs={4}>Image</Col>
          <Col>
            <h4>Frictionless Access</h4>
            <p>The friction that we face trying to access mental health supports can be extremely discouraging. We wanted to provide a way to get all the necessary information with the least amount of friction as possible.</p> 
            <p>So, we built our own one-of-a-kind, curated database of mental wellness resources for the Kitchener-Waterloo Region. Each resource is categorized and tagged with critical information on its format, access, and services. For those who aren't even sure where to start, our Resource Matching quiz can help!</p>
            <Link to="/resources">
              <Button className="spaceTop darkText blueFill pinkShadow btn">
                See the Resources
              </Button>
            </Link>
          </Col>
        </Row>
        <div className="gap-div" />
        
        <Row className="spaceTop">
          <Col>
            <h4>Promoting Community</h4>
            <p>Everyone talks about breaking down the stigma around mental illness, but we wanted to walk the walk. Our Blog and XP Page [Coming Soon] is a gamified anonymous online community centred around sharing experiences and making it clear that you're not alone.</p>
            <div>
              <Link to="/blog">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  Read the Blog
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  Create Your XP Profile
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
            <h4>Nonviolent Crisis Management</h4>
            <p>The current systems in place to manage mental health crises are failing, especially when it comes to racialized or neuro-atypical members of our community. We recognize the countless lives stolen by police brutality and systemic racism, and we know we need a better solution than a disclaimer in the footer of our site saying "Call 9-1-1 in case of emergency".</p> 
            <p>Notice that cool-looking "SOS" button hovering in the top right? It'll be there on every page for every user. Clicking it gives you the option to view Crisis resources near you in our Resources database - many of which are free and just a phone call away. If you are logged in, you will also see prompts for a customized crisis plan that YOU design.</p>
            <div>
              <Link to="/resources">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  See SOS Resources
                </Button>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <Button className="spaceTop darkText blueFill pinkShadow btn">
                  Create Your Crisis Plan
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        
      </div>
      
      <div className="section">
        <Row>
          <h2>WHO ARE WE?</h2>
        </Row>
        <Row>
          [8-bit headshots]
        </Row>
        <Row className="spaceTop">
          <p>We are an awesome team of bright young creators and leaders, each with our own mental wellness story. We work 100% remotely, but most of us are based out of Kitchener-Waterloo, ON, Canada. Click the button below to read our story or connect with us on the About page.</p>
          <Link to="/about">
            <Button className="spaceTop darkText blueFill pinkShadow btn">
              Learn More About UXP
            </Button>
          </Link>
        </Row>
      </div>
      
      
      <Footer />
      
    </div>
  );
}
