import React from "react";
import "./navbar.css";

const Navbar = props => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="/"
          onClick={() => props.handlePageChange("Home")}
          className="nav-link"
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/bands"
          onClick={() => props.handlePageChange("Bands")}
          className="nav-link"
        >
          Bands
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/musicians"
          onClick={() => props.handlePageChange("musicians")}
          className="nav-link"
        >
          Musicians
        </a>
      </li>
    </ul>
  );
};
export default Navbar;
