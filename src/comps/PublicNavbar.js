import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';

export default class PublicNavbar extends React.Component {
  render() {
      return (
        <div className="Menu">
          <Navbar
            collapseOnSelect
            expand="md"
            variant="dark"
            fixed="top"
          >
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavItem>
                  <Link className="btn blueShadow pinkFill" to="/sos">
                    SOS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <a href="/#About">
                    About
                  </a>
                </NavItem>
                <NavItem>
                  <Link to="/resources">
                    Resources
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/blog">
                    Blog
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login" className="btn pinkShadow blueOutline">
                    Log In
                  </Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}
