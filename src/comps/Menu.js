import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../assets/cuxp-logo.png';
import '../css/App.css';

export default class Menu extends React.Component {
  render() {
      return (
        <div className="Menu">
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
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
                <Nav.Link>
                  <Link to="/sos">
                    SOS
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/resources">
                    Resources
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup">
                    Sign Up
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/login">
                    Log In
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/profile">
                    Profile
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    );
  }
}
