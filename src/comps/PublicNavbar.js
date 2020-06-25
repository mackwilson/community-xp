import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { Link } from 'react-router-dom';
import logo from '../assets/uxp-logo-crop.png';
import '../css/App.css';

export default class PublicNavbar extends React.Component {
  render() {
      return (
        <div className="Menu">
          <Navbar
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
            fixed="top"
          >
            <Navbar.Brand>
              <Link to="/">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{'  '}
                CommUnity XP
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavItem className="sosBtn">
                  <Link to="/sos">
                    SOS
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/">
                    About
                  </Link>
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
                <NavItem className="highlightNav">
                  <Link to="/login">
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
