import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./lognav.css";

const LogNav = props => {
  return (
    <Navbar className="nav2" bg="dark" variant="dark">
      <Nav className="mr-auto">
        {/* <h1 className="brand-logo" /> */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Nav>
    </Navbar>
  );
};
export default LogNav;
