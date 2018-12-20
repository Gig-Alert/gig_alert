import React from "react";
import "./navbar.css";

const Navbar = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        {props.label}
      </a>
    </li>
    <a>Band Stuff</a>
  </ul>
);

export default Navbar;
