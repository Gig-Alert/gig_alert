import React from "react";
import { Link } from "react-router-dom";

const LogNav = props => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default LogNav;
