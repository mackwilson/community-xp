import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';

import CustomNav from '../comps/CustomNav.js';
import Footer from '../comps/Footer.js';
import ResourceControlPanel from '../comps/resources/ResourceControlPanel.js';
import ResourceList from '../comps/resources/ResourceList.js';

import '../css/App.css';
import '../css/Resources.css';


// Function based component to use Redux easier.
export default function ResourcePage() {
  return (
    <div className="ResourcePage">
      <CustomNav />

      <Row className="width-100">

        <Col xs={12} md={5} className="greyFill-light control-panel">
          <Fade>
              <ResourceControlPanel />
          </Fade>
        </Col>

        <Col xs={12} md={7} className="resource-list">
          <ResourceList />
        </Col>

      </Row>

      <Footer />
    </div>
  );
}
