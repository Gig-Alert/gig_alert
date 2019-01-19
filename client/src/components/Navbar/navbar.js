import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const GigNav = props => {
  return (
    <Navbar className="nav1" bg="dark" variant="dark">
      <Nav className="mr-auto">
        {/* <h1 className="brand-logo" /> */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/homes">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/bands">Bands</Link>
          </li>
          <li className="nav-item">
            <Link to="/musicians">Musicians</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/concerts">Concerts</Link>
          </li>
        </ul>
      </Nav>
    </Navbar>
  );
};
export default GigNav;
