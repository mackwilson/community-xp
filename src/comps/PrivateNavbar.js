import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import '../css/App.css';

export default class PrivateNavbar extends React.Component {
  render() {
      return (
        <div className="Menu">
          <Navbar
            collapseOnSelect
            expand="md"
            variant="dark"
            fixed="top"
          >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavItem className="sosBtn">
                  <Link to="/sos" className="btn whiteShadow">
                    SOS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/">
                    Home
                  </Link>
                </NavItem>
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
                  <a href="#About">
                    About
                  </a>
                </NavItem>
                <NavItem>
                  <Link to="/profile">
                    Profile
                  </Link>
                </NavItem>
                <NavItem className="highlightNav">
                  <Link to="/" className="btn pinkShadow">
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
