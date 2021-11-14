import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import CustomNav from '../comps/CustomNav.js';
import TeamIcons from '../comps/TeamIcons.js';
import Footer from '../comps/Footer.js';
import Header from '../comps/Header.js';
import ReadMoreArrow from '../comps/ReadMoreArrow.js';
import CheckItOut from '../comps/CheckItOut.js';

import text from '../assets/text/pageText.json';

export default class AboutPage extends React.Component {
  render() {
      return (
      <div className="AboutPage">
        <CustomNav />
        <Fade>
          <Header
            title={text.about.title}
            subtitle={text.about.subtitle}
          />
        </Fade>

        <ReadMoreArrow />


        <div className="section">
          <Fade bottom>
            <Row>
              <h2 className="left-text">{text.about.project.title}</h2>
            </Row>
            <Row>
              <Col xs={2}>
                Timeline ?
              </Col>
              <Col>
                <p>{text.about.project.text[0]}</p>
                <p>{text.about.project.text[1]}</p>
                <p>{text.about.project.text[2]}</p>
                <p>{text.about.project.text[3]}</p>
                <p>{text.about.project.text[4]}</p>
              </Col>
            </Row>
          </Fade>
        </div>

        <div className="section">
          <Fade bottom>
            <Row>
              <h2 className="left-text">{text.about.vision.title}</h2>
            </Row>
            <Row className="spaceTop width-80 centre-text">
              <h4 className="width-80">{text.about.vision.summary}</h4>
            </Row>
            <Row className="spaceTop">
              <p>{text.about.vision.text[0]}</p>
              <p>{text.about.vision.text[1]}</p>
            </Row>
          </Fade>
        </div>

        <div className="section">
          <Fade bottom>
            <Row>
              <h2>{text.about.mission.title}</h2>
            </Row>
            <Row className="spaceTop width-80 centre-text">
              <h4 className="width-80">{text.about.mission.text}</h4>
            </Row>
          </Fade>
        </div>

        <div className="section">
          <Fade bottom>

            <Row>
              <h2 className="left-text">{text.about.values.title}</h2>
            </Row>

            <Row className="spaceTop centre-text">
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[0]}</h4></Button>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[1]}</h4></Button>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[2]}</h4></Button>
              </Col>
            </Row>

            <Row className="spaceTop centre-text">
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[3]}</h4></Button>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[4]}</h4></Button>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[5]}</h4></Button>
              </Col>
            </Row>

            <Row className="spaceTop centre-text">
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[6]}</h4></Button>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[7]}</h4></Button>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn blueShadow greyFill pinkText-light"
                  onClick={() => null}
                ><h4>{text.about.values.text[8]}</h4></Button>
              </Col>
            </Row>

          </Fade>
        </div>

        <div className="section">
          <Fade bottom>

            <Row>
              <h2 className="left-text">{text.about.team.title}</h2>
            </Row>

            <Row className="spaceTop">
              <p>{text.about.team.text}</p>
            </Row>

            <TeamIcons showModal={true}/>

          </Fade>
        </div>


        <div className="section">
          <Fade bottom>
            <h2 className="left-text">CONNECT WITH US!</h2>
            <Row className="spaceTop">
              <Col xs={2} >
                <Link to="/">
                  <Button className="darkText blueFill pinkShadow btn thinBorder darkBorder">
                    {text.about.contact.sections[0].button}
                  </Button>
                </Link>
              </Col>
              <Col>
                <h4>{text.about.contact.sections[0].title}</h4>
                <p>{text.about.contact.sections[0].text}</p>
              </Col>
            </Row>

            <Row className="spaceTop">
              <Col xs={2}>
                <Link to="/">
                  <Button className="darkText blueFill pinkShadow btn thinBorder darkBorder">
                    {text.about.contact.sections[1].button}
                  </Button>
                </Link>
              </Col>
              <Col>
              <h4>{text.about.contact.sections[1].title}</h4>
              <p>{text.about.contact.sections[1].text}</p>
              </Col>
            </Row>
            <Row className="spaceTop">
              <Col xs={2}>Image of map or something</Col>
              <Col>
                <h4>{text.about.contact.sections[2].title}</h4>
                <p>{text.about.contact.sections[2].text}</p>
              </Col>
            </Row>
          </Fade>
        </div>

        <CheckItOut />

        <Footer />

      </div>
    );
  }
}
