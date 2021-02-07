import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/App.css';
import logo from '../assets/logos/healthbar-cropped.png';

export default class PublicNavbar extends React.Component {
  render() {
      return (
        <div className="Menu">
          <Navbar
            collapseOnSelect
            expand="lg"
            variant="dark"
            fixed="top"
          >
            <Navbar.Brand href="/">
              <img
                src={logo}
                className="d-inline-block align-top logo"
                alt="Community XP logo, a purple  retro-looking 8-bit healthbar and heart."
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <FontAwesomeIcon icon={faBars} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavItem>
                  <a href="/">
                    Home
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/about">
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
                  <Link to="/login" className="btn blueShadow pinkFill whiteText">
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
