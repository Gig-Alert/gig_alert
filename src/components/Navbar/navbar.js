import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = props => {
  return (
    <nav className="nav-wrapper red darken 3">
      <div className="container">
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
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
