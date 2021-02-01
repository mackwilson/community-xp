import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import '../css/App.css';
import logo from '../assets/logos/healthbar-cropped.png';

export default class PrivateNavbar extends React.Component {
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavItem>
                  <Link to="/resources">
                    Resources
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/xp">
                    XP
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/blog">
                    Blog
                  </Link>
                </NavItem>
                <NavItem>
                  <a href="/about">
                    About
                  </a>
                </NavItem>
                <NavItem>
                  <Link to="/profile">
                    Profile
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/" className="btn blueFill pinkShadow darkText">
                    Log Out
                  </Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}
